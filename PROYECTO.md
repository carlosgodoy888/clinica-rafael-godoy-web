# Definición del Proyecto — Clínica Dental Dr. Rafael Godoy

**Versión:** 1.0 | **Fecha:** Abril 2026 | **Autor:** Carlos Godoy

---

## 1. QUÉ ES ESTE PROYECTO

Sitio web corporativo y de captación de pacientes para la **Clínica Dental Dr. Rafael Godoy**, médico estomatólogo en Córdoba con 35 años de experiencia. El objetivo principal es generar llamadas telefónicas y reforzar la presencia digital local.

---

## 2. DATOS DEL NEGOCIO

| Campo | Valor |
|---|---|
| Nombre | Clínica Dental Dr. Rafael Godoy |
| Doctor | Dr. Rafael Godoy Pizarro, Médico Estomatólogo |
| Formación | Universidad de Montpellier |
| Experiencia | 35 años |
| Teléfono | 957 29 29 69 |
| Email | info@clinicarafaelgodoy.es |
| Dirección | Plaza de Andalucía, 3, Sur, 14009 Córdoba |
| Dominio | https://clinicarafaelgodoy.es |
| Google Maps | https://maps.app.goo.gl/kC8tagP8EjpJBEnP7 |

**Horario:**
- Lunes, Martes, Jueves: 9:00–14:00 y 17:00–20:30
- Miércoles y Viernes: 9:00–14:00 (solo mañana)
- Fin de semana: Cerrado

---

## 3. STACK TÉCNICO

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16.2 con App Router |
| Lenguaje | TypeScript 5 (strict mode) |
| Estilos | Tailwind CSS v4 (configuración CSS via @theme) |
| Fuente | Inter (Google Fonts, weights 400–800) |
| Iconos | Lucide React |
| Utilidades CSS | clsx + tailwind-merge |
| Deploy | Vercel |
| Analytics | Google Tag Manager (GTM-T89SFQTZ) |
| Privacidad | Cookiebot (auto-blocking, Consent Mode V2) |
| Node | Compatible con Node 20+ |

---

## 4. ESTRUCTURA DE ARCHIVOS

```
clinica-rafael-godoy-web/
├── public/
│   └── images/
│       ├── clinic/clinica-exterior.jpg     ← foto exterior (sin usar aún en web)
│       ├── doctor/rafael-godoy.png         ← foto del doctor (en DoctorSection)
│       └── hero/og-image.jpg               ← imagen para redes sociales (1200x630)
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                      ← root layout: meta global, fuentes, GTM, Cookiebot
│   │   ├── page.tsx                        ← homepage: ensambla todas las secciones
│   │   ├── globals.css                     ← variables CSS, animaciones, estilos base
│   │   ├── robots.ts                       ← genera robots.txt automáticamente
│   │   ├── sitemap.ts                      ← genera sitemap.xml automáticamente
│   │   ├── manifest.ts                     ← PWA manifest
│   │   ├── aviso-legal/page.tsx
│   │   ├── politica-privacidad/page.tsx    ← ⚠️ NIF pendiente de completar
│   │   └── politica-cookies/page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx                  ← nav sticky, mobile menu, sección activa
│   │   │   ├── Footer.tsx                  ← 4 columnas: marca, contacto, enlaces, legal
│   │   │   └── FloatingCallButton.tsx      ← botón flotante de llamada (aparece al scrollar)
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx             ← banner principal con stats y CTAs
│   │   │   ├── CredentialsSection.tsx      ← formación y experiencia (4 items)
│   │   │   ├── ServicesSection.tsx         ← 6 servicios con modal de detalle
│   │   │   ├── WhyUsSection.tsx            ← 4 diferenciadores clave
│   │   │   ├── DoctorSection.tsx           ← perfil del doctor con foto
│   │   │   ├── TestimonialsSection.tsx     ← 6 testimonios con carrusel móvil
│   │   │   └── ContactSection.tsx          ← mapa, horario en tiempo real, contacto
│   │   ├── ui/
│   │   │   ├── Button.tsx                  ← botón polimórfico (primary/secondary/outline)
│   │   │   ├── Container.tsx               ← wrapper max-w-7xl
│   │   │   ├── SectionHeader.tsx           ← título de sección reutilizable
│   │   │   └── ScrollReveal.tsx            ← animaciones de entrada por scroll
│   │   └── legal/
│   │       └── LegalLayout.tsx             ← layout para páginas legales
│   │
│   ├── config/
│   │   ├── site.ts                         ← nombre, dominio, keywords, IDs de tracking
│   │   ├── clinic.ts                       ← doctor, contacto, horarios
│   │   ├── services.ts                     ← 6 servicios con títulos, descripción y features
│   │   └── testimonials.ts                 ← 6 testimonios de pacientes
│   │
│   ├── lib/
│   │   ├── schema.ts                       ← JSON-LD: LocalBusiness (Dentist) + Physician
│   │   ├── analytics.ts                    ← funciones de tracking: trackPhoneCall, trackMapClick
│   │   └── utils.ts                        ← cn() para clases Tailwind condicionales
│   │
│   └── types/
│       ├── clinic.ts                       ← interfaces ClinicInfo, ContactInfo, DoctorInfo
│       ├── service.ts                      ← interfaz Service
│       └── testimonial.ts                  ← interfaz Testimonial
│
├── .env.local                              ← GTM_ID, COOKIEBOT_ID, SITE_URL (no en Git)
├── .env.example                            ← plantilla de variables (en Git)
├── next.config.ts                          ← imágenes AVIF/WebP, redirect /inicio → /
├── vercel.json                             ← headers de seguridad, redirect www → root
├── tailwind.config / globals.css           ← paleta teal, tipografía, animaciones
├── tsconfig.json                           ← strict, path alias @/*
├── package.json
├── AUDITORIA.md                            ← auditoría completa del sitio
└── PROYECTO.md                             ← este archivo
```

---

## 5. PÁGINAS Y SECCIONES

### Homepage (`/`)
Página única con scroll vertical. Secciones en orden:

1. **HeroSection** — Banner principal: "35 años cuidando tu sonrisa en Córdoba". Stats, CTA llamar y ancla a contacto.
2. **CredentialsSection** — Formación universitaria, tecnología de vanguardia, actualización continua.
3. **ServicesSection** — 6 especialidades con modal de detalle:
   - Implantología Avanzada
   - Ortodoncia Integral
   - Estética Dental Premium
   - Periodoncia Especializada
   - Endodoncia Microscópica
   - Prostodoncia Avanzada
4. **WhyUsSection** — 4 razones para elegir la clínica.
5. **DoctorSection** — Perfil del Dr. Godoy: foto, bio, cita personal, estadísticas.
6. **TestimonialsSection** — 6 testimonios de pacientes reales.
7. **ContactSection** — Mapa Google Maps, horario con estado en tiempo real (abierto/cerrado), teléfono y email.

### Páginas legales
- `/aviso-legal` — Aviso legal
- `/politica-privacidad` — Política de privacidad RGPD (**⚠️ NIF sin completar**)
- `/politica-cookies` — Política de cookies

---

## 6. SEO Y POSICIONAMIENTO

### Palabras clave objetivo
- `clínica dental córdoba` (principal)
- `dentista córdoba`, `estomatólogo córdoba`
- `clínica dental córdoba centro`
- `dentista plaza andalucía córdoba`
- `implantes dentales córdoba`
- `ortodoncia córdoba`
- `dr rafael godoy córdoba`

### Datos estructurados (JSON-LD)
- **LocalBusiness** tipo Dentist: dirección, horarios, servicios, área de servicio 30km
- **Physician**: Doctor Godoy, especialidad, universidad, experiencia

### Archivos SEO generados automáticamente
- `sitemap.xml` — 4 URLs con prioridades
- `robots.txt` — permite todo, bloquea /api/ y /_next/

---

## 7. ANALYTICS Y TRACKING

**Google Tag Manager**: `GTM-T89SFQTZ`
**Cookiebot**: `90daba5c-1344-4c8f-8b95-813d140ce76d`
**Consent Mode V2**: activo, valores por defecto en "denied"

**Eventos rastreados:**
| Evento | Desde |
|---|---|
| `phone_call` | Hero, Doctor, Modal servicios, Contacto, Header, Footer, Botón flotante |
| `map_click` | Sección Contacto, Footer |

---

## 8. COLOR Y MARCA

| Elemento | Valor |
|---|---|
| Color primario | Teal — `#007C7C` |
| Fuente | Inter (400, 500, 600, 700, 800) |
| Estilo general | Profesional, moderno, confianza, limpio |
| Paleta completa | Teal 50–900 + Gray 50–900 |
| Animaciones | Reveal por scroll, transiciones GPU (transform/opacity) |

---

## 9. DESPLIEGUE

- **Plataforma**: Vercel (deploy automático desde rama `main`)
- **Dominio**: `clinicarafaelgodoy.es`
- **Redirección**: `www.clinicarafaelgodoy.es` → `clinicarafaelgodoy.es` (301)
- **SSL**: Automático vía Vercel
- **Variables de entorno**: configuradas en panel Vercel (no en Git)

---

## 10. PENDIENTES CONOCIDOS

| # | Tarea | Prioridad |
|---|---|---|
| 1 | Completar NIF en política de privacidad | 🔴 Crítico |
| 2 | Verificar configuración de conversiones en GA4/GTM | 🔴 Alta |
| 3 | Google Business Profile: optimizar ficha y fotos | 🔴 Alta |
| 4 | Conseguir reseñas de Google activamente | 🟡 Alta |
| 5 | Ficha en Doctoralia / Top Doctors | 🟡 Media |
| 6 | Añadir Twitter Card meta tags | 🟡 Media |
| 7 | Configurar Google Search Console | 🟡 Media |
| 8 | Usar foto clinica-exterior.jpg en alguna sección | 🟢 Baja |
| 9 | Formulario de cita previa | 🟢 Baja |
| 10 | Página 404 personalizada | 🟢 Baja |
