import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const coaches = [
  {
    id: "hamza",
    name: "Hamza Akaouch",
    expertise: "Consultative selling & decision psychology",
    intro: "Improves discovery, value framing, and buyer confidence.",
    image: "/Updated trainer pics/updated images/Hamza.png",
    title: "Sales Trainer | Consultative & Challenger Selling",
    badge: "HRDC Accredited",
    focusAreas: ["Decision psychology", "Consultative selling", "Negotiation and price conversations"],
    bio: "Hamza helps sales teams understand how buyers decide and lead conversations that reduce uncertainty.\n\nHis training focuses on deep discovery, framing the cost of inaction, value messaging, and ethical closing. Sessions are practical, interactive, and grounded in real deals so teams improve conversion rates, protect margins, and build trust.",
    bestFor: ["B2B sales teams", "Relationship managers and consultants", "Sales leaders upgrading capability"],
  },
  {
    id: "jack",
    name: "Jack Newenham",
    expertise: "Growth strategy & performance marketing",
    intro: "Helps teams turn strategy into practical, measurable execution.",
    image: "/Updated trainer pics/updated images/Jack.png",
    title: "Growth and Performance Marketing Coach",
    badge: null,
    focusAreas: ["Growth strategy", "Performance marketing", "Execution and experimentation"],
    bio: "Jack has led growth and performance marketing across startups and scaling companies, working hands-on with acquisition, funnels, experimentation, and execution.\n\nHis training helps teams move from theory to action, focusing on what actually drives growth in today's market.",
    bestFor: ["Marketing teams", "Growth teams", "Founders and managers"],
  },
  {
    id: "marc",
    name: "Marc Sagayam",
    expertise: "Project governance & stakeholder management",
    intro: "7+ years leading complex operations and delivery programs.",
    image: "/Updated trainer pics/updated images/Marc.png",
    title: "Project Management and Operations Coach",
    badge: null,
    focusAreas: ["Project governance", "Delivery timelines", "Stakeholder management"],
    bio: "Marc is a senior leader with over seven years of experience managing complex, high-stakes projects across defense technology, operations, and facilities management.\n\nHe has overseen multi-million-dollar projects, led cross-functional teams, and delivered results in highly regulated environments. Marc's training helps teams plan better, communicate clearly, and deliver projects on time and within budget.",
    bestFor: ["Project teams", "Operations teams", "Managers responsible for delivery"],
  },
  {
    id: "adele",
    name: "Adele O'Brien",
    expertise: "Growth strategy & go-to-market",
    intro: "9+ years scaling brands across Asia, USA, and Europe.",
    image: "/Updated trainer pics/updated images/Adele.png",
    title: "Growth and Partnerships Strategy Coach",
    badge: null,
    focusAreas: ["Go-to-market strategy", "Partnerships and growth", "Performance marketing"],
    bio: "Adele brings over nine years of experience scaling brands across Asia, the USA, and Europe. She has led growth, partnerships, and commercial strategy for Web3, education, telco, and technology companies.\n\nHer sessions focus on practical growth frameworks, stakeholder alignment, and execution that delivers measurable outcomes.",
    bestFor: ["Growth leaders", "Commercial teams", "Partnership managers"],
  },
  {
    id: "ashvin",
    name: "Ashvin Praveen",
    expertise: "AI workflows & business automation",
    intro: "Guides teams in practical AI adoption and daily execution.",
    image: "/Updated trainer pics/updated images/Ashvin.png",
    title: "AI and Vibe Coding Coach",
    badge: "Co-founder and CEO of Cleve.ai",
    focusAreas: ["Vibe coding for business", "AI workflows", "Content productivity"],
    bio: "Ashvin is a founder and AI practitioner focused on helping teams adopt AI in practical, business-ready ways.\n\nAs the co-founder and CEO of Cleve.ai, backed by Antler, he trains teams on building workflows, automations, and content systems using AI tools without unnecessary complexity.",
    bestFor: ["Founders", "Product teams", "Teams adopting AI"],
  },
  {
    id: "kain",
    name: "Kain Masters",
    expertise: "Leadership development & team dynamics",
    intro: "Builds communication confidence and stronger team collaboration.",
    image: "/Updated trainer pics/updated images/Kain.png",
    title: "Communications Coach",
    badge: null,
    focusAreas: ["Communication mastery", "Presentation skills", "Career progression"],
    bio: "Kain coaches professionals to communicate with more clarity, confidence, and influence.\n\nHis sessions focus on practical speaking frameworks, delivery confidence, and message structure so teams present ideas clearly and lead conversations effectively.",
    bestFor: ["Young professionals", "Team leads", "Client-facing teams"],
  },
  {
    id: "alfred",
    name: "Alfred Ng",
    expertise: "Storytelling & video creation",
    intro: "Teaches teams to communicate clearly through modern content.",
    image: "/Updated trainer pics/updated images/Alfred.png",
    title: "Storytelling, Video, and Affiliate Marketing Coach",
    badge: null,
    focusAreas: ["Storytelling", "Video creation", "Affiliate marketing"],
    bio: "Alfred is a videographer, storyteller, and affiliate marketer with experience across multiple industries and countries.\n\nHe helps teams communicate more clearly through video and storytelling, while building sustainable affiliate and content-driven growth channels.",
    bestFor: ["Marketing teams", "Content teams", "Creators and brand builders"],
  },
  {
    id: "ebrahim",
    name: "Ebrahim Al Hamdi",
    expertise: "AI agents & automation",
    intro: "Supports teams with practical systems for faster execution.",
    image: "/Updated trainer pics/updated images/Ebrahim new.png",
    title: "AI Agents and Marketing Systems Coach",
    badge: null,
    focusAreas: ["AI agents", "Automation", "Vibe coding for business"],
    bio: "Ebrahim has spent over 25 years working with clients across the US and Malaysia, helping businesses build smarter systems using marketing automation, AI agents, and modern workflows.\n\nHis training focuses on building systems that save time, reduce manual work, and improve decision-making.",
    bestFor: ["Operations teams", "Marketing teams", "Founders scaling systems"],
  },
  {
    id: "ivan",
    name: "Ivan Eng",
    expertise: "Workplace wellbeing & mental health",
    intro: "Helps teams build healthier habits and sustainable performance.",
    image: "/Updated trainer pics/updated images/Ivan.png",
    title: "Workplace Wellbeing and Mental Health Coach",
    badge: null,
    focusAreas: ["Stress management", "Burnout prevention", "Workplace wellbeing"],
    bio: "Ivan works with organisations to support employee wellbeing through practical, HRDC claimable training and pay-as-you-go counselling.\n\nWith experience in both corporate leadership and counselling, his sessions help teams manage stress, reduce burnout, and build healthier working environments.",
    bestFor: ["HR teams", "People managers", "Organisations prioritising wellbeing"],
  },
];

type CoachesImageCarouselProps = {
  sectionClassName?: string;
  showSubtitle?: boolean;
  showCta?: boolean;
};

export function CoachesImageCarousel({
  sectionClassName = "py-16 md:py-20 bg-background",
  showSubtitle = true,
  showCta = false,
}: CoachesImageCarouselProps) {
  const [selectedCoach, setSelectedCoach] = useState<(typeof coaches)[number] | null>(null);

  useEffect(() => {
    if (!selectedCoach) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedCoach]);

  return (
    <section id="coaches" className={sectionClassName}>
      <div className="container">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="section-headline text-foreground mb-4">Meet the coaches</h2>
          {showSubtitle && (
            <p className="type-body-secondary text-muted-foreground max-w-2xl mx-auto">
              Experienced practitioners helping teams build modern skills.
            </p>
          )}
        </div>

        <div className="max-w-7xl mx-auto relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
            wheelGesture={true}
            className="w-full select-none cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4">
              {coaches.map((coach, index) => (
                <CarouselItem key={index} className="pl-4 basis-[80%] sm:basis-[52%] md:basis-[37%] lg:basis-[29%] xl:basis-[23%]">
                  <motion.button
                    type="button"
                    onClick={() => setSelectedCoach(coach)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group w-full p-1 text-center"
                  >
                    <div className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
                      <div className="aspect-[4/5] bg-muted/50 overflow-hidden">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </div>
                    </div>
                    <div className="mt-4 px-1">
                      <h3 className="type-h4 text-foreground tracking-tight leading-tight uppercase whitespace-nowrap overflow-hidden text-ellipsis">
                        {coach.name}
                      </h3>
                      <p className="mt-2 min-h-[2.7rem] max-h-[2.7rem] overflow-hidden text-[0.82rem] font-semibold uppercase tracking-wide text-muted-foreground leading-[1.35] [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        {coach.title}
                      </p>
                      <p className="mt-2 min-h-[3.3rem] max-h-[3.3rem] overflow-hidden type-body-secondary text-foreground/85 leading-relaxed [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                        {coach.intro}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-1.5 type-nav text-primary/90 transition-colors group-hover:text-primary">
                        View profile <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </motion.button>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 lg:-left-8 h-10 w-10 bg-white/95" />
              <CarouselNext className="-right-4 lg:-right-8 h-10 w-10 bg-white/95" />
            </div>
          </Carousel>
        </div>

        {showCta && (
          <div className="flex justify-center mt-12">
            <Button variant="dark" size="lg" asChild className="rounded-full">
              <a href="/coaches">Find out more about our coaches</a>
            </Button>
          </div>
        )}

        {selectedCoach && (
          <div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedCoach(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCoach(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-lime/20 flex items-center justify-center mb-6 overflow-hidden">
                <img
                  src={selectedCoach.image}
                  alt={selectedCoach.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h2 className="font-heading text-4xl font-bold text-foreground mb-3">
                {selectedCoach.name}
              </h2>
              <p className="text-xl text-foreground/70 mb-4 font-sans">
                {selectedCoach.title}
              </p>

              {selectedCoach.badge && (
                <span className="inline-block px-4 py-2 rounded-full bg-lime/10 text-lime text-sm font-semibold mb-8">
                  {selectedCoach.badge}
                </span>
              )}

              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Focus areas</h3>
                <ul className="space-y-3">
                  {selectedCoach.focusAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
                      <span className="text-foreground font-sans">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Bio</h3>
                <div className="text-foreground/80 font-sans leading-relaxed whitespace-pre-line">
                  {selectedCoach.bio}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Best for</h3>
                <ul className="space-y-3">
                  {selectedCoach.bestFor.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
                      <span className="text-foreground font-sans">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
