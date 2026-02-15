import { motion } from "framer-motion";

const logos = [
  { name: "StoreHub", image: "/Logos/StoreHub.avif" },
  { name: "SPEEDHOME", image: "/Logos/SPEEDHOME.png" },
  { name: "Gartner", image: "/Logos/Gartner.png" },
  { name: "Employment Hero", image: "/Logos/EMPLOYMENT HERO web logo.png" },
  { name: "BI WORLDWIDE", image: "/Logos/BI WORLDWIDE.png" },
  { name: "Frost & Sullivan", image: "/Logos/Frost & Sullivan.png" },
  { name: "Carrots&Cake", image: "/Logos/Carrots&Cake logo.png" },
  { name: "GrubCycle", image: "/Logos/grub cycle logo.png" },
  { name: "The Social Group", image: "/Logos/the social.svg" },
  { name: "HuffNPuff Technology", image: "/Logos/huff n puff logo.png" },
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
                className="logo-marquee-item mx-8 flex items-center justify-center h-12 w-32 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-[120px] max-h-[30px] object-contain w-auto h-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
