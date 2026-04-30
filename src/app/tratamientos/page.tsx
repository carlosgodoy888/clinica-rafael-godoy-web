import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Braces,
  CheckCircle2,
  CircleDot,
  Drill,
  HeartPulse,
  MapPin,
  Microscope,
  Phone,
  Shield,
  Smile,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import {
  primaryTreatments,
  secondaryTreatments,
  treatments,
  type Treatment,
} from "@/config/treatments";

const pageUrl = `${site.domain}/tratamientos`;

export const metadata: Metadata = {
  title: "Tratamientos Dentales en Córdoba",
  description:
    "Tratamientos dentales en Córdoba: ortodoncia, endodoncia, implantes, estética dental, blanqueamiento, limpieza, periodoncia, prótesis y más.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Tratamientos Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Consulta los tratamientos dentales disponibles en Clínica Dental Dr. Rafael Godoy: ortodoncia, endodoncia, implantes, estética dental, periodoncia y más.",
    url: pageUrl,
    type: "website",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Tratamientos Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamientos dentales en Córdoba con valoración personalizada y atención cercana.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

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

function TreatmentCard({
  treatment,
  compact = false,
}: {
  treatment: Treatment;
  compact?: boolean;
}) {
  const Icon = iconByTreatmentId[treatment.id] ?? CircleDot;

  return (
    <Link
      href={treatment.href}
      className="group relative flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg"
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 transition-transform duration-200 group-hover:scale-105"
          aria-hidden="true"
        >
          <Icon className="h-5 w-5" strokeWidth={1.7} />
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gray-500">
          {treatment.category}
        </span>
      </div>

      <h2
        className={
          compact
            ? "text-lg font-bold leading-tight text-gray-950 transition-colors group-hover:text-teal-700"
            : "text-xl font-bold leading-tight text-gray-950 transition-colors group-hover:text-teal-700"
        }
      >
        {treatment.shortTitle}
      </h2>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
        {treatment.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
        Ver tratamiento
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

function TreatmentsSchema() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#itemlist`,
    name: "Tratamientos dentales en Córdoba",
    itemListElement: treatments.map((treatment, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: treatment.title,
      url: `${site.domain}${treatment.href}`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tratamientos",
        item: pageUrl,
      },
    ],
  };

  return (
    <>
      {[itemListSchema, breadcrumbSchema].map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function TratamientosPage() {
  return (
    <>
      <TreatmentsSchema />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600 text-white">
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

          <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-36 lg:px-8">
            <nav
              aria-label="Ruta de navegación"
              className="mb-8 text-sm text-white/65"
            >
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white" aria-current="page">
                  Tratamientos
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm">
                Servicios dentales en Córdoba
              </p>

              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Tratamientos dentales en Córdoba
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-teal-50/85 sm:text-lg">
                Consulta los principales tratamientos disponibles en la Clínica Dental
                Dr. Rafael Godoy. Cada caso se valora de forma personalizada para indicar
                la opción más adecuada.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${clinic.contact.phone}`}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl bg-white px-7 py-3.5 text-base font-bold text-teal-700 shadow-xl transition-all duration-200 hover:bg-teal-50"
                  aria-label={`Llamar para pedir cita: ${clinic.contact.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar: {clinic.contact.phoneDisplay}
                </a>

                <a
                  href={clinic.contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-2xl border-2 border-white/35 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamientos principales */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Tratamientos principales
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Servicios dentales más consultados
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estos son los tratamientos principales de la clínica. Puedes entrar en
                cada página para ver información detallada, dudas frecuentes y cómo pedir
                cita.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {primaryTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} />
              ))}
            </div>
          </div>
        </section>

        {/* Tratamientos complementarios */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Otros servicios
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Tratamientos complementarios y revisiones
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Además de los tratamientos principales, puedes consultar otros servicios
                habituales orientados a prevención, estética, restauración y salud oral.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryTreatments.map((treatment) => (
                <TreatmentCard key={treatment.id} treatment={treatment} compact />
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-teal-950 py-16 text-white md:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-200/70">
              Atención personalizada
            </p>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              ¿No sabes qué tratamiento necesitas?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-teal-50/75">
              Lo adecuado es valorar tu caso en consulta. Llámanos y te orientaremos
              sobre disponibilidad y próximos pasos.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={`tel:${clinic.contact.phone}`}
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-base font-bold text-teal-700 transition-colors hover:bg-teal-50"
                aria-label={`Llamar a la clínica: ${clinic.contact.phoneDisplay}`}
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar: {clinic.contact.phoneDisplay}
              </a>

              <Link
                href="/#contacto"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border border-white/30 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                Ver contacto
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
