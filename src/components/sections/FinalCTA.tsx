import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/60123456789";

const awards = [
  { title: "HRDC Approved", subtitle: "Since 2023" },
  { title: "Expert Coaches", subtitle: "8+ specialists" },
  { title: "Teams Trained", subtitle: "50+ companies" },
  { title: "Practical Focus", subtitle: "100% applicable" },
];

export function FinalCTA() {
  return (
    <section className="py-32 md:py-40 bg-primary">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display font-heading text-5xl md:text-7xl lg:text-8xl text-white mb-12 leading-[0.9]"
          >
            Ready to grow
            <br />
            your people?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 mb-16 font-sans max-w-2xl mx-auto"
          >
            Start building future-ready teams today.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="lime" size="xl" asChild className="text-lg px-12 h-16 rounded-full font-semibold">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
