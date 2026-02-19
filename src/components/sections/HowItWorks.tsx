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

const variantThemes = [
  {
    id: "current",
    label: "Version 1 - Current",
    labelClassName: "border-primary/10 bg-white/90 text-foreground",
    blockClassName: "",
    cardAccents: steps.map((step) => step.accent),
    connectorClassName: "from-primary/35 via-lime/55 to-primary/35",
    dotClassName: "bg-lime shadow-[0_0_0_6px_hsl(var(--lime)/0.15)]",
    badgeClassName: "border-primary/15 bg-white/75 text-primary",
    glowClassName: "bg-[radial-gradient(circle_at_top_right,hsla(85,75%,55%,0.2),transparent_55%)]",
    cardBorderClassName: "border-white/80",
    cardShadowClassName: "shadow-[0_10px_34px_rgba(18,24,42,0.12)] hover:shadow-[0_18px_48px_rgba(18,24,42,0.2)]",
    iconClassName: "text-foreground/65",
    titleClassName: "text-foreground",
    descriptionClassName: "text-foreground/75",
  },
  {
    id: "brand-soft",
    label: "Version 2 - Brand Soft",
    labelClassName: "border-primary/15 bg-secondary/60 text-primary",
    blockClassName:
      "rounded-[2rem] border border-primary/10 bg-[linear-gradient(180deg,hsla(85,28%,96%,0.75),hsla(150,24%,96%,0.95))] p-4 md:p-6",
    cardAccents: [
      "from-[#e8f1ec] to-[#dce9df]",
      "from-[#e2f1e8] to-[#d3e7da]",
      "from-[#e5ece5] to-[#d5e1d6]",
      "from-[#f1eddf] to-[#e6ddc7]",
    ],
    connectorClassName: "from-primary/35 via-lime/55 to-primary/35",
    dotClassName: "bg-primary shadow-[0_0_0_6px_hsl(var(--primary)/0.15)]",
    badgeClassName: "border-primary/20 bg-white/88 text-primary",
    glowClassName: "bg-[radial-gradient(circle_at_top_right,hsla(150,25%,22%,0.16),transparent_58%)]",
    cardBorderClassName: "border-primary/10",
    cardShadowClassName: "shadow-[0_12px_32px_rgba(17,42,30,0.14)] hover:shadow-[0_20px_44px_rgba(17,42,30,0.2)]",
    iconClassName: "text-primary/65",
    titleClassName: "text-primary",
    descriptionClassName: "text-primary/80",
  },
  {
    id: "brand-contrast",
    label: "Version 3 - Brand Contrast",
    labelClassName: "border-primary/20 bg-white text-primary",
    blockClassName:
      "rounded-[2rem] border border-primary/15 bg-[linear-gradient(180deg,hsla(150,20%,95%,0.95),hsla(80,30%,94%,0.9))] p-4 md:p-6",
    cardAccents: [
      "from-primary/15 to-primary/5",
      "from-primary/12 to-lime/25",
      "from-primary/14 to-secondary/80",
      "from-[#f2e8d2] to-[#e7dbc1]",
    ],
    connectorClassName: "from-primary/55 via-lime/65 to-primary/55",
    dotClassName: "bg-lime shadow-[0_0_0_6px_hsl(var(--lime)/0.2)]",
    badgeClassName: "border-primary/25 bg-white/92 text-primary",
    glowClassName: "bg-[radial-gradient(circle_at_top_right,hsla(85,75%,55%,0.2),transparent_58%)]",
    cardBorderClassName: "border-primary/15",
    cardShadowClassName: "shadow-[0_12px_34px_rgba(19,45,33,0.16)] hover:shadow-[0_22px_46px_rgba(19,45,33,0.24)]",
    iconClassName: "text-primary/75",
    titleClassName: "text-primary",
    descriptionClassName: "text-primary/85",
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

        <div id="how-it-works-steps" className="space-y-10 md:space-y-14">
          {variantThemes.map((variant, variantIndex) => (
            <div key={variant.id} className={variant.blockClassName}>
              <div className="mb-4">
                <span
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${variant.labelClassName}`}
                >
                  {variant.label}
                </span>
              </div>
              <div className="relative">
                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scaleX: 0.85 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`pointer-events-none absolute left-[7%] right-[7%] top-7 hidden h-[2px] origin-left bg-gradient-to-r xl:block ${variant.connectorClassName}`}
                />
                <motion.div
                  aria-hidden="true"
                  animate={{ left: ["7%", "93%", "7%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`pointer-events-none absolute top-[22px] hidden h-3 w-3 rounded-full xl:block ${variant.dotClassName}`}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
                  {steps.map((step, index) => (
                    <motion.a
                      key={`${variant.id}-${step.id}`}
                      href={step.href}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: variantIndex * 0.04 + index * 0.08 }}
                      className={`group relative aspect-square rounded-[1.65rem] bg-gradient-to-br ${variant.cardAccents[index]} p-5 md:p-6 border ${variant.cardBorderClassName} ${variant.cardShadowClassName} hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col`}
                    >
                      <div
                        className={`absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-bold tracking-[0.06em] ${variant.badgeClassName}`}
                      >
                        {`0${index + 1}`}
                      </div>
                      <div
                        className={`pointer-events-none absolute inset-0 rounded-[1.65rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${variant.glowClassName}`}
                      />
                      <div className="mb-5 md:mb-6">{step.visual}</div>

                      <div className="mt-auto">
                        <div className={`inline-flex items-center gap-2 mb-2 ${variant.iconClassName}`}>
                          <step.icon className="w-4 h-4" />
                        </div>
                        <h3 className={`type-h4 mb-2 ${variant.titleClassName}`}>{step.title}</h3>
                        <p className={`type-caption leading-snug ${variant.descriptionClassName}`}>{step.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
