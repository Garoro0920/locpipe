import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { parseWaitlistInput } from "@/lib/waitlist";

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const parsed = parseWaitlistInput(data);
  if (!parsed.ok) {
    if (parsed.error === "spam") {
      // Pretend success so bots don't learn about the honeypot.
      return Response.json({ ok: true });
    }
    return Response.json(
      { ok: false, error: parsed.error },
      { status: 400 },
    );
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error("waitlist: Supabase env vars are not configured");
    return Response.json(
      { ok: false, error: "not_configured" },
      { status: 503 },
    );
  }

  const { email, project, releaseWindow, lang } = parsed.value;
  const { error } = await supabase.from("waitlist").insert({
    email,
    project,
    release_window: releaseWindow,
    lang,
  });

  if (error) {
    // 23505 = unique violation: already registered. Idempotent success.
    if (error.code === "23505") {
      return Response.json({ ok: true });
    }
    console.error("waitlist insert failed:", error.code, error.message);
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
