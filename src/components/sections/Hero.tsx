import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%20there%2C%20I'm%20interested%20in%20finding%20out%20more%20about%20your%20training";

// Floating avatar data with role badges
const floatingAvatars = [
  {
    id: 1,
    role: "Marketing",
    color: "bg-lime",
    textColor: "text-lime-foreground",
    position: "top-24 left-8 md:left-16",
    delay: 0,
    initials: "MK"
  },
  {
    id: 2,
    role: "Sales",
    color: "bg-yellow-400",
    textColor: "text-yellow-900",
    position: "bottom-48 left-4 md:left-24",
    delay: 1,
    initials: "SL"
  },
  {
    id: 3,
    role: "Leadership",
    color: "bg-lime",
    textColor: "text-lime-foreground",
    position: "top-32 right-8 md:right-20",
    delay: 0.5,
    initials: "LD"
  },
  {
    id: 4,
    role: "Operations",
    color: "bg-blue-200",
    textColor: "text-blue-900",
    position: "right-4 md:right-16 top-1/2",
    delay: 1.5,
    initials: "OP"
  },
  {
    id: 5,
    role: "HR",
    color: "bg-pink-200",
    textColor: "text-pink-900",
    position: "bottom-32 right-8 md:right-32",
    delay: 2,
    initials: "HR"
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen bg-hero overflow-hidden flex items-center">
      {/* Floating Avatars */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatingAvatars.map((avatar) => (
          <motion.div
            key={avatar.id}
            className={`absolute ${avatar.position}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: avatar.delay * 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5 + avatar.delay, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2"
            >
              {/* Avatar circle */}
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-lg font-bold text-gray-600 border-2 border-white/20">
                {avatar.initials}
              </div>
              {/* Role badge */}
              <span className={`pill-badge ${avatar.color} ${avatar.textColor} shadow-lg`}>
                {avatar.role}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - Uppercase Display */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="headline-display font-heading text-4xl md:text-6xl lg:text-7xl text-white mb-8"
          >
            Future-ready training
            <br />
            <span className="text-white/90">for modern teams</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 font-sans"
          >
            Expert-led coaching and corporate training that builds real capability, confidence, and results. HRDC claimable programs built for Malaysia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Button variant="lime" size="lg" asChild className="text-base font-semibold px-8 h-12">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat with us
              </a>
            </Button>
          </motion.div>

          {/* Rating dots */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="rating-dot" />
                ))}
              </div>
              <span className="text-white/60 text-sm">HRDC Claimable</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="rating-dot" />
                ))}
              </div>
              <span className="text-white/60 text-sm">Expert-led Programs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
