import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Users, Settings, Heart } from "lucide-react";

const teams = [
  {
    icon: TrendingUp,
    title: "Marketing teams",
    description: "Build growth systems that convert and scale.",
  },
  {
    icon: BarChart3,
    title: "Sales teams",
    description: "Sell more confidently with modern workflows and better conversations.",
  },
  {
    icon: Users,
    title: "Leadership teams",
    description: "Lead with clarity, make better decisions, and build strong teams.",
  },
  {
    icon: Settings,
    title: "Operations teams",
    description: "Improve execution, productivity, and internal processes.",
  },
  {
    icon: Heart,
    title: "HR and people teams",
    description: "Support performance, culture, and wellbeing at work.",
  },
];

export function Teams() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-accent-light text-accent font-medium text-sm mb-6"
          >
            For Every Team
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Designed for the entire company
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Different teams need different skills. We tailor programs to role, level, and goals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <team.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {team.title}
              </h3>

              <p className="text-muted-foreground">
                {team.description}
              </p>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
