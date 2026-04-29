import { MapPin } from "lucide-react";
import { experiences } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I&rsquo;ve worked"
      description="Recent roles, focused on shipping software that customers and internal teams actually use."
    >
      <ol className="relative space-y-4">
        {experiences.map((exp) => (
          <li key={`${exp.role}-${exp.period}`} className="card-surface p-5 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-semibold text-ink sm:text-lg">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-2 py-0.5 text-[11px] font-medium text-accent-700 ring-1 ring-inset ring-accent-200">
                      <span className="size-1.5 rounded-full bg-accent-500" />
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm font-medium text-ink-soft">
                  {exp.company}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-ink-muted">
                  <MapPin className="size-3.5" aria-hidden />
                  {exp.location}
                </p>
              </div>
              <span className="inline-flex h-7 items-center rounded-full bg-zinc-100 px-3 text-xs font-medium text-ink-soft sm:self-start">
                {exp.period}
              </span>
            </div>
            <ul className="mt-4 space-y-2 border-t border-card-border pt-4">
              {exp.bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span
                    aria-hidden
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-500"
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
