import { GraduationCap, Clock, Microscope, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import type { LucideIcon } from "lucide-react";

type Credential = {
  Icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
};

const credentials: Credential[] = [
  {
    Icon: GraduationCap,
    title: "Universidad de Montpellier",
    description: "Formación de élite en una de las mejores facultades de medicina de Europa",
    delay: "100",
  },
  {
    Icon: Clock,
    title: "35 Años de Experiencia",
    description: "Más de tres décadas ejerciendo en Córdoba con miles de casos resueltos",
    delay: "200",
  },
  {
    Icon: Microscope,
    title: "Tecnología 3D Avanzada",
    description: "Diagnóstico CBCT, planificación digital y microscopio clínico",
    delay: "300",
  },
  {
    Icon: Globe,
    title: "Formación Continua Europea",
    description: "Actualización constante en los mejores centros dentales de Europa",
    delay: "400",
  },
];

export function CredentialsSection() {
  return (
    <section
      id="credenciales"
      aria-labelledby="credenciales-heading"
      className="py-10 md:py-14 bg-white border-b border-gray-100"
    >
      <Container>
        <SectionHeader
          id="credenciales-heading"
          badge="Por qué elegirnos"
          title="Experiencia, Formación y Tecnología"
          subtitle="Cuatro pilares que hacen de nuestra clínica la referencia dental en Córdoba."
        />
        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
          role="list"
        >
          {credentials.map(({ Icon, title, description, delay }) => (
            <li
              key={title}
              data-reveal
              data-reveal-delay={delay}
              className="flex flex-col items-center text-center p-4 sm:p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:border-teal-200 hover:shadow-md transition-all duration-300 group"
            >
              <div
                className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-600 text-white mb-3 sm:mb-4 shadow-md group-hover:scale-105 group-hover:bg-teal-700 transition-all duration-300"
                aria-hidden="true"
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-bold text-gray-900 leading-snug mb-2">
                {title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
