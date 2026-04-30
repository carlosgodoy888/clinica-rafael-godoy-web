import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/extracciones-dentales-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Cuándo puede ser necesaria una extracción dental?",
    answer:
      "Una extracción dental puede ser necesaria cuando un diente está muy deteriorado, fracturado, infectado, con movilidad avanzada o no puede conservarse mediante otros tratamientos. La decisión siempre debe tomarse tras una valoración clínica.",
  },
  {
    question: "¿Siempre hay que extraer un diente con dolor?",
    answer:
      "No. El dolor dental no siempre implica extracción. En algunos casos el diente puede conservarse mediante un empaste, una endodoncia, una reconstrucción u otro tratamiento. Primero hay que valorar el origen del problema.",
  },
  {
    question: "¿Duele una extracción dental?",
    answer:
      "La extracción se realiza con anestesia local, por lo que durante el procedimiento no debería sentirse dolor. Es normal notar presión o manipulación. Después puede haber molestias o inflamación durante unos días, que se controlan con las indicaciones pautadas.",
  },
  {
    question: "¿Qué cuidados hay que seguir después de una extracción?",
    answer:
      "Tras una extracción es importante seguir las indicaciones de la clínica: controlar el sangrado inicial, no enjuagarse con fuerza las primeras horas, evitar tabaco y alcohol, mantener higiene cuidadosa y acudir a revisión si aparecen síntomas fuera de lo normal.",
  },
  {
    question: "¿Qué pasa después de perder un diente?",
    answer:
      "Cuando se pierde una pieza, puede ser necesario valorar su reposición para evitar movimientos dentales, pérdida de función o sobrecargas. Según el caso, pueden estudiarse opciones como prótesis, puente o implante dental.",
  },
  {
    question: "¿Las muelas del juicio siempre se extraen?",
    answer:
      "No siempre. Las muelas del juicio se valoran según su posición, espacio disponible, síntomas, infecciones repetidas, caries o afectación a dientes vecinos. Solo se extraen cuando existe una indicación clínica.",
  },
];

const relatedServices = [
  {
    title: "Endodoncia en Córdoba",
    description:
      "Tratamiento de conductos para intentar conservar dientes afectados antes de valorar una extracción.",
    href: "/tratamientos/endodoncia-cordoba",
  },
  {
    title: "Implantes dentales",
    description:
      "Soluciones para reponer dientes perdidos cuando no es posible conservar la pieza natural.",
    href: "/tratamientos/implantes-dentales-cordoba",
  },
  {
    title: "Prótesis dental",
    description:
      "Tratamientos para recuperar función y estética tras la pérdida de una o varias piezas.",
    href: "/tratamientos/protesis-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Extracciones Dentales en Córdoba",
  description:
    "Extracciones dentales en Córdoba cuando una pieza no puede conservarse. Valoración clínica, indicaciones y cuidados posteriores en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Extracciones Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Valoración de extracciones dentales en Córdoba cuando un diente está muy dañado, infectado o no puede conservarse.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Extracciones Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Extracciones dentales en Córdoba con valoración clínica personalizada y cuidados posteriores.",
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

export default function ExtraccionesDentalesCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Extracciones dentales en Córdoba"
        description="Extracciones dentales en Córdoba cuando una pieza no puede conservarse, tras valoración clínica personalizada y explicación de cuidados posteriores."
        url={pageUrl}
        serviceType="Tooth extraction"
        breadcrumbLabel="Extracciones dentales en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Extracciones dentales en Córdoba"
        subtitle="Valoración de dientes muy dañados, infectados, fracturados o con movilidad avanzada para decidir si es necesario extraer o si puede conservarse la pieza."
        serviceKey="extracciones_dentales"
        breadcrumbLabel="Extracciones dentales"
        highlights={[
          "Valoración previa",
          "Muelas y piezas dañadas",
          "Cuidados posteriores",
          "Clínica dental en Córdoba centro",
        ]}
      />

      <main id="contenido">
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Valoración y conservación dental
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Extraer un diente solo cuando no puede conservarse
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    Una extracción dental puede ser necesaria cuando una pieza está muy
                    dañada, fracturada, infectada o presenta movilidad avanzada. Sin
                    embargo, no todos los dientes con dolor deben extraerse: en muchos
                    casos pueden valorarse alternativas conservadoras.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy revisamos primero el estado del
                    diente, los síntomas y las opciones posibles. Si la extracción está
                    indicada, explicamos el procedimiento, los cuidados posteriores y las
                    alternativas para reponer la pieza si fuera necesario.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Tienes una pieza muy dañada?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar si puede
                  conservarse el diente o si es necesaria una extracción.
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
                ¿Cuándo puede indicarse una extracción dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                La extracción se plantea cuando no es posible conservar la pieza de forma
                predecible o cuando mantenerla puede generar más problemas.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Diente muy destruido",
                  text: "Cuando queda poca estructura dental sana y no es posible restaurarlo correctamente.",
                },
                {
                  title: "Infección no recuperable",
                  text: "Algunas infecciones o lesiones avanzadas pueden hacer inviable conservar la pieza.",
                },
                {
                  title: "Fractura dental compleja",
                  text: "Una fractura profunda o vertical puede impedir una restauración estable.",
                },
                {
                  title: "Movilidad avanzada",
                  text: "La pérdida de soporte periodontal puede provocar movilidad severa y mal pronóstico.",
                },
                {
                  title: "Muelas del juicio problemáticas",
                  text: "Se valoran si provocan dolor, infecciones, caries o afectan a dientes vecinos.",
                },
                {
                  title: "Preparación para otros tratamientos",
                  text: "En algunos casos, una extracción forma parte de un plan de rehabilitación o tratamiento posterior.",
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
                Cómo trabajamos una extracción dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Antes de extraer, valoramos si el diente puede conservarse y explicamos
                las opciones disponibles.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración del diente",
                  text: "Revisamos el estado de la pieza, síntomas, infección, movilidad y opciones conservadoras.",
                },
                {
                  number: "02",
                  title: "Explicación del caso",
                  text: "Indicamos si el diente puede conservarse o si la extracción es la opción más adecuada.",
                },
                {
                  number: "03",
                  title: "Extracción",
                  text: "Si está indicada, se realiza con anestesia local y siguiendo criterios clínicos.",
                },
                {
                  number: "04",
                  title: "Cuidados y seguimiento",
                  text: "Explicamos cuidados posteriores y valoramos si conviene reponer la pieza en el futuro.",
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
                Cuidados posteriores
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                Qué tener en cuenta después de una extracción
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Seguir correctamente las indicaciones posteriores ayuda a favorecer la
                cicatrización y reducir molestias o complicaciones.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Control del sangrado inicial",
                  text: "Es importante seguir las indicaciones de presión y cuidado durante las primeras horas.",
                },
                {
                  title: "Evitar enjuagues fuertes",
                  text: "Los enjuagues intensos al inicio pueden alterar el coágulo y retrasar la cicatrización.",
                },
                {
                  title: "Higiene cuidadosa",
                  text: "La boca debe mantenerse limpia, evitando traumatizar la zona de extracción.",
                },
                {
                  title: "Valorar reposición de la pieza",
                  text: "Según la zona y el caso, puede convenir estudiar opciones como implantes o prótesis.",
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
                <strong className="text-gray-950">Nota importante:</strong> si aparece
                dolor intenso, sangrado que no cede, inflamación progresiva, fiebre o mal
                sabor persistente tras una extracción, conviene contactar con la clínica
                para valorar la evolución.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre extracciones dentales antes de pedir una valoración."
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
                  Extracciones dentales en Córdoba centro
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
                  Valoración antes de extraer
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si te han dicho que quizá hay que extraer una pieza o tienes dolor en
                  un diente muy dañado, podemos valorar las opciones disponibles.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de la pieza afectada.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Valoración de alternativas conservadoras.
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