import { motion } from "framer-motion";

const logos = [
  { name: "Partner 1", image: "/Updated logos/1.png" },
  { name: "Partner 2", image: "/Updated logos/2.png" },
  { name: "Partner 3", image: "/Updated logos/3.png" },
  { name: "Partner 4", image: "/Updated logos/4.png" },
  { name: "Partner 5", image: "/Updated logos/5.png" },
  { name: "Partner 6", image: "/Updated logos/6.png" },
  { name: "Partner 7", image: "/Updated logos/7.png" },
  { name: "Partner 8", image: "/Updated logos/8.png" },
  { name: "Partner 9", image: "/Updated logos/9.png" },
];

export function SocialProof() {
  return (
    <section className="py-2 bg-white border-b border-border">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-muted-foreground mb-2"
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
              <div
                key={`${logo.name}-${index}`}
                className="logo-marquee-item flex h-16 w-40 shrink-0 items-center justify-center px-4 grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
