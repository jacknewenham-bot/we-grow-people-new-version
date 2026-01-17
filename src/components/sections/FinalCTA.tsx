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
    <>
      {/* Awards Section - Light sage background */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="headline-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
              >
                WeGrowPeople,
                <br />
                trusted training
                <br />
                partner
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-muted-foreground mb-8"
              >
                HRDC claimable programs built for modern Malaysian teams.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-background border border-border"
                  >
                    <Trophy className="w-5 h-5 text-lime" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{award.title}</p>
                      <p className="text-xs text-muted-foreground">{award.subtitle}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-lime" />
                  ))}
                </div>
                <Button variant="dark" size="lg" asChild>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                    Chat with us
                  </a>
                </Button>
              </div>
            </div>

            {/* Trophy illustration placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-80 h-80">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path
                    d="M100 20 L100 20 Q140 20 150 60 L150 80 Q150 100 130 110 L130 150 L140 160 L60 160 L70 150 L70 110 Q50 100 50 80 L50 60 Q60 20 100 20"
                    fill="none"
                    stroke="hsl(85 75% 55%)"
                    strokeWidth="3"
                    className="animate-pulse"
                  />
                  <circle cx="60" cy="50" r="5" fill="hsl(150 25% 22%)" />
                  <circle cx="140" cy="50" r="5" fill="hsl(150 25% 22%)" />
                  <circle cx="100" cy="170" r="5" fill="hsl(150 25% 22%)" />
                  <circle cx="150" cy="100" r="5" fill="hsl(150 25% 22%)" />
                  <circle cx="50" cy="100" r="5" fill="hsl(150 25% 22%)" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA - White background */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="headline-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-8"
            >
              Ready to grow
              <br />
              your people?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Button variant="lightOutline" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Chat with us
                </a>
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-muted-foreground italic"
            >
              The WeGrowPeople team
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
