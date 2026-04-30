"use client";

import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  CircleDot,
  Drill,
  HeartPulse,
  Microscope,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clinic } from "@/config/clinic";
import {
  primaryTreatments,
  secondaryTreatments,
  type Treatment,
} from "@/config/treatments";
import { trackPhoneCall } from "@/lib/analytics";

const iconByTreatmentId: Record<string, LucideIcon> = {
  ortodoncia: Smile,
  endodoncia: Microscope,
  "implantes-dentales": Drill,
  "estetica-dental": Sparkles,
  "blanqueamiento-dental": Sparkles,
  "limpieza-dental": CircleDot,
  periodoncia: HeartPulse,
  "protesis-dental": Shield,
  "ortodoncia-infantil": Braces,
  "carillas-dentales": Sparkles,
  "ferula-descarga-bruxismo": Stethoscope,
  "empastes-dentales": CircleDot,
  "revision-dental": CheckCircle2,
  "extracciones-dentales": CircleDot,
};

function TreatmentCard({ treatment, index }: { treatment: Treatment; index: number }) {
  const Icon = iconByTreatmentId[treatment.id] ?? CircleDot;

  return (
    <li
      data-reveal
      data-reveal-delay={index > 0 ? String(index * 80) : undefined}
    >
      <Link
        href={treatment.href}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-6 text-left shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_14px_34px_rgba(0,0,0,0.10)]"
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-teal-500 transition-transform duration-300 group-hover:scale-x-100"
        />

        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-transform duration-300 group-hover:scale-105">
            <Icon className="h-5 w-5" strokeWidth={1.7} />
          </div>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-gray-500">
            {treatment.category}
          </span>
        </div>

        <h3 className="text-[16px] font-bold leading-snug text-gray-950 transition-colors group-hover:text-teal-700">
          {treatment.shortTitle}
        </h3>

        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-gray-600">
          {treatment.description}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-teal-700">
          Ver tratamiento
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </li>
  );
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="bg-gray-50 py-14 md:py-20"
    >
      <Container>
        <SectionHeader
          id="servicios-heading"
          badge="Nuestros tratamientos"
          title="Tratamientos dentales en Córdoba"
          subtitle="Tu dentista de confianza en Córdoba. Valoramos cada caso de forma personalizada y te orientamos hacia el tratamiento más adecuado."
        />

        {/* Tratamientos principales */}
        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {primaryTreatments.map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              index={index}
            />
          ))}
        </ul>

        {/* Tratamientos secundarios */}
        <div
          data-reveal
          className="mt-10 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                También puedes consultar
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-gray-950">
                Otros servicios habituales
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Además de los tratamientos principales, puedes consultar servicios de
                prevención, estética, restauración dental y valoración de problemas
                concretos.
              </p>
            </div>

            <Link
              href="/tratamientos"
              className="inline-flex min-h-[44px] shrink-0 items-center justify-center gap-2 rounded-full bg-gray-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-gray-800"
            >
              Ver todos los tratamientos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {secondaryTreatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={treatment.href}
                className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
              >
                {treatment.shortTitle}
              </Link>
            ))}
          </div>
        </div>

        {/* CTA de sección */}
        <div
          data-reveal
          className="mt-12 rounded-3xl bg-gradient-to-br from-teal-700 to-teal-900 px-6 py-8 text-center text-white shadow-lg md:px-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-100/80">
            Atención personalizada
          </p>

          <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            ¿No sabes qué tratamiento necesitas?
          </h3>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-teal-50/80 md:text-base">
            Llámanos y te orientaremos sobre disponibilidad y próximos pasos para valorar
            tu caso en consulta.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${clinic.contact.phone}`}
              onClick={() => trackPhoneCall("services_section")}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-teal-700 transition-colors hover:bg-teal-50"
              aria-label={`Llamar: ${clinic.contact.phoneDisplay}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Llamar: {clinic.contact.phoneDisplay}
            </a>

            <Link
              href="/#contacto"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Ver contacto
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
