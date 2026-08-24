import type {
  ContactInquiryRequest,
  ContactInquiryResponse,
} from '@workspace/api-zod/contact';

export type ContactApiErrorCode =
  | 'validation_failed'
  | 'captcha_invalid'
  | 'captcha_not_configured'
  | 'captcha_development_token_required'
  | 'captcha_unavailable'
  | 'rate_limited'
  | 'bot_detected'
  | 'network_error'
  | 'internal_error'
  | 'unknown_error';

export class ContactApiError extends Error {
  constructor(
    public readonly code: ContactApiErrorCode,
    message: string,
    public readonly status?: number,
  ) {
    super(message);
  }
}

export async function submitContactInquiry(
  payload: ContactInquiryRequest,
): Promise<ContactInquiryResponse> {
  let response: Response;

  try {
    response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ContactApiError(
      'network_error',
      'We could not reach the server. Please check your connection and try again.',
    );
  }

  const body = await response.json().catch(() => undefined) as
    | { code?: ContactApiErrorCode; message?: string }
    | ContactInquiryResponse
    | undefined;

  if (!response.ok) {
    throw new ContactApiError(
      (body && 'code' in body && body.code) || 'unknown_error',
      (body && 'message' in body && body.message) || 'Unable to submit the form right now.',
      response.status,
    );
  }

  return body as ContactInquiryResponse;
}
