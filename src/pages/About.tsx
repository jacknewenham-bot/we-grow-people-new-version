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
        expertise: "Consultative selling & decision psychology",
        image: "/about-us-coaches-page/Hamza.png"
    },
    {
        name: "Jack Newenham",
        expertise: "Growth strategy & performance marketing",
        image: "/about-us-coaches-page/Jack.png"
    },
    {
        name: "Marc Sagayam",
        expertise: "Project governance & stakeholder management",
        image: "/about-us-coaches-page/Marc.png"
    },
    {
        name: "Adele O'Brien",
        expertise: "Growth strategy & go-to-market",
        image: "/about-us-coaches-page/Adele.png"
    },
    {
        name: "Ashvin Praveen",
        expertise: "AI workflows & business automation",
        image: "/about-us-coaches-page/Ashvin.png"
    },
    {
        name: "Kain Masters",
        expertise: "Leadership development & team dynamics",
        image: "/about-us-coaches-page/kain.png"
    },
    {
        name: "Alfred Ng",
        expertise: "Storytelling & video creation",
        image: "/about-us-coaches-page/Alfred.png"
    },
    {
        name: "Ebrahim Al Hamdi",
        expertise: "AI agents & automation",
        image: "/about-us-coaches-page/Ebrahim.png"
    },
    {
        name: "Ivan Eng",
        expertise: "Workplace wellbeing & mental health",
        image: "/about-us-coaches-page/ivan.png"
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
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="headline-display text-3xl md:text-5xl mb-8">
                                    The problem with <br />
                                    traditional training
                                </h2>
                                <div className="space-y-4">
                                    {[
                                        "Too theoretical and academic",
                                        "Generic, one-size-fits-all content",
                                        "Disconnected from daily work realities",
                                        "Outdated before the ink is dry"
                                    ].map((point, i) => (
                                        <div key={point} className="flex items-center gap-3 text-lg font-medium text-muted-foreground">
                                            <XCircle className="w-5 h-5 text-destructive" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl skew-y-1">
                                    <img
                                        src="/images/about/team_collaboration_tech_1769341635874.png"
                                        alt="Traditional training vs Modern collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-lime text-primary p-6 rounded-2xl shadow-xl font-bold max-w-[200px] -rotate-3">
                                    "Learning shouldn't be a checkbox."
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-8 md:p-16 rounded-[3rem] bg-primary text-white text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-10 pointer-events-none">
                                <div className="absolute top-0 left-0 w-64 h-64 bg-lime rounded-full blur-[100px]" />
                                <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime rounded-full blur-[100px]" />
                            </div>
                            <p className="text-2xl md:text-4xl font-bold leading-tight relative z-10">
                                Real training should change how people <br />
                                <span className="text-lime">show up at work immediately.</span>
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 3. Impact in Action (New Gallery Section) */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="headline-display text-4xl md:text-5xl mb-6">Impact in Action</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                We believe in high-energy, high-impact sessions where learning meets execution.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg group">
                                    <img
                                        src="/images/about/modern_corporate_workshop_1769341602532.png"
                                        alt="Workshop Session"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8 rounded-3xl bg-white border border-border shadow-sm">
                                    <h3 className="text-xl font-bold mb-3">Interactive Workshops</h3>
                                    <p className="text-muted-foreground">No slide-deck fatigue. Our sessions are built around doing, not just watching.</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="space-y-8"
                            >
                                <div className="p-8 rounded-3xl bg-primary text-white">
                                    <Zap className="w-10 h-10 text-lime mb-6" />
                                    <h3 className="text-2xl font-bold mb-4">Fast-Paced Growth</h3>
                                    <p className="text-white/80 leading-relaxed">
                                        We design our curriculums to be rapid-response. When the market moves, our training moves with it.
                                    </p>
                                </div>
                                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-lg group">
                                    <img
                                        src="/images/about/trainer_in_action_1769341618326.png"
                                        alt="Trainer leading a group"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg group">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                        alt="Collaboration"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-8 rounded-3xl bg-lime text-primary">
                                    <h3 className="text-xl font-bold mb-3">Real Capability</h3>
                                    <p className="font-medium">Building the skills that actually matter in a tech-enabled world.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 4. Our Mission */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 lg:order-1"
                            >
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">
                                    Our mission
                                </h2>
                                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                    <p>
                                        We empower individuals and teams with up-to-date, practical training in sales, communication, performance, and AI so they stay ahead of the curve instead of chasing it.
                                    </p>
                                    <p>
                                        Through expert-led coaching, proven frameworks, and AI-powered learning, we deliver no-fluff, high-impact training that builds confidence, capability, and real results.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-1 lg:order-2"
                            >
                                <div className="aspect-video rounded-[2rem] overflow-hidden shadow-xl border-8 border-muted">
                                    <img
                                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
                                        alt="Team Growth"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
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
                                                    <div className="aspect-[4/5] bg-muted/50 flex items-center justify-center overflow-hidden">
                                                        <img
                                                            src={coach.image}
                                                            alt={coach.name}
                                                            className="w-full h-full object-cover"
                                                        />
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
                            <Button variant="white" size="xl" asChild className="text-lg px-12 py-8 rounded-full">
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
