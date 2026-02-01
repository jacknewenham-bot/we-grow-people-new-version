import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    Zap,
    Users,
    Shield,
    Target,
    MessageCircle,
    BrainCircuit,
    Award,
    TrendingUp,
    Layout,
    Clock,
    Search,
    BookOpen,
    Sparkles,
    BarChart3,
    Layers,
    MousePointer2,
    Megaphone,
    Rocket,
    RefreshCw,
    Map
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%20there%2C%20I'm%20interested%20in%20your%20Marketing%20Training%20programs";

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
                            Marketing training built for <br />
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
                    </div>
                </section>

                {/* 2. PROBLEM CONTEXT */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1">
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">Why marketing training <br /> often fails</h2>
                                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                    <p>
                                        Many marketing teams attend training, feel inspired, then return to the same campaigns, channels, and habits within weeks.
                                    </p>
                                    <p className="text-primary font-bold">
                                        The issue is rarely creativity or effort. It is relevance, prioritization, and real-world application.
                                    </p>
                                    <p>
                                        Effective marketing training must reflect your market, your funnel, your data, and the constraints your team operates under every day. That is what WeGrowPeople is built for.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 bg-muted/30 p-12 rounded-[3rem] border border-border relative">
                                <XCircle className="w-12 h-12 text-destructive absolute -top-6 -right-6 bg-white rounded-full shadow-lg" />
                                <div className="space-y-6">
                                    <div className="h-2 w-1/3 bg-destructive/10 rounded-full" />
                                    <div className="h-4 w-full bg-destructive/5 rounded-full" />
                                    <div className="h-4 w-4/5 bg-destructive/5 rounded-full" />
                                    <div className="h-4 w-full bg-destructive/5 rounded-full" />
                                    <p className="text-sm font-bold text-destructive uppercase tracking-tighter opacity-50">Standard theoretical marketing training</p>
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
                                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/10 border border-white/10"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
                                    <p className="text-lg font-medium">{sign}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="text-center">
                            <p className="text-xl mb-10 text-hero-muted italic">If several of these sound familiar, targeted marketing training is often the fastest way to regain momentum.</p>
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
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="flex-1">
                                <h2 className="headline-display text-4xl mb-12">Who our marketing training <br /> is designed for</h2>
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
                            <div className="flex-1 bg-primary p-12 rounded-[3.5rem] text-white">
                                <h3 className="headline-display text-3xl mb-10 text-lime">Delivery formats</h3>
                                <div className="space-y-10">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Users className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">In-person workshops</h4>
                                            <p className="text-white/70">Hands-on delivery using your real campaigns and data.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Layout className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Virtual instructor-led</h4>
                                            <p className="text-white/70">Interactive sessions for distributed teams.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Shield className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Blended programs</h4>
                                            <p className="text-white/70">Multi-touch learning with ongoing reinforcement.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 italic text-sm text-white/60">
                                    Sessions can be delivered as half-day, full-day, or multi-session programs depending on your needs.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CAPABILITIES SECTION */}
                <section id="marketing-capabilities" className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">Marketing capabilities we cover</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[
                                { name: "Marketing fundamentals", icon: Layers },
                                { name: "Growth strategy and experimentation", icon: Rocket },
                                { name: "Funnel design and optimization", icon: Target },
                                { name: "Performance marketing and analytics", icon: BarChart3 },
                                { name: "Content strategy and messaging", icon: Megaphone },
                                { name: "Brand positioning", icon: Sparkles },
                                { name: "Lifecycle and retention marketing", icon: RefreshCw },
                                { name: "Go-to-market planning", icon: Map },
                                { name: "AI for marketing productivity", icon: BrainCircuit }
                            ].map((area, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-6 rounded-2xl bg-white border border-border flex items-center gap-4 hover:shadow-md transition-shadow cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-lime/10 flex items-center justify-center shrink-0">
                                        <area.icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="font-bold text-primary">{area.name}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-muted-foreground italic">
                            Programs are modular and can be combined to match your growth model.
                        </p>
                    </div>
                </section>

                {/* 9. ENGAGEMENT FLOW SECTION */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">How a typical engagement works</h2>
                        <div className="max-w-5xl mx-auto space-y-12">
                            {[
                                { title: "Understand your reality", desc: "We align with leadership to understand your market, goals, and constraints.", icon: Search },
                                { title: "Design the program", desc: "We tailor content, structure, and delivery to your team.", icon: Layout },
                                { title: "Deliver practical training", desc: "Live sessions focused on real campaigns and decisions.", icon: Zap },
                                { title: "Reinforce learning", desc: "Post-training support to help execution stick.", icon: BrainCircuit },
                                { title: "Review impact", desc: "Clear feedback and recommendations for next steps.", icon: TrendingUp }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col md:flex-row items-center gap-8 group"
                                >
                                    <div className="w-20 h-20 rounded-3xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-lime/10 transition-colors">
                                        <step.icon className="w-10 h-10 text-primary" />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                                        <p className="text-lg text-muted-foreground">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 10. SOCIAL PROOF SECTION */}
                <section className="py-24 bg-muted/10">
                    <div className="container">
                        <h2 className="headline-display text-4xl mb-16 text-center">What teams say about <br /> working with us</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                            {[
                                "The practical relevance of the training was outstanding. We were able to apply the frameworks to our active campaigns immediately.",
                                "A deep understanding of the APAC market constraints. No theoretical fluff, just actionable steps that improved our funnel performance."
                            ].map((quote, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-border shadow-sm italic text-lg text-muted-foreground relative">
                                    <span className="text-6xl text-lime/30 absolute top-4 left-6 font-serif underline decoration-primary/20">“</span>
                                    <p className="relative z-10">{quote}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
                            Trusted by teams across technology, services, and operations.
                        </p>
                    </div>
                </section>

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
