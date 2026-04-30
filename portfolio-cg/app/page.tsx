import { AboutSection } from "./components/AboutSection";
import { HeroSection } from "./components/HeroSection";
import { MobileDock } from "./components/MobileDock";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { SocialSection } from "./components/SocialSection";
import { TechStack } from "./components/TechStack";
import { projects } from "./data/portfolio";

export default function Home() {
  return (
    <div className="ambient-grid min-h-screen overflow-hidden bg-[#f8faf9] text-[#101411]">
      <Navbar />
      <MobileDock />

      <main className="mx-auto flex w-full max-w-6xl flex-col px-5 pb-32 pt-6 sm:px-8 md:pb-20 lg:px-10">
        <HeroSection />

        <section id="projects" className="scroll-mt-32 py-16 md:py-24">
          <div className="mb-8 flex flex-col gap-3 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase text-[#328842]">
                Projects
              </p>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight text-[#101411] md:text-4xl">
                Focused builds with practical product value.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5f6862] md:text-base">
              Selected work across AI-assisted workflows, cloud delivery, and
              polished full-stack interfaces.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <TechStack />
        <AboutSection />
        <SocialSection />
      </main>
    </div>
  );
}
