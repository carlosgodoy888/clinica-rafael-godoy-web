import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/protesis-dental-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es una prótesis dental?",
    answer:
      "Una prótesis dental es un tratamiento diseñado para reponer uno o varios dientes perdidos o restaurar piezas muy deterioradas. Puede ser fija, removible o apoyada sobre implantes, según las necesidades de cada paciente.",
  },
  {
    question: "¿Qué tipos de prótesis dentales existen?",
    answer:
      "Existen prótesis fijas, coronas, puentes, prótesis removibles y prótesis sobre implantes. La elección depende del número de dientes ausentes, el estado de la boca, la estabilidad necesaria y las preferencias del paciente.",
  },
  {
    question: "¿Qué diferencia hay entre una corona y una prótesis?",
    answer:
      "Una corona restaura y protege un diente dañado o tratado, mientras que una prótesis puede sustituir dientes ausentes. En algunos casos, las coronas también forman parte de rehabilitaciones más amplias.",
  },
  {
    question: "¿Una prótesis dental se nota al hablar o sonreír?",
    answer:
      "El objetivo es que la prótesis se integre de forma natural con la sonrisa y permita hablar y masticar con comodidad. El resultado depende del diseño, los materiales, el ajuste y la adaptación del paciente.",
  },
  {
    question: "¿Cuánto tiempo dura una prótesis dental?",
    answer:
      "La duración depende del tipo de prótesis, los materiales, la higiene, el mantenimiento, la fuerza de mordida y las revisiones. Las prótesis necesitan controles periódicos para comprobar ajuste, desgaste y salud de encías o implantes.",
  },
  {
    question: "¿Qué cuidados necesita una prótesis dental?",
    answer:
      "Depende del tipo de prótesis. En general, requiere higiene diaria, revisiones periódicas y mantenimiento profesional. Las prótesis removibles también necesitan limpieza específica fuera de la boca.",
  },
];

const relatedServices = [
  {
    title: "Implantes dentales",
    description:
      "Tratamientos para reponer dientes perdidos y mejorar la estabilidad de rehabilitaciones.",
    href: "/tratamientos/implantes-dentales-cordoba",
  },
  {
    title: "Endodoncia en Córdoba",
    description:
      "Tratamiento de conductos para intentar conservar dientes afectados antes de valorar su sustitución.",
    href: "/tratamientos/endodoncia-cordoba",
  },
  {
    title: "Estética dental",
    description:
      "Tratamientos para mejorar la armonía de la sonrisa y la apariencia de las restauraciones visibles.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Prótesis Dental en Córdoba",
  description:
    "Prótesis dental en Córdoba para reponer dientes perdidos o restaurar piezas dañadas. Coronas, puentes y prótesis personalizadas.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Prótesis Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamientos de prótesis dental en Córdoba: coronas, puentes, prótesis removibles y rehabilitaciones personalizadas.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Prótesis Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Prótesis dental en Córdoba para recuperar función, estética y comodidad al masticar.",
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

export default function ProtesisDentalCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Prótesis dental en Córdoba"
        description="Tratamientos de prótesis dental en Córdoba para reponer dientes perdidos, restaurar piezas dañadas y recuperar función masticatoria y estética."
        url={pageUrl}
        serviceType="Prosthodontics"
        breadcrumbLabel="Prótesis dental en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Prótesis dental en Córdoba"
        subtitle="Tratamientos para reponer dientes perdidos, restaurar piezas dañadas y recuperar función, estética y comodidad al masticar."
        serviceKey="protesis_dental"
        breadcrumbLabel="Prótesis dental"
        highlights={[
          "Coronas y puentes",
          "Prótesis removibles",
          "Rehabilitación dental",
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
                  Rehabilitación dental
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Recuperar dientes, función y estética con una prótesis adecuada
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La prótesis dental permite restaurar dientes dañados o reponer piezas
                    perdidas para mejorar la masticación, la estética y la comodidad al
                    hablar. Cada caso necesita una planificación específica, porque no
                    todos los pacientes requieren el mismo tipo de prótesis.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos el estado de los
                    dientes, encías, mordida y necesidades funcionales antes de proponer
                    una solución. El objetivo es conseguir una rehabilitación estable,
                    cómoda y lo más natural posible.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Necesitas reponer o restaurar dientes?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar la mejor opción
                  protésica para tu caso.
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

        {/* Tipos de prótesis */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Opciones de tratamiento
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Tipos de prótesis dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                La elección depende del número de dientes afectados, la estabilidad
                necesaria, el estado de la boca y los objetivos del paciente.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Coronas dentales",
                  text: "Restauran y protegen dientes dañados, debilitados o previamente tratados.",
                },
                {
                  title: "Puentes dentales",
                  text: "Permiten reponer una o varias piezas apoyándose en dientes o estructuras preparadas.",
                },
                {
                  title: "Prótesis removibles",
                  text: "Soluciones que el paciente puede retirar para su higiene y mantenimiento diario.",
                },
                {
                  title: "Prótesis sobre implantes",
                  text: "Rehabilitaciones apoyadas en implantes para mejorar estabilidad y función.",
                },
                {
                  title: "Rehabilitación completa",
                  text: "Casos más amplios que requieren recuperar función, mordida y estética de forma global.",
                },
                {
                  title: "Restauraciones estéticas",
                  text: "Tratamientos visibles diseñados para integrarse de forma natural con la sonrisa.",
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
                Cómo trabajamos la prótesis dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Planificamos cada rehabilitación teniendo en cuenta función, estética,
                comodidad y mantenimiento a largo plazo.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración inicial",
                  text: "Revisamos dientes, encías, ausencias dentales, mordida y necesidades del paciente.",
                },
                {
                  number: "02",
                  title: "Plan de tratamiento",
                  text: "Explicamos las opciones protésicas posibles, ventajas, limitaciones y fases.",
                },
                {
                  number: "03",
                  title: "Diseño y adaptación",
                  text: "Se prepara la rehabilitación buscando ajuste, estética y comodidad.",
                },
                {
                  number: "04",
                  title: "Revisión y mantenimiento",
                  text: "Controlamos el ajuste de la prótesis y pautamos cuidados para mantenerla correctamente.",
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
                Beneficios
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Beneficios de una prótesis bien planificada
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Una prótesis dental adecuada puede ayudar a recuperar función, estética
                y estabilidad oral.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Recuperar la masticación",
                  text: "Reponer dientes ausentes o restaurar piezas dañadas puede mejorar la comodidad al comer.",
                },
                {
                  title: "Mejorar la estética",
                  text: "Las restauraciones visibles se diseñan para integrarse con el resto de la sonrisa.",
                },
                {
                  title: "Proteger dientes debilitados",
                  text: "Las coronas pueden ayudar a proteger piezas muy deterioradas o reconstruidas.",
                },
                {
                  title: "Mejorar estabilidad oral",
                  text: "Una rehabilitación adecuada puede ayudar a equilibrar la mordida y evitar sobrecargas.",
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
                <strong className="text-gray-950">Nota importante:</strong> el tipo de
                prótesis más adecuado depende del diagnóstico. Antes de elegir una opción
                es necesario valorar dientes, encías, hueso, mordida y mantenimiento.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre prótesis dental antes de pedir una valoración."
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
                  Prótesis dental en Córdoba centro
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
                  Valoración de prótesis dental
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si te faltan dientes, tienes una prótesis incómoda o necesitas restaurar
                  piezas dañadas, podemos valorar qué opción se adapta mejor a tu caso.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Valoración de dientes, encías y mordida.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Explicación de opciones protésicas.
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