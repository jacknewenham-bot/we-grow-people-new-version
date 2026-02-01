import { motion } from "framer-motion";

const coaches = [
  {
    name: "Hamza Akaouch",
    tagline: "Consultative selling grounded in buyer psychology",
    title: "HRDC Accredited Sales Trainer",
    focus: "Decision psychology, deep discovery, objection handling",
  },
  {
    name: "Jack Newenham",
    tagline: "Growth and Performance Marketing Manager",
    title: "Marketing and Growth Mentor",
    focus: "Growth strategy, performance marketing, execution",
  },
  {
    name: "Marc Sagayam",
    tagline: "Project Manager",
    title: "7+ years leading complex operations and high-stakes projects",
    focus: "Project governance, delivery timelines, stakeholder management",
  },
  {
    name: "Adele O'Brien",
    tagline: "Partnerships and Growth Strategy Leader",
    title: "9+ years scaling brands across Asia, the USA, and Europe",
    focus: "Growth strategy, partnerships, go-to-market, performance",
  },
  {
    name: "Ashvin Praveen",
    tagline: "Co-founder and CEO of Cleve.ai",
    title: "Trainer for vibe coding for business and practical AI adoption",
    focus: "AI workflows, building with AI tools, content productivity",
  },
  {
    name: "Alfred Ng",
    tagline: "Videographer, storyteller, affiliate marketer",
    title: "Experienced across industries and countries",
    focus: "Storytelling, video creation, affiliate marketing",
  },
  {
    name: "Ebrahim Al Hamdi",
    tagline: "Marketing, agents, and vibe coding specialist",
    title: "25 years based in the US, now in Malaysia",
    focus: "AI agents, automation, marketing systems, vibe coding",
  },
  {
    name: "Ivan Eng",
    tagline: "Chief of Marketing at Bambi",
    title: "Helping working adults overcome stress, burnout, and work anxiety",
    focus: "Workplace wellbeing, mental health support, HRDC claimable training",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
}

export function Coaches() {
  return (
    <section id="coaches" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="headline-display text-3xl md:text-5xl lg:text-6xl text-foreground mb-4"
          >
            Meet the coaches
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Experienced practitioners helping teams build modern skills that stick.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group bg-card rounded-3xl p-6 border border-border shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300">
                <span className="text-xl font-bold text-gray-600">
                  {getInitials(coach.name)}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1">
                {coach.name}
              </h3>

              <p className="text-sm text-lime font-medium mb-2">
                {coach.tagline}
              </p>

              <p className="text-sm text-muted-foreground mb-4">
                {coach.title}
              </p>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Focus:</span>{" "}
                  {coach.focus}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
