import { TrendingUp } from "lucide-react";
import { highlights } from "@/data/profile";
import { Section } from "@/components/ui/Section";

export function Highlights() {
  return (
    <Section
      id="highlights"
      eyebrow="Highlights"
      title="By the numbers"
      description="A quick snapshot of work to date — the kind of view you&rsquo;d see on a real product dashboard."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {highlights.map((h, i) => {
          const widths = [78, 64, 84, 72];
          return (
            <div key={h.label} className="card-surface p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                  {h.label}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-50 px-2 py-0.5 text-[11px] font-medium text-accent-700">
                  <TrendingUp className="size-3" aria-hidden />
                  {h.delta}
                </span>
              </div>
              <p className="mt-3 text-3xl font-semibold tracking-tight text-ink">
                {h.value}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                {h.description}
              </p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-muted">
                <div
                  className="h-full rounded-full bg-accent-500"
                  style={{ width: `${widths[i % widths.length]}%` }}
                  aria-hidden
                />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
