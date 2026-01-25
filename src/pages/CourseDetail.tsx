import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";
import { MessageCircle, CheckCircle2, Zap, Clock, Users, ArrowLeft } from "lucide-react";

const CourseDetail = () => {
    const { categoryId, courseId } = useParams();
    const courseTitle = courseId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero */}
                <section className="py-20 md:py-32 bg-white border-b border-border">
                    <div className="container max-w-5xl">
                        <a href={`/training/${categoryId}`} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-12 transition-colors font-medium">
                            <ArrowLeft size={18} /> Back to {categoryId} training
                        </a>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime/10 border border-lime/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
                                    <Zap size={14} className="text-lime fill-lime" /> HRDC Claimable
                                </div>
                                <h1 className="headline-display text-4xl md:text-6xl mb-8">
                                    {courseTitle}
                                </h1 >
                                <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                                    Build real-world capability with our practitioner-led {courseTitle} intensive. Practical, relevant, and designed for immediate impact.
                                </p>
                                <div className="flex flex-wrap gap-6 mb-12">
                                    <div className="flex items-center gap-2 font-bold whitespace-nowrap">
                                        <Clock size={20} className="text-lime" /> Full-day Delivery
                                    </div>
                                    <div className="flex items-center gap-2 font-bold whitespace-nowrap">
                                        <Users size={20} className="text-lime" /> Intact Teams
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <Button variant="primary" size="xl" className="rounded-full px-10">
                                        Get course outline
                                    </Button>
                                    <Button variant="white" size="xl" className="rounded-full px-10">
                                        Book for your team
                                    </Button>
                                </div>
                            </div>
                            <div className="aspect-[4/3] bg-muted/20 rounded-[3rem] border border-border flex items-center justify-center relative overflow-hidden">
                                <Zap className="w-32 h-32 text-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                <div className="relative z-10 p-12 text-center">
                                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground/40 mb-4">Course Focus</p>
                                    <p className="text-3xl font-bold leading-tight">Practical workflows <br /> & Real scenarios</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-24 bg-white">
                    <div className="container max-w-4xl">
                        <h2 className="headline-display text-3xl md:text-5xl mb-12">What you will learn</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-muted/10 border border-border">
                                    <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
                                    <p className="font-medium text-lg text-primary/80">Key learning objective and practical skill item {i}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 bg-primary text-white">
                    <div className="container text-center max-w-3xl">
                        <h2 className="headline-display text-4xl mb-8">Ready to upskill your team?</h2>
                        <p className="text-xl text-white/70 mb-12">
                            This course can be delivered in-person or virtually. Talk to us to schedule a session for your team.
                        </p>
                        <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-xl font-bold">
                            <a href="https://wa.me/60173552382" target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-3 h-6 w-6" /> Talk to our team
                            </a>
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CourseDetail;
