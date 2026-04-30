"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, Home, Share2, UserRound } from "lucide-react";
import { navItems, sectionIds } from "../data/portfolio";
import { useActiveSection } from "./use-active-section";

const dockIcons = {
  home: Home,
  projects: Briefcase,
  "tech-stack": Code2,
  about: UserRound,
  social: Share2,
};

export function MobileDock() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <motion.nav
      aria-label="Mobile navigation"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-50 rounded-full border border-white/70 bg-white/82 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.16)] backdrop-blur-xl md:hidden"
    >
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const Icon = dockIcons[item.id];
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-full px-2 py-2 text-[11px] font-semibold outline-none transition focus-visible:ring-2 focus-visible:ring-[#8cfa9e] ${
                isActive
                  ? "bg-[#8cfa9e] text-[#101411] shadow-[0_8px_20px_rgba(140,250,158,0.35)]"
                  : "text-[#5f6862] hover:bg-[#8cfa9e]/18 hover:text-[#101411]"
              }`}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="truncate">{item.shortLabel}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}