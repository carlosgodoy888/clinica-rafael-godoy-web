import { GraduationCap, Trophy, Cpu, HeartHandshake, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

type Feature = {
  Icon: LucideIcon;
  iconBg: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    Icon: GraduationCap,
    iconBg: "bg-teal-600",
    title: "Formación Europea de Élite",
    description:
      "Especialista titulado por la Universidad de Montpellier —una de las mejores facultades de medicina de Europa— con formación continua en los principales centros europeos. Estándares internacionales aplicados en Córdoba.",
  },
  {
    Icon: Trophy,
    iconBg: "bg-amber-500",
    title: "35 Años de Experiencia Demostrada",
    description:
      "Más de tres décadas ejerciendo en Córdoba con miles de casos complejos resueltos con éxito. Generaciones de familias cordobesas nos confían su salud dental porque los resultados hablan por sí solos.",
  },
  {
    Icon: Cpu,
    iconBg: "bg-violet-600",
    title: "Tecnología de Vanguardia",
    description:
      "Diagnóstico 3D con tomografía CBCT, cirugía láser, microscopio clínico y sistemas de planificación digital. Invertimos constantemente en tecnología para ofrecerte resultados más precisos y predecibles.",
  },
  {
    Icon: HeartHandshake,
    iconBg: "bg-rose-500",
    title: "Atención Personalizada y Humana",
    description:
      "Tiempo dedicado a escucharte y entender tus necesidades reales. Explicaciones claras antes de cada procedimiento, sin tecnicismos. Acompañamiento durante todo el proceso. El trato humano que marca la diferencia.",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="por-que-elegirnos"
      aria-labelledby="whyus-heading"
      className="py-14 md:py-20 bg-white"
    >
      <Container>
        <SectionHeader
          id="whyus-heading"
          badge="Nuestra diferencia"
          title="Por Qué Somos Tu Clínica Dental de Referencia en Córdoba"
          subtitle="La elección natural para quienes buscan calidad contrastada, tecnología de vanguardia y un trato verdaderamente personalizado en el centro de Córdoba."
        />

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" role="list">
          {features.map(({ Icon, iconBg, title, description }, index) => (
            <li
              key={title}
              data-reveal
              data-reveal-delay={index > 0 ? String(index * 100) : undefined}
              className="flex gap-4 bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100 hover:border-teal-100 hover:shadow-md transition-all duration-200"
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl ${iconBg} text-white shadow-sm mt-0.5`}
                aria-hidden="true"
              >
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Enlace de continuidad — sin duplicar el CTA de teléfono */}
        <div className="mt-10 text-center">
          <a
            href="#doctor"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm transition-colors group"
          >
            Conoce al Dr. Rafael Godoy
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
