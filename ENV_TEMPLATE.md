# Inventario de Variables de Entorno
## Clínica Dental Dr. Rafael Godoy — clinicarafaelgodoy.es

---

## Variables activas

| Variable | Tipo | Descripción | Requerida |
|---|---|---|---|
| `NEXT_PUBLIC_GTM_ID` | Pública (client) | ID del contenedor de Google Tag Manager | Sí |
| `NEXT_PUBLIC_COOKIEBOT_ID` | Pública (client) | ID del dominio en Cookiebot CMP | Sí |
| `NEXT_PUBLIC_SITE_URL` | Pública (client) | URL canónica base del sitio | Sí |
| `VERCEL_ENV` | Auto-Vercel | Entorno actual: `production`, `preview`, `development` | Auto |

> Las variables `NEXT_PUBLIC_*` se embeben en el bundle del cliente. **No poner nunca secretos en estas variables.**
> `VERCEL_ENV` la inyecta Vercel automáticamente. En local no existe a menos que se defina manualmente.

---

## Valores por entorno

### Local (desarrollo)
Archivo: `.env.local` (gitignoreado, nunca commitear)

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-T89SFQTZ

# Cookiebot CMP
NEXT_PUBLIC_COOKIEBOT_ID=90daba5c-1344-4c8f-8b95-813d140ce76d

# URL base — local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> En local Cookiebot puede no mostrar el banner si `localhost` no está autorizado en el dashboard.
> El GTM puede disparar pero GA4 filtrará el tráfico si está configurado correctamente.

---

### Preview (Vercel — ramas no-main / PRs)
Configurar en Vercel: Settings → Environment Variables → entorno "Preview"

```env
NEXT_PUBLIC_GTM_ID=GTM-T89SFQTZ
NEXT_PUBLIC_COOKIEBOT_ID=90daba5c-1344-4c8f-8b95-813d140ce76d
NEXT_PUBLIC_SITE_URL=https://[nombre-proyecto].vercel.app
```

> En preview, la metadata de robots debe devolver `noindex` para evitar indexación accidental.
> Esto se controla automáticamente vía `VERCEL_ENV === 'preview'` en `layout.tsx` (tras aplicar el patch).
> Cookiebot debe tener `*.vercel.app` autorizado en su dashboard.

---

### Production (rama main)
Configurar en Vercel: Settings → Environment Variables → entorno "Production"

```env
NEXT_PUBLIC_GTM_ID=GTM-T89SFQTZ
NEXT_PUBLIC_COOKIEBOT_ID=90daba5c-1344-4c8f-8b95-813d140ce76d
NEXT_PUBLIC_SITE_URL=https://clinicarafaelgodoy.es
```

---

## Configuración en Vercel dashboard

### Paso a paso
1. Ir a https://vercel.com → Proyecto `clinica-rafael-godoy-web`
2. Settings → Environment Variables
3. Añadir cada variable con los valores correspondientes
4. Para `NEXT_PUBLIC_SITE_URL`: crear **dos entradas**:
   - Una para "Preview" con el valor de la URL de preview
   - Una para "Production" con `https://clinicarafaelgodoy.es`
5. Para `NEXT_PUBLIC_GTM_ID` y `NEXT_PUBLIC_COOKIEBOT_ID`: marcar "All Environments"

### Variables auto-inyectadas por Vercel (no configurar manualmente)

| Variable | Valor en production | Valor en preview | Descripción |
|---|---|---|---|
| `VERCEL_ENV` | `production` | `preview` | Entorno Vercel actual |
| `VERCEL_URL` | (dominio custom) | `xxx.vercel.app` | URL del deployment |
| `VERCEL_GIT_COMMIT_SHA` | hash del commit | hash del commit | SHA del commit |

---

## Uso en el código

Las variables son leídas en `src/config/site.ts` con fallback a los valores hardcoded:

```typescript
tracking: {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-T89SFQTZ",
  cookiebotId: process.env.NEXT_PUBLIC_COOKIEBOT_ID ?? "90daba5c-1344-4c8f-8b95-813d140ce76d",
},
```

La variable `VERCEL_ENV` se usa en `layout.tsx` para controlar el comportamiento de robots:

```typescript
const isProduction = process.env.VERCEL_ENV === "production";
// robots: isProduction ? { index: true } : { index: false }
```

---

## Secretos reales en el proyecto

**No hay secretos en este proyecto.** Todos los IDs (GTM, Cookiebot) son identificadores públicos diseñados para aparecer en el HTML del cliente.

Si en el futuro se añade un backend con:
- API keys de terceros (Stripe, SendGrid, etc.)
- Connection strings a bases de datos
- Tokens de servicio

Esas variables NO deben tener el prefijo `NEXT_PUBLIC_` y nunca deben llegar al bundle del cliente.

---

## Plantilla `.env.example` (ya existe en el repo)

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-T89SFQTZ

# Cookiebot
NEXT_PUBLIC_COOKIEBOT_ID=90daba5c-1344-4c8f-8b95-813d140ce76d

# Site URL (cambiar por entorno)
NEXT_PUBLIC_SITE_URL=https://clinicarafaelgodoy.es
```

> El `.env.example` actual ya expone los IDs reales. Dado que estos IDs son públicos por naturaleza (aparecen en el HTML de la web), esto es aceptable. No es un riesgo de seguridad.
