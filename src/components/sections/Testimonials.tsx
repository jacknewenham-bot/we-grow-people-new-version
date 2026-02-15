import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    date: "",
    quote:
      "Being in sales myself, Hamza’s session gave me clear, practical insights to sharpen my sales strategy, better understand prospects, and handle objections more effectively. He simplifies complex sales concepts into actionable frameworks that drive real improvement , whether you’re new to sales or already experienced.",
    author: "Ibrahim shahid",
    role: "Senior Valuation Lead - APAC",
    company: "Valutico",
    linkedin: "https://www.linkedin.com/in/ibrahim-shahid1/",
    image: "/Testimonials/Ibrahim shahid.jpeg",
  },
  {
    date: "May 27, 2024",
    quote:
      "I find Jack to be an outstanding mentor with a keen understanding of his industry. His approach to mentoring is insightful, proactive, and constructive. He's a great guy, and it was really nice to learn from him! A huge thanks to Jack and to ADPList!",
    author: "Adenike Anthonia Abati",
    role: "Senior Content Marketer",
    company: "Smarketer's Hub",
    linkedin: "https://www.linkedin.com/in/adenike-abati/",
    image: "/Testimonials/Anthonia Abati.jpeg",
  },
  {
    date: "June 11, 2024",
    quote:
      "I had the pleasure of being mentored by Jack, and his guidance has been incredible. His support during my interview preparation was invaluable, offering insightful advice that truly made a difference. Additionally, Jack's constructive feedback on my technical test was detailed and immensely helpful. His expertise extends beyond technical knowledge; he is exceptionally well-versed in marketing strategies. I highly recommend Jack as a mentor for anyone seeking comprehensive and thoughtful guidance.",
    author: "Alexandra Aurielle",
    role: "Product Manager",
    company: "Delman.io",
    linkedin: "https://www.linkedin.com/in/alexandra-aurielle/",
    image: "/Testimonials/Alexandra Aurielle.jpeg",
  },
  {
    date: "",
    quote:
      "Hamza was genuine fun to work with. His work disposition spells real effort, and strong outcomes, all the while doing it with a smile. I would certainly jump at the opportunity to work with him in the same team again, and am looking forward to keep track of his bright professional career ahead of him.",
    author: "Barry Lim",
    role:
      "APAC Strategy & Economic Policy Advisor | Ex-VP Frost & Sullivan | Proven Leader in Government, Market Growth & Transformation | Trusted by Ministries, Boards & Global Firms",
    company: "",
    linkedin: "https://www.linkedin.com/in/barrylim/overlay/photo/",
    image: "/Testimonials/Barry Lim.jpeg",
  },
  {
    date: "June 01, 2024",
    quote:
      "I had a great session with Jack! He provided actionable tips on managing and monetizing my personal brand and is going out of his way to share more resources after the call. A big thanks to him!",
    author: "Safaa Zaki",
    role: "Content Creator",
    company: "Instagram",
    linkedin: "https://www.linkedin.com/in/safaazaki/",
    image: "/Testimonials/Safaa Zaki.jpeg",
  },
  {
    date: "",
    quote:
      "Jack was great to work with. No task was too much. He picked up everything he was given and more! Jack led marketing experiments and stepped into product related areas when there was a gap to be filled just doing it without being asked. A true A player. Can't recommend highly enough.",
    author: "Hamel Shah",
    role: "Co-Founder at Carrots&Cake and Partner at Azimuth Global Partners",
    company: "",
    linkedin: "https://www.linkedin.com/in/hamelshah/",
    image: "/Testimonials/Hamel Shah.jpeg",
  },
  {
    date: "July 09, 2024",
    quote:
      "I had an outstanding session with Jack! As a Growth Marketing Manager at a startup, I often lack access to specialists in demand generation and conversion rate optimization beyond LinkedIn posts. Jack’s expertise was invaluable; he provided clear direction and introduced me to powerful new tools to enhance my performance. I genuinely appreciated the insights and actionable advice he shared during our time together.",
    author: "Lauren Ellis",
    role: "Growth Marketing Manager",
    company: "Produce8",
    linkedin: "https://www.linkedin.com/in/laurenuellis/",
    image: "/Testimonials/Lauren Ellis.jpeg",
  },
  {
    date: "July 22, 2024",
    quote:
      "Jack was very helpful in pinpointing my current issues and giving actionable advice. He is honest, professional, and super generous with his knowledge. I definitely recommend him!",
    author: "Amber Yang",
    role: "Content Creator | Social Media Strategist",
    company: "Edge Labs",
    linkedin: "https://www.linkedin.com/in/amberistic/",
    image: "/Testimonials/Amber Yang.jpeg",
  },
  {
    date: "July 25, 2024",
    quote:
      "Jack has been encouraging and attentive. I appreciate that he acknowledges my pace and aligns his insights in the best way possible to provide relevant answers to my queries.",
    author: "Mark Lester Catungal",
    role: "IT Educator",
    company: "Saint Columban College",
    linkedin: "https://www.linkedin.com/in/mark-lester-catungal-942201144/",
    image: "/Testimonials/Mark Lester Catungal.jpeg",
  },
  {
    date: "August 01, 2024",
    quote:
      "He was cheerful and very helpful. The information he gave helped me determine a direction.",
    author: "Berke Zavaro",
    role: "PPC Campaign Manager",
    company: "Marketily",
    linkedin: "https://www.linkedin.com/in/berkezavaro/",
    image: "/Testimonials/Berke Zavaro.jpeg",
  },
  {
    date: "August 05, 2024",
    quote:
      "It was a fruitful experience with Jack as he reviewed some of my ideas and work. The feedback he gave helped me understand what was good and what was lacking. Jack also shared some of his methodologies on how to be a more professional digital marketer. I am thankful for this, as it is normal for people to gatekeep what works for them. I am thankful and hopeful as I now have something to work towards. Definitely recommend speaking to Jack for insights on digital marketing.",
    author: "Sathyaraj Thever",
    role: "Digital Project Manager",
    company: "Orfeostory",
    linkedin: "",
  },
  {
    date: "August 07, 2024",
    quote:
      "It is clear Jack did his research before the meeting. You can expect 10/10 mentoring from Jack. Personalized and useful feedback and recommendations.",
    author: "Gary Chan",
    role: "Growth Marketing",
    company: "Operandio",
    linkedin: "https://www.linkedin.com/in/gary-chan-486715243/",
    image: "/Testimonials/Gary Chan.jpeg",
  },
  {
    date: "August 17, 2024",
    quote:
      "He's a great listener and great communicator. Speaks clearly and deliberately, making sure everything is understood. Great helper, offers a lot of advice and would have kept helping if not for the time limit. Overall an amazing experience and I can't wait for a follow-up meeting after putting his suggestions into practice!",
    author: "Mohammad Habib",
    role: "Product Designer",
    company: "EAC",
    linkedin: "https://www.linkedin.com/in/princehabib17/",
    image: "/Testimonials/Mohammad Habib.jpeg",
  },

  {
    date: "October 9, 2023",
    quote:
      "Jack is the definition of a proactive and motivated digital marketer. He always comes up with brilliant ideas, coupled with initiatives to continuously experiment and refine strategies that help the product succeed. I had a great time working with him and 100% would recommend him.",
    author: "Nezo Benardi",
    role: "Worked with Jack on the same team",
    company: "",
    linkedin: "https://www.linkedin.com/in/nezobenardi/",
    image: "/Testimonials/Nezo Benardi.jpeg",
  },
  {
    date: "",
    quote:
      "Jack is a wizard at growth initiatives. Jack excels from the ideation stage, all the way to execution & impact monitoring. He never fails to crowdsource feedback, never afraid to ask questions that gets the team thinking. Jack has a wide array of marketing experience, and on top of that, he’s teammate I could always count on.",
    author: "Ernest Kou",
    role: "Writing organic social content for crypto brands. Decentralized science (DeSci).",
    company: "",
    linkedin: "https://www.linkedin.com/in/ernestkou/",
    image: "/Testimonials/Ernest Kou.jpg",
  },
  {
    date: "",
    quote:
      "Not only reliable, Jack was being flexible on work that allow us to have certain level of empowerment and let our creative juices flow. He made sure that we approach our work strategically and anticipate the actions we can take that will add value to the overall marketing performance. Plus, he has always made diligent efforts to improve his skills and knowledge, making it one of the reasons that we look up to him! The best of him? Jack was never stingy to share what he had learnt with us.",
    author: "Ming Min Wong",
    role: "Regional Supply Network Professional",
    company: "",
    linkedin: "https://www.linkedin.com/in/ming-min-wong/",
    image: "/Testimonials/Ming Min Wong.jpeg",
  },
  {
    date: "",
    quote:
      "Jack is one of the most dedicated focussed people I have worked with. I was impressed by his strong critical thinking, creativity and approach to problem solving. He has strong leadership skills and is enjoyable to work with.",
    author: "Hamza Abu Tarbush",
    role: "",
    company: "",
    linkedin: "https://www.linkedin.com/in/hamza-abu-tarbush-9911495b/",
    image: "/Testimonials/Hamza Abu Tarbush.jpeg",
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const lastWheelAtRef = useRef(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const handleWheelScroll = useCallback(
    (event: React.WheelEvent<HTMLDivElement>) => {
      if (!emblaApi) return;

      const now = Date.now();
      if (now - lastWheelAtRef.current < 220) return;

      const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (Math.abs(delta) < 8) return;

      event.preventDefault();
      lastWheelAtRef.current = now;

      if (delta > 0) emblaApi.scrollNext();
      else emblaApi.scrollPrev();
    },
    [emblaApi]
  );

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-white">
      <div className="container">
        {/* Bubble headline */}
        <div className="text-center mb-20">
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
                <ArrowDown className="h-5 w-5" />
              </span>
            </div>
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div
            className="overflow-hidden select-none cursor-grab active:cursor-grabbing"
            ref={emblaRef}
            onWheel={handleWheelScroll}
          >
            <div className="flex gap-8 -ml-4">
              {testimonials.map((testimonial, index) => {
                const isExpanded = expanded.has(index);
                const isLong = testimonial.quote.length > 280;
                return (
                  <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="bg-[#F1F1E6] rounded-[2.25rem] p-10 border border-foreground/5 shadow-[0_12px_30px_rgba(20,40,20,0.08)] hover:shadow-[0_18px_40px_rgba(20,40,20,0.12)] transition-all duration-500 flex flex-col h-full"
                    >
                      <p
                        className="text-foreground text-lg md:text-xl leading-relaxed font-sans"
                        style={
                          !isExpanded && isLong
                            ? {
                              display: "-webkit-box",
                              WebkitLineClamp: 6,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }
                            : undefined
                        }
                      >
                        “{testimonial.quote}”
                      </p>
                      {isLong && (
                        <button
                          type="button"
                          onClick={() => toggleExpanded(index)}
                          className="mt-4 type-nav text-foreground/70 hover:text-foreground transition-colors self-start"
                        >
                          {isExpanded ? "Read less" : "Read more"}
                        </button>
                      )}

                      <div className="mt-auto flex items-center gap-4 pt-6 border-t border-foreground/10">
                        <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center shrink-0 overflow-hidden">
                          {(testimonial as any).image ? (
                            <img
                              src={(testimonial as any).image}
                              alt={testimonial.author}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-sm font-bold text-foreground font-heading">
                              {testimonial.author.split(" ").map((n: string) => n[0]).join("")}
                            </span>
                          )}
                        </div>
                        <div className="leading-tight">
                          <p className="type-nav text-foreground flex items-center gap-2">
                            {(testimonial as any).linkedin ? (
                              <a
                                href={(testimonial as any).linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-lime transition-colors inline-flex items-center gap-2"
                              >
                                {(testimonial as any).author}
                                <svg className="w-4 h-4 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              </a>
                            ) : (
                              (testimonial as any).author
                            )}
                          </p>
                          <p className="type-caption text-muted-foreground">
                            {testimonial.role} • {testimonial.company}
                          </p>
                          <p className="text-muted-foreground/70 type-caption uppercase tracking-widest mt-1">
                            {testimonial.date}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={scrollPrev}
              className="h-12 w-12 rounded-full bg-foreground text-white flex items-center justify-center shadow-md hover:bg-foreground/90 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={scrollNext}
              className="h-12 w-12 rounded-full bg-foreground text-white flex items-center justify-center shadow-md hover:bg-foreground/90 transition-colors"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
