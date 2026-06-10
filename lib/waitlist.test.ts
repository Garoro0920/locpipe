import { describe, expect, it } from "vitest";
import { parseWaitlistInput } from "./waitlist";

describe("parseWaitlistInput", () => {
  it("accepts a minimal valid input", () => {
    const result = parseWaitlistInput({ email: "dev@example.com" });
    expect(result).toEqual({
      ok: true,
      value: {
        email: "dev@example.com",
        project: null,
        releaseWindow: null,
        lang: "ja",
      },
    });
  });

  it("accepts full input and normalizes the email to lowercase", () => {
    const result = parseWaitlistInput({
      email: "  Dev@Example.COM ",
      project: "RPG in Unity, JA -> EN/zh-CN",
      releaseWindow: "within_6_months",
      lang: "en",
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.email).toBe("dev@example.com");
      expect(result.value.project).toBe("RPG in Unity, JA -> EN/zh-CN");
      expect(result.value.releaseWindow).toBe("within_6_months");
      expect(result.value.lang).toBe("en");
    }
  });

  it.each(["", "no-at-sign", "a@b", "a @b.com", "a@b.c"])(
    "rejects invalid email %j",
    (email) => {
      expect(parseWaitlistInput({ email })).toEqual({
        ok: false,
        error: "invalid_email",
      });
    },
  );

  it("rejects when the honeypot field is filled", () => {
    const result = parseWaitlistInput({
      email: "dev@example.com",
      website: "http://spam.example",
    });
    expect(result).toEqual({ ok: false, error: "spam" });
  });

  it("rejects an unknown releaseWindow value", () => {
    const result = parseWaitlistInput({
      email: "dev@example.com",
      releaseWindow: "tomorrow",
    });
    expect(result).toEqual({ ok: false, error: "invalid_input" });
  });

  it("rejects non-object payloads", () => {
    expect(parseWaitlistInput(null)).toEqual({
      ok: false,
      error: "invalid_input",
    });
    expect(parseWaitlistInput("x")).toEqual({
      ok: false,
      error: "invalid_input",
    });
  });

  it("truncates an overly long project description", () => {
    const result = parseWaitlistInput({
      email: "dev@example.com",
      project: "x".repeat(5000),
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.project?.length).toBe(1000);
    }
  });

  it("treats an unknown lang as ja", () => {
    const result = parseWaitlistInput({ email: "dev@example.com", lang: "fr" });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.lang).toBe("ja");
    }
  });
});
