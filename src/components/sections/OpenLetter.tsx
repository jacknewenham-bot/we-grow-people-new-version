import { AnimatePresence, motion } from "framer-motion";
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
    text: "Already using it at work. My numbers are improving already!"
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
  const [typingRole, setTypingRole] = useState<"assistant" | null>(null);
  const loopTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);
  const loopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messagesViewportRef = useRef<HTMLDivElement | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const baseMessageIntervalMs = 540;
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
      setTypingRole(null);

      let elapsed = 0;
      messages.forEach((message, index) => {
        const previous = index > 0 ? messages[index - 1] : null;
        const senderSwitched = previous && previous.role !== message.role;
        const typingDurationMs = Math.min(
          1500,
          Math.max(520, message.text.replace(/\n/g, " ").length * 16)
        );

        if (senderSwitched) {
          elapsed += 260;
        }

        if (message.role === "assistant") {
          const typingStart = setTimeout(() => {
            setTypingRole("assistant");
          }, elapsed);
          loopTimeouts.current.push(typingStart);
          elapsed += typingDurationMs;
        } else {
          elapsed += 220;
        }

        const timeout = setTimeout(() => {
          setTypingRole(null);
          setVisibleCount(index + 1);
        }, elapsed);
        loopTimeouts.current.push(timeout);

        elapsed += baseMessageIntervalMs;
      });

      const totalDuration = elapsed + cyclePauseMs;
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
      if (scrollFrameRef.current) cancelAnimationFrame(scrollFrameRef.current);
    };
  }, []);

  useEffect(() => {
    const viewport = messagesViewportRef.current;
    if (!viewport) return;

    if (scrollFrameRef.current) {
      cancelAnimationFrame(scrollFrameRef.current);
      scrollFrameRef.current = null;
    }

    const startTop = viewport.scrollTop;
    const targetTop = Math.max(0, viewport.scrollHeight - viewport.clientHeight);
    if (Math.abs(targetTop - startTop) < 1) return;

    const duration = 420;
    const start = performance.now();
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const tick = (now: number) => {
      const elapsed = Math.min(1, (now - start) / duration);
      viewport.scrollTop = startTop + (targetTop - startTop) * easeOutCubic(elapsed);
      if (elapsed < 1) {
        scrollFrameRef.current = requestAnimationFrame(tick);
      } else {
        scrollFrameRef.current = null;
      }
    };

    scrollFrameRef.current = requestAnimationFrame(tick);
  }, [visibleCount, typingRole]);

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
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 type-caption font-semibold mb-6">
                Open letter
              </div>
              <h2 className="section-headline mb-6">
                An open letter to modern teams
              </h2>
              <div className="space-y-6 type-body text-white/80">
                <p>
                  The workplace is changing faster than ever. New tools, shifting roles, and rising expectations make growth feel harder than it should be.
                </p>
                <p className="text-white font-medium">
                  At WeGrowPeople, we believe growth doesn’t need to be complicated.
                </p>
                <p>
                  We deliver practical training in sales, communication, performance, and AI so teams build real capability, not just short-term momentum.
                </p>
                  <p className="text-lime font-bold text-[1.1875rem]">Let’s make growth simpler.</p>
              </div>
            </div>

            {/* Right Visual - Phone with Chat */}
            <div
              className="relative h-[600px] w-full flex items-center justify-center"
              id="chat-trigger"
            >
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[560px] rounded-[3rem] border-[10px] border-zinc-600 shadow-[0_30px_90px_rgba(0,0,0,0.8)] ring-1 ring-white/20 overflow-hidden bg-[#111b21]">
                <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[3.2rem] bg-white/10 blur-md" />

                {/* Messages */}
                <div
                  ref={messagesViewportRef}
                  className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end gap-2 overflow-y-auto"
                >
                  {messages.slice(0, visibleCount).map((msg) => (
                    <motion.div
                      key={msg.id}
                      layout
                      className={`flex ${msg.role === "assistant" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 10, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.32,
                        ease: [0.2, 0.8, 0.2, 1],
                        layout: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
                      }}
                      style={{ willChange: "transform, opacity" }}
                    >
                      <div
                        className={`max-w-[85%] px-4 py-3 rounded-2xl type-caption leading-relaxed shadow-lg ${msg.role === "assistant"
                            ? "bg-lime text-primary font-medium rounded-br-none"
                            : "bg-[#202c33] text-white rounded-bl-none border border-white/5"
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
                  <AnimatePresence mode="popLayout">
                    {typingRole === "assistant" && (
                      <motion.div
                        key="typing-indicator"
                        layout
                        className="flex justify-end"
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -2, scale: 0.98 }}
                        transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <div className="px-3 py-2 rounded-2xl rounded-br-none bg-lime/85">
                          <div className="flex items-center gap-1">
                            {[0, 1, 2].map((dot) => (
                              <motion.span
                                key={dot}
                                className="w-1.5 h-1.5 rounded-full bg-primary/70"
                                animate={{ opacity: [0.35, 1, 0.35] }}
                                transition={{
                                  duration: 0.9,
                                  repeat: Infinity,
                                  delay: dot * 0.12,
                                  ease: "easeInOut",
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
