import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const coaches = [
    {
        name: "Hamza Akaouch",
        tagline: "HRDC Accredited Sales Trainer",
        expertise: "Consultative selling & decision psychology",
        credibility: "Improves discovery, value framing, and buyer confidence",
        image: "/about-us-coaches-page/Hamza.png",
    },
    {
        name: "Jack Newenham",
        tagline: "Marketing and Growth Mentor",
        expertise: "Growth strategy & performance marketing",
        credibility: "Growth and Performance Marketing Manager",
        image: "/about-us-coaches-page/Jack.png",
    },
    {
        name: "Marc Sagayam",
        tagline: "Project Manager",
        expertise: "Project governance & stakeholder management",
        credibility: "7+ years leading complex operations",
        image: "/Marc/Marc.jpeg",
        imageClassName: "object-top",
    },
    {
        name: "Adele O'Brien",
        tagline: "Partnerships and Growth Strategy Leader",
        expertise: "Growth strategy & go-to-market",
        credibility: "9+ years scaling brands across Asia, USA, and Europe",
        image: "/about-us-coaches-page/Adele.png",
    },
    {
        name: "Ashvin Praveen",
        tagline: "Co-founder and CEO of Cleve.ai",
        expertise: "AI workflows & vibe coding for business",
        credibility: "Trainer for practical AI adoption",
        image: "/about-us-coaches-page/Ashvin.png",
    },
    {
        name: "Kain Masters",
        tagline: "Communications Coach",
        expertise: "Mastering Communication",
        credibility: "Coaching young professionals to unlock their full potential",
        image: "/about-us-coaches-page/kain.png",
    },
    {
        name: "Alfred Ng",
        tagline: "Videographer & Storyteller",
        expertise: "Storytelling & video creation",
        credibility: "Experienced across industries and countries",
        image: "/about-us-coaches-page/Alfred.png",
    },
    {
        name: "Ebrahim Al Hamdi",
        tagline: "Marketing & AI Specialist",
        expertise: "AI agents & automation",
        credibility: "25 years based in the US, now in Malaysia",
        image: "/about-us-coaches-page/Ebrahim.png",
    },
    {
        name: "Ivan Eng",
        tagline: "Chief of Marketing at Bambi",
        expertise: "Workplace wellbeing & mental health",
        credibility: "Helping adults overcome stress and burnout",
        image: "/about-us-coaches-page/ivan.png",
        imageClassName: "object-center object-[50%_30%]",
    },
];

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);
}

export function CoachesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(4);
            }
        };

        handleResize(); // Set initial
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const totalPages = Math.ceil(coaches.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const startIndex = currentIndex * itemsPerPage;
    const visibleCoaches = Array.from({ length: itemsPerPage }, (_, offset) => {
        const coachIndex = (startIndex + offset) % coaches.length;
        return coaches[coachIndex];
    });

    return (
        <section id="coaches" className="py-12 md:py-32 bg-background">
            <div className="container">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-headline text-foreground mb-6"
                    >
                        Meet the coaches
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans"
                    >
                        Experienced practitioners helping teams build modern skills.
                    </motion.p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.4 }}
                            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        >
                            {visibleCoaches.map((coach, index) => (
                                <motion.div
                                    key={coach.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group bg-white rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                >
                                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-lime/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                        {(coach as any).image ? (
                                            <img
                                                src={(coach as any).image}
                                                alt={coach.name}
                                                className={`w-full h-full object-cover ${(coach as any).imageClassName || "object-top"}`}
                                            />
                                        ) : (
                                            <span className="text-2xl font-bold text-primary font-sans">
                                                {getInitials(coach.name)}
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="font-sans text-xl font-semibold text-foreground mb-2">
                                        {coach.name}
                                    </h3>

                                    <p className="text-sm text-lime font-semibold mb-3">
                                        {coach.expertise}
                                    </p>

                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {coach.credibility}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-center gap-4 mt-12">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={prevSlide}
                            className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </Button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "bg-primary w-8"
                                        : "bg-border hover:bg-primary/50"
                                        }`}
                                />
                            ))}
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={nextSlide}
                            className="rounded-full w-12 h-12 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </Button>
                    </div>

                    {/* Find out more CTA */}
                    <div className="flex justify-center mt-12">
                        <Button variant="dark" size="lg" asChild className="rounded-full">
                            <a href="/coaches">
                                Find out more about our coaches
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
