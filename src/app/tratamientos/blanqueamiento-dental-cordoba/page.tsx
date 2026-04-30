import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/blanqueamiento-dental-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es un blanqueamiento dental?",
    answer:
      "El blanqueamiento dental es un tratamiento estético que busca aclarar el color de los dientes naturales mediante productos específicos de uso odontológico. Antes de realizarlo es necesario valorar el estado de dientes y encías.",
  },
  {
    question: "¿Todo el mundo puede hacerse un blanqueamiento dental?",
    answer:
      "No siempre. Antes de indicar un blanqueamiento hay que revisar si existen caries, sensibilidad, enfermedad periodontal, restauraciones visibles o tinciones que no respondan bien al tratamiento. La valoración previa es importante para evitar expectativas irreales.",
  },
  {
    question: "¿El blanqueamiento dental daña el esmalte?",
    answer:
      "Cuando está indicado y se realiza con supervisión profesional, el blanqueamiento dental no debería dañar el esmalte. Es importante evitar productos no controlados o tratamientos sin valoración odontológica.",
  },
  {
    question: "¿Cuánto dura el resultado del blanqueamiento?",
    answer:
      "La duración depende de los hábitos del paciente, la higiene oral, el consumo de café, té, vino, tabaco u otros pigmentos, y las revisiones de mantenimiento. Con buenos cuidados, el resultado puede mantenerse durante más tiempo.",
  },
  {
    question: "¿El blanqueamiento funciona en empastes, coronas o carillas?",
    answer:
      "No. El blanqueamiento actúa sobre el diente natural, pero no cambia el color de empastes, coronas, carillas o prótesis. Por eso es importante revisar la sonrisa antes de planificar el tratamiento.",
  },
  {
    question: "¿Puede causar sensibilidad dental?",
    answer:
      "Puede aparecer sensibilidad temporal durante o después del tratamiento, especialmente en pacientes predispuestos. En la valoración se revisa este riesgo y se dan pautas para reducir molestias.",
  },
];

const relatedServices = [
  {
    title: "Estética dental en Córdoba",
    description:
      "Tratamientos para mejorar la armonía de la sonrisa de forma natural y personalizada.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
  {
    title: "Carillas dentales",
    description:
      "Tratamiento estético para modificar forma, color o pequeñas irregularidades dentales.",
    href: "/tratamientos/carillas-dentales-cordoba",
  },
  {
    title: "Limpieza dental",
    description:
      "Higiene profesional para eliminar placa, sarro y manchas superficiales.",
    href: "/tratamientos/limpieza-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Blanqueamiento Dental en Córdoba",
  description:
    "Blanqueamiento dental en Córdoba para mejorar el color de los dientes naturales con valoración previa y supervisión profesional.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Blanqueamiento Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamiento de blanqueamiento dental en Córdoba para aclarar el color de los dientes naturales tras valoración clínica.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blanqueamiento Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Blanqueamiento dental profesional en Córdoba con valoración previa y atención personalizada.",
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

export default function BlanqueamientoDentalCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Blanqueamiento dental en Córdoba"
        description="Tratamiento de blanqueamiento dental en Córdoba para mejorar el color de los dientes naturales mediante valoración previa y supervisión profesional."
        url={pageUrl}
        serviceType="Dental bleaching"
        breadcrumbLabel="Blanqueamiento dental en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Blanqueamiento dental en Córdoba"
        subtitle="Tratamiento estético para aclarar el color de los dientes naturales, siempre tras una valoración previa de dientes, encías y sensibilidad."
        serviceKey="blanqueamiento_dental"
        breadcrumbLabel="Blanqueamiento dental"
        highlights={[
          "Valoración previa",
          "Dientes naturales",
          "Supervisión profesional",
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
                  Estética de la sonrisa
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Mejorar el color de los dientes con criterio clínico
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    El blanqueamiento dental es uno de los tratamientos estéticos más
                    demandados para mejorar el color de los dientes naturales. Su objetivo
                    es aclarar la sonrisa de forma controlada, sin perder naturalidad.
                  </p>

                  <p>
                    Antes de realizarlo, en la Clínica Dental Dr. Rafael Godoy valoramos
                    el estado de dientes y encías, la presencia de restauraciones visibles,
                    el tipo de tinción y la sensibilidad dental. Así podemos indicar si el
                    tratamiento es adecuado y explicar expectativas realistas.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Quieres aclarar tu sonrisa?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar si el
                  blanqueamiento dental es adecuado para tu caso.
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

        {/* Cuándo valorar blanqueamiento */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Indicaciones
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo valorar un blanqueamiento dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                El blanqueamiento puede ser una opción si el color dental es adecuado
                para este tipo de tratamiento y existe una buena salud oral previa.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Dientes oscurecidos con el tiempo",
                  text: "El paso de los años y determinados hábitos pueden modificar el tono natural de los dientes.",
                },
                {
                  title: "Manchas por café, té o tabaco",
                  text: "Algunas tinciones externas pueden mejorar con higiene profesional y, si procede, blanqueamiento.",
                },
                {
                  title: "Búsqueda de sonrisa más luminosa",
                  text: "Puede ayudar a conseguir una sonrisa más clara manteniendo un resultado natural.",
                },
                {
                  title: "Antes de tratamientos estéticos",
                  text: "A veces se valora antes de realizar restauraciones visibles para ajustar el color final.",
                },
                {
                  title: "Sin caries ni encías inflamadas",
                  text: "Es importante que la boca esté sana antes de iniciar un tratamiento de blanqueamiento.",
                },
                {
                  title: "Expectativas realistas",
                  text: "No todos los dientes responden igual; por eso se explica qué resultado puede esperarse.",
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
                Cómo trabajamos el blanqueamiento dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Valoramos primero la salud oral y el tipo de tinción para indicar un
                tratamiento adecuado y seguro.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración previa",
                  text: "Revisamos dientes, encías, sensibilidad y restauraciones visibles.",
                },
                {
                  number: "02",
                  title: "Diagnóstico del color",
                  text: "Analizamos el tipo de tinción y explicamos expectativas realistas.",
                },
                {
                  number: "03",
                  title: "Tratamiento indicado",
                  text: "Se pauta el blanqueamiento más adecuado según el caso y la respuesta esperada.",
                },
                {
                  number: "04",
                  title: "Mantenimiento",
                  text: "Indicamos cuidados para prolongar el resultado y reducir sensibilidad o recaídas de color.",
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
                Beneficios del blanqueamiento dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Cuando está indicado, puede mejorar el tono de los dientes naturales de
                forma controlada y conservadora.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Sonrisa más luminosa",
                  text: "Puede aclarar el tono de los dientes naturales y mejorar la percepción estética de la sonrisa.",
                },
                {
                  title: "Tratamiento conservador",
                  text: "No modifica la forma dental ni requiere tallado de los dientes naturales.",
                },
                {
                  title: "Resultado personalizado",
                  text: "La respuesta varía según el color inicial, el tipo de tinción y los hábitos del paciente.",
                },
                {
                  title: "Compatible con un plan estético",
                  text: "Puede formar parte de una planificación estética más amplia cuando el caso lo requiere.",
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
                <strong className="text-gray-950">Nota importante:</strong> el
                blanqueamiento no cambia el color de empastes, coronas, carillas o
                prótesis. Por eso es importante revisar la sonrisa completa antes de
                iniciar el tratamiento.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre blanqueamiento dental antes de pedir una valoración."
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
                  Blanqueamiento dental en Córdoba centro
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
                  Valoración para blanqueamiento dental
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Antes de iniciar el tratamiento, valoramos si tus dientes son candidatos
                  y qué resultado puede esperarse de forma realista.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de dientes y encías.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Valoración de sensibilidad dental.
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