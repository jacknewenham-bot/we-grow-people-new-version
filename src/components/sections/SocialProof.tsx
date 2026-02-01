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
  "The Social Group",
  "Expect Nothing Clo",
  "HuffNPuff Technology",
  "The Visual Folks",
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
          className="overflow-hidden"
        >
          <div className="logo-marquee">
            {[...logos, ...logos].map((logo, index) => (
              <span
                key={`${logo}-${index}`}
                className="logo-marquee-item"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
