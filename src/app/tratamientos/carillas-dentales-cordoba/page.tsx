import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/carillas-dentales-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué son las carillas dentales?",
    answer:
      "Las carillas dentales son restauraciones finas que se colocan sobre la superficie visible de los dientes para mejorar forma, color, tamaño o pequeñas irregularidades. Pueden formar parte de un plan de estética dental personalizado.",
  },
  {
    question: "¿Cuándo pueden estar indicadas las carillas?",
    answer:
      "Pueden valorarse en casos de dientes desgastados, fracturas pequeñas, alteraciones de forma, espacios entre dientes, cambios de color que no responden al blanqueamiento o cuando se busca mejorar la armonía de la sonrisa.",
  },
  {
    question: "¿Las carillas son para todo el mundo?",
    answer:
      "No siempre. Antes de indicarlas hay que valorar la salud de dientes y encías, la mordida, el esmalte disponible, posibles hábitos como bruxismo y las expectativas del paciente.",
  },
  {
    question: "¿Qué diferencia hay entre carillas y blanqueamiento?",
    answer:
      "El blanqueamiento aclara el color de los dientes naturales, pero no cambia su forma. Las carillas permiten modificar forma, proporción, color y pequeñas irregularidades visibles. La elección depende del diagnóstico y del objetivo estético.",
  },
  {
    question: "¿Las carillas dentales se notan?",
    answer:
      "El objetivo es que se integren de forma natural con la sonrisa. Para ello se valoran color, forma, proporción dental, labios, encías y características faciales del paciente.",
  },
  {
    question: "¿Cuánto duran las carillas dentales?",
    answer:
      "La duración depende del material, la técnica, los hábitos del paciente, la mordida, la higiene y las revisiones. También es importante evitar hábitos que puedan dañarlas, como morder objetos duros o descuidar el mantenimiento.",
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
    title: "Blanqueamiento dental",
    description:
      "Tratamiento para aclarar el color de los dientes naturales cuando está indicado.",
    href: "/tratamientos/blanqueamiento-dental-cordoba",
  },
  {
    title: "Ortodoncia en Córdoba",
    description:
      "Tratamientos para mejorar la alineación dental y la mordida antes de un plan estético.",
    href: "/tratamientos/ortodoncia-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Carillas Dentales en Córdoba",
  description:
    "Carillas dentales en Córdoba para mejorar forma, color y armonía de la sonrisa. Valoración personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Carillas Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamientos con carillas dentales en Córdoba para mejorar la estética de la sonrisa de forma personalizada.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Carillas Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Carillas dentales en Córdoba para mejorar forma, color y armonía de la sonrisa.",
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

export default function CarillasDentalesCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Carillas dentales en Córdoba"
        description="Tratamiento con carillas dentales en Córdoba para mejorar forma, color, proporción y armonía de la sonrisa mediante valoración clínica personalizada."
        url={pageUrl}
        serviceType="Dental veneers"
        breadcrumbLabel="Carillas dentales en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Carillas dentales en Córdoba"
        subtitle="Tratamiento estético para mejorar la forma, el color y la armonía de la sonrisa con una planificación adaptada a cada paciente."
        serviceKey="carillas_dentales"
        breadcrumbLabel="Carillas dentales"
        highlights={[
          "Diseño natural de sonrisa",
          "Valoración personalizada",
          "Estética dental",
          "Clínica dental en Córdoba centro",
        ]}
      />

      <main id="contenido">
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Estética personalizada
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Mejorar la sonrisa respetando la naturalidad
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    Las carillas dentales pueden ayudar a mejorar la estética de la
                    sonrisa cuando existen alteraciones de forma, color, tamaño,
                    proporción o pequeñas irregularidades en los dientes visibles.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos primero la salud oral,
                    la mordida, el estado de las encías y las expectativas del paciente.
                    El objetivo es plantear una mejora estética proporcionada, natural y
                    adecuada a cada caso.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Quieres valorar carillas dentales?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para estudiar tu caso y
                  explicarte las opciones posibles.
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

        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Indicaciones habituales
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo valorar carillas dentales?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Las carillas pueden ser una opción estética en determinados casos, pero
                siempre requieren diagnóstico previo.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Dientes desgastados",
                  text: "Pueden ayudar a mejorar la forma de dientes visibles afectados por desgaste o pequeñas fracturas.",
                },
                {
                  title: "Cambios de color",
                  text: "Cuando el color no mejora suficientemente con blanqueamiento, pueden valorarse otras soluciones estéticas.",
                },
                {
                  title: "Espacios entre dientes",
                  text: "En algunos casos pueden corregir pequeños espacios visibles entre piezas anteriores.",
                },
                {
                  title: "Forma dental irregular",
                  text: "Permiten mejorar proporciones o contornos cuando la forma de los dientes no es armónica.",
                },
                {
                  title: "Sonrisa poco uniforme",
                  text: "Pueden formar parte de un plan para equilibrar color, tamaño y forma dental.",
                },
                {
                  title: "Plan estético combinado",
                  text: "A veces se combinan con ortodoncia, blanqueamiento o restauraciones para un resultado más equilibrado.",
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

        <section className="bg-teal-950 py-16 md:py-24 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-200/70">
                Proceso clínico
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Cómo trabajamos las carillas dentales
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Antes de iniciar un tratamiento estético, valoramos salud oral, mordida y
                expectativas para diseñar un resultado coherente.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración inicial",
                  text: "Revisamos dientes, encías, mordida, color, forma dental y expectativas.",
                },
                {
                  number: "02",
                  title: "Plan estético",
                  text: "Explicamos qué puede mejorarse y qué opciones son adecuadas para cada caso.",
                },
                {
                  number: "03",
                  title: "Diseño del tratamiento",
                  text: "Se planifica forma, proporción y color buscando integración natural con la sonrisa.",
                },
                {
                  number: "04",
                  title: "Mantenimiento",
                  text: "Indicamos cuidados y revisiones para conservar el resultado y proteger las restauraciones.",
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

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Beneficios
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Beneficios de las carillas dentales
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Cuando están indicadas, las carillas pueden mejorar la estética de la
                sonrisa de forma personalizada.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Mejor armonía de la sonrisa",
                  text: "Pueden mejorar forma, proporción y apariencia de los dientes visibles.",
                },
                {
                  title: "Resultado natural",
                  text: "El diseño busca integrarse con el rostro y evitar una apariencia artificial.",
                },
                {
                  title: "Corrección de pequeñas irregularidades",
                  text: "Pueden ayudar en casos de pequeñas fracturas, desgastes o diferencias de forma.",
                },
                {
                  title: "Plan estético personalizado",
                  text: "Cada caso se estudia según salud oral, mordida, color y expectativas del paciente.",
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
                <strong className="text-gray-950">Nota importante:</strong> antes de
                colocar carillas es necesario valorar encías, esmalte, mordida y hábitos
                como bruxismo. No todos los casos son candidatos al mismo tipo de
                tratamiento estético.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre carillas dentales antes de pedir una valoración."
        />

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
                  Carillas dentales en Córdoba centro
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
                  Valoración estética de carillas
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si quieres mejorar forma, color o proporción de tus dientes, podemos
                  valorar qué opción estética se adapta mejor a tu caso.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de dientes, encías y mordida.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Explicación de alternativas estéticas.
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