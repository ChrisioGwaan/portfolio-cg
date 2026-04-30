export const navItems = [
  { id: "home", label: "Home", shortLabel: "Home" },
  { id: "projects", label: "Projects", shortLabel: "Work" },
  { id: "tech-stack", label: "Tech Stack", shortLabel: "Stack" },
  { id: "about", label: "About Me", shortLabel: "About" },
  { id: "social", label: "Social", shortLabel: "Social" },
] as const;

export const sectionIds = navItems.map((item) => item.id);

export type SectionId = (typeof navItems)[number]["id"];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  githubHref: string;
  demoHref: string;
};

export const projects: Project[] = [
  {
    title: "AI Workflow Assistant",
    description:
      "A full-stack assistant concept for summarizing technical notes, shaping action items, and keeping prompt history useful across product teams.",
    tags: ["Next.js", "TypeScript", "AI", "PostgreSQL"],
    githubHref: "https://github.com/ChrisioGwaan/ai-workflow-assistant",
    demoHref: "https://ai-workflow-assistant.vercel.app",
  },
  {
    title: "Cloud Launch Dashboard",
    description:
      "A responsive operations dashboard for deployment health, environment status, release notes, and cloud service visibility.",
    tags: ["React", "Azure", "Node.js", "Tailwind CSS"],
    githubHref: "https://github.com/ChrisioGwaan/cloud-launch-dashboard",
    demoHref: "https://cloud-launch-dashboard.vercel.app",
  },
  {
    title: "Product Feedback API",
    description:
      "A clean backend service for collecting feedback, ranking insights, and exposing analytics-ready endpoints for a product interface.",
    tags: ["Node.js", "REST", "Prisma", "Docker"],
    githubHref: "https://github.com/ChrisioGwaan/product-feedback-api",
    demoHref: "https://product-feedback-api.vercel.app",
  },
];

export const techGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HeroUI"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "Testing"],
  },
  {
    title: "Cloud & AI",
    items: ["Azure", "Azure OpenAI", "Serverless", "Docker", "CI/CD"],
  },
  {
    title: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma", "Redis", "SQL"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ChrisioGwaan",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chrisio-gwaan/",
  },
  {
    label: "Email",
    href: "mailto:chrisio.gwaan@example.com",
  },
  {
    label: "Resume",
    href: "/resume",
  },
] as const;