import { Star } from "lucide-react";
import { testimonials } from "@/config/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`Valoración: ${rating} de ${max} estrellas`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300 fill-gray-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-heading"
      className="relative py-14 md:py-20 bg-teal-700 overflow-hidden"
    >
      <Container>
        <SectionHeader
          id="testimonios-heading"
          badge="Opiniones reales"
          title="Opiniones de Pacientes de Nuestra Clínica Dental en Córdoba"
          subtitle="35 años cuidando sonrisas cordobesas. La confianza de generaciones de familias de Córdoba es nuestro mejor aval."
          dark
        />

        {/*
          Mobile: carrusel horizontal con scroll-snap (sin JS ni librerías)
          md+:    grid de 2-3 columnas
        */}
        <ul
          className="testimonial-scroll flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-4 md:pb-0 md:mx-0 md:px-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-5"
          role="list"
          aria-label="Opiniones de pacientes"
        >
          {testimonials.map((t) => (
            <li
              key={t.id}
              className="snap-start flex-none w-[82vw] sm:w-[58vw] md:w-auto"
            >
              <article className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg flex flex-col h-full">
                <StarRating rating={t.rating} />

                <blockquote className="mt-3 flex-1">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                <footer className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-3">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="text-xs font-bold text-white">{t.initials}</span>
                  </div>
                  <div className="min-w-0">
                    <cite className="not-italic font-semibold text-gray-900 text-sm block">
                      {t.name}
                    </cite>
                    <p className="text-xs text-gray-500 truncate">
                      Paciente desde {t.since} · {t.treatment}
                    </p>
                  </div>
                </footer>
              </article>
            </li>
          ))}
        </ul>

        {/* Indicador de scroll solo en móvil */}
        <p className="mt-3 text-center text-teal-300 text-xs md:hidden" aria-hidden="true">
          ← Desliza para ver más opiniones →
        </p>

        {/* CTA — pedir cita (no duplica directamente el teléfono del Hero) */}
        <div className="mt-10 text-center">
          <p className="text-teal-100 text-sm mb-4">
            Únete a los miles de cordobeses que confían en el Dr. Rafael Godoy
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white hover:bg-teal-50 text-teal-700 font-bold px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 min-h-[48px] text-sm"
          >
            Pedir cita en la clínica
          </a>
        </div>
      </Container>

      {/* Onda de transición → ContactSection (gray-50 = #F9FAFB) */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 leading-none">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "72px" }}
        >
          <path
            d="M0,36 C240,0 480,72 720,36 C960,0 1200,60 1440,36 L1440,72 L0,72 Z"
            fill="#F9FAFB"
          />
        </svg>
      </div>
    </section>
  );
}
