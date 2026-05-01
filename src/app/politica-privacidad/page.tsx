import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Información sobre protección de datos personales y privacidad en la Clínica Dental Dr. Rafael Godoy. Cumplimiento RGPD.",
  alternates: { canonical: `${site.domain}/politica-privacidad` },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function PoliticaPrivacidadPage() {
  return (
    <LegalLayout title="Política de Privacidad" lastUpdated="Mayo 2026">
      <section>
        <h2>1. Responsable del Tratamiento</h2>
        <ul>
          <li>
            <strong>Identidad:</strong> {clinic.doctor.fullName}
          </li>
          <li>
            <strong>NIF:</strong> [30198521G]
          </li>
          <li>
            <strong>Dirección:</strong> {clinic.contact.address.street},{" "}
            {clinic.contact.address.postalCode} {clinic.contact.address.city}
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href={`tel:${clinic.contact.phone}`}>{clinic.contact.phoneDisplay}</a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${clinic.contact.email}`}>{clinic.contact.email}</a>
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Finalidad del Tratamiento</h2>
        <p>
          En {clinic.name} tratamos los datos personales que nos facilita con las
          siguientes finalidades:
        </p>
        <ul>
          <li>
            <strong>Gestión de citas y pacientes:</strong> Administrar las citas médicas
            y el historial clínico de los pacientes, en cumplimiento de la normativa
            sanitaria aplicable.
          </li>
          <li>
            <strong>Comunicación:</strong> Responder a consultas realizadas a través de
            los canales de contacto disponibles, principalmente teléfono y correo
            electrónico.
          </li>
          <li>
            <strong>Analítica web:</strong> Analizar el uso del sitio web mediante
            herramientas de medición, como Google Tag Manager y Google Analytics, solo
            cuando el usuario haya prestado su consentimiento previo.
          </li>
          <li>
            <strong>Gestión del consentimiento:</strong> Recordar la elección del usuario
            sobre cookies y tecnologías similares mediante un sistema propio de
            preferencias.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. Base Legal del Tratamiento</h2>
        <ul>
          <li>
            <strong>Ejecución de un contrato o relación precontractual:</strong> Para la
            gestión de la relación médico-paciente (art. 6.1.b RGPD).
          </li>
          <li>
            <strong>Cumplimiento de obligación legal:</strong> Para el mantenimiento de
            historiales clínicos según la Ley 41/2002 y normativa sanitaria (art. 6.1.c
            RGPD).
          </li>
          <li>
            <strong>Consentimiento:</strong> Para el envío de comunicaciones solicitadas
            por el usuario, la analítica web y el uso de cookies o tecnologías similares
            no necesarias (art. 6.1.a RGPD).
          </li>
          <li>
            <strong>Interés legítimo:</strong> Para la gestión interna de la actividad
            profesional, seguridad del sitio web y funcionamiento técnico básico
            (art. 6.1.f RGPD).
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Categorías Especiales de Datos</h2>
        <p>
          En el ámbito de la relación sanitaria, tratamos datos de salud de nuestros
          pacientes, categoría especial de datos según el art. 9 del RGPD. El tratamiento
          se basa en el art. 9.2.h RGPD (asistencia sanitaria), con las garantías
          previstas en la normativa vigente.
        </p>
        <p>
          A través de esta web informativa no se recogen historiales clínicos ni datos de
          salud mediante formularios online. Si el usuario contacta por teléfono o correo
          electrónico, deberá evitar enviar información clínica sensible salvo que sea
          estrictamente necesario para la gestión de su consulta.
        </p>
      </section>

      <section>
        <h2>5. Conservación de los Datos</h2>
        <p>
          Los datos de pacientes se conservarán durante el tiempo mínimo necesario para
          cumplir con la normativa sanitaria aplicable (mínimo 5 años según la Ley
          41/2002, y los plazos específicos de la normativa andaluza de salud). Los datos
          de contacto se conservarán mientras exista interés en mantener la relación y
          durante los plazos de prescripción legales.
        </p>
        <p>
          Las preferencias de cookies y tecnologías similares se conservan durante un
          máximo de 12 meses, salvo que el usuario las modifique o elimine antes desde su
          navegador.
        </p>
      </section>

      <section>
        <h2>6. Destinatarios de los Datos</h2>
        <p>
          No cedemos sus datos a terceros salvo obligación legal. Utilizamos proveedores
          de servicios tecnológicos con garantías adecuadas de protección de datos. En
          concreto:
        </p>
        <ul>
          <li>
            <strong>Vercel Inc.</strong> (hosting web) — Prestación del servicio de
            alojamiento y despliegue del sitio web.
          </li>
          <li>
            <strong>Google LLC</strong> (Google Tag Manager y Google Analytics, solo con
            consentimiento) — Medición de uso del sitio web y eventos de interacción,
            como llamadas iniciadas, clics en ubicación o navegación por tratamientos.
          </li>
        </ul>
        <p>
          El uso de servicios de terceros puede implicar transferencias internacionales de
          datos. En esos casos, se aplicarán las garantías previstas por la normativa de
          protección de datos aplicable.
        </p>
      </section>

      <section>
        <h2>7. Sus Derechos</h2>
        <p>
          Puede ejercer los siguientes derechos enviando un escrito a{" "}
          <a href={`mailto:${clinic.contact.email}`}>{clinic.contact.email}</a> o a la
          dirección postal indicada, adjuntando copia de su DNI:
        </p>
        <ul>
          <li>
            <strong>Acceso:</strong> Conocer qué datos tratamos sobre usted.
          </li>
          <li>
            <strong>Rectificación:</strong> Corregir datos inexactos o incompletos.
          </li>
          <li>
            <strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya
            no sean necesarios.
          </li>
          <li>
            <strong>Limitación:</strong> Solicitar la limitación del tratamiento en
            determinadas circunstancias.
          </li>
          <li>
            <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado.
          </li>
          <li>
            <strong>Oposición:</strong> Oponerse al tratamiento basado en interés
            legítimo.
          </li>
          <li>
            <strong>Retirada del consentimiento:</strong> Retirar el consentimiento
            otorgado para analítica web o cookies opcionales en cualquier momento, sin
            que ello afecte a la licitud del tratamiento realizado previamente.
          </li>
        </ul>
        <p>
          También tiene derecho a presentar una reclamación ante la{" "}
          <strong>Agencia Española de Protección de Datos (AEPD)</strong> en{" "}
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.aepd.es
          </a>{" "}
          si considera que el tratamiento no es conforme a la normativa.
        </p>
      </section>

      <section>
        <h2>8. Cookies, analítica y preferencias</h2>
        <p>
          Este sitio utiliza un sistema propio de gestión de consentimiento para cookies
          y tecnologías similares. Las cookies o mecanismos estrictamente necesarios se
          utilizan para permitir el funcionamiento básico de la web y recordar las
          preferencias del usuario.
        </p>
        <p>
          Las herramientas de analítica, como Google Tag Manager y Google Analytics, solo
          se activan si el usuario acepta las categorías correspondientes desde el banner
          o el panel de configuración de cookies.
        </p>
        <p>
          Puede consultar información detallada en nuestra{" "}
          <a href="/politica-cookies">Política de Cookies</a> y modificar sus
          preferencias desde el enlace <strong>Configurar cookies</strong> disponible en
          el pie de página.
        </p>
      </section>

      <section>
        <h2>9. Seguridad</h2>
        <p>
          Aplicamos las medidas técnicas y organizativas apropiadas para garantizar un
          nivel de seguridad adecuado al riesgo, conforme al artículo 32 del RGPD,
          incluyendo cifrado de comunicaciones (HTTPS), control de acceso y medidas de
          seguridad razonables sobre la infraestructura tecnológica utilizada.
        </p>
      </section>
    </LegalLayout>
  );
}