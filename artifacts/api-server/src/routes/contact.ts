import { Router, type IRouter, type Request } from "express";
import { db } from "@workspace/db";
import { contactInquiriesTable } from "@workspace/db/schema/contact-inquiries";
import { ContactInquiryRequestSchema } from "@workspace/api-zod/contact";
import { HttpError } from "../lib/http-errors";
import { hashIp, redactContact } from "../lib/privacy";
import { logger } from "../lib/logger";

const router: IRouter = Router();

function normalizePhone(phone: string) {
  return phone.replace(/[^\d+]/g, "");
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string") {
    return forwardedFor.split(",")[0]?.trim();
  }

  return req.ip;
}

router.post("/contact", async (req, res, next) => {
  try {
    const parseResult = ContactInquiryRequestSchema.safeParse(req.body);
    if (!parseResult.success) {
      throw new HttpError(
        400,
        "validation_failed",
        "Please check the form fields and try again.",
      );
    }

    const body = parseResult.data;
    if (body.website) {
      throw new HttpError(400, "bot_detected", "Unable to accept this request.");
    }

    const ip = getClientIp(req);

    const [inquiry] = await db
      .insert(contactInquiriesTable)
      .values({
        name: body.name,
        phone: normalizePhone(body.phone),
        email: body.email || null,
        service: body.service,
        message: body.message,
        source: "website",
        metadata: {
          ipHash: hashIp(ip),
          userAgent: req.get("user-agent")?.slice(0, 300),
          origin: req.get("origin")?.slice(0, 300),
        },
      })
      .returning();

    if (!inquiry) {
      throw new HttpError(500, "inquiry_not_saved", "Inquiry could not be saved.");
    }

    logger.info(
      {
        inquiryId: inquiry.id,
        service: inquiry.service,
        phone: redactContact(inquiry.phone),
        email: redactContact(inquiry.email ?? undefined),
      },
      "Contact inquiry accepted",
    );

    res.status(201).json({
      inquiryId: inquiry.id,
      notificationQueued: false,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
