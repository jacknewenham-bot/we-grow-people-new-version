import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Users, Cpu, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    id: "practical",
    icon: Lightbulb,
    title: "Practical skills",
    headline: "Learn skills you can use immediately.",
    body: "No outdated frameworks. No generic training. Just real tools and workflows your team can apply right away.",
    bullets: ["Hands-on exercises", "Real company scenarios", "Actionable frameworks"],
  },
  {
    id: "expert",
    icon: Users,
    title: "Expert-led",
    headline: "Learn from people who have done the work.",
    body: "We work with experienced practitioners across growth, sales, leadership, project management, AI, content, and wellbeing.",
    bullets: ["Industry experience", "Modern playbooks", "Malaysia-relevant use cases"],
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI-powered",
    headline: "Use modern tools to move faster.",
    body: "We help teams adopt AI in a practical way, from workflows to automation, so they can perform better with less effort.",
    bullets: ["AI workflows", "Vibe coding for business", "Agent-based productivity"],
  },
  {
    id: "hrdc",
    icon: Award,
    title: "HRDC claimable",
    headline: "HRDC claimable training, without the hassle.",
    body: "Programs are structured to meet HRDC requirements while keeping delivery practical and outcome-driven.",
    bullets: ["Fully compliant", "Easy claims process", "Outcome-focused"],
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState("practical");
  const activeFeature = features.find((f) => f.id === activeTab)!;

  return (
    <section id="programs" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-display text-3xl md:text-5xl lg:text-6xl text-foreground text-center mb-12"
        >
          Our Features
        </motion.h2>

        {/* Tab Pills - Dark pill style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex items-center bg-primary rounded-full p-1.5">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeTab === feature.id
                    ? "bg-white text-foreground shadow-md"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {feature.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feature Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text Content */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {activeFeature.headline}
              </h3>

              <p className="text-lg text-muted-foreground mb-8">
                {activeFeature.body}
              </p>

              <ul className="space-y-4 mb-8">
                {activeFeature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-lime flex-shrink-0" />
                    <span className="text-foreground">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button variant="dark" size="lg">
                Learn more about {activeFeature.title.toLowerCase()}
              </Button>
            </div>

            {/* Visual Placeholder - styled card */}
            <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 to-lime/10 flex items-center justify-center">
                <activeFeature.icon className="w-20 h-20 text-primary/40" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
