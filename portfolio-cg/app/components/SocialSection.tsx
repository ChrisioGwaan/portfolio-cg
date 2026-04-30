"use client";

import { Button, Card, CardBody } from "@heroui/react";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Resume: FileText,
};

export function SocialSection() {
  return (
    <section id="social" className="scroll-mt-32 py-16 md:py-24">
      <SectionReveal>
        <Card
          radius="sm"
          className="border border-[#dde6df] bg-white/88 shadow-[0_22px_60px_rgba(15,23,42,0.09)]"
        >
          <CardBody className="grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#328842]">
                Social
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-[#101411] md:text-4xl">
                Let us build something useful.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#5f6862]">
                Reach out for collaboration, internships, engineering roles, or
                product ideas that need thoughtful implementation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.label];

                return (
                  <Button
                    key={link.label}
                    as="a"
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    radius="sm"
                    variant="bordered"
                    className="inline-flex h-14 items-center justify-start gap-2 border-[#cad6ce] bg-white px-4 text-sm font-semibold text-[#101411] hover:border-[#8cfa9e] hover:bg-[#f7fbf8]"
                    startContent={<Icon className="size-4" aria-hidden="true" />}
                  >
                    {link.label}
                  </Button>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </SectionReveal>
    </section>
  );
}