"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { trackPhoneCall } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function FloatingCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Visible antes (200px) para no perder conversión en hero
    const handleScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={`tel:${clinic.contact.phone}`}
      onClick={() => trackPhoneCall("floating_button")}
      aria-label={`Llamar a la Clínica Dental Dr. Rafael Godoy: ${clinic.contact.phoneDisplay}`}
      className={cn(
        // Mobile: bottom-6 right-4 (thumb-friendly). Desktop: bottom-8 right-8
        "fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50",
        // Mobile 60px / Desktop 64px — táctil cómodo sin ser invasivo
        "w-[60px] h-[60px] sm:w-16 sm:h-16 rounded-full",
        "bg-teal-600 hover:bg-teal-500 active:bg-teal-700",
        "text-white",
        // Sombra destacada con pulso verde para visibilidad
        "shadow-[0_0_0_0_rgba(0,124,124,0.4)]",
        "hover:shadow-2xl",
        "flex flex-col items-center justify-center gap-0.5",
        "transition-all duration-300",
        // Pulso solo cuando es visible (llama la atención sin ser molesto)
        visible && "animate-[pulse_2s_ease-in-out_infinite]",
        "hover:animate-none hover:scale-110",
        visible
          ? "opacity-100 scale-100 translate-y-0"
          : "opacity-0 scale-75 translate-y-4 pointer-events-none"
      )}
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
      <span className="text-[9px] font-bold leading-none tracking-tight">LLAMAR</span>
    </a>
  );
}
