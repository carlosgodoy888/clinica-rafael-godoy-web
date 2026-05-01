import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Información sobre el uso de cookies y almacenamiento local en clinicarafaelgodoy.es. Gestión y configuración de preferencias.",
  alternates: { canonical: `${site.domain}/politica-cookies` },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function PoliticaCookiesPage() {
  return (
    <LegalLayout title="Política de Cookies" lastUpdated="Mayo 2026">
      <section>
        <h2>1. ¿Qué son las cookies y tecnologías similares?</h2>
        <p>
          Las cookies son pequeños archivos que se almacenan en el dispositivo del
          usuario cuando visita un sitio web. Además de cookies, una web puede utilizar
          tecnologías similares, como el almacenamiento local del navegador
          (&quot;localStorage&quot;), para recordar determinadas preferencias técnicas.
        </p>
        <p>
          En esta política utilizamos el término &quot;cookies&quot; de forma amplia para
          referirnos tanto a cookies como a tecnologías similares que permiten recordar
          preferencias, medir el uso de la web o mejorar su funcionamiento.
        </p>
      </section>

      <section>
        <h2>2. Sistema de consentimiento utilizado</h2>
        <p>
          Este sitio web utiliza un sistema propio de gestión de consentimiento. Ya no
          dependemos de plataformas externas de gestión de cookies para mostrar el
          banner o guardar las preferencias del usuario.
        </p>
        <p>
          Cuando accede por primera vez a la web, puede aceptar todas las cookies
          opcionales o gestionar sus preferencias. Dentro del panel de configuración puede
          activar o desactivar las categorías opcionales disponibles.
        </p>
        <p>
          Puede modificar su elección en cualquier momento desde el enlace
          <strong> Configurar cookies</strong> disponible en el pie de página de la web.
        </p>
      </section>

      <section>
        <h2>3. Categorías de cookies y almacenamiento que utilizamos</h2>

        <h3>3.1 Cookies y almacenamiento estrictamente necesarios</h3>
        <p>
          Son imprescindibles para que el sitio web funcione correctamente, mantener la
          seguridad, recordar sus preferencias de consentimiento y permitir la navegación.
          No requieren consentimiento previo.
        </p>

        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>clinic_cookie_consent</td>
              <td>Almacenamiento local</td>
              <td>Propio</td>
              <td>
                Guarda la elección del usuario sobre cookies necesarias, analíticas y de
                marketing.
              </td>
              <td>12 meses</td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 Cookies de analítica</h3>
        <p>
          Nos ayudan a conocer cómo se utiliza la web, qué páginas o tratamientos se
          consultan más, y a medir interacciones relevantes como llamadas iniciadas,
          clics en ubicación o clics en botones de contacto. Solo se activan si el
          usuario las permite.
        </p>

        <table>
          <thead>
            <tr>
              <th>Cookie / Servicio</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Duración habitual</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google Tag Manager</td>
              <td>Google LLC</td>
              <td>
                Permite gestionar etiquetas de medición y eventos de analítica de forma
                centralizada.
              </td>
              <td>Según configuración de las etiquetas cargadas</td>
            </tr>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distingue usuarios de forma seudónima para elaborar estadísticas.</td>
              <td>Hasta 2 años</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Google Analytics</td>
              <td>Mantiene el estado de la sesión y medición de visitas.</td>
              <td>Hasta 2 años</td>
            </tr>
          </tbody>
        </table>

        <h3>3.3 Cookies de marketing</h3>
        <p>
          Las cookies de marketing permitirían medir campañas publicitarias, mejorar la
          atribución de anuncios y, en su caso, activar funcionalidades publicitarias de
          Google u otros proveedores. Actualmente esta categoría queda preparada para
          futuras campañas y solo se activará si el usuario la permite.
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
              <td>Google Ads / medición publicitaria</td>
              <td>Google LLC</td>
              <td>
                Medición de campañas, conversiones publicitarias y mejora de anuncios,
                si se activan campañas en el futuro.
              </td>
              <td>Solo si el usuario acepta cookies de marketing</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>4. Google Consent Mode</h2>
        <p>
          Esta web utiliza una configuración compatible con Google Consent Mode. Por
          defecto, las finalidades de analítica y publicidad permanecen denegadas hasta
          que el usuario decide sus preferencias.
        </p>
        <p>
          Si el usuario acepta las cookies de analítica, se permite el almacenamiento
          asociado a medición estadística. Si acepta las cookies de marketing, se
          habilitan, en su caso, las señales publicitarias correspondientes. Si rechaza o
          desactiva estas categorías, dichas finalidades permanecen denegadas.
        </p>
      </section>

      <section>
        <h2>5. Cookies de terceros</h2>
        <p>
          Algunos servicios utilizados por esta web pueden ser prestados por terceros,
          principalmente Google LLC, en relación con analítica, medición o enlaces a
          servicios externos como Google Maps.
        </p>
        <p>
          Puede consultar información adicional sobre el tratamiento realizado por Google
          en su política de privacidad:
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
        <h2>6. Cómo gestionar o retirar el consentimiento</h2>
        <p>
          Puede gestionar sus preferencias en cualquier momento desde el enlace
          <strong> Configurar cookies</strong> situado en el pie de página de este sitio
          web.
        </p>
        <p>
          Desde ese panel puede mantener activadas todas las categorías opcionales,
          desactivar analítica o marketing, o guardar una selección personalizada.
        </p>
        <p>
          También puede bloquear o eliminar cookies y datos de sitios web desde la
          configuración de su navegador:
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
          Tenga en cuenta que bloquear determinadas cookies o tecnologías similares puede
          afectar a la medición de la web, aunque las funciones básicas de navegación,
          contacto y llamada seguirán disponibles.
        </p>
      </section>

      <section>
        <h2>7. Base jurídica</h2>
        <p>
          El uso de cookies y tecnologías similares se rige por la Ley 34/2002, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI), el
          Reglamento General de Protección de Datos (RGPD) y la normativa española de
          protección de datos aplicable.
        </p>
        <p>
          Las cookies o mecanismos estrictamente necesarios se utilizan por ser
          imprescindibles para el funcionamiento del sitio. Las cookies de analítica y
          marketing se utilizan únicamente sobre la base del consentimiento del usuario.
        </p>
      </section>

      <section>
        <h2>8. Actualización de esta política</h2>
        <p>
          Podemos actualizar esta Política de Cookies cuando sea necesario, por ejemplo
          si modificamos las herramientas de medición, añadimos nuevas funcionalidades o
          cambiamos el sistema de consentimiento.
        </p>
        <p>
          Para cualquier consulta sobre esta política, puede contactarnos en{" "}
          <a href="mailto:info@clinicarafaelgodoy.es">info@clinicarafaelgodoy.es</a>.
        </p>
      </section>
    </LegalLayout>
  );
}