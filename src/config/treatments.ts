export type TreatmentCategory =
  | "Ortodoncia"
  | "Implantes"
  | "Estética dental"
  | "Odontología conservadora"
  | "Encías"
  | "Prótesis"
  | "Prevención"
  | "Cirugía oral";

export type Treatment = {
  id: string;
  title: string;
  shortTitle: string;
  href: string;
  description: string;
  category: TreatmentCategory;
  isPrimary: boolean;
};

export const treatments: Treatment[] = [
  {
    id: "ortodoncia",
    title: "Ortodoncia en Córdoba",
    shortTitle: "Ortodoncia",
    href: "/tratamientos/ortodoncia-cordoba",
    description:
      "Tratamientos de ortodoncia para niños, adolescentes y adultos, con valoración personalizada y seguimiento clínico.",
    category: "Ortodoncia",
    isPrimary: true,
  },
  {
    id: "endodoncia",
    title: "Endodoncia en Córdoba",
    shortTitle: "Endodoncia",
    href: "/tratamientos/endodoncia-cordoba",
    description:
      "Tratamiento de conductos para conservar dientes afectados por caries profundas, infección o lesión pulpar.",
    category: "Odontología conservadora",
    isPrimary: true,
  },
  {
    id: "implantes-dentales",
    title: "Implantes dentales en Córdoba",
    shortTitle: "Implantes dentales",
    href: "/tratamientos/implantes-dentales-cordoba",
    description:
      "Tratamientos para reponer dientes perdidos y recuperar función masticatoria, estética y estabilidad oral.",
    category: "Implantes",
    isPrimary: true,
  },
  {
    id: "estetica-dental",
    title: "Estética dental en Córdoba",
    shortTitle: "Estética dental",
    href: "/tratamientos/estetica-dental-cordoba",
    description:
      "Tratamientos orientados a mejorar la armonía de la sonrisa de forma natural y personalizada.",
    category: "Estética dental",
    isPrimary: true,
  },
  {
    id: "blanqueamiento-dental",
    title: "Blanqueamiento dental en Córdoba",
    shortTitle: "Blanqueamiento dental",
    href: "/tratamientos/blanqueamiento-dental-cordoba",
    description:
      "Tratamiento estético para aclarar el color de los dientes naturales con valoración previa.",
    category: "Estética dental",
    isPrimary: true,
  },
  {
    id: "limpieza-dental",
    title: "Limpieza dental en Córdoba",
    shortTitle: "Limpieza dental",
    href: "/tratamientos/limpieza-dental-cordoba",
    description:
      "Higiene profesional para eliminar placa, sarro y manchas superficiales, ayudando a cuidar las encías.",
    category: "Prevención",
    isPrimary: true,
  },
  {
    id: "periodoncia",
    title: "Periodoncia en Córdoba",
    shortTitle: "Periodoncia",
    href: "/tratamientos/periodoncia-cordoba",
    description:
      "Tratamiento de encías inflamadas, sangrado, gingivitis, periodontitis y mantenimiento periodontal.",
    category: "Encías",
    isPrimary: true,
  },
  {
    id: "protesis-dental",
    title: "Prótesis dental en Córdoba",
    shortTitle: "Prótesis dental",
    href: "/tratamientos/protesis-dental-cordoba",
    description:
      "Coronas, puentes, prótesis removibles y rehabilitaciones para recuperar función y estética.",
    category: "Prótesis",
    isPrimary: true,
  },
  {
    id: "ortodoncia-infantil",
    title: "Ortodoncia infantil en Córdoba",
    shortTitle: "Ortodoncia infantil",
    href: "/tratamientos/ortodoncia-infantil-cordoba",
    description:
      "Valoración de mordida, crecimiento y alineación dental en niños durante la etapa de desarrollo.",
    category: "Ortodoncia",
    isPrimary: false,
  },
  {
    id: "carillas-dentales",
    title: "Carillas dentales en Córdoba",
    shortTitle: "Carillas dentales",
    href: "/tratamientos/carillas-dentales-cordoba",
    description:
      "Tratamiento estético para mejorar forma, color, proporción y armonía de la sonrisa.",
    category: "Estética dental",
    isPrimary: false,
  },
  {
    id: "ferula-descarga-bruxismo",
    title: "Férula de descarga y bruxismo en Córdoba",
    shortTitle: "Bruxismo y férula",
    href: "/tratamientos/ferula-descarga-bruxismo-cordoba",
    description:
      "Valoración del bruxismo, apretamiento dental, desgaste y férula de descarga personalizada.",
    category: "Odontología conservadora",
    isPrimary: false,
  },
  {
    id: "empastes-dentales",
    title: "Empastes dentales en Córdoba",
    shortTitle: "Empastes dentales",
    href: "/tratamientos/empastes-dentales-cordoba",
    description:
      "Tratamiento de caries, pequeñas fracturas y restauraciones deterioradas.",
    category: "Odontología conservadora",
    isPrimary: false,
  },
  {
    id: "revision-dental",
    title: "Revisión dental en Córdoba",
    shortTitle: "Revisión dental",
    href: "/tratamientos/revision-dental-cordoba",
    description:
      "Chequeo dental para valorar dientes, encías, caries, restauraciones y salud oral general.",
    category: "Prevención",
    isPrimary: false,
  },
  {
    id: "extracciones-dentales",
    title: "Extracciones dentales en Córdoba",
    shortTitle: "Extracciones dentales",
    href: "/tratamientos/extracciones-dentales-cordoba",
    description:
      "Valoración de dientes muy dañados, infectados, fracturados o que no pueden conservarse.",
    category: "Cirugía oral",
    isPrimary: false,
  },
];

export const primaryTreatments = treatments.filter((treatment) => treatment.isPrimary);

export const secondaryTreatments = treatments.filter(
  (treatment) => !treatment.isPrimary
);