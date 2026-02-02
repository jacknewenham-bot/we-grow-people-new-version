import { motion } from "framer-motion";

const messages = [
  {
    id: 1,
    role: "user",
    text: "Thanks again for the training! I joined for the cert, but learned way more than expected.",
    delay: 0.3
  },
  {
    id: 2,
    role: "assistant",
    text: "Glad to hear that 🙂",
    delay: 2.1
  },
  {
    id: 3,
    role: "user",
    text: "Already using it at work, my manager noticed too.",
    delay: 3.8
  },
  {
    id: 4,
    role: "assistant",
    text: "That’s what matters. Real skills, real impact.\nLet us know if we can help further.",
    delay: 5.6
  }
];

export function OpenLetter() {
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
            <div className="relative h-[600px] w-full flex items-center justify-center">
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[560px] rounded-[3rem] border-[10px] border-zinc-800 shadow-[0_25px_80px_rgba(0,0,0,0.6)] overflow-hidden bg-black">
                <img
                  src="/images/about/modern_corporate_workshop_1769341602532.png"
                  alt="People attending a workshop"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Messages */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end gap-3">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      className={`flex ${msg.role === "assistant" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: [0, 1, 1, 0], y: [12, 0, 0, -6], scale: [0.96, 1, 1, 0.98] }}
                      transition={{
                        duration: 6,
                        times: [0, 0.15, 0.75, 1],
                        delay: msg.delay,
                        repeat: Infinity,
                        repeatDelay: 6
                      }}
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
