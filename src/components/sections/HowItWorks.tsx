import { motion } from "framer-motion";
import { MessageCircle, ClipboardCheck, UserCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Chat with us",
    description: "Tell us about your team and goals.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "We assess your needs",
    description: "We understand your context and skill gaps.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "We recommend the right coach and program",
    description: "Matched based on experience and relevance.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Training delivered",
    description: "Practical sessions your team can apply immediately. HRDC claimable.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-headline text-foreground mb-4"
          >
            Simple, practical,
            <br />
            effective
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-lime/50 to-transparent" />
              )}

              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-card h-full">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-lime flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-lime-foreground" />
                  </div>
                  <span className="text-4xl font-extrabold text-primary/20">
                    {step.step}
                  </span>
                </div>

                <h3 className="type-h4 text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="type-body-secondary text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
