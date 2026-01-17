import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60123456789";

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
            className="headline-display text-4xl md:text-6xl lg:text-7xl text-white mb-8"
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
            className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10"
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
            <Button variant="lime" size="lg" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#how-it-works" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                See how it works
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
