import { ContactForm } from "@/components/ContactForm";

const NAV_LINKS: { href: string; label: string; external?: boolean }[] = [
  { href: "#services", label: "Work" },
  { href: "#process", label: "Approach" },
  { href: "https://www.jaymesdec.com/blog", label: "Writing", external: true },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  {
    num: "01",
    title: "Teaching assistants",
    body: "An agentic teacher's assistant that lives inside your LMS. It can plan, post, grade, give feedback, and run reports. Student data is anonymized before anything hits the model, and it never publishes anything without a teacher's final review.",
  },
  {
    num: "02",
    title: "Teacher workshops",
    body: "Hands-on sessions where your team builds its own tools alongside me. No slideshows. Teachers leave with software they made, and the skills to keep cultivating it.",
  },
  {
    num: "03",
    title: "Custom agents",
    body: "Bigger projects, built to order. Automate compliance and reports. If your school has a recurring administrative task that eats hours, I can probably grow something for it.",
  },
];

const STEPS = [
  {
    num: "STEP 01",
    title: "Start with your workflows",
    body: "A remote conversation about what's eating your teachers' hours, what your LMS looks like, what you've tried. I'll show you what's working in my own classroom and we'll figure out which pieces could transplant to yours.",
  },
  {
    num: "STEP 02",
    title: "A workshop, remote or at my school.",
    body: "A hands-on session where your team builds tools alongside me. No slideshows. We can do it over video, or your team can come spend a day at Franklin and see the work in its native habitat. Teachers leave with software they made and the skills to keep cultivating it.",
  },
  {
    num: "STEP 03",
    title: "Then leave you with it.",
    body: "You own everything we make together. You can maintain and extend it. I'm here if you want me for follow-up consulting, new tools, or troubleshooting.",
  },
];

const REASONS = [
  {
    head: "I use these tools myself.",
    body: "I teach full-time at Franklin School in Jersey City. I use these tools every day, with my own students. I can only recommend what I already rely on.",
  },
  {
    head: "Grown, not pitched.",
    body: "I leave you with software, not a slide deck. It's been running in my own classroom. Your team gets the skills to keep it running in yours.",
  },
  {
    head: "Teachers learn by building.",
    body: "Seymour Papert taught me that people learn by making things. Watching a webinar about AI is not the same as making something with it. My workshops put the tools in your team's hands. The understanding stays after I log off.",
  },
  {
    head: "You own everything.",
    body: "No vendor lock-in, no proprietary platforms. I build on open standards so your team can keep maintaining and extending the work on their own.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Process />
        <Why />
        <Philosophy />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}

function Nav() {
  return (
    <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-12 lg:px-24">
      <a href="#" className="flex items-center gap-2.5">
        <span className="inline-block h-3.5 w-3.5 rounded-full bg-burnt" aria-hidden />
        <span className="font-display text-[22px] font-medium tracking-[-0.4px] text-ink">
          awesome.town
        </span>
      </a>
      <div className="hidden items-center gap-9 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            {link.label}
          </a>
        ))}
      </div>
      <a
        href="https://www.jaymesdec.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs uppercase tracking-[0.8px] text-ink-soft transition-colors hover:text-ink"
      >
        By Jaymes Dec
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-24 pt-20 md:px-12 md:pt-28 lg:px-24 lg:pt-[120px]">
      <div className="flex flex-col gap-16 md:flex-row md:items-start md:gap-20">
        <div className="flex flex-col gap-8 md:flex-1">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2 w-2 rounded-full bg-avocado" aria-hidden />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[1.6px] text-ink-soft">
              Tended and grown · Not shipped
            </span>
          </div>
          <h1 className="font-display text-5xl font-medium leading-none tracking-[-1.4px] text-ink md:text-[80px] md:tracking-[-2px] lg:text-[96px] lg:tracking-[-2.4px]">
            AI tools, grown for the classroom.
          </h1>
          <p className="max-w-[620px] text-lg leading-[1.55] text-ink-soft">
            Over the past few years I&apos;ve been building agentic AI tools for my classroom. They handle planning, grading, and reports. They give me back time with my students. I help other teachers and schools build their own.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#services"
              className="rounded-[4px] bg-burnt px-7 py-4 font-mono text-xs font-medium uppercase tracking-[1.4px] text-eggshell transition-colors hover:bg-burnt-deep"
            >
              See the work
            </a>
            <a
              href="#process"
              className="group inline-flex items-center gap-2.5 text-[15px] font-medium text-ink"
            >
              <span className="underline underline-offset-4 transition-colors group-hover:text-burnt">
                Read the approach
              </span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
        <div className="hidden flex-col items-center gap-7 pt-3 md:flex">
          <PinstripeMotif />
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-[10px] font-medium uppercase tracking-[1.6px] text-ink-muted">
              Fig. 01
            </span>
            <span className="block h-px w-4 bg-rule" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[1.6px] text-ink-muted">
              Growing software
            </span>
          </div>
        </div>
      </div>
      <div className="mt-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[1.6px] text-ink-muted">
            Est. 2026
          </span>
          <span className="block h-px w-6 bg-rule" />
          <span className="font-mono text-[11px] uppercase tracking-[1.6px] text-ink-muted">
            New Jersey, USA
          </span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-sm text-ink-muted">↓</span>
          <span className="text-[13px] text-ink-muted">Scroll</span>
        </div>
      </div>
    </section>
  );
}

function PinstripeMotif() {
  const stripes = Array.from({ length: 11 }, (_, i) => 20 + i * 28);
  return (
    <svg viewBox="0 0 320 280" width="320" height="280" aria-hidden>
      {stripes.map((x) => (
        <rect key={x} x={x} y={0} width={1} height={280} fill="var(--color-ink-soft)" />
      ))}
      <rect x={155.5} y={135} width={10} height={10} fill="var(--color-burnt)" />
    </svg>
  );
}

function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-32 lg:px-24 lg:py-[120px]">
      <div className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="flex flex-col gap-5">
            <SectionLabel dotColor="bg-avocado" text="What I can do / 01" />
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-1.2px] text-ink md:text-5xl lg:text-[56px]">
              What I do.
            </h2>
          </div>
          <p className="max-w-[380px] text-base leading-[1.55] text-ink-soft">
            Everything I grow starts as a tool I needed in my own classroom. Then it becomes something I can hand to another teacher or school.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0">
          {SERVICES.map((s, i) => {
            const isFirst = i === 0;
            const isLast = i === SERVICES.length - 1;
            const classes = [
              "flex flex-col gap-7",
              isFirst ? "md:pr-10" : "md:pl-10 md:border-l md:border-rule",
              !isFirst && !isLast ? "md:pr-10" : "",
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <div key={s.num} className={classes}>
                <span className="font-display text-[64px] font-normal leading-none tracking-[-1px] text-burnt">
                  {s.num}
                </span>
                <h3 className="font-display text-[28px] font-medium leading-[1.15] tracking-[-0.4px] text-ink">
                  {s.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-ink-soft">{s.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="bg-eggshell-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-32 lg:px-24 lg:py-[120px]">
        <div className="flex flex-col gap-16 md:gap-20">
          <div className="flex flex-col gap-5">
            <SectionLabel dotColor="bg-avocado" text="How I work / 02" />
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-1.2px] text-ink md:text-5xl lg:text-[56px]">
              How it usually goes.
            </h2>
          </div>
          <div className="flex flex-col">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`grid grid-cols-1 gap-6 border-t border-rule py-10 md:grid-cols-[360px_1fr] md:gap-20 ${
                  i === STEPS.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="flex flex-col gap-4">
                  <span className="font-mono text-[11px] font-medium uppercase tracking-[1.6px] text-burnt">
                    {step.num}
                  </span>
                  <h3 className="font-display text-3xl font-medium leading-[1.1] tracking-[-0.6px] text-ink md:text-[36px]">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[17px] leading-[1.6] text-ink-soft">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-28 md:px-12 md:py-32 lg:px-24 lg:py-[120px]">
      <div className="flex flex-col gap-16 md:gap-20">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between md:gap-20">
          <div className="flex flex-col gap-5">
            <SectionLabel dotColor="bg-avocado" text="An honest case / 03" />
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-1.2px] text-ink md:text-5xl lg:text-[56px]">
              Why work with me.
            </h2>
          </div>
          <p className="max-w-[260px] font-display text-lg italic leading-[1.4] text-ink-muted">
            You can ask me about any of these.
          </p>
        </div>
        <div className="flex flex-col">
          {[0, 1].map((row) => (
            <div
              key={row}
              className={`grid grid-cols-1 gap-10 border-t border-rule py-12 md:grid-cols-2 md:gap-20 ${
                row === 1 ? "border-b" : ""
              }`}
            >
              {REASONS.slice(row * 2, row * 2 + 2).map((r) => (
                <div key={r.head} className="flex flex-col gap-3.5">
                  <h3 className="font-display text-[28px] font-medium leading-[1.15] tracking-[-0.4px] text-ink">
                    {r.head}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-ink-soft">{r.body}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="bg-ink text-eggshell">
      <div className="mx-auto max-w-[1440px] px-6 py-32 md:px-12 md:py-36 lg:px-24 lg:py-[140px]">
        <div className="flex flex-col gap-16 md:flex-row md:gap-24">
          <div className="flex flex-col gap-12 md:w-[360px] md:shrink-0">
            <div className="flex items-center gap-2.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-burnt" aria-hidden />
              <span className="font-mono text-[11px] font-medium uppercase tracking-[1.6px] text-rule">
                Why this exists / 04
              </span>
            </div>
            <ConcentricMotif />
          </div>
          <div className="flex flex-col gap-10">
            <p className="font-display text-2xl leading-[1.35] tracking-[-0.4px] text-eggshell md:text-[30px]">
              I started building these tools because I was tired. Teaching takes more hours than a day has, and too few of those hours go to the parts of the job I love. The first tool I made was small. Then there was another, and another. At some point I noticed they&apos;d grown into something I couldn&apos;t have planned from the start.
            </p>
            <p className="font-display text-2xl italic leading-[1.35] tracking-[-0.4px] text-burnt md:text-[30px]">
              I am planting seeds and wondering what they will become.
            </p>
            <div className="flex flex-col gap-1.5 pt-6">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[1.6px] text-rule">
                Jaymes Dec
              </span>
              <span className="text-sm leading-[1.5] text-ink-muted">
                High school teacher · Franklin School, Jersey City
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConcentricMotif() {
  return (
    <svg viewBox="0 0 200 200" width="200" height="200" aria-hidden>
      <circle cx={100} cy={100} r={99.5} fill="none" stroke="var(--color-ink-soft)" strokeWidth={1} />
      <circle cx={100} cy={100} r={77.5} fill="none" stroke="var(--color-ink-soft)" strokeWidth={1} />
      <circle cx={100} cy={100} r={55.5} fill="none" stroke="var(--color-ink-soft)" strokeWidth={1} />
      <circle cx={100} cy={100} r={33.5} fill="none" stroke="var(--color-ink-soft)" strokeWidth={1} />
      <circle cx={100} cy={100} r={12} fill="var(--color-avocado)" />
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-6 py-32 md:px-12 md:py-36 lg:px-24 lg:py-[140px]">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-20">
          <div className="flex flex-col gap-6">
            <SectionLabel dotColor="bg-avocado" text="Get in touch / 05" />
            <h2 className="font-display text-4xl font-medium leading-[1.05] tracking-[-1.2px] text-ink md:text-5xl lg:text-[56px]">
              Have a question? Have an idea?
            </h2>
          </div>
          <ContactMark />
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactMark() {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" aria-hidden>
      <circle cx={40} cy={40} r={39.5} fill="none" stroke="var(--color-ink-muted)" strokeWidth={1} />
      <circle cx={40} cy={40} r={8} fill="var(--color-burnt)" />
    </svg>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12 lg:px-24">
        <div className="flex items-center gap-2.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-burnt" aria-hidden />
          <span className="font-display text-base font-medium tracking-[-0.2px] text-ink">
            awesome.town
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[1.4px] text-ink-muted">
            © 2026
          </span>
          <span className="block h-px w-5 bg-rule" />
          <span className="font-mono text-[11px] uppercase tracking-[1.4px] text-ink-muted">
            Grown with{" "}
            <span aria-label="love" role="img" className="normal-case">
              ❤️
            </span>{" "}
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-2 transition-colors hover:text-ink"
            >
              Claude Code
            </a>{" "}
            &{" "}
            <a
              href="https://www.pencil.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-rule underline-offset-2 transition-colors hover:text-ink"
            >
              Pencil
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-[13px] font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ dotColor, text }: { dotColor: string; text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotColor}`} aria-hidden />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[1.6px] text-ink-soft">
        {text}
      </span>
    </div>
  );
}
