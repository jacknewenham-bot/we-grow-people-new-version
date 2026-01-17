import { motion } from "framer-motion";

const industries = [
  "Marketing",
  "Sales",
  "Operations",
  "Leadership",
  "Wellbeing",
  "Tech",
  "HR",
  "Growth",
];

export function SocialProof() {
  return (
    <section className="py-16 bg-muted/50 border-y border-border">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground mb-8"
        >
          Trusted by growing teams across marketing, sales, operations, leadership, and wellbeing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
        >
          {industries.map((industry, index) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-5 py-2.5 rounded-full bg-card border border-border text-muted-foreground font-medium text-sm shadow-sm"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
