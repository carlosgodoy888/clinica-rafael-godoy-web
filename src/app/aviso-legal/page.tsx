import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { clinic } from "@/config/clinic";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Aviso Legal | Clínica Dental Dr. Rafael Godoy",
  description:
    "Información legal de la Clínica Dental Dr. Rafael Godoy en Córdoba. Datos identificativos y condiciones de uso del sitio web.",
  alternates: { canonical: `${site.domain}/aviso-legal` },
};

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso Legal" lastUpdated="Abril 2026">
      <section>
        <h2>1. Datos Identificativos del Titular</h2>
        <p>
          En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios
          de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se
          informa de los siguientes datos identificativos:
        </p>
        <ul>
          <li>
            <strong>Titular:</strong> {clinic.doctor.fullName}
          </li>
          <li>
            <strong>NIF:</strong> [30198521G]
          </li>
          <li>
            <strong>Denominación comercial:</strong> {clinic.name}
          </li>
          <li>
            <strong>Domicilio:</strong> {clinic.contact.address.street},{" "}
            {clinic.contact.address.postalCode} {clinic.contact.address.city},{" "}
            {clinic.contact.address.country}
          </li>
          <li>
            <strong>Teléfono:</strong>{" "}
            <a href={`tel:${clinic.contact.phone}`}>{clinic.contact.phoneDisplay}</a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${clinic.contact.email}`}>{clinic.contact.email}</a>
          </li>
          <li>
            <strong>Sitio web:</strong>{" "}
            <a href={site.domain}>{site.domain}</a>
          </li>
          <li>
            <strong>Registro Sanitario:</strong> [PENDIENTE DE COMPLETAR]
          </li>
          <li>
            <strong>Colegio Profesional:</strong> Ilustre Colegio de Médicos de Córdoba
          </li>
        </ul>
      </section>

      <section>
        <h2>2. Objeto y Ámbito de Aplicación</h2>
        <p>
          El presente Aviso Legal regula el acceso y uso del sitio web{" "}
          <a href={site.domain}>{site.domain}</a> (en adelante, "el Sitio Web"), titularidad
          de {clinic.doctor.fullName}. El acceso al Sitio Web implica la aceptación plena
          y sin reservas de las presentes condiciones.
        </p>
        <p>
          El titular se reserva el derecho a modificar en cualquier momento las condiciones
          de acceso al Sitio Web, así como los contenidos del mismo, sin necesidad de
          previo aviso.
        </p>
      </section>

      <section>
        <h2>3. Propiedad Intelectual e Industrial</h2>
        <p>
          Todos los contenidos del Sitio Web —incluyendo, sin carácter limitativo, textos,
          fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás
          contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos
          fuente— son propiedad intelectual de {clinic.doctor.fullName} o de terceros
          que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno
          de los derechos de explotación sobre los mismos.
        </p>
        <p>
          Queda expresamente prohibida la reproducción, distribución, comunicación pública,
          transformación o cualquier otro acto de explotación, por cualquier procedimiento,
          de todo o parte de los contenidos del Sitio Web, sin la autorización expresa
          y por escrito del titular.
        </p>
      </section>

      <section>
        <h2>4. Responsabilidad y Exclusión de Garantías</h2>
        <p>
          El titular no garantiza la disponibilidad y continuidad del funcionamiento del
          Sitio Web ni que en todo momento y en cada momento los usuarios puedan acceder
          a las páginas web. El titular no es responsable de los daños y perjuicios de
          cualquier naturaleza que puedan derivarse de la falta de disponibilidad o de
          continuidad del funcionamiento del Sitio Web.
        </p>
        <p>
          Los contenidos del Sitio Web tienen finalidad informativa y no constituyen
          consejo médico. Ante cualquier duda sobre su salud dental, consulte con un
          profesional cualificado.
        </p>
      </section>

      <section>
        <h2>5. Política de Privacidad y Cookies</h2>
        <p>
          El tratamiento de los datos personales que pudieran recabarse a través del
          Sitio Web se rige por la{" "}
          <a href="/politica-privacidad">Política de Privacidad</a> y la{" "}
          <a href="/politica-cookies">Política de Cookies</a> del titular.
        </p>
      </section>

      <section>
        <h2>6. Legislación Aplicable y Jurisdicción</h2>
        <p>
          Las presentes condiciones se rigen por la legislación española. Para la
          resolución de cualquier controversia derivada del acceso o uso del Sitio Web,
          las partes se someten a los Juzgados y Tribunales de Córdoba, renunciando
          expresamente a cualquier otro fuero que pudiera corresponderles.
        </p>
      </section>
    </LegalLayout>
  );
}
