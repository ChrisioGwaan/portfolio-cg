"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@heroui/react";
import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail, Share2 } from "lucide-react";
import { navItems, sectionIds, socialLinks } from "../data/portfolio";
import { useActiveSection } from "./use-active-section";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Resume: FileText,
};

export function Navbar() {
  const activeSection = useActiveSection(sectionIds);

  return (
    <motion.nav
      aria-label="Primary navigation"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-1/2 top-5 z-50 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/72 px-2 py-2 shadow-[0_18px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl md:block"
    >
      <div className="flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          if (item.id === "social") {
            return (
              <Popover key={item.id} placement="bottom" offset={12} showArrow>
                <PopoverTrigger>
                  <button
                    type="button"
                    aria-current={isActive ? "page" : undefined}
                    className="relative inline-flex h-10 items-center gap-2 rounded-full px-4 text-sm font-medium text-[#3f4742] outline-none transition hover:text-[#101411] focus-visible:ring-2 focus-visible:ring-[#8cfa9e]"
                  >
                    {isActive ? (
                      <motion.span
                        layoutId="desktop-active-section"
                        className="absolute inset-0 rounded-full bg-[#8cfa9e]/30 ring-1 ring-[#8cfa9e]/50"
                        transition={{ type: "spring", stiffness: 360, damping: 34 }}
                      />
                    ) : null}
                    <span className="relative">{item.label}</span>
                    <Share2 className="relative size-4" aria-hidden="true" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="rounded-lg border border-[#dde6df] bg-white/92 p-2 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl">
                  <div className="grid w-56 gap-1" aria-label="Social links">
                    {socialLinks.map((link) => {
                      const Icon = socialIcons[link.label];

                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-[#202822] outline-none transition hover:bg-[#8cfa9e]/18 focus-visible:ring-2 focus-visible:ring-[#8cfa9e]"
                        >
                          <span className="inline-flex items-center gap-2">
                            <Icon className="size-4" aria-hidden="true" />
                            {link.label}
                          </span>
                          <span aria-hidden="true">/</span>
                        </a>
                      );
                    })}
                  </div>
                </PopoverContent>
              </Popover>
            );
          }

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "page" : undefined}
              className="relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium text-[#3f4742] outline-none transition hover:text-[#101411] focus-visible:ring-2 focus-visible:ring-[#8cfa9e]"
            >
              {isActive ? (
                <motion.span
                  layoutId="desktop-active-section"
                  className="absolute inset-0 rounded-full bg-[#8cfa9e]/30 ring-1 ring-[#8cfa9e]/50"
                  transition={{ type: "spring", stiffness: 360, damping: 34 }}
                />
              ) : null}
              <span className="relative">{item.label}</span>
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}