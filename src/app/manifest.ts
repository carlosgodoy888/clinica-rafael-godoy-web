import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Clínica Dental Dr. Rafael Godoy",
    short_name: "Dr. Rafael Godoy",
    description:
      "Especialista en Estomatología con 35 años de experiencia en Córdoba.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#007C7C",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
