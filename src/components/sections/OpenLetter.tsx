import { motion } from "framer-motion";

export function OpenLetter() {
  return (
    <section className="py-24 md:py-32 bg-hero">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-black/90 text-white p-8 md:p-12 lg:p-14 shadow-2xl"
        >
          <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold mb-6">
                Open letter
              </div>
              <h2 className="headline-display text-3xl md:text-5xl mb-6">
                An open letter to modern teams
              </h2>
              <div className="space-y-5 text-lg text-white/80 leading-relaxed">
                <p>
                  The workplace is changing faster than ever. New tools, shifting roles, and rising expectations make growth feel harder than it should be.
                </p>
                <p className="text-white">
                  At WeGrowPeople, we believe growth doesn’t need to be complicated.
                </p>
                <p>
                  We deliver practical training in sales, communication, performance, and AI so teams build real capability, not just short-term momentum.
                </p>
                <p className="text-lime font-semibold">Let’s make growth simpler.</p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-[2rem] bg-gradient-to-br from-lime/20 via-emerald-900/50 to-hero/90 border border-white/10 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)]" />
              <div className="absolute inset-6 rounded-[1.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(150,200,120,0.35),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(50,100,60,0.6),transparent_60%)] opacity-70" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
