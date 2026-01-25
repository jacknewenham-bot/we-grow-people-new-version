import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    Zap,
    Target,
    Users,
    Shield,
    Star,
    Briefcase,
    Search,
    MessageSquare,
    ClipboardCheck,
    Handshake,
    Sparkles,
    Globe,
    BrainCircuit
} from "lucide-react";

const formSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(8, "Valid mobile number is required"),
    expertise: z.string().min(1, "Please select an area of expertise"),
    experience: z.string().min(1, "Please specify years of experience"),
    link: z.string().url("Please enter a valid URL (LinkedIn or Website)"),
    description: z.string().min(20, "Please provide a bit more detail about your experience"),
    improve: z.string().min(10, "Please tell us what you enjoy helping others improve"),
    deliveredBefore: z.string().min(1, "Please select an option"),
    anythingElse: z.string().optional(),
});

const PractitionerApply = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            mobile: "",
            expertise: "",
            experience: "",
            link: "",
            description: "",
            improve: "",
            deliveredBefore: "",
            anythingElse: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsSubmitted(true);
        toast.success("Application submitted successfully!");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const scrollToForm = () => {
        document.getElementById("apply-form")?.scrollIntoView({ behavior: "smooth" });
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
                            Become a WeGrowPeople <br />
                            <span className="text-lime">practitioner</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12 max-w-3xl mx-auto"
                        >
                            We work with experienced practitioners who enjoy helping others grow through practical, real-world learning.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <Button variant="lime" size="xl" onClick={scrollToForm} className="rounded-full px-12 py-8 text-lg font-bold">
                                Apply to be a practitioner
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* 2. Who This Is For */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="headline-display text-4xl md:text-5xl mb-12 text-center">Who we work with</h2>
                            <p className="text-xl text-center text-muted-foreground mb-16">
                                WeGrowPeople works with people who have done the work, not just studied it.
                            </p>

                            <div className="grid md:grid-cols-2 gap-12">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[2.5rem] bg-lime/10 border border-lime/20"
                                >
                                    <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6" /> This is for you if you:
                                    </h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Have built, led, or delivered in the real world",
                                            "Have deep experience in your field",
                                            "Enjoy sharing practical knowledge",
                                            "Care about outcomes, not just content"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-lg font-medium">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="p-10 rounded-[2.5rem] bg-muted/20 border border-border"
                                >
                                    <h3 className="text-2xl font-bold mb-8 text-muted-foreground flex items-center gap-3">
                                        <XCircle className="w-6 h-6" /> This may not be for you:
                                    </h3>
                                    <ul className="space-y-6">
                                        {[
                                            "Primarily teach theory",
                                            "Rely on generic slide decks",
                                            "Have limited real-world application",
                                            "Prefer one-size-fits-all training"
                                        ].map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30 mt-2.5 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. What You Will Be Doing */}
                <section className="py-24 bg-muted/10">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">What you will do</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                { title: "Deliver Practical Training", desc: "Lead hands-on sessions that help teams solve real work challenges.", icon: Zap },
                                { title: "Global Impact", desc: "Work with diverse teams across different industries and regions.", icon: Globe },
                                { title: "Contextual Excellence", desc: "Adapt our base materials to fit the specific business reality of each client.", icon: Target },
                                { title: "Immediate Results", desc: "Help people apply new skills at work the very next day.", icon: Sparkles },
                                { title: "Collaborative Design", desc: "Work with our product team to refine and create new training programs.", icon: BrainCircuit },
                                { title: "Coaching Sessions", desc: "Provide 1-on-1 or small group coaching for deep skill development.", icon: Users }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-3xl border border-border shadow-sm"
                                >
                                    <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4. Areas We Are Looking For */}
                <section className="py-24 bg-white">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">Areas of expertise</h2>
                        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                "Sales and customer conversations",
                                "Leadership and people management",
                                "Communication and presentation",
                                "Growth and performance marketing",
                                "Project and operations management",
                                "AI workflows and automation",
                                "Vibe coding for business",
                                "Content, storytelling, and video",
                                "Workplace wellbeing and mental health"
                            ].map((area, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="p-6 rounded-2xl bg-muted/20 border border-border font-bold text-center hover:bg-lime/10 hover:border-lime/30 transition-all cursor-default"
                                >
                                    {area}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. What We Offer & 6. What We Expect */}
                <section className="py-24 bg-primary text-white overflow-hidden">
                    <div className="container">
                        <div className="grid md:grid-cols-2 gap-20 max-w-6xl mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="headline-display text-4xl mb-12 text-lime">What we offer</h2>
                                <ul className="space-y-8">
                                    {[
                                        "Access to meaningful training work with cool brands",
                                        "Thoughtful matching with the right clients for your style",
                                        "Support with program structure and HRDC requirements",
                                        "Flexibility in delivery format (Remote & In-person)",
                                        "A community of experienced practitioners to learn from"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <CheckCircle2 className="w-6 h-6 text-lime shrink-0" />
                                            <p className="text-lg text-white/90">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="headline-display text-4xl mb-12 text-lime">What we expect</h2>
                                <ul className="space-y-8">
                                    {[
                                        "Strong real-world experience (no generic trainers)",
                                        "Clear, effective, and human communication",
                                        "Deep respect for our learners' time and energy",
                                        "Practical, outcome-focused delivery at all times",
                                        "An open mind and appetite for continuous improvement"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <Star className="w-6 h-6 text-lime shrink-0" />
                                            <p className="text-lg text-white/90">{item}</p>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* 7. Application Form */}
                <section id="apply-form" className="py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="headline-display text-4xl md:text-6xl mb-6">Apply to be a practitioner</h2>
                                <p className="text-xl text-muted-foreground">
                                    Tell us about your experience and what you enjoy helping people improve. We will review every application carefully.
                                </p>
                            </div>

                            <div className="bg-white p-8 md:p-16 rounded-[3rem] shadow-2xl border border-border relative">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-24 h-24 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 className="w-12 h-12 text-primary" />
                                        </div>
                                        <h3 className="text-4xl font-bold mb-4 text-primary">Application Received</h3>
                                        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
                                            Thanks for applying. Our team will review your profile and get back to you if there is a fit.
                                        </p>
                                        <Button variant="lime" size="xl" asChild className="rounded-full">
                                            <a href="/apply-practitioner">Apply as a coach</a>
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="fullName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Full Name*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="John Doe" {...field} className="rounded-xl py-6" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Email Address*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="john@example.com" {...field} className="rounded-xl py-6" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="mobile"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Mobile Number*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="+60 1x xxx xxxx" {...field} className="rounded-xl py-6" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="experience"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Years of Real-World Experience*</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="rounded-xl h-[52px]">
                                                                        <SelectValue placeholder="Select years" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="rounded-xl">
                                                                    <SelectItem value="2-5">2-5 years</SelectItem>
                                                                    <SelectItem value="5-10">5-10 years</SelectItem>
                                                                    <SelectItem value="10-15">10-15 years</SelectItem>
                                                                    <SelectItem value="15+">15+ years</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="expertise"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Primary Area of Expertise*</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="rounded-xl h-[52px]">
                                                                        <SelectValue placeholder="Select area" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="rounded-xl">
                                                                    <SelectItem value="sales">Sales & Revenue</SelectItem>
                                                                    <SelectItem value="leadership">Leadership & Management</SelectItem>
                                                                    <SelectItem value="comm">Communication & Presenting</SelectItem>
                                                                    <SelectItem value="marketing">Marketing & Growth</SelectItem>
                                                                    <SelectItem value="ops">Ops & Projects</SelectItem>
                                                                    <SelectItem value="ai">AI & Automation</SelectItem>
                                                                    <SelectItem value="wellbeing">Wellbeing & Mental Health</SelectItem>
                                                                    <SelectItem value="other">Other</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="link"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>LinkedIn Profile or Website*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="https://linkedin.com/in/..." {...field} className="rounded-xl py-6" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="description"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Briefly describe your experience*</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="What have you built, led, or delivered in your career?"
                                                                className="rounded-xl min-h-[120px] resize-none px-4 py-3"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="improve"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>What do you enjoy helping others improve?*</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Sharing your passion for specific skills and outcomes"
                                                                className="rounded-xl min-h-[120px] resize-none px-4 py-3"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="grid md:grid-cols-2 gap-8">
                                                <FormField
                                                    control={form.control}
                                                    name="deliveredBefore"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Have you delivered training or coaching before?</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="rounded-xl h-[52px]">
                                                                        <SelectValue placeholder="Select Yes / No" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent className="rounded-xl">
                                                                    <SelectItem value="yes">Yes</SelectItem>
                                                                    <SelectItem value="no">No</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="anythingElse"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Anything else we should know?</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Extra context (Optional)" {...field} className="rounded-xl py-6" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <Button type="submit" variant="lime" size="xl" className="w-full rounded-2xl py-8 text-xl font-bold mt-4 shadow-xl shadow-lime/20 hover:shadow-2xl hover:shadow-lime/30 transition-all">
                                                Submit application
                                            </Button>
                                        </form>
                                    </Form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. How We Review Applications */}
                <section className="py-24 bg-muted/20">
                    <div className="container">
                        <h2 className="headline-display text-4xl md:text-5xl mb-16 text-center">What happens next</h2>
                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "1. Review", desc: "We read every application carefully.", icon: Search },
                                { title: "2. Intro chat", desc: "If there's a fit, we schedule a conversation.", icon: MessageSquare },
                                { title: "3. Alignment", desc: "We discuss expectations and delivery style.", icon: Handshake },
                                { title: "4. Onboarding", desc: "We align on programs, standards, and next steps.", icon: ClipboardCheck }
                            ].map((step, i) => (
                                <div key={i} className="relative text-center">
                                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-6 shadow-sm">
                                        <step.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.desc}</p>
                                    {i < 3 && (
                                        <div className="hidden lg:block absolute top-[30px] -right-4 translate-x-1/2">
                                            <ArrowRight className="text-border" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9. Closing Section */}
                <section className="py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-6xl mb-8">Interested in working with us?</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            If you care about practical learning and real outcomes, we would love to hear from you.
                        </p>
                        <Button variant="lime" size="xl" onClick={scrollToForm} className="rounded-full px-12 py-8 text-lg font-bold">
                            Apply to be a practitioner
                        </Button>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

// Redundant local icons removed as they are now imported from lucide-react

export default PractitionerApply;
