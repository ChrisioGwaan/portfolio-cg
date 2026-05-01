import About from '@/components/about';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Projects from '@/components/projects';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';
import Photography from '@/components/photography';
import Education from '@/components/education';

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center px-4 sm:px-6">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Education />
      <div className="self-stretch w-full max-w-screen-xl mx-auto">
        <Projects />
      </div>
      <Skills />
      <Photography />
    </main>
  );
}
