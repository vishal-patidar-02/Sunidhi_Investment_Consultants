import type { ContactInquiry } from "@workspace/db/schema/contact-inquiries";
import { env } from "./env";
import { logger } from "./logger";
import { redactContact } from "./privacy";

export type NotificationResult = {
  queued: boolean;
};

export async function notifyInquiryCreated(
  inquiry: ContactInquiry,
): Promise<NotificationResult> {
  if (!env.notificationWebhookUrl || env.notificationRecipients.length === 0) {
    logger.info(
      {
        inquiryId: inquiry.id,
        notificationConfigured: false,
      },
      "Inquiry persisted without notification provider",
    );
    return { queued: false };
  }

  const payload = {
    to: env.notificationRecipients,
    subject: `New ${inquiry.source} inquiry: ${inquiry.service}`,
    inquiry: {
      id: inquiry.id,
      name: inquiry.name,
      phone: inquiry.phone,
      email: inquiry.email,
      service: inquiry.service,
      message: inquiry.message,
      createdAt: inquiry.createdAt,
    },
  };

  try {
    const response = await fetch(env.notificationWebhookUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      logger.warn(
        {
          inquiryId: inquiry.id,
          status: response.status,
          phone: redactContact(inquiry.phone),
          email: redactContact(inquiry.email ?? undefined),
        },
        "Inquiry notification provider rejected request",
      );
      return { queued: false };
    }

    return { queued: true };
  } catch (err) {
    logger.warn({ err, inquiryId: inquiry.id }, "Inquiry notification failed");
    return { queued: false };
  }
}
