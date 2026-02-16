import { motion } from "framer-motion";
import { CheckCircle2, MessageSquareText, Sparkles, UserRound } from "lucide-react";

const steps = [
  {
    id: "chat",
    title: "Chat with us",
    description: "Tell us your goals, challenges, and team context.",
    href: "/contact",
    accent: "from-[#d8ecff] to-[#c6e2ff]",
    icon: MessageSquareText,
    visual: (
      <div className="rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_rgba(21,35,54,0.14)] border border-white/60">
        <div className="w-[72%] h-2 rounded-full bg-[#dbe8f7] mb-2" />
        <div className="w-[88%] h-2 rounded-full bg-[#dbe8f7] mb-3" />
        <div className="ml-auto w-[62%] h-7 rounded-2xl bg-lime/90" />
      </div>
    ),
  },
  {
    id: "assess",
    title: "Assess needs",
    description: "We identify skill gaps, priorities, and constraints.",
    href: "/consultancy",
    accent: "from-[#d8f3ea] to-[#c8ecd7]",
    icon: CheckCircle2,
    visual: (
      <div className="rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_rgba(16,44,30,0.12)] border border-white/60 space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-lime/80 shrink-0" />
          <span className="h-2 w-[75%] rounded-full bg-[#d7eadf]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-lime/80 shrink-0" />
          <span className="h-2 w-[62%] rounded-full bg-[#d7eadf]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full bg-lime/80 shrink-0" />
          <span className="h-2 w-[82%] rounded-full bg-[#d7eadf]" />
        </div>
      </div>
    ),
  },
  {
    id: "match",
    title: "Match program",
    description: "We recommend the right coach and training.",
    href: "/coaches",
    accent: "from-[#e8e5ff] to-[#d9d2ff]",
    icon: UserRound,
    visual: (
      <div className="rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_rgba(40,33,88,0.14)] border border-white/60">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-8 h-8 rounded-full bg-[#d5dcf6]" />
          <div className="w-full">
            <div className="h-2 w-2/3 rounded-full bg-[#dcdff1] mb-1" />
            <div className="h-2 w-1/2 rounded-full bg-[#e8eaf5]" />
          </div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-[#f2f4fb] px-2 py-1.5">
          <span className="h-2 w-1/2 rounded-full bg-[#ccd5ef]" />
          <span className="text-[10px] font-semibold text-[#4a5380] bg-white px-2 py-0.5 rounded-full">Best fit</span>
        </div>
      </div>
    ),
  },
  {
    id: "deliver",
    title: "Deliver training",
    description: "Practical sessions applied immediately. HRDC claimable.",
    href: "/about",
    accent: "from-[#ffe9d8] to-[#ffd8b7]",
    icon: Sparkles,
    visual: (
      <div className="rounded-2xl bg-white/95 p-3 shadow-[0_8px_24px_rgba(79,42,5,0.12)] border border-white/60">
        <div className="rounded-xl bg-[#edf6ef] px-2.5 py-2 text-[11px] font-medium text-[#365a44] mb-2">
          Session live
        </div>
        <div className="flex items-center gap-2">
          <span className="w-6 h-6 rounded-lg bg-[#ffd18f]" />
          <span className="h-2 w-[65%] rounded-full bg-[#e7e5dc]" />
        </div>
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,hsla(150,25%,22%,0.08),transparent_62%)]"
      />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="section-headline text-foreground mb-3">How it works</h2>
          <p className="type-body-secondary text-muted-foreground max-w-xl mx-auto">
            A practical approach to building real capability.
          </p>
        </motion.div>

        <div id="how-it-works-steps" className="relative">
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scaleX: 0.85 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute left-[7%] right-[7%] top-7 hidden h-[2px] origin-left bg-gradient-to-r from-primary/35 via-lime/55 to-primary/35 xl:block"
          />
          <motion.div
            aria-hidden="true"
            animate={{ left: ["7%", "93%", "7%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute top-[22px] hidden h-3 w-3 rounded-full bg-lime shadow-[0_0_0_6px_hsl(var(--lime)/0.15)] xl:block"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
            {steps.map((step, index) => (
              <motion.a
                key={step.id}
                href={step.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`group relative aspect-square rounded-[1.65rem] bg-gradient-to-br ${step.accent} p-5 md:p-6 border border-white/80 shadow-[0_10px_34px_rgba(18,24,42,0.12)] hover:-translate-y-1.5 hover:shadow-[0_18px_48px_rgba(18,24,42,0.2)] transition-all duration-300 cursor-pointer flex flex-col`}
              >
                <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 bg-white/75 text-[11px] font-bold tracking-[0.06em] text-primary">
                  {`0${index + 1}`}
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,hsla(85,75%,55%,0.2),transparent_55%)]" />
                <div className="mb-5 md:mb-6">{step.visual}</div>

                <div className="mt-auto">
                  <div className="inline-flex items-center gap-2 mb-2 text-foreground/65">
                    <step.icon className="w-4 h-4" />
                  </div>
                  <h3 className="type-h4 text-foreground mb-2">{step.title}</h3>
                  <p className="type-caption text-foreground/75 leading-snug">{step.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
