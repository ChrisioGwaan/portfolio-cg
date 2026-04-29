import { ExternalLink } from "lucide-react";
import { projects } from "@/data/profile";
import { Section } from "@/components/ui/Section";
import { StatusBadge, TechChip } from "@/components/ui/Badges";
import { GithubIcon } from "@/components/ui/BrandIcons";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="A mix of shipped products, internal tools, and prototypes — swap these out with your own as you build."
      action={
        <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-ink-soft">
          {projects.length} projects
        </span>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.name}
            className="card-surface group flex h-full flex-col p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-ink">{p.name}</h3>
              <StatusBadge status={p.status} />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <TechChip key={s} label={s} />
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 border-t border-card-border pt-4">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-ink-soft hover:bg-zinc-100 hover:text-ink"
                >
                  <GithubIcon className="size-3.5" />
                  GitHub
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1.5 text-xs font-medium text-accent-700 hover:bg-accent-100"
                >
                  <ExternalLink className="size-3.5" aria-hidden />
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
