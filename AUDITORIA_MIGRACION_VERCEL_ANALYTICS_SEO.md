# Auditoría técnica: Migración, Vercel, Analítica y SEO
## Clínica Dental Dr. Rafael Godoy — clinicarafaelgodoy.es
**Fecha:** Abril 2026 | **Auditor:** Claude Sonnet 4.6 | **Rama analizada:** main

---

## RESUMEN EJECUTIVO

La web está **técnicamente sólida y lista para producción** con cambios menores. El stack (Next.js 16.2.2, App Router, TypeScript, Tailwind v4) es correcto. GTM, Consent Mode V2 y Cookiebot ya están integrados. El SEO técnico base (sitemap, robots, schema.org, canonical, OG) está implementado. Los problemas encontrados son **subsanables antes del lanzamiento** y ninguno es un bloqueante de build.

**Estado global:** `LISTO CON CAMBIOS MENORES`

---

## FASE 1 — INVENTARIO TÉCNICO

### 1.1 Framework y arquitectura

| Elemento | Detalle |
|---|---|
| Framework | Next.js **16.2.2** |
| Router | **App Router** (no Pages Router) |
| Lenguaje | **TypeScript** strict mode |
| React | 19.2.4 |
| CSS | Tailwind CSS **v4** + PostCSS |
| Package manager | npm (package-lock.json asumido) |
| Node target | ES2017 (tsconfig) |
| Lint | ESLint 9 + eslint-config-next 16.2.2 |

### 1.2 Scripts disponibles

| Script | Comando | Estado |
|---|---|---|
| dev | `next dev` | ✓ OK |
| build | `next build` | ✓ OK |
| start | `next start` | ✓ OK |
| lint | `eslint` | ✓ OK (sin `--fix` automático) |

### 1.3 Dependencias de producción

| Paquete | Versión | Riesgo |
|---|---|---|
| next | 16.2.2 | ✓ Correcto |
| react / react-dom | 19.2.4 | ✓ Correcto |
| @tailwindcss/typography | ^0.5.19 | ✓ OK |
| clsx | ^2.1.1 | ✓ OK |
| tailwind-merge | ^3.5.0 | ✓ OK |
| lucide-react | **^1.7.0** | ⚠ Verificar en npm antes del deploy |

> **Riesgo lucide-react:** La versión `^1.7.0` es inusual (rama estable conocida es 0.x). Verificar que `npm install` la resuelva correctamente en CI/Vercel. Si el build local funciona con el node_modules actual, puede no ser un problema si Vercel usa el mismo lock file.

### 1.4 Archivos de configuración clave

| Archivo | Estado | Notas |
|---|---|---|
| `next.config.ts` | ✓ Presente | Image optimization, redirect /inicio, DNS prefetch header |
| `tsconfig.json` | ✓ Presente | Strict, paths alias @/* |
| `vercel.json` | ✓ Presente | Redirect www→non-www, headers de seguridad |
| `.env.local` | ✓ Presente | GTM + Cookiebot IDs, SITE_URL local |
| `.env.example` | ✓ Presente | ⚠ IDs reales expuestos (ver sección 1.8) |
| `eslint.config.mjs` | ✓ Presente | Core Web Vitals habilitado |
| `postcss.config.mjs` | ✓ Presente | Tailwind v4 PostCSS |
| `middleware.ts` | ✗ Ausente | No requerido actualmente |
| `.vercelignore` | ✗ Ausente | Menor, Vercel lo infiere de .gitignore |

### 1.5 SEO técnico — archivos generados

| Archivo | Ruta | Estado | Riesgo | Recomendación |
|---|---|---|---|---|
| robots.ts | `src/app/robots.ts` | ✓ Correcto | Bajo | Eliminar directiva `host:` (no estándar) |
| sitemap.ts | `src/app/sitemap.ts` | ⚠ Mejorable | Medio | `lastModified: new Date()` genera fecha nueva en cada build; usar fecha fija |
| manifest.ts | `src/app/manifest.ts` | ✓ Correcto | Bajo | Referencia /favicon.ico que existe en src/app/ |
| favicon.ico | `src/app/favicon.ico` | ✓ Presente | — | OK (ubicación correcta App Router) |
| og-image.jpg | `public/images/hero/og-image.jpg` | ✓ Presente | — | OK |

### 1.6 Metadata y SEO on-page

| Elemento | Archivo | Estado | Riesgo | Recomendación |
|---|---|---|---|---|
| Title default | `layout.tsx` | ✓ OK | — | — |
| Title template | `layout.tsx` | ✓ OK | — | — |
| Meta description | `layout.tsx` | ✓ OK (160 chars) | — | — |
| Keywords | `layout.tsx` | ✓ Presentes | — | Complementario, no daña |
| Canonical | `layout.tsx` | ⚠ Parcial | Medio | Apunta a dominio raíz; páginas legales tienen canonical propio |
| OpenGraph | `layout.tsx` | ✓ Completo | — | — |
| Twitter Cards | `layout.tsx` | **✗ Ausente** | Medio | Añadir `twitter: { card: "summary_large_image" }` |
| robots meta | `layout.tsx` | ✓ index/follow | Alto | **Falta noindex para previews de Vercel** |
| lang | `layout.tsx` | ✓ `es` | — | — |
| theme-color | `layout.tsx` | ✓ `#007C7C` | — | — |

### 1.7 Schema.org / JSON-LD

| Schema | Archivo | Estado | Notas |
|---|---|---|---|
| Dentist (LocalBusiness) | `src/lib/schema.ts` | ✓ Completo | Dirección, coords, horarios, servicios |
| Physician | `src/lib/schema.ts` | ✓ Completo | Formación, relación con clínica |
| sameAs | `src/lib/schema.ts` | **✗ Ausente** | Añadir Google Business Profile + redes |
| aggregateRating | `src/lib/schema.ts` | **✗ Ausente** | Existe sección testimonios; añadir con cautela |
| Logo URL | `src/lib/schema.ts` | ⚠ Usa og-image | Bajo | Idealmente debería ser un logo cuadrado; funciona como está |

### 1.8 Analítica y tracking

| Elemento | Archivo | Estado | Riesgo | Recomendación |
|---|---|---|---|---|
| GTM ID | `src/config/site.ts` | ⚠ Hardcoded | Medio | Leer de `process.env.NEXT_PUBLIC_GTM_ID` |
| Cookiebot ID | `src/config/site.ts` | ⚠ Hardcoded | Medio | Leer de `process.env.NEXT_PUBLIC_COOKIEBOT_ID` |
| GTM head script | `layout.tsx` | ✓ afterInteractive | — | Correcto |
| GTM noscript | `layout.tsx` | ✓ En body | — | Correcto |
| Consent Mode V2 | `layout.tsx` | ✓ beforeInteractive | — | Correcto, defaults a denied |
| Cookiebot | `layout.tsx` | ✓ beforeInteractive | — | Orden correcto |
| analytics.ts | `src/lib/analytics.ts` | ⚠ Incompleto | Medio | Faltan: trackWhatsApp, trackEmailClick, trackCtaClick, trackScrollDepth |
| Doble carga GTM | — | ✓ No hay | — | — |
| Eventos phone_call | Múltiples componentes | ✓ Implementado | — | Header, Header mobile, Mobile menu, Contact section, Floating button |
| Eventos map_click | ContactSection | ✓ Implementado | — | OK |
| WhatsApp button | — | **✗ No existe** | — | No hay botón WhatsApp en la UI |
| Formulario de contacto | — | **✗ No existe** | — | Solo teléfono y email |

### 1.9 CMP y Cookies

| Elemento | Archivo | Estado | Riesgo | Recomendación |
|---|---|---|---|---|
| Cookiebot integrado | `layout.tsx` | ✓ Sí | — | data-blockingmode="auto" |
| Consent Mode V2 | `layout.tsx` | ✓ Sí | — | Defaults correctos |
| Política de cookies | `politica-cookies/page.tsx` | ✓ Existe | — | Ver contradicción cookies marketing |
| **Contradicción marketing** | `ContactSection.tsx` | **⚠ Bug** | **Alto** | `data-cookieconsent="marketing"` en Maps pero política dice "no marketing cookies" |
| Política privacidad | `politica-privacidad/page.tsx` | ✓ Completa | — | RGPD compliant |
| Aviso legal | `aviso-legal/page.tsx` | ✓ Completo | — | — |

### 1.10 Seguridad y headers

| Header | Archivo | Estado | Recomendación |
|---|---|---|---|
| X-Content-Type-Options | `vercel.json` | ✓ nosniff | — |
| X-Frame-Options | `vercel.json` | ✓ DENY | — |
| X-XSS-Protection | `vercel.json` | ✓ 1;mode=block | — |
| Referrer-Policy | `vercel.json` | ✓ strict-origin-when-cross-origin | — |
| Permissions-Policy | `vercel.json` | ✓ camera/mic/geo bloqueados | — |
| **HSTS** | — | **✗ Ausente** | **Añadir** Strict-Transport-Security |
| CSP | — | ✗ Ausente | Recomendable; no crítico en esta fase |
| X-DNS-Prefetch-Control | `next.config.ts` | ✓ on | — |

### 1.11 Imágenes y assets

| Asset | Ruta | Estado | Notas |
|---|---|---|---|
| Doctor photo | `public/images/doctor/rafael-godoy-v02.jpg` | ✓ Presente | Usado con next/image |
| OG image | `public/images/hero/og-image.jpg` | ✓ Presente | 1200x630 |
| Clinic exterior | `public/images/clinic/clinica-exterior.jpg` | ✓ Presente | Referenciado en schema |
| Favicon | `src/app/favicon.ico` | ✓ Presente | Correcto para App Router |
| **Apple touch icon** | — | **✗ Ausente** | Añadir `apple-touch-icon.png` en `/public/` |
| .DS_Store en /public/ | `public/**/.DS_Store` | ⚠ Presentes | No funcional, limpiar antes de deploy |

### 1.12 Páginas y rutas

| Ruta | Archivo | Estado |
|---|---|---|
| `/` | `src/app/page.tsx` | ✓ |
| `/aviso-legal` | `src/app/aviso-legal/page.tsx` | ✓ |
| `/politica-privacidad` | `src/app/politica-privacidad/page.tsx` | ✓ |
| `/politica-cookies` | `src/app/politica-cookies/page.tsx` | ✓ |
| `/not-found` / 404 | — | **✗ Ausente** — Next.js usa el default |
| `/sitemap.xml` | `src/app/sitemap.ts` | ✓ Auto-generado |
| `/robots.txt` | `src/app/robots.ts` | ✓ Auto-generado |
| `/manifest.json` | `src/app/manifest.ts` | ✓ Auto-generado |

### 1.13 CTAs medibles

| CTA | Componente | Tracking | Estado |
|---|---|---|---|
| Teléfono (header desktop) | `Header.tsx` | `trackPhoneCall("header")` | ✓ |
| Teléfono (header mobile) | `Header.tsx` | `trackPhoneCall("header_mobile")` | ✓ |
| Teléfono (menú mobile) | `Header.tsx` | `trackPhoneCall("mobile_menu")` | ✓ |
| Teléfono (contacto) | `ContactSection.tsx` | `trackPhoneCall("contact_section")` | ✓ |
| Teléfono (flotante) | `FloatingCallButton.tsx` | `trackPhoneCall(...)` | ✓ |
| Mapa / cómo llegar | `ContactSection.tsx` | `trackMapClick()` | ✓ |
| Email | `Footer.tsx`, `ContactSection.tsx` | **✗ Sin tracking** | Añadir |
| Servicios (modal CTA) | `ServicesSection.tsx` | **✗ Sin tracking** | Añadir |
| Hero CTA principal | `HeroSection.tsx` | **✗ Sin tracking** | Añadir |

---

## FASE 2 — AUDITORÍA DE DESPLIEGUE EN VERCEL

### 2.1 Diagnóstico: `LISTO CON CAMBIOS MENORES`

| Comprobación | Estado | Detalle |
|---|---|---|
| Root directory | ✓ `./` | Correcto, no hay monorepo |
| Preset | ✓ Next.js | Detectado automáticamente |
| Build command | ✓ `next build` | Default OK |
| Install command | ✓ `npm install` | Default OK (hay package.json) |
| Node version | ⚠ No fijada | Recomendado fijar en Vercel dashboard: **Node 20.x** |
| Dependencias problemáticas | ✓ Ninguna | Dependencias mínimas y estables |
| SSR/CSR imports | ✓ OK | Todos los componentes client-side usan `"use client"` |
| window/document sin guard | ✓ OK | `analytics.ts` guarda con `typeof window === "undefined"` |
| Hydration mismatch | ✓ Bajo riesgo | `useClinicStatus` arranca con `null`, evita mismatch |
| Imágenes externas | ✓ N/A | Solo imágenes locales |
| NEXT_PUBLIC_* separación | ⚠ Mejorable | IDs en site.ts hardcoded, no leen env vars |
| Variables secretas | ✓ No hay | Todos los values son públicos |
| Preview deployment limpio | ✓ Funcional | ⚠ Falta noindex para URLs de preview |

### 2.2 Variables de entorno necesarias en Vercel

| Variable | Local | Preview | Production | Descripción |
|---|---|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | GTM-T89SFQTZ | GTM-T89SFQTZ | GTM-T89SFQTZ | ID de Google Tag Manager |
| `NEXT_PUBLIC_COOKIEBOT_ID` | 90daba5c-... | 90daba5c-... | 90daba5c-... | ID de Cookiebot CMP |
| `NEXT_PUBLIC_SITE_URL` | http://localhost:3000 | (URL de preview) | https://clinicarafaelgodoy.es | URL canónica base |
| `VERCEL_ENV` | (no aplica) | preview | production | **Auto-inyectada por Vercel** — usar para noindex |

> **Acción en Vercel dashboard:** Settings → Environment Variables → añadir los tres NEXT_PUBLIC_* con sus valores de producción. `VERCEL_ENV` la pone Vercel automáticamente.

### 2.3 Pasos previos al primer deploy

1. Verificar que `npm run build` termina sin errores en local
2. Verificar que `npm run lint` no devuelve errores bloqueantes
3. Confirmar que `public/images/` contiene las 3 imágenes reales
4. Eliminar `.DS_Store` del repositorio: `find . -name .DS_Store -delete` y commitear
5. Añadir entrada `.DS_Store` en `.gitignore` si no está
6. Fijar Node version en Vercel dashboard a **20.x**

---

## FASE 3 — MIGRACIÓN DE DOMINIO

### 3.1 Situación actual
- Dominio: `clinicarafaelgodoy.es` gestionado en DonDominio
- Web actual: HTML estático servido desde FTP/hosting DonDominio
- Correo: Pendiente de verificar si usa MX de DonDominio

### 3.2 Estrategia recomendada: DNS apuntando a Vercel, dominio en DonDominio

**No es necesario transferir el dominio.** DonDominio permite cambiar los DNS o los registros A/CNAME apuntando a Vercel mientras el dominio permanece en DonDominio.

### 3.3 Canonical definitivo: `clinicarafaelgodoy.es` (sin www)

El `vercel.json` ya redirige `www` → non-www permanentemente. Correcto.

### 3.4 Runbook paso a paso

#### ANTES del deploy
- [ ] Hacer screenshot y backup completo de la web actual (FTP)
- [ ] Verificar registros DNS actuales: MX, TXT (SPF, DKIM), A, CNAME
- [ ] Comprobar si el correo `info@clinicarafaelgodoy.es` usa DonDominio o externo
- [ ] Pasar `npm run build` en local sin errores
- [ ] Crear proyecto en Vercel importando desde GitHub
- [ ] Configurar las 3 variables de entorno en Vercel
- [ ] Verificar preview deployment con URL de Vercel (*.vercel.app)

#### ANTES del cambio DNS
- [ ] Validar preview URL manualmente (navegación, teléfono, mapa, horario)
- [ ] Verificar GTM y Cookiebot en preview (banners, dataLayer)
- [ ] Confirmar que los registros MX para correo están documentados

#### DURANTE el cambio DNS
En DonDominio, modificar los registros DNS:

```
# Registro A para el apex (clinicarafaelgodoy.es)
@   A   76.76.21.21

# CNAME para www (redirigido a non-www por vercel.json)
www CNAME cname.vercel-dns.com
```

> Vercel proporciona los valores exactos en: Project Settings → Domains → Add Domain

- TTL mínimo recomendado durante el cambio: 300 segundos
- Conservar registros MX sin tocarlos (correo independiente del web)

#### VALIDACIÓN post-cambio
- [ ] `curl -I https://clinicarafaelgodoy.es` → responde 200
- [ ] `curl -I https://www.clinicarafaelgodoy.es` → responde 301 a non-www
- [ ] `curl -I http://clinicarafaelgodoy.es` → responde 301 a https (Vercel lo hace automáticamente)
- [ ] Verificar que el certificado SSL es válido (Vercel auto-provisiona Let's Encrypt)
- [ ] Comprobar que el correo sigue funcionando
- [ ] Enviar sitemap en Search Console

#### ROLLBACK
Si algo falla, volver los DNS de DonDominio a los valores anteriores. La propagación puede tardar hasta 48h pero en la práctica suele ser < 1h con TTL bajo.

---

## FASE 4 — ANALÍTICA Y MEDICIÓN

### 4.1 Estado actual

| Componente | Estado |
|---|---|
| GTM (GTM-T89SFQTZ) | ✓ Integrado correctamente |
| GA4 vía GTM | ✓ Asumible (se configura en GTM, no en código) |
| Consent Mode V2 | ✓ Defaults correctos (todo denied hasta consentimiento) |
| Cookiebot → actualiza GTM | ✓ Vía `data-blockingmode="auto"` |
| Doble carga | ✓ No hay |
| Contaminación de previews | **✗ Sin control** — datos de previews irán a GA4 |

### 4.2 Eventos implementados

| Evento | Parámetros | Dónde se dispara |
|---|---|---|
| `phone_call` | `event_category`, `event_label` (location), `phone_number` | Header, Mobile header, Mobile menu, Contact, Floating button |
| `map_click` | `event_category`, `event_label` | ContactSection (Google Maps + Directions) |

### 4.3 Eventos faltantes (implementar)

| Evento | Prioridad | Valor de negocio |
|---|---|---|
| `email_click` | Alta | Mide intención de contacto alternativa |
| `cta_click` | Alta | Mide CTAs del hero y modales de servicios |
| `whatsapp_click` | Media | No hay botón WhatsApp ahora; preparar para cuando se añada |
| `scroll_depth` | Baja | Comportamiento de engagement |

### 4.4 Arquitectura recomendada

```
Cookiebot (beforeInteractive, auto-blocking)
    ↓ consent actualizado
GTM (afterInteractive)
    ↓ contenedor GTM
    ├── GA4 Configuration Tag (triggered on consent granted)
    ├── phone_call event tag
    ├── map_click event tag
    ├── email_click event tag
    └── cta_click event tag
```

GA4 debe ir **a través de GTM**, no directamente en código. Esto permite:
- Activar/desactivar sin deploy
- Consent Mode nativo en GTM
- Gestión de tags sin tocar código

### 4.5 Filtrar tráfico de previews en GA4

En GTM, crear una variable de entorno y añadir excepción:
- Variable: `{{Page Hostname}}`
- Condición en triggers: `does not contain "vercel.app"`

Esto evita contaminar GA4 con visitas de QA/preview.

---

## FASE 5 — CMP, COOKIES Y CONSENT MODE

### 5.1 Estado de Cookiebot

| Elemento | Estado | Detalle |
|---|---|---|
| Integrado | ✓ Sí | `src="https://consent.cookiebot.com/uc.js"` |
| ID configurado | ✓ Sí | `90daba5c-1344-4c8f-8b95-813d140ce76d` |
| Modo bloqueo | ✓ Auto | `data-blockingmode="auto"` |
| Carga | ✓ beforeInteractive | Correcto |
| Orden con GTM | ✓ Correcto | Cookiebot antes, GTM después |
| Consent Mode V2 | ✓ Implementado | Defaults denied en `<Script id="consent-init">` |
| Dominio autorizado | ⚠ Verificar | Debe incluir `clinicarafaelgodoy.es` en el dashboard de Cookiebot |
| Localhost | ⚠ Sin configurar | Cookiebot puede no mostrar banner en localhost (dominio no autorizado) |
| Preview URLs | ⚠ Sin configurar | `*.vercel.app` no está en el dominio autorizado de Cookiebot |

### 5.2 Bug crítico: contradicción cookies marketing

El `iframe` de Google Maps en `ContactSection.tsx` usa `data-cookieconsent="marketing"`, lo que significa que Cookiebot lo bloquea hasta que el usuario acepta cookies de marketing. Sin embargo, la Política de Cookies declara explícitamente: *"no utilizamos cookies de marketing"*.

**Opciones:**
1. **Recomendada:** Actualizar la política de cookies para reconocer que Google Maps puede establecer cookies de marketing cuando el usuario las acepta.
2. Alternativa: Cambiar el atributo a `data-cookieconsent="statistics"` — pero esto puede no coincidir con la categorización de Cookiebot para Maps.

La opción 1 es más honesta y se ajusta al comportamiento real.

### 5.3 Recomendación: mantener Cookiebot

Razones para mantener Cookiebot:
- Ya integrado y funcional
- Gestiona Consent Mode V2 automáticamente
- Dashboard de gestión de cookies sin tocar código
- Precio bajo para un único dominio
- Alternativas (Axeptio, CookieYes) requerirían reconfigurar GTM y Consent Mode

### 5.4 Configuración necesaria en Cookiebot dashboard

1. Añadir dominios autorizados: `clinicarafaelgodoy.es`, `www.clinicarafaelgodoy.es`
2. Para desarrollo local: añadir `localhost` como dominio de prueba o ignorar
3. Para previews Vercel: añadir `*.vercel.app` o el subdominio específico del proyecto

---

## FASE 6 — SEO TÉCNICO E INDEXACIÓN

### 6.1 Metadata por página

| Página | Title | Description | Canonical | OG | Estado |
|---|---|---|---|---|---|
| `/` | ✓ Con plantilla | ✓ 160 chars | ✓ `site.domain` | ✓ Completo | OK |
| `/aviso-legal` | ✓ | ✓ | ✓ URL propia | ✓ Heredado | OK |
| `/politica-privacidad` | ✓ | ✓ | ✓ URL propia | ✓ Heredado | OK |
| `/politica-cookies` | ✓ | ✓ | ✓ URL propia | ✓ Heredado | OK |

### 6.2 Structured Data

El schema `Dentist` (subtype de `LocalBusiness`) es el tipo correcto para una clínica dental con médico especialista. No usar solo `Organization`.

**Lo que hay:**
- `@type: "Dentist"` — correcto
- Dirección completa con PostalAddress — correcto
- GeoCoordinates — correcto  
- OpeningHoursSpecification — correcto
- medicalSpecialty — correcto
- hasOfferCatalog con MedicalProcedure — correcto
- Founder con Physician — correcto

**Lo que falta:**
- `sameAs` — añadir Google Business Profile URL y redes sociales cuando existan
- `aggregateRating` — se puede añadir con los datos de los testimonios (con cautela, debe ser real)
- Logo URL dedicado — actualmente usa el og-image; idealmente un logo cuadrado PNG

### 6.3 Sitemap

Rutas presentes: `/`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`

La home con `priority: 1.0` y `changeFrequency: "monthly"` es correcto. Las páginas legales con `priority: 0.3` y `"yearly"` es correcto.

**Problema:** `lastModified: new Date()` genera la fecha del momento del build en cada despliegue, lo que puede confundir a los crawlers con cambios falsos.

### 6.4 robots.txt generado

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/
Sitemap: https://clinicarafaelgodoy.es/sitemap.xml
Host: https://clinicarafaelgodoy.es
```

La directiva `Host:` es usada solo por Yandex, no por Google. No daña, pero es innecesaria. Eliminar.

### 6.5 Indexabilidad

- No hay páginas con `noindex` accidental
- No hay canonicals erróneas detectadas
- No hay páginas huérfanas (todas las legales están en el footer)
- El contenido de la home es suficiente para posicionamiento local (keywords locales presentes, H1 con ciudad)

---

## FASE 7 — GOOGLE SEARCH CONSOLE

Ver documento `INDEXACION_PLAN.md` para el checklist completo.

**Decisión de propiedad:** Usar **Domain property** (`clinicarafaelgodoy.es`) porque cubre http/https y www/non-www con una sola verificación. Requiere añadir un registro TXT en DonDominio.

---

## FASE 8 — PERFIL DE NEGOCIO Y SEÑALES EXTERNAS

### 8.1 Datos de negocio en el repositorio

| Dato | Valor encontrado | Estado |
|---|---|---|
| Nombre | Clínica Dental Dr. Rafael Godoy | ✓ Consistente |
| Teléfono | +34 957 29 29 69 | ✓ Presente en múltiples CTAs |
| Email | info@clinicarafaelgodoy.es | ✓ Presente |
| Dirección | Plaza de Andalucía, 3, Sur, 14009 Córdoba | ✓ Presente |
| Coordenadas | 37.87013, -4.78119 | ✓ En schema y Maps embed |
| Doctor | Dr. Rafael Godoy Pizarro, Estomatólogo, Univ. Montpellier | ✓ En schema |
| Horario | Lun-Mar-Jue 9-14/17-20:30, Mié-Vie 9-14 | ✓ Detallado |

### 8.2 Señales externas faltantes

| Señal | Estado | Recomendación |
|---|---|---|
| Google Business Profile URL en sameAs | **✗ Pendiente** | Añadir cuando esté verificado |
| Redes sociales en sameAs | **✗ Pendiente de dato externo** | Si existen perfiles, añadir |
| Enlace a GBP desde web | No aplica | GBP enlaza a la web, no al revés |

---

## FASE 9 — RENDIMIENTO, CALIDAD Y SEGURIDAD

### 9.1 Rendimiento esperado

| Métrica | Expectativa | Base |
|---|---|---|
| LCP | Bueno (<2.5s) | Hero sin imágenes pesadas; Inter font con `swap` |
| CLS | Excelente (<0.1) | No hay layouts que cambien tras carga |
| FID/INP | Bueno | Poco JavaScript de bloqueo |
| FCP | Bueno | Tailwind CSS purgado, sin FOUC |

### 9.2 Imágenes

| Imagen | Uso | next/image | priority | alt | Estado |
|---|---|---|---|---|---|
| rafael-godoy-v02.jpg | DoctorSection | ✓ Sí | ✓ Sí | ✓ Descriptivo | ✓ OK |
| og-image.jpg | Solo en metadata | N/A | N/A | ✓ En metadata | ✓ OK |
| clinica-exterior.jpg | Solo en schema | N/A | N/A | N/A | ✓ OK |

### 9.3 Fuentes

- Inter cargada con `next/font/google` → zero CLS, swap display, local fallback
- No hay font loading externo manual

### 9.4 Scripts de terceros y rendimiento

| Script | Strategy | Impacto | Estado |
|---|---|---|---|
| Consent Mode V2 | beforeInteractive | Necesario | ✓ OK |
| Cookiebot | beforeInteractive | Necesario para compliance | ✓ Aceptable |
| GTM | afterInteractive | Bajo impacto | ✓ OK |

### 9.5 Accesibilidad

| Elemento | Estado |
|---|---|
| Skip to content | ✓ Implementado |
| lang="es" | ✓ |
| Semantic HTML (header, main, footer, nav, section) | ✓ |
| ARIA labels en botones/links | ✓ |
| aria-expanded en menú mobile | ✓ |
| Min touch target 44px | ✓ |
| Focus visible (3px outline) | ✓ en globals.css |
| Contraste | ✓ Teal-600 sobre blanco pasa AA |
| Alt texts en imágenes | ✓ |

### 9.6 Seguridad

| Elemento | Estado |
|---|---|
| X-Frame-Options: DENY | ✓ |
| X-Content-Type-Options: nosniff | ✓ |
| Referrer-Policy | ✓ |
| Permissions-Policy | ✓ |
| **HSTS** | **✗ Falta** |
| CSP | ✗ No implementado (recomendable futuro) |
| No secrets en código | ✓ |

### 9.7 Página 404

Next.js App Router sirve una página 404 genérica por defecto. Para mejorar la experiencia, crear `src/app/not-found.tsx`. No es bloqueante pero mejora UX y reduce bounce.

---

## LISTADO PRIORIZADO DE INCIDENCIAS

### Críticas (bloquean compliance legal o pueden causar pérdida de datos)
| # | Incidencia | Archivo | Acción |
|---|---|---|---|
| C1 | Contradicción: iframe Maps con `data-cookieconsent="marketing"` vs política que dice "no cookies de marketing" | `ContactSection.tsx`, `politica-cookies/page.tsx` | Actualizar política de cookies para mencionar Google Maps bajo categoría marketing |

### Altas (afectan analítica, SEO o seguridad)
| # | Incidencia | Archivo | Acción |
|---|---|---|---|
| A1 | Falta noindex en URLs de preview de Vercel | `layout.tsx` | Convertir a `generateMetadata`, condicionar robots por `VERCEL_ENV` |
| A2 | GTM/Cookiebot IDs hardcoded, env vars ignoradas | `src/config/site.ts` | Leer de `process.env.NEXT_PUBLIC_*` con fallback |
| A3 | HSTS ausente | `vercel.json` | Añadir `Strict-Transport-Security` header |
| A4 | Twitter Cards ausentes | `layout.tsx` | Añadir `twitter: { card: "summary_large_image", ... }` |
| A5 | Tráfico de previews contamina GA4 | GTM | Filtrar por hostname en GTM triggers |

### Medias (afectan SEO, analítica o UX)
| # | Incidencia | Archivo | Acción |
|---|---|---|---|
| M1 | `sitemap.ts` usa `new Date()` como lastModified | `src/app/sitemap.ts` | Usar fecha fija o última modificación real |
| M2 | `sameAs` ausente en schema | `src/lib/schema.ts` | Añadir con placeholders cuando existan perfiles |
| M3 | Eventos de analytics faltantes (email, CTA, scroll) | `src/lib/analytics.ts` | Añadir funciones |
| M4 | `host:` innecesario en robots.txt | `src/app/robots.ts` | Eliminar |
| M5 | `.DS_Store` en `/public/` | Repositorio | Limpiar y actualizar .gitignore |
| M6 | Node version no fijada | Vercel dashboard | Fijar a 20.x en settings |
| M7 | Cookiebot no autorizado para *.vercel.app | Cookiebot dashboard | Añadir dominio en panel |

### Bajas (mejoras opcionales)
| # | Incidencia | Archivo | Acción |
|---|---|---|---|
| B1 | Página 404 personalizada ausente | — | Crear `src/app/not-found.tsx` |
| B2 | Apple touch icon ausente | `/public/` | Añadir `apple-touch-icon.png` |
| B3 | Logo schema usa og-image en vez de logo propio | `src/lib/schema.ts` | Crear logo cuadrado PNG |
| B4 | `aggregateRating` ausente en schema | `src/lib/schema.ts` | Añadir si los testimonios son verificables |
| B5 | Botón WhatsApp ausente | — | Consideración de negocio |
| B6 | Formulario de contacto ausente | — | Consideración de negocio |
