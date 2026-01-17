import { MessageCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/60123456789";

const footerLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#coaches", label: "Coaches" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Footer() {
  return (
    <footer className="py-16 bg-foreground text-primary-foreground">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <span className="font-bold text-lg">W</span>
              </div>
              <span className="font-bold text-xl">WeGrowPeople</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              WeGrowPeople helps teams build the human skills that matter and adopt modern tools, including AI.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-sm">
              <Award className="w-4 h-4" />
              <span>HRDC claimable</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Get Started</h4>
            <p className="text-primary-foreground/70 mb-4 text-sm">
              Ready to grow your team? Chat with us to get started.
            </p>
            <Button
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              asChild
            >
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Chat with us
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} WeGrowPeople. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
