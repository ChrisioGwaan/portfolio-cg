"use client";

import { Button, Card, CardBody, CardFooter, Chip } from "@heroui/react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../data/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2, ease: "easeOut" }}>
      <Card
        radius="sm"
        className="h-full border border-[#dde6df] bg-white/86 shadow-[0_18px_45px_rgba(15,23,42,0.07)] transition-shadow hover:shadow-[0_24px_65px_rgba(15,23,42,0.12)]"
      >
        <CardBody className="flex flex-col gap-5 p-5">
          <div>
            <h3 className="text-xl font-semibold leading-7 text-[#101411]">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#5f6862]">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Chip
                key={tag}
                size="sm"
                radius="sm"
                className="border border-[#d7e3da] bg-[#f7fbf8] text-[#3f4742]"
                variant="flat"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="flex flex-wrap gap-2 px-5 pb-5 pt-0">
          <Button
            as="a"
            href={project.githubHref}
            target="_blank"
            rel="noreferrer"
            radius="full"
            variant="bordered"
            className="inline-flex h-10 items-center justify-center gap-2 border-[#cad6ce] bg-white text-sm font-semibold text-[#101411] hover:border-[#8cfa9e]"
            startContent={<Github className="size-4" aria-hidden="true" />}
          >
            GitHub
          </Button>
          <Button
            as="a"
            href={project.demoHref}
            target="_blank"
            rel="noreferrer"
            radius="full"
            className="inline-flex h-10 items-center justify-center gap-2 bg-[#101411] text-sm font-semibold text-white hover:bg-[#222a24]"
            startContent={<ExternalLink className="size-4" aria-hidden="true" />}
          >
            Live Demo
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}