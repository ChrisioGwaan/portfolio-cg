"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { SectionReveal } from "./SectionReveal";

export function HeroSection() {
  return (
    <section
      id="home"
      className="flex min-h-[92svh] scroll-mt-32 items-center py-24 md:min-h-screen md:py-32"
    >
      <SectionReveal className="w-full">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#dde6df] bg-white/78 px-3 py-2 text-sm font-medium text-[#3f4742] shadow-sm backdrop-blur">
              <Sparkles className="size-4 text-[#328842]" aria-hidden="true" />
              Full-stack, AI, and cloud product engineering
            </div>
            <h1 className="text-5xl font-semibold leading-[1.02] text-[#101411] sm:text-6xl lg:text-7xl">
              Chrisio Gwaan
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3f4742] sm:text-xl">
              Software Engineer focused on full-stack systems, AI-integrated
              applications, and cloud-based products.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                as="a"
                href="#projects"
                radius="full"
                className="inline-flex h-12 items-center justify-center gap-2 bg-[#8cfa9e] px-6 text-sm font-semibold text-[#101411] shadow-[0_12px_28px_rgba(140,250,158,0.35)] hover:bg-[#7cf08f]"
                endContent={<ArrowRight className="size-4" aria-hidden="true" />}
              >
                View Projects
              </Button>
              <Button
                as="a"
                href="#social"
                radius="full"
                variant="bordered"
                className="inline-flex h-12 items-center justify-center gap-2 border-[#cad6ce] bg-white/80 px-6 text-sm font-semibold text-[#101411] hover:border-[#8cfa9e] hover:bg-white"
                endContent={<Mail className="size-4" aria-hidden="true" />}
              >
                Contact Me
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="rounded-lg border border-[#dde6df] bg-white/82 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between border-b border-[#e6ece8] pb-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#ef6262]" />
                  <span className="size-2.5 rounded-full bg-[#f0b84f]" />
                  <span className="size-2.5 rounded-full bg-[#8cfa9e]" />
                </div>
                <span className="font-mono text-xs text-[#7b857f]">portfolio.tsx</span>
              </div>
              <div className="space-y-4 font-mono text-sm leading-7 text-[#2e3832]">
                <p>
                  <span className="text-[#328842]">const</span> engineer =
                  <span className="text-[#101411]"> &quot;Chrisio&quot;</span>;
                </p>
                <p>
                  <span className="text-[#328842]">build</span>({"{"}
                </p>
                <div className="ml-4 space-y-2">
                  <p>systems: &quot;full-stack&quot;,</p>
                  <p>ai: &quot;integrated&quot;,</p>
                  <p>cloud: &quot;product-ready&quot;,</p>
                </div>
                <p>{"}"});</p>
              </div>
            </div>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}