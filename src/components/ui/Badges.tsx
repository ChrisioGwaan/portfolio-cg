import { Chip, cn } from "@heroui/react";

const statusStyles: Record<string, string> = {
  Live: "bg-accent-50 text-accent-700 ring-1 ring-inset ring-accent-200",
  "In Progress":
    "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-200",
  Prototype:
    "bg-sky-50 text-sky-700 ring-1 ring-inset ring-sky-200",
  Archived:
    "bg-zinc-100 text-zinc-600 ring-1 ring-inset ring-zinc-200",
};

export function StatusBadge({
  status,
  className,
}: {
  status: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        statusStyles[status] ?? statusStyles.Archived,
        className,
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          status === "Live" && "bg-accent-500",
          status === "In Progress" && "bg-amber-500",
          status === "Prototype" && "bg-sky-500",
          status === "Archived" && "bg-zinc-400",
        )}
      />
      {status}
    </span>
  );
}

export function TechChip({ label }: { label: string }) {
  return (
    <Chip
      size="sm"
      variant="soft"
      color="default"
      className="rounded-full bg-zinc-100 text-xs font-medium text-ink-soft"
    >
      {label}
    </Chip>
  );
}
