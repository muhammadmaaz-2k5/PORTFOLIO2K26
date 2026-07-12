import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  ExternalLink,
  ArrowUpRight,
  Code2,
  Server,
  Smartphone,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";

function Github({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.34-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.64 1.59.24 2.77.12 3.06.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.05.78 2.12v3.15c0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5z"/>
    </svg>
  );
}

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const EMAIL = "muhamamdmaaz65@gmail.com";
const GITHUB = "https://github.com/muhammadmaaz-2k5";

const experience = [
  {
    role: "Full-Stack Developer",
    company: "Spark Zone Technologies",
    location: "Remote",
    period: "2023 — 2025",
    points: [
      "Developed scalable web applications using Node.js, Express.js, and TypeScript. Built RESTful APIs and server-side architecture for production applications.",
      "Collaborated with cross-functional teams, implementing best practices for code quality, testing, and deployment.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    location: "Remote",
    period: "2022 — Present",
    points: [
      "Developed end-to-end web applications using React, TypeScript, and Laravel with RESTful APIs. Created cross-platform mobile apps using Flutter with real-time features.",
      "Designed scalable backend systems using Laravel and Node.js, managing MySQL/PostgreSQL databases. Delivered 15+ projects including e-commerce platforms and streaming services.",
    ],
  },
  {
    role: "Mobile App Developer",
    company: "Independent Projects",
    location: "Remote",
    period: "2021 — Present",
    points: [
      "Specialized in Flutter development, creating reusable packages and publishing multiple apps on Google Play Store with authentication and real-time updates.",
    ],
  },
];

const projects = [
  {
    name: "AI Interview Platform",
    description:
      "AI-powered mock interview app with live voice conversations, real-time transcription, and GitHub-aware personalized questions. Auto-scores interviews and generates feedback using the Gemini API.",
    stack: ["React", "TypeScript", "Express.js", "PostgreSQL", "Sequelize", "OpenAI Realtime", "Deepgram", "Gemini"],
    github: GITHUB,
    link: null,
  },
  {
    name: "AI Thumbnail Builder",
    description:
      "AI-powered tool for generating custom thumbnails, built with Next.js and TypeScript.",
    stack: ["Next.js", "TypeScript", "CSS"],
    github: GITHUB,
    link: null,
  },
  {
    name: "Medzfitt E-commerce",
    description:
      "Full-featured Laravel e-commerce site with cart, orders, reviews, and an admin dashboard.",
    stack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    github: GITHUB,
    link: "#",
  },
  {
    name: "E.shop — GraphQL E-commerce API",
    description:
      "Production-grade GraphQL API for e-commerce with typed schema, caching, and relational data modeling.",
    stack: ["TypeScript", "Express.js", "Apollo Server", "Type-GraphQL", "Sequelize", "PostgreSQL", "Redis"],
    github: GITHUB,
    link: null,
  },
];

const skills: { icon: typeof Code2; title: string; items: string[] }[] = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "Laravel", "PHP", "GraphQL", "REST API"],
  },
  {
    icon: Smartphone,
    title: "Mobile",
    items: ["Flutter", "Dart", "Android", "iOS"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Firebase"],
  },
  {
    icon: Wrench,
    title: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Firebase", "AdMob", "Puppeteer"],
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/70 border-b border-border/50">
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="grid place-items-center w-8 h-8 rounded-md bg-primary text-primary-foreground font-bold">M</span>
            <span>Maaz<span className="text-primary">.</span></span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#experience" className="hover:text-foreground transition">Experience</a>
            <a href="#projects" className="hover:text-foreground transition">Projects</a>
            <a href="#skills" className="hover:text-foreground transition">Skills</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          >
            <Mail className="w-4 h-4" /> Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-hero-glow">
        <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for freelance & full-time
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Muhammad Maaz
            <br />
            <span className="text-gradient">Full-Stack Developer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            I build scalable web applications and mobile experiences — specializing in{" "}
            <span className="text-foreground">Node.js</span>, RESTful & GraphQL APIs,
            and end-to-end products with{" "}
            <span className="text-foreground">React, Laravel, and Flutter</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              <Sparkles className="w-4 h-4" /> View my work
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-2 transition"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-2 transition"
            >
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {[
              { k: "15+", v: "Projects shipped" },
              { k: "4+", v: "Years experience" },
              { k: "5+", v: "Play Store apps" },
              { k: "∞", v: "Cups of chai" },
            ].map((s) => (
              <div key={s.v} className="rounded-lg border border-border bg-surface/50 p-4">
                <div className="text-2xl font-bold text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="01 / Career" title="Experience" />
        <div className="mt-12 space-y-4">
          {experience.map((e) => (
            <div
              key={e.role + e.company}
              className="group rounded-xl border border-border bg-surface p-6 md:p-8 shadow-card hover:border-primary/40 transition"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <p className="text-primary font-medium">
                    {e.company} <span className="text-muted-foreground font-normal">· {e.location}</span>
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground bg-surface-2 px-3 py-1 rounded-full border border-border">
                  {e.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-muted-foreground leading-relaxed">
                {e.points.map((p, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="02 / Selected work" title="Projects" />
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group relative rounded-xl border border-border bg-surface p-6 shadow-card hover:border-primary/50 hover:-translate-y-0.5 transition"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition">
                  {p.name}
                </h3>
                <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition">
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noreferrer" aria-label="Live link" className="p-1.5 rounded-md hover:bg-surface-2">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-1.5 rounded-md hover:bg-surface-2">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] text-muted-foreground bg-surface-2 border border-border rounded px-2 py-0.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeader eyebrow="03 / Toolbox" title="Technical Skills" />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-surface p-6 shadow-card">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{s.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.items.map((i) => (
                  <span key={i} className="text-xs bg-surface-2 border border-border rounded-md px-2 py-1 text-muted-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-surface p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Education</p>
            <p className="mt-1 font-semibold">Bachelor's Degree in Computer Science</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-70 pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">04 / Get in touch</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            Let's build something <span className="text-gradient">great</span>.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-muted-foreground leading-relaxed">
            Have a project in mind or just want to connect? I'm always open to
            discussing new opportunities and collaborations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
            >
              <Mail className="w-4 h-4" /> {EMAIL}
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium hover:bg-surface-2 transition"
            >
              <Github className="w-4 h-4" /> @muhammadmaaz-2k5
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Maaz. All rights reserved.</p>
          <p className="font-mono text-xs">Crafted with care.</p>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      </div>
    </div>
  );
}
