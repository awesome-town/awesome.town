"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Home() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <WhatWeDo />
        <HowItWorks />
        <WhyUs />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ─── Nav ─── */
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#how", label: "How It Works" },
    { href: "#why", label: "Why Us" },
    { href: "#philosophy", label: "Philosophy" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#"
          className="font-[family-name:var(--font-display)] text-xl font-800 tracking-tight text-ink"
        >
          awesome<span className="text-coral">.town</span>
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-coral"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hover-wobble hidden rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-deep md:inline-block"
          >
            Let&apos;s Talk
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-ink md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              className="transition-transform"
            >
              {menuOpen ? (
                <path
                  d="M2 2L20 14M2 14L20 2"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M1 1H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M1 8H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M1 15H21" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col gap-1 border-t border-ink/8 bg-cream/95 px-6 pb-4 pt-2 backdrop-blur-md md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-3 py-2.5 font-[family-name:var(--font-display)] text-base font-600 text-ink/70 transition-colors hover:bg-ink/5 hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full bg-coral px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-coral-deep"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-6 pt-24 pb-16 md:px-12 lg:px-24">
      {/* Background shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-[600px] w-[600px] rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-[300px] w-[300px] rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl reveal-children">
        <p className="mb-6 inline-block rounded-full bg-gold-light px-4 py-1.5 font-[family-name:var(--font-display)] text-sm font-600 text-ink/80">
          Built by a teacher. For teachers.
        </p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-800 leading-[1.05] tracking-tight text-ink md:text-7xl lg:text-8xl">
          Your school deserves
          <br />
          <span className="text-coral">AI that actually</span>
          <br />
          <span className="text-navy">teaches.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/60 md:text-xl">
          We help schools implement agentic AI assistants that handle the grind —
          grading, lesson planning, reporting — so teachers can focus on the
          humans in the room.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="hover-wobble rounded-full bg-coral px-8 py-4 font-[family-name:var(--font-display)] text-lg font-700 text-white transition-colors hover:bg-coral-deep"
          >
            Start a Conversation
          </a>
          <a
            href="#services"
            className="rounded-full border-2 border-ink/15 px-8 py-4 font-[family-name:var(--font-display)] text-lg font-600 text-ink transition-colors hover:border-ink/40"
          >
            See What We Build
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee ─── */
function Marquee() {
  const items = [
    "Canvas LMS Integration",
    "AI Grading Assistants",
    "Lesson Planning Agents",
    "Teacher Training",
    "Custom MCP Servers",
    "Agentic Workflows",
    "Report Card Automation",
    "Curriculum Tools",
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y-2 border-ink/8 bg-navy py-4">
      <div className="animate-marquee flex w-max gap-8">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap font-[family-name:var(--font-display)] text-sm font-600 uppercase tracking-widest text-cream/60"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── What We Do ─── */
function WhatWeDo() {
  const services = [
    {
      num: "01",
      title: "Implement AI Teaching Assistants",
      description:
        "We build and deploy agentic AI tools that plug into your existing LMS. Grading assistants that learn your rubric. Lesson planners that know your curriculum. Report generators that save hours every week.",
      color: "bg-coral/10 text-coral",
    },
    {
      num: "02",
      title: "Train Your Teachers",
      description:
        "We run hands-on workshops where teachers build alongside us — not passive PD slideshows. Your staff leaves with tools they understand, can customize, and actually want to use.",
      color: "bg-teal/10 text-teal",
    },
    {
      num: "03",
      title: "Build Custom Agentic Tools",
      description:
        "Every school is different. We design and build bespoke AI agents tailored to your workflows, your LMS, your pedagogy. From MCP servers to full agentic pipelines.",
      color: "bg-gold/20 text-ink",
    },
  ];

  return (
    <section id="services" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="reveal mb-16 max-w-2xl">
        <p className="mb-3 font-[family-name:var(--font-display)] text-sm font-700 uppercase tracking-widest text-coral">
          What We Do
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-800 leading-tight tracking-tight text-ink md:text-5xl">
          Real tools. <br className="hidden md:block" />
          Real classrooms.
        </h2>
      </div>

      <div className="reveal-children grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.num}
            className="group relative overflow-hidden rounded-3xl border-2 border-ink/6 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-ink/12 hover:shadow-xl md:p-10"
          >
            <span
              className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl font-[family-name:var(--font-display)] text-sm font-800 ${s.color}`}
            >
              {s.num}
            </span>
            <h3 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-700 leading-snug text-ink">
              {s.title}
            </h3>
            <p className="leading-relaxed text-ink/55">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Listen",
      description:
        "We spend time in your school. We sit in on classes, talk to teachers, understand your LMS setup, and map where AI can actually help — not where it sounds cool.",
    },
    {
      num: "2",
      title: "Build",
      description:
        "We build alongside your team. Prototypes in weeks, not months. Teachers test real tools with real students and give real feedback. We iterate until it clicks.",
    },
    {
      num: "3",
      title: "Transfer",
      description:
        "You own everything. We train your team to maintain, customize, and extend the tools we built together. We stick around for support, but you never depend on us.",
    },
  ];

  return (
    <section
      id="how"
      className="relative overflow-hidden bg-navy px-6 py-24 md:px-12 lg:px-24"
    >
      {/* decorative blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-coral/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-teal/8 blur-3xl" />
      </div>

      <div className="relative">
        <div className="reveal mb-16 max-w-2xl">
          <p className="mb-3 font-[family-name:var(--font-display)] text-sm font-700 uppercase tracking-widest text-gold">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl font-800 leading-tight tracking-tight text-cream md:text-5xl">
            Three steps. <br className="hidden md:block" />
            No mystery.
          </h2>
        </div>

        <div className="reveal-children grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="relative">
              <span className="step-number mb-6 block text-8xl text-cream/20 md:text-9xl">
                {step.num}
              </span>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-700 text-cream">
                {step.title}
              </h3>
              <p className="leading-relaxed text-cream/50">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─── */
function WhyUs() {
  const differentiators = [
    {
      headline: "We teach with these tools every day.",
      body: "Our founder uses agentic AI assistants in a real classroom, with real students, five days a week. This isn't a lab experiment — it's battle-tested pedagogy.",
    },
    {
      headline: "We build, not just advise.",
      body: "Most ed-tech consultants deliver a slide deck. We deliver working software. Canvas integrations, grading agents, lesson planners — real tools you can use on Monday morning.",
    },
    {
      headline: "Constructionist to the core.",
      body: "We believe teachers learn AI by building with AI, not by watching a webinar about it. Our workshops put tools in your hands, not theory in your inbox.",
    },
    {
      headline: "You own everything.",
      body: "No vendor lock-in. No proprietary platforms. We build on open standards and make sure your team can maintain and extend everything after we leave.",
    },
  ];

  return (
    <section id="why" className="px-6 py-24 md:px-12 lg:px-24">
      <div className="reveal mb-16 max-w-2xl">
        <p className="mb-3 font-[family-name:var(--font-display)] text-sm font-700 uppercase tracking-widest text-coral">
          Why awesome.town
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-4xl font-800 leading-tight tracking-tight text-ink md:text-5xl">
          Not your average
          <br className="hidden md:block" /> ed-tech consultants.
        </h2>
      </div>

      <div className="reveal-children grid gap-px overflow-hidden rounded-3xl border-2 border-ink/8 bg-ink/6 md:grid-cols-2">
        {differentiators.map((d, i) => (
          <div key={i} className="bg-white p-8 md:p-10">
            <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-700 leading-snug text-ink md:text-2xl">
              {d.headline}
            </h3>
            <p className="leading-relaxed text-ink/55">{d.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── Philosophy ─── */
function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-blush px-6 py-24 md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-[400px] w-[400px] rounded-full bg-coral/8 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-gold/12 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <div className="reveal">
          <p className="mb-3 font-[family-name:var(--font-display)] text-sm font-700 uppercase tracking-widest text-coral">
            Our Philosophy
          </p>
          <h2 className="mb-8 font-[family-name:var(--font-display)] text-4xl font-800 leading-tight tracking-tight text-ink md:text-5xl">
            AI should make teachers <em className="not-italic text-coral">more</em> human,
            not less.
          </h2>
        </div>
        <div className="reveal">
          <p className="mb-6 text-lg leading-relaxed text-ink/60">
            We come from the constructionist tradition — Seymour Papert&apos;s idea
            that people learn best by making things. We don&apos;t believe in
            replacing teachers with AI. We believe in giving teachers AI
            tools that handle the repetitive work so they can do more of what
            only humans can do: inspire, connect, and mentor.
          </p>
          <p className="text-lg leading-relaxed text-ink/60">
            awesome.town was founded by{" "}
            <strong className="font-semibold text-ink">Jaymes Dec</strong>, a high
            school teacher at Franklin School in Jersey City, NJ. After years of
            building agentic AI tools for his own classroom — grading
            assistants, lesson planners, Canvas LMS integrations — he realized
            other schools needed this too. Not the theory. The actual tools.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy px-6 py-24 text-center md:px-12 lg:px-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-2xl reveal-children">
        <p className="mb-3 font-[family-name:var(--font-display)] text-sm font-700 uppercase tracking-widest text-gold">
          Ready?
        </p>
        <h2 className="mb-6 font-[family-name:var(--font-display)] text-4xl font-800 leading-tight tracking-tight text-cream md:text-5xl">
          Let&apos;s build something
          <br />
          <span className="text-coral">awesome</span> for your school.
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-cream/50">
          Whether you want a full agentic AI deployment, a teacher training
          workshop, or just a conversation about what&apos;s possible — we&apos;d
          love to hear from you.
        </p>
        <a
          href="mailto:hello@awesome.town"
          className="hover-wobble inline-block rounded-full bg-coral px-10 py-5 font-[family-name:var(--font-display)] text-xl font-700 text-white transition-colors hover:bg-coral-deep"
        >
          hello@awesome.town
        </a>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 border-t border-ink/8 bg-cream px-6 py-8 text-sm text-ink/40 md:flex-row md:px-12">
      <p>
        &copy; {new Date().getFullYear()} awesome.town. Jersey City, NJ.
      </p>
      <p className="font-[family-name:var(--font-display)] font-600 text-ink/30">
        Built by a teacher, for teachers.
      </p>
    </footer>
  );
}
