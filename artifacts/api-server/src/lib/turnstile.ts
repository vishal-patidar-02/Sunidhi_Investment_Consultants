import { env, isProduction } from "./env";
import { HttpError } from "./http-errors";

type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export async function verifyTurnstileToken(token: string, remoteIp?: string) {
  if (!env.turnstileSecretKey) {
    if (isProduction()) {
      throw new HttpError(
        503,
        "captcha_not_configured",
        "Captcha verification is not configured.",
      );
    }

    if (token === "dev-turnstile-token") {
      return;
    }

    throw new HttpError(
      400,
      "captcha_development_token_required",
      "Captcha is not configured for development. Use the development token.",
    );
  }

  const formData = new FormData();
  formData.set("secret", env.turnstileSecretKey);
  formData.set("response", token);
  if (remoteIp) {
    formData.set("remoteip", remoteIp);
  }

  let response: Response;
  try {
    response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
        signal: AbortSignal.timeout(8000),
      },
    );
  } catch {
    throw new HttpError(
      503,
      "captcha_unavailable",
      "Captcha verification is temporarily unavailable.",
    );
  }

  if (!response.ok) {
    throw new HttpError(
      503,
      "captcha_unavailable",
      "Captcha verification is temporarily unavailable.",
    );
  }

  const result = (await response.json()) as TurnstileResponse;
  if (!result.success) {
    throw new HttpError(400, "captcha_invalid", "Captcha verification failed.");
  }
}
