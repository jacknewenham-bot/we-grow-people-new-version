import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import { CheckCircle2, XCircle, ArrowRight, Zap, Target, Users, Shield } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%20there%2C%20I'm%20interested%20in%20finding%20out%20more%20about%20your%20training";

const coaches = [
    {
        name: "Hamza Akaouch",
        expertise: "Sales performance & leadership communication",
        image: "HA"
    },
    {
        name: "Jack Newenham",
        expertise: "Growth strategy & performance marketing",
        image: "JN"
    },
    {
        name: "Marc Sagayam",
        expertise: "Project governance & stakeholder management",
        image: "MS"
    },
    {
        name: "Adele O'Brien",
        expertise: "Growth strategy & go-to-market",
        image: "AO"
    },
    {
        name: "Ashvin Praveen",
        expertise: "AI workflows & business automation",
        image: "AP"
    },
    {
        name: "Kain Masters",
        expertise: "Leadership development & team dynamics",
        image: "KM"
    }
];

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* 1. Hero Section – Belief First */}
                <section className="py-20 md:py-32 bg-hero text-hero">
                    <div className="container max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center"
                        >
                            <h1 className="headline-display text-5xl md:text-7xl mb-8">
                                Where Human Skills <br />
                                <span className="text-lime">Meet Smart Technology</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-hero-muted mb-10 max-w-3xl mx-auto font-medium">
                                WeGrowPeople exists to help individuals and teams perform, adapt, and stay ahead in a fast-moving world of work without outdated frameworks or generic training.
                            </p>
                            <div className="max-w-2xl mx-auto space-y-6 text-lg text-hero-muted/80">
                                <p>
                                    The workplace is changing faster than ever. New tools, new expectations, and constant noise make it hard to know what actually matters.
                                </p>
                                <p>
                                    We cut through that noise with practical, future-ready training that builds real capability, not just knowledge.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. The Problem We Exist to Solve */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="headline-display text-3xl md:text-5xl mb-12"
                            >
                                The problem with <br />
                                traditional training
                            </motion.h2>

                            <div className="grid md:grid-cols-2 gap-8 mb-16">
                                {[
                                    "Too theoretical",
                                    "Too generic",
                                    "Too disconnected from real work",
                                    "Outdated the moment it is delivered"
                                ].map((point, i) => (
                                    <motion.div
                                        key={point}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-6 rounded-2xl bg-muted/30"
                                    >
                                        <XCircle className="w-6 h-6 text-destructive shrink-0 mt-1" />
                                        <span className="text-xl font-medium">{point}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="p-8 md:p-12 rounded-3xl bg-primary text-white text-center"
                            >
                                <p className="text-2xl md:text-3xl font-bold leading-tight">
                                    Learning should not feel like a checkbox. <br />
                                    <span className="text-lime">It should change how people show up at work immediately.</span>
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. Our Mission */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="headline-display text-4xl md:text-5xl mb-8"
                            >
                                Our mission
                            </motion.h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    We empower individuals and teams with up-to-date, practical training in sales, communication, performance, and AI so they stay ahead of the curve instead of chasing it.
                                </p>
                                <p>
                                    Through expert-led coaching, proven frameworks, and AI-powered learning, we deliver no-fluff, high-impact training that builds confidence, capability, and real results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. What Makes WeGrowPeople Different */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">
                            What makes WeGrowPeople different
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "Built for today’s workplace",
                                    desc: "No outdated models. No legacy thinking. Everything is designed for how work actually happens now.",
                                    icon: Zap
                                },
                                {
                                    title: "Human-first, tech-enabled",
                                    desc: "We focus on human skills such as communication, judgment, and leadership, and enhance them with modern tools including AI.",
                                    icon: Users
                                },
                                {
                                    title: "Practitioners, not presenters",
                                    desc: "Our coaches are operators, builders, and leaders who have done the work, not just taught it.",
                                    icon: Target
                                },
                                {
                                    title: "Practical by default",
                                    desc: "If it cannot be used immediately, it does not make the cut.",
                                    icon: Shield
                                }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center mb-6">
                                        <pillar.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 leading-tight">{pillar.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. Meet the Coaches (Carousel) */}
                <section className="py-24 bg-muted/10">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">
                            Meet the coaches
                        </h2>

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
                                            <div className="p-1">
                                                <div className="bg-white rounded-3xl border border-border overflow-hidden h-full shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="aspect-[4/5] bg-muted/50 flex items-center justify-center text-4xl font-bold text-primary/20">
                                                        {coach.image}
                                                    </div>
                                                    <div className="p-8 text-center">
                                                        <h3 className="text-xl font-bold mb-2">{coach.name}</h3>
                                                        <p className="text-sm text-lime font-semibold mb-6">{coach.expertise}</p>
                                                        <a
                                                            href="/coaches"
                                                            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:gap-3 transition-all underline decoration-lime/30 underline-offset-4"
                                                        >
                                                            View full profile <ArrowRight size={16} />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="hidden md:block">
                                    <CarouselPrevious className="-left-12 h-12 w-12" />
                                    <CarouselNext className="-right-12 h-12 w-12" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </section>

                {/* 6. Proof Without Bragging */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="flex justify-center mb-8">
                            <span className="pill-badge bg-primary/10 text-primary border border-primary/20 px-4 py-2 text-sm">
                                <Shield className="w-4 h-4 text-lime" /> HRDC Claimable Training
                            </span>
                        </div>
                        <h2 className="headline-display text-3xl md:text-4xl mb-16 text-center text-muted-foreground">
                            Trusted by teams who want real impact
                        </h2>

                        <div className="flex flex-wrap justify-center gap-12 md:gap-20 mb-20 opacity-40 grayscale">
                            {["Sales", "Marketing", "Teams", "Operations", "HR", "Leadership"].map(logo => (
                                <span key={logo} className="text-2xl font-black uppercase tracking-widest">{logo}</span>
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                "The most practical training we've ever had. No fluff, just results.",
                                "Finally, a training program that understands how we actually work today."
                            ].map((quote, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-muted/20 italic text-lg text-muted-foreground">
                                    "{quote}"
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 7. Who We Work With */}
                <section className="py-24 bg-primary text-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="headline-display text-4xl md:text-5xl mb-8">
                                Who we work with
                            </h2>
                            <p className="text-xl md:text-2xl mb-8 text-white/80">
                                We work with growing companies, modern teams, and leaders who care about both performance and people.
                            </p>
                            <p className="text-lg text-white/60">
                                From startups to established organisations across industries, our clients share one thing in common. They want learning that actually sticks.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 8. Closing CTA */}
                <section className="py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-6xl mb-12">
                            Ready to grow your people?
                        </h2>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="lime" size="xl" asChild className="text-lg px-12 py-8 rounded-full">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Talk to us
                                </a>
                            </Button>
                            <Button variant="outline" size="xl" asChild className="text-lg px-12 py-8 rounded-full">
                                <a href="/#programs">
                                    Explore training
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
