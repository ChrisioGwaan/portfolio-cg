import { ArrowRight } from "lucide-react";
import { contactLinks, profile } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let&rsquo;s build something."
      description="The fastest way to reach me is email. I read everything and reply within a couple of business days."
    >
      <div className="card-surface relative overflow-hidden p-6 sm:p-10">
        <div
          aria-hidden
          className="dotted-bg pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_bottom_left,black,transparent_70%)]"
        />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-5">
            <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              Have a project, role, or idea in mind?
            </h3>
            <p className="max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
              I&apos;m currently open to full-stack and AI engineering roles,
              consulting engagements, and interesting collaborations. Send a
              short note about what you&apos;re working on.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-accent-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-700"
            >
              Email {profile.shortName}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>

          <ul className="grid gap-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="focus-ring card-surface-flat group flex items-center justify-between gap-4 p-4 transition-colors hover:border-accent-200 hover:bg-accent-50/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-accent-50 text-accent-600 group-hover:bg-white">
                      <Icon className="size-4" aria-hidden />
                    </span>
                    <div className="leading-tight">
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-ink">{value}</p>
                    </div>
                  </div>
                  <ArrowRight
                    className="size-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent-600"
                    aria-hidden
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
