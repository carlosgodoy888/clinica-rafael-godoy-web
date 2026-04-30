import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/implantes-dentales-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es un implante dental?",
    answer:
      "Un implante dental es una estructura que se coloca en el hueso maxilar o mandibular para sustituir la raíz de un diente perdido. Sobre él se puede colocar una corona, puente o prótesis, según el caso clínico y el número de piezas a reponer.",
  },
  {
    question: "¿Cuándo puede ser necesario un implante dental?",
    answer:
      "Puede valorarse un implante cuando falta uno o varios dientes, cuando una pieza no puede conservarse o cuando una prótesis necesita mayor estabilidad. La indicación depende del estado del hueso, la salud oral y las necesidades de cada paciente.",
  },
  {
    question: "¿Duele colocarse un implante?",
    answer:
      "La colocación de implantes se realiza con anestesia local, por lo que durante el procedimiento no debería sentirse dolor. Después puede haber molestias o inflamación durante unos días, normalmente controlables con las indicaciones pautadas.",
  },
  {
    question: "¿Cuánto dura un implante dental?",
    answer:
      "La duración depende de factores como la higiene, el mantenimiento, la salud de las encías, los hábitos del paciente y las revisiones periódicas. Un implante requiere cuidados y controles, igual que los dientes naturales.",
  },
  {
    question: "¿Siempre se puede poner un implante?",
    answer:
      "No siempre. Es necesario valorar el hueso disponible, el estado de las encías, la salud general y otros factores clínicos. Si no hay suficiente hueso, pueden estudiarse alternativas o tratamientos previos según el caso.",
  },
  {
    question: "¿Qué cuidados necesita un implante?",
    answer:
      "Los implantes requieren higiene diaria cuidadosa, revisiones periódicas y mantenimiento profesional. La acumulación de placa alrededor del implante puede provocar problemas en los tejidos que lo rodean.",
  },
];

const relatedServices = [
  {
    title: "Endodoncia en Córdoba",
    description:
      "Tratamiento de conductos para intentar conservar dientes afectados por infección o lesión pulpar.",
    href: "/tratamientos/endodoncia-cordoba",
  },
  {
    title: "Prótesis dental",
    description:
      "Restauraciones y rehabilitaciones para recuperar función y estética dental.",
    href: "/tratamientos/protesis-dental-cordoba",
  },
  {
    title: "Estética dental",
    description:
      "Tratamientos para mejorar la armonía de la sonrisa de forma natural.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Implantes Dentales en Córdoba",
  description:
    "Implantes dentales en Córdoba para reponer dientes perdidos y recuperar función masticatoria. Valoración personalizada en Clínica Dental Dr. Rafael Godoy.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Implantes Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Tratamientos con implantes dentales en Córdoba para reponer piezas perdidas tras una valoración clínica personalizada.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Implantes Dentales en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Implantes dentales en Córdoba para recuperar dientes perdidos con valoración personalizada.",
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

export default function ImplantesDentalesCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Implantes dentales en Córdoba"
        description="Tratamiento con implantes dentales en Córdoba para reponer dientes perdidos y recuperar función masticatoria mediante valoración clínica personalizada."
        url={pageUrl}
        serviceType="Dental implants"
        breadcrumbLabel="Implantes dentales en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Implantes dentales en Córdoba"
        subtitle="Tratamientos para reponer dientes perdidos y recuperar función masticatoria, estética y estabilidad oral tras una valoración clínica personalizada."
        serviceKey="implantes_dentales"
        breadcrumbLabel="Implantes dentales"
        highlights={[
          "Reposición de dientes perdidos",
          "Valoración del hueso y encías",
          "Planificación personalizada",
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
                  Recuperación dental
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Reponer dientes perdidos de forma estable y funcional
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    Los implantes dentales son una opción para sustituir dientes perdidos
                    y recuperar función masticatoria, estabilidad y estética. Antes de
                    iniciar cualquier tratamiento es necesario valorar el estado del hueso,
                    las encías y la salud oral general del paciente.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy estudiamos cada caso de forma
                    individual para explicar las opciones disponibles, los tiempos
                    aproximados y las fases necesarias. El objetivo es plantear un
                    tratamiento realista, seguro y adaptado a cada situación clínica.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Te falta una pieza dental?
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

        {/* Cuándo valorar implantes */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
                Indicaciones habituales
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo valorar un implante dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Los implantes pueden ser una alternativa en diferentes situaciones, pero
                siempre requieren un diagnóstico individualizado.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Pérdida de un diente",
                  text: "Cuando falta una pieza dental, un implante puede permitir reponerla sin depender de dientes vecinos.",
                },
                {
                  title: "Varios dientes ausentes",
                  text: "En ausencias múltiples, los implantes pueden ayudar a soportar puentes o prótesis más estables.",
                },
                {
                  title: "Diente no recuperable",
                  text: "Si una pieza no puede conservarse mediante otros tratamientos, puede valorarse su sustitución.",
                },
                {
                  title: "Prótesis inestable",
                  text: "En algunos casos, los implantes pueden mejorar la sujeción de una prótesis.",
                },
                {
                  title: "Dificultad al masticar",
                  text: "La pérdida dental puede afectar a la masticación y a la distribución de fuerzas en la boca.",
                },
                {
                  title: "Necesidad estética y funcional",
                  text: "Reponer una pieza visible puede mejorar tanto la sonrisa como la comodidad al hablar o comer.",
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
                Cómo trabajamos los implantes dentales
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Un tratamiento por fases, con diagnóstico previo y planificación adaptada
                al estado de cada paciente.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración inicial",
                  text: "Revisamos la zona, el estado de encías, dientes vecinos y necesidades del paciente.",
                },
                {
                  number: "02",
                  title: "Estudio y planificación",
                  text: "Valoramos el hueso disponible y explicamos las opciones de tratamiento y tiempos estimados.",
                },
                {
                  number: "03",
                  title: "Colocación del implante",
                  text: "El implante se coloca en la zona planificada bajo anestesia local y siguiendo criterios clínicos.",
                },
                {
                  number: "04",
                  title: "Restauración y mantenimiento",
                  text: "Tras la integración, se realiza la restauración protésica y se pauta seguimiento periódico.",
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
                Beneficios de los implantes dentales
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Cuando están indicados, los implantes pueden ayudar a recuperar dientes
                perdidos y mejorar la función oral.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Recuperar función masticatoria",
                  text: "Reponer dientes ausentes puede mejorar la comodidad al masticar y repartir mejor las cargas.",
                },
                {
                  title: "Evitar desplazamientos dentales",
                  text: "La ausencia de una pieza puede favorecer movimientos de dientes vecinos o antagonistas.",
                },
                {
                  title: "Mejorar estabilidad protésica",
                  text: "En algunos casos, los implantes pueden aportar soporte a prótesis o rehabilitaciones.",
                },
                {
                  title: "Resultado estético natural",
                  text: "La restauración sobre implante busca integrarse con el resto de la sonrisa de forma armónica.",
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
                <strong className="text-gray-950">Nota importante:</strong> la indicación
                de un implante depende del diagnóstico. Es necesario valorar hueso, encías,
                salud general, higiene y mantenimiento antes de plantear el tratamiento.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre implantes dentales antes de pedir una valoración."
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
                  Implantes dentales en Córdoba centro
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
                  Valoración para implantes dentales
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si has perdido una pieza dental o te han indicado una extracción,
                  podemos valorar qué opciones existen para reponerla.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de la zona afectada.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Explicación de alternativas disponibles.
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