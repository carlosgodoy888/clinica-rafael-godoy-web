import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import type { ServiceFAQItem } from "@/components/services/ServiceFAQ";

type ServiceSchemaProps = {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  faqItems?: ServiceFAQItem[];
  breadcrumbLabel: string;
};

export function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  faqItems = [],
  breadcrumbLabel,
}: ServiceSchemaProps) {
  const medicalProcedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "@id": `${url}#medical-procedure`,
    name,
    description,
    procedureType: "https://schema.org/TherapeuticProcedure",
    bodyLocation: "Boca",
    howPerformed:
      "Tratamiento dental realizado tras valoración clínica personalizada en consulta.",
    provider: {
      "@type": "Dentist",
      "@id": `${site.domain}/#dentist`,
      name: clinic.name,
      telephone: clinic.contact.phone,
      url: site.domain,
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.contact.address.street,
        addressLocality: clinic.contact.address.city,
        addressRegion: "Andalucía",
        postalCode: clinic.contact.address.postalCode,
        addressCountry: "ES",
      },
    },
    areaServed: {
      "@type": "City",
      name: "Córdoba",
    },
    availableAtOrFrom: {
      "@type": "Dentist",
      "@id": `${site.domain}/#dentist`,
      name: clinic.name,
      telephone: clinic.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: clinic.contact.address.street,
        addressLocality: clinic.contact.address.city,
        addressRegion: "Andalucía",
        postalCode: clinic.contact.address.postalCode,
        addressCountry: "ES",
      },
    },
    serviceType,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: site.domain,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tratamientos",
        item: `${site.domain}/tratamientos`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: breadcrumbLabel,
        item: url,
      },
    ],
  };

  const faqSchema =
    faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          mainEntity: faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const schemas = faqSchema
    ? [medicalProcedureSchema, breadcrumbSchema, faqSchema]
    : [medicalProcedureSchema, breadcrumbSchema];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@id"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}