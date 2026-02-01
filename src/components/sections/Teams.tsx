import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const teams = [
  {
    title: "Marketing teams",
    description: "Build growth systems that convert and scale.",
    gradient: "from-lime/20 to-primary/20",
    href: "/training/marketing",
  },
  {
    title: "Sales teams",
    description: "Sell more confidently with modern workflows and better conversations.",
    gradient: "from-yellow-200/50 to-lime/20",
    href: "/sales-training",
  },
  {
    title: "Leadership teams",
    description: "Lead with clarity, make better decisions, and build strong teams.",
    gradient: "from-blue-200/50 to-primary/20",
    href: "/training/management",
  },
  {
    title: "Operations teams",
    description: "Improve execution, productivity, and internal processes.",
    gradient: "from-primary/20 to-lime/20",
    href: "/training/operations",
  },
  {
    title: "HR and people teams",
    description: "Support performance, culture, and wellbeing at work.",
    gradient: "from-pink-200/50 to-lime/20",
    href: "/training/management",
  },
  {
    title: "Finance teams",
    description: "Streamline processes and improve financial decision-making.",
    gradient: "from-purple-200/50 to-lime/20",
    href: "/training/operations",
  },
];

export function Teams() {
  return (
    <section className="py-24 md:py-32 bg-[#e8f5e0]">
      <div className="container">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display font-heading text-4xl md:text-6xl text-foreground mb-6"
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
            className="text-lg md:text-xl text-muted-foreground font-sans"
          >
            Different teams need different skills.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teams.map((team, index) => (
            <motion.div
              key={team.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image placeholder */}
              <div className={`h-64 bg-gradient-to-br ${team.gradient} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4 absolute top-48 left-8 z-10">
                  {team.title}
                </h3>

                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {team.description}
                </p>

                <Button
                  variant="lime"
                  size="sm"
                  className="rounded-full"
                  asChild
                >
                  <a href={team.href}>See use case</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
