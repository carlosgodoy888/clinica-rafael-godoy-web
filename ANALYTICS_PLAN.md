# Plan de Analítica y Medición
## Clínica Dental Dr. Rafael Godoy — clinicarafaelgodoy.es

---

## Arquitectura recomendada

```
Navegador
│
├── Cookiebot (beforeInteractive)
│       └── actualiza Consent Mode según elección del usuario
│
├── Google Consent Mode V2 (beforeInteractive)
│       └── defaults: todo denied hasta consentimiento
│
└── Google Tag Manager (afterInteractive)
        ├── GA4 Configuration Tag
        │       └── trigger: Consent Granted (analytics_storage)
        ├── Eventos custom → GA4 Event Tags
        └── Filtros de entorno (excluir *.vercel.app)
```

**Regla:** GA4 va siempre a través de GTM. Nunca cargar GA4 directamente en código.

---

## Estado actual de implementación

| Componente | Estado | Notas |
|---|---|---|
| GTM integrado | ✓ | GTM-T89SFQTZ, afterInteractive |
| Consent Mode V2 | ✓ | Defaults denied correctos |
| Cookiebot → consent update | ✓ | Auto-blocking mode |
| GA4 (en GTM) | ⚠ Pendiente config en GTM | El ID de medición GA4 debe configurarse en GTM |
| Eventos en código | ✓ Parcial | phone_call y map_click implementados |
| Filtro previews | ✗ | Hay que añadir en GTM |

---

## Eventos implementados en el código

### `phone_call`
Disparado en todos los puntos de contacto por teléfono.

```typescript
trackPhoneCall(location: string)
// Parámetros: event_category="engagement", event_label=location, phone_number
```

| Location | Componente |
|---|---|
| `"header"` | Header desktop |
| `"header_mobile"` | Header mobile |
| `"mobile_menu"` | Menú mobile |
| `"contact_section"` | Sección Contacto |
| `"floating_button"` | Botón flotante |

### `map_click`
Disparado al hacer clic en cualquier botón de navegación/mapa.

```typescript
trackMapClick()
// Parámetros: event_category="engagement", event_label="google_maps"
```

---

## Eventos nuevos añadidos (patch aplicado en analytics.ts)

### `email_click`
```typescript
trackEmailClick(location: string)
// event_category: "engagement", event_label: location
```
**Implementar en:** `Footer.tsx` y `ContactSection.tsx` (enlaces mailto:)

### `cta_click`
```typescript
trackCtaClick(ctaName: string, location: string)
// event_category: "engagement", event_label: ctaName, cta_location: location
```
**Implementar en:**
- Hero: CTA "Llamar" y CTA "Cómo llegar"
- ServicesSection: CTA dentro del modal de cada servicio

### `whatsapp_click`
```typescript
trackWhatsAppClick(location: string)
// event_category: "engagement", event_label: location
```
**Implementar cuando se añada botón WhatsApp.**

### `scroll_depth`
```typescript
trackScrollDepth(percentage: number)
// event_category: "engagement", event_label: "25%"|"50%"|"75%"|"100%"
```
**Implementar opcionalmente** en un componente `ScrollDepthTracker` si se añade.

---

## Configuración en GTM (pasos manuales)

### Paso 1: Crear variable GA4 Measurement ID
- Tipo: Constante
- Nombre: `GA4 - Measurement ID`
- Valor: `G-XXXXXXXXXX` ← **pendiente de dato externo** (obtener de Google Analytics → Admin → Data Streams)

### Paso 2: Tag de GA4 Configuration
- Tipo: Google Analytics: GA4 Configuration
- Measurement ID: `{{GA4 - Measurement ID}}`
- Trigger: **Consent Initialization - All Pages** (NO usar All Pages sin consent)
  - O crear trigger personalizado que dispare cuando `analytics_storage = granted`

### Paso 3: Tags de eventos

Para cada evento crear un GA4 Event Tag:

#### Tag: Phone Call
- Nombre del evento: `phone_call`
- Parámetros:
  - `event_category`: `{{DLV - event_category}}`
  - `event_label`: `{{DLV - event_label}}`
  - `phone_number`: `{{DLV - phone_number}}`
- Trigger: Custom Event `phone_call`

#### Tag: Map Click
- Nombre del evento: `map_click`
- Trigger: Custom Event `map_click`

#### Tag: Email Click
- Nombre del evento: `email_click`
- Trigger: Custom Event `email_click`

#### Tag: CTA Click
- Nombre del evento: `cta_click`
- Parámetros: `cta_name`, `cta_location`
- Trigger: Custom Event `cta_click`

### Paso 4: Variables de Data Layer
Crear variables tipo Data Layer Variable para cada parámetro:
- `{{DLV - event_category}}` → `event_category`
- `{{DLV - event_label}}` → `event_label`
- `{{DLV - phone_number}}` → `phone_number`
- `{{DLV - cta_name}}` → `cta_name`
- `{{DLV - cta_location}}` → `cta_location`

### Paso 5: Filtrar tráfico de previews

Crear variable:
- Nombre: `Page Hostname`
- Tipo: JavaScript Variable → `window.location.hostname`

En cada trigger de conversión, añadir condición:
- `{{Page Hostname}}` **does not contain** `vercel.app`
- `{{Page Hostname}}` **does not contain** `localhost`

---

## Conversiones clave para configurar en GA4

| Conversión | Evento | Prioridad |
|---|---|---|
| Llamada desde web | `phone_call` | ✅ Alta — principal CTA de negocio |
| Clic en mapa/cómo llegar | `map_click` | Media — intención de visita |
| Clic en email | `email_click` | Media |
| Clic en CTA servicios | `cta_click` | Media |

En GA4: Admin → Events → Mark as conversion para `phone_call`.

---

## Eventos de negocio futuro

Si en el futuro se añaden:
- **Formulario de cita:** evento `form_submit` con `form_name: "cita_online"`
- **WhatsApp:** evento `whatsapp_click` (función ya preparada en analytics.ts)
- **Chat online:** evento `chat_open`

---

## Verificación de implementación

### Método 1: GTM Preview
1. Activar previsualización en GTM
2. Abrir la web con el parámetro `?gtm_debug=x`
3. Interactuar con CTAs
4. Verificar que los tags se disparan correctamente

### Método 2: GA4 DebugView
1. Instalar Google Analytics Debugger en Chrome
2. Navegar por la web
3. En GA4 → Admin → DebugView → ver eventos en tiempo real

### Método 3: Consola del navegador
```javascript
// Verificar dataLayer
window.dataLayer
// Ver todos los eventos pushados
window.dataLayer.filter(e => e.event)
```

---

## IDs y datos pendientes de configuración externa

| Dato | Estado | Dónde obtenerlo |
|---|---|---|
| GA4 Measurement ID (`G-XXXXXXXXXX`) | **PENDIENTE** | Google Analytics → Admin → Data Streams → Web |
| Google Business Profile URL | **PENDIENTE** | Google Business Profile → Info → Web |
| URLs de redes sociales | **PENDIENTE DE DATO EXTERNO** | Si existen perfiles de la clínica |
