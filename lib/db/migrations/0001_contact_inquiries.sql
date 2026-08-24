CREATE TABLE IF NOT EXISTS "contact_inquiries" (
  "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
  "name" text NOT NULL,
  "phone" text NOT NULL,
  "email" text,
  "service" text NOT NULL,
  "message" text NOT NULL,
  "status" text DEFAULT 'new' NOT NULL,
  "source" text DEFAULT 'website' NOT NULL,
  "metadata" jsonb DEFAULT '{}'::jsonb,
  "created_at" timestamp with time zone DEFAULT now() NOT NULL
);

CREATE INDEX IF NOT EXISTS "contact_inquiries_created_at_idx" ON "contact_inquiries" ("created_at");
CREATE INDEX IF NOT EXISTS "contact_inquiries_status_idx" ON "contact_inquiries" ("status");
