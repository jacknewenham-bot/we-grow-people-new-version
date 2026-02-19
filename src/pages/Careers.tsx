import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    MessageCircle,
    ArrowRight,
    Zap,
    Users,
    Shield,
    Heart,
    Sparkles,
    Target,
    Search,
    BrainCircuit,
    Coffee,
    Globe
} from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20joining%20the%20WeGrowPeople%20team";

const Careers = () => {
    const scrollToRoles = () => {
        document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToCoaches = () => {
        document.getElementById("coaches-section")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* 1. Hero Section */}
                <section className="py-20 md:py-32 bg-hero text-hero">
                    <div className="container max-w-5xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="headline-display text-5xl md:text-7xl mb-8"
                        >
                            <span className="text-white/90">Build work that</span>
                            <br />
                            <span className="text-lime">helps people grow</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12 max-w-3xl mx-auto"
                        >
                            WeGrowPeople is building the future of learning and performance at work. If you care about real impact, continuous learning, and doing work that matters, you might belong here.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Button variant="lime" size="xl" onClick={scrollToRoles} className="rounded-full px-10 py-7 text-lg">
                                View open roles
                            </Button>
                            <Button
                                variant="white"
                                size="xl"
                                onClick={scrollToCoaches}
                                className="rounded-full px-10 py-7 text-lg font-bold"
                            >
                                Become a coach
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Our Mission and Vision */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="headline-display text-4xl md:text-5xl mb-8 uppercase"
                            >
                                Why we exist
                            </motion.h2>
                            <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
                                <p>
                                    The world of work is changing fast.
                                    <br />
                                    New tools, new roles, new expectations.
                                </p>
                                <p className="text-primary font-bold text-2xl">
                                    We exist to help teams keep up and move forward.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What It’s Like to Work Here */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <div className="text-center mb-16">
                            <h2 className="headline-display text-4xl md:text-5xl mb-6 uppercase">How we work</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                A practical approach to how we build, collaborate, and grow.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "People first",
                                    desc: "We treat each other with respect, trust, and empathy.",
                                    icon: Heart,
                                    surface: "bg-[#cfe3f7]"
                                },
                                {
                                    title: "Practical over perfect",
                                    desc: "We value progress and real outcomes over theory and polish.",
                                    icon: Zap,
                                    surface: "bg-[#d3f0e3]"
                                },
                                {
                                    title: "Ownership and autonomy",
                                    desc: "We hire people we trust and give them room to do their best work.",
                                    icon: Shield,
                                    surface: "bg-[#ddd8f6]"
                                },
                                {
                                    title: "Continuous learning",
                                    desc: "We expect everyone to keep learning, including ourselves.",
                                    icon: BrainCircuit,
                                    surface: "bg-[#f8dfc5]"
                                }
                            ].map((pillar, i) => (
                                <motion.div
                                    key={pillar.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`p-7 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow ${pillar.surface}`}
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <div className="w-12 h-12 rounded-2xl bg-white/70 flex items-center justify-center">
                                            <pillar.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <span className="w-11 h-11 rounded-full bg-white/60 border border-border/70 flex items-center justify-center text-primary font-bold">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                                    <p className="text-foreground/75 leading-relaxed">{pillar.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Who We Are Looking For */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                            <div className="flex-1">
                                <h2 className="headline-display text-4xl md:text-5xl mb-8">Who thrives at <br /> WeGrowPeople</h2>
                                <p className="text-xl text-muted-foreground mb-8">
                                    You do not need to tick every box. If this sounds like you, we would love to hear from you.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        "Curious and open to learning",
                                        "Comfortable with change",
                                        "Clear communicator",
                                        "Practical and outcome focused",
                                        "Kind, honest, and reliable"
                                    ].map((trait) => (
                                        <li key={trait} className="flex items-center gap-3 text-lg font-medium">
                                            <div className="w-2 h-2 rounded-full bg-lime" />
                                            {trait}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 relative">
                                <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 shadow-2xl">
                                    <img
                                        src="/images/about/life_1.png"
                                        alt="Team collaboration"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-3xl shadow-xl -rotate-3">
                                    <Sparkles className="w-8 h-8 text-lime mb-4" />
                                    <p className="font-bold text-xl">Grow with us.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Life at WeGrowPeople */}
                <section className="py-24 bg-muted/10">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">Life at WeGrowPeople</h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {[
                                { img: "/images/about/life_2.png", caption: "Training sessions" },
                                { img: "/images/about/modern_corporate_workshop_1769341602532.png", caption: "Team workshops" },
                                { img: "/images/about/life_3.png", caption: "Remote flow" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-lg"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.caption}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                        <p className="text-white font-bold text-xl">{item.caption}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <p className="text-center text-2xl font-medium text-muted-foreground italic">
                            Real work. Real people. Real growth.
                        </p>
                    </div>
                </section>

                {/* 6. Roles and Opportunities */}
                <section id="open-roles" className="py-24 bg-white">
                    <div className="container max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="headline-display text-4xl md:text-5xl mb-6">Open roles</h2>
                            <p className="text-xl text-muted-foreground">
                                We are growing and always open to meeting people who share our values.
                            </p>
                        </div>

                        {/* Empty State */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-muted/30 p-12 md:p-20 rounded-[3rem] text-center border-2 border-dashed border-border"
                        >
                            <Target className="w-16 h-16 text-muted-foreground/30 mx-auto mb-8" />
                            <h3 className="text-2xl md:text-3xl font-bold mb-6">No open roles right now.</h3>
                            <p className="text-xl text-muted-foreground mb-10">
                                But we're always building relationships with great people.
                                <br />
                                If you believe in what we're building and think you'd add value, let's talk.
                            </p>
                            <Button variant="primary" size="xl" asChild className="rounded-full px-10">
                                <a href="/contact">Start the conversation</a>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* 7. Coaching and Trainer Opportunities */}
                <section id="coaches-section" className="py-24 bg-primary text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-lime/5 blur-[120px] pointer-events-none" />
                    <div className="container relative z-10">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1">
                                <h2 className="headline-display text-4xl md:text-5xl mb-8 text-lime">Coaches and trainers</h2>
                                <p className="text-xl md:text-2xl leading-relaxed mb-10 text-white/90">
                                    We also work with experienced practitioners who deliver training and coaching across sales, leadership, communication, performance, and AI.
                                </p>
                                <p className="text-lg text-white/70 mb-10">
                                    If you have deep real-world experience and enjoy helping others grow, we would love to hear from you.
                                </p>
                                <Button variant="lime" size="xl" asChild className="rounded-full">
                                    <a href="/apply-practitioner">Apply as a coach</a>
                                </Button>
                            </div>
                            <div className="flex-1 grid grid-cols-2 gap-4">
                                <div className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center p-8 text-center border border-white/10">
                                    <p className="font-bold text-lime">Sales Expert</p>
                                </div>
                                <div className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center p-8 text-center border border-white/10">
                                    <p className="font-bold text-lime">AI Specialist</p>
                                </div>
                                <div className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center p-8 text-center border border-white/10">
                                    <p className="font-bold text-lime">Leadership</p>
                                </div>
                                <div className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center p-8 text-center border border-white/10">
                                    <p className="font-bold text-lime">Communication</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. How We Hire */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">Our hiring process</h2>
                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    title: "1. Intro chat",
                                    desc: "A relaxed conversation to get to know each other.",
                                    icon: Coffee
                                },
                                {
                                    title: "2. Practical discussion",
                                    desc: "We talk through real scenarios, not abstract tests.",
                                    icon: Search
                                },
                                {
                                    title: "3. Team conversation",
                                    desc: "You meet the people you would work with.",
                                    icon: Users
                                },
                                {
                                    title: "4. Decision",
                                    desc: "Clear feedback and next steps.",
                                    icon: CheckCircle2
                                }
                            ].map((step, i) => (
                                <div key={step.title} className="relative">
                                    <div className="p-8 rounded-[2rem] bg-muted/30 border border-border h-full hover:bg-muted/50 transition-colors">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm">
                                            <step.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground">{step.desc}</p>
                                    </div>
                                    {i < 3 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-4 translate-y-1/2 z-10">
                                            <ArrowRight className="text-border" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Final CTA */}
                <section className="py-24 bg-muted/20">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-6xl mb-8">Ready to grow with us?</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            If this sounds like your kind of place, let’s talk.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button variant="lime" size="xl" onClick={scrollToRoles} className="rounded-full px-12 py-8 text-lg">
                                View open roles
                            </Button>
                            <Button variant="outline" size="xl" asChild className="rounded-full px-12 py-8 text-lg">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-3 h-6 w-6" /> Chat with us
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

// Reuse CheckCircle2 icon locally if not imported
const CheckCircle2 = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

export default Careers;
