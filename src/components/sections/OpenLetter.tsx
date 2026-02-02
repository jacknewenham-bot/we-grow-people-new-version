import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const messages = [
  {
    id: 1,
    role: "user",
    text: "Thanks again for the training! I joined for the cert, but learned way more than expected.",
    delay: 0.5
  },
  {
    id: 2,
    role: "assistant",
    text: "Glad to hear that 🙂",
    delay: 2.5
  },
  {
    id: 3,
    role: "user",
    text: "Already using it at work, my manager noticed too.",
    delay: 4.0
  },
  {
    id: 4,
    role: "assistant",
    text: "That’s what matters. Real skills, real impact.\nLet us know if we can help further.",
    delay: 6.0
  }
];

export function OpenLetter() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    let timeouts: ReturnType<typeof setTimeout>[] = [];

    // Reset messages when view changes or component mounts
    setVisibleMessages([]);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start sequence
          messages.forEach((msg) => {
            const timeout = setTimeout(() => {
              setVisibleMessages(prev => [...prev, msg.id]);
            }, msg.delay * 1000);
            timeouts.push(timeout);
          });
          observer.disconnect(); // Only run once
        }
      });
    }, { threshold: 0.2 });

    const element = document.getElementById('chat-trigger');
    if (element) observer.observe(element);

    return () => {
      timeouts.forEach(clearTimeout);
      observer.disconnect();
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
            <div className="relative h-[600px] w-full flex items-center justify-center" id="chat-trigger">
              {/* Background with Image */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden">
                <img
                  src="/images/about/modern_corporate_workshop_1769341602532.png"
                  alt="Corporate Workshop Background"
                  className="w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
              </div>

              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[550px] bg-zinc-950 rounded-[2.5rem] border-[6px] border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
                {/* Phone Header */}
                <div className="bg-zinc-900 p-4 border-b border-white/5 flex items-center justify-between shrink-0 top-0 z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center text-xs font-bold text-lime">
                      AI
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">WeGrowPeople</div>
                      <div className="text-[10px] text-zinc-400">Online</div>
                    </div>
                  </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-zinc-950/50 backdrop-blur-sm scrollbar-none flex flex-col justify-end pb-8">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={visibleMessages.includes(msg.id) ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 10 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`flex ${msg.role === 'assistant' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'assistant'
                          ? 'bg-lime text-primary font-medium rounded-br-none'
                          : 'bg-zinc-800 text-white rounded-bl-none border border-white/5'
                          }`}
                      >
                        {msg.text.split('\n').map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                  {/* Typing Indicator for fun/realism, optional */}
                  {visibleMessages.length < messages.length && visibleMessages.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-end"
                    >
                      <div className="bg-lime/20 p-2 rounded-2xl rounded-br-none flex gap-1">
                        <span className="w-1.5 h-1.5 bg-lime rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <span className="w-1.5 h-1.5 bg-lime rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <span className="w-1.5 h-1.5 bg-lime rounded-full animate-bounce" />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Phone Bottom Input Mock */}
                <div className="p-3 bg-zinc-900 border-t border-white/5 shrink-0">
                  <div className="h-10 bg-zinc-800 rounded-full w-full opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
