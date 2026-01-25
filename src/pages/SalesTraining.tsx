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
    BookOpen
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%20there%2C%20I'm%20interested%20in%20your%20Sales%20Training%20programs";

const SalesTraining = () => {
    const scrollToPrograms = () => {
        document.getElementById("training-areas")?.scrollIntoView({ behavior: "smooth" });
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
                            Sales training built for <br />
                            <span className="text-lime">modern revenue teams</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12 max-w-3xl mx-auto"
                        >
                            Practical, outcome-driven sales training designed around how your team actually sells today. Delivered by experienced practitioners, not career trainers.
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
                                variant="outline"
                                size="xl"
                                onClick={scrollToPrograms}
                                className="rounded-full px-10 py-7 text-lg border-white/20 text-white hover:bg-white/10"
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
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">Why sales training <br /> often fails</h2>
                                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                    <p>
                                        Many sales teams attend training, feel inspired, then return to the same habits within weeks.
                                    </p>
                                    <p className="text-primary font-bold">
                                        The issue is rarely motivation. It is relevance, reinforcement, and real application.
                                    </p>
                                    <p>
                                        Effective sales training must reflect your market, your customers, and the realities your team faces every day. That is what WeGrowPeople is built for.
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
                                    <p className="text-sm font-bold text-destructive uppercase tracking-tighter opacity-50">Standard theoretical training</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. VALUE OF CUSTOM SALES TRAINING */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">How well designed sales training <br /> helps teams perform</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Clarify Priorities", desc: "Align the entire team on revenue goals and high-impact activities.", icon: Target },
                                { title: "Improve Funnel Conversion", desc: "Build the skills that turn interest into closed deals more effectively.", icon: TrendingUp },
                                { title: "Build Consistency", desc: "Ensure your customers get a high-quality experience no matter who they talk to.", icon: Layout },
                                { title: "Increase Confidence", desc: "Empower sellers to handle tough questions and keep deals moving.", icon: MessageCircle },
                                { title: "Scale Success", desc: "Reduce dependency on top performers by raising the baseline for everyone.", icon: Users },
                                { title: "Adapt Faster", desc: "Give teams the tools to identify and unstick deals that have stalled.", icon: Zap }
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
                            The focus is on usable skills, not theoretical frameworks.
                        </p>
                    </div>
                </section>

                {/* 4. OUR APPROACH */}
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
                                    Sales performance does not improve through isolated training sessions. WeGrowPeople designs sales training as a system, not an event.
                                </p>
                                <div className="p-8 rounded-3xl bg-primary text-white mb-8">
                                    <p className="text-2xl font-bold leading-tight">
                                        Targeting lasting improvement, <br />
                                        <span className="text-lime text-3xl font-black">not short-term energy.</span>
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
                                    { title: "Understand context", desc: "We deep-dive into your specific sales reality and hurdles." },
                                    { title: "Leadership alignment", desc: "We ensure goals are agreed upon by those managing the team." },
                                    { title: "Practical frameworks", desc: "No fluff. Just tools teams can pick up and use instantly." },
                                    { title: "Live practice", desc: "Training using your real deals and actual scenarios." },
                                    { title: "Reinforcement", desc: "Support after delivery to ensure behavior change stickiness." },
                                    { title: "Review & Recommendations", desc: "Clear reporting for managers on performance and next steps." }
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

                {/* 5. WHEN SALES TRAINING IS THE RIGHT MOVE */}
                <section className="py-24 bg-hero text-hero">
                    <div className="container max-w-4xl">
                        <h2 className="headline-display text-3xl md:text-5xl mb-12 text-center text-white">Signs your team may benefit <br /> from sales training</h2>
                        <div className="grid md:grid-cols-2 gap-8 mb-16">
                            {[
                                "Deals frequently stall or go quiet",
                                "Sales conversations lack structure",
                                "New hires take too long to ramp",
                                "Results vary widely across the team",
                                "Managers struggle to coach consistently"
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
                            <p className="text-xl mb-10 text-hero-muted italic">If several of these sound familiar, targeted sales training is often the fastest way to create impact.</p>
                            <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-lg font-bold">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Chat with us
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* 6. WHO THIS IS FOR */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
                            <div className="flex-1">
                                <h2 className="headline-display text-4xl mb-12">Who our sales training <br /> is designed for</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "New sales hires", desc: "Building core fundamentals and ramp time acceleration." },
                                        { title: "Experienced sellers", desc: "Refining high-level approach and unsticking complex deals." },
                                        { title: "Account managers", desc: "Handling growth and retention in complex key accounts." },
                                        { title: "Sales leaders", desc: "Coaching teams at scale and building internal systems." }
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
                                            <p className="text-white/70">High-energy, focused delivery in your office or offsite.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Layout className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Virtual instructor-led</h4>
                                            <p className="text-white/70">Interactive sessions delivered online for distributed teams.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Shield className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">Blended programs</h4>
                                            <p className="text-white/70">Multi-touch learning with ongoing asynchronous reinforcement.</p>
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

                {/* 7. SALES TRAINING AREAS */}
                <section id="training-areas" className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">Sales capabilities we cover</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[
                                "Sales fundamentals",
                                "Prospecting & building pipeline",
                                "Targeting & Qualification",
                                "Consultative selling",
                                "Insight & Challenger selling",
                                "Storytelling & pitching",
                                "Key account management",
                                "Social & digital selling",
                                "Virtual & hybrid selling",
                                "Customer success & retention",
                                "Trade shows & exhibitions"
                            ].map((area, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-6 rounded-2xl bg-white border border-border flex items-center gap-4 hover:shadow-md transition-shadow cursor-default"
                                >
                                    <div className="w-2 h-2 rounded-full bg-lime shrink-0" />
                                    <span className="font-bold text-primary">{area}</span>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center mt-12 text-muted-foreground italic">
                            Programs are modular and can be combined to match your sales motion.
                        </p>
                    </div>
                </section>

                {/* 8. HOW PROGRAMS WORK */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">How a typical engagement works</h2>
                        <div className="max-w-5xl mx-auto space-y-12">
                            {[
                                { title: "Understand your reality", desc: "We align with leadership to understand your sales environment, challenges, and goals.", icon: Search },
                                { title: "Design the program", desc: "We tailor content, structure, and delivery to your team.", icon: Layout },
                                { title: "Deliver practical training", desc: "Live sessions focused on real conversations, deals, and decisions.", icon: Zap },
                                { title: "Reinforce learning", desc: "Post-training support to help new behaviours stick.", icon: BrainCircuit },
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

                {/* 9. SOCIAL PROOF (Testimonials) */}
                <section className="py-24 bg-muted/10">
                    <div className="container">
                        <h2 className="headline-display text-4xl mb-16 text-center">What teams say about <br /> working with us</h2>
                        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                            {[
                                "Jack was incredibly helpful in advising on our lead generation approach. He provided practical advice on increasing volume and was exceptionally generous with his knowledge.",
                                "WeGrowPeople delivered a program that actually reflected our APAC sales reality. The mapping of the frameworks to our real-world deals made all the difference."
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

                {/* 10. FINAL CTA */}
                <section className="py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-7xl mb-10">Build a sales team that <br /> actually improves</h2>
                        <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
                            If you want sales training that fits your team and delivers measurable change, let’s talk.
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

export default SalesTraining;
