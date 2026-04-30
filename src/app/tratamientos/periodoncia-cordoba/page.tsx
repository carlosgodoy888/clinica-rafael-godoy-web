import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/periodoncia-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es la periodoncia?",
    answer:
      "La periodoncia es el área de la odontología que se encarga del diagnóstico, tratamiento y mantenimiento de las enfermedades de las encías y los tejidos que sostienen los dientes, como la gingivitis o la periodontitis.",
  },
  {
    question: "¿Qué diferencia hay entre gingivitis y periodontitis?",
    answer:
      "La gingivitis es una inflamación de las encías que suele ser reversible si se trata a tiempo. La periodontitis es una enfermedad más avanzada que puede afectar al hueso que sostiene los dientes y provocar movilidad dental si no se controla.",
  },
  {
    question: "¿El sangrado de encías es normal?",
    answer:
      "No. Las encías sanas no deberían sangrar de forma habitual al cepillarse o usar seda dental. El sangrado puede indicar inflamación, acumulación de placa o enfermedad periodontal, por lo que conviene revisarlo.",
  },
  {
    question: "¿La periodontitis tiene cura?",
    answer:
      "La periodontitis puede controlarse con diagnóstico, tratamiento y mantenimiento periódico, pero requiere seguimiento. El objetivo es detener la progresión, reducir la inflamación y conservar los dientes el mayor tiempo posible.",
  },
  {
    question: "¿Cada cuánto tiempo hay que hacer mantenimiento periodontal?",
    answer:
      "Depende del riesgo de cada paciente. Algunas personas necesitan mantenimiento cada 3, 4 o 6 meses. La frecuencia se establece según el estado de las encías, higiene, antecedentes y evolución.",
  },
  {
    question: "¿La periodontitis puede causar pérdida de dientes?",
    answer:
      "Sí. Si no se trata, la periodontitis puede destruir progresivamente el soporte de los dientes y provocar movilidad o pérdida dental. Por eso es importante diagnosticarla y controlarla cuanto antes.",
  },
];

const relatedServices = [
  {
    title: "Limpieza dental",
    description:
      "Higiene profesional para eliminar placa, sarro y ayudar a cuidar las encías.",
    href: "/tratamientos/limpieza-dental-cordoba",
  },
  {
    title: "Implantes dentales",
    description:
      "Tratamientos para reponer dientes perdidos cuando no es posible conservar la pieza natural.",
    href: "/tratamientos/implantes-dentales-cordoba",
  },
  {
    title: "Endodoncia en Córdoba",
    description:
      "Tratamiento de conductos para conservar dientes afectados por infección o lesión pulpar.",
    href: "/tratamientos/endodoncia-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Periodoncia en Córdoba",
  description:
    "Periodoncia en Córdoba para tratar encías inflamadas, sangrado, gingivitis y periodontitis. Valoración personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Periodoncia en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamiento de encías en Córdoba para gingivitis, periodontitis, sangrado e inflamación de encías.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Periodoncia en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamiento periodontal en Córdoba para cuidar encías, controlar periodontitis y prevenir pérdida dental.",
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

export default function PeriodonciaCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Periodoncia en Córdoba"
        description="Tratamiento periodontal en Córdoba para diagnosticar, tratar y mantener enfermedades de las encías como gingivitis y periodontitis."
        url={pageUrl}
        serviceType="Periodontics"
        breadcrumbLabel="Periodoncia en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Periodoncia en Córdoba"
        subtitle="Diagnóstico, tratamiento y mantenimiento de encías inflamadas, sangrado gingival, gingivitis y periodontitis con valoración personalizada."
        serviceKey="periodoncia"
        breadcrumbLabel="Periodoncia"
        highlights={[
          "Tratamiento de encías",
          "Gingivitis y periodontitis",
          "Mantenimiento periodontal",
          "Clínica dental en Córdoba centro",
        ]}
      />

      <main id="contenido">
        {/* Introducción */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Salud de las encías
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Cuidar las encías es fundamental para conservar los dientes
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    Las encías y el hueso que rodea los dientes son esenciales para la
                    estabilidad de la boca. Cuando se inflaman o se infectan, pueden
                    aparecer síntomas como sangrado, mal aliento, sensibilidad, retracción
                    de encías o movilidad dental.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos el estado periodontal
                    de cada paciente para diferenciar una inflamación leve de encías de
                    una enfermedad periodontal más avanzada. El objetivo es controlar la
                    inflamación, frenar la progresión y mantener los resultados con revisiones
                    periódicas.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Te sangran las encías?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar el estado de tus
                  encías en consulta.
                </p>

                <a
                  href={`tel:${clinic.contact.phone}`}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-teal-600 px-5 py-3.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-teal-700"
                  aria-label={`Llamar a la clínica: ${clinic.contact.phoneDisplay}`}
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar: {clinic.contact.phoneDisplay}
                </a>

                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  Atención en {clinic.contact.address.street},{" "}
                  {clinic.contact.address.city}.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* Cuándo acudir */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Señales de alerta
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo acudir por un problema de encías?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estos signos pueden indicar inflamación o enfermedad periodontal. Cuanto
                antes se valore, más fácil suele ser controlar el problema.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Sangrado al cepillarte",
                  text: "El sangrado frecuente no debe considerarse normal y suele indicar inflamación gingival.",
                },
                {
                  title: "Encías inflamadas o enrojecidas",
                  text: "La inflamación puede ser un signo de gingivitis o de enfermedad periodontal.",
                },
                {
                  title: "Mal aliento persistente",
                  text: "Puede estar relacionado con acumulación de placa, sarro o bolsas periodontales.",
                },
                {
                  title: "Retracción de encías",
                  text: "Cuando la encía se retrae, los dientes pueden parecer más largos y aumentar la sensibilidad.",
                },
                {
                  title: "Movilidad dental",
                  text: "La movilidad puede indicar pérdida de soporte periodontal y requiere valoración cuanto antes.",
                },
                {
                  title: "Sarro acumulado",
                  text: "El sarro favorece la inflamación y no puede eliminarse con el cepillado convencional.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
                >
                  <CheckCircle2 className="h-6 w-6 text-teal-600" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold text-gray-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo trabajamos */}
        <section className="bg-teal-950 py-16 md:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-200/70">
                Proceso clínico
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Cómo trabajamos la periodoncia
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                La enfermedad periodontal necesita diagnóstico, tratamiento y mantenimiento.
                No basta con una limpieza puntual si el problema es avanzado.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Diagnóstico periodontal",
                  text: "Valoramos encías, sangrado, sarro, movilidad y signos de pérdida de soporte.",
                },
                {
                  number: "02",
                  title: "Control de placa y sarro",
                  text: "Eliminamos depósitos acumulados y explicamos pautas de higiene adaptadas.",
                },
                {
                  number: "03",
                  title: "Tratamiento específico",
                  text: "Si hay periodontitis, se planifica el tratamiento periodontal necesario según el caso.",
                },
                {
                  number: "04",
                  title: "Mantenimiento",
                  text: "Programamos revisiones periódicas para controlar la enfermedad y mantener resultados.",
                },
              ].map((step) => (
                <article
                  key={step.number}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-5xl font-bold text-white/15">{step.number}</p>
                  <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-teal-50/70">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Objetivos
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Beneficios del tratamiento periodontal
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Tratar las encías ayuda a controlar la inflamación, proteger el soporte
                dental y reducir el riesgo de pérdida de dientes.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Control del sangrado",
                  text: "Reducir la inflamación gingival puede disminuir el sangrado al cepillarse o usar seda dental.",
                },
                {
                  title: "Frenar la progresión",
                  text: "El objetivo es detener o ralentizar la pérdida de soporte periodontal cuando existe periodontitis.",
                },
                {
                  title: "Mejorar el aliento",
                  text: "Controlar placa, sarro y bolsas periodontales puede ayudar a mejorar el mal aliento de origen oral.",
                },
                {
                  title: "Conservar dientes",
                  text: "El mantenimiento periodontal es clave para intentar conservar los dientes a largo plazo.",
                },
              ].map((benefit) => (
                <article
                  key={benefit.title}
                  className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <CheckCircle2
                    className="mt-1 h-6 w-6 shrink-0 text-teal-600"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-gray-950">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                      {benefit.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-teal-100 bg-teal-50 p-6">
              <p className="text-sm leading-relaxed text-gray-700">
                <strong className="text-gray-950">Nota importante:</strong> la
                periodontitis requiere seguimiento. Aunque los síntomas mejoren, el
                mantenimiento periódico es fundamental para controlar la enfermedad y
                reducir recaídas.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre encías, gingivitis y periodontitis antes de pedir una valoración."
        />

        {/* Ubicación */}
        <section
          id="ubicacion"
          aria-labelledby="ubicacion-heading"
          className="bg-gray-50 py-16 md:py-24"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Dónde estamos
                </p>

                <h2
                  id="ubicacion-heading"
                  className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950"
                >
                  Periodoncia en Córdoba centro
                </h2>

                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Puedes encontrarnos en {clinic.contact.address.street},{" "}
                  {clinic.contact.address.city}. Llámanos para consultar disponibilidad
                  y pedir cita.
                </p>

                <div className="mt-8 space-y-5">
                  <div className="flex gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-teal-600" aria-hidden="true" />
                    <address className="not-italic text-sm leading-relaxed text-gray-700">
                      <strong className="block text-gray-950">Dirección</strong>
                      {clinic.contact.address.street}
                      <br />
                      {clinic.contact.address.postalCode}{" "}
                      {clinic.contact.address.city}, {clinic.contact.address.country}
                    </address>
                  </div>

                  <div className="flex gap-3">
                    <Clock className="mt-1 h-5 w-5 text-teal-600" aria-hidden="true" />
                    <div className="text-sm leading-relaxed text-gray-700">
                      <strong className="block text-gray-950">Horario</strong>
                      Lunes, martes y jueves: 9:00-14:00 / 17:00-20:30
                      <br />
                      Miércoles y viernes: 9:00-14:00
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={`tel:${clinic.contact.phone}`}
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-teal-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-teal-700"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      Llamar: {clinic.contact.phoneDisplay}
                    </a>

                    <a
                      href={clinic.contact.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-gray-800 transition-colors hover:bg-gray-50"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  Valoración de encías
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si tienes sangrado, inflamación, mal aliento o movilidad dental, lo
                  adecuado es valorar el estado de las encías cuanto antes.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de encías y soporte dental.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Diagnóstico de gingivitis o periodontitis.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Atención en clínica dental en Córdoba centro.
                  </li>
                </ul>

                <Link
                  href="/#contacto"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-gray-950 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-gray-800"
                >
                  Ver datos de contacto
                </Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices services={relatedServices} />
      </main>
    </>
  );
}