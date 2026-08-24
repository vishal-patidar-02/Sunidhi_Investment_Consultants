import { createHash } from "node:crypto";

const salt = process.env.IP_HASH_SALT || "development-ip-hash-salt";

export function hashIp(ip?: string) {
  if (!ip) {
    return undefined;
  }

  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export function redactContact(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  if (value.includes("@")) {
    const [name, domain] = value.split("@");
    return `${name?.slice(0, 2) ?? ""}***@${domain ?? "***"}`;
  }

  return `${value.slice(0, 3)}***${value.slice(-2)}`;
}
