import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    date: "May 27, 2024",
    quote:
      "I find Jack to be an outstanding mentor with a keen understanding of his industry. His approach to mentoring is insightful, proactive, and constructive. He's a great guy, and it was really nice to learn from him! A huge thanks to Jack and to ADPList!",
    author: "Adenike Anthonia Abati",
    role: "Senior Content Marketer",
    company: "Smarketer's Hub",
  },
  {
    date: "June 11, 2024",
    quote:
      "I had the pleasure of being mentored by Jack, and his guidance has been incredible. His support during my interview preparation was invaluable, offering insightful advice that truly made a difference. Additionally, Jack's constructive feedback on my technical test was detailed and immensely helpful. His expertise extends beyond technical knowledge; he is exceptionally well-versed in marketing strategies. I highly recommend Jack as a mentor for anyone seeking comprehensive and thoughtful guidance.",
    author: "Aurielle",
    role: "Product Manager",
    company: "Delman.io",
  },
  {
    date: "",
    quote:
      "Hamza was genuine fun to work with. His work disposition spells real effort, and strong outcomes, all the while doing it with a smile. I would certainly jump at the opportunity to work with him in the same team again, and am looking forward to keep track of his bright professional career ahead of him.",
    author: "Barry Lim",
    role:
      "APAC Strategy & Economic Policy Advisor | Ex-VP Frost & Sullivan | Proven Leader in Government, Market Growth & Transformation | Trusted by Ministries, Boards & Global Firms",
    company: "",
  },
  {
    date: "June 01, 2024",
    quote:
      "I had a great session with Jack! He provided actionable tips on managing and monetizing my personal brand and is going out of his way to share more resources after the call. A big thanks to him!",
    author: "Safaa Zaki",
    role: "Content Creator",
    company: "Instagram",
  },
  {
    date: "",
    quote:
      "Jack was great to work with. No task was too much. He picked up everything he was given and more! Jack led marketing experiments and stepped into product related areas when there was a gap to be filled just doing it without being asked. A true A player. Can't recommend highly enough.",
    author: "Hamel Shah",
    role: "Co-Founder at Carrots&Cake and Partner at Azimuth Global Partners",
    company: "",
  },
  {
    date: "July 09, 2024",
    quote:
      "I had an outstanding session with Jack! As a Growth Marketing Manager at a startup, I often lack access to specialists in demand generation and conversion rate optimization beyond LinkedIn posts. Jack’s expertise was invaluable; he provided clear direction and introduced me to powerful new tools to enhance my performance. I genuinely appreciated the insights and actionable advice he shared during our time together.",
    author: "Lauren Ellis",
    role: "Growth Marketing Manager",
    company: "Produce8",
  },
  {
    date: "July 22, 2024",
    quote:
      "Jack was very helpful in pinpointing my current issues and giving actionable advice. He is honest, professional, and super generous with his knowledge. I definitely recommend him!",
    author: "Amber Yang",
    role: "Content Creator | Social Media Strategist",
    company: "Edge Labs",
  },
  {
    date: "July 25, 2024",
    quote:
      "Jack has been encouraging and attentive. I appreciate that he acknowledges my pace and aligns his insights in the best way possible to provide relevant answers to my queries.",
    author: "Mark Lester Catungal",
    role: "IT Educator",
    company: "Saint Columban College",
  },
  {
    date: "August 01, 2024",
    quote:
      "He was cheerful and very helpful. The information he gave helped me determine a direction.",
    author: "Berke Zavaro",
    role: "PPC Campaign Manager",
    company: "Marketily",
  },
  {
    date: "August 05, 2024",
    quote:
      "It was a fruitful experience with Jack as he reviewed some of my ideas and work. The feedback he gave helped me understand what was good and what was lacking. Jack also shared some of his methodologies on how to be a more professional digital marketer. I am thankful for this, as it is normal for people to gatekeep what works for them. I am thankful and hopeful as I now have something to work towards. Definitely recommend speaking to Jack for insights on digital marketing.",
    author: "Sathyaraj Thever",
    role: "Digital Project Manager",
    company: "Orfeostory",
  },
  {
    date: "August 07, 2024",
    quote:
      "It is clear Jack did his research before the meeting. You can expect 10/10 mentoring from Jack. Personalized and useful feedback and recommendations.",
    author: "Gary",
    role: "Growth Marketing",
    company: "Operandio",
  },
  {
    date: "August 17, 2024",
    quote:
      "He's a great listener and great communicator. Speaks clearly and deliberately, making sure everything is understood. Great helper, offers a lot of advice and would have kept helping if not for the time limit. Overall an amazing experience and I can't wait for a follow-up meeting after putting his suggestions into practice!",
    author: "Mohammad Habib",
    role: "Product Designer",
    company: "EAC",
  },
  {
    date: "August 24, 2024",
    quote:
      "Jack was very helpful in advising me on my Facebook ads and how to increase my lead generation. He took a lot of time to research before our call and spoke for 30 minutes beyond our allocated time. He is very motivational and friendly. I'm looking forward to our next meeting.",
    author: "David Freeman",
    role: "Senior Marketing Executive",
    company: "Box Records",
  },
  {
    date: "October 9, 2023",
    quote:
      "Jack is the definition of a proactive and motivated digital marketer. He always comes up with brilliant ideas, coupled with initiatives to continuously experiment and refine strategies that help the product succeed. I had a great time working with him and 100% would recommend him.",
    author: "Nezo Benardi",
    role: "Worked with Jack on the same team",
    company: "",
  },
  {
    date: "",
    quote:
      "Jack is a wizard at growth initiatives. Jack excels from the ideation stage, all the way to execution & impact monitoring. He never fails to crowdsource feedback, never afraid to ask questions that gets the team thinking. Jack has a wide array of marketing experience, and on top of that, he’s teammate I could always count on.",
    author: "Ernest Kou",
    role: "Writing organic social content for crypto brands. Decentralized science (DeSci).",
    company: "",
  },
  {
    date: "",
    quote:
      "Not only reliable, Jack was being flexible on work that allow us to have certain level of empowerment and let our creative juices flow. He made sure that we approach our work strategically and anticipate the actions we can take that will add value to the overall marketing performance. Plus, he has always made diligent efforts to improve his skills and knowledge, making it one of the reasons that we look up to him! The best of him? Jack was never stingy to share what he had learnt with us.",
    author: "Ming Min Wong",
    role: "Regional Supply Network Professional",
    company: "",
  },
  {
    date: "",
    quote:
      "Jack is one of the most dedicated focussed people I have worked with. I was impressed by his strong critical thinking, creativity and approach to problem solving. He has strong leadership skills and is enjoyable to work with.",
    author: "Hamza Abu Tarbush",
    role: "",
    company: "",
  },
];

export function Testimonials() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const trackRef = useRef<HTMLDivElement | null>(null);

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

  const scrollByAmount = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-testimonial-card]");
    const cardWidth = card?.offsetWidth ?? 360;
    const gap = 32;
    const delta = direction === "next" ? cardWidth + gap : -(cardWidth + gap);
    track.scrollBy({ left: delta, behavior: "smooth" });
  };

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
              <span className="headline-display font-heading text-2xl md:text-4xl text-foreground uppercase tracking-wide">
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
              <span className="headline-display font-heading text-2xl md:text-4xl text-foreground uppercase tracking-wide">
                our word for it
              </span>
            </div>
            <div className="inline-flex items-center gap-4 rounded-full bg-lime/30 px-8 py-3 shadow-sm">
              <span className="headline-display font-heading text-2xl md:text-4xl text-foreground uppercase tracking-wide">
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
            ref={trackRef}
            className="flex gap-8 overflow-x-auto pb-6 -mx-6 px-6 snap-x snap-mandatory scrollbar-none"
          >
            {testimonials.map((testimonial, index) => {
              const isExpanded = expanded.has(index);
              const isLong = testimonial.quote.length > 280;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  data-testimonial-card
                  className="min-w-[280px] sm:min-w-[320px] lg:min-w-[360px] xl:min-w-[380px] snap-start bg-[#F1F1E6] rounded-[2.25rem] p-10 border border-foreground/5 shadow-[0_12px_30px_rgba(20,40,20,0.08)] hover:shadow-[0_18px_40px_rgba(20,40,20,0.12)] transition-all duration-500 flex flex-col"
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
                    className="mt-4 text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors self-start"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}

                <div className="mt-auto flex items-center gap-4 pt-6 border-t border-foreground/10">
                  <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-foreground font-heading">
                      {testimonial.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="leading-tight">
                  <p className="font-semibold text-foreground text-base">
                    {testimonial.author}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role} • {testimonial.company}
                  </p>
                  <p className="text-muted-foreground/70 text-xs uppercase tracking-widest mt-1">
                    {testimonial.date}
                  </p>
                </div>
                </div>
              </motion.div>
            );
            })}
          </div>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={() => scrollByAmount("prev")}
              className="h-12 w-12 rounded-full bg-foreground text-white flex items-center justify-center shadow-md"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={() => scrollByAmount("next")}
              className="h-12 w-12 rounded-full bg-foreground text-white flex items-center justify-center shadow-md"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
