import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary-light text-primary font-medium text-sm mb-6"
          >
            Our Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8"
          >
            Cut through the noise.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              The modern workplace is moving faster than ever. New tools, new roles, and new expectations emerge constantly, and keeping up can feel like a minefield.
            </p>
            <p className="text-foreground font-medium">
              WeGrowPeople exists to make growth simpler.
            </p>
            <p>
              We deliver practical training in sales, communication, performance, and AI so teams stay ahead of the curve, not chase it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
