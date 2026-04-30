import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/ortodoncia-infantil-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿A qué edad conviene llevar a un niño al ortodoncista?",
    answer:
      "De forma general, una primera revisión de ortodoncia puede ser recomendable alrededor de los 6 o 7 años, cuando empiezan a erupcionar los dientes definitivos. No siempre será necesario tratar en ese momento, pero sí permite detectar alteraciones de crecimiento, mordida o espacio.",
  },
  {
    question: "¿La ortodoncia infantil siempre implica poner brackets?",
    answer:
      "No. En niños, la ortodoncia puede ser solo una revisión periódica, un tratamiento interceptivo o, más adelante, brackets u otros sistemas. La indicación depende de la edad, el desarrollo dental y el tipo de problema detectado.",
  },
  {
    question: "¿Qué es la ortodoncia interceptiva?",
    answer:
      "La ortodoncia interceptiva busca corregir o guiar alteraciones durante el crecimiento, como mordidas cruzadas, falta de espacio, hábitos orales o problemas de desarrollo maxilar. Su objetivo es evitar que el problema avance o sea más complejo en el futuro.",
  },
  {
    question: "¿Cuándo puede necesitar un niño ortodoncia?",
    answer:
      "Puede ser recomendable valorar si hay dientes muy apiñados, mordida cruzada, mordida abierta, dificultad al masticar, respiración oral, pérdida temprana de dientes de leche o hábitos como chuparse el dedo durante demasiado tiempo.",
  },
  {
    question: "¿Es mejor esperar a que salgan todos los dientes definitivos?",
    answer:
      "No siempre. Hay problemas que conviene detectar antes, durante el crecimiento. En otros casos, sí se puede esperar y controlar la evolución. Por eso la revisión temprana ayuda a decidir el mejor momento.",
  },
  {
    question: "¿La ortodoncia infantil duele?",
    answer:
      "Los niños pueden notar presión o molestias leves al inicio o tras algunos ajustes, pero normalmente son temporales. La adaptación depende del tipo de aparato, la edad y la colaboración del niño.",
  },
];

const relatedServices = [
  {
    title: "Ortodoncia en Córdoba",
    description:
      "Tratamientos de ortodoncia para niños, adolescentes y adultos, con valoración personalizada.",
    href: "/tratamientos/ortodoncia-cordoba",
  },
  {
    title: "Limpieza dental",
    description:
      "Higiene profesional y prevención para cuidar dientes y encías desde edades tempranas.",
    href: "/tratamientos/limpieza-dental-cordoba",
  },
  {
    title: "Estética dental",
    description:
      "Tratamientos orientados a mejorar la armonía de la sonrisa de forma natural.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Ortodoncia Infantil en Córdoba",
  description:
    "Ortodoncia infantil en Córdoba para valorar mordida, crecimiento dental y alineación en niños. Revisión personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Ortodoncia Infantil en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Revisión y tratamiento de ortodoncia infantil en Córdoba para niños en etapa de crecimiento.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Ortodoncia Infantil en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Ortodoncia para niños en Córdoba: valoración de mordida, crecimiento y alineación dental.",
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

export default function OrtodonciaInfantilCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Ortodoncia infantil en Córdoba"
        description="Ortodoncia infantil en Córdoba para valorar mordida, desarrollo dental, crecimiento y alineación en niños mediante revisión clínica personalizada."
        url={pageUrl}
        serviceType="Pediatric orthodontics"
        breadcrumbLabel="Ortodoncia infantil en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Ortodoncia infantil en Córdoba"
        subtitle="Valoración de mordida, crecimiento y alineación dental en niños para detectar a tiempo posibles problemas y decidir el mejor momento para tratar."
        serviceKey="ortodoncia_infantil"
        breadcrumbLabel="Ortodoncia infantil"
        highlights={[
          "Revisión desde edad temprana",
          "Mordida y crecimiento",
          "Ortodoncia interceptiva",
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
                  Revisión en crecimiento
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Detectar a tiempo puede simplificar el tratamiento
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La ortodoncia infantil permite valorar cómo están creciendo los dientes
                    y los maxilares. En muchos casos no es necesario iniciar tratamiento
                    de inmediato, pero una revisión temprana ayuda a detectar problemas de
                    espacio, mordida o desarrollo.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy revisamos cada caso de forma
                    individual y explicamos a la familia si conviene observar la evolución,
                    realizar controles periódicos o iniciar un tratamiento interceptivo.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Quieres revisar la mordida de tu hijo?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para una valoración de
                  ortodoncia infantil.
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
                Señales habituales
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo llevar a un niño al ortodoncista?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Algunas señales pueden indicar que conviene valorar el desarrollo dental
                y la mordida durante la etapa de crecimiento.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Dientes muy apiñados",
                  text: "La falta de espacio puede dificultar la erupción correcta de los dientes definitivos.",
                },
                {
                  title: "Mordida cruzada",
                  text: "Puede afectar al crecimiento y a la forma de morder si no se detecta a tiempo.",
                },
                {
                  title: "Mordida abierta",
                  text: "A veces se relaciona con hábitos como chuparse el dedo, uso prolongado de chupete o interposición lingual.",
                },
                {
                  title: "Pérdida temprana de dientes de leche",
                  text: "Puede alterar el espacio disponible para los dientes definitivos.",
                },
                {
                  title: "Respiración oral o hábitos",
                  text: "Algunos hábitos pueden influir en el desarrollo de la boca y la posición dental.",
                },
                {
                  title: "Dificultad al masticar",
                  text: "Si el niño mastica mal o evita ciertos alimentos, conviene revisar la mordida.",
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
                Cómo trabajamos la ortodoncia infantil
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Revisamos el desarrollo de forma progresiva para decidir si conviene
                observar, prevenir o tratar.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Primera valoración",
                  text: "Revisamos dientes, mordida, hábitos orales y etapa de crecimiento.",
                },
                {
                  number: "02",
                  title: "Diagnóstico",
                  text: "Explicamos a la familia si hay alteraciones que requieren seguimiento o intervención.",
                },
                {
                  number: "03",
                  title: "Control o tratamiento",
                  text: "Según el caso, se pauta observación periódica o tratamiento interceptivo.",
                },
                {
                  number: "04",
                  title: "Seguimiento",
                  text: "Controlamos la evolución hasta el momento adecuado para cada fase del tratamiento.",
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
                Beneficios de una revisión temprana
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Revisar la mordida durante la infancia no siempre significa iniciar un
                tratamiento, pero sí permite tomar decisiones con más información.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Detectar problemas de crecimiento",
                  text: "Permite identificar alteraciones de mordida o desarrollo antes de que sean más complejas.",
                },
                {
                  title: "Guiar la erupción dental",
                  text: "En algunos casos, controlar espacios y hábitos ayuda a favorecer una evolución más ordenada.",
                },
                {
                  title: "Evitar tratamientos más complejos",
                  text: "Actuar en el momento adecuado puede simplificar ciertos tratamientos futuros.",
                },
                {
                  title: "Dar tranquilidad a la familia",
                  text: "La revisión permite saber si hay que tratar, controlar o simplemente esperar.",
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
                <strong className="text-gray-950">Nota importante:</strong> cada niño
                crece a un ritmo diferente. La edad, los hábitos, la erupción dental y
                el tipo de mordida determinan si conviene observar, prevenir o iniciar
                tratamiento.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre ortodoncia infantil antes de pedir una valoración."
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
                  Ortodoncia infantil en Córdoba centro
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
                  Valoración de ortodoncia infantil
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si tienes dudas sobre la mordida, el apiñamiento o el crecimiento dental
                  de tu hijo, podemos valorar si necesita seguimiento o tratamiento.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de mordida y crecimiento.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Orientación a familias.
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