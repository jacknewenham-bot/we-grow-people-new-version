import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { MessageCircle, ArrowRight, Zap, Target, Users, Sparkles, BookOpen, Clock } from "lucide-react";

const categoryData: Record<string, any> = {
    sales: {
        title: "Sales Training",
        description: "Practical, outcome-driven sales training designed around how your team actually sells today.",
        courses: [
            "Sales Fundamentals", "Prospecting", "Lead Qualification", "Consultative Selling",
            "Key Account Management", "Storytelling in Sales", "Social Selling",
            "Virtual Selling", "Customer Success"
        ]
    },
    marketing: {
        title: "Marketing Training",
        description: "Modern marketing playbooks for growth-focused teams who want to build brand and demand.",
        courses: [
            "Marketing Fundamentals", "Growth Marketing", "Performance Marketing",
            "Content Strategy", "Brand Positioning", "Marketing Analytics"
        ]
    },
    ai: {
        title: "AI Training",
        description: "Equip your team with the tools and mindset to harness AI for radical productivity and growth.",
        courses: [
            "AI Fundamentals for Teams", "AI for Productivity", "AI for Sales and Marketing",
            "AI for Leaders", "Building AI Workflows"
        ]
    },
    operations: {
        title: "Operations Training",
        description: "Build robust, scalable systems that allow your team to execute faster and with less friction.",
        courses: [
            "Operational Excellence", "Process Optimization", "Productivity Systems",
            "Cross Team Execution", "Scaling Operations"
        ]
    },
    management: {
        title: "Management Training",
        description: "Empower your leaders to build high-performance teams through human-first, practical management skills.",
        courses: [
            "First Time Managers", "Leadership Fundamentals", "Managing High Performance Teams",
            "Communication for Managers", "Change Management"
        ]
    }
};

const TrainingCategory = () => {
    const { categoryId } = useParams();
    const data = categoryData[categoryId || "sales"] || categoryData.sales;

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero */}
                <section className="py-20 md:py-32 bg-hero text-hero relative overflow-hidden">
                    <div className="container max-w-4xl text-center relative z-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="headline-display text-5xl md:text-7xl mb-8"
                        >
                            {data.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12"
                        >
                            {data.description}
                        </motion.p>
                        <Button variant="lime" size="xl" className="rounded-full px-12 py-8 text-lg font-bold">
                            Get a program proposal
                        </Button>
                    </div>
                </section>

                {/* Courses Grid */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-3xl md:text-5xl mb-16 text-center">Available Programs</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {data.courses.map((course: string, i: number) => (
                                <motion.div
                                    key={course}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-8 rounded-[2rem] bg-muted/20 border border-border hover:border-lime/50 transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-lime/10 transition-colors">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{course}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
                                        <span className="flex items-center gap-1.5"><Clock size={14} /> Full Day</span>
                                        <span className="flex items-center gap-1.5"><Users size={14} /> Teams</span>
                                    </div>
                                    <a
                                        href={`/training/${categoryId}/${course.toLowerCase().replace(/\s+/g, '-')}`}
                                        className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-3 transition-all"
                                    >
                                        Explore course <ArrowRight size={18} className="text-lime" />
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-muted/10">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl mb-8">Not sure which program fits?</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Let's talk about your team's goals and we'll help you map out the right training journey.
                        </p>
                        <Button variant="primary" size="xl" asChild className="rounded-full px-12 py-8 text-xl font-bold">
                            <a href="https://wa.me/60173552382" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-3 h-6 w-6" /> Chat with us
                            </a>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default TrainingCategory;
