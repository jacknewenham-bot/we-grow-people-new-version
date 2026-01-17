import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Users, Cpu, Award, CheckCircle } from "lucide-react";

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
    title: "Expert-led coaching",
    headline: "Learn from people who have done the work.",
    body: "We work with experienced practitioners across growth, sales, leadership, project management, AI, content, and wellbeing.",
    bullets: ["Industry experience", "Modern playbooks", "Malaysia-relevant use cases"],
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI-powered learning",
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
    <section id="programs" className="py-20 md:py-28 gradient-hero">
      <div className="container">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-6"
          >
            What We Offer
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Where human skills meet{" "}
            <span className="text-gradient">smart technology</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {features.map((feature) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === feature.id
                  ? "gradient-primary text-primary-foreground shadow-md"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
              }`}
            >
              <feature.icon className="w-4 h-4" />
              {feature.title}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-card border border-border">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <activeFeature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {activeFeature.headline}
                </h3>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {activeFeature.body}
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {activeFeature.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-center gap-3 p-4 rounded-xl bg-primary-light/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
