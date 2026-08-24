import { z } from "zod";

export const contactServiceTitles = [
  "Portfolio Management",
  "Wealth Management",
  "Term Insurance",
  "Mediclaim & Health Insurance",
  "Personal Accident Insurance & Claims Assistance",
  "Mutual Fund Advisory",
  "Retirement Planning",
  "Child Education Planning",
  "Tax Saving Investments",
  "Warehouse & Other General Insurance Solutions",
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
  website: z.string().max(200).optional(),
});

export type ContactInquiryRequest = z.infer<typeof ContactInquiryRequestSchema>;

export const ContactInquiryResponseSchema = z.object({
  inquiryId: z.string(),
  notificationQueued: z.boolean(),
});

export type ContactInquiryResponse = z.infer<typeof ContactInquiryResponseSchema>;
