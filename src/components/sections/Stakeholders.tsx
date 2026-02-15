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
    <section className="relative overflow-hidden bg-[#0c0f0d] py-24 md:py-32 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-lime/20 blur-[140px]" />
        <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-sky-300/20 blur-[160px]" />
      </div>
      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-headline text-white"
            >
              Training built for your industry
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-6 type-body-secondary text-white/70 font-sans"
            >
              We work with teams across a wide range of industries, adapting our training to real-world challenges,
              regulations, and ways of working, not one-size-fits-all theory.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-3">
              {industries.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-full border px-4 py-2 type-nav font-sans transition-all ${isActive
                        ? "border-transparent text-[#111111] shadow-lg"
                        : "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
                      }`}
                    style={isActive ? { backgroundColor: item.accent } : undefined}
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
                className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center">
                  <div>
                    <h3 className="type-h3">{activeIndustry.title}</h3>
                    <p className="mt-4 type-body-secondary text-white/70 font-sans">{activeIndustry.body}</p>
                    <a
                      href={activeIndustry.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 type-nav font-sans text-white/90 transition hover:border-white/60 hover:text-white"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                      <div
                        className="absolute inset-0 opacity-70"
                        style={{
                          background: `radial-gradient(circle at 20% 20%, ${activeIndustry.accent} 0%, transparent 55%), radial-gradient(circle at 80% 30%, ${activeIndustry.secondary} 0%, transparent 55%)`,
                        }}
                      />
                      <img
                        src={activeIndustry.image}
                        alt={activeIndustry.title}
                        className="relative z-10 h-full w-full object-cover"
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
    </section>
  );
}
