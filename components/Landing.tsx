import Link from "next/link";
import { copy, type Lang } from "@/lib/copy";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Landing({ lang }: { lang: Lang }) {
  const t = copy[lang];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <div className="font-mono text-lg font-bold tracking-tight text-zinc-50">
          LocPipe
          <span className="ml-2 rounded border border-emerald-500/50 px-1.5 py-0.5 align-middle text-[10px] font-medium text-emerald-400">
            BETA
          </span>
        </div>
        <nav className="flex items-center gap-5 text-sm text-zinc-400">
          <a href="#features" className="hidden hover:text-zinc-100 sm:block">
            {t.nav.features}
          </a>
          <a href="#pricing" className="hidden hover:text-zinc-100 sm:block">
            {t.nav.pricing}
          </a>
          <a href="#faq" className="hidden hover:text-zinc-100 sm:block">
            {t.nav.faq}
          </a>
          <Link
            href={t.nav.switchHref}
            className="rounded border border-zinc-700 px-2.5 py-1 text-xs hover:border-zinc-500 hover:text-zinc-100"
          >
            {t.nav.switch}
          </Link>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-5 pb-16 pt-14 sm:pt-20">
          <p className="font-mono text-xs tracking-[0.2em] text-emerald-400">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-4 whitespace-pre-line text-4xl font-bold leading-tight tracking-tight text-zinc-50 sm:text-5xl">
            {t.hero.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            {t.hero.sub}
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <a
              href="#signup"
              className="rounded-md bg-emerald-500 px-7 py-3.5 font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              {t.hero.cta}
            </a>
            <p className="text-sm text-zinc-500">{t.hero.note}</p>
          </div>

          {/* Demo block */}
          <div className="mt-12 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/60 font-mono text-sm">
            <div className="grid sm:grid-cols-2">
              <div className="border-b border-zinc-800 p-4 sm:border-b-0 sm:border-r">
                <p className="mb-2 text-[10px] uppercase tracking-widest text-zinc-500">
                  {t.demo.source}
                </p>
                <p className="break-all leading-relaxed text-zinc-300">
                  {t.demo.sourceText}
                </p>
              </div>
              <div className="p-4">
                <p className="mb-2 text-[10px] uppercase tracking-widest text-zinc-500">
                  {t.demo.target}
                </p>
                <p className="break-all leading-relaxed text-zinc-300">
                  {t.demo.targetText}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-zinc-800 bg-zinc-900 px-4 py-2.5">
              {t.demo.checks.map((c) => (
                <span key={c} className="text-xs text-emerald-400">
                  ✓ {c}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pain */}
        <section className="border-t border-zinc-900 bg-zinc-900/30">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
              {t.pain.h2}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {t.pain.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 p-5"
                >
                  <h3 className="font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
            {t.features.h2}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {t.features.items.map((item, i) => (
              <div
                key={item.title}
                className="rounded-lg border border-zinc-800 p-5"
              >
                <p className="font-mono text-xs text-emerald-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-semibold text-zinc-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="border-t border-zinc-900 bg-zinc-900/30">
          <div className="mx-auto max-w-5xl px-5 py-16">
            <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
              {t.how.h2}
            </h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-3">
              {t.how.steps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-lg border border-zinc-800 bg-zinc-950 p-5"
                >
                  <p className="font-mono text-2xl font-bold text-emerald-400">
                    {i + 1}
                  </p>
                  <h3 className="mt-2 font-semibold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
            {t.pricing.h2}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {t.pricing.items.map((item) => (
              <div
                key={item.name}
                className="rounded-lg border border-zinc-800 p-5"
              >
                <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {item.name}
                </p>
                <p className="mt-2 text-2xl font-bold text-zinc-50">
                  {item.price}
                </p>
                <p className="mt-2 text-sm text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-zinc-500">{t.pricing.note}</p>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-zinc-900 bg-zinc-900/30">
          <div className="mx-auto max-w-3xl px-5 py-16">
            <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
              {t.faq.h2}
            </h2>
            <dl className="mt-8 space-y-6">
              {t.faq.items.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-zinc-100">{item.q}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Signup */}
        <section id="signup" className="mx-auto max-w-xl px-5 py-16">
          <h2 className="text-2xl font-bold text-zinc-50 sm:text-3xl">
            {t.form.h2}
          </h2>
          <p className="mt-2 text-sm text-zinc-400">{t.form.sub}</p>
          <div className="mt-8">
            <WaitlistForm lang={lang} />
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {t.footer}</p>
          <p>
            <Link href="/" className="hover:text-zinc-300">
              日本語
            </Link>
            <span className="mx-2">/</span>
            <Link href="/en" className="hover:text-zinc-300">
              English
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
