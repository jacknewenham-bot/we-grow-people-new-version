import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, Zap, Target, Users, CheckCircle2, TrendingUp, BarChart3, Workflow } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20your%20consultancy%20services";

const Consultancy = () => {
    const scrollToContact = () => {
        document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* 1. Hero Section */}
                <section className="py-16 md:py-32 bg-hero text-hero">
                    <div className="container max-w-5xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="headline-display text-5xl md:text-7xl mb-8"
                        >
                            <span className="text-white/90">Consulting that helps you</span>
                            <br />
                            <span className="text-lime">move, not just plan</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-10 max-w-3xl mx-auto font-medium"
                        >
                            We partner with your team to turn complex sales, marketing, and AI challenges into focused action, practical decisions, and real progress.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-lg">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Start a conversation
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* 2. What We Focus On */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container">
                        <div className="text-center mb-20">
                            <h2 className="headline-display text-4xl md:text-5xl mb-6">Where we focus</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Sales Consulting */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-muted/10 border border-border group hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mb-8 group-hover:bg-lime text-primary transition-colors">
                                    <Target className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Sales Consulting</h3>
                                <p className="text-lg font-semibold text-lime mb-6">Build a sales motion that actually converts.</p>
                                <p className="text-muted-foreground mb-8">We help teams clarify their sales strategy, improve execution, and remove friction from the pipeline.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Sales process design and optimisation",
                                        "Deal reviews and pipeline diagnostics",
                                        "Messaging, qualification, and closing",
                                        "Sales enablement and playbooks"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                            <CheckCircle2 className="w-5 h-5 text-lime shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Marketing Consulting */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 rounded-3xl bg-muted/10 border border-border group hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mb-8 group-hover:bg-lime text-primary transition-colors">
                                    <TrendingUp className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Marketing Consulting</h3>
                                <p className="text-lg font-semibold text-lime mb-6">Turn marketing into a predictable growth engine.</p>
                                <p className="text-muted-foreground mb-8">We help teams focus on what drives demand, not vanity metrics.</p>
                                <ul className="space-y-3">
                                    {[
                                        "Go-to-market clarity and positioning",
                                        "Channel prioritisation and execution",
                                        "Lead quality and funnel alignment",
                                        "Campaign frameworks and rhythms"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                            <CheckCircle2 className="w-5 h-5 text-lime shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* AI Adoption Consulting */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 rounded-3xl bg-muted/10 border border-border group hover:bg-white hover:shadow-xl transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-lime/10 flex items-center justify-center mb-8 group-hover:bg-lime text-primary transition-colors">
                                    <Workflow className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">AI Adoption Consulting</h3>
                                <p className="text-lg font-semibold text-lime mb-6">Adopt AI in a way that actually sticks.</p>
                                <p className="text-muted-foreground mb-8">We help teams identify where AI adds real value and integrate it into daily workflows.</p>
                                <ul className="space-y-3">
                                    {[
                                        "AI use-case identification",
                                        "Workflow redesign with AI tools",
                                        "Automation opportunities across teams",
                                        "Change management and adoption"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                                            <CheckCircle2 className="w-5 h-5 text-lime shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 3. How We Work */}
                <section className="py-12 md:py-24 bg-primary text-white">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="headline-display text-4xl md:text-5xl mb-6">How our consultancy works</h2>
                            <p className="text-xl text-white/80 max-w-2xl mx-auto">
                                Our consulting is designed to be practical, lightweight, and embedded into how your team already operates.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: "1. Diagnose",
                                    desc: "We start by understanding your context, constraints, and real bottlenecks."
                                },
                                {
                                    step: "2. Focus",
                                    desc: "We narrow down to the few things that will move the needle."
                                },
                                {
                                    step: "3. Execute",
                                    desc: "We work with your team to implement, test, and refine."
                                },
                                {
                                    step: "4. Enable",
                                    desc: "We leave you with frameworks, tools, and clarity to sustain progress."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors"
                                >
                                    <h3 className="text-2xl font-bold mb-4 text-lime">{item.step}</h3>
                                    <p className="text-white/80 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Why Teams Work With Us */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">Why teams work with us</h2>
                                <p className="text-xl text-muted-foreground">
                                    We don’t aim to impress with jargon. <br />
                                    We aim to help you make better decisions and execute faster.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    { icon: Users, title: "Operator-led, not theory-led" },
                                    { icon: BarChart3, title: "Practical frameworks over generic advice" },
                                    { icon: Zap, title: "Embedded support, not one-off workshops" },
                                    { icon: Target, title: "Built for fast-moving teams" }
                                ].map((point, i) => (
                                    <motion.div
                                        key={point.title}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex items-center gap-6 p-6 rounded-2xl bg-muted/30 border border-border"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                                            <point.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-lg font-bold">{point.title}</h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Who This Is For */}
                <section className="py-12 md:py-24 bg-muted/20">
                    <div className="container">
                        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-border/50">
                            <div className="text-center mb-12">
                                <h2 className="headline-display text-3xl md:text-4xl mb-6">Who this is for</h2>
                                <p className="text-lg text-muted-foreground">This consultancy is a good fit if you:</p>
                            </div>

                            <div className="space-y-6">
                                {[
                                    "Have growth or execution challenges but lack clarity",
                                    "Need experienced support without hiring full-time",
                                    "Want outside perspective that understands real constraints",
                                    "Prefer action and outcomes over long presentations"
                                ].map((criteria, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-lime/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-5 h-5 text-primary" />
                                        </div>
                                        <span className="text-lg font-medium">{criteria}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Final CTA */}
                <section id="contact-section" className="py-12 md:py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-6xl mb-8">
                            Let’s solve the right problems.
                        </h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            If you’re looking for a consulting partner that works with your team, not above it, let’s talk.
                        </p>
                        <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-lg">
                            <a href="https://calendly.com/wegrowpeople/consultation" target="_blank" rel="noopener noreferrer">
                                Book a consultation
                            </a>
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Consultancy;
