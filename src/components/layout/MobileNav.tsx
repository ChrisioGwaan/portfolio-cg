"use client";

import { cn } from "@heroui/react";
import { Activity, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { navItems } from "@/data/nav";
import { profile } from "@/data/profile";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <>
      {/* Floating glass header bar */}
      <header className="sticky top-3 z-40 mx-4 lg:hidden">
        <div className="glass-nav flex items-center justify-between rounded-2xl px-3 py-2">
          <a
            href="#home"
            className="focus-ring flex items-center gap-2 rounded-xl"
          >
            <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white shadow-sm">
              <Activity className="size-4" aria-hidden />
            </span>
            <span className="text-sm font-semibold text-ink">
              {profile.shortName}
            </span>
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            onClick={() => setOpen(true)}
            className="focus-ring flex size-8 items-center justify-center rounded-xl bg-white/60 text-ink-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(15,23,42,0.08)] transition-colors hover:text-ink"
          >
            <Menu className="size-4" aria-hidden />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <AnimatePresence>
        {open && (
          <div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 w-full cursor-default bg-ink/20 backdrop-blur-sm"
            />

            {/* Glass panel */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
              className={cn(
                "glass-nav absolute inset-x-4 top-4 rounded-3xl px-4 py-4",
              )}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-accent-500 text-white shadow-sm">
                    <Activity className="size-4" aria-hidden />
                  </span>
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-ink">
                      {profile.name}
                    </p>
                    <p className="text-xs text-ink-muted">{profile.role}</p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="focus-ring flex size-8 items-center justify-center rounded-xl bg-white/60 text-ink-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_3px_rgba(15,23,42,0.08)] transition-colors hover:text-ink"
                >
                  <X className="size-4" aria-hidden />
                </button>
              </div>

              <nav className="mt-4" aria-label="Primary mobile">
                <ul className="space-y-0.5">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="focus-ring flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-white/50 hover:text-ink"
                      >
                        <span>{item.label}</span>
                        <span aria-hidden className="text-ink-muted">
                          →
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
