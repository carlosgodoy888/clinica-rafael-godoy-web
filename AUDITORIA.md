# Auditoría Web — Clínica Dental Dr. Rafael Godoy
**Fecha:** Abril 2026 | **Dominio:** clinicarafaelgodoy.es | **Stack:** Next.js 16 + Tailwind CSS v4

---

## 1. CONTENIDOS

### Puntos fuertes
| Sección | Estado | Observaciones |
|---|---|---|
| Hero | ✅ Correcto | Stats concretos (35 años, 5000 pacientes, 6 especialidades), CTA claro |
| Credenciales | ✅ Correcto | Universidad de Montpellier, formación continua |
| Servicios | ✅ Correcto | 6 servicios con detalle en modal. Textos diferenciados y profesionales |
| Doctor | ✅ Correcto | Foto real, bio, cita personal, badges flotantes |
| Testimonios | ✅ Correcto | 6 reseñas con nombre, tratamiento y valoración 5 estrellas |
| Por qué elegirnos | ✅ Correcto | 4 diferenciadores clave |
| Contacto | ✅ Correcto | Mapa, horario en tiempo real, múltiples vías de contacto |
| Footer | ✅ Correcto | Datos de contacto completos, enlaces legales |
| Páginas legales | ⚠️ Revisar | **NIF pendiente de completar** en política de privacidad |

### Mejoras de contenido recomendadas
- [ ] **Completar NIF** en `/politica-privacidad` (obligatorio RGPD)
- [ ] Añadir **precios orientativos** o rangos en servicios (mejora conversión)
- [ ] Considerar **página de cada servicio** para SEO de cola larga
- [ ] Añadir **formulario de contacto / cita previa** (actualmente solo teléfono)
- [ ] Blog con artículos de salud dental (estrategia de contenido a largo plazo)
- [ ] Foto de la **clínica interior** (existe `clinica-exterior.jpg` pero no se usa en ninguna sección)

---

## 2. SEO TÉCNICO

### Metadata y etiquetas
| Elemento | Estado | Detalle |
|---|---|---|
| Title tag | ✅ Óptimo | "Clínica Dental Dr. Rafael Godoy \| Córdoba - 35 años" (57 chars) |
| Meta description | ✅ Óptimo | 155 chars, incluye ciudad, años, servicios y teléfono |
| Canonical | ✅ Correcto | `https://clinicarafaelgodoy.es` |
| Robots meta | ✅ Correcto | index, follow |
| HTML lang | ✅ Correcto | `lang="es"` |
| Open Graph | ✅ Completo | OG image 1200x630, og:type, og:locale es_ES |
| Twitter Card | ⚠️ Ausente | No hay `twitter:card` meta tags configurados |
| Favicon | ✅ Presente | favicon.ico |

### Estructura
| Elemento | Estado | Detalle |
|---|---|---|
| robots.txt | ✅ Generado | Bloquea /api/, /_next/, /static/ correctamente |
| sitemap.xml | ✅ Generado | 4 URLs (home + 3 legales), prioridades correctas |
| Schema.org JSON-LD | ✅ Completo | LocalBusiness (Dentist) + Physician implementados |
| Headings H1-H6 | ✅ Correcto | Jerarquía semántica por sección |
| URLs amigables | ✅ Correcto | `/aviso-legal`, `/politica-privacidad`, `/politica-cookies` |
| HTTPS | ✅ Forzado | Vercel SSL + redirección www → root |
| Core Web Vitals | ✅ Optimizado | LCP (foto doctor con priority), CLS controlado, minimal JS |

### Pendientes técnicos
- [ ] Añadir `twitter:card` summary_large_image
- [ ] Incluir `clinica-exterior.jpg` en alguna sección (imagen orgánica para indexación)
- [ ] Configurar **Google Search Console** y verificar cobertura
- [ ] Considerar **Error 404 personalizado** (`not-found.tsx`)
- [ ] Añadir `error.tsx` para manejo de errores de servidor

---

## 3. SEO LOCAL

### Google Business Profile (GBP)
| Factor | Estado | Recomendación |
|---|---|---|
| NAP en web | ✅ Consistente | Nombre, dirección y teléfono idénticos en todas las páginas |
| Coordenadas | ✅ Implementado | lat/lon en JSON-LD y enlace directo a Google Maps |
| Área de servicio | ✅ Definida | GeoCircle 30km radio en schema |
| Horario | ✅ Implementado | OpeningHoursSpecification en JSON-LD + indicador en tiempo real en web |
| Categorías médicas | ✅ Completas | Dentistry, Oral Surgery, Orthodontics, Periodontics, Endodontics, Prosthodontics |
| Reseñas Google | ⚠️ Sin datos | No hay integración con reseñas reales de Google |
| PriceRange | ✅ Incluido | "€€" en schema |

### Datos estructurados locales
```
Schema tipo "Dentist" (subtipo de LocalBusiness):
- Nombre, dirección, teléfono, email, coordenadas ✅
- Horarios con días específicos ✅
- Servicios como MedicalProcedure ✅
- Fundador vinculado al schema Physician ✅
- Wikidata de Córdoba y Universidad de Montpellier ✅
```

### Palabras clave locales en contenido
| KW | Presente |
|---|---|
| clínica dental córdoba | ✅ |
| dentista córdoba | ✅ |
| estomatólogo córdoba | ✅ |
| clínica dental córdoba centro | ✅ |
| dentista plaza andalucía | ✅ |
| implantes córdoba | ✅ |
| ortodoncia córdoba | ✅ |

### Acciones SEO local prioritarias
- [ ] **Verificar y optimizar Google Business Profile** (fotos, descripción, horarios, Q&A)
- [ ] **Conseguir reseñas de Google** (solicitar a pacientes satisfechos)
- [ ] **Crear ficha en Doctoralia/Top Doctors** (directorios médicos con alta autoridad)
- [ ] **Citar en directorios locales**: Páginas Amarillas, Yelp España, 11870, Infocif
- [ ] **Backlinks locales**: cámara de comercio Córdoba, colegios profesionales (COEM)
- [ ] Confirmar que el NAP de GBP coincide exactamente con el de la web

---

## 4. RENDIMIENTO Y UX

| Aspecto | Estado | Notas |
|---|---|---|
| Imágenes AVIF/WebP | ✅ | Configurado en next.config.ts |
| Fuentes optimizadas | ✅ | Inter con display:swap, subset latin |
| Animaciones GPU | ✅ | Solo transform/opacity, prefers-reduced-motion respetado |
| Accesibilidad | ✅ | ARIA labels, roles, navegación teclado, min 44px táctil |
| Mobile-first | ✅ | Diseño responsive en todos los breakpoints |
| Botón flotante de llamada | ✅ | Aparece al scrollar, pulsa para llamar |
| Scroll horizontal testimonios | ✅ | Snap scrolling en móvil |
| Mapa Google integrado | ✅ | Iframe con link alternativo para Apple Maps |

---

## 5. ANALÍTICA Y CONVERSIÓN

| Elemento | Estado |
|---|---|
| Google Tag Manager | ✅ GTM-T89SFQTZ activo |
| Cookiebot (RGPD) | ✅ Auto-blocking mode |
| Google Consent Mode V2 | ✅ Correctamente implementado |
| Tracking llamadas | ✅ Desde Hero, Doctor, Modal, Contacto, Header, Footer, Floating |
| Tracking mapa | ✅ trackMapClick() implementado |
| Google Analytics | ⚠️ No confirmado | GTM está activo pero no se confirma tag de GA4 interno |
| Conversiones configuradas | ⚠️ Verificar | Eventos disparados pero falta confirmar conversiones en GA4/GTM |
| Formulario de contacto | ❌ No existe | Solo teléfono; se pierde conversión de usuarios que prefieren texto |

---

## 6. SEGURIDAD

| Header | Estado |
|---|---|
| X-Content-Type-Options: nosniff | ✅ |
| X-Frame-Options: DENY | ✅ |
| X-XSS-Protection | ✅ |
| Referrer-Policy: strict-origin | ✅ |
| Permissions-Policy | ✅ Camera/mic/geo bloqueados |
| HTTPS forzado | ✅ |
| Redirección www | ✅ Permanente 301 |

---

## 7. RESUMEN Y PRIORIDADES

### Crítico (hacer ya)
1. **Completar NIF** en política de privacidad (obligación legal)
2. **Verificar conversiones en GTM/GA4** (confirmar que los eventos de llamada se registran)
3. **Google Business Profile**: verificar ficha, añadir fotos, responder reseñas

### Alta prioridad
4. Añadir `twitter:card` meta tags
5. Configurar Google Search Console + verificar indexación
6. Conseguir reseñas de Google de forma activa
7. Ficha en Doctoralia/Top Doctors

### Media prioridad
8. Formulario de cita previa/contacto
9. Usar la foto `clinica-exterior.jpg` en alguna sección
10. Página 404 personalizada

### Largo plazo
11. Blog/contenido informativo sobre salud dental
12. Páginas individuales por servicio (SEO de cola larga)
13. Sistema de citas online
