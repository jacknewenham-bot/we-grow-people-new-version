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
    image: "/training-images/practical-skills.png",
    popout: {
      title: "Live Workshop Format",
      bullets: ["Interactive sprints", "Guided role-play scenarios", "Immediate facilitator feedback"],
    },
  },
  {
    id: "expert",
    icon: Users,
    title: "Expert-led",
    headline: "Learn from people who have done the work.",
    body: "We work with experienced practitioners across growth, sales, leadership, project management, AI, content, and wellbeing.",
    bullets: ["Industry experience", "Modern playbooks", "Malaysia-relevant use cases"],
    image: "/training-images/expert-led.png",
    popout: {
      title: "Practitioner Led",
      bullets: ["Decades of real experience", "Proven industry playbooks", "No generic theory"],
    },
  },
  {
    id: "ai",
    icon: Cpu,
    title: "AI-powered",
    headline: "Use modern tools to move faster.",
    body: "We help teams adopt AI in a practical way, from workflows to automation, so they can perform better with less effort.",
    bullets: ["AI workflows", "Vibe coding for business", "Agent-based productivity"],
    image: "/training-images/ai-powered.jpg",
    popout: {
      title: "Modern Tooling",
      bullets: ["Live AI demonstrations", "Custom workflow setups", "Hands-on prompting guides"],
    },
  },
  {
    id: "hrdc",
    icon: Award,
    title: "HRDC claimable",
    headline: "HRDC claimable training, without the hassle.",
    body: "Programs are structured to meet HRDC requirements while keeping delivery practical and outcome-driven.",
    bullets: ["Fully compliant", "Easy claims process", "Outcome-focused"],
    image: "/training-images/hrdc-claimable.jpg",
    popout: {
      title: "Claim Ready",
      bullets: ["Full documentation provided", "SBL-Khas compliant", "Structured for approval"],
    },
  },
];

export function Features() {
  const [activeTab, setActiveTab] = useState("practical");
  const activeFeature = features.find((f) => f.id === activeTab)!;

  return (
    <section id="programs" className="py-12 md:py-28 bg-[#F1F1E6]">
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="headline-display font-heading text-4xl md:text-6xl text-foreground text-center mb-10 md:mb-16"
        >
          Our Training
        </motion.h2>

        {/* Tab Pills - Dark pill style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12 md:mb-20"
        >
          <div className="flex flex-wrap justify-center gap-2 bg-primary rounded-3xl md:rounded-full p-2 shadow-lg max-w-full">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(feature.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-heading font-semibold text-xs md:text-sm transition-all duration-300 ${activeTab === feature.id
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
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group border border-white/10">
              {/* Background Image */}
              <div className="absolute inset-0 bg-gray-100">
                {(activeFeature as any).image ? (
                  <img
                    src={(activeFeature as any).image}
                    alt={activeFeature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <activeFeature.icon className="w-24 h-24 text-primary/20" />
                  </div>
                )}
                {/* Overlay gradient for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Pop-out UI Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 max-w-[260px]"
              >
                <h4 className="font-heading font-bold text-foreground text-lg mb-3">
                  {(activeFeature as any).popout.title}
                </h4>
                <div className="space-y-2">
                  {(activeFeature as any).popout.bullets.map((item: string) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-lime mt-2 shrink-0" />
                      <span className="text-sm font-medium text-muted-foreground leading-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
