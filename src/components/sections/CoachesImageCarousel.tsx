import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const coaches = [
  {
    name: "Hamza Akaouch",
    expertise: "Consultative selling & decision psychology",
    intro: "Improves discovery, value framing, and buyer confidence.",
    image: "/about-us-coaches-page/Hamza.png",
  },
  {
    name: "Jack Newenham",
    expertise: "Growth strategy & performance marketing",
    intro: "Helps teams turn strategy into practical, measurable execution.",
    image: "/about-us-coaches-page/Jack.png",
  },
  {
    name: "Marc Sagayam",
    expertise: "Project governance & stakeholder management",
    intro: "7+ years leading complex operations and delivery programs.",
    image: "/Marc/Marc.jpeg",
  },
  {
    name: "Adele O'Brien",
    expertise: "Growth strategy & go-to-market",
    intro: "9+ years scaling brands across Asia, USA, and Europe.",
    image: "/about-us-coaches-page/Adele.png",
  },
  {
    name: "Ashvin Praveen",
    expertise: "AI workflows & business automation",
    intro: "Guides teams in practical AI adoption and daily execution.",
    image: "/about-us-coaches-page/Ashvin.png",
  },
  {
    name: "Kain Masters",
    expertise: "Leadership development & team dynamics",
    intro: "Builds communication confidence and stronger team collaboration.",
    image: "/about-us-coaches-page/kain.png",
  },
  {
    name: "Alfred Ng",
    expertise: "Storytelling & video creation",
    intro: "Teaches teams to communicate clearly through modern content.",
    image: "/about-us-coaches-page/Alfred.png",
  },
  {
    name: "Ebrahim Al Hamdi",
    expertise: "AI agents & automation",
    intro: "Supports teams with practical systems for faster execution.",
    image: "/about-us-coaches-page/Ebrahim.png",
  },
  {
    name: "Ivan Eng",
    expertise: "Workplace wellbeing & mental health",
    intro: "Helps teams build healthier habits and sustainable performance.",
    image: "/about-us-coaches-page/ivan.png",
  },
];

type CoachesImageCarouselProps = {
  sectionClassName?: string;
  showSubtitle?: boolean;
  showCta?: boolean;
};

export function CoachesImageCarousel({
  sectionClassName = "py-24 bg-muted/10",
  showSubtitle = true,
  showCta = false,
}: CoachesImageCarouselProps) {
  return (
    <section id="coaches" className={sectionClassName}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="headline-display text-4xl md:text-5xl mb-6">Meet the coaches</h2>
          {showSubtitle && (
            <p className="type-body text-muted-foreground max-w-2xl mx-auto">
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
                <CarouselItem key={index} className="pl-4 basis-[90%] md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-1"
                  >
                    <div className="group bg-white rounded-3xl border border-border overflow-hidden h-full shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="aspect-[4/5] bg-muted/50 overflow-hidden">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-6 md:p-7">
                        <h3 className="type-h3 text-foreground mb-2 tracking-tight">{coach.name}</h3>
                        <p className="text-lime font-semibold text-[1.0625rem] mb-3">{coach.expertise}</p>
                        <p className="type-body-secondary text-muted-foreground mb-5">{coach.intro}</p>
                        <a
                          href="/coaches"
                          className="inline-flex items-center gap-2 text-primary type-nav hover:gap-3 transition-all"
                        >
                          View full profile <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-6 lg:-left-10 h-12 w-12" />
              <CarouselNext className="-right-6 lg:-right-10 h-12 w-12" />
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
      </div>
    </section>
  );
}
