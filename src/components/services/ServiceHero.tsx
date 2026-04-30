"use client";

import Link from "next/link";
import { ArrowDown, ChevronRight, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { trackCtaClick, trackMapClick, trackPhoneCall } from "@/lib/analytics";

type ServiceHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  serviceKey: string;
  breadcrumbLabel: string;
  highlights?: string[];
};

export function ServiceHero({
  eyebrow = "Tratamiento dental en Córdoba",
  title,
  subtitle,
  serviceKey,
  breadcrumbLabel,
  highlights = [],
}: ServiceHeroProps) {
  const trackingLocation = `service_${serviceKey}_hero`;

  return (
    <section
      id="hero"
      aria-labelledby="service-hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600 text-white"
    >
      {/* Fondo decorativo sin imagen: dejamos las fotos para más adelante */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "34px 34px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-teal-950/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Ruta de navegación"
          className="mb-8 text-sm text-white/65"
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Inicio
              </Link>
            </li>

            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>

            <li>
              <Link
                href="/tratamientos"
                className="hover:text-white transition-colors"
              >
                Tratamientos
              </Link>
            </li>

            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>

            <li className="text-white" aria-current="page">
              {breadcrumbLabel}
            </li>
          </ol>
        </nav>

        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm">
            {eyebrow}
          </p>

          <h1
            id="service-hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
          >
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-teal-50/85">
            {subtitle}
          </p>

          {highlights.length > 0 && (
            <ul
              className="mt-7 flex flex-wrap gap-2.5"
              aria-label="Puntos destacados"
            >
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-medium text-white/90"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`tel:${clinic.contact.phone}`}
              onClick={() => {
                trackPhoneCall(trackingLocation);
                trackCtaClick("llamar", trackingLocation);
              }}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl bg-white px-7 py-3.5 text-base font-bold text-teal-700 shadow-xl transition-all duration-200 hover:bg-teal-50 hover:shadow-2xl active:bg-gray-100"
              aria-label={`Llamar para pedir cita: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="sm:hidden">{clinic.contact.phoneDisplay}</span>
              <span className="hidden sm:inline">
                Llamar: {clinic.contact.phoneDisplay}
              </span>
            </a>

            <a
              href="#ubicacion"
              onClick={() => {
                trackMapClick();
                trackCtaClick("ver_ubicacion", trackingLocation);
              }}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl border-2 border-white/35 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Ver ubicación y horarios
            </a>
          </div>
        </div>

        <a
          href="#contenido"
          className="mt-12 inline-flex items-center gap-2 text-sm font-semibold text-white/65 transition-colors hover:text-white"
          aria-label="Ir al contenido del tratamiento"
        >
          Ver información del tratamiento
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      {/* Transición inferior */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 leading-none"
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-16 w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,42 C240,82 480,10 720,42 C960,76 1200,16 1440,42 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}