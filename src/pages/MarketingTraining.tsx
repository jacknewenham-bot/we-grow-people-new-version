import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ModularTrainingBuilder } from "@/components/sections/ModularTrainingBuilder";
import { Testimonials } from "@/components/sections/Testimonials";
import {
    CheckCircle2,
    XCircle,
    Zap,
    Users,
    Shield,
    Target,
    MessageCircle,
    Award,
    TrendingUp,
    Layout
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20your%20Marketing%20Training%20programs";

const MarketingTraining = () => {
    const scrollToPrograms = () => {
        document.getElementById("marketing-capabilities")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* 1. HERO SECTION */}
                <section className="py-20 md:py-32 bg-hero text-hero relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-lime/5 blur-[120px] pointer-events-none" />
                    <div className="container max-w-5xl text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="headline-display text-5xl md:text-7xl mb-8"
                        >
                            <span className="text-white/90">Marketing training built for</span>
                            <br />
                            <span className="text-lime">modern growth teams</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12 max-w-3xl mx-auto"
                        >
                            Practical, outcome-driven marketing training designed around how teams actually acquire, convert, and retain customers today. Delivered by experienced practitioners, not career trainers.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4 mb-12"
                        >
                            <Button variant="lime" size="xl" asChild className="rounded-full px-10 py-7 text-lg font-bold">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-5 w-5" /> Chat with us
                                </a>
                            </Button>
                            <Button
                                variant="white"
                                size="xl"
                                onClick={scrollToPrograms}
                                className="rounded-full px-10 py-7 text-lg font-bold"
                            >
                                Explore programs
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-wrap justify-center gap-8 text-sm font-bold text-hero-muted/60 uppercase tracking-widest"
                        >
                            <span className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-lime" /> Trusted by APAC Teams
                            </span>
                            <span className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-lime" /> HRDC Claimable
                            </span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-14"
                        >
                            <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
                                <img
                                    src="/images/about/team_collaboration_tech_1769341635874.png"
                                    alt="Marketing team collaboration"
                                    className="h-[240px] w-full object-cover md:h-[320px]"
                                    loading="eager"
                                    decoding="async"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* 2. PROBLEM CONTEXT */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1">
                                <h2 className="headline-display text-4xl md:text-5xl mb-8 uppercase leading-[0.95]">
                                    Why marketing training often fails
                                </h2>
                                <div className="space-y-5 text-xl text-muted-foreground leading-relaxed">
                                    <p>
                                        Teams feel inspired, then return to the same campaigns, channels, and habits.
                                    </p>
                                    <p className="text-primary font-bold">
                                        The gap is not creativity.
                                        <br />
                                        It is relevance and application.
                                    </p>
                                    <p>
                                        WeGrowPeople delivers training grounded in your real work.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 rounded-[2rem] border border-border overflow-hidden relative bg-white shadow-sm">
                                <XCircle className="w-12 h-12 text-destructive absolute top-4 right-4 bg-white rounded-full shadow-lg z-10" />
                                <img
                                    src="/training-images/optimized/expert-led-1600.jpg"
                                    alt="Generic marketing training often lacks real application"
                                    className="h-[380px] w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                                    <p className="text-sm font-bold text-white/90 uppercase tracking-[0.12em]">Standard theoretical marketing training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. OUTCOMES SECTION */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">How well designed marketing training <br /> helps teams perform</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Clarify Priorities", desc: "Align marketing activity to real business goals, not vanity metrics.", icon: Target },
                                { title: "Improve Funnel Performance", desc: "Turn traffic into qualified leads and leads into revenue more consistently.", icon: TrendingUp },
                                { title: "Build Consistency", desc: "Create repeatable execution across channels, campaigns, and teams.", icon: Layout },
                                { title: "Increase Confidence", desc: "Equip marketers to make decisions backed by data, not guesswork.", icon: MessageCircle },
                                { title: "Scale What Works", desc: "Identify winning patterns and apply them across channels and regions.", icon: Users },
                                { title: "Adapt Faster", desc: "Respond to platform changes, audience shifts, and performance drops with confidence.", icon: Zap }
                            ].map((value, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-lime/10 flex items-center justify-center mb-6">
                                        <value.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-muted-foreground">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-xl font-medium text-primary">
                            The focus is on usable skills, not abstract frameworks.
                        </p>
                    </div>
                </section>

                {/* 4. PHILOSOPHY SECTION */}
                <section className="py-24 bg-white overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-20 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">Why we do not run <br /> one-off workshops</h2>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                                    Marketing performance does not improve through isolated sessions or generic playbooks. WeGrowPeople designs marketing training as a system, not an event.
                                </p>
                                <div className="p-8 rounded-3xl bg-primary text-white mb-8">
                                    <p className="text-2xl font-bold leading-tight">
                                        Targeting lasting improvement, <br />
                                        <span className="text-lime text-3xl font-black">not short-term inspiration.</span>
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                {[
                                    { title: "Understand context", desc: "We deep-dive into your market, funnel, channels, and constraints." },
                                    { title: "Leadership alignment", desc: "We align on goals, expectations, and success metrics." },
                                    { title: "Practical frameworks", desc: "No fluff. Just tools teams can apply immediately." },
                                    { title: "Live application", desc: "Training using your real campaigns, data, and scenarios." },
                                    { title: "Reinforcement", desc: "Support after delivery to ensure execution sticks." },
                                    { title: "Review and recommendations", desc: "Clear reporting on impact and next steps." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-muted/30 transition-colors border border-transparent hover:border-border">
                                        <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center shrink-0">
                                            <span className="text-primary font-bold">{i + 1}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">{item.title}</h4>
                                            <p className="text-muted-foreground text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 5. DIAGNOSTIC SECTION */}
                <section className="py-24 bg-hero text-hero">
                    <div className="container max-w-4xl">
                        <h2 className="headline-display text-3xl md:text-5xl mb-12 text-center text-white">Signs your team may benefit <br /> from marketing training</h2>
                        <div className="grid md:grid-cols-1 gap-6 mb-16 max-w-2xl mx-auto">
                            {[
                                "Campaigns underperform but the reason is unclear",
                                "Leads increase but quality does not",
                                "Conversion rates plateau across channels",
                                "Teams rely on tactics without a clear strategy",
                                "Execution varies widely across team members"
                            ].map((sign, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/16 border border-white/25 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-lime shrink-0 mt-0.5" />
                                    <p className="text-lg font-semibold text-white/95">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center">
                            <p className="text-xl mb-10 text-white/80 italic">If several of these sound familiar, targeted marketing training is often the fastest way to regain momentum.</p>
                            <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-lg font-bold">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Chat with us
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 6. AUDIENCE SECTION */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            <div>
                                <h2 className="headline-display text-4xl mb-8">Who our marketing training <br /> is designed for</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "Marketing executives", desc: "Setting strategy, priorities, and performance direction." },
                                        { title: "Growth marketers", desc: "Driving acquisition, activation, and experimentation." },
                                        { title: "Performance marketers", desc: "Improving efficiency across paid and owned channels." },
                                        { title: "Content and brand teams", desc: "Building positioning, messaging, and demand." }
                                    ].map((target, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-muted/20 border border-border">
                                            <h4 className="font-bold text-xl mb-2">{target.title}</h4>
                                            <p className="text-muted-foreground">{target.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-primary p-10 rounded-[3.5rem] text-white self-start">
                                <div className="mb-6 overflow-hidden rounded-2xl border border-white/15">
                                    <img
                                        src="/Additional website images/group-diverse-business-people-successful-teamwork-working-together-with-laptop-computer-office.jpg"
                                        alt="Marketing planning session"
                                        className="h-40 md:h-44 w-full object-cover object-[center_32%]"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <h3 className="headline-display text-3xl mb-7 text-lime">Delivery formats</h3>
                                <div className="space-y-7">
                                    <div className="flex gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Users className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">In-person workshops</h4>
                                            <p className="text-white/70">Hands-on delivery using your real campaigns and data.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Layout className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Virtual instructor-led</h4>
                                            <p className="text-white/70">Interactive sessions for distributed teams.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-5">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Shield className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Blended programs</h4>
                                            <p className="text-white/70">Multi-touch learning with ongoing reinforcement.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CAPABILITIES SECTION */}
                <section id="marketing-capabilities" className="py-24 bg-muted/20">
                    <div className="container">
                        <ModularTrainingBuilder defaultTrack="marketing" />
                    </div>
                </section>

                {/* 9. SOCIAL PROOF (Homepage Testimonials) */}
                <Testimonials />

                {/* 11. FINAL CTA SECTION */}
                <section className="py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-7xl mb-10">Build a marketing team that <br /> actually performs</h2>
                        <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
                            If you want marketing training that fits your team and drives measurable improvement, let’s talk.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-xl font-bold">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Chat with us
                                </a>
                            </Button>
                            <Button variant="outline" size="xl" asChild className="rounded-full px-12 py-8 text-xl font-bold border-2">
                                <a href="/contact?type=proposal">Get a proposal</a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default MarketingTraining;
