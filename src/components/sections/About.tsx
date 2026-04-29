import { aboutCards, profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A pragmatic engineer who likes shipping real products."
      description="I design and build software end-to-end — from the product surface down to the data and infrastructure. I gravitate toward problems where AI can actually move the needle and where good engineering still matters."
    >
      <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
        <div className="card-surface p-6 sm:p-8">
          <p className="text-sm font-medium uppercase tracking-wider text-accent-700">
            Profile
          </p>
          <h3 className="mt-3 text-xl font-semibold text-ink">
            {profile.name}
          </h3>
          <p className="mt-1 text-sm text-ink-muted">
            {profile.role} · {profile.location}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:text-base">
            I&apos;ve spent the last few years building AI-driven applications
            and enterprise tooling across the Microsoft and Azure ecosystem —
            from internal copilots and Power Platform integrations to
            customer-facing SaaS dashboards in Next.js, React, and Supabase.
            I enjoy the full slice: clean UIs, typed APIs, sensible
            infrastructure, and a fast feedback loop with the people who&apos;ll
            actually use what I build.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-card-border pt-5 text-sm">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Focus
              </dt>
              <dd className="mt-1 font-medium text-ink">
                Full-stack &amp; AI
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Stack
              </dt>
              <dd className="mt-1 font-medium text-ink">
                TypeScript · Python · Java
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Cloud
              </dt>
              <dd className="mt-1 font-medium text-ink">Azure · Supabase</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                Status
              </dt>
              <dd className="mt-1 inline-flex items-center gap-1.5 font-medium text-accent-700">
                <span className="size-1.5 rounded-full bg-accent-500" />
                Open to work
              </dd>
            </div>
          </dl>
        </div>

        <div className="grid gap-4 sm:grid-cols-1">
          {aboutCards.map(({ title, body, icon: Icon }) => (
            <div key={title} className="card-surface flex gap-4 p-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-ink">{title}</h4>
                <p className="text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
