import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/60173552382?text=Hi%20there%2C%20I'm%20interested%20in%20finding%20out%20more%20about%20your%20training";

export function WhatsAppFloating() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-semibold text-lime-foreground shadow-lg shadow-lime/20 transition-transform hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
    >
      <MessageCircle className="h-4 w-4" />
      Chat with us
    </a>
  );
}
