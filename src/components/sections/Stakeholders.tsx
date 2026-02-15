import { motion } from "framer-motion";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    name: "Technology & SaaS",
    body: "Scale faster with better execution, collaboration, and AI adoption.",
    href: "/training/ai",
    icon: Building2,
  },
  {
    name: "Professional Services",
    body: "Improve client delivery, communication, and day-to-day performance.",
    href: "/training/management",
    icon: BriefcaseBusiness,
  },
  {
    name: "Finance & Fintech",
    body: "Strengthen decision-making, governance, and operational clarity.",
    href: "/training/operations",
    icon: Landmark,
  },
  {
    name: "Retail & E-commerce",
    body: "Align teams, improve execution, and adapt quickly to change.",
    href: "/training/marketing",
    icon: ShoppingBag,
  },
  {
    name: "Healthcare & Wellbeing",
    body: "Build resilient teams while maintaining care quality and compliance.",
    href: "/training/management",
    icon: HeartPulse,
  },
  {
    name: "And more",
    body: "Custom programs tailored to your industry and business context.",
    href: "/contact",
    icon: Sparkles,
  },
];

export function Stakeholders() {
  return (
    <section className="py-20 md:py-28 bg-muted/20">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] items-start">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-headline text-foreground"
            >
              Training built for your industry
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-base md:text-lg text-muted-foreground font-sans"
            >
              We work with teams across a wide range of industries, adapting our training to real-world challenges,
              regulations, and ways of working, not one-size-fits-all theory.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.a
                  key={industry.name}
                  href={industry.href}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="group rounded-3xl border border-border bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary/70 border border-primary/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading font-black text-xl text-foreground tracking-tight">{industry.name}</h3>
                  <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">{industry.body}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
