import { cn } from "@heroui/react";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  action,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 space-y-6 sm:space-y-8", className)}
    >
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-medium tracking-wide text-accent-700">
              <span className="size-1.5 rounded-full bg-accent-500" />
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {description}
            </p>
          )}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </header>
      {children}
    </section>
  );
}
