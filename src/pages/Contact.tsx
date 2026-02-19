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
import { MessageCircle, Send, CheckCircle2, MapPin, Phone, Mail, Users, Zap, Search } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20finding%20out%20more%20about%20your%20training";

const formSchema = z.object({
    companyName: z.string().min(2, "Company name is required"),
    lastName: z.string().min(1, "Last name is required"),
    firstName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    mobile: z.string().min(8, "Valid mobile number is required"),
    pax: z.string().min(1, "Please specify interest or number of pax"),
    message: z.string().min(10, "Please tell us a bit more about your needs"),
});

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            companyName: "",
            lastName: "",
            firstName: "",
            email: "",
            mobile: "",
            pax: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
    }

    const scrollToForm = () => {
        document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
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
                            <span className="text-white/90">Let’s talk about</span>
                            <br />
                            <span className="text-lime">your team</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-hero-muted mb-12 max-w-3xl mx-auto"
                        >
                            Whether you have a quick question or a clear training goal, we are here to help you figure out the right next step.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Button variant="lime" size="xl" asChild className="rounded-full px-10 py-7 text-lg">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    <MessageCircle className="mr-2 h-5 w-5" /> Chat with us
                                </a>
                            </Button>
                            <Button
                                variant="white"
                                size="xl"
                                onClick={scrollToForm}
                                className="rounded-full px-10 py-7 text-lg"
                            >
                                <Send className="mr-2 h-5 w-5" /> Send us a message
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* 2. What Happens When You Reach Out */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container">
                        <div className="max-w-6xl mx-auto">
                            <h2 className="headline-display text-4xl md:text-6xl mb-14 text-center uppercase tracking-tight">
                                What happens next
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                                {[
                                    {
                                        title: "1. We listen",
                                        desc: "You tell us about your team, challenges, and goals.",
                                        icon: Search,
                                        panel: "from-[#e9efe2] to-[#f4f7ee]"
                                    },
                                    {
                                        title: "2. We clarify",
                                        desc: "We ask a few focused questions to understand your context.",
                                        icon: Zap,
                                        panel: "from-[#e7edf4] to-[#f2f6fb]"
                                    },
                                    {
                                        title: "3. We recommend",
                                        desc: "You get a clear recommendation on training and coaches. No pressure.",
                                        icon: CheckCircle2,
                                        panel: "from-[#ecf6df] to-[#f5faef]"
                                    }
                                ].map((step, i) => (
                                    <motion.div
                                        key={step.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="rounded-[2rem] border border-border bg-white p-6 md:p-7 shadow-[0_10px_28px_rgba(11,25,19,0.08)] text-center"
                                    >
                                        <div className={`rounded-2xl bg-gradient-to-br ${step.panel} border border-border/60 p-5 mb-6`}>
                                            <div className="w-16 h-16 rounded-2xl bg-white/80 flex items-center justify-center mx-auto shadow-sm">
                                                <step.icon className="w-8 h-8 text-primary" />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl md:text-[1.95rem] font-black leading-tight uppercase tracking-tight text-foreground mb-4">
                                            {step.title}
                                        </h3>
                                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                            {step.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Contact Form Section */}
                <section id="contact-form" className="py-12 md:py-24 bg-muted/20">
                    <div className="container">
                        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <h2 className="headline-display text-4xl md:text-5xl mb-6">Send us a message</h2>
                                <p className="text-xl text-muted-foreground mb-12">
                                    Prefer to share details upfront? Leave us a message and we will get back to you shortly.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Email us</h4>
                                            <p className="text-muted-foreground">hello@wegrowpeople.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Call us</h4>
                                            <p className="text-muted-foreground">+60 17 355 2382</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-5">
                                        <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm border border-border">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg">Office</h4>
                                            <p className="text-muted-foreground">Kuala Lumpur, Malaysia</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border relative overflow-hidden">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-8">
                                            <CheckCircle2 className="w-10 h-10 text-primary" />
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 text-primary">Message Sent!</h3>
                                        <p className="text-lg text-muted-foreground mb-8">
                                            Thanks for reaching out. Someone from our team will get back to you shortly.
                                        </p>
                                        <div className="pt-8 border-t border-border">
                                            <p className="text-sm text-muted-foreground mb-4">Want an even faster response?</p>
                                            <Button variant="lime" asChild className="rounded-full">
                                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                                    Chat with us now
                                                </a>
                                            </Button>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="firstName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>First Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="John" {...field} className="rounded-xl border-border focus:ring-lime" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="lastName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Last Name*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Doe" {...field} className="rounded-xl border-border focus:ring-lime" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="companyName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Company Name*</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Your Organization Ltd" {...field} className="rounded-xl border-border focus:ring-lime" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Email Address*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="john@company.com" {...field} className="rounded-xl border-border focus:ring-lime" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="mobile"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Mobile Number*</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="+60 1x xxx xxxx" {...field} className="rounded-xl border-border focus:ring-lime" />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>

                                            <FormField
                                                control={form.control}
                                                name="pax"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Are you interested in coaching? For how many pax?</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Coaching for 5 people or Not sure yet" {...field} className="rounded-xl border-border focus:ring-lime" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Message</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us a little about your team and what you are looking to improve."
                                                                className="min-h-[120px] rounded-xl border-border focus:ring-lime resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />

                                            <Button type="submit" variant="lime" size="xl" className="w-full rounded-xl text-lg font-bold py-7 mt-4">
                                                Send message
                                            </Button>

                                            <p className="text-center text-sm text-muted-foreground mt-6">
                                                Or <a href={WHATSAPP_LINK} className="text-primary font-bold hover:underline">chat with us</a> for a faster response
                                            </p>
                                        </form>
                                    </Form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Who You Will Hear From */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-16">
                            <div className="flex-1 order-2 md:order-1">
                                <h2 className="headline-display text-4xl mb-6">You will talk to real people</h2>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    Your message goes directly to our team. No automated replies. No handoffs. We are here to help you build the best version of your team.
                                </p>
                            </div>
                            <div className="flex-1 order-1 md:order-2 grid grid-cols-2 gap-4">
                                {[
                                    { name: "Jack", image: "/Updated trainer pics/updated images/Jack.png" },
                                    { name: "Hamza", image: "/Updated trainer pics/updated images/Hamza.png" },
                                    { name: "Adele", image: "/Updated trainer pics/updated images/Adele.png" },
                                    { name: "Marc", image: "/Updated trainer pics/updated images/marc updated photo.png" },
                                ].map((member) => (
                                    <div key={member.name} className="aspect-square bg-muted rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Location and Reach */}
                <section className="py-12 md:py-24 bg-primary text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-lime/10 blur-[100px] pointer-events-none" />
                    <div className="container relative z-10">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="headline-display text-4xl md:text-5xl mb-8">Where we work</h2>
                            <p className="text-xl md:text-2xl text-white/80 leading-relaxed mb-12">
                                We work with teams across Malaysia and the region, delivering both in-person and remote training.
                            </p>
                            <div className="flex justify-center gap-12 flex-wrap">
                                {["Malaysia", "Singapore", "United Kingdom", "Remote"].map(loc => (
                                    <div key={loc} className="flex items-center gap-2 font-bold text-lg">
                                        <div className="w-2 h-2 rounded-full bg-lime" />
                                        {loc}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Final CTA Section */}
                <section className="py-12 md:py-24 bg-white">
                    <div className="container text-center">
                        <h2 className="headline-display text-4xl md:text-6xl mb-8">Not sure where to start?</h2>
                        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                            Start with a chat. We will help you figure it out.
                        </p>
                        <Button variant="lime" size="xl" asChild className="rounded-full px-12 py-8 text-lg">
                            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
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

export default Contact;
