import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <a
      data-testid="whatsapp-float-button"
      href={waLink("Hello Vikash Singh Films, I'd like to enquire about a wedding.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-[90] h-14 w-14 rounded-full bg-gold text-ink grid place-items-center shadow-[0_0_30px_rgba(212,175,55,0.35)] transition-transform duration-300 hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
