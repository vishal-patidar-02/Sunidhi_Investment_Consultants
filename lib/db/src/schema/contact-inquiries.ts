import {
  index,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const inquiryStatusValues = [
  "new",
  "reviewed",
  "closed",
] as const;

export const contactInquiriesTable = pgTable(
  "contact_inquiries",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    phone: text("phone").notNull(),
    email: text("email"),
    service: text("service").notNull(),
    message: text("message").notNull(),
    status: text("status").notNull().default("new"),
    source: text("source").notNull().default("website"),
    metadata: jsonb("metadata")
      .$type<{
        ipHash?: string;
        userAgent?: string;
        origin?: string;
      }>()
      .default({}),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    createdAtIdx: index("contact_inquiries_created_at_idx").on(table.createdAt),
    statusIdx: index("contact_inquiries_status_idx").on(table.status),
  }),
);

export type ContactInquiry = typeof contactInquiriesTable.$inferSelect;
export type NewContactInquiry = typeof contactInquiriesTable.$inferInsert;
