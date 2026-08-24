function readList(name: string) {
  return (process.env[name] ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  corsAllowedOrigins: readList("CORS_ALLOWED_ORIGINS"),
  publicSiteUrl: process.env.PUBLIC_SITE_URL ?? "",
  notificationWebhookUrl: process.env.NOTIFICATION_WEBHOOK_URL ?? "",
  notificationRecipients: readList("NOTIFICATION_RECIPIENTS"),
};

export function isProduction() {
  return env.nodeEnv === "production";
}
