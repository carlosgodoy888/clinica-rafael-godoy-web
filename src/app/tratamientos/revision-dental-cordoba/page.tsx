import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/revision-dental-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué incluye una revisión dental?",
    answer:
      "Una revisión dental permite valorar el estado general de dientes, encías, restauraciones, mordida y posibles síntomas. Según el caso, puede recomendarse una limpieza dental, una radiografía, el seguimiento de una pieza concreta o un tratamiento específico.",
  },
  {
    question: "¿Cada cuánto tiempo conviene hacerse una revisión dental?",
    answer:
      "Depende de cada paciente. De forma general, muchas personas se benefician de una revisión anual, aunque pacientes con enfermedad periodontal, caries frecuentes, implantes, prótesis o tratamientos recientes pueden necesitar controles más frecuentes.",
  },
  {
    question: "¿Debo ir al dentista aunque no me duela nada?",
    answer:
      "Sí. Muchas caries, problemas de encías o desgastes pueden avanzar sin dolor en fases iniciales. Revisar la boca periódicamente ayuda a detectar problemas antes de que sean más complejos.",
  },
  {
    question: "¿La revisión dental sirve para detectar caries?",
    answer:
      "Sí. Durante la revisión se observan signos de caries, restauraciones antiguas deterioradas, sensibilidad, fracturas o zonas sospechosas. En algunos casos puede ser necesario complementar con pruebas diagnósticas.",
  },
  {
    question: "¿Qué pasa si tengo encías inflamadas o sangrado?",
    answer:
      "El sangrado o la inflamación de encías no debería considerarse normal. Durante la revisión se valora si existe gingivitis, acumulación de sarro o signos de enfermedad periodontal.",
  },
  {
    question: "¿Puedo pedir revisión aunque sea mi primera visita?",
    answer:
      "Sí. La revisión dental es una forma adecuada de empezar si quieres conocer el estado de tu boca, resolver dudas o valorar si necesitas algún tratamiento.",
  },
];

const relatedServices = [
  {
    title: "Limpieza dental",
    description:
      "Higiene profesional para eliminar placa, sarro y ayudar a mantener encías sanas.",
    href: "/tratamientos/limpieza-dental-cordoba",
  },
  {
    title: "Empastes dentales",
    description:
      "Tratamiento de caries, pequeñas fracturas y restauraciones deterioradas.",
    href: "/tratamientos/empastes-dentales-cordoba",
  },
  {
    title: "Periodoncia en Córdoba",
    description:
      "Valoración y tratamiento de encías inflamadas, sangrado, gingivitis y periodontitis.",
    href: "/tratamientos/periodoncia-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Revisión Dental en Córdoba",
  description:
    "Revisión dental en Córdoba para valorar dientes, encías, caries, restauraciones y salud oral general. Primera visita y chequeo dental personalizado.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Revisión Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Chequeo dental en Córdoba para valorar el estado de dientes, encías, caries y posibles tratamientos.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Revisión Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Revisión dental en Córdoba para detectar problemas de salud oral y resolver dudas antes de iniciar tratamiento.",
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

export default function RevisionDentalCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Revisión dental en Córdoba"
        description="Revisión dental en Córdoba para valorar dientes, encías, caries, restauraciones, mordida y salud oral general mediante exploración clínica personalizada."
        url={pageUrl}
        serviceType="Dental check-up"
        breadcrumbLabel="Revisión dental en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Revisión dental en Córdoba"
        subtitle="Chequeo dental para valorar el estado de dientes, encías y salud oral general, detectar problemas a tiempo y resolver tus dudas."
        serviceKey="revision_dental"
        breadcrumbLabel="Revisión dental"
        highlights={[
          "Primera visita",
          "Chequeo dental",
          "Prevención oral",
          "Clínica dental en Córdoba centro",
        ]}
      />

      <main id="contenido">
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                  Prevención y diagnóstico
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Revisar la boca a tiempo ayuda a evitar tratamientos más complejos
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La revisión dental permite conocer el estado general de la boca y
                    detectar posibles problemas antes de que produzcan dolor o requieran
                    tratamientos más complejos. Es una visita útil tanto si tienes síntomas
                    como si simplemente quieres comprobar que todo está bien.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos dientes, encías,
                    restauraciones, mordida y necesidades del paciente. Tras la revisión,
                    explicamos de forma clara si no hace falta tratamiento, si conviene
                    hacer una limpieza o si existe alguna situación que deba tratarse.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Quieres pedir una revisión dental?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para una revisión o primera
                  valoración en consulta.
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
                Cuándo acudir
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo conviene pedir una revisión dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                No hace falta esperar a tener dolor. Una revisión puede ayudar a prevenir,
                diagnosticar y planificar con tranquilidad.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Hace tiempo que no vas al dentista",
                  text: "Si llevas meses o años sin revisión, conviene valorar dientes y encías aunque no tengas molestias.",
                },
                {
                  title: "Dolor o sensibilidad",
                  text: "La sensibilidad al frío, calor o presión puede indicar caries, desgaste, fisuras u otros problemas.",
                },
                {
                  title: "Sangrado de encías",
                  text: "El sangrado al cepillarte puede estar relacionado con gingivitis o enfermedad periodontal.",
                },
                {
                  title: "Restauraciones antiguas",
                  text: "Empastes, coronas o prótesis deben revisarse periódicamente para comprobar su estado.",
                },
                {
                  title: "Mal aliento persistente",
                  text: "Puede estar relacionado con placa, sarro, problemas de encías o caries no detectadas.",
                },
                {
                  title: "Antes de iniciar un tratamiento",
                  text: "Una revisión permite saber qué necesita realmente la boca antes de planificar ortodoncia, estética o implantes.",
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
                Qué revisamos en una visita dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                La revisión se adapta a cada paciente, pero normalmente se valoran los
                principales aspectos de la salud oral.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Dientes y caries",
                  text: "Revisamos posibles caries, fracturas, desgaste o restauraciones deterioradas.",
                },
                {
                  number: "02",
                  title: "Encías",
                  text: "Valoramos sangrado, inflamación, sarro y signos de enfermedad periodontal.",
                },
                {
                  number: "03",
                  title: "Mordida y función",
                  text: "Observamos desgaste, sobrecargas, movilidad o molestias al masticar.",
                },
                {
                  number: "04",
                  title: "Plan recomendado",
                  text: "Explicamos si todo está correcto o si conviene realizar algún tratamiento.",
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
                Beneficios de una revisión dental periódica
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                La prevención es una de las formas más eficaces de cuidar la boca y evitar
                que pequeños problemas avancen.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Detectar caries a tiempo",
                  text: "Una caries inicial suele ser más sencilla de tratar que una lesión avanzada.",
                },
                {
                  title: "Controlar encías",
                  text: "La revisión ayuda a detectar inflamación, sangrado o signos de periodontitis.",
                },
                {
                  title: "Evitar urgencias",
                  text: "Identificar problemas antes de que duelan puede reducir visitas urgentes o tratamientos más complejos.",
                },
                {
                  title: "Planificar con claridad",
                  text: "Si hace falta tratamiento, puedes conocer opciones, prioridades y pasos recomendados.",
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
                <strong className="text-gray-950">Nota importante:</strong> una revisión
                dental no sustituye tratamientos específicos si ya existe dolor, infección,
                caries profunda o enfermedad periodontal. En esos casos se indicará el
                tratamiento más adecuado tras la valoración.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre revisión dental y primera visita antes de pedir cita."
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
                  Revisión dental en Córdoba centro
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
                  Pide tu revisión dental
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si quieres conocer el estado de tu boca o llevas tiempo sin ir al
                  dentista, podemos realizar una revisión y orientarte con claridad.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de dientes y encías.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Detección de caries, sarro o restauraciones deterioradas.
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