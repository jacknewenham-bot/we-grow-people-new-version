import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const messages = [
  {
    id: 1,
    role: "user",
    text: "Thanks again for the training!"
  },
  {
    id: 2,
    role: "user",
    text: "I joined for the cert, but learned way more than expected."
  },
  {
    id: 3,
    role: "assistant",
    text: "Glad to hear that 🙂"
  },
  {
    id: 4,
    role: "user",
    text: "Already using it at work"
  },
  {
    id: 5,
    role: "user",
    text: "my manager noticed too."
  },
  {
    id: 6,
    role: "assistant",
    text: "That’s what matters.\nReal skills, real impact.\nLet us know if we can help further."
  }
];

export function OpenLetter() {
  const [visibleCount, setVisibleCount] = useState(0);
  const loopTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const loopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageIntervalMs = 910;
  const cyclePauseMs = 3400;

  useEffect(() => {
    const scheduleSequence = () => {
      loopTimeouts.current.forEach(clearTimeout);
      loopTimeouts.current = [];
      if (loopTimer.current) {
        clearTimeout(loopTimer.current);
        loopTimer.current = null;
      }

      setVisibleCount(0);
      messages.forEach((_, index) => {
        const timeout = setTimeout(() => {
          setVisibleCount(index + 1);
        }, messageIntervalMs * index);
        loopTimeouts.current.push(timeout);
      });

      const totalDuration = messages.length * messageIntervalMs + cyclePauseMs;
      loopTimer.current = setTimeout(() => {
        scheduleSequence();
      }, totalDuration);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          scheduleSequence();
        }
      },
      { threshold: 0.35 }
    );

    const element = document.getElementById("chat-trigger");
    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
      loopTimeouts.current.forEach(clearTimeout);
      if (loopTimer.current) clearTimeout(loopTimer.current);
    };
  }, []);

  return (
    <section className="py-24 md:py-32 bg-hero relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-black/90 text-white p-6 md:p-12 lg:p-14 shadow-2xl overflow-hidden"
        >
          <div className="grid lg:grid-cols-[1fr,1fr] gap-10 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-6">
                Open letter
              </div>
              <h2 className="headline-display text-3xl md:text-5xl mb-6">
                An open letter to modern teams
              </h2>
              <div className="space-y-6 text-lg text-white/80 leading-relaxed">
                <p>
                  The workplace is changing faster than ever. New tools, shifting roles, and rising expectations make growth feel harder than it should be.
                </p>
                <p className="text-white font-medium">
                  At WeGrowPeople, we believe growth doesn’t need to be complicated.
                </p>
                <p>
                  We deliver practical training in sales, communication, performance, and AI so teams build real capability, not just short-term momentum.
                </p>
                <p className="text-lime font-bold text-xl">Let’s make growth simpler.</p>
              </div>
            </div>

            {/* Right Visual - Phone with Chat */}
            <div
              className="relative h-[600px] w-full flex items-center justify-center"
              id="chat-trigger"
            >
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[560px] rounded-[3rem] border-[10px] border-zinc-800 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden bg-black">
                <img
                  src="/images/about/modern_corporate_workshop_1769341602532.png"
                  alt="People attending a workshop"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Messages */}
                <div className="absolute inset-0 p-5 flex flex-col justify-start gap-3">
                  {messages.slice(0, visibleCount).map((msg) => (
                    <motion.div
                      key={msg.id}
                      className={`flex ${msg.role === "assistant" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-lg ${
                          msg.role === "assistant"
                            ? "bg-lime text-primary font-medium rounded-br-none"
                            : "bg-zinc-900/80 text-white rounded-bl-none border border-white/10"
                        }`}
                      >
                        {msg.text.split("\n").map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
