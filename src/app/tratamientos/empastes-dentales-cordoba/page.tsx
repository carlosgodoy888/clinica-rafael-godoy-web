import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/empastes-dentales-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es un empaste dental?",
    answer:
      "Un empaste dental, también llamado obturación o reconstrucción, es un tratamiento que permite reparar una zona del diente dañada por caries, fractura o desgaste. Se elimina el tejido afectado y se restaura la forma y función del diente con un material adecuado.",
  },
  {
    question: "¿Cuándo puede ser necesario un empaste?",
    answer:
      "Puede ser necesario cuando existe una caries, una pequeña fractura, pérdida de estructura dental, sensibilidad localizada o una restauración antigua deteriorada. La indicación debe confirmarse mediante exploración clínica.",
  },
  {
    question: "¿Un empaste dental duele?",
    answer:
      "El tratamiento suele realizarse con anestesia local cuando es necesario, por lo que no debería doler durante el procedimiento. Puede quedar sensibilidad temporal después, especialmente si la caries era profunda.",
  },
  {
    question: "¿Qué pasa si no trato una caries?",
    answer:
      "Una caries no tratada puede avanzar hacia capas más profundas del diente, provocar dolor, infección o afectar al nervio. En esos casos puede ser necesaria una endodoncia o, si el daño es muy avanzado, valorar otras opciones.",
  },
  {
    question: "¿Los empastes se notan?",
    answer:
      "Actualmente se utilizan materiales estéticos que buscan integrarse con el color del diente. El resultado depende de la zona tratada, el tamaño de la restauración y el estado previo de la pieza.",
  },
  {
    question: "¿Cuánto dura un empaste dental?",
    answer:
      "La duración depende del tamaño del empaste, la higiene, la mordida, los hábitos del paciente y las revisiones. Es importante controlar periódicamente las restauraciones para detectar desgaste, filtraciones o nuevas caries.",
  },
];

const relatedServices = [
  {
    title: "Endodoncia en Córdoba",
    description:
      "Tratamiento de conductos cuando la caries o infección afecta al interior del diente.",
    href: "/tratamientos/endodoncia-cordoba",
  },
  {
    title: "Limpieza dental",
    description:
      "Higiene profesional para eliminar placa, sarro y ayudar a prevenir caries y problemas de encías.",
    href: "/tratamientos/limpieza-dental-cordoba",
  },
  {
    title: "Estética dental",
    description:
      "Tratamientos orientados a mejorar la armonía de la sonrisa y restauraciones visibles.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Empastes Dentales en Córdoba",
  description:
    "Empastes dentales en Córdoba para tratar caries, pequeñas fracturas y restauraciones deterioradas. Valoración personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Empastes Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamiento de caries y empastes dentales en Córdoba para restaurar dientes dañados de forma funcional y estética.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Empastes Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Empastes dentales en Córdoba para tratar caries, pequeñas fracturas y restauraciones deterioradas.",
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

export default function EmpastesDentalesCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Empastes dentales en Córdoba"
        description="Tratamiento de empastes dentales en Córdoba para reparar caries, pequeñas fracturas y restauraciones deterioradas mediante valoración clínica personalizada."
        url={pageUrl}
        serviceType="Dental restoration"
        breadcrumbLabel="Empastes dentales en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Empastes dentales en Córdoba"
        subtitle="Tratamiento de caries, pequeñas fracturas y restauraciones deterioradas para recuperar la forma, función y estética del diente."
        serviceKey="empastes_dentales"
        breadcrumbLabel="Empastes dentales"
        highlights={[
          "Tratamiento de caries",
          "Reconstrucciones dentales",
          "Restauraciones estéticas",
          "Clínica dental en Córdoba centro",
        ]}
      />

      <main id="contenido">
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Restauración dental
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Tratar una caries a tiempo puede evitar problemas mayores
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    Los empastes dentales permiten reparar dientes afectados por caries,
                    pequeñas fracturas, desgaste o restauraciones antiguas deterioradas.
                    El objetivo es eliminar la zona dañada y reconstruir el diente para
                    recuperar su función y proteger la estructura sana.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos cada pieza de forma
                    individual. Si la caries es superficial o moderada, puede resolverse
                    con un empaste. Si el daño es más profundo, puede ser necesario valorar
                    otros tratamientos como la endodoncia.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Tienes una caries o una pieza dañada?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar el diente afectado
                  en consulta.
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
                ¿Cuándo puede hacer falta un empaste dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Hay síntomas y situaciones que pueden indicar la necesidad de valorar una
                restauración dental.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Caries dental",
                  text: "Cuando una caries afecta al esmalte o la dentina, puede requerir limpieza y reconstrucción.",
                },
                {
                  title: "Sensibilidad localizada",
                  text: "La sensibilidad en una pieza concreta puede estar relacionada con caries, desgaste o filtración.",
                },
                {
                  title: "Pequeñas fracturas",
                  text: "Un diente astillado o fracturado puede necesitar una reconstrucción para recuperar forma y función.",
                },
                {
                  title: "Empaste antiguo deteriorado",
                  text: "Las restauraciones antiguas pueden desgastarse, fracturarse o filtrarse con el tiempo.",
                },
                {
                  title: "Retención de comida",
                  text: "Si se acumulan restos entre dientes o en una cavidad, conviene revisar la zona.",
                },
                {
                  title: "Cambio de color o sombra",
                  text: "Una mancha oscura o zona sospechosa puede ser signo de caries o restauración defectuosa.",
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
                Cómo trabajamos los empastes dentales
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                El tratamiento se adapta al tamaño de la lesión, la profundidad de la
                caries y la estructura dental restante.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración del diente",
                  text: "Revisamos la pieza afectada, síntomas, extensión de la caries y restauraciones previas.",
                },
                {
                  number: "02",
                  title: "Eliminación de tejido afectado",
                  text: "Se limpia la zona dañada preservando la mayor cantidad posible de estructura sana.",
                },
                {
                  number: "03",
                  title: "Reconstrucción",
                  text: "Se restaura la forma del diente con un material adecuado al caso y a la zona tratada.",
                },
                {
                  number: "04",
                  title: "Ajuste y revisión",
                  text: "Comprobamos mordida, contacto y comodidad para que la restauración funcione correctamente.",
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
                Beneficios de tratar una caries a tiempo
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Restaurar una pieza dañada puede evitar que el problema avance y proteger
                la estructura dental restante.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Conservar estructura dental",
                  text: "Actuar a tiempo permite tratar la zona afectada antes de que el daño sea más extenso.",
                },
                {
                  title: "Evitar dolor o infección",
                  text: "Una caries profunda puede llegar al nervio y requerir tratamientos más complejos.",
                },
                {
                  title: "Recuperar forma y función",
                  text: "La restauración ayuda a que el diente vuelva a masticar y contactar correctamente.",
                },
                {
                  title: "Mejorar la estética",
                  text: "En zonas visibles se busca una restauración integrada con el color del diente.",
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
                <strong className="text-gray-950">Nota importante:</strong> si una caries
                es muy profunda, un empaste puede no ser suficiente. En esos casos puede
                ser necesario valorar una endodoncia, una incrustación o una restauración
                más compleja.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre empastes dentales y tratamiento de caries antes de pedir una valoración."
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
                  Empastes dentales en Córdoba centro
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
                  Valoración de caries o restauración
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si notas sensibilidad, una mancha oscura, una pieza fracturada o un
                  empaste antiguo deteriorado, podemos valorar el tratamiento adecuado.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de la pieza afectada.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Tratamiento de caries y reconstrucciones.
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