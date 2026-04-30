"use client";

import { Card, CardBody, Divider } from "@heroui/react";
import { SectionReveal } from "./SectionReveal";

const highlights = [
  "Full-stack product development",
  "AI and cloud-integrated workflows",
  "Internship experience in collaborative engineering teams",
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-32 py-16 md:py-24">
      <SectionReveal>
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase text-[#328842]">
              About Me
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[#101411] md:text-4xl">
              Engineering with a product-first mindset.
            </h2>
          </div>
          <Card
            radius="sm"
            className="border border-[#dde6df] bg-white/86 shadow-[0_18px_48px_rgba(15,23,42,0.08)]"
          >
            <CardBody className="p-6 md:p-7">
              <p className="text-base leading-8 text-[#3f4742] md:text-lg">
                I am a software engineer focused on building practical,
                maintainable products across the full stack. My background
                includes internship experience, collaborative engineering work,
                and hands-on projects that connect modern interfaces with solid
                backend systems. Recently, I have been especially interested in
                AI-assisted applications, cloud-based product delivery, and the
                kind of useful tools that make everyday workflows faster and
                clearer.
              </p>
              <Divider className="my-6 bg-[#e5ece7]" />
              <div className="grid gap-3 sm:grid-cols-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-lg border border-[#dce7df] bg-[#f7fbf8] p-4 text-sm font-medium leading-6 text-[#2e3832]"
                  >
                    {highlight}
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </SectionReveal>
    </section>
  );
}