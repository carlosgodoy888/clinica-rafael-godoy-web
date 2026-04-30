import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/estetica-dental-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué tratamientos incluye la estética dental?",
    answer:
      "La estética dental puede incluir tratamientos como blanqueamiento dental, carillas, reconstrucciones estéticas, mejora de la forma de los dientes, armonización de la sonrisa y restauraciones visibles. La indicación depende de cada caso y de la salud oral previa.",
  },
  {
    question: "¿Todo el mundo puede hacerse un tratamiento de estética dental?",
    answer:
      "Antes de cualquier tratamiento estético es necesario valorar la salud de dientes y encías. Si hay caries, enfermedad periodontal, desgaste severo u otros problemas, primero debe tratarse la base clínica para que el resultado sea estable y saludable.",
  },
  {
    question: "¿La estética dental busca una sonrisa natural?",
    answer:
      "Sí. El objetivo no debería ser crear una sonrisa artificial, sino mejorar la armonía dental respetando el rostro, la edad, el color natural de los dientes y las expectativas del paciente.",
  },
  {
    question: "¿Qué diferencia hay entre blanqueamiento y carillas?",
    answer:
      "El blanqueamiento modifica el color de los dientes naturales cuando está indicado. Las carillas permiten cambiar forma, tamaño, color o pequeñas irregularidades de la superficie dental. La elección depende del diagnóstico y del objetivo estético.",
  },
  {
    question: "¿Cuánto dura un tratamiento de estética dental?",
    answer:
      "Depende del tratamiento. Un blanqueamiento puede requerir menos sesiones, mientras que tratamientos con carillas o rehabilitaciones estéticas necesitan más planificación. En la valoración inicial se explican fases y tiempos aproximados.",
  },
  {
    question: "¿Los resultados son permanentes?",
    answer:
      "La duración depende del tratamiento realizado, los hábitos del paciente, la higiene, las revisiones y el mantenimiento. Por ejemplo, el color obtenido con blanqueamiento puede cambiar con el tiempo si hay consumo frecuente de café, tabaco, vino u otros pigmentos.",
  },
];

const relatedServices = [
  {
    title: "Blanqueamiento dental",
    description:
      "Tratamiento para mejorar el color de los dientes cuando está indicado clínicamente.",
    href: "/tratamientos/blanqueamiento-dental-cordoba",
  },
  {
    title: "Ortodoncia en Córdoba",
    description:
      "Tratamientos para mejorar la alineación dental y la armonía de la sonrisa.",
    href: "/tratamientos/ortodoncia-cordoba",
  },
  {
    title: "Implantes dentales",
    description:
      "Soluciones para reponer dientes perdidos y recuperar función y estética.",
    href: "/tratamientos/implantes-dentales-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Estética Dental en Córdoba",
  description:
    "Estética dental en Córdoba para mejorar la armonía de la sonrisa: blanqueamiento, carillas y tratamientos personalizados según valoración clínica.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Estética Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamientos de estética dental en Córdoba para mejorar la sonrisa de forma natural y personalizada.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Estética Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Estética dental en Córdoba: blanqueamiento, carillas y mejora de la sonrisa con valoración personalizada.",
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

export default function EsteticaDentalCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Estética dental en Córdoba"
        description="Tratamientos de estética dental en Córdoba para mejorar la armonía de la sonrisa mediante blanqueamiento, carillas y restauraciones estéticas según valoración clínica personalizada."
        url={pageUrl}
        serviceType="Cosmetic dentistry"
        breadcrumbLabel="Estética dental en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Estética dental en Córdoba"
        subtitle="Tratamientos orientados a mejorar la armonía de la sonrisa de forma natural, respetando la salud oral y las características de cada paciente."
        serviceKey="estetica_dental"
        breadcrumbLabel="Estética dental"
        highlights={[
          "Sonrisa natural",
          "Valoración personalizada",
          "Blanqueamiento y carillas",
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
                  Sonrisa natural
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Mejorar la sonrisa sin perder naturalidad
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La estética dental busca mejorar el aspecto de la sonrisa respetando
                    la salud oral, la expresión facial y las características de cada
                    paciente. No se trata de crear sonrisas artificiales, sino de conseguir
                    un resultado armónico y proporcionado.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos primero el estado de
                    dientes y encías. A partir de ahí, podemos estudiar opciones como el
                    blanqueamiento, las carillas, las reconstrucciones estéticas o la
                    combinación con otros tratamientos si el caso lo requiere.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Quieres mejorar tu sonrisa?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para valorar tu caso y resolver
                  tus dudas.
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

        {/* Tratamientos incluidos */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Tratamientos estéticos
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Qué puede incluir la estética dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Cada sonrisa necesita una valoración distinta. Estos son algunos de los
                tratamientos que pueden formar parte de un plan de estética dental.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Blanqueamiento dental",
                  text: "Puede mejorar el color de los dientes naturales cuando existe una indicación adecuada.",
                },
                {
                  title: "Carillas dentales",
                  text: "Permiten modificar forma, tamaño, color o pequeñas irregularidades de los dientes visibles.",
                },
                {
                  title: "Reconstrucciones estéticas",
                  text: "Restauraciones orientadas a recuperar forma y apariencia en dientes dañados o desgastados.",
                },
                {
                  title: "Armonía de la sonrisa",
                  text: "Se valora proporción, color, forma y relación de los dientes con labios y rostro.",
                },
                {
                  title: "Estética y salud periodontal",
                  text: "La encía también influye en la estética; por eso debe estar sana antes de iniciar ciertos tratamientos.",
                },
                {
                  title: "Plan combinado",
                  text: "A veces se combinan ortodoncia, blanqueamiento o restauraciones para lograr un resultado más equilibrado.",
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
                Cómo trabajamos la estética dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Antes de mejorar la estética, es imprescindible asegurar una base oral
                sana y definir expectativas realistas.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración inicial",
                  text: "Revisamos dientes, encías, color, forma dental y necesidades del paciente.",
                },
                {
                  number: "02",
                  title: "Diagnóstico y objetivos",
                  text: "Definimos qué se puede mejorar y qué tratamientos son adecuados en cada caso.",
                },
                {
                  number: "03",
                  title: "Plan personalizado",
                  text: "Planteamos un plan realista, explicando fases, tiempos y mantenimiento.",
                },
                {
                  number: "04",
                  title: "Seguimiento",
                  text: "Tras el tratamiento, indicamos cuidados para mantener el resultado el mayor tiempo posible.",
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
                Beneficios de la estética dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Los tratamientos estéticos deben planificarse de forma personalizada para
                que el resultado sea saludable, estable y natural.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Mejor armonía de la sonrisa",
                  text: "Se busca mejorar la proporción, el color y la forma de los dientes visibles.",
                },
                {
                  title: "Resultado natural",
                  text: "El objetivo es que la sonrisa se integre con el rostro y no parezca artificial.",
                },
                {
                  title: "Mayor confianza al sonreír",
                  text: "Una sonrisa más armónica puede ayudar a sentirse más cómodo al hablar o sonreír.",
                },
                {
                  title: "Plan adaptado al caso",
                  text: "No todos los pacientes necesitan el mismo tratamiento ni el mismo grado de intervención.",
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
                <strong className="text-gray-950">Nota importante:</strong> antes de un
                tratamiento estético es necesario comprobar que no existan caries, problemas
                de encías u otras condiciones que puedan comprometer el resultado.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre estética dental antes de pedir una valoración."
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
                  Estética dental en Córdoba centro
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
                  Valoración estética de la sonrisa
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si quieres mejorar tu sonrisa, lo primero es valorar qué tratamiento
                  es adecuado para tu caso y qué resultado puede conseguirse de forma
                  realista.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de dientes y encías.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Explicación de tratamientos posibles.
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