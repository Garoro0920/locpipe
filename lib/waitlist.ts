export const RELEASE_WINDOWS = [
  "within_3_months",
  "within_6_months",
  "within_1_year",
  "undecided",
] as const;

export type ReleaseWindow = (typeof RELEASE_WINDOWS)[number];

export type WaitlistEntry = {
  email: string;
  project: string | null;
  releaseWindow: ReleaseWindow | null;
  lang: "ja" | "en";
};

export type ParseResult =
  | { ok: true; value: WaitlistEntry }
  | { ok: false; error: "invalid_email" | "invalid_input" | "spam" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_PROJECT_LENGTH = 1000;

export function parseWaitlistInput(data: unknown): ParseResult {
  if (typeof data !== "object" || data === null) {
    return { ok: false, error: "invalid_input" };
  }
  const d = data as Record<string, unknown>;

  // Honeypot: real users never see this field; bots fill it in.
  if (typeof d.website === "string" && d.website.trim() !== "") {
    return { ok: false, error: "spam" };
  }

  const email = typeof d.email === "string" ? d.email.trim() : "";
  if (
    email.length === 0 ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_RE.test(email)
  ) {
    return { ok: false, error: "invalid_email" };
  }

  let project: string | null = null;
  if (typeof d.project === "string" && d.project.trim() !== "") {
    project = d.project.trim().slice(0, MAX_PROJECT_LENGTH);
  }

  let releaseWindow: ReleaseWindow | null = null;
  if (typeof d.releaseWindow === "string" && d.releaseWindow !== "") {
    if (!(RELEASE_WINDOWS as readonly string[]).includes(d.releaseWindow)) {
      return { ok: false, error: "invalid_input" };
    }
    releaseWindow = d.releaseWindow as ReleaseWindow;
  }

  const lang = d.lang === "en" ? "en" : "ja";

  return {
    ok: true,
    value: { email: email.toLowerCase(), project, releaseWindow, lang },
  };
}
