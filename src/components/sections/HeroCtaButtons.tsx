"use client";

import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { trackCtaClick, trackMapClick, trackPhoneCall } from "@/lib/analytics";

export function HeroCtaButtons() {
  return (
    <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
      <a
        href={`tel:${clinic.contact.phone}`}
        onClick={() => {
          trackPhoneCall("hero");
          trackCtaClick("llamar", "hero");
        }}
        className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-teal-50 active:bg-gray-100 text-teal-700 font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 min-h-[52px] whitespace-nowrap"
        aria-label={`Llamar y pedir cita: ${clinic.contact.phoneDisplay}`}
      >
        <Phone
          className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        />
        <span className="sm:hidden">{clinic.contact.phoneDisplay}</span>
        <span className="hidden sm:inline">
          Llamar: {clinic.contact.phoneDisplay}
        </span>
      </a>

      <Link
        href="/tratamientos"
        onClick={() => trackCtaClick("ver_tratamientos", "hero")}
        className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 min-h-[52px] whitespace-nowrap"
      >
        Ver tratamientos
        <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
      </Link>

      <a
        href="#contacto"
        onClick={() => {
          trackMapClick();
          trackCtaClick("ubicacion_horarios", "hero");
        }}
        className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white/70 text-white/90 hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 min-h-[52px] whitespace-nowrap"
      >
        <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        Ubicación y horarios
      </a>
    </div>
  );
}