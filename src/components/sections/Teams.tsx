import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const teams = [
  {
    title: "Marketing teams",
    text: "Marketing teams build scalable growth systems that convert consistently.",
    gradient: "from-lime/20 to-primary/20",
    image: "/Teams/Marketing.png",
    href: "/training/marketing",
  },
  {
    title: "Sales teams",
    text: "Sales teams sell with confidence through modern workflows and conversations.",
    gradient: "from-yellow-200/50 to-lime/20",
    image: "/Teams/Sales.png",
    href: "/sales-training",
  },
  {
    title: "Leadership teams",
    text: "Leadership teams lead with clarity, make strong decisions, and align teams.",
    gradient: "from-blue-200/50 to-primary/20",
    image: "/Teams/Leadership.png",
    href: "/training/management",
  },
  {
    title: "Operations teams",
    text: "Operations teams improve execution, productivity, and day-to-day work.",
    gradient: "from-primary/20 to-lime/20",
    image: "/Teams/Operations.png",
    href: "/training/operations",
  },
  {
    title: "HR and people teams",
    text: "HR and people teams support performance, culture, and wellbeing at work.",
    gradient: "from-pink-200/50 to-lime/20",
    image: "/Teams/HR.png",
    href: "/training/management",
  },
  {
    title: "Finance teams",
    text: "Finance teams streamline processes and make better decisions, faster.",
    gradient: "from-purple-200/50 to-lime/20",
    image: "/Teams/Finance.png",
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
            className="section-headline text-foreground mb-6"
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

        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
            {teams.map((team, index) => (
              <motion.a
                key={team.title}
                href={team.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] xl:min-w-[380px] snap-start rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`h-72 bg-gradient-to-br ${team.gradient} relative`}>
                  <img
                    src={team.image}
                    alt={team.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/15 backdrop-blur-xl border border-white/20 p-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-white text-base md:text-lg leading-relaxed font-medium">
                        {team.text}
                      </p>
                    </div>
                    <span className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 border border-white/20 text-white">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
