import { clinic } from "@/config/clinic";
import { site } from "@/config/site";
import { services } from "@/config/services";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${site.domain}/#dentist`,
    name: clinic.name,
    alternateName: "Dr. Rafael Godoy Pizarro",
    description:
      "Clínica dental especializada en Córdoba con más de 35 años de experiencia. Especialista en Estomatología por la Universidad de Montpellier. Implantología, ortodoncia, estética dental, periodoncia, endodoncia y prostodoncia.",
    url: site.domain,
    logo: {
      "@type": "ImageObject",
      url: `${site.domain}/images/hero/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    image: [
      `${site.domain}/images/hero/og-image.jpg`,
      `${site.domain}/images/doctor/rafael-godoy-v02.jpg`,
      `${site.domain}/images/clinic/clinica-exterior.jpg`,
    ],
    telephone: clinic.contact.phone,
    email: clinic.contact.email,
    hasMap: clinic.contact.mapsUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.contact.address.street,
      addressLocality: clinic.contact.address.city,
      addressRegion: "Andalucía",
      postalCode: clinic.contact.address.postalCode,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.contact.coordinates.lat,
      longitude: clinic.contact.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "09:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Thursday"],
        opens: "17:00",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Friday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    // Añadir la URL del perfil de Google Business Profile y redes sociales
    // cuando estén disponibles. Ejemplo:
    //   sameAs: [
    //     "https://g.page/[PLACEHOLDER_GBP_URL]",
    //     "https://www.facebook.com/[PLACEHOLDER]",
    //   ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Córdoba",
      "@id": "https://www.wikidata.org/wiki/Q5818",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: clinic.contact.coordinates.lat,
        longitude: clinic.contact.coordinates.lng,
      },
      geoRadius: "30000",
    },
    medicalSpecialty: [
      "Dentistry",
      "Oral Surgery",
      "Orthodontics",
      "Periodontics",
      "Endodontics",
      "Prosthodontics",
    ],
    founder: {
      "@type": "Physician",
      name: clinic.doctor.fullName,
      jobTitle: clinic.doctor.specialty,
      alumniOf: {
        "@type": "EducationalOrganization",
        name: clinic.doctor.university,
        "@id": "https://www.wikidata.org/wiki/Q164025",
      },
      worksFor: {
        "@id": `${site.domain}/#dentist`,
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios Dentales",
      itemListElement: services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "MedicalProcedure",
          name: service.title,
          description: service.description,
          procedureType: "https://schema.org/TherapeuticProcedure",
        },
      })),
    },
  };
}

export function generateDoctorSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${site.domain}/#doctor`,
    name: clinic.doctor.fullName,
    jobTitle: clinic.doctor.specialty,
    description: `Médico Estomatólogo con ${clinic.doctor.experience} de experiencia en Córdoba. Formado en la ${clinic.doctor.university}.`,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: clinic.doctor.university,
      "@id": "https://www.wikidata.org/wiki/Q164025",
    },
    worksFor: {
      "@id": `${site.domain}/#dentist`,
    },
    url: site.domain,
  };
}
