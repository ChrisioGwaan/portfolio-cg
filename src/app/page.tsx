import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Highlights } from "@/components/sections/Highlights";
import { Contact } from "@/components/sections/Contact";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <MobileNav />
      <main className="lg:pl-60">
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12">
          <div className="space-y-14 sm:space-y-20">
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Highlights />
            <Contact />
          </div>

          <footer className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-card-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
            <p>
              © {new Date().getFullYear()} {profile.name}. Built with Next.js,
              Tailwind CSS, and HeroUI.
            </p>
            <p className="font-medium text-ink-soft">
              Designed and developed by {profile.shortName}.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
