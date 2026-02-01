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
    <section id="programs" className="py-20 md:py-28 bg-[#F1F1E6]">
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-display font-heading text-4xl md:text-6xl text-foreground text-center mb-16"
        >
          Our Training
        </motion.h2>

        {/* Tab Pills - Dark pill style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-20"
        >
          <div className="inline-flex items-center bg-primary rounded-full p-2 shadow-lg">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`px-6 py-3 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${activeTab === feature.id
                  ? "bg-white text-foreground shadow-sm"
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
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div className="max-w-lg">
              <h3 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {activeFeature.headline}
              </h3>

              <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-sans">
                {activeFeature.body}
              </p>

              <ul className="space-y-5 mb-10">
                {activeFeature.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-lime flex-shrink-0" />
                    <span className="text-foreground font-medium text-lg">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button variant="dark" size="lg" className="rounded-full px-8">
                Learn more about {activeFeature.title.toLowerCase()}
              </Button>
            </div>

            {/* Visual Placeholder - styled UI card */}
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-border/50 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
              {/* Decorative UI elements */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-50 border-b flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mt-12 w-full h-full bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
                <activeFeature.icon className="w-24 h-24 text-primary/20" />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
