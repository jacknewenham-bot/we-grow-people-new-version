import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CoachesImageCarousel } from "@/components/sections/CoachesImageCarousel";
import { Teams } from "@/components/sections/Teams";
import { XCircle, Zap, Target, Users, Shield } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20finding%20out%20more%20about%20your%20training";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* 1. Hero Section – Belief First */}
                <section className="py-16 md:py-24 bg-hero text-hero relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-[40%] h-full bg-lime/10 blur-[130px] pointer-events-none" />
                    <div className="absolute bottom-0 right-0 w-[35%] h-full bg-lime/10 blur-[120px] pointer-events-none" />

                    <div className="container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-10 md:px-10 lg:px-14 lg:py-14"
                        >
                            <div className="grid lg:grid-cols-[1fr_0.92fr] gap-10 lg:gap-12 items-center">
                                <div className="max-w-3xl">
                                    <h1 className="headline-display uppercase text-5xl md:text-6xl xl:text-7xl leading-[0.93] tracking-tight mb-7">
                                        <span className="block text-white">Built to help teams grow</span>
                                        <span className="block text-lime mt-2">in a changing world</span>
                                    </h1>

                                    <div className="space-y-5 text-lg md:text-[1.35rem] leading-relaxed text-white/80 max-w-[34ch]">
                                        <p>
                                            We help teams build practical, future-ready skills that actually show up at work.
                                        </p>
                                        <p>
                                            No outdated frameworks. No generic training. Just capability your teams can use immediately.
                                        </p>
                                    </div>
                                </div>

                                <div className="relative min-h-[340px] md:min-h-[420px]">
                                    <svg className="pointer-events-none absolute -right-16 -top-10 hidden md:block w-[135%] h-[130%]" viewBox="0 0 760 560" fill="none" aria-hidden="true">
                                        <path d="M740 30C546 118 438 175 311 286C240 348 172 378 62 392" stroke="hsl(var(--lime))" strokeOpacity="0.9" strokeWidth="13" strokeLinecap="round" />
                                        <path d="M680 474C560 430 450 413 344 438C254 458 198 500 112 536" stroke="hsl(var(--white) / 0.22)" strokeWidth="9" strokeLinecap="round" />
                                    </svg>

                                    <div className="absolute right-1 top-5 md:right-8 md:top-6 h-[290px] w-[230px] md:h-[340px] md:w-[270px] rounded-[1.8rem] bg-primary/90 shadow-[0_24px_46px_rgba(6,22,16,0.45)]" />

                                    <div className="absolute left-8 top-10 md:left-2 md:top-12 h-[300px] w-[240px] md:h-[360px] md:w-[290px] rounded-[1.9rem] overflow-hidden border-[2px] border-white/60 shadow-[0_24px_42px_rgba(3,12,9,0.45)] -rotate-[5deg]">
                                        <img
                                            src="/Additional website images/happy-young-asian-businessmen-businesswomen-meeting-brainstorming-ideas.jpg"
                                            alt="Team collaborating"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="absolute right-0 bottom-0 md:right-2 md:bottom-2 rounded-2xl overflow-hidden border border-white/40 bg-white/10 shadow-[0_14px_24px_rgba(7,24,17,0.28)] backdrop-blur-sm">
                                        <img
                                            src="/Additional website images/businesswoman-conducting-meeting.jpg"
                                            alt="Practical coaching session"
                                            className="h-24 w-28 md:h-28 md:w-36 object-cover"
                                        />
                                    </div>

                                </div>
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
                                <div className="absolute -bottom-6 -right-6 bg-lime text-primary p-6 rounded-2xl shadow-xl font-bold text-base md:text-lg leading-snug max-w-[260px] -rotate-3">
                                    <span className="block">"If it doesn't change your work,</span>
                                    <span className="block">it isn't learning."</span>
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
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="rounded-[2.6rem] border border-[#e8dda1] bg-[#f5e7a3] p-6 md:p-10 lg:p-12 shadow-[0_20px_45px_rgba(18,24,42,0.12)]"
                        >
                            <div className="grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.58fr)] gap-8 lg:gap-10 items-start">
                                <div className="lg:pr-5">
                                    <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/65 mb-5">
                                        Why WeGrowPeople
                                    </p>
                                    <h2 className="max-w-[10ch] break-words font-heading text-4xl md:text-5xl lg:text-[3.8rem] leading-[0.9] tracking-tight text-foreground mb-6">
                                        What makes us different
                                    </h2>
                                    <p className="text-lg md:text-[1.35rem] text-foreground/75 leading-relaxed max-w-[28ch]">
                                        Practical by design, modern by default, and delivered by people who have done the work.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                                    {[
                                        {
                                            title: "Built for today’s work",
                                            titleLines: ["Built for", "today’s work"],
                                            desc: "No outdated models. No legacy thinking. Designed for how work happens now.",
                                            icon: Zap
                                        },
                                        {
                                            title: "Human-first, tech-enabled",
                                            titleLines: ["Human-first,", "tech-enabled"],
                                            desc: "We build communication, judgment, and leadership, then reinforce with AI tools.",
                                            icon: Users
                                        },
                                        {
                                            title: "Practitioners, not presenters",
                                            titleLines: ["Practitioners,", "not presenters"],
                                            desc: "Our coaches are operators, builders, and leaders who have done the work.",
                                            icon: Target
                                        },
                                        {
                                            title: "Practical by default",
                                            titleLines: ["Practical by", "default"],
                                            desc: "If it cannot be used immediately, it does not make the cut.",
                                            icon: Shield
                                        }
                                    ].map((pillar, i) => (
                                        <motion.div
                                            key={pillar.title}
                                            initial={{ opacity: 0, y: 18 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="rounded-3xl border border-[#e0d6a1] bg-[#fcf8e8] p-6 md:p-7 shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
                                        >
                                            <div className="w-11 h-11 rounded-full bg-[#e9efd8] flex items-center justify-center mb-5">
                                                <pillar.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="text-[1.65rem] md:text-[1.75rem] font-black leading-[1.05] tracking-tight text-foreground mb-4 min-h-[3.6rem]">
                                                <span className="block whitespace-nowrap">{pillar.titleLines[0]}</span>
                                                <span className="block whitespace-nowrap">{pillar.titleLines[1]}</span>
                                            </h3>
                                            <p className="text-base md:text-lg text-foreground/75 leading-relaxed">
                                                {pillar.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 5. Meet the Coaches (Carousel) */}
                <CoachesImageCarousel sectionClassName="py-24 bg-muted/10" showSubtitle={false} showCta={false} />

                {/* 6. Teams Section (Homepage Style) */}
                <Teams />

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
