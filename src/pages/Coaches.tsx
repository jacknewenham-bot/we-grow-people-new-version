import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSearchParams } from "react-router-dom";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%2C%20I%27m%20interested%20in%20upskilling%20my%20team%20and%20would%20love%20to%20learn%20more%20about%20your%20training%20and%20consultancy%20options.'m%20interested%20in%20finding%20out%20more%20about%20your%20training";

const coaches = [
    {
        id: "hamza",
        name: "Hamza Akaouch",
        title: "Sales Trainer | Consultative & Challenger Selling",
        whatTheyDo: "Builds practical sales capability across discovery, objection handling, and ethical closing.",
        whatMakesSpecial: "Grounded in buyer psychology and real deal conversations to improve conversion and margins.",
        badge: "HRDC Accredited",
        focusAreas: ["Decision psychology", "Consultative selling", "Negotiation and price conversations"],
        bio: "Hamza helps sales teams understand how buyers decide and lead conversations that reduce uncertainty.\n\nHis training focuses on deep discovery, framing the cost of inaction, value messaging, and ethical closing. Sessions are practical, interactive, and grounded in real deals so teams improve conversion rates, protect margins, and build trust.",
        bestFor: ["B2B sales teams", "Relationship managers and consultants", "Sales leaders upgrading capability"],
        image: "/Updated trainer pics/updated images/Hamza.png",
    },
    {
        id: "jack",
        name: "Jack Newenham",
        title: "Growth and Performance Marketing Coach",
        whatTheyDo: "Helps marketing teams turn strategy into measurable acquisition and funnel outcomes.",
        whatMakesSpecial: "Execution-first coaching shaped by hands-on growth work in startup and scale-up environments.",
        badge: null,
        focusAreas: ["Growth strategy", "Performance marketing", "Execution and experimentation"],
        bio: "Jack has led growth and performance marketing across startups and scaling companies, working hands-on with acquisition, funnels, experimentation, and execution.\n\nHis training helps teams move from theory to action, focusing on what actually drives growth in today's market.",
        bestFor: ["Marketing teams", "Growth teams", "Founders and managers"],
        image: "/Updated trainer pics/updated images/Jack.png",
    },
    {
        id: "marc",
        name: "Marc Sagayam",
        title: "Project Management and Operations Coach",
        whatTheyDo: "Trains teams to run projects with clear ownership, timelines, and stakeholder alignment.",
        whatMakesSpecial: "Led complex, high-stakes delivery in regulated environments with multi-million-dollar scope.",
        badge: null,
        focusAreas: ["Project governance", "Delivery timelines", "Stakeholder management"],
        bio: "Marc is a senior leader with over seven years of experience managing complex, high-stakes projects across defense technology, operations, and facilities management.\n\nHe has overseen multi-million-dollar projects, led cross-functional teams, and delivered results in highly regulated environments. Marc's training helps teams plan better, communicate clearly, and deliver projects on time and within budget.",
        bestFor: ["Project teams", "Operations teams", "Managers responsible for delivery"],
        image: "/Updated trainer pics/updated images/marc updated image.png",
    },
    {
        id: "adele",
        name: "Adele O'Brien",
        title: "Growth and Partnerships Strategy Coach",
        whatTheyDo: "Coaches growth and partnerships teams on GTM strategy, alignment, and execution.",
        whatMakesSpecial: "Scaled brands across Asia, the USA, and Europe across Web3, education, telco, and tech.",
        badge: null,
        focusAreas: ["Go-to-market strategy", "Partnerships and growth", "Performance marketing"],
        bio: "Adele brings over nine years of experience scaling brands across Asia, the USA, and Europe. She has led growth, partnerships, and commercial strategy for Web3, education, telco, and technology companies.\n\nHer sessions focus on practical growth frameworks, stakeholder alignment, and execution that delivers measurable outcomes.",
        bestFor: ["Growth leaders", "Commercial teams", "Partnership managers"],
        image: "/Updated trainer pics/updated images/Adele.png",
    },
    {
        id: "ashvin",
        name: "Ashvin Praveen",
        title: "AI and Vibe Coding Coach",
        whatTheyDo: "Guides teams to adopt AI workflows, automations, and content systems that work in real operations.",
        whatMakesSpecial: "Founder-operator lens from building Cleve.ai with practical, low-complexity implementation.",
        badge: null,
        focusAreas: ["Vibe coding for business", "AI workflows", "Content productivity"],
        bio: "Ashvin is a founder and AI practitioner focused on helping teams adopt AI in practical, business-ready ways.\n\nAs the co-founder and CEO of Cleve.ai, backed by Antler, he trains teams on building workflows, automations, and content systems using AI tools without unnecessary complexity.",
        bestFor: ["Founders", "Product teams", "Teams adopting AI"],
        image: "/Updated trainer pics/updated images/Ashvin.png",
    },
    {
        id: "kain",
        name: "Kain Masters",
        title: "Communications Coach",
        whatTheyDo: "Builds communication confidence for presentations, influence, and high-stakes conversations.",
        whatMakesSpecial: "Practical speaking frameworks that improve clarity and leadership presence quickly.",
        badge: null,
        focusAreas: ["Communication mastery", "Presentation skills", "Career progression"],
        bio: "Kain coaches professionals to communicate with more clarity, confidence, and influence.\n\nHis sessions focus on practical speaking frameworks, delivery confidence, and message structure so teams present ideas clearly and lead conversations effectively.",
        bestFor: ["Young professionals", "Team leads", "Client-facing teams"],
        image: "/Updated trainer pics/updated images/Kain.png",
    },
    {
        id: "alfred",
        name: "Alfred Ng",
        title: "Storytelling, Video, and Affiliate Marketing Coach",
        whatTheyDo: "Teaches teams to use storytelling, video, and affiliate channels for sustainable growth.",
        whatMakesSpecial: "Combines creator craft with growth execution across markets and industries.",
        badge: null,
        focusAreas: ["Storytelling", "Video creation", "Affiliate marketing"],
        bio: "Alfred is a videographer, storyteller, and affiliate marketer with experience across multiple industries and countries.\n\nHe helps teams communicate more clearly through video and storytelling, while building sustainable affiliate and content-driven growth channels.",
        bestFor: ["Marketing teams", "Content teams", "Creators and brand builders"],
        image: "/Updated trainer pics/updated images/alfred image update.png",
    },
    {
        id: "ebrahim",
        name: "Ebrahim Al Hamdi",
        title: "AI Agents and Marketing Systems Coach",
        whatTheyDo: "Designs AI-agent and automation systems that reduce manual work and speed decision-making.",
        whatMakesSpecial: "25+ years advising organizations across the US and Malaysia on scalable operating systems.",
        badge: null,
        focusAreas: ["AI agents", "Automation", "Vibe coding for business"],
        bio: "Ebrahim has spent over 25 years working with clients across the US and Malaysia, helping businesses build smarter systems using marketing automation, AI agents, and modern workflows.\n\nHis training focuses on building systems that save time, reduce manual work, and improve decision-making.",
        bestFor: ["Operations teams", "Marketing teams", "Founders scaling systems"],
        image: "/Updated trainer pics/updated images/Ebrahim new.png",
    },
    {
        id: "ivan",
        name: "Ivan Eng",
        title: "Workplace Wellbeing and Mental Health Coach",
        whatTheyDo: "Supports teams with practical wellbeing training for stress, burnout, and long-term resilience.",
        whatMakesSpecial: "Combines counselling depth with corporate leadership context for applied workplace outcomes.",
        badge: null,
        focusAreas: ["Stress management", "Burnout prevention", "Workplace wellbeing"],
        bio: "Ivan works with organisations to support employee wellbeing through practical, HRDC claimable training and pay-as-you-go counselling.\n\nWith experience in both corporate leadership and counselling, his sessions help teams manage stress, reduce burnout, and build healthier working environments.",
        bestFor: ["HR teams", "People managers", "Organisations prioritising wellbeing"],
        image: "/Updated trainer pics/updated images/Ivan.png",
    },
];

function getInitials(name: string) {
    return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2);
}

export default function CoachesPage() {
    const [selectedCoach, setSelectedCoach] = useState<typeof coaches[0] | null>(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const coachId = searchParams.get("coach");
        if (!coachId) return;
        const coach = coaches.find((item) => item.id === coachId);
        if (coach) {
            setSelectedCoach(coach);
        }
    }, [searchParams]);

    const openCoachProfile = (coach: typeof coaches[0]) => {
        setSelectedCoach(coach);
        setSearchParams({ coach: coach.id });
    };

    const closeCoachProfile = () => {
        setSelectedCoach(null);
        setSearchParams({});
    };

    return (
        <>
            <Header />
            <div className="min-h-screen bg-background pt-20">
                {/* Hero Section */}
                <section className="py-24 md:py-32 bg-primary">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="headline-display font-heading text-5xl md:text-7xl text-white mb-8 leading-tight"
                            >
                                Meet the coaches
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-white/90 mb-12 font-sans max-w-4xl mx-auto"
                            >
                                Experienced practitioners with 10+ years of real-world experience, helping teams build modern skills that actually stick. All programs are HRDC-claimable.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Button variant="lime" size="xl" asChild className="text-lg px-12 h-16 rounded-full font-semibold">
                                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Chat with us
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Intro Context Section */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                            <div>
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="headline-display font-heading text-4xl md:text-5xl text-foreground mb-10"
                                >
                                    Real experience. Real outcomes.
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-6 text-lg md:text-xl text-foreground/80 font-sans leading-relaxed"
                                >
                                    <p>
                                        At WeGrowPeople, training is not delivered by career trainers or generic facilitators.
                                    </p>
                                    <p>
                                        Our coaches are practitioners. Builders. Operators. Leaders.
                                    </p>
                                    <p>
                                        They have led teams, scaled businesses, delivered complex projects, launched products, and navigated real pressure. That experience shapes how they train.
                                    </p>
                                </motion.div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="grid grid-cols-2 gap-4"
                            >
                                <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                                    <img
                                        src="/images/about/trainer_in_action_1769341618326.png"
                                        alt="Trainer in action"
                                        className="h-64 w-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                                <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
                                    <img
                                        src="/images/about/team_collaboration_tech_1769341635874.png"
                                        alt="Team collaboration workshop"
                                        className="h-64 w-full object-cover"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Coaches Grid */}
                <section className="py-16 md:py-24 bg-background">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                            <h2 className="headline-display text-4xl md:text-5xl text-foreground mb-4">
                                Meet the coaches
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground mb-6">
                                Experienced practitioners helping teams build modern skills.
                            </p>
                            <Button variant="outline" size="lg" asChild className="rounded-full px-8">
                                <a href="/apply-practitioner">Become a coach</a>
                            </Button>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {coaches.map((coach, index) => (
                                <motion.div
                                    key={coach.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => openCoachProfile(coach)}
                                    className="group bg-white rounded-3xl p-8 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                >
                                    {/* Avatar */}
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-lime/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                        {(coach as any).image ? (
                                            <img
                                                src={(coach as any).image}
                                                alt={coach.name}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-3xl font-bold text-primary font-heading">
                                                {getInitials(coach.name)}
                                            </span>
                                        )}
                                    </div>

                                    {/* Name & Title */}
                                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                                        {coach.name}
                                    </h3>
                                    <p className="text-base text-foreground/70 mb-3 font-sans">
                                        {coach.title}
                                    </p>

                                    {/* Badge */}
                                    {coach.badge && (
                                        <span className="inline-block px-3 py-1 rounded-full bg-lime/10 text-lime text-xs font-semibold mb-4">
                                            {coach.badge}
                                        </span>
                                    )}

                                    {/* What They Do */}
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary/70 mb-1.5">
                                                What they do
                                            </p>
                                            <p className="text-sm text-foreground/80 leading-relaxed">
                                                {coach.whatTheyDo}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary/70 mb-1.5">
                                                What makes them special
                                            </p>
                                            <p className="text-sm text-foreground/80 leading-relaxed">
                                                {coach.whatMakesSpecial}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Focus Areas */}
                                    <div className="mt-6 pt-6 border-t border-border/50">
                                        <p className="text-sm font-semibold text-foreground mb-3">Focus areas</p>
                                        <div className="flex flex-wrap gap-2">
                                            {coach.focusAreas.map((area) => (
                                                <span key={area} className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary font-medium">
                                                    {area}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* View More */}
                                    <div className="mt-6 text-sm text-lime font-semibold group-hover:underline">
                                        View full profile →
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How Coaches Are Matched */}
                <section className="py-24 md:py-32 bg-[#e8f5e0]">
                    <div className="container">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                            <div className="text-center lg:text-left">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="headline-display font-heading text-4xl md:text-5xl text-foreground mb-8 leading-[0.98] max-w-[12ch] mx-auto lg:mx-0"
                                >
                                    <span className="block">Matched to your needs,</span>
                                    <span className="block">not randomly assigned</span>
                                </motion.h2>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-6 text-lg md:text-xl text-foreground/80 font-sans leading-relaxed"
                                >
                                    <p>Every team is different.</p>
                                    <p>
                                        We take the time to understand your goals, challenges, and context before recommending the right coach or combination of coaches.
                                    </p>
                                    <p>
                                        This ensures training is relevant, practical, and effective from day one.
                                    </p>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
                            >
                                <img
                                    src="/images/about/modern_corporate_workshop_1769341602532.png"
                                    alt="Corporate workshop session"
                                    className="h-[340px] w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* HRDC Block */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="container">
                        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
                            <div className="text-center lg:text-left">
                                <motion.h2
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="headline-display font-heading text-4xl md:text-5xl text-foreground mb-8"
                                >
                                    HRDC claimable training, done right.
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg md:text-xl text-foreground/80 font-sans leading-relaxed"
                                >
                                    Many of our programs are structured to meet HRDC requirements while maintaining practical, outcome-driven delivery.
                                    <br /><br />
                                    We handle the structure so your team can focus on learning and applying skills.
                                </motion.p>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.15 }}
                                className="overflow-hidden rounded-3xl border border-border bg-white shadow-sm"
                            >
                                <img
                                    src="/training-images/optimized/hrdc-claimable-1600.jpg"
                                    alt="HRDC claimable training"
                                    className="h-[340px] w-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-32 md:py-40 bg-primary">
                    <div className="container">
                        <div className="max-w-4xl mx-auto text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="headline-display font-heading text-5xl md:text-7xl text-white mb-8 leading-tight"
                            >
                                Not sure which coach is right for your team?
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-xl md:text-2xl text-white/80 mb-12 font-sans"
                            >
                                Tell us what you are trying to improve. We will recommend the right coach and approach.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Button variant="lime" size="xl" asChild className="text-lg px-12 h-16 rounded-full font-semibold">
                                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                        </svg>
                                        Chat with us
                                    </a>
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Coach Detail Modal */}
                {selectedCoach && (
                    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm" onClick={closeCoachProfile}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8 md:p-12 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={closeCoachProfile}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Avatar */}
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-lime/20 flex items-center justify-center mb-6 overflow-hidden">
                                {(selectedCoach as any).image ? (
                                    <img
                                        src={(selectedCoach as any).image}
                                        alt={selectedCoach.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <span className="text-5xl font-bold text-primary font-heading">
                                        {getInitials(selectedCoach.name)}
                                    </span>
                                )}
                            </div>

                            {/* Name & Title */}
                            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">
                                {selectedCoach.name}
                            </h2>
                            <p className="text-xl text-foreground/70 mb-4 font-sans">
                                {selectedCoach.title}
                            </p>

                            {/* Badge */}
                            {selectedCoach.badge && (
                                <span className="inline-block px-4 py-2 rounded-full bg-lime/10 text-lime text-sm font-semibold mb-8">
                                    {selectedCoach.badge}
                                </span>
                            )}

                            {/* Focus Areas */}
                            <div className="mb-8">
                                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Focus areas</h3>
                                <ul className="space-y-3">
                                    {selectedCoach.focusAreas.map((area) => (
                                        <li key={area} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
                                            <span className="text-foreground font-sans">{area}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Bio */}
                            <div className="mb-8">
                                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Bio</h3>
                                <div className="text-foreground/80 font-sans leading-relaxed whitespace-pre-line">
                                    {selectedCoach.bio}
                                </div>
                            </div>

                            {/* Best For */}
                            <div className="mb-8">
                                <h3 className="font-heading text-lg font-bold text-foreground mb-4">Best for</h3>
                                <ul className="space-y-3">
                                    {selectedCoach.bestFor.map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-lime flex-shrink-0" />
                                            <span className="text-foreground font-sans">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA */}
                            <Button variant="dark" size="lg" asChild className="w-full rounded-full">
                                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                                    Chat with us about {selectedCoach.name.split(" ")[0]}
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}
