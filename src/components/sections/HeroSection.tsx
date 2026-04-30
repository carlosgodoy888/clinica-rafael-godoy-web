import Link from "next/link";
import { Phone, MapPin, Star, ChevronDown, ArrowRight } from "lucide-react";
import { clinic } from "@/config/clinic";
import { Container } from "@/components/ui/Container";

const trustStats = [
  { value: "35+", label: "Años en Córdoba" },
  { value: "5.000+", label: "Pacientes tratados" },
  { value: "14", label: "Tratamientos dentales" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden"
    >
      {/* Fondo */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-700 to-teal-600" />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "36px 36px",
        }}
      />
      <div aria-hidden="true" className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-teal-500/15 blur-3xl -translate-y-1/3 translate-x-1/4" />
      <div aria-hidden="true" className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-900/40 blur-3xl translate-y-1/3 -translate-x-1/4" />

      {/* Contenido principal */}
      <Container className="relative z-10 flex-1 flex items-center pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="w-full max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-7 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" aria-hidden="true" />
            Clínica Dental en Córdoba — Abiertos desde 1991
          </div>

          {/* H1 con keyword principal al inicio */}
          <h1
            id="hero-heading"
            className="text-[1.9rem] sm:text-4xl lg:text-[3rem] font-bold text-white leading-[1.1] tracking-tight"
          >
            Clínica Dental en Córdoba
            <br className="hidden sm:block" />
            <span className="text-teal-200"> Dr. Rafael Godoy</span>
            <br />
            <span className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold text-white/85 tracking-normal">
              Más de 35 años cuidando tu sonrisa
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-4 text-base md:text-lg text-teal-100 font-medium">
            Dentista y Especialista en Estomatología · Universidad de Montpellier
          </p>

          {/* Prueba social */}
          <div className="mt-5 inline-flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/15">
              <div className="flex gap-0.5" aria-label="Valoración media 5 estrellas" role="img">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <span className="text-white text-sm font-semibold">4,9/5</span>
              <span className="text-white/60 text-sm">· pacientes satisfechos</span>
            </div>
          </div>

          {/* Descripción con keywords locales */}
          <p className="mt-5 text-sm md:text-base text-white/70 leading-relaxed max-w-2xl mx-auto">
            Tu dentista de confianza en el centro de Córdoba, junto a{" "}
            <strong className="text-white/90 font-semibold">Plaza de Andalucía</strong>.
            Tratamientos personalizados de ortodoncia, implantes dentales, endodoncia,
            estética dental, limpieza, periodoncia y prótesis.
          </p>

          {/* CTAs principales */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href={`tel:${clinic.contact.phone}`}
              className="group inline-flex items-center justify-center gap-2.5 bg-white hover:bg-teal-50 active:bg-gray-100 text-teal-700 font-bold text-base px-7 py-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-200 min-h-[52px] whitespace-nowrap"
              aria-label={`Llamar y pedir cita: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="w-4 h-4 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="sm:hidden">{clinic.contact.phoneDisplay}</span>
              <span className="hidden sm:inline">Llamar: {clinic.contact.phoneDisplay}</span>
            </a>

            <Link
              href="/tratamientos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 min-h-[52px] whitespace-nowrap"
            >
              Ver tratamientos
              <ArrowRight className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            </Link>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/25 hover:border-white/70 text-white/90 hover:bg-white/10 font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 min-h-[52px] whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
              Ubicación y horarios
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 pt-6 border-t border-white/15">
            <dl className="flex flex-wrap justify-center gap-6 md:gap-14">
              {trustStats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <dt className="text-2xl md:text-3xl font-bold text-white">{value}</dt>
                  <dd className="mt-0.5 text-xs sm:text-sm text-teal-200">{label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#credenciales"
          className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white/80 transition-colors group"
          aria-label="Ver siguiente sección"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Descubre más</span>
          <ChevronDown
            className="w-5 h-5 animate-bounce group-hover:animate-none"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Onda de transición → CredentialsSection (blanco) */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 z-10 leading-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "72px" }}
        >
          <path
            d="M0,36 C240,72 480,0 720,36 C960,72 1200,12 1440,36 L1440,72 L0,72 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}