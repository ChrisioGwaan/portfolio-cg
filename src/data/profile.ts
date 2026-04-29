import type { ComponentType, SVGProps } from "react";
import {
  Briefcase,
  Code,
  Cpu,
  Database,
  Mail,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";

export type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

export const profile = {
  name: "Chrisio Gwaan",
  shortName: "Chrisio",
  role: "Software Engineer",
  headline:
    "I build AI-integrated full-stack products and enterprise tools across the Microsoft and Azure ecosystem.",
  location: "Available globally · Remote-friendly",
  email: "hello@chrisiogwaan.dev",
  links: {
    github: "https://github.com/chrisiogwaan",
    linkedin: "https://www.linkedin.com/in/chrisiogwaan",
    resume: "/resume.pdf",
  },
} as const;

export type HeroStat = {
  label: string;
  value: string;
  hint: string;
  icon: IconComponent;
};

export const heroStats: HeroStat[] = [
  {
    label: "Years Experience",
    value: "2+",
    hint: "Shipping production software",
    icon: Briefcase,
  },
  {
    label: "Focus",
    value: "AI + Full Stack",
    hint: "From UI to model integration",
    icon: Sparkles,
  },
  {
    label: "Ecosystem",
    value: "Microsoft / Azure",
    hint: "Enterprise-grade delivery",
    icon: Cpu,
  },
  {
    label: "Builder",
    value: "SaaS Products",
    hint: "End-to-end ownership",
    icon: Rocket,
  },
];

export type HighlightStat = {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "flat";
  description: string;
};

export const highlights: HighlightStat[] = [
  {
    label: "Projects Built",
    value: "20+",
    delta: "+5 this year",
    trend: "up",
    description: "Shipped products, internal tools, and AI prototypes.",
  },
  {
    label: "Technologies Used",
    value: "30+",
    delta: "Across 6 stacks",
    trend: "up",
    description: "TypeScript, Python, Java, Azure, Supabase, Power Platform.",
  },
  {
    label: "Enterprise Clients",
    value: "10+",
    delta: "B2B engagements",
    trend: "up",
    description: "Worked directly with stakeholders to ship business value.",
  },
  {
    label: "AI Integrations",
    value: "12+",
    delta: "RAG, agents, copilots",
    trend: "up",
    description: "Azure OpenAI, AI Search, agent orchestration, RAG pipelines.",
  },
];

export type AboutCard = {
  title: string;
  body: string;
  icon: IconComponent;
};

export const aboutCards: AboutCard[] = [
  {
    title: "Who I am",
    body: "Software engineer focused on building practical, well-crafted products. I care about UX, performance, and shipping things people actually use.",
    icon: Sparkles,
  },
  {
    title: "What I build",
    body: "Full-stack web apps, AI-powered tooling, and enterprise systems on the Microsoft and Azure stack — from internal copilots to customer-facing SaaS.",
    icon: Code,
  },
  {
    title: "How I work",
    body: "Bias toward clarity. I prototype fast, then harden what matters — typed APIs, clean components, real observability, no over-engineering.",
    icon: Wrench,
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Enterprise Consulting",
    location: "Remote",
    period: "2024 — Present",
    current: true,
    bullets: [
      "Designed and shipped AI-integrated internal tools using Azure OpenAI, AI Search, and Next.js.",
      "Led full-stack delivery on client engagements: Power Platform, Supabase, and TypeScript services.",
      "Partnered with stakeholders to translate requirements into typed contracts and clean UIs.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "SaaS Product Team",
    location: "Hybrid",
    period: "2023 — 2024",
    bullets: [
      "Built customer-facing dashboards in React + TypeScript with a focus on accessibility and performance.",
      "Implemented authentication, role-based access, and Stripe-style billing flows.",
      "Owned CI/CD pipelines and Azure infrastructure for staging and production environments.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Enterprise Software",
    location: "On-site",
    period: "2022 — 2023",
    bullets: [
      "Contributed Java and Python services to a high-throughput backend platform.",
      "Wrote unit and integration tests, reducing regression incidents on owned modules.",
      "Built internal tooling that automated repetitive ops tasks for the team.",
    ],
  },
];

export type ProjectStatus = "Live" | "In Progress" | "Prototype" | "Archived";

export type Project = {
  name: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    name: "Atlas Copilot",
    description:
      "AI assistant for enterprise knowledge bases. Hybrid retrieval over Azure AI Search with grounded citations and admin analytics.",
    stack: ["Next.js", "TypeScript", "Azure OpenAI", "AI Search", "Supabase"],
    status: "Live",
    github: "https://github.com/chrisiogwaan/atlas-copilot",
    demo: "https://atlas.example.com",
  },
  {
    name: "Pulse Dashboard",
    description:
      "SaaS analytics dashboard for small ops teams. Real-time KPIs, custom alerts, and a clean reporting workflow.",
    stack: ["React", "TypeScript", "Tailwind", "Supabase", "Edge Functions"],
    status: "Live",
    github: "https://github.com/chrisiogwaan/pulse-dashboard",
    demo: "https://pulse.example.com",
  },
  {
    name: "FlowAgent",
    description:
      "Multi-step AI agent platform for automating client intake, research, and document generation across Power Platform and Azure.",
    stack: ["Python", "Azure Functions", "Power Platform", "OpenAI"],
    status: "In Progress",
    github: "https://github.com/chrisiogwaan/flowagent",
  },
  {
    name: "Ledgerline",
    description:
      "Lightweight expense and invoice tool for freelancers. Local-first with optional sync, OCR receipt parsing, and CSV export.",
    stack: ["Next.js", "TypeScript", "SQLite", "Tesseract"],
    status: "Prototype",
    github: "https://github.com/chrisiogwaan/ledgerline",
  },
  {
    name: "Triage Bot",
    description:
      "Slack-native triage assistant that classifies incoming issues, suggests owners, and drafts initial responses.",
    stack: ["Node.js", "TypeScript", "OpenAI", "Slack API"],
    status: "Live",
    github: "https://github.com/chrisiogwaan/triage-bot",
  },
  {
    name: "Briefkit",
    description:
      "Internal tool that turns long meeting transcripts into structured briefs, action items, and stakeholder summaries.",
    stack: ["Python", "FastAPI", "Azure OpenAI", "React"],
    status: "In Progress",
  },
];

export type SkillGroup = {
  title: string;
  icon: IconComponent;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HeroUI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Cpu,
    skills: [
      "Node.js",
      "Python",
      "Java",
      "FastAPI",
      "REST",
      "GraphQL",
      "Edge Functions",
    ],
  },
  {
    title: "AI / Cloud",
    icon: Sparkles,
    skills: [
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Functions",
      "RAG",
      "Agents",
      "Power Platform",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "Supabase", "SQL Server", "Cosmos DB", "SQLite"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub Actions", "Docker", "Bun", "Playwright", "Vitest"],
  },
];

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: IconComponent;
};

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/chrisiogwaan",
    href: profile.links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "github.com/chrisiogwaan",
    href: profile.links.github,
    icon: GithubIcon,
  },
];
