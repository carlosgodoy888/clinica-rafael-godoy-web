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
  // El ID de GTM se lee de variable de entorno para poder sobrescribirlo
  // desde Vercel. El valor hardcoded actúa como fallback si la env var no existe.
  tracking: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T89SFQTZ",
  },
};