import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const teams = [
  {
    label: "Marketing",
    outcome: "Build scalable growth systems that convert more consistently.",
    image: "/Teams/Marketing.png",
    focalY: "18%",
    href: "/training/marketing",
  },
  {
    label: "Sales",
    outcome: "Close deals confidently with modern workflows and better conversations.",
    image: "/Teams/Sales.png",
    focalY: "18%",
    href: "/sales-training",
  },
  {
    label: "Leadership",
    outcome: "Align teams and make clearer, faster strategic decisions.",
    image: "/Teams/Leadership.png",
    focalY: "20%",
    href: "/training/management",
  },
  {
    label: "Operations",
    outcome: "Improve execution quality, productivity, and day-to-day coordination.",
    image: "/Teams/Operations.png",
    focalY: "18%",
    href: "/training/operations",
  },
  {
    label: "People",
    outcome: "Strengthen culture, performance, and wellbeing across the organization.",
    image: "/Teams/HR.png",
    focalY: "20%",
    href: "/training/management",
  },
  {
    label: "Finance",
    outcome: "Streamline processes and improve decision speed across finance operations.",
    image: "/Teams/Finance.png",
    focalY: "18%",
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
            className="section-headline text-foreground mb-4"
          >
            Built for teams with different needs
          </motion.h2>
        </div>

        <div className="relative">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
            {teams.map((team, index) => (
              <motion.a
                key={team.label}
                href={team.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative w-[280px] sm:w-[320px] lg:w-[340px] xl:w-[360px] shrink-0 aspect-[4/5] snap-start rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <img
                  src={team.image}
                  alt={`${team.label} team`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: `50% ${team.focalY}` }}
                />
                <div className="absolute inset-0 bg-black/12" />
                <div className="absolute inset-x-0 bottom-0 h-[34%] p-4 sm:p-5">
                  <div className="h-full w-full rounded-2xl border border-white/25 bg-white/16 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.24)]">
                    <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-5">
                      <div className="min-w-0 pr-1">
                        <p className="text-[0.72rem] sm:text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-white/80">
                          {team.label}
                        </p>
                        <p className="mt-1 text-white text-[0.95rem] sm:text-[1.02rem] leading-[1.35] font-medium">
                          {team.outcome}
                        </p>
                      </div>
                      <span className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/14 border border-white/25 text-white">
                        <ArrowRight className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
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
