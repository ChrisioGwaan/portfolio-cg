import { cn } from "@heroui/react";
import type { IconComponent } from "@/data/profile";

type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
  icon?: IconComponent;
  accent?: boolean;
  className?: string;
};

export function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  accent,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "card-surface group relative flex flex-col gap-3 p-5 transition-shadow hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">
          {label}
        </span>
        {Icon && (
          <span
            className={cn(
              "flex size-8 items-center justify-center rounded-xl",
              accent
                ? "bg-accent-500 text-white"
                : "bg-accent-50 text-accent-600",
            )}
          >
            <Icon className="size-4" aria-hidden />
          </span>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {value}
        </p>
        {hint && <p className="text-xs text-ink-muted">{hint}</p>}
      </div>
    </div>
  );
}
