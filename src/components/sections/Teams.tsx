import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const teams = [
  {
    title: "Marketing teams",
    description: "Build growth systems that convert and scale.",
    gradient: "from-lime/20 to-primary/20",
  },
  {
    title: "Sales teams",
    description: "Sell more confidently with modern workflows and better conversations.",
    gradient: "from-yellow-200/50 to-lime/20",
  },
  {
    title: "Leadership teams",
    description: "Lead with clarity, make better decisions, and build strong teams.",
    gradient: "from-blue-200/50 to-primary/20",
  },
  {
    title: "Operations teams",
    description: "Improve execution, productivity, and internal processes.",
    gradient: "from-primary/20 to-lime/20",
  },
  {
    title: "HR and people teams",
    description: "Support performance, culture, and wellbeing at work.",
    gradient: "from-pink-200/50 to-lime/20",
  },
];

export function Teams() {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Designed for the
            <br />
            entire company
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
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
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${team.gradient} p-1`}
            >
              <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 rounded-[22px] p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {team.title}
                </h3>

                <p className="text-white/70 mb-6 flex-grow">
                  {team.description}
                </p>

                <Button 
                  variant="lime" 
                  size="sm"
                  className="w-fit"
                >
                  See use case
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
