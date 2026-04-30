"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { Cloud, Code2, Database, Server, Wrench } from "lucide-react";
import { techGroups } from "../data/portfolio";
import { SectionReveal } from "./SectionReveal";

const groupIcons = {
  Frontend: Code2,
  Backend: Server,
  "Cloud & AI": Cloud,
  Database: Database,
  Tools: Wrench,
};

export function TechStack() {
  return (
    <section id="tech-stack" className="scroll-mt-32 py-16 md:py-24">
      <SectionReveal>
        <div className="mb-8 max-w-2xl md:mb-10">
          <p className="mb-3 text-sm font-semibold uppercase text-[#328842]">
            Tech Stack
          </p>
          <h2 className="text-3xl font-semibold leading-tight text-[#101411] md:text-4xl">
            Tools for shipping reliable, useful software.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {techGroups.map((group) => {
            const Icon = groupIcons[group.title];

            return (
              <Card
                key={group.title}
                radius="sm"
                className="border border-[#dde6df] bg-white/84 shadow-[0_16px_38px_rgba(15,23,42,0.06)]"
              >
                <CardBody className="p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex size-9 items-center justify-center rounded-lg bg-[#8cfa9e]/30 text-[#1f7b32] ring-1 ring-[#8cfa9e]/45">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold text-[#101411]">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Chip
                        key={item}
                        radius="sm"
                        size="sm"
                        className="border border-[#d7e3da] bg-[#f7fbf8] text-[#3f4742]"
                        variant="flat"
                      >
                        {item}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </SectionReveal>
    </section>
  );
}