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
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="section-headline text-foreground mb-3">How it works</h2>
          <p className="type-body-secondary text-muted-foreground max-w-xl mx-auto">
            A simple, practical path from conversation to capability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
          {steps.map((step, index) => (
            <motion.a
              key={step.id}
              href={step.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`group aspect-square rounded-[1.65rem] bg-gradient-to-br ${step.accent} p-5 md:p-6 border border-white/80 shadow-[0_10px_34px_rgba(18,24,42,0.12)] hover:-translate-y-1 hover:shadow-[0_16px_42px_rgba(18,24,42,0.18)] transition-all duration-300 cursor-pointer flex flex-col`}
            >
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
    </section>
  );
}
