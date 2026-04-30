import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceFAQ, type ServiceFAQItem } from "@/components/services/ServiceFAQ";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceSchema } from "@/components/services/ServiceSchema";

const pageUrl = `${site.domain}/tratamientos/limpieza-dental-cordoba`;

const faqItems: ServiceFAQItem[] = [
  {
    question: "¿Qué es una limpieza dental profesional?",
    answer:
      "La limpieza dental profesional, también llamada higiene dental, es un tratamiento preventivo que elimina placa bacteriana, sarro y manchas superficiales que no siempre pueden retirarse con el cepillado diario.",
  },
  {
    question: "¿Cada cuánto tiempo conviene hacerse una limpieza dental?",
    answer:
      "Depende de cada paciente. De forma general, muchas personas se benefician de una limpieza anual, pero pacientes con enfermedad periodontal, tendencia a acumular sarro o determinados hábitos pueden necesitar revisiones más frecuentes.",
  },
  {
    question: "¿Una limpieza dental duele?",
    answer:
      "Normalmente no debería doler. Puede notarse sensibilidad o molestia si hay encías inflamadas, sarro acumulado o sensibilidad previa. En esos casos, se adapta el tratamiento para hacerlo lo más cómodo posible.",
  },
  {
    question: "¿La limpieza dental blanquea los dientes?",
    answer:
      "La limpieza dental puede eliminar manchas superficiales y hacer que los dientes se vean más limpios, pero no cambia el color interno del diente como un blanqueamiento dental profesional.",
  },
  {
    question: "¿Sirve para prevenir problemas de encías?",
    answer:
      "Sí. La eliminación de placa y sarro ayuda a reducir la inflamación gingival y a prevenir o controlar problemas de encías, siempre acompañada de una buena higiene en casa y revisiones periódicas.",
  },
  {
    question: "¿Puedo hacerme una limpieza si me sangran las encías?",
    answer:
      "Sí, pero el sangrado de encías debe valorarse. Puede indicar gingivitis o enfermedad periodontal. En consulta se revisa la causa y se indica si basta con una higiene profesional o si hace falta tratamiento periodontal específico.",
  },
];

const relatedServices = [
  {
    title: "Periodoncia en Córdoba",
    description:
      "Tratamiento de encías, gingivitis, periodontitis y mantenimiento periodontal.",
    href: "/tratamientos/periodoncia-cordoba",
  },
  {
    title: "Blanqueamiento dental",
    description:
      "Tratamiento estético para aclarar el color de los dientes naturales cuando está indicado.",
    href: "/tratamientos/blanqueamiento-dental-cordoba",
  },
  {
    title: "Estética dental en Córdoba",
    description:
      "Tratamientos para mejorar la armonía de la sonrisa de forma natural.",
    href: "/tratamientos/estetica-dental-cordoba",
  },
];

export const metadata: Metadata = {
  title: "Limpieza Dental en Córdoba",
  description:
    "Limpieza dental en Córdoba para eliminar placa, sarro y manchas superficiales. Higiene profesional y prevención de problemas de encías.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Limpieza Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Higiene dental profesional en Córdoba para eliminar placa, sarro y ayudar a prevenir problemas de encías.",
    url: pageUrl,
    type: "article",
    locale: site.locale,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Limpieza Dental en Córdoba | Clínica Dental Dr. Rafael Godoy",
    description:
      "Limpieza dental profesional en Córdoba para cuidar encías, eliminar sarro y mantener una boca sana.",
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

export default function LimpiezaDentalCordobaPage() {
  return (
    <>
      <ServiceSchema
        name="Limpieza dental en Córdoba"
        description="Limpieza dental profesional en Córdoba para eliminar placa bacteriana, sarro y manchas superficiales, ayudando a prevenir problemas de encías."
        url={pageUrl}
        serviceType="Dental cleaning"
        breadcrumbLabel="Limpieza dental en Córdoba"
        faqItems={faqItems}
      />

      <ServiceHero
        title="Limpieza dental en Córdoba"
        subtitle="Higiene dental profesional para eliminar placa, sarro y manchas superficiales, ayudando a mantener encías sanas y una boca cuidada."
        serviceKey="limpieza_dental"
        breadcrumbLabel="Limpieza dental"
        highlights={[
          "Higiene profesional",
          "Prevención de encías",
          "Eliminación de sarro",
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
                  Prevención dental
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                  Una limpieza profesional ayuda a mantener la boca sana
                </h2>

                <div className="mt-6 space-y-5 text-base leading-relaxed text-gray-600">
                  <p>
                    La limpieza dental profesional permite retirar placa bacteriana,
                    sarro y manchas superficiales que pueden acumularse incluso con una
                    higiene diaria correcta. Es un tratamiento preventivo importante para
                    cuidar dientes y encías.
                  </p>

                  <p>
                    En la Clínica Dental Dr. Rafael Godoy valoramos el estado de las
                    encías, la cantidad de sarro y los hábitos de higiene antes de realizar
                    la limpieza. Si detectamos signos de gingivitis o periodontitis, te
                    explicamos qué pasos conviene seguir.
                  </p>
                </div>
              </div>

              <aside className="rounded-3xl border border-teal-100 bg-teal-50 p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-950">
                  ¿Necesitas una higiene dental?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Llámanos y te indicaremos disponibilidad para revisar tu caso y realizar
                  una limpieza profesional si está indicada.
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
                Indicaciones
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950">
                ¿Cuándo conviene hacerse una limpieza dental?
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                La frecuencia depende de cada paciente, pero hay señales que indican que
                conviene realizar una revisión e higiene profesional.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Sarro visible",
                  text: "La acumulación de sarro no puede eliminarse con el cepillo y requiere higiene profesional.",
                },
                {
                  title: "Encías inflamadas o sangrantes",
                  text: "El sangrado puede indicar gingivitis o problemas periodontales que conviene valorar.",
                },
                {
                  title: "Mal aliento persistente",
                  text: "La placa y el sarro pueden contribuir al mal aliento si no se controlan adecuadamente.",
                },
                {
                  title: "Manchas superficiales",
                  text: "Café, té, tabaco o determinados alimentos pueden producir manchas externas.",
                },
                {
                  title: "Antes de otros tratamientos",
                  text: "Una boca limpia facilita la valoración y planificación de tratamientos dentales posteriores.",
                },
                {
                  title: "Prevención anual",
                  text: "Muchas personas se benefician de una limpieza periódica para mantener dientes y encías sanos.",
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
                Cómo realizamos la limpieza dental
              </h2>

              <p className="mt-4 text-base leading-relaxed text-teal-50/75">
                Revisamos primero el estado de dientes y encías para adaptar la higiene
                profesional a tus necesidades.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
              {[
                {
                  number: "01",
                  title: "Valoración inicial",
                  text: "Revisamos encías, placa, sarro, manchas y posibles signos de inflamación.",
                },
                {
                  number: "02",
                  title: "Eliminación de sarro",
                  text: "Retiramos depósitos de sarro y placa acumulada mediante instrumental profesional.",
                },
                {
                  number: "03",
                  title: "Pulido dental",
                  text: "Se eliminan manchas superficiales y se pule la superficie dental cuando procede.",
                },
                {
                  number: "04",
                  title: "Pautas de higiene",
                  text: "Indicamos recomendaciones para mejorar el cepillado, seda dental o cepillos interdentales.",
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
                Beneficios de la limpieza dental profesional
              </h2>

              <p className="mt-4 text-base leading-relaxed text-gray-600">
                La higiene profesional ayuda a cuidar la salud oral y a detectar a tiempo
                problemas que pueden pasar desapercibidos.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  title: "Prevención de problemas de encías",
                  text: "Eliminar placa y sarro ayuda a reducir la inflamación gingival y el riesgo periodontal.",
                },
                {
                  title: "Mejor sensación de limpieza",
                  text: "Tras la higiene profesional, los dientes suelen sentirse más limpios y suaves.",
                },
                {
                  title: "Eliminación de manchas superficiales",
                  text: "Puede retirar pigmentaciones externas producidas por hábitos o alimentos.",
                },
                {
                  title: "Detección temprana",
                  text: "Durante la revisión pueden detectarse caries, inflamación o necesidades de tratamiento.",
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
                <strong className="text-gray-950">Nota importante:</strong> si existe
                enfermedad periodontal, una limpieza dental convencional puede no ser
                suficiente. En ese caso se valorará un tratamiento específico de encías.
              </p>
            </div>
          </div>
        </section>

        <ServiceFAQ
          items={faqItems}
          intro="Resolvemos algunas dudas habituales sobre limpieza dental profesional antes de pedir cita."
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
                  Limpieza dental en Córdoba centro
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
                  Pide cita para higiene dental
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Si notas sarro, manchas, encías inflamadas o hace tiempo que no revisas
                  tu boca, podemos valorar si necesitas una limpieza profesional.
                </p>

                <ul className="mt-6 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Revisión de dientes y encías.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-600" />
                    Eliminación de sarro y placa acumulada.
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