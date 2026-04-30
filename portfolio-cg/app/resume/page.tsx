import Link from "next/link";

const experience = [
  "Software engineering internship experience with collaborative delivery, code review, and practical product work.",
  "Full-stack project development across responsive interfaces, APIs, databases, and deployment workflows.",
  "Applied interest in AI-integrated applications, cloud-based products, and tools that make teams more effective.",
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Azure",
  "AI integration",
  "PostgreSQL",
  "GitHub",
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#f8faf9] px-5 py-10 text-[#101411] sm:px-8">
      <div className="mx-auto max-w-3xl rounded-lg border border-[#dde6df] bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] sm:p-8">
        <Link
          href="/"
          className="inline-flex rounded-full border border-[#cad6ce] px-4 py-2 text-sm font-semibold text-[#101411] outline-none transition hover:border-[#8cfa9e] focus-visible:ring-2 focus-visible:ring-[#8cfa9e]"
        >
          Back to Portfolio
        </Link>

        <header className="mt-8 border-b border-[#e5ece7] pb-6">
          <p className="mb-3 text-sm font-semibold uppercase text-[#328842]">
            Resume
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Chrisio Gwaan
          </h1>
          <p className="mt-4 text-lg leading-8 text-[#3f4742]">
            Software Engineer focused on full-stack systems, AI-integrated
            applications, and cloud-based products.
          </p>
        </header>

        <section className="py-6">
          <h2 className="text-xl font-semibold">Experience Focus</h2>
          <div className="mt-4 grid gap-3">
            {experience.map((item) => (
              <p
                key={item}
                className="rounded-lg border border-[#dce7df] bg-[#f7fbf8] p-4 text-sm leading-6 text-[#3f4742]"
              >
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="border-t border-[#e5ece7] pt-6">
          <h2 className="text-xl font-semibold">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#d7e3da] bg-[#f7fbf8] px-3 py-1.5 text-sm font-medium text-[#3f4742]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}