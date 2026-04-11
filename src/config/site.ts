export const site = {
  name: "Clínica Dental Dr. Rafael Godoy",
  shortName: "Dr. Rafael Godoy",
  description:
    "Clínica dental en Córdoba con 35 años de experiencia. Implantología, ortodoncia, estética dental y más. Dr. Rafael Godoy Pizarro, Médico Estomatólogo formado en la Universidad de Montpellier.",
  domain: "https://clinicarafaelgodoy.es",
  locale: "es_ES",
  primaryKeywords: [
    "clínica dental córdoba",
    "dentista córdoba",
    "dr rafael godoy córdoba",
  ],
  // Los IDs se leen de variables de entorno para poder sobrescribirlos
  // por entorno desde el dashboard de Vercel.
  // Los valores hardcoded actúan como fallback si la env var no existe.
  tracking: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T89SFQTZ",
    cookiebotId:
      process.env.NEXT_PUBLIC_COOKIEBOT_ID ??
      "c7975d1-bb51-4502-90ba-26d82b4223fa",
  },
};
