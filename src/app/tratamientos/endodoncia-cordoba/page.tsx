import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/endodoncia-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es una endodoncia?",
    answer:
      "La endodoncia es un tratamiento dental que permite conservar un diente cuando la pulpa o nervio está afectado por una caries profunda, una fractura, un traumatismo o una infección. Consiste en limpiar y sellar los conductos internos del diente para evitar la extracción siempre que sea posible.",
  },
  {
    question: "¿Cuándo puede ser necesaria una endodoncia?",
    answer:
      "Puede ser necesaria cuando hay dolor dental intenso, sensibilidad prolongada al frío o al calor, inflamación, infección, absceso o una caries que ha avanzado hasta el interior del diente. La indicación siempre debe confirmarse con una valoración clínica.",
  },
  {
    question: "¿Duele una endodoncia?",
    answer:
      "El tratamiento se realiza con anestesia local, por lo que durante el procedimiento no debería sentirse dolor. Puede haber molestias posteriores durante unos días, normalmente controlables y relacionadas con la inflamación previa del diente o los tejidos.",
  },
  {
    question: "¿La endodoncia salva siempre el diente?",
    answer:
      "La endodoncia busca conservar el diente natural, pero el pronóstico depende del estado de la pieza, la cantidad de estructura dental sana, la infección existente y la restauración posterior. En consulta se valora si el diente es recuperable.",
  },
  {
    question: "¿Qué ocurre después de una endodoncia?",
    answer:
      "Tras una endodoncia, el diente suele necesitar una reconstrucción, incrustación o corona, según la pérdida de estructura dental. Restaurarlo correctamente es clave para protegerlo y reducir el riesgo de fractura.",
  },
  {
    question: "¿Cuántas visitas requiere una endodoncia?",
    answer:
      "Depende del caso. Algunas endodoncias pueden realizarse en una sola sesión, mientras que otras requieren más visitas si hay infección, complejidad anatómica o necesidad de control previo.",
  },
];

const relatedServices = [
  {
    title: "Ortodoncia en Córdoba",
    description:
      "Tratamientos para mejorar la alineación dental, la mordida y la estética de la sonrisa.",
    href: "/tratamientos/ortodoncia-cordoba",
  },
  {
    title: "Prótesis dental",
    description:
      "Restauraciones y rehabilitaciones para recuperar función y estética dental.",
    href: "/tratamientos/protesis-dental-cordoba",
  },
  {
    title: "Implantes dentales",
    description:
      "Soluciones para reponer dientes perdidos cuando no es posible conservar la pieza natural.",
    href: "/tratamientos/implantes-dentales-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Endodoncia en Córdoba",
  description:
    "Endodoncia en Córdoba para tratar dientes afectados por caries profundas, infección o lesión pulpar. Valoración personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Endodoncia en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamiento de conductos en Córdoba para conservar dientes afectados por infección, caries profundas o lesión pulpar.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Endodoncia en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamiento de conductos en Córdoba con valoración clínica personalizada.",
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

export default function EndodonciaCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Endodoncia en Córdoba"
        description="Tratamiento de endodoncia en Córdoba para conservar dientes afectados por caries profunda, infección o lesión de la pulpa dental mediante valoración clínica personalizada."
        url={pageUrl}
        serviceType="Endodontics"
        breadcrumbLabel="Endodoncia en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Endodoncia en Córdoba"
        subtitle="Tratamiento de conductos para intentar conservar dientes afectados por caries profundas, infección o lesión pulpar, siempre tras una valoración clínica personalizada."
        serviceKey="endodoncia"
        breadcrumbLabel="Endodoncia"
        highlights={[
          "Tratamiento de conductos",
          "Valoración del diente afectado",
          "Conservación de la pieza natural",
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
                  Conservación dental
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Tratar el interior del diente para evitar perderlo
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La endodoncia, también conocida como tratamiento de conductos,
                    permite tratar el interior de un diente cuando la pulpa dental está
                    dañada o infectada. Su objetivo es conservar la pieza natural siempre
                    que el estado del diente lo permita.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos cada caso de forma
                    individual. Antes de indicar una endodoncia es necesario estudiar los
                    síntomas, revisar el diente afectado y valorar si la pieza puede
                    restaurarse correctamente después del tratamiento.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Tienes dolor o sensibilidad dental?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar el diente
                  afectado en consulta.
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
                ¿Cuándo puede ser necesaria una endodoncia?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Estos síntomas no siempre significan que sea necesaria una endodoncia,
                pero sí indican que conviene valorar el diente cuanto antes.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Dolor dental intenso",
                  text: "El dolor espontáneo o persistente puede indicar afectación de la pulpa dental.",
                },
                {
                  title: "Sensibilidad prolongada",
                  text: "La sensibilidad al frío o al calor que tarda en desaparecer debe revisarse clínicamente.",
                },
                {
                  title: "Caries profunda",
                  text: "Cuando una caries avanza hacia el interior del diente, puede afectar al nervio.",
                },
                {
                  title: "Inflamación o absceso",
                  text: "La presencia de inflamación, flemón o infección requiere valoración profesional.",
                },
                {
                  title: "Traumatismo dental",
                  text: "Un golpe puede dañar la pulpa incluso aunque el diente parezca intacto inicialmente.",
                },
                {
                  title: "Cambio de color del diente",
                  text: "Un oscurecimiento dental puede estar relacionado con daño pulpar previo.",
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
                Cómo trabajamos la endodoncia
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Un tratamiento pautado para diagnosticar, limpiar, sellar y restaurar
                el diente afectado.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Diagnóstico",
                  text: "Valoramos síntomas, exploración clínica y pruebas necesarias para confirmar el origen del problema.",
                },
                {
                  number: "02",
                  title: "Limpieza de conductos",
                  text: "Se accede al interior del diente para limpiar y desinfectar los conductos afectados.",
                },
                {
                  number: "03",
                  title: "Sellado",
                  text: "Los conductos se sellan para reducir el riesgo de reinfección.",
                },
                {
                  number: "04",
                  title: "Restauración",
                  text: "Después se reconstruye o protege el diente según la estructura remanente.",
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
                Objetivos del tratamiento
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Beneficios de conservar el diente natural
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Cuando el diente es recuperable, la endodoncia puede evitar la extracción
                y permitir que la pieza siga cumpliendo su función.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Conservar la pieza dental",
                  text: "El objetivo principal es mantener el diente natural siempre que el pronóstico sea favorable.",
                },
                {
                  title: "Eliminar infección interna",
                  text: "La limpieza de los conductos busca controlar la infección localizada en el interior del diente.",
                },
                {
                  title: "Recuperar función",
                  text: "Tras la restauración posterior, el diente puede seguir participando en la masticación.",
                },
                {
                  title: "Evitar tratamientos más complejos",
                  text: "Conservar un diente puede evitar la necesidad de reemplazarlo, aunque cada caso debe valorarse.",
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
                <strong className="text-gray-950">Nota importante:</strong> no todos
                los dientes pueden conservarse mediante endodoncia. El pronóstico depende
                del estado de la raíz, la infección, la estructura dental restante y la
                posibilidad de restaurar la pieza correctamente.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre el tratamiento de endodoncia antes de pedir una valoración."
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
                  Endodoncia en Córdoba centro
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
                  Valoración del diente afectado
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si tienes dolor, sensibilidad persistente o sospecha de infección, lo
                  más adecuado es valorar el diente en consulta antes de que el problema
                  avance.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Exploración clínica del diente afectado.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Explicación clara de las opciones.
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