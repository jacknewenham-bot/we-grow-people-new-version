import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "The training was practical and immediately applicable. Our team communicated better within weeks. Its intuitive approach and robust framework match the requirements of our industry.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "Tech Startup",
  },
  {
    quote: "Our managers finally had frameworks they could use immediately. This felt modern, relevant, and designed for real work.",
    author: "Ahmad Rahman",
    role: "HR Lead",
    company: "E-commerce Company",
  },
  {
    quote: "The support and responsiveness of the WeGrowPeople team made all the difference. Highly recommend for any growing company.",
    author: "Mei Ling Tan",
    role: "Operations Manager",
    company: "Consulting Firm",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Creative staggered headline like Tomorro */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 mb-2"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-light text-foreground font-bold text-xl md:text-2xl">
              Our customers
              <span className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">SC</span>
            </span>
            <span className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-2"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-lime text-lime-foreground font-bold text-xl md:text-2xl">
              <span className="flex gap-0.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="w-2 h-2 rounded-full bg-primary" />
              </span>
              talk about it
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-light text-foreground font-bold text-xl md:text-2xl">
              better than us
            </span>
            <span className="w-12 h-12 rounded-full bg-lime flex items-center justify-center">
              <svg className="w-6 h-6 text-lime-foreground" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </motion.div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-3xl p-8 border border-border"
            >
              <p className="text-lg font-semibold text-foreground mb-8 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-lime text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating dots */}
              <div className="flex gap-1.5 mt-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2.5 h-2.5 rounded-full bg-lime" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
