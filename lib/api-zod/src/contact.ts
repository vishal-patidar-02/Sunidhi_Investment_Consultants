import { z } from "zod";

export const contactServiceTitles = [
  "Mutual Fund Advisory",
  "SIP Planning",
  "Portfolio Management",
  "Wealth Management",
  "Retirement Planning",
  "Tax Saving Investments",
  "Mediclaim & Health Insurance",
  "Loan Assistance",
] as const;

export const ContactServiceSchema = z.enum(contactServiceTitles);
export type ContactService = z.infer<typeof ContactServiceSchema>;

export const ContactInquiryRequestSchema = z.object({
  name: z.string().trim().min(2).max(120),
  phone: z
    .string()
    .trim()
    .min(8)
    .max(20)
    .regex(/^\+?[0-9][0-9\s\-()]{7,19}$/),
  email: z.string().trim().email().max(160).optional().or(z.literal("")),
  service: ContactServiceSchema,
  message: z.string().trim().min(5).max(2000),
  consent: z.literal(true),
  captchaToken: z.string().trim().min(10).max(4096),
  website: z.string().max(200).optional(),
});

export type ContactInquiryRequest = z.infer<typeof ContactInquiryRequestSchema>;

export const ContactInquiryResponseSchema = z.object({
  inquiryId: z.string(),
  notificationQueued: z.boolean(),
});

export type ContactInquiryResponse = z.infer<typeof ContactInquiryResponseSchema>;
