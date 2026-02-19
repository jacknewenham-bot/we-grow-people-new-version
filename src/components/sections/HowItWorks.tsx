import { motion } from "framer-motion";

const steps = [
  {
    id: "chat",
    title: "Chat with us",
    description: "Share your goals, challenges, and team context.",
    href: "/contact",
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
    description: "We recommend the right coach and program.",
    href: "/coaches",
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
    description: "Apply practical sessions immediately with HRDC-claimable outcomes.",
    href: "/about",
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

        <div id="how-it-works-steps" className="rounded-[2rem] border border-primary/10 bg-[linear-gradient(180deg,hsla(85,28%,96%,0.75),hsla(150,24%,96%,0.95))] p-4 md:p-6">
          <div className="relative">
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
              className="pointer-events-none absolute top-[22px] hidden h-3 w-3 rounded-full bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.15)] xl:block"
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
                  className={`group relative aspect-square min-w-0 rounded-[1.65rem] p-5 md:p-6 border border-primary/10 shadow-[0_12px_32px_rgba(17,42,30,0.14)] hover:shadow-[0_20px_44px_rgba(17,42,30,0.2)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col ${
                    index === 0
                      ? "bg-gradient-to-br from-[#e8f1ec] to-[#dce9df]"
                      : index === 1
                        ? "bg-gradient-to-br from-[#e2f1e8] to-[#d3e7da]"
                        : index === 2
                          ? "bg-gradient-to-br from-[#e5ece5] to-[#d5e1d6]"
                          : "bg-gradient-to-br from-[#f1eddf] to-[#e6ddc7]"
                  }`}
                >
                  <div className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-white/88 text-[11px] font-bold tracking-[0.06em] text-primary">
                    {`0${index + 1}`}
                  </div>
                  <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,hsla(150,25%,22%,0.16),transparent_58%)]" />
                  <div className="mb-5 md:mb-6">{step.visual}</div>

                  <div className="mt-auto min-w-0">
                    <h3 className="mb-2 text-[clamp(1.25rem,1.1vw,1.7rem)] leading-[1.06] font-black tracking-[-0.01em] text-primary [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] overflow-hidden">
                      {step.title}
                    </h3>
                    <p className="text-[clamp(1.02rem,1.12vw,1.18rem)] leading-snug text-primary/80 [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] overflow-hidden min-h-[2.8em]">
                      {step.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
