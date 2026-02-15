import { motion } from "framer-motion";
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
    image: "/about-us-coaches-page/Hamza.png",
  },
  {
    name: "Jack Newenham",
    image: "/about-us-coaches-page/Jack.png",
  },
  {
    name: "Marc Sagayam",
    image: "/Marc/Marc.jpeg",
  },
  {
    name: "Adele O'Brien",
    image: "/about-us-coaches-page/Adele.png",
  },
  {
    name: "Ashvin Praveen",
    image: "/about-us-coaches-page/Ashvin.png",
  },
  {
    name: "Kain Masters",
    image: "/about-us-coaches-page/kain.png",
  },
  {
    name: "Alfred Ng",
    image: "/about-us-coaches-page/Alfred.png",
  },
  {
    name: "Ebrahim Al Hamdi",
    image: "/about-us-coaches-page/Ebrahim.png",
  },
  {
    name: "Ivan Eng",
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
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Experienced practitioners helping teams build modern skills.
            </p>
          )}
        </div>

        <div className="max-w-6xl mx-auto px-12 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {coaches.map((coach, index) => (
                <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-[60%] lg:basis-[40%]">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-1"
                  >
                    <div className="bg-white rounded-3xl border border-border overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[4/5] bg-muted/50 overflow-hidden">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 h-12 w-12" />
              <CarouselNext className="-right-12 h-12 w-12" />
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
