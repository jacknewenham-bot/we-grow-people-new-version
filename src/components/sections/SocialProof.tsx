import { motion } from "framer-motion";

const logos = [
  "StoreHub",
  "SPEEDHOME",
  "Gartner",
  "Employment Hero",
  "BI WORLDWIDE",
  "Frost & Sullivan",
  "Carrots&Cake",
  "GrubCycle",
];

export function SocialProof() {
  return (
    <section className="py-12 bg-white border-b border-border">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground mb-8"
        >
          Experience working with teams at
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <motion.span
              key={logo}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="text-muted-foreground/60 font-bold text-lg tracking-wide uppercase"
            >
              {logo}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
