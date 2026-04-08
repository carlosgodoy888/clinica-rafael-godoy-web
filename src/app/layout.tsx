import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
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

export const metadata: Metadata = {
  title: {
    default: "Clínica Dental Dr. Rafael Godoy | Córdoba - 35 años",
    template: "%s | Clínica Dental Dr. Rafael Godoy",
  },
  description:
    "Clínica Dental en Córdoba centro · Dr. Rafael Godoy, 35 años de experiencia. Implantes, ortodoncia, estética dental. Plaza de Andalucía. ☎ 957 29 29 69",
  keywords:
    "clínica dental córdoba, dentista córdoba, estomatólogo córdoba, clínica dental córdoba centro, dentista plaza andalucía, implantes córdoba, ortodoncia córdoba, dr rafael godoy",
  alternates: {
    canonical: site.domain,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Clínica Dental Dr. Rafael Godoy | Córdoba - 35 años",
    description:
      "Atención cercana y tratamientos personalizados. 35 años de experiencia. Formación Universidad de Montpellier. ☎ 957 29 29 69",
    url: site.domain,
    locale: site.locale,
    images: [
      {
        url: `${site.domain}/images/og/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Clínica Dental Dr. Rafael Godoy - 35 años en Córdoba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Dental Dr. Rafael Godoy | Córdoba",
    description: "35 años de experiencia en odontología especializada. ☎ 957 29 29 69",
    images: [`${site.domain}/images/og/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "theme-color": "#007C7C",
  },
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
        {/* Google Consent Mode V2 — antes de Cookiebot y GTM */}
        <Script id="consent-init" strategy="beforeInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'denied',personalization_storage:'denied',security_storage:'granted',wait_for_update:500});`}
        </Script>
        {/* Cookiebot */}
        <Script
          id="cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={site.tracking.cookiebotId}
          data-blockingmode="auto"
          strategy="beforeInteractive"
        />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.tracking.gtmId}');`}
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
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${site.tracking.gtmId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

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
      </body>
    </html>
  );
}
