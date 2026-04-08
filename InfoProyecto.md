# InfoProyecto — Clínica Dental Dr. Rafael Godoy

**Documento de referencia completo · Generado: Abril 2026**

---

## Índice

1. [Visión general del proyecto](#1-visión-general-del-proyecto)
2. [Stack tecnológico](#2-stack-tecnológico)
3. [Estructura de directorios](#3-estructura-de-directorios)
4. [Datos de configuración maestros](#4-datos-de-configuración-maestros)
5. [Infraestructura y despliegue](#5-infraestructura-y-despliegue)
6. [Terceros y servicios externos](#6-terceros-y-servicios-externos)
7. [SEO técnico](#7-seo-técnico)
8. [SEO local](#8-seo-local)
9. [Datos estructurados (Schema.org)](#9-datos-estructurados-schemaorg)
10. [Fases de desarrollo completadas](#10-fases-de-desarrollo-completadas)
11. [Bugs resueltos relevantes](#11-bugs-resueltos-relevantes)
12. [Checklist antes de producción](#12-checklist-antes-de-producción)
13. [Pendientes post-lanzamiento](#13-pendientes-post-lanzamiento)

---

## 1. Visión general del proyecto

| Campo | Valor |
|---|---|
| Proyecto | Sitio web corporativo clínica dental |
| Cliente | Dr. Rafael Godoy Pizarro |
| Nombre comercial | Clínica Dental Dr. Rafael Godoy |
| Dominio de producción | `https://clinicarafaelgodoy.es` |
| Fecha de inicio | Noviembre 2024 (aprox.) |
| Framework | Next.js 16.2.2 (App Router) |
| Repositorio | Local — sin GitHub configurado |

**Objetivo principal:** Posicionar la clínica en búsquedas locales de Córdoba ("dentista córdoba", "clínica dental córdoba") con un sitio de alta conversión que refleje 35 años de trayectoria y credenciales europeas.

**KPIs de negocio:**
- Llamadas telefónicas directas (CTA principal en Hero, Doctor y Contact)
- Visitas al mapa / solicitud de cómo llegar
- Navegación a la sección de contacto (scroll a `#contacto`)

---

## 2. Stack tecnológico

### Dependencias principales

| Paquete | Versión | Rol |
|---|---|---|
| `next` | 16.2.2 | Framework (App Router) |
| `react` / `react-dom` | 19.2.4 | UI |
| `tailwindcss` | ^4 | Estilos (CSS-only, sin config JS) |
| `@tailwindcss/typography` | ^0.5.19 | Estilos para páginas legales |
| `@tailwindcss/postcss` | ^4 | Plugin PostCSS para Tailwind v4 |
| `lucide-react` | ^1.7.0 | Iconos SVG |
| `clsx` + `tailwind-merge` | ^2 / ^3 | Utilidad `cn()` para clases condicionales |
| `typescript` | ^5 | Tipado estático |

### Convenciones importantes

- **Tailwind v4:** La configuración de colores y tema se hace exclusivamente en `src/app/globals.css` mediante `@theme { ... }`. No existe `tailwind.config.ts`.
- **App Router:** Todo vive en `src/app/`. Las páginas son Server Components por defecto; solo se añade `"use client"` donde hay interactividad (hooks, eventos).
- **Directorio `src/`:** Toda la lógica de aplicación está bajo `src/`.
- **Path aliases:** `@/` apunta a `src/`.

---

## 3. Estructura de directorios

```
clinica-rafael-godoy-web/
├── public/
│   ├── images/
│   │   ├── og/
│   │   │   └── og-image.jpg          ← PENDIENTE crear (1200×630px)
│   │   ├── doctor/
│   │   │   └── dr-rafael-godoy-portrait.jpg   ← PENDIENTE
│   │   └── clinic/
│   │       └── clinica-exterior.jpg  ← PENDIENTE
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx                ← Metadatos, GTM, Cookiebot, Schema JSON-LD
│   │   ├── page.tsx                  ← Página principal (importa secciones)
│   │   ├── globals.css               ← Tailwind @theme, animaciones, utilidades
│   │   ├── robots.ts                 ← Reglas de rastreo
│   │   ├── sitemap.ts                ← Sitemap dinámico
│   │   ├── manifest.ts               ← Web App Manifest
│   │   ├── aviso-legal/page.tsx
│   │   ├── politica-privacidad/page.tsx
│   │   └── politica-cookies/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            ← Nav sticky, menú mobile, IntersectionObserver
│   │   │   ├── Footer.tsx            ← NAP, links legales
│   │   │   └── FloatingCallButton.tsx← Botón llamada flotante en móvil
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx       ← CTA principal, stats de confianza
│   │   │   ├── CredentialsSection.tsx← Logos/sellos de acreditación
│   │   │   ├── ServicesSection.tsx   ← 6 cards de tratamientos + modal
│   │   │   ├── WhyUsSection.tsx      ← 4 features / diferenciadores
│   │   │   ├── DoctorSection.tsx     ← Foto + bio + CTA integrado
│   │   │   ├── TestimonialsSection.tsx← Carousel mobile / grid desktop
│   │   │   └── ContactSection.tsx    ← Mapa + horario + teléfono + dirección
│   │   ├── ui/
│   │   │   ├── Container.tsx         ← max-w-6xl mx-auto px-4
│   │   │   ├── SectionHeader.tsx     ← Badge + H2 + subtítulo reutilizable
│   │   │   ├── Button.tsx
│   │   │   └── ScrollReveal.tsx      ← IntersectionObserver para data-reveal
│   │   └── legal/
│   │       └── LegalLayout.tsx
│   ├── config/
│   │   ├── clinic.ts                 ← FUENTE DE VERDAD: todos los datos NAP
│   │   ├── site.ts                   ← Dominio, keywords, IDs de tracking
│   │   ├── services.ts               ← 6 servicios dentales
│   │   └── testimonials.ts           ← Testimonios de pacientes
│   ├── lib/
│   │   ├── schema.ts                 ← Generadores Schema.org (Dentist + Physician)
│   │   ├── analytics.ts              ← Helpers trackPhoneCall, trackMapClick
│   │   └── utils.ts                  ← cn() = clsx + tailwind-merge
│   └── types/
│       ├── clinic.ts
│       ├── service.ts
│       └── testimonial.ts
├── vercel.json                        ← Redirects www→non-www, headers de seguridad
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 4. Datos de configuración maestros

### Datos NAP (Name · Address · Phone)

> Estos datos deben ser **idénticos** en Header, Footer, ContactSection, Schema.org y Google Business Profile para consistencia NAP en SEO local.

```
Nombre:    Clínica Dental Dr. Rafael Godoy
Dirección: Plaza de Andalucía, 3, Sur · 14009 Córdoba
Teléfono:  +34 957 29 29 69  (display: "957 29 29 69")
Email:     info@clinicarafaelgodoy.es
Web:       https://clinicarafaelgodoy.es
```

**Archivo fuente:** `src/config/clinic.ts`

### Datos del doctor

```
Nombre completo:  Dr. Rafael Godoy Pizarro
Especialidad:     Médico Estomatólogo
Universidad:      Universidad de Montpellier (Francia)
Wikidata ID:      Q164025
Experiencia:      35+ años (desde 1991)
```

### Coordenadas y mapas

```
Latitud:   37.87013
Longitud:  -4.78119
Google Maps (ver):   https://maps.app.goo.gl/kC8tagP8EjpJBEnP7
Google Maps (cómo llegar): https://www.google.com/maps/dir/?api=1&destination=Clínica+Dental+Dr.+Rafael+Godoy&destination_place_id=ChIJ7l-z8_-Y2Q0RdqSiB6BlGkM
Apple Maps:  https://maps.apple.com/?q=Cl%C3%ADnica+Dental+Dr.+Rafael+Godoy&ll=37.87013,-4.78119&t=m
```

### Horario de apertura

| Día | Mañana | Tarde |
|---|---|---|
| Lunes | 9:00 – 14:00 | 17:00 – 20:30 |
| Martes | 9:00 – 14:00 | 17:00 – 20:30 |
| Miércoles | 9:00 – 14:00 | — |
| Jueves | 9:00 – 14:00 | 17:00 – 20:30 |
| Viernes | 9:00 – 14:00 | — |
| Sáb · Dom | Cerrado | — |

---

## 5. Infraestructura y despliegue

### Plataforma: Vercel

**Pasos de despliegue inicial:**
1. Crear proyecto en [vercel.com](https://vercel.com) → "Import Git Repository" o subir directamente
2. Framework: Next.js (detectado automáticamente)
3. Build command: `next build` (por defecto)
4. Output: `.next/` (por defecto)
5. No hay variables de entorno especiales requeridas (todo en archivos de config)

**`vercel.json` configurado con:**
- Redirect permanente (301): `www.clinicarafaelgodoy.es` → `clinicarafaelgodoy.es`
- Headers de seguridad en todas las rutas:
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: DENY`
  - `X-XSS-Protection: 1; mode=block`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Dominio

- Registrar/apuntar `clinicarafaelgodoy.es` a Vercel en configuración DNS
- Vercel gestiona SSL/TLS automáticamente (Let's Encrypt)
- La web ya está configurada para responder solo en el dominio canónico (sin www)

---

## 6. Terceros y servicios externos

### Google Tag Manager

| Campo | Valor |
|---|---|
| ID de contenedor | `GTM-T89SFQTZ` |
| Implementación | Script `beforeInteractive` en `<head>` + noscript en `<body>` |
| Uso | Contenedor para GA4, eventos de conversión, etc. |

**Para configurar GA4:** Añadir etiqueta GA4 dentro del contenedor GTM usando el ID de medición de Google Analytics.

### Cookiebot (RGPD / Consent Mode V2)

| Campo | Valor |
|---|---|
| ID de dominio | `90daba5c-1344-4c8f-8b95-813d140ce76d` |
| Implementación | Script `beforeInteractive` — se carga antes que cualquier otro script |
| Consent Mode V2 | Activado — todos los consentimientos denegados por defecto |
| Estado por defecto | `ad_storage: denied`, `analytics_storage: denied`, `ad_user_data: denied`, `ad_personalization: denied` |

**Acción requerida antes de producción:**
- Añadir el dominio `clinicarafaelgodoy.es` en el panel de Cookiebot → "Domains"
- Verificar que el widget de cookies aparece correctamente al primera visita

### Google Business Profile

- Verificar que el nombre, dirección y teléfono en GBP coinciden **exactamente** con los datos NAP del sitio
- URL del sitio web en GBP: `https://clinicarafaelgodoy.es`
- Añadir fotos de la clínica y del doctor

### Redes sociales

```
Facebook:  https://www.facebook.com/clinicarafaelgodoy
Instagram: https://www.instagram.com/drrafaelgodoy
```
*Nota: Verificar que estas URLs sean correctas y las páginas existan antes de publicar el sitio.*

---

## 7. SEO técnico

### Metadatos (layout.tsx)

- **Title template:** `%s | Clínica Dental Dr. Rafael Godoy · Córdoba`
- **Title default:** `Clínica Dental en Córdoba — Dr. Rafael Godoy | 35 Años de Experiencia`
- **Description:** `Clínica dental en Córdoba con 35 años de experiencia. Implantología, ortodoncia, estética dental y más. Dr. Rafael Godoy Pizarro, Médico Estomatólogo formado en la Universidad de Montpellier.`
- **Keywords principales:** `clínica dental córdoba`, `dentista córdoba`, `dr rafael godoy córdoba`
- **Canonical:** configurado automáticamente por Next.js con `metadataBase`
- **Open Graph:** type=website, imagen 1200×630px, locale es_ES
- **Twitter Card:** summary_large_image

### robots.ts

- Googlebot y todos los bots: allow `/`
- Sitemap: `https://clinicarafaelgodoy.es/sitemap.xml`

### sitemap.ts

Genera automáticamente:
- `/` — prioridad 1.0, daily
- `/aviso-legal` — prioridad 0.3, yearly
- `/politica-privacidad` — prioridad 0.3, yearly
- `/politica-cookies` — prioridad 0.3, yearly

### Rendimiento web

- Imágenes: `next/image` con lazy loading y optimización automática
- Fuentes: Inter via `next/font/google` con `display: swap`
- Server Components por defecto (solo cliente donde es necesario)
- Sin librerías de carousel/animación externas (CSS puro)

---

## 8. SEO local

### Estrategia de keywords locales

**Keywords primarias:**
- `dentista córdoba`
- `clínica dental córdoba`
- `dentista en córdoba`

**Keywords secundarias:**
- `dr rafael godoy córdoba`
- `estomatólogo córdoba`
- `implantes dentales córdoba`
- `ortodoncia córdoba`
- `estética dental córdoba`

**Keywords de cola larga:**
- `clínica dental córdoba centro`
- `dentista plaza de andalucía córdoba`
- `implantólogo córdoba`
- `ortodoncia invisible córdoba`
- `urgencias dentales córdoba`

### Señales de proximidad geográfica en el contenido

Las siguientes referencias geográficas aparecen de forma natural en el contenido:

| Referencia | Sección donde aparece |
|---|---|
| "Córdoba" | Título H1, subtítulos, badges en toda la página |
| "Plaza de Andalucía" | Hero, ContactSection, dirección |
| "Puente Romano" | ContactSection (descripción de ubicación) |
| "centro histórico" | ContactSection, SectionHeaders |
| "desde 1991" | Header badge, Hero |
| "cordobeses" / "familias cordobesas" | TestimonialsSection, WhyUsSection |

### NAP: puntos de consistencia

Verificar que nombre, dirección y teléfono son **idénticos** en:
- `src/config/clinic.ts` (fuente de verdad)
- Footer
- ContactSection
- Schema.org JSON-LD
- Google Business Profile
- Directorios locales (Páginas Amarillas, Doctoralia, etc.)

### Factores de posicionamiento local

1. **Google Business Profile:** Verificado, con fotos y horarios actualizados
2. **Datos estructurados:** Schema Dentist con `areaServed`, `geo`, `openingHoursSpecification`
3. **Reseñas:** Mención de 4,9/5 en Hero; sección de testimonios completa
4. **Citas locales:** NAP consistente en todos los directorios
5. **Contenido hiperlocal:** Referencias a barrios, monumentos y plazas de Córdoba

---

## 9. Datos estructurados (Schema.org)

**Archivo:** `src/lib/schema.ts`

### Schema Dentist (negocio local)

```
@type: Dentist
@id:   https://clinicarafaelgodoy.es/#dentist
areaServed: Ciudad de Córdoba (Wikidata Q5818)
serviceArea: GeoCircle radio 30km
medicalSpecialty: Dentistry, Oral Surgery, Orthodontics,
                  Periodontics, Endodontics, Prosthodontics
priceRange: €€
openingHoursSpecification: L/M/J mañana+tarde, X/V solo mañana
hasOfferCatalog: 6 servicios como MedicalProcedure
```

### Schema Physician (doctor)

```
@type: Physician
@id:   https://clinicarafaelgodoy.es/#doctor
name:  Dr. Rafael Godoy Pizarro
alumniOf: Universidad de Montpellier (Wikidata Q164025)
worksFor: @id del Dentist
```

### Validación

- Herramienta oficial: [schema.org/validator](https://validator.schema.org)
- Rich Results Test: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
- Buscar errores tipo: propiedades requeridas ausentes, URLs inaccesibles

---

## 10. Fases de desarrollo completadas

### Fase 1 — Estructura base
- Scaffolding del proyecto Next.js + TypeScript + Tailwind v4
- Archivos de configuración: `clinic.ts`, `site.ts`, `services.ts`, `testimonials.ts`
- Tipos TypeScript para todas las entidades
- Layout principal con fuente Inter, metadatos base, GTM y Cookiebot
- Páginas legales (aviso legal, privacidad, cookies)

### Fase 2 — Secciones principales
- `HeroSection` — CTA teléfono, estadísticas de confianza, wave SVG
- `CredentialsSection` — Sellos y acreditaciones
- `ServicesSection` — 6 cards de tratamientos
- `WhyUsSection` — 4 pilares diferenciadores
- `DoctorSection` — Bio y credenciales del doctor
- `TestimonialsSection` — Testimonios de pacientes
- `ContactSection` — Mapa + horario + datos de contacto

### Fase 3 — SEO y analytics
- Schema.org completo (Dentist + Physician)
- Metadatos Open Graph y Twitter Card
- `robots.ts`, `sitemap.ts`, `manifest.ts`
- `analytics.ts` con helpers de tracking
- `vercel.json` con redirects y headers de seguridad

### Fase 4 — UX/Accesibilidad/Responsive
- Skip-to-content link
- `aria-labelledby` en todas las secciones
- `role="list"` / `role="img"` donde corresponde
- Focus visible WCAG AA
- Touch targets mínimo 44px
- Header responsive: `h-16` móvil / `h-20` desktop
- `scroll-margin-top` responsive corregido

### Fase 5 — Refinamiento visual y CRO
- Rediseño completo `DoctorSection` (tarjeta unificada + CTA integrado)
- `ServicesSection` con modal de detalle (backdrop blur, Escape para cerrar)
- `ContactSection` redesign: layout 50/50, horario visual prominente, indicador abierto/cerrado
- `SectionHeader` con prop `badge` y variante dark
- Jerarquía de CTAs: teléfono en Hero → perfil en WhyUs → teléfono en Doctor → cita en Testimonials → teléfono en Contact
- Wave SVG de transición entre secciones

### Fase 6 — Auditoría pre-producción y corrección de bugs
- Eliminación de `<div data-reveal>` en `page.tsx` (bug de scroll a anclajes)
- `closeMobileMenu()` limpia `body.overflow` antes del cambio de estado React
- Carousel de testimonios: eliminado `data-reveal` de `<li>` (incompatible con scroll horizontal)
- CTA del Hero: texto responsive para evitar rotura en móvil
- `scroll-margin-top` responsive coordinado con altura real del header

---

## 11. Bugs resueltos relevantes

### Bug 1: Scroll a `#contacto` no funcionaba en móvil

**Síntoma:** Al pulsar "Ver Ubicación y Horarios" desde el Hero (móvil, menú cerrado), la página no scrolleaba correctamente.

**Causa raíz (doble):**
1. Los wrappers `<div data-reveal>` en `page.tsx` aplicaban `transform: translateY(28px)` a nivel de sección. Aunque el scroll llegaba a la posición DOM correcta, el contenido aparecía 28px más abajo, fuera del viewport.
2. Al cerrar el menú mobile mediante un enlace de anclaje, `body.overflow: hidden` seguía activo cuando el navegador intentaba hacer scroll.

**Solución:**
1. Eliminados todos los `<div data-reveal>` wrappers de `page.tsx`. Las animaciones se aplican a nivel de tarjeta/elemento interno.
2. Creada función `closeMobileMenu()` que ejecuta `document.body.style.overflow = ""` de forma síncrona antes de `setMenuOpen(false)`.

### Bug 2: Testimonios invisibles en el carousel

**Síntoma:** En móvil, las tarjetas de testimonios fuera del viewport inicial nunca aparecían (permanecían con `opacity: 0`).

**Causa raíz:** Los `<li>` tenían `data-reveal`. El `IntersectionObserver` de `ScrollReveal` solo detecta elementos que entran en el viewport vertical. Las tarjetas en un carousel horizontal nunca "entran" — ya están en el DOM pero fuera de pantalla horizontalmente.

**Solución:** Eliminado `data-reveal` de los `<li>` en `TestimonialsSection`. Las tarjetas son visibles siempre; la interactividad la da el scroll-snap CSS.

### Bug 3: CTA del Hero en dos líneas en iPhone SE

**Síntoma:** El botón "Llama y Pide Cita: 957 29 29 69" se partía en dos líneas en pantallas de 375px.

**Solución:** Texto diferenciado por breakpoint:
```tsx
<span className="sm:hidden">{clinic.contact.phoneDisplay}</span>
<span className="hidden sm:inline">Llamar: {clinic.contact.phoneDisplay}</span>
```
Más `whitespace-nowrap` en el botón.

---

## 12. Checklist antes de producción

### Imágenes (CRÍTICO — sin estas, el sitio tiene contenido placeholder)

- [ ] `/public/images/og/og-image.jpg` — 1200×630px, imagen de marca para compartir en redes
- [ ] `/public/images/doctor/dr-rafael-godoy-portrait.jpg` — Foto profesional del doctor
- [ ] `/public/images/clinic/clinica-exterior.jpg` — Fachada de la clínica
- [ ] Integrar foto del doctor en `DoctorSection.tsx`:
  ```tsx
  import Image from "next/image";
  // Dentro del div#doctor-photo:
  <Image
    src="/images/doctor/dr-rafael-godoy-portrait.jpg"
    alt="Dr. Rafael Godoy Pizarro, dentista y estomatólogo en Córdoba"
    fill
    className="object-cover object-top"
    priority
  />
  ```

### Configuración de servicios externos

- [ ] **Cookiebot:** Añadir `clinicarafaelgodoy.es` en el panel → Domains
- [ ] **Google Business Profile:** Verificar NAP idéntico al sitio
- [ ] **GTM:** Configurar GA4 dentro del contenedor `GTM-T89SFQTZ`
- [ ] **Redes sociales:** Verificar que las URLs de Facebook e Instagram en `schema.ts` son correctas

### Contenido

- [ ] Revisar y actualizar testimonios en `src/config/testimonials.ts` (¿son reales o placeholder?)
- [ ] Verificar que el email `info@clinicarafaelgodoy.es` existe y recibe correo
- [ ] Revisar textos de páginas legales (aviso-legal, política de privacidad, política de cookies) con asesoría legal

### Técnico

- [ ] `next build` sin errores ni warnings relevantes
- [ ] Validar Schema.org en [validator.schema.org](https://validator.schema.org)
- [ ] Validar Schema en [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Comprobar Consent Mode V2 en GTM Preview (los eventos no deben dispararse sin consentimiento)
- [ ] Test en dispositivos reales: iPhone SE (375px), iPhone 14 (390px), iPad, Android
- [ ] Lighthouse score objetivo: Performance ≥90, Accessibility ≥95, SEO ≥95
- [ ] Revisar que `clinicarafaelgodoy.es` aparece en `src/config/site.ts` como dominio definitivo
- [ ] Eliminar/actualizar `sameAs` en `schema.ts` si las redes sociales no están activas

### Post-deploy

- [ ] Submit sitemap en Google Search Console: `https://clinicarafaelgodoy.es/sitemap.xml`
- [ ] Verificar redirect www → non-www funciona correctamente
- [ ] Solicitar indexación de la página principal en Search Console
- [ ] Configurar alertas de disponibilidad (uptime monitoring)

---

## 13. Pendientes post-lanzamiento

### Corto plazo (primer mes)

1. **Foto del doctor:** Subir foto profesional y activarla en `DoctorSection` (ver instrucciones en sección 12)
2. **Google Business Profile:** Solicitar reseñas a pacientes existentes para reforzar la valoración 4,9/5 citada en el sitio
3. **Search Console:** Monitorizar queries de impresiones/clics para keywords locales objetivo

### Medio plazo

4. **Páginas de servicios individuales:** Crear rutas `/implantologia`, `/ortodoncia`, etc. con contenido expandido para SEO de cola larga (actualmente son solo modales)
5. **Blog local:** Artículos tipo "cuidado dental en Córdoba", "qué hacer ante urgencia dental" para posicionamiento de contenido
6. **Tracking de conversiones:** Configurar en GTM eventos de conversión para llamadas (`tel:` clicks) y clics en "Cómo llegar"
7. **Core Web Vitals:** Revisar LCP, CLS e INP tras tener imágenes reales

### Largo plazo

8. **Testimonios dinámicos:** Integrar reseñas de Google Maps vía API si se dispone de API key
9. **Formulario de cita online:** Alternativa al teléfono para usuarios que prefieren texto
10. **Chat en vivo:** WhatsApp Business o similar como canal adicional de conversión

---

*Documento generado automáticamente basado en el estado del proyecto a Abril 2026.*
*Para actualizaciones, editar directamente este archivo manteniendo el formato.*
