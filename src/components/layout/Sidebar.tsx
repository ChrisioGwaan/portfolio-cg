"use client";

import { cn } from "@heroui/react";
import { Activity } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden lg:fixed lg:left-6 lg:top-1/2 lg:z-30 lg:block lg:-translate-y-1/2">
      <div className="glass-nav flex w-52 flex-col rounded-3xl px-3 py-4">
        {/* Logo */}
        <div className="mb-4 flex items-center gap-2.5 px-2">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white shadow-sm">
            <Activity className="size-4" aria-hidden />
          </div>
          <div className="min-w-0 leading-tight">
            <p className="truncate text-xs font-semibold text-ink">
              {profile.shortName}
            </p>
            <p className="truncate text-[10px] text-ink-muted">{profile.role}</p>
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Primary">
          <ul className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-xl bg-white/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_4px_rgba(15,23,42,0.08)]"
                      transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
                    />
                  )}
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "focus-ring relative flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors duration-150",
                      isActive
                        ? "font-semibold text-ink"
                        : "font-medium text-ink-soft hover:text-ink",
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="size-1.5 shrink-0 rounded-full bg-accent-500" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
