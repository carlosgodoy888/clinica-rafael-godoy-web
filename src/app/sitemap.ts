import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { treatments } from "@/config/treatments";

/**
 * Sitemap principal de la web.
 *
 * IMPORTANTE:
 * - Solo incluimos páginas que queremos que Google pueda indexar.
 * - No incluimos páginas legales porque están configuradas con `noindex`.
 * - No incluimos URLs con anclas como /#servicios, /#doctor o /#contacto.
 * - No incluimos páginas duplicadas ni URLs antiguas.
 *
 * Estructura indexable actual:
 * - Home: /
 * - Índice de tratamientos: /tratamientos
 * - Páginas individuales de tratamientos: /tratamientos/[slug]
 */

/**
 * Fecha de última modificación real de la home.
 *
 * La actualizamos porque hemos cambiado la sección de servicios de la home
 * para enlazar a páginas reales de tratamientos.
 */
const LAST_HOME_UPDATE = new Date("2026-04-30");

/**
 * Fecha de última modificación de la arquitectura de tratamientos.
 *
 * Usamos una fecha común porque las páginas de tratamientos se han creado
 * en el mismo bloque de trabajo.
 *
 * Si en el futuro editas solo una página concreta, puedes hacer el sitemap
 * más granular añadiendo una fecha específica por tratamiento.
 */
const LAST_TREATMENTS_UPDATE = new Date("2026-04-30");

/**
 * Páginas legales:
 *
 * Las páginas legales existen y siguen siendo accesibles para el usuario,
 * pero NO las incluimos en el sitemap porque las hemos dejado con `noindex`.
 *
 * Motivo:
 * - No queremos que Google priorice aviso legal, privacidad o cookies.
 * - Son páginas de cumplimiento, no páginas comerciales.
 * - Ya están enlazadas desde el footer para usuarios.
 *
 * Páginas excluidas intencionadamente:
 * - /aviso-legal
 * - /politica-privacidad
 * - /politica-cookies
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const homeUrl = site.domain;
  const treatmentsIndexUrl = `${site.domain}/tratamientos`;

  const treatmentPages: MetadataRoute.Sitemap = treatments.map((treatment) => ({
    url: `${site.domain}${treatment.href}`,
    lastModified: LAST_TREATMENTS_UPDATE,
    changeFrequency: "monthly",
    priority: treatment.isPrimary ? 0.8 : 0.65,
  }));

  return [
    /**
     * Página principal.
     *
     * Es la URL más importante del sitio:
     * - Clínica dental en Córdoba
     * - Dentista en Córdoba
     * - Marca Dr. Rafael Godoy
     */
    {
      url: homeUrl,
      lastModified: LAST_HOME_UPDATE,
      changeFrequency: "monthly",
      priority: 1.0,
    },

    /**
     * Página índice de tratamientos.
     *
     * Es la página madre de la arquitectura de servicios/tratamientos.
     */
    {
      url: treatmentsIndexUrl,
      lastModified: LAST_TREATMENTS_UPDATE,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    /**
     * Páginas individuales de tratamientos.
     *
     * Se generan automáticamente desde src/config/treatments.ts.
     */
    ...treatmentPages,
  ];
}