import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "255777700006";
  const message = "Hello! I'm interested in booking a stay at Canary Hotels.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-6 z-50 w-13 h-13 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 bg-foreground [bottom:calc(4.5rem+env(safe-area-inset-bottom))] md:[bottom:1.5rem]"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
