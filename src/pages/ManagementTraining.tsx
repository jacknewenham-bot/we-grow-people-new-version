import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
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
    Layout,
    Search,
    BookOpen,
    RefreshCw,
    UserCheck
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20your%20Management%20Training%20programs";

const ManagementTraining = () => {
    const scrollToPrograms = () => {
        document.getElementById("management-capabilities")?.scrollIntoView({ behavior: "smooth" });
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
                            <span className="text-white/90">Management training built for</span>
                            <br />
                            <span className="text-lime">modern teams</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12 max-w-3xl mx-auto"
                        >
                            Practical, outcome-driven management training designed around the realities managers face every day. Delivered by experienced leaders, not leadership theorists.
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
                                    src="/images/about/life_2.png"
                                    alt="Management training with team leaders"
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
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">Why management training <br /> often fails</h2>
                                <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                    <p>
                                        Many managers are promoted for performance, not prepared for people leadership. They are given frameworks, models, and slides, then expected to figure the rest out alone.
                                    </p>
                                    <p className="text-primary font-bold">
                                        The issue is rarely intent. It is context, practice, and support.
                                    </p>
                                    <p>
                                        Effective management training must reflect real team dynamics, real conversations, and real constraints. That is what WeGrowPeople is built for.
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 rounded-[2rem] border border-border overflow-hidden relative bg-white shadow-sm">
                                <XCircle className="w-12 h-12 text-destructive absolute top-4 right-4 bg-white rounded-full shadow-lg z-10" />
                                <img
                                    src="/images/about/life_3.png"
                                    alt="Generic leadership frameworks without daily management relevance"
                                    className="h-[380px] w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                                    <p className="text-sm font-bold text-white/90 uppercase tracking-[0.12em]">Generic leadership frameworks without daily relevance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. OUTCOMES SECTION */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">How well designed management training <br /> helps teams perform</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Clarify Expectations", desc: "Help managers set direction without confusion.", icon: Target },
                                { title: "Improve Communication", desc: "Equip managers to handle feedback, alignment, and difficult conversations.", icon: MessageCircle },
                                { title: "Build Consistency", desc: "Ensure teams experience fair and predictable leadership.", icon: Layout },
                                { title: "Increase Confidence", desc: "Support managers in making decisions and leading under pressure.", icon: Shield },
                                { title: "Develop People", desc: "Turn managers into effective coaches, not task assigners.", icon: UserCheck },
                                { title: "Adapt to Change", desc: "Lead teams through growth, uncertainty, and transformation.", icon: Zap }
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
                            The focus is on real leadership behaviors, not abstract models.
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
                                    Management capability does not improve through isolated sessions or inspirational talks. WeGrowPeople designs management training as a system that supports daily leadership.
                                </p>
                                <div className="p-8 rounded-3xl bg-primary text-white mb-8">
                                    <p className="text-2xl font-bold leading-tight">
                                        Targeting effective managers, <br />
                                        <span className="text-lime text-3xl font-black">not momentary motivation.</span>
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
                                    { title: "Understand context", desc: "We assess how managers currently lead and where they struggle." },
                                    { title: "Leadership alignment", desc: "We align on expectations, standards, and outcomes." },
                                    { title: "Practical frameworks", desc: "Simple tools managers can apply immediately." },
                                    { title: "Live practice", desc: "Training using real conversations, scenarios, and decisions." },
                                    { title: "Reinforcement", desc: "Support to help new behaviors stick." },
                                    { title: "Review and recommendations", desc: "Clear insights for ongoing development." }
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
                        <h2 className="headline-display text-3xl md:text-5xl mb-12 text-center text-white">Signs your managers may benefit <br /> from training</h2>
                        <div className="grid md:grid-cols-1 gap-6 mb-16 max-w-2xl mx-auto">
                            {[
                                "Managers struggle with feedback and accountability",
                                "Performance conversations are avoided or inconsistent",
                                "Teams feel unclear on expectations",
                                "New managers feel overwhelmed",
                                "Leadership quality varies widely"
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
                            <p className="text-xl mb-10 text-white/80 italic">If several of these sound familiar, focused management training can quickly raise the baseline.</p>
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
                                <h2 className="headline-display text-4xl mb-12">Who our management training <br /> is designed for</h2>
                                <div className="space-y-6">
                                    {[
                                        { title: "First-time managers", desc: "Building core leadership confidence and skills." },
                                        { title: "Experienced managers", desc: "Refining approach and handling complex situations." },
                                        { title: "Team leads and supervisors", desc: "Balancing delivery with people leadership." },
                                        { title: "Senior leaders", desc: "Creating alignment and leadership consistency." }
                                    ].map((target, i) => (
                                        <div key={i} className="p-6 rounded-2xl bg-muted/20 border border-border">
                                            <h4 className="font-bold text-xl mb-2">{target.title}</h4>
                                            <p className="text-muted-foreground">{target.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 bg-primary p-12 rounded-[3.5rem] text-white">
                                <div className="mb-8 overflow-hidden rounded-2xl border border-white/15">
                                    <img
                                        src="/Additional website images/two-beautiful-women-talking-everything-together-coffee-shop-cafe.jpg"
                                        alt="Managers discussing team development"
                                        className="h-44 md:h-52 w-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <h3 className="headline-display text-3xl mb-10 text-lime">Delivery formats</h3>
                                <div className="space-y-10">
                                    <div className="flex gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                                            <Users className="w-8 h-8 text-lime" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">In-person workshops</h4>
                                            <p className="text-white/70">Hands-on leadership practice with real scenarios.</p>
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
                                            <p className="text-white/70">Ongoing development with reinforcement.</p>
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
                <section id="management-capabilities" className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">Management capabilities we cover</h2>
                        <div className="max-w-5xl mx-auto mb-12 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
                            <img
                                src="/Additional website images/project-team-collaborating-business-analytics.jpg"
                                alt="Leadership and management workshop"
                                className="h-56 md:h-72 w-full object-cover"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {[
                                { name: "Management fundamentals", icon: BookOpen },
                                { name: "Setting expectations and goals", icon: Target },
                                { name: "Feedback and performance conversations", icon: MessageCircle },
                                { name: "Coaching and development", icon: UserCheck },
                                { name: "Decision making and prioritization", icon: TrendingUp },
                                { name: "Managing conflict", icon: Shield },
                                { name: "Leading through change", icon: RefreshCw },
                                { name: "Building trust and accountability", icon: Users }
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
                            Programs are modular and tailored to management maturity levels.
                        </p>
                    </div>
                </section>

                {/* 9. ENGAGEMENT FLOW SECTION */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">How a typical engagement works</h2>
                        <div className="max-w-5xl mx-auto space-y-12">
                            {[
                                { title: "Understand your reality", desc: "We align with leadership to understand team dynamics.", icon: Search },
                                { title: "Design the program", desc: "We tailor content and scenarios to your managers.", icon: Layout },
                                { title: "Deliver practical training", desc: "Live sessions focused on real leadership situations.", icon: Zap },
                                { title: "Reinforce learning", desc: "Support to embed behaviors into daily management.", icon: RefreshCw },
                                { title: "Review impact", desc: "Clear feedback and development recommendations.", icon: TrendingUp }
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
                                "Managers felt more confident and consistent after the training.",
                                "We saw clearer leadership behaviors and stronger team engagement."
                            ].map((quote, i) => (
                                <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-border shadow-sm italic text-lg text-muted-foreground relative">
                                    <span className="text-6xl text-lime/30 absolute top-4 left-6 font-serif underline decoration-primary/20">&quot;</span>
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
                        <h2 className="headline-display text-4xl md:text-7xl mb-10">Build managers your teams trust</h2>
                        <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
                            If you want management training that actually improves leadership on the ground, lets talk.
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

export default ManagementTraining;
