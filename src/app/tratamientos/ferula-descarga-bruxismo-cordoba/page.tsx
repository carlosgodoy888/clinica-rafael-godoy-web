import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/ferula-descarga-bruxismo-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es una férula de descarga?",
    answer:
      "Una férula de descarga es un dispositivo dental personalizado que se coloca normalmente durante la noche para ayudar a proteger los dientes y reducir la sobrecarga asociada al bruxismo o apretamiento dental.",
  },
  {
    question: "¿Qué es el bruxismo?",
    answer:
      "El bruxismo es el hábito de apretar o rechinar los dientes, muchas veces durante el sueño. Puede provocar desgaste dental, dolor mandibular, molestias musculares, sensibilidad o cefaleas.",
  },
  {
    question: "¿Cuándo puede ser necesaria una férula?",
    answer:
      "Puede valorarse cuando hay desgaste dental, apretamiento, dolor mandibular, sobrecarga muscular, fracturas repetidas, sensibilidad o síntomas compatibles con bruxismo. La indicación debe confirmarse en consulta.",
  },
  {
    question: "¿La férula cura el bruxismo?",
    answer:
      "La férula no elimina necesariamente la causa del bruxismo, pero puede ayudar a proteger los dientes y reducir la sobrecarga. En algunos casos puede ser necesario combinarla con control de hábitos, revisión de mordida u otras medidas.",
  },
  {
    question: "¿Una férula de farmacia sirve igual?",
    answer:
      "No es lo mismo. Las férulas personalizadas se adaptan a la boca del paciente y se ajustan clínicamente. Las férulas genéricas pueden no encajar bien y, en algunos casos, aumentar molestias o no proteger adecuadamente.",
  },
  {
    question: "¿Cuánto dura una férula de descarga?",
    answer:
      "Depende del grado de bruxismo, el material, el uso y el mantenimiento. Es importante revisarla periódicamente para comprobar desgaste, ajuste y estado de la boca.",
  },
];

const relatedServices = [
  {
    title: "Revisión dental",
    description:
      "Valoración general de dientes, encías y mordida para detectar problemas a tiempo.",
    href: "/tratamientos/revision-dental-cordoba",
  },
  {
    title: "Prótesis dental",
    description:
      "Restauraciones y rehabilitaciones para recuperar piezas desgastadas o dañadas.",
    href: "/tratamientos/protesis-dental-cordoba",
  },
  {
    title: "Ortodoncia en Córdoba",
    description:
      "Tratamientos para mejorar la mordida y la alineación dental cuando está indicado.",
    href: "/tratamientos/ortodoncia-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Férula de Descarga y Bruxismo en Córdoba",
  description:
    "Férula de descarga en Córdoba para bruxismo, apretamiento dental, desgaste y molestias mandibulares. Valoración personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Férula de Descarga y Bruxismo en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Valoración de bruxismo y férula de descarga personalizada en Córdoba para proteger los dientes y reducir sobrecargas.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Férula de Descarga y Bruxismo en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Férula de descarga en Córdoba para bruxismo, apretamiento dental y desgaste.",
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

export default function FerulaDescargaBruxismoCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Férula de descarga y bruxismo en Córdoba"
        description="Férula de descarga personalizada en Córdoba para pacientes con bruxismo, apretamiento dental, desgaste o molestias mandibulares, tras valoración clínica individual."
        url={pageUrl}
        serviceType="Occlusal splint"
        breadcrumbLabel="Férula de descarga y bruxismo en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Férula de descarga y bruxismo en Córdoba"
        subtitle="Valoración del bruxismo, apretamiento dental y desgaste para indicar una férula personalizada cuando sea necesaria."
        serviceKey="ferula_descarga_bruxismo"
        breadcrumbLabel="Férula de descarga"
        highlights={[
          "Bruxismo y apretamiento",
          "Protección dental",
          "Férula personalizada",
          "Clínica dental en Córdoba centro",
        ]}
      />

      <main id="contenido">
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Bruxismo y sobrecarga
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Proteger los dientes frente al apretamiento y el desgaste
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    El bruxismo puede provocar desgaste dental, sensibilidad, fracturas,
                    dolor mandibular o molestias musculares. Muchas personas aprietan o
                    rechinan los dientes sin darse cuenta, especialmente durante la noche.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos los signos de
                    sobrecarga, el estado de los dientes, la mordida y los síntomas del
                    paciente para indicar si una férula de descarga personalizada puede
                    ayudar a proteger la boca.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Aprietas o rechinas los dientes?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar si necesitas una
                  férula de descarga personalizada.
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
                Señales habituales
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo valorar una férula de descarga?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estos signos pueden estar relacionados con bruxismo o sobrecarga dental.
                La valoración clínica ayuda a decidir el tratamiento adecuado.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Desgaste dental",
                  text: "El rechinamiento o apretamiento puede desgastar progresivamente los dientes.",
                },
                {
                  title: "Dolor mandibular",
                  text: "La sobrecarga muscular puede provocar molestias en mandíbula, cara o cuello.",
                },
                {
                  title: "Sensibilidad dental",
                  text: "El desgaste o microfisuras pueden aumentar la sensibilidad al frío, calor o presión.",
                },
                {
                  title: "Dolor de cabeza al despertar",
                  text: "Algunas cefaleas matutinas pueden estar relacionadas con tensión muscular nocturna.",
                },
                {
                  title: "Fracturas o restauraciones dañadas",
                  text: "El exceso de fuerza puede afectar empastes, coronas o dientes debilitados.",
                },
                {
                  title: "Apretamiento durante el día",
                  text: "Algunas personas aprietan los dientes en situaciones de estrés o concentración.",
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
                Cómo trabajamos el bruxismo
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Antes de realizar una férula, estudiamos síntomas, desgaste, mordida y
                posibles factores asociados.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración clínica",
                  text: "Revisamos desgaste, sensibilidad, músculos, articulación y síntomas del paciente.",
                },
                {
                  number: "02",
                  title: "Diagnóstico",
                  text: "Determinamos si los signos son compatibles con bruxismo o sobrecarga dental.",
                },
                {
                  number: "03",
                  title: "Férula personalizada",
                  text: "Si está indicada, se planifica una férula adaptada a la boca del paciente.",
                },
                {
                  number: "04",
                  title: "Ajuste y seguimiento",
                  text: "Revisamos comodidad, desgaste de la férula y evolución de síntomas.",
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
                Beneficios de una férula personalizada
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Cuando está indicada, una férula de descarga puede ayudar a proteger los
                dientes y reducir efectos de la sobrecarga.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Protección frente al desgaste",
                  text: "Ayuda a reducir el contacto directo entre dientes durante el apretamiento nocturno.",
                },
                {
                  title: "Menor sobrecarga dental",
                  text: "Puede ayudar a distribuir fuerzas y proteger dientes, empastes o coronas.",
                },
                {
                  title: "Mejor control de síntomas",
                  text: "En algunos pacientes puede reducir molestias musculares asociadas a la sobrecarga.",
                },
                {
                  title: "Seguimiento clínico",
                  text: "Las revisiones permiten controlar ajuste, desgaste de la férula y evolución del caso.",
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
                <strong className="text-gray-950">Nota importante:</strong> la férula de
                descarga protege frente a los efectos del bruxismo, pero no siempre elimina
                la causa del apretamiento. Por eso es importante valorar hábitos, estrés,
                mordida y seguimiento.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre bruxismo y férula de descarga antes de pedir una valoración."
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
                  Férula de descarga en Córdoba centro
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
                  Valoración de bruxismo
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si notas desgaste, dolor mandibular o aprietas los dientes, podemos
                  valorar si necesitas una férula personalizada.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de desgaste y mordida.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Valoración de síntomas mandibulares.
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