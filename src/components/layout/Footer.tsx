const WHATSAPP_LINK = "https://wa.me/60123456789";

const footerLinks = {
  teams: [
    { href: "/training/marketing", label: "Marketing teams" },
    { href: "/sales-training", label: "Sales teams" },
    { href: "/training/management", label: "Leadership teams" },
    { href: "/training/operations", label: "Operations teams" },
    { href: "/training/ai", label: "AI teams" },
  ],
  programs: [
    { href: "/sales-training", label: "Sales Training" },
    { href: "/training/marketing", label: "Marketing Training" },
    { href: "#programs", label: "Practical skills" },
    { href: "#programs", label: "Expert-led coaching" },
    { href: "#programs", label: "AI-powered learning" },
    { href: "#programs", label: "HRDC claimable" },
  ],
  resources: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/careers", label: "Join our team" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/coaches", label: "Meet the coaches" },
    { href: "/#testimonials", label: "Testimonials" },
  ],
  contact: [
    { href: WHATSAPP_LINK, label: "Chat with us" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-hero text-white">
      <div className="container pt-12 pb-8 md:pt-14 md:pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-heading font-black text-xl tracking-tight text-white mb-4 block">
              WeGrowPeople
            </span>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
              <img
                src="/HRDC claimable/HRDC corp claimable.png"
                alt="HRDC corp claimable logo"
                className="h-6 w-auto"
              />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-white/80">
                HRDC Claimable
              </span>
            </div>
          </div>

          {/* Teams */}
          <div>
            <h4 className="type-h4 text-lime mb-4">Teams</h4>
            <ul className="space-y-3">
              {footerLinks.teams.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors type-nav"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="type-h4 text-lime mb-4">Programs</h4>
            <ul className="space-y-3">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors type-nav"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="type-h4 text-lime mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors type-nav"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="type-h4 text-lime mb-4">Contact</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition-colors type-nav"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 type-caption">
            © {new Date().getFullYear()} WeGrowPeople. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
