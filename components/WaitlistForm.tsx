"use client";

import { useState } from "react";
import { copy, type Lang } from "@/lib/copy";

type Status = "idle" | "submitting" | "success" | "error";

export function WaitlistForm({ lang }: { lang: Lang }) {
  const t = copy[lang].form;
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.get("email"),
          project: formData.get("project"),
          releaseWindow: formData.get("releaseWindow"),
          website: formData.get("website"),
          lang,
        }),
      });
      const body = (await res.json()) as { ok: boolean; error?: string };
      if (body.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          body.error === "invalid_email" ? t.errorEmail : t.errorServer,
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(t.errorServer);
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-6 text-emerald-300"
      >
        {t.success}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Honeypot — hidden from humans, filled by bots */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-zinc-400">{t.emailLabel}</span>
        <input
          type="email"
          name="email"
          required
          placeholder={t.emailPlaceholder}
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-zinc-400">{t.projectLabel}</span>
        <textarea
          name="project"
          rows={2}
          maxLength={1000}
          placeholder={t.projectPlaceholder}
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500 focus:outline-none"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-zinc-400">{t.releaseLabel}</span>
        <select
          name="releaseWindow"
          defaultValue=""
          className="rounded-md border border-zinc-700 bg-zinc-900 px-3 py-2.5 text-zinc-100 focus:border-emerald-500 focus:outline-none"
        >
          <option value="">{t.releaseOptions.unselected}</option>
          <option value="within_3_months">{t.releaseOptions.within_3_months}</option>
          <option value="within_6_months">{t.releaseOptions.within_6_months}</option>
          <option value="within_1_year">{t.releaseOptions.within_1_year}</option>
          <option value="undecided">{t.releaseOptions.undecided}</option>
        </select>
      </label>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-1 rounded-md bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400 disabled:opacity-60"
      >
        {status === "submitting" ? t.submitting : t.submit}
      </button>
    </form>
  );
}
