import { skillGroups } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for"
      description="A working toolkit, not a wishlist. Grouped by where they sit in the stack."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <div key={title} className="card-surface p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-2xl bg-accent-50 text-accent-600">
                <Icon className="size-4" aria-hidden />
              </span>
              <h3 className="text-sm font-semibold text-ink">{title}</h3>
            </div>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {skills.map((s) => (
                <li key={s}>
                  <span className="inline-flex items-center rounded-full border border-card-border bg-surface-muted/60 px-3 py-1 text-xs font-medium text-ink-soft">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
