"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { heroStats, profile } from "@/data/profile";
import { StatCard } from "@/components/ui/StatCard";

export function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24"
      aria-labelledby="hero-heading"
    >
      <div className="card-surface relative overflow-hidden p-6 sm:p-10">
        <div
          aria-hidden
          className="dotted-bg pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-700 ring-1 ring-inset ring-accent-200">
              <span className="size-1.5 rounded-full bg-accent-500" />
              Available for new projects
            </span>

            <div className="space-y-4">
              <h1
                id="hero-heading"
                className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl"
              >
                Hi, I&apos;m {profile.name}.
                <br className="hidden sm:block" />{" "}
                <span className="text-accent-600">{profile.role}</span>{" "}
                building useful, AI-powered software.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {profile.headline}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                size="lg"
                className="rounded-full bg-accent-600 px-6 text-white hover:bg-accent-700"
                onPress={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                View Projects
                <ArrowRight className="ml-1 size-4" aria-hidden />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-6"
                onPress={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <Mail className="mr-1 size-4" aria-hidden />
                Contact Me
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full px-6 text-ink-soft hover:text-ink"
                onPress={() => {
                  window.open(profile.links.resume, "_blank", "noopener");
                }}
              >
                <Download className="mr-1 size-4" aria-hidden />
                Download Resume
              </Button>
            </div>

            <div className="flex items-center gap-3 text-xs text-ink-muted">
              <Sparkles className="size-3.5 text-accent-500" aria-hidden />
              <span>{profile.location}</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {heroStats.map((stat, i) => (
              <StatCard
                key={stat.label}
                label={stat.label}
                value={stat.value}
                hint={stat.hint}
                icon={stat.icon}
                accent={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
