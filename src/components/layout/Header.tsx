import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, ChevronRight, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/consultancy", label: "Consultancy", isAnchor: false },
  { href: "/coaches", label: "Coaches", isAnchor: false },
  { href: "/about", label: "About", isAnchor: false },
  { href: "/contact", label: "Contact", isAnchor: false },
  { href: "/careers", label: "Join our team", isAnchor: false },
];

const trainingCategories = [
  {
    id: "sales",
    label: "Sales Training",
    description: "All Sales Programs",
    href: "/sales-training",
    courses: [
      { label: "Sales Fundamentals", href: "/training/sales/sales-fundamentals" },
      { label: "Prospecting", href: "/training/sales/prospecting" },
      { label: "Lead Qualification", href: "/training/sales/lead-qualification" },
      { label: "Consultative Selling", href: "/training/sales/consultative-selling" },
      { label: "Key Account Management", href: "/training/sales/key-account-management" },
      { label: "Storytelling in Sales", href: "/training/sales/storytelling-in-sales" },
      { label: "Social Selling", href: "/training/sales/social-selling" },
      { label: "Virtual Selling", href: "/training/sales/virtual-selling" },
      { label: "Customer Success", href: "/training/sales/customer-success" },
    ]
  },
  {
    id: "marketing",
    label: "Marketing Training",
    description: "All Marketing Programs",
    href: "/training/marketing",
    courses: [
      { label: "Marketing Fundamentals", href: "/training/marketing/marketing-fundamentals" },
      { label: "Growth Marketing", href: "/training/marketing/growth-marketing" },
      { label: "Performance Marketing", href: "/training/marketing/performance-marketing" },
      { label: "Content Strategy", href: "/training/marketing/content-strategy" },
      { label: "Brand Positioning", href: "/training/marketing/brand-positioning" },
      { label: "Marketing Analytics", href: "/training/marketing/marketing-analytics" },
    ]
  },
  {
    id: "ai",
    label: "AI Training",
    description: "All AI Programs",
    href: "/training/ai",
    courses: [
      { label: "AI Fundamentals for Teams", href: "/training/ai/ai-fundamentals-for-teams" },
      { label: "AI for Productivity", href: "/training/ai/ai-for-productivity" },
      { label: "AI for Sales and Marketing", href: "/training/ai/ai-for-sales-and-marketing" },
      { label: "AI for Leaders", href: "/training/ai/ai-for-leaders" },
      { label: "Building AI Workflows", href: "/training/ai/building-ai-workflows" },
    ]
  },
  {
    id: "operations",
    label: "Operations Training",
    description: "All Operations Programs",
    href: "/training/operations",
    courses: [
      { label: "Operational Excellence", href: "/training/operations/operational-excellence" },
      { label: "Process Optimization", href: "/training/operations/process-optimization" },
      { label: "Productivity Systems", href: "/training/operations/productivity-systems" },
      { label: "Cross Team Execution", href: "/training/operations/cross-team-execution" },
      { label: "Scaling Operations", href: "/training/operations/scaling-operations" },
    ]
  },
  {
    id: "management",
    label: "Management Training",
    description: "All Management Programs",
    href: "/training/management",
    courses: [
      { label: "First Time Managers", href: "/training/management/first-time-managers" },
      { label: "Leadership Fundamentals", href: "/training/management/leadership-fundamentals" },
      { label: "Managing High Performance Teams", href: "/training/management/managing-high-performance-teams" },
      { label: "Communication for Managers", href: "/training/management/communication-for-managers" },
      { label: "Change Management", href: "/training/management/change-management" },
    ]
  }
];

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%20there%2C%20I'm%20interested%20in%20finding%20out%20more%20about%20your%20training";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTrainingMenuOpen, setIsTrainingMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(trainingCategories[0]);
  const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-md py-3"
        : "bg-hero py-5"
        }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className={`font-heading font-black text-2xl tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
            WeGrowPeople
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Training Dropdown Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setIsTrainingMenuOpen(true)}
            onMouseLeave={() => setIsTrainingMenuOpen(false)}
          >
            <button
              className={`flex items-center gap-1 transition-colors font-medium text-sm py-4 ${isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
                }`}
            >
              Training <ChevronDown size={14} />
            </button>

            {/* Big Dropdown Menu */}
            <AnimatePresence>
              {isTrainingMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-[600px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex"
                >
                  {/* Left Column: Categories */}
                  <div className="w-1/2 border-r border-border p-4 bg-muted/10">
                    <div className="space-y-1">
                      {trainingCategories.map((cat) => (
                        <div
                          key={cat.id}
                          onMouseEnter={() => setActiveCategory(cat)}
                          className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all duration-200 ${activeCategory.id === cat.id ? "bg-white shadow-sm text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/50"}`}
                        >
                          <a href={cat.href} className="font-bold flex-1">{cat.label}</a>
                          <ChevronRight size={16} className={`transition-transform ${activeCategory.id === cat.id ? "opacity-100" : "opacity-0"}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Courses */}
                  <div className="w-1/2 p-4 bg-white">
                    <div className="p-4">
                      <h4 className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-6">{activeCategory.description}</h4>
                      <div className="space-y-2">
                        {activeCategory.courses.map((course) => (
                          <a
                            key={course.href}
                            href={course.href}
                            className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                          >
                            {course.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors font-medium text-sm ${isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
                }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="lime" size="default" asChild>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat with us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <nav className="container py-4 flex flex-col gap-2">
              {/* Mobile Training Accordion */}
              <div className="py-2">
                <button
                  onClick={() => setMobileExpandedCategory(mobileExpandedCategory === 'training' ? null : 'training')}
                  className="w-full flex items-center justify-between text-muted-foreground font-bold py-3 border-b border-muted"
                >
                  Training <ChevronDown size={18} className={`transition-transform ${mobileExpandedCategory === 'training' ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileExpandedCategory === 'training' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 space-y-4 py-4"
                    >
                      {trainingCategories.map(cat => (
                        <div key={cat.id}>
                          <button
                            onClick={() => setMobileExpandedCategory(mobileExpandedCategory === `cat-${cat.id}` ? 'training' : `cat-${cat.id}`)}
                            className="w-full flex items-center justify-between text-muted-foreground/80 font-semibold py-2"
                          >
                            {cat.label} <ChevronDown size={14} className={mobileExpandedCategory === `cat-${cat.id}` ? 'rotate-180' : ''} />
                          </button>
                          {mobileExpandedCategory === `cat-${cat.id}` && (
                            <div className="pl-4 space-y-3 py-2 border-l border-lime/30 mt-1">
                              {cat.courses.map(course => (
                                <a
                                  key={course.href}
                                  href={course.href}
                                  className="block text-sm text-muted-foreground/60"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {course.label}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors font-bold py-3 border-b border-muted last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}

              <Button variant="lime" size="default" className="mt-6 py-7 rounded-2xl text-lg font-bold" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat with us now
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
