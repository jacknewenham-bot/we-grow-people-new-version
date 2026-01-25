import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Jack's guidance has been incredible. His support was invaluable, offering insightful advice that truly made a difference. His expertise extends beyond technical knowledge; he is exceptionally well-versed in marketing strategies.",
    author: "Aurielle",
    role: "Product Manager",
    company: "Delman.io",
  },
  {
    quote: "I had an outstanding session with Jack! He provided clear direction and introduced me to powerful new tools to enhance my performance. I genuinely appreciated the insights and actionable advice he shared.",
    author: "Lauren Ellis",
    role: "Growth Marketing Manager",
    company: "Produce8",
  },
  {
    quote: "Jack was very helpful in pinpointing my current issues and giving actionable advice. He is honest, professional, and super generous with his knowledge. I definitely recommend him for any team seeking growth.",
    author: "Amber Yang",
    role: "Social Media Strategist",
    company: "Edge Labs",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Simplified headline */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display font-heading text-4xl md:text-6xl text-foreground mb-6"
          >
            What our clients say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground font-sans"
          >
            Real results from real teams.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Rating dots at top */}
              <div className="flex gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-lime" />
                ))}
              </div>

              <p className="text-lg font-medium text-foreground mb-8 leading-relaxed font-sans">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-lime/20 flex items-center justify-center">
                  <span className="text-base font-bold text-primary font-heading">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
