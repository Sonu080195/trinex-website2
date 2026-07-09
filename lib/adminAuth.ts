// lib/adminAuth.ts
// Signs and verifies admin session tokens using HMAC-SHA256 via Web Crypto,
// which works in both Edge middleware and regular API routes — no extra
// dependencies needed (no jsonwebtoken package required).

const SESSION_DURATION_MS = 1000 * 60 * 60 * 12; // 12 hours

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error("Missing ADMIN_SESSION_SECRET environment variable.");
  }
  return secret;
}

async function hmac(message: string, secret: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, enc.encode(message));
  return Buffer.from(signature).toString("base64url");
}

/** Creates a signed session token containing an expiry timestamp. */
export async function createSessionToken(): Promise<string> {
  const secret = getSecret();
  const expiry = Date.now() + SESSION_DURATION_MS;
  const payload = String(expiry);
  const signature = await hmac(payload, secret);
  return `${payload}.${signature}`;
}

/** Verifies a session token — checks both the signature and expiry. */
export async function verifySessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const secret = getSecret();
  const expectedSignature = await hmac(payload, secret);

  if (signature !== expectedSignature) return false;

  const expiry = parseInt(payload, 10);
  if (isNaN(expiry) || Date.now() > expiry) return false;

  return true;
}