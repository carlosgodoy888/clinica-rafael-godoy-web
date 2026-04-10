# Plan de Indexación y Google Search Console
## Clínica Dental Dr. Rafael Godoy — clinicarafaelgodoy.es

---

## Decisión: Domain Property en Search Console

**Recomendación:** Crear una **Domain property** para `clinicarafaelgodoy.es`.

Ventajas sobre URL-prefix:
- Cubre automáticamente: `http://`, `https://`, `www.`, `non-www.`
- Un único punto de gestión para todas las variantes del dominio
- Más datos agregados, sin fragmentación
- Solo requiere un registro TXT en DonDominio

---

## Verificación de la propiedad

### Método: Registro TXT en DNS (recomendado para Domain property)

1. En Search Console → Add property → Domain → escribir `clinicarafaelgodoy.es`
2. Copiar el valor TXT que proporciona Google: `google-site-verification=XXXXXXXXXXXX`
3. En DonDominio → DNS del dominio:
   - Añadir registro TXT en `@` con el valor copiado
4. Volver a Search Console → Verify
5. La propagación puede tardar 5-60 minutos

> Conservar este registro TXT indefinidamente. Si se elimina, la propiedad puede des-verificarse.

---

## Sitemap

URL: `https://clinicarafaelgodoy.es/sitemap.xml`

Contenido actual:
```
https://clinicarafaelgodoy.es               (priority 1.0, monthly)
https://clinicarafaelgodoy.es/aviso-legal   (priority 0.3, yearly)
https://clinicarafaelgodoy.es/politica-privacidad (priority 0.3, yearly)
https://clinicarafaelgodoy.es/politica-cookies (priority 0.3, yearly)
```

### Enviar sitemap en Search Console
1. Search Console → Sitemaps → Add a new sitemap
2. Escribir: `sitemap.xml`
3. Submit
4. Verificar que el estado es "Success"

---

## URLs críticas a inspeccionar (día 0)

Usar la herramienta de Inspección de URL en Search Console:

| URL | Por qué inspeccionar | Acción si falla |
|---|---|---|
| `https://clinicarafaelgodoy.es/` | Página principal — debe ser indexable | Solicitar indexación |
| `https://clinicarafaelgodoy.es/sitemap.xml` | Verificar que se sirve bien | Revisar next.config |
| `https://clinicarafaelgodoy.es/robots.txt` | Verificar que no bloquea nada importante | Revisar robots.ts |

### Solicitar indexación manual
Para la página principal:
1. Inspección de URL → pegar la URL
2. Verificar que es indexable (sin noindex, sin errores)
3. "Request Indexing"

---

## Checklist post-lanzamiento por fases

### Día 0 (mismo día del lanzamiento)
- [ ] Verificar propiedad Domain en Search Console (registro TXT)
- [ ] Enviar sitemap: `https://clinicarafaelgodoy.es/sitemap.xml`
- [ ] Inspeccionar URL home → solicitar indexación
- [ ] Verificar que robots.txt se sirve correctamente
- [ ] Verificar que sitemap.xml se sirve correctamente

### Día 1
- [ ] Comprobar que el sitemap fue procesado en Search Console (sin errores)
- [ ] Revisar informe "Coverage" / "Page Indexing" → sin exclusiones inesperadas
- [ ] Verificar en Search Console que no hay URLs con noindex accidental

### Primera semana
- [ ] Rich Results Test: `https://search.google.com/test/rich-results`
  - Pasar la URL de la home
  - Verificar que detecta el schema `Dentist`
  - Verificar que no hay errores críticos en el markup
- [ ] Comprobar que ninguna URL de Vercel preview está indexada:
  - Buscar en Google: `site:clinica-rafael-godoy-web.vercel.app` (o el nombre del proyecto)
  - Si aparecen resultados, actuar: verificar noindex en previews está funcionando
- [ ] Revisar URL Inspection para las 4 URLs del sitemap

### Primer mes
- [ ] Revisar Performance report: primeras impresiones orgánicas
- [ ] Revisar Page Indexing: `Indexed` vs `Not indexed`
- [ ] Revisar Core Web Vitals report (aparece cuando hay suficiente tráfico)
- [ ] Revisar Enhancement report: detecta problemas con structured data
- [ ] Si hay errores de schema → corregir en `src/lib/schema.ts`
- [ ] Añadir URL de Google Business Profile en `sameAs` del schema (ver abajo)

---

## Google Business Profile (GBP)

### Alineación de datos (NAP Consistency)

Los datos deben ser **exactamente iguales** en la web, el schema, y Google Business Profile:

| Dato | En la web | Debe coincidir en GBP |
|---|---|---|
| Nombre | Clínica Dental Dr. Rafael Godoy | Igual |
| Teléfono | +34 957 29 29 69 | Igual |
| Dirección | Plaza de Andalucía, 3, Sur, 14009 Córdoba | Igual |
| Web | https://clinicarafaelgodoy.es | Igual |
| Horario | Lun-Mar-Jue 9-14/17-20:30, Mié-Vie 9-14 | Igual |

### Añadir URL de GBP en sameAs (pendiente de dato externo)

Una vez verificado el perfil de Google Business Profile:
1. Obtener la URL del perfil (formato: `https://g.page/...` o `https://maps.google.com/...`)
2. Añadir en `src/lib/schema.ts` dentro de `generateLocalBusinessSchema()`:

```typescript
sameAs: [
  "https://g.page/[PLACEHOLDER_GBP_URL]", // ← Sustituir por URL real
  // Añadir redes sociales si existen:
  // "https://www.facebook.com/[PLACEHOLDER]",
  // "https://www.instagram.com/[PLACEHOLDER]",
],
```

---

## Structured Data — Verificación

### Herramientas de validación
1. **Rich Results Test:** https://search.google.com/test/rich-results
   - Introducir la URL de la home
   - Tipo de resultado esperado: Local Business (Dentist)

2. **Schema.org Validator:** https://validator.schema.org
   - Pegar el JSON-LD del código o introducir la URL
   - Verificar que no hay errores de tipo o propiedades desconocidas

3. **Search Console → Enhancements:**
   - Aparece tras la primera indexación
   - Muestra errores y advertencias de structured data

### Campos del schema verificados

| Campo | Estado | Valor |
|---|---|---|
| @type: Dentist | ✓ | Correcto (subtype de MedicalOrganization) |
| name | ✓ | Clínica Dental Dr. Rafael Godoy |
| telephone | ✓ | +34957292969 |
| address | ✓ | Plaza de Andalucía 3, 14009 Córdoba |
| geo | ✓ | 37.87013, -4.78119 |
| openingHoursSpecification | ✓ | 3 reglas (L-M-J, L-M-J tarde, M-V) |
| medicalSpecialty | ✓ | 6 especialidades |
| url | ✓ | https://clinicarafaelgodoy.es |
| priceRange | ✓ | €€ |
| sameAs | ✗ Vacío | Añadir tras verificar GBP |
| aggregateRating | ✗ Ausente | Opcional — añadir si se pueden verificar las reseñas |

---

## Señales de entidad local

La web transmite correctamente:
- Especialidad: clínica dental, estomatología, implantología, ortodoncia
- Ubicación: Córdoba, Plaza de Andalucía, Puente Romano (referencia geográfica)
- Doctor: Dr. Rafael Godoy Pizarro, Universidad de Montpellier, 35 años
- Horario: detallado en código (schema + UI)
- Teléfono: visible y clickable en múltiples puntos

**Recomendación adicional:** Una vez indexada, verificar que el Knowledge Panel de Google muestra los datos correctos. Si hay discrepancias, usar "Suggest an edit" en GBP.

---

## Preparación para Google Discover y asistentes

La web está preparada con:
- OG image de 1200×630 (requisito de Discover)
- Title descriptivo con entidad (Dr. Rafael Godoy, Córdoba)
- Schema.org con tipo específico (Dentist)
- Texto de calidad con keywords locales

No se puede garantizar aparición en Discover (depende de Google), pero la base técnica es correcta.
