import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

const industries = [
  {
    id: "technology",
    label: "Technology & SaaS",
    title: "Technology & SaaS",
    body: "Scale faster with better execution, collaboration, and AI adoption.",
    href: "/training/ai",
    image: "/Teams/Leadership.png",
    accent: "#9BE6D8",
    secondary: "#8EF0C3",
  },
  {
    id: "professional-services",
    label: "Professional Services",
    title: "Professional Services",
    body: "Improve client delivery, communication, and day-to-day performance.",
    href: "/training/management",
    image: "/Teams/Sales.png",
    accent: "#F6C26C",
    secondary: "#F49B6A",
  },
  {
    id: "finance-fintech",
    label: "Finance & Fintech",
    title: "Finance & Fintech",
    body: "Strengthen decision-making, governance, and operational clarity.",
    href: "/training/operations",
    image: "/Teams/Finance.png",
    accent: "#9BD1FF",
    secondary: "#89CFF0",
  },
  {
    id: "retail-ecommerce",
    label: "Retail & E-commerce",
    title: "Retail & E-commerce",
    body: "Align teams, improve execution, and adapt quickly to change.",
    href: "/training/marketing",
    image: "/Teams/Marketing.png",
    accent: "#FFD38A",
    secondary: "#C7E86B",
  },
  {
    id: "healthcare-wellbeing",
    label: "Healthcare & Wellbeing",
    title: "Healthcare & Wellbeing",
    body: "Build resilient teams while maintaining care quality and compliance.",
    href: "/training/management",
    image: "/Teams/HR.png",
    accent: "#FF9BC5",
    secondary: "#F6D365",
  },
  {
    id: "and-more",
    label: "And more",
    title: "And more",
    body: "Custom programs tailored to your industry and business context.",
    href: "/contact",
    image: "/Teams/Operations.png",
    accent: "#B7B5FF",
    secondary: "#A7F0BA",
  },
];

export function Stakeholders() {
  const [activeId, setActiveId] = useState(industries[0].id);

  const activeIndustry = useMemo(
    () => industries.find((item) => item.id === activeId) ?? industries[0],
    [activeId]
  );

  return (
    <section className="bg-background py-14 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-[#242a29] bg-[#13161c] px-6 py-10 text-white md:px-10 md:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-lime/14 blur-[140px]" />
            <div className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-[130px]" />
          </div>
          <div className="relative grid items-start gap-10 lg:grid-cols-[minmax(0,470px)_minmax(0,1fr)]">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                Industry Focus
              </span>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-5 text-balance text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl"
              >
                Training built for your industry
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="mt-6 max-w-[38ch] text-base leading-relaxed text-white/70 md:text-lg"
              >
                We work with teams across a wide range of industries, adapting our training to real-world challenges,
                regulations, and ways of working, not one-size-fits-all theory.
              </motion.p>
              <div className="mt-9 flex max-w-[520px] flex-wrap gap-2.5 md:gap-3">
                {industries.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveId(item.id)}
                      className={`rounded-full border px-4 py-2 type-nav font-sans transition-all ${isActive
                        ? "border-transparent bg-lime text-[#111111] shadow-[0_10px_24px_rgba(163,230,53,0.35)]"
                        : "border-white/30 bg-transparent text-white/85 hover:border-white/60 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 md:p-8"
                >
                  <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
                    <div>
                      <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-white md:text-5xl">
                        {activeIndustry.title}
                      </h3>
                      <p className="mt-4 max-w-[36ch] text-xl leading-relaxed text-white/70">{activeIndustry.body}</p>
                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={activeIndustry.href}
                          className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-base font-semibold text-white transition hover:border-white/70 hover:bg-white/5"
                        >
                          Learn more
                          <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-base font-semibold text-[#151515] transition hover:bg-lime/90"
                        >
                          Talk to us
                        </a>
                      </div>
                    </div>
                    <div className="flex justify-center lg:justify-end">
                      <div className="relative w-full max-w-[420px] overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#10131a] shadow-[0_28px_70px_rgba(0,0,0,0.4)]">
                        <div
                          className="absolute inset-0 opacity-60"
                          style={{
                            background: `radial-gradient(circle at 20% 20%, ${activeIndustry.accent} 0%, transparent 55%), radial-gradient(circle at 80% 30%, ${activeIndustry.secondary} 0%, transparent 55%)`,
                          }}
                        />
                        <img
                          src={activeIndustry.image}
                          alt={activeIndustry.title}
                          className="relative z-10 aspect-[4/3] w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
