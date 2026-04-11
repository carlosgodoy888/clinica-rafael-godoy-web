import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies en clinicarafaelgodoy.es. Gestión y configuración de cookies.",
  alternates: { canonical: `${site.domain}/politica-cookies` },
  robots: { index: false, follow: false },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="Abril 2026">
      <section>
        <h2>1. ¿Qué son las Cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo
          cuando visita un sitio web. Permiten que el sitio recuerde sus preferencias y
          acciones durante un período de tiempo, para que no tenga que volver a
          introducirlas cuando visite de nuevo el sitio o navegue de una página a otra.
        </p>
      </section>

      <section>
        <h2>2. Cookies que Utilizamos</h2>

        <h3>2.1 Cookies Estrictamente Necesarias</h3>
        <p>
          Son imprescindibles para el funcionamiento del sitio web. Sin estas cookies,
          el sitio no puede funcionar correctamente. No requieren su consentimiento.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CookieConsent</td>
              <td>Cookiebot</td>
              <td>Almacena el estado de consentimiento del usuario</td>
              <td>1 año</td>
            </tr>
          </tbody>
        </table>

        <h3>2.2 Cookies de Estadísticas</h3>
        <p>
          Nos ayudan a entender cómo los visitantes interactúan con el sitio web
          recopilando información de forma anónima. Solo se activan si acepta esta
          categoría.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distingue usuarios únicos</td>
              <td>2 años</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Google Analytics</td>
              <td>Mantiene el estado de la sesión</td>
              <td>2 años</td>
            </tr>
          </tbody>
        </table>

        <h3>2.3 Cookies de Marketing</h3>
        <p>
          Nuestro sitio incluye un mapa interactivo de Google Maps. Si acepta
          las cookies de marketing, Google Maps se activará y puede establecer
          sus propias cookies con fines de personalización y publicidad según
          sus propias políticas.
        </p>
        <table>
          <thead>
            <tr>
              <th>Servicio</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Condición</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Maps</td>
              <td>Google LLC</td>
              <td>Mapa interactivo embebido; Google puede establecer cookies de personalización</td>
              <td>Solo si acepta cookies de marketing</td>
            </tr>
          </tbody>
        </table>
        <p>
          Si rechaza las cookies de marketing, el mapa no se cargará pero seguirá
          pudiendo acceder a nuestra dirección y abrirnos en Google Maps o Apple
          Maps usando los botones disponibles.
        </p>
      </section>

      <section>
        <h2>3. Cookies de Terceros</h2>
        <p>
          Nuestro sitio puede incluir contenido embebido de terceros (como Google Maps).
          Estos servicios pueden establecer sus propias cookies cuando interactúa con
          ellos. Consulte las políticas de privacidad de dichos proveedores:
        </p>
        <ul>
          <li>
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Política de privacidad de Google
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Cómo Gestionar sus Preferencias</h2>
        <p>
          Puede gestionar sus preferencias de cookies en cualquier momento a través del
          panel de configuración de cookies de este sitio (banner de consentimiento).
          También puede configurar su navegador para bloquear o eliminar cookies:
        </p>
        <ul>
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Tenga en cuenta que bloquear todas las cookies puede afectar al funcionamiento
          de algunos sitios web.
        </p>
      </section>

      <section>
        <h2>5. Base Legal</h2>
        <p>
          El uso de cookies está regulado por la Ley 34/2002, de Servicios de la Sociedad
          de la Información (LSSI), y el Reglamento General de Protección de Datos (RGPD).
          Las cookies estrictamente necesarias se basan en el interés legítimo del
          responsable; el resto requieren su consentimiento previo e informado.
        </p>
      </section>

      <section>
        <h2>6. Actualización de esta Política</h2>
        <p>
          Podemos actualizar esta Política de Cookies cuando sea necesario. Le notificaremos
          de cambios significativos a través del banner de cookies. La fecha de última
          actualización aparece en el encabezado de esta página.
        </p>
        <p>
          Para cualquier consulta sobre nuestra política de cookies, puede contactarnos en{" "}
          <a href="mailto:info@clinicarafaelgodoy.es">info@clinicarafaelgodoy.es</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
