import { motion } from "framer-motion";
import { ExternalLink, Heart, MessageCircle, Repeat2, Share2 } from "lucide-react";

const testimonials = [
  {
    date: "",
    quote:
      "Being in sales myself, Hamza's session gave me clear, practical insights to sharpen my sales strategy, better understand prospects, and handle objections more effectively.",
    author: "Ibrahim shahid",
    role: "Senior Valuation Lead - APAC",
    company: "Valutico",
    linkedin: "https://www.linkedin.com/in/ibrahim-shahid1/",
    image: "/Testimonials/Ibrahim shahid.jpeg",
  },
  {
    date: "May 27, 2024",
    quote:
      "I find Jack to be an outstanding mentor with a keen understanding of his industry. His approach is insightful, proactive, and constructive.",
    author: "Adenike Anthonia Abati",
    role: "Senior Content Marketer",
    company: "Smarketer's Hub",
    linkedin: "https://www.linkedin.com/in/adenike-abati/",
    image: "/Testimonials/Anthonia Abati.jpeg",
  },
  {
    date: "June 11, 2024",
    quote:
      "Jack's guidance during interview prep and technical feedback was detailed, practical, and genuinely useful. I highly recommend him as a mentor.",
    author: "Alexandra Aurielle",
    role: "Product Manager",
    company: "Delman.io",
    linkedin: "https://www.linkedin.com/in/alexandra-aurielle/",
    image: "/Testimonials/Alexandra Aurielle.jpeg",
  },
  {
    date: "",
    quote:
      "Hamza was genuine fun to work with. His work disposition spells real effort and strong outcomes, all while doing it with a smile.",
    author: "Barry Lim",
    role: "APAC Strategy & Economic Policy Advisor",
    company: "",
    linkedin: "https://www.linkedin.com/in/barrylim/",
    image: "/Testimonials/Barry Lim.jpeg",
  },
  {
    date: "June 01, 2024",
    quote:
      "I had a great session with Jack. He shared actionable tips on managing and monetizing my personal brand and followed up with extra resources.",
    author: "Safaa Zaki",
    role: "Content Creator",
    company: "Instagram",
    linkedin: "https://www.linkedin.com/in/safaazaki/",
    image: "/Testimonials/Safaa Zaki.jpeg",
  },
  {
    date: "",
    quote:
      "Jack led marketing experiments and stepped into product areas when needed. A true A player with strong ownership and execution.",
    author: "Hamel Shah",
    role: "Co-Founder",
    company: "Carrots&Cake",
    linkedin: "https://www.linkedin.com/in/hamelshah/",
    image: "/Testimonials/Hamel Shah.jpeg",
  },
  {
    date: "July 09, 2024",
    quote:
      "Jack provided clear direction and introduced useful tools for demand generation and CRO. The advice was practical and immediately actionable.",
    author: "Lauren Ellis",
    role: "Growth Marketing Manager",
    company: "Produce8",
    linkedin: "https://www.linkedin.com/in/laurenuellis/",
    image: "/Testimonials/Lauren Ellis.jpeg",
  },
  {
    date: "July 22, 2024",
    quote:
      "Jack was very helpful in pinpointing my current issues and giving honest, actionable advice. I definitely recommend him.",
    author: "Amber Yang",
    role: "Content Creator",
    company: "Edge Labs",
    linkedin: "https://www.linkedin.com/in/amberistic/",
    image: "/Testimonials/Amber Yang.jpeg",
  },
  {
    date: "July 25, 2024",
    quote:
      "Jack has been encouraging and attentive. He aligns his insights to my pace and consistently gives relevant answers to my questions.",
    author: "Mark Lester Catungal",
    role: "IT Educator",
    company: "Saint Columban College",
    linkedin: "https://www.linkedin.com/in/mark-lester-catungal-942201144/",
    image: "/Testimonials/Mark Lester Catungal.jpeg",
  },
  {
    date: "August 01, 2024",
    quote:
      "He was cheerful and very helpful. The information he gave helped me determine a clear direction.",
    author: "Berke Zavaro",
    role: "PPC Campaign Manager",
    company: "Marketily",
    linkedin: "https://www.linkedin.com/in/berkezavaro/",
    image: "/Testimonials/Berke Zavaro.jpeg",
  },
  {
    date: "August 07, 2024",
    quote:
      "Jack came prepared and gave personalized, useful feedback and recommendations. Clear 10/10 mentoring.",
    author: "Gary Chan",
    role: "Growth Marketing",
    company: "Operandio",
    linkedin: "https://www.linkedin.com/in/gary-chan-486715243/",
    image: "/Testimonials/Gary Chan.jpeg",
  },
  {
    date: "August 17, 2024",
    quote:
      "Great listener and communicator. He explains clearly, gives practical advice, and ensures everything is understood.",
    author: "Mohammad Habib",
    role: "Product Designer",
    company: "EAC",
    linkedin: "https://www.linkedin.com/in/princehabib17/",
    image: "/Testimonials/Mohammad Habib.jpeg",
  },
  {
    date: "October 9, 2023",
    quote:
      "Jack is proactive and motivated. He brings strong ideas, experiments continuously, and helps teams refine strategy with confidence.",
    author: "Nezo Benardi",
    role: "Marketing Professional",
    company: "",
    linkedin: "https://www.linkedin.com/in/nezobenardi/",
    image: "/Testimonials/Nezo Benardi.jpeg",
  },
  {
    date: "",
    quote:
      "Jack is strong from ideation through execution and impact monitoring. He asks the right questions and consistently drives team progress.",
    author: "Ernest Kou",
    role: "Social & Brand Marketer",
    company: "",
    linkedin: "https://www.linkedin.com/in/ernestkou/",
    image: "/Testimonials/Ernest Kou.jpg",
  },
  {
    date: "",
    quote:
      "Jack gave us room to own the work while keeping strategy sharp. He always made diligent efforts to improve and share what he learned.",
    author: "Ming Min Wong",
    role: "Regional Supply Network Professional",
    company: "",
    linkedin: "https://www.linkedin.com/in/ming-min-wong/",
    image: "/Testimonials/Ming Min Wong.jpeg",
  },
  {
    date: "",
    quote:
      "Jack is one of the most dedicated and focused people I have worked with. He brings strong critical thinking, creativity, and leadership.",
    author: "Hamza Abu Tarbush",
    role: "Operations Manager",
    company: "Hagzi.com",
    linkedin: "https://www.linkedin.com/in/hamza-abu-tarbush-9911495b/",
    image: "/Testimonials/Hamza Abu Tarbush.jpeg",
  },
];

const getHandle = (name: string, linkedin?: string) => {
  if (!linkedin) return `@${name.toLowerCase().replace(/\s+/g, "")}`;
  const trimmed = linkedin.replace(/\/+$/, "");
  const slug = trimmed.split("/").pop() || "";
  return slug ? `@${slug}` : `@${name.toLowerCase().replace(/\s+/g, "")}`;
};

const splitIntoColumns = <T,>(items: T[], columnCount: number) => {
  return Array.from({ length: columnCount }, (_, columnIndex) =>
    items.filter((_, index) => index % columnCount === columnIndex)
  );
};

export function Testimonials() {
  const columns = splitIntoColumns(testimonials, 3);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#f5f5f0] overflow-hidden">
      <style>
        {`
          @keyframes wall-of-love-scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .wall-track {
            animation-name: wall-of-love-scroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .wall-reverse {
            animation-direction: reverse;
          }
          .wall-pause:hover .wall-track {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="container">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex flex-col items-center gap-4"
          >
            <div className="inline-flex items-center gap-4 rounded-full bg-lime/30 px-8 py-3 shadow-sm">
              <span className="section-headline text-2xl md:text-4xl text-foreground">
                Don't just take
              </span>
            </div>
            <div className="inline-flex items-center gap-4 rounded-full bg-lime px-10 py-4 shadow-sm">
              <span className="inline-flex h-11 w-16 items-center justify-center rounded-full bg-white/95">
                <span className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-foreground/80" />
                  <span className="h-2 w-2 rounded-full bg-foreground/80" />
                  <span className="h-2 w-2 rounded-full bg-foreground/80" />
                </span>
              </span>
              <span className="section-headline text-2xl md:text-4xl text-foreground">
                our word for it
              </span>
            </div>
            <div className="inline-flex items-center gap-4 rounded-full bg-lime/30 px-8 py-3 shadow-sm">
              <span className="section-headline text-2xl md:text-4xl text-foreground">
                Hear directly from our clients
              </span>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime text-foreground shadow-sm">
                <span className="text-xl leading-none">↓</span>
              </span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 wall-pause">
          {columns.map((columnItems, columnIndex) => {
            const repeated = [...columnItems, ...columnItems];
            const duration = columnIndex === 1 ? 38 : 34;
            const reverseClass = columnIndex === 1 ? "wall-reverse" : "";
            const visibility =
              columnIndex === 1 ? "hidden md:block" : columnIndex === 2 ? "hidden xl:block" : "block";

            return (
              <div
                key={`column-${columnIndex}`}
                className={`${visibility} h-[620px] md:h-[680px] overflow-hidden rounded-3xl`}
              >
                <div
                  className={`wall-track ${reverseClass} flex flex-col gap-4`}
                  style={{ animationDuration: `${duration}s` }}
                >
                  {repeated.map((testimonial, idx) => (
                    <article
                      key={`${testimonial.author}-${idx}`}
                      className="bg-white border border-[#dfe4e8] rounded-2xl shadow-[0_8px_22px_rgba(25,35,32,0.08)]"
                    >
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="w-11 h-11 rounded-full overflow-hidden bg-foreground/10 shrink-0">
                              <img
                                src={testimonial.image}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                                loading="lazy"
                                decoding="async"
                              />
                            </div>
                            <div className="leading-tight">
                              <p className="type-nav text-foreground">{testimonial.author}</p>
                              <p className="type-caption text-muted-foreground">{getHandle(testimonial.author, testimonial.linkedin)}</p>
                            </div>
                          </div>
                          {testimonial.linkedin ? (
                            <a
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0a66c2] hover:text-[#004182] transition-colors"
                              aria-label={`Open ${testimonial.author} on LinkedIn`}
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : null}
                        </div>

                        <p className="mt-4 text-foreground leading-relaxed text-[1.02rem]">
                          {testimonial.quote}
                        </p>

                        <p className="mt-4 text-[0.82rem] text-muted-foreground">
                          {[testimonial.role, testimonial.company].filter(Boolean).join(" • ")}
                        </p>
                        {testimonial.date ? (
                          <p className="mt-1 text-[0.75rem] uppercase tracking-wider text-muted-foreground/80">
                            {testimonial.date}
                          </p>
                        ) : null}
                      </div>

                      <div className="h-px bg-[#e7ecef]" />

                      <div className="px-5 py-3 flex items-center gap-4 text-muted-foreground">
                        <Heart className="w-4 h-4" />
                        <MessageCircle className="w-4 h-4" />
                        <Repeat2 className="w-4 h-4" />
                        <Share2 className="w-4 h-4 ml-auto" />
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
