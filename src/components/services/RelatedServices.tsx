import Link from "next/link";
import { ArrowRight } from "lucide-react";

export type RelatedService = {
  title: string;
  description: string;
  href: string;
};

type RelatedServicesProps = {
  eyebrow?: string;
  title?: string;
  services: RelatedService[];
};

export function RelatedServices({
  eyebrow = "Más tratamientos",
  title = "Tratamientos relacionados",
  services,
}: RelatedServicesProps) {
  if (services.length === 0) return null;

  return (
    <section
      id="tratamientos-relacionados"
      aria-labelledby="related-services-heading"
      className="bg-teal-50/70 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          {eyebrow}
        </p>

        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              id="related-services-heading"
              className="text-3xl md:text-4xl font-bold tracking-tight text-gray-950"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600">
              Explora otros tratamientos dentales disponibles en la clínica y encuentra
              la opción más adecuada para tu caso.
            </p>
          </div>

          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 text-sm font-bold text-teal-700 hover:text-teal-800"
          >
            Ver servicios de la clínica
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-gray-950 group-hover:text-teal-700 transition-colors">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
                Saber más
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}