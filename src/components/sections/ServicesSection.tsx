"use client";

import { useState, useEffect, useCallback } from "react";
import { Drill, Smile, Sparkles, Heart, Microscope, Shield, X, ArrowRight, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clinic } from "@/config/clinic";
import { trackPhoneCall } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type ServiceCard = {
  id: string;
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  accentColor: string;
  title: string;
  description: string;
  detail: string;
  features: string[];
};

const serviceCards: ServiceCard[] = [
  {
    id: "implantologia",
    Icon: Drill,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    accentColor: "group-hover:border-t-teal-500",
    title: "Implantología Avanzada",
    description:
      "Implantes dentales en Córdoba con planificación digital 3D. Recupera dientes perdidos con una solución permanente que se siente como natural.",
    detail:
      "El implante dental es la solución más natural y duradera para sustituir dientes perdidos. Utilizamos titanio de grado médico y planificación digital 3D (CBCT) para garantizar la posición exacta. Cuando es posible, aplicamos protocolos de carga inmediata para reducir el número de visitas. El resultado es funcionalmente y estéticamente indistinguible de un diente natural.",
    features: [
      "Planificación 3D con tomografía CBCT",
      "Titanio de grado médico certificado",
      "Carga inmediata cuando el caso lo permite",
      "Seguimiento postoperatorio incluido",
    ],
  },
  {
    id: "ortodoncia",
    Icon: Smile,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    accentColor: "group-hover:border-t-blue-500",
    title: "Ortodoncia Integral",
    description:
      "Ortodoncia en Córdoba con brackets tradicionales o estéticos. Tratamientos personalizados para todas las edades.",
    detail:
      "Corregimos la posición de los dientes y la mordida con ortodoncia fija o removible, según el caso y las preferencias del paciente. Trabajamos con brackets metálicos, cerámicos (estéticos) y alineadores transparentes. Tratamos a niños, adolescentes y adultos con el mismo nivel de detalle y seguimiento.",
    features: [
      "Brackets metálicos y cerámicos disponibles",
      "Alineadores transparentes para adultos",
      "Tratamientos para niños desde los 7 años",
      "Retención personalizada al finalizar",
    ],
  },
  {
    id: "estetica",
    Icon: Sparkles,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    accentColor: "group-hover:border-t-amber-500",
    title: "Estética Dental",
    description:
      "Blanqueamiento profesional, carillas de porcelana y diseño de sonrisa digital en Córdoba. Resultados naturales.",
    detail:
      "Diseñamos sonrisas que se adaptan a tu rostro y personalidad. Desde blanqueamientos de efecto inmediato hasta carillas de porcelana ultrafinas que no requieren reducción dental. Nuestro software de diseño de sonrisa digital te permite ver el resultado antes de empezar el tratamiento.",
    features: [
      "Blanqueamiento profesional en consulta y domicilio",
      "Carillas de porcelana o composite",
      "Diseño digital de sonrisa previo",
      "Resultados visibles desde la primera sesión",
    ],
  },
  {
    id: "periodoncia",
    Icon: Heart,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-600",
    accentColor: "group-hover:border-t-rose-500",
    title: "Periodoncia Especializada",
    description:
      "Tratamiento de enfermedades de encías en Córdoba con técnicas microquirúrgicas avanzadas.",
    detail:
      "La enfermedad periodontal (periodontitis) es la causa más frecuente de pérdida de dientes en adultos. Diagnosticamos y tratamos desde gingivitis leve hasta casos avanzados de periodontitis, utilizando técnicas regenerativas y microquirúrgicas para preservar el hueso y las encías.",
    features: [
      "Diagnóstico periodontal completo",
      "Raspado y alisado radicular",
      "Cirugía regenerativa cuando aplica",
      "Programa de mantenimiento personalizado",
    ],
  },
  {
    id: "endodoncia",
    Icon: Microscope,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
    accentColor: "group-hover:border-t-violet-500",
    title: "Endodoncia Microscópica",
    description:
      "Endodoncia con microscopio clínico en Córdoba. Máxima precisión en tratamiento de conductos.",
    detail:
      "La endodoncia con microscopio permite tratar los conductos radiculares con una precisión imposible a simple vista. Localizamos conductos accesorios, eliminamos completamente la infección y sellamos herméticamente. Esto permite salvar dientes que en otras circunstancias requerirían extracción.",
    features: [
      "Microscopio clínico de alta resolución",
      "Localización de conductos accesorios",
      "Técnicas rotatorias de última generación",
      "Mínimas molestias durante y después",
    ],
  },
  {
    id: "prostodoncia",
    Icon: Shield,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    accentColor: "group-hover:border-t-emerald-500",
    title: "Prostodoncia Avanzada",
    description:
      "Rehabilitaciones completas en Córdoba con prótesis de alta gama diseñadas digitalmente.",
    detail:
      "Restauramos sonrisas completas mediante prótesis fijas, removibles y sobre implantes. Diseñamos digitalmente cada pieza para garantizar ajuste perfecto, estética natural y durabilidad máxima. Las coronas de circonio son indistinguibles de los dientes naturales y extremadamente resistentes.",
    features: [
      "Coronas de porcelana y circonio",
      "Prótesis sobre implantes",
      "Diseño digital CAD/CAM",
      "Garantía de calidad en todos los materiales",
    ],
  },
];

/* ── Modal de detalle del servicio ── */
function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceCard;
  onClose: () => void;
}) {
  const { Icon, iconBg, iconColor, title, detail, features } = service;

  // Cerrar con Escape
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle: ${title}`}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-[fadeUp_0.22s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className={cn("flex items-center gap-4 p-6 border-b border-gray-100")}>
          <div
            className={cn(
              "flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center",
              iconBg
            )}
            aria-hidden="true"
          >
            <Icon className={cn("w-6 h-6", iconColor)} strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 flex-1 leading-tight">{title}</h3>
          <button
            onClick={onClose}
            className="flex-shrink-0 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Cerrar detalle"
          >
            <X className="w-4 h-4 text-gray-600" aria-hidden="true" />
          </button>
        </div>

        {/* Cuerpo del modal */}
        <div className="p-6 space-y-5">
          <p className="text-gray-600 leading-relaxed text-sm">{detail}</p>
          <ul className="space-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span
                  className={cn(
                    "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 text-white text-[10px] font-bold",
                    "bg-teal-500"
                  )}
                  aria-hidden="true"
                >
                  ✓
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer del modal — CTA */}
        <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={`tel:${clinic.contact.phone}`}
            onClick={() => trackPhoneCall("service_modal")}
            className="flex-1 flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-5 py-3 rounded-xl transition-colors min-h-[44px] text-sm"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            Pedir cita: {clinic.contact.phoneDisplay}
          </a>
          <button
            onClick={onClose}
            className="sm:w-auto px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors min-h-[44px]"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expanded = serviceCards.find((s) => s.id === expandedId) ?? null;

  return (
    <section
      id="servicios"
      aria-labelledby="servicios-heading"
      className="py-14 md:py-20 bg-gray-50"
    >
      <Container>
        <SectionHeader
          id="servicios-heading"
          badge="Nuestros tratamientos"
          title="Tratamientos Dentales en Córdoba"
          subtitle="Tu dentista de confianza en Córdoba. Décadas de experiencia clínica con las técnicas más avanzadas de la odontología europea."
        />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          role="list"
        >
          {serviceCards.map(({ id, Icon, iconBg, iconColor, title, description }, index) => (
            <li
              key={id}
              data-reveal
              data-reveal-delay={index > 0 ? String(index * 100) : undefined}
            >
              {/* Card — no cursor-default porque es clickable */}
              <button
                type="button"
                onClick={() => setExpandedId(id)}
                aria-label={`Ver detalle de ${title}`}
                className={cn(
                  "group w-full text-left",
                  "bg-white rounded-2xl p-6",
                  "border border-gray-200/80",
                  "shadow-[0_2px_8px_rgba(0,0,0,0.05)]",
                  "hover:shadow-[0_8px_24px_rgba(0,0,0,0.09)]",
                  "hover:border-gray-300",
                  "transition-all duration-300 hover:-translate-y-0.5",
                  "flex flex-col",
                  // Línea de acento superior al hacer hover
                  "relative overflow-hidden",
                  "before:absolute before:top-0 before:left-0 before:right-0 before:h-[3px]",
                  "before:bg-teal-500 before:scale-x-0 before:origin-left",
                  "before:transition-transform before:duration-300",
                  "hover:before:scale-x-100"
                )}
              >
                {/* Icono */}
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center mb-4",
                    iconBg,
                    "transition-transform duration-300 group-hover:scale-105"
                  )}
                  aria-hidden="true"
                >
                  <Icon className={cn("w-5 h-5", iconColor)} strokeWidth={1.5} />
                </div>

                {/* Título */}
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug mb-2.5 group-hover:text-teal-700 transition-colors">
                  {title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-500 leading-relaxed text-[13px] flex-1">
                  {description}
                </p>

                {/* Enlace ver detalle */}
                <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-teal-600 group-hover:text-teal-700 transition-colors">
                  Ver detalle
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* CTA de sección */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">
            ¿No encuentras lo que buscas? Consúltanos — tenemos solución para cada caso.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 min-h-[44px] text-sm"
          >
            Consultar sin compromiso
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </Container>

      {/* Modal de detalle */}
      {expanded && (
        <ServiceModal
          service={expanded}
          onClose={() => setExpandedId(null)}
        />
      )}
    </section>
  );
}
