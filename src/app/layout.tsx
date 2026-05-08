import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GtmLoader } from "@/components/analytics/GtmLoader";
import { CookieConsentBanner } from "@/components/cookies/CookieConsentBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { generateLocalBusinessSchema, generateDoctorSchema } from "@/lib/schema";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Metadata global de la web.
 *
 * Esta metadata afecta principalmente a la home, porque las páginas de
 * tratamientos tienen su propia metadata específica en cada page.tsx.
 *
 * Enfoque SEO de la home:
 * - Clínica dental en Córdoba
 * - Dentista en Córdoba
 * - Clínica Dental Dr. Rafael Godoy
 * - Córdoba centro / Plaza de Andalucía
 *
 * Las búsquedas de tratamientos concretos se trabajan desde:
 * - /tratamientos
 * - /tratamientos/[servicio]-cordoba
 */
const baseMetadata = {
  title: {
    default: "Clínica Dental en Córdoba | Dr. Rafael Godoy",
    template: "%s | Clínica Dental Dr. Rafael Godoy",
  },
  description:
    "Clínica dental en Córdoba centro. Dr. Rafael Godoy, más de 35 años de experiencia. Ortodoncia, implantes, endodoncia, estética dental, limpieza, periodoncia y prótesis.",
  keywords:
    "clínica dental córdoba, dentista córdoba, dentista en córdoba, clínica dental córdoba centro, dentista córdoba centro, clínica dental dr rafael godoy, rafael godoy dentista, implantes dentales córdoba, ortodoncia córdoba, endodoncia córdoba, estética dental córdoba, limpieza dental córdoba, periodoncia córdoba, prótesis dental córdoba",
  alternates: {
    canonical: site.domain,
  },
  openGraph: {
    type: "website" as const,
    siteName: site.name,
    title: "Clínica Dental en Córdoba | Dr. Rafael Godoy",
    description:
      "Clínica dental en Córdoba centro con más de 35 años de experiencia. Tratamientos de ortodoncia, implantes, endodoncia, estética dental, limpieza, periodoncia y prótesis.",
    url: site.domain,
    locale: site.locale,
    images: [
      {
        url: `${site.domain}/images/hero/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Clínica Dental Dr. Rafael Godoy en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Clínica Dental en Córdoba | Dr. Rafael Godoy",
    description:
      "Dentista en Córdoba centro. Más de 35 años de experiencia y tratamientos dentales personalizados.",
    images: [`${site.domain}/images/hero/og-image.jpg`],
  },
  other: {
    "theme-color": "#007C7C",
  },
};

// En preview y desarrollo devolvemos noindex para no contaminar el índice de Google.
// En producción (Vercel env = "production") se indexa normalmente.
const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  ...baseMetadata,
  robots: isProduction
    ? { index: true, follow: true, googleBot: { index: true, follow: true } }
    : { index: false, follow: false },
};

const localBusinessSchema = generateLocalBusinessSchema();
const doctorSchema = generateDoctorSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        {/*
          Consent Mode por defecto.

          Este script debe ejecutarse antes de que Google Tag Manager lea
          cualquier estado de consentimiento. Por eso va con beforeInteractive.

          Importante:
          - No instala GA4 directamente.
          - No llama a gtag('config', 'G-VG070XK9G7').
          - Solo define dataLayer, gtag y consentimiento por defecto en denied.
          - GTM se carga después desde GtmLoader.
        */}
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'granted',
              personalization_storage: 'denied',
              security_storage: 'granted',
              wait_for_update: 500
            });
          `}
        </Script>

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
      </head>

      <body className="min-h-full flex flex-col antialiased">
        {/*
          Sistema propio de consentimiento:
          - Cookiebot eliminado.
          - Consent Mode default se define arriba, antes de GTM.
          - GtmLoader carga GTM.
          - GtmLoader actualiza Consent Mode según la preferencia guardada.
        */}
        <GtmLoader />

        {/* Skip to content — accesibilidad teclado */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-teal-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Saltar al contenido principal
        </a>

        <Header />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <FloatingCallButton />

        {/* Banner propio de consentimiento. Sustituye a Cookiebot. */}
        <CookieConsentBanner />
      </body>
    </html>
  );
}