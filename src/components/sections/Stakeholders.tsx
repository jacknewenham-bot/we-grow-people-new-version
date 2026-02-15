import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";

const stakeholders = [
  {
    id: "leaders",
    label: "Founders & Leaders",
    title: "WeGrowPeople for Leaders",
    body:
      "You are balancing growth, people, and performance at the same time. We help leaders build teams that think clearly, execute better, and adapt faster without relying on theory or guesswork.",
    ctaLabel: "Learn more",
    href: "/training/management",
    image: "/Teams/Leadership.png",
    accent: "#F6C26C",
    secondary: "#9BE6D8",
  },
  {
    id: "sales",
    label: "Sales Teams",
    title: "WeGrowPeople for Sales Teams",
    body:
      "Better conversations win deals. We help sales teams sharpen how they communicate, qualify, and close using practical techniques they can apply on their very next call.",
    ctaLabel: "See sales training",
    href: "/sales-training",
    image: "/Teams/Sales.png",
    accent: "#F49B6A",
    secondary: "#F6D365",
  },
  {
    id: "marketing",
    label: "Marketing Teams",
    title: "WeGrowPeople for Marketing Teams",
    body:
      "Modern marketing moves fast. We help teams think more clearly, test smarter ideas, and use AI as a real advantage, not just another tool to manage.",
    ctaLabel: "Explore marketing training",
    href: "/training/marketing",
    image: "/Teams/Marketing.png",
    accent: "#B7B5FF",
    secondary: "#8EF0C3",
  },
  {
    id: "operations",
    label: "Operations Teams",
    title: "WeGrowPeople for Operations Teams",
    body:
      "Great operations make everything else work. We help teams improve processes, decision making, and execution so work flows better across the business.",
    ctaLabel: "See operations programs",
    href: "/training/operations",
    image: "/Teams/Operations.png",
    accent: "#89CFF0",
    secondary: "#A7F0BA",
  },
  {
    id: "hr",
    label: "HR & People Teams",
    title: "WeGrowPeople for HR & People Teams",
    body:
      "You are shaping how teams grow every day. Our programs help HR teams enable real capability building with training that is practical, relevant, and HRDC claimable.",
    ctaLabel: "View HR programs",
    href: "/training/management",
    image: "/Teams/HR.png",
    accent: "#FF9BC5",
    secondary: "#FFD38A",
  },
  {
    id: "individuals",
    label: "Individual Contributors",
    title: "WeGrowPeople for Individuals",
    body:
      "If you want to do better work, this is for you. Our training helps individuals build confidence, clarity, and skills they can apply immediately, not someday.",
    ctaLabel: "Browse programs",
    href: "/training/management",
    image: "/Teams/Finance.png",
    accent: "#C7E86B",
    secondary: "#9BD1FF",
  },
];

export function Stakeholders() {
  const [activeId, setActiveId] = useState(stakeholders[0].id);

  const activeStakeholder = useMemo(
    () => stakeholders.find((item) => item.id === activeId) ?? stakeholders[0],
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
              Training that fits your role
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-base md:text-lg text-white/70 font-sans"
            >
              No matter your role, we help teams build skills that actually show up at work.
            </motion.p>
            <div className="mt-10 flex flex-wrap gap-3">
              {stakeholders.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-full border px-4 py-2 text-sm font-sans transition-all ${isActive
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
                key={activeStakeholder.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] items-center">
                  <div>
                    <h3 className="font-sans text-2xl md:text-3xl font-semibold">
                      {activeStakeholder.title}
                    </h3>
                    <p className="mt-4 text-base md:text-lg text-white/70 font-sans">
                      {activeStakeholder.body}
                    </p>
                    <a
                      href={activeStakeholder.href}
                      className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-sans text-white/90 transition hover:border-white/60 hover:text-white"
                    >
                      {activeStakeholder.ctaLabel}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[420px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                      <div
                        className="absolute inset-0 opacity-70"
                        style={{
                          background: `radial-gradient(circle at 20% 20%, ${activeStakeholder.accent} 0%, transparent 55%), radial-gradient(circle at 80% 30%, ${activeStakeholder.secondary} 0%, transparent 55%)`,
                        }}
                      />
                      <img
                        src={activeStakeholder.image}
                        alt={activeStakeholder.title}
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
