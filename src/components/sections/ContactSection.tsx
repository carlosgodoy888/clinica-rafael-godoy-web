"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Mail, Navigation, Map, Sun, Moon, Clock } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trackPhoneCall, trackMapClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/* ── Datos de horario ── */
const hoursRows = [
  { day: "Lunes",     jsDay: 1, morning: "9:00 – 14:00", afternoon: "17:00 – 20:30" },
  { day: "Martes",    jsDay: 2, morning: "9:00 – 14:00", afternoon: "17:00 – 20:30" },
  { day: "Miércoles", jsDay: 3, morning: "9:00 – 14:00", afternoon: null },
  { day: "Jueves",    jsDay: 4, morning: "9:00 – 14:00", afternoon: "17:00 – 20:30" },
  { day: "Viernes",   jsDay: 5, morning: "9:00 – 14:00", afternoon: null },
];

/* ── Detectar estado de apertura ── */
function useClinicStatus() {
  const [status, setStatus]   = useState<"open" | "closed" | null>(null);
  const [todayIdx, setToday]  = useState<number>(-1);

  useEffect(() => {
    const check = () => {
      const now  = new Date();
      const day  = now.getDay();
      const mins = now.getHours() * 60 + now.getMinutes();

      const isWeekday    = day >= 1 && day <= 5;
      const hasAfternoon = [1, 2, 4].includes(day);
      const inMorning    = mins >= 540  && mins < 840;
      const inAfternoon  = mins >= 1020 && mins < 1230;

      setStatus(isWeekday && (inMorning || (hasAfternoon && inAfternoon)) ? "open" : "closed");
      setToday(day);
    };
    check();
    const t = setInterval(check, 60_000);
    return () => clearInterval(t);
  }, []);

  return { status, todayIdx };
}

const googleMapsDirections =
  "https://www.google.com/maps/dir/?api=1&destination=Cl%C3%ADnica+Dental+Dr.+Rafael+Godoy&destination_place_id=ChIJ7l-z8_-Y2Q0RdqSiB6BlGkM";

const appleMapsUrl =
  `https://maps.apple.com/?q=Cl%C3%ADnica+Dental+Dr.+Rafael+Godoy&ll=${clinic.contact.coordinates.lat},${clinic.contact.coordinates.lng}&t=m`;

export function ContactSection() {
  const { status, todayIdx } = useClinicStatus();

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-heading"
      className="py-14 md:py-20 bg-gray-50"
    >
      <Container>
        <SectionHeader
          id="contacto-heading"
          badge="Pide tu cita"
          title="Pide Cita en Nuestra Clínica Dental de Córdoba"
          subtitle="En el corazón de Córdoba, junto a Plaza de Andalucía — a pocos pasos del Puente Romano. Acceso fácil y parking disponible en la zona."
        />

        {/*
          Desktop: mapa izquierda 50% | info+horario derecha 50%
          Mobile:  info primero (más accionable), mapa debajo
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">

          {/* ══ Columna derecha en móvil / izquierda en desktop: Mapa ══ */}
          <div className="flex flex-col gap-3 order-2 lg:order-1">

            {/* Mapa — ocupa el espacio disponible */}
            <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border border-gray-200 min-h-[300px] lg:min-h-0">
              <iframe
                title="Mapa: Clínica Dental Dr. Rafael Godoy — Plaza de Andalucía 3, Córdoba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.297146946436!2d-4.78119!3d37.87013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d208ffb3f85ef%3A0x431a65a007c2a476!2sCl%C3%ADnica%20Dental%20Dr.%20Rafael%20Godoy%20Pizarro!5e0!3m2!1ses!2ses!4v1730558920000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                data-cookieconsent="marketing"
              />
            </div>

            {/* Botones de navegación */}
            <div className="grid grid-cols-3 gap-2">
              <a
                href={googleMapsDirections}
                onClick={() => trackMapClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs px-3 py-3 rounded-xl transition-colors min-h-[44px]"
              >
                <Navigation className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                Cómo llegar
                <span className="sr-only">en Google Maps (nueva ventana)</span>
              </a>
              <a
                href={clinic.contact.mapsUrl}
                onClick={() => trackMapClick()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold text-xs px-3 py-3 rounded-xl transition-colors min-h-[44px]"
              >
                <Map className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                Google Maps
                <span className="sr-only">(nueva ventana)</span>
              </a>
              <a
                href={appleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50 font-semibold text-xs px-3 py-3 rounded-xl transition-colors min-h-[44px]"
                aria-label="Abrir en Apple Maps (nueva ventana)"
              >
                <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.39 1.39-2.39 4.15.02 3.27 2.87 4.36 2.9 4.37l-.06.1zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Maps
              </a>
            </div>
          </div>

          {/* ══ Columna izquierda en móvil / derecha en desktop: Info + Horario ══ */}
          <div className="flex flex-col gap-4 order-1 lg:order-2">

            {/* CTA principal — teléfono */}
            <a
              href={`tel:${clinic.contact.phone}`}
              onClick={() => trackPhoneCall("contact_section")}
              className="flex items-center justify-center gap-3 w-full bg-teal-600 hover:bg-teal-700 active:bg-teal-800 text-white font-bold text-lg px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 min-h-[60px]"
              aria-label={`Llamar y pedir cita: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
              {clinic.contact.phoneDisplay}
            </a>
            <p className="text-center text-xs text-gray-400 -mt-1">
              Atención inmediata · Urgencias dentales en Córdoba
            </p>

            {/* ── Horario — bloque visual prominente ── */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex-1">

              {/* Cabecera horario */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-teal-600" aria-hidden="true" />
                  <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Horario
                  </span>
                </div>
                {status !== null && (
                  <div
                    className={cn(
                      "inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full",
                      status === "open"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-red-50 text-red-600 border border-red-200"
                    )}
                  >
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full flex-shrink-0",
                        status === "open" ? "bg-emerald-500 animate-pulse" : "bg-red-400"
                      )}
                      aria-hidden="true"
                    />
                    {status === "open" ? "Abierto ahora" : "Cerrado ahora"}
                  </div>
                )}
              </div>

              {/* Filas de días — tipografía generosa, hoy muy destacado */}
              <div
                className="divide-y divide-gray-100"
                aria-label="Horario de la clínica dental Dr. Rafael Godoy"
              >
                {hoursRows.map(({ day, jsDay, morning, afternoon }) => {
                  const isToday = todayIdx === jsDay;
                  return (
                    <div
                      key={day}
                      className={cn(
                        "flex items-center gap-4 px-5 py-4 transition-colors",
                        isToday
                          ? "bg-teal-600"
                          : "hover:bg-gray-50/60"
                      )}
                    >
                      {/* Nombre del día */}
                      <div className="w-28 flex-shrink-0">
                        <p
                          className={cn(
                            "font-bold text-[15px] leading-none",
                            isToday ? "text-white" : "text-gray-900"
                          )}
                        >
                          {day}
                        </p>
                        {isToday && (
                          <span className="inline-block mt-1 text-[10px] font-bold text-teal-100 bg-white/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            HOY
                          </span>
                        )}
                      </div>

                      {/* Franjas horarias */}
                      <div className="flex flex-wrap items-center gap-2 flex-1">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 rounded-lg",
                            isToday
                              ? "bg-white/25 text-white"
                              : "bg-teal-50 text-teal-700 border border-teal-100"
                          )}
                        >
                          <Sun className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                          {morning}
                        </span>
                        {afternoon ? (
                          <span
                            className={cn(
                              "inline-flex items-center gap-1.5 text-[13px] font-semibold px-3 py-1.5 rounded-lg",
                              isToday
                                ? "bg-white/25 text-white"
                                : "bg-teal-50 text-teal-700 border border-teal-100"
                            )}
                          >
                            <Moon className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                            {afternoon}
                          </span>
                        ) : (
                          <span className={cn("text-xs italic", isToday ? "text-teal-200" : "text-gray-400")}>
                            Solo mañana
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}

                {/* Fin de semana */}
                <div className="flex items-center gap-4 px-5 py-3.5 bg-gray-50/50">
                  <p className="w-28 flex-shrink-0 text-[15px] font-bold text-gray-300">
                    Sáb · Dom
                  </p>
                  <p className="text-sm text-gray-400 italic">Cerrado</p>
                </div>
              </div>
            </div>

            {/* Dirección — secundaria */}
            <div className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 shadow-sm p-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center mt-0.5">
                <MapPin className="w-4 h-4 text-teal-600" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Dirección
                </p>
                <address className="not-italic text-gray-700 text-sm leading-snug">
                  <strong>{clinic.contact.address.street}</strong>
                  <br />
                  <span className="text-gray-500 text-xs">
                    {clinic.contact.address.postalCode} {clinic.contact.address.city}
                  </span>
                </address>
                <p className="text-xs text-gray-400 mt-1">
                  Centro histórico · Cerca del Puente Romano
                </p>
              </div>
            </div>

            {/* Email — abajo, menos prioritario */}
            <a
              href={`mailto:${clinic.contact.email}`}
              className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3 hover:border-teal-200 transition-colors min-h-[44px]"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                <Mail className="w-4 h-4 text-teal-600" aria-hidden="true" />
              </div>
              <span className="text-sm text-teal-600 hover:text-teal-700 font-medium break-all">
                {clinic.contact.email}
              </span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
