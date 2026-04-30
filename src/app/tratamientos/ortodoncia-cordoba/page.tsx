import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/ortodoncia-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Cuánto tiempo dura un tratamiento de ortodoncia?",
    answer:
      "La duración depende de la complejidad del caso, la edad del paciente y el tipo de ortodoncia utilizado. Los tratamientos sencillos pueden durar alrededor de 12 a 18 meses, mientras que los casos más complejos pueden necesitar más tiempo. En la valoración inicial se explica una estimación personalizada.",
  },
  {
    question: "¿La ortodoncia duele?",
    answer:
      "Es habitual notar presión o molestias leves los primeros días tras colocar la ortodoncia o después de algunas revisiones. Normalmente son molestias temporales y controlables. Si aparece dolor intenso o persistente, conviene consultarlo con la clínica.",
  },
  {
    question: "¿Pueden llevar ortodoncia los adultos?",
    answer:
      "Sí. La ortodoncia no es exclusiva de niños o adolescentes. Muchos adultos pueden mejorar la alineación dental, la mordida y la estética de la sonrisa mediante un tratamiento adaptado a su situación oral.",
  },
  {
    question: "¿Cuándo debería llevar un niño al ortodoncista?",
    answer:
      "Una primera revisión de ortodoncia suele ser recomendable durante la etapa de crecimiento, especialmente si se observan dientes muy apiñados, mordida cruzada, dificultad al masticar o hábitos que puedan afectar al desarrollo dental.",
  },
  {
    question: "¿Qué tipos de ortodoncia existen?",
    answer:
      "Según el caso, pueden valorarse opciones como brackets metálicos, brackets estéticos u otros sistemas de alineación. La elección depende del diagnóstico, los objetivos del tratamiento y las necesidades de cada paciente.",
  },
  {
    question: "¿Qué pasa después de terminar la ortodoncia?",
    answer:
      "Al finalizar el tratamiento es importante usar retenedores según la indicación clínica. La retención ayuda a mantener los dientes en su nueva posición y reduce el riesgo de que vuelvan a moverse con el tiempo.",
  },
];

const relatedServices = [
  {
    title: "Endodoncia en Córdoba",
    description:
      "Tratamiento de conductos para conservar dientes afectados por infección o lesión pulpar.",
    href: "/tratamientos/endodoncia-cordoba",
  },
  {
    title: "Estética dental",
    description:
      "Tratamientos orientados a mejorar la armonía de la sonrisa de forma natural.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
  {
    title: "Implantes dentales",
    description:
      "Soluciones para reponer dientes perdidos y recuperar función masticatoria.",
    href: "/tratamientos/implantes-dentales-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Ortodoncia en Córdoba",
  description:
    "Ortodoncia en Córdoba para niños, adolescentes y adultos. Valoración personalizada, seguimiento clínico y opciones de tratamiento adaptadas a cada paciente.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Ortodoncia en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamientos de ortodoncia en Córdoba con valoración personalizada y seguimiento clínico en Clínica Dental Dr. Rafael Godoy.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortodoncia en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Ortodoncia para niños, adolescentes y adultos en Córdoba. Valoración personalizada y atención cercana.",
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

export default function OrtodonciaCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Ortodoncia en Córdoba"
        description="Tratamiento de ortodoncia en Córdoba para mejorar la alineación dental, la mordida y la estética de la sonrisa mediante una valoración clínica personalizada."
        url={pageUrl}
        serviceType="Orthodontics"
        breadcrumbLabel="Ortodoncia en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Ortodoncia en Córdoba"
        subtitle="Tratamientos de ortodoncia para niños, adolescentes y adultos, con valoración personalizada y seguimiento clínico en la Clínica Dental Dr. Rafael Godoy."
        serviceKey="ortodoncia"
        breadcrumbLabel="Ortodoncia"
        highlights={[
          "Niños, adolescentes y adultos",
          "Valoración personalizada",
          "Seguimiento clínico",
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
                  Tratamiento personalizado
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Alinear los dientes también es cuidar la salud oral
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La ortodoncia permite corregir la posición de los dientes y mejorar
                    la mordida. Además del beneficio estético, una correcta alineación
                    facilita la higiene diaria, ayuda a distribuir mejor las fuerzas al
                    masticar y puede prevenir desgastes o molestias asociadas a una mala
                    oclusión.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos cada caso de forma
                    individual. No todos los pacientes necesitan el mismo tipo de
                    ortodoncia ni los mismos tiempos de tratamiento, por eso la primera
                    fase siempre es un diagnóstico clínico y una explicación clara de las
                    opciones disponibles.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  Pide una valoración de ortodoncia
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar tu caso en
                  consulta.
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
                Indicaciones habituales
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo acudir al ortodoncista?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Existen señales que pueden indicar la necesidad de una valoración de
                ortodoncia. Estas son algunas de las situaciones más habituales.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Dientes apiñados o separados",
                  text: "Cuando los dientes no tienen una posición adecuada, puede ser más difícil limpiar correctamente y mantener una buena salud oral.",
                },
                {
                  title: "Mordida cruzada, abierta o profunda",
                  text: "Las alteraciones de la mordida pueden afectar a la masticación, al desgaste dental y a la estabilidad de la boca.",
                },
                {
                  title: "Revisión en edad de crecimiento",
                  text: "En niños y adolescentes, una valoración temprana puede ayudar a detectar problemas de desarrollo dental o mandibular.",
                },
                {
                  title: "Dificultad para la higiene",
                  text: "El apiñamiento puede impedir que el cepillo o el hilo dental lleguen bien a determinadas zonas.",
                },
                {
                  title: "Preparación para otros tratamientos",
                  text: "En algunos casos, alinear los dientes puede facilitar tratamientos posteriores como prótesis, estética o implantes.",
                },
                {
                  title: "Motivo estético o funcional",
                  text: "La ortodoncia puede mejorar la apariencia de la sonrisa, pero también la función y la comodidad al morder.",
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
                Cómo trabajamos la ortodoncia
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Un proceso claro, explicado desde el principio y adaptado a las
                necesidades de cada paciente.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración inicial",
                  text: "Revisamos la posición dental, la mordida y las necesidades del paciente.",
                },
                {
                  number: "02",
                  title: "Diagnóstico y plan",
                  text: "Explicamos las opciones de tratamiento, tiempos aproximados y objetivos.",
                },
                {
                  number: "03",
                  title: "Tratamiento activo",
                  text: "Realizamos las revisiones necesarias para controlar la evolución del caso.",
                },
                {
                  number: "04",
                  title: "Retención",
                  text: "Al finalizar, indicamos retenedores para ayudar a mantener los resultados.",
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
                Beneficios de la ortodoncia
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                El resultado depende de cada caso, pero una ortodoncia bien planificada
                puede aportar mejoras funcionales, higiénicas y estéticas.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Mejor higiene diaria",
                  text: "Los dientes alineados suelen facilitar el cepillado y el uso de seda dental o cepillos interdentales.",
                },
                {
                  title: "Mordida más equilibrada",
                  text: "Una buena oclusión ayuda a repartir mejor las fuerzas de la masticación.",
                },
                {
                  title: "Menor riesgo de desgastes",
                  text: "Algunas malposiciones pueden favorecer desgastes dentales o sobrecargas.",
                },
                {
                  title: "Mejora estética de la sonrisa",
                  text: "La alineación dental puede mejorar la armonía de la sonrisa y la confianza al sonreír.",
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
                <strong className="text-gray-950">Nota importante:</strong> cada caso
                debe valorarse individualmente. La duración, el tipo de ortodoncia y los
                resultados esperables dependen del diagnóstico clínico y del seguimiento
                del tratamiento.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre ortodoncia antes de pedir una valoración."
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
                  Ortodoncia en Córdoba centro
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
                  Primera valoración de ortodoncia
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si tienes dudas sobre si necesitas ortodoncia, lo adecuado es valorar
                  tu caso en consulta. Te explicaremos las opciones posibles y resolveremos
                  tus preguntas antes de iniciar cualquier tratamiento.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Valoración personalizada.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Explicación clara del tratamiento.
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