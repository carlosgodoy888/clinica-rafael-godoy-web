"use client";

import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";
import { clinic } from "@/config/clinic";
import { trackPhoneCall, trackMapClick } from "@/lib/analytics";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" aria-label="Pie de página">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Columna 1: Branding + SEO local */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <p className="text-white font-bold text-lg leading-tight">Dr. Rafael Godoy</p>
              <p className="text-teal-400 text-sm font-medium">Clínica Dental en Córdoba</p>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-3">
              Especialista en Estomatología con 35 años de experiencia en Córdoba. Formación
              en la Universidad de Montpellier. Tecnología avanzada y trato cercano.
            </p>
            {/* Frase SEO local */}
            <p className="text-xs leading-relaxed text-gray-500">
              Clínica dental en el centro de Córdoba, junto a Plaza de Andalucía.
              Atendiendo a pacientes y familias cordobesas desde 1991.
            </p>
          </div>

          {/* Columna 2: Contacto con Lucide icons */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`tel:${clinic.contact.phone}`}
                  onClick={() => trackPhoneCall("footer")}
                  className="flex items-center gap-3 hover:text-teal-400 transition-colors py-1 min-h-[44px]"
                  aria-label={`Llamar al ${clinic.contact.phoneDisplay}`}
                >
                  <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-white hover:text-teal-400 transition-colors">
                    {clinic.contact.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={clinic.contact.mapsUrl}
                  onClick={() => trackMapClick()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-teal-400 transition-colors py-1"
                  aria-label="Ver en Google Maps"
                >
                  <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <address className="not-italic leading-snug">
                    {clinic.contact.address.street}
                    <br />
                    <span className="text-gray-500">
                      {clinic.contact.address.postalCode} {clinic.contact.address.city}
                    </span>
                  </address>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinic.contact.email}`}
                  className="flex items-center gap-3 hover:text-teal-400 transition-colors py-1 min-h-[44px]"
                >
                  <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" aria-hidden="true" />
                  <span className="break-all text-xs">{clinic.contact.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Navegación */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Información</h4>
            <ul className="space-y-1 text-sm">
              {[
                { label: "Inicio",       href: "/" },
                { label: "Servicios",    href: "/#servicios" },
                { label: "El Doctor",    href: "/#doctor" },
                { label: "Testimonios",  href: "/#testimonios" },
                { label: "Contacto",     href: "/#contacto" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block hover:text-teal-400 transition-colors py-2 min-h-[44px] flex items-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Legal */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-1 text-sm">
              {[
                { label: "Aviso Legal",             href: "/aviso-legal" },
                { label: "Política de Privacidad",  href: "/politica-privacidad" },
                { label: "Política de Cookies",     href: "/politica-cookies" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block hover:text-teal-400 transition-colors py-2 min-h-[44px] flex items-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {currentYear} Clínica Dental Dr. Rafael Godoy, Córdoba. Todos los derechos reservados.</p>
          <p>Estomatólogo · Universidad de Montpellier · Plaza de Andalucía, 3</p>
        </div>
      </div>
    </footer>
  );
}
