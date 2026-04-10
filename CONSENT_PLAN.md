# Plan de Cookies y Consentimiento (CMP)
## Clínica Dental Dr. Rafael Godoy — clinicarafaelgodoy.es

---

## Decisión: Mantener Cookiebot

**Recomendación:** Mantener Cookiebot.

Razones:
- Ya integrado y funcional en el código
- Compatible con Google Consent Mode V2 (actualiza automáticamente el estado de consentimiento)
- Dashboard de gestión sin tocar código
- Escaneo automático de cookies
- Precio bajo para un dominio único
- Cambiar a otra CMP requeriría reconfigurar GTM, Consent Mode y posiblemente el código

---

## Arquitectura de consentimiento implementada

```
1. window.dataLayer inicializado (inline, sincrono)
2. Consent Mode V2 — defaults (beforeInteractive)
   - ad_storage: denied
   - ad_user_data: denied
   - ad_personalization: denied
   - analytics_storage: denied
   - functionality_storage: denied
   - personalization_storage: denied
   - security_storage: granted   ← necesario para Cookiebot
   - wait_for_update: 500ms

3. Cookiebot carga (beforeInteractive)
   - data-blockingmode="auto"
   - Escanea y bloquea scripts/iframes según categoría
   - Al aceptar/rechazar → actualiza gtag consent update

4. GTM carga (afterInteractive)
   - GA4 se activa solo si analytics_storage = granted
   - Google Maps se carga solo si marketing acepta (data-cookieconsent="marketing")
```

---

## Categorías de cookies y mapeo

| Categoría Cookiebot | Consent Mode signal | Scripts/elementos afectados |
|---|---|---|
| Necessary | security_storage=granted | Cookiebot consent cookie |
| Statistics | analytics_storage=granted | GA4 (via GTM) |
| Marketing | ad_storage=granted | Google Maps iframe |
| Preferences | personalization_storage=granted | (no hay ahora) |

---

## Bug: contradicción en Política de Cookies (CORREGIDO)

**Situación antes:** El iframe de Google Maps en `ContactSection.tsx` usa `data-cookieconsent="marketing"`, lo que hace que Cookiebot lo bloquee hasta que el usuario acepta cookies de marketing. Sin embargo, la Política de Cookies declaraba: *"no utilizamos cookies de marketing"*.

**Corrección aplicada:** La Política de Cookies ahora reconoce correctamente que:
- Google Maps es contenido embebido de terceros
- Se activa cuando el usuario acepta cookies de marketing
- Google puede establecer cookies de tipo marketing a través de este servicio

El atributo `data-cookieconsent="marketing"` en el iframe se mantiene porque:
- Cookiebot clasifica Google Maps como marketing en su base de datos
- Cambiar a "statistics" crearía otra contradicción con la clasificación de Cookiebot

---

## Configuración del dashboard de Cookiebot

### Dominios autorizados (obligatorio)

Añadir en Cookiebot dashboard → Domain configuration:

| Dominio | Entorno | Acción |
|---|---|---|
| `clinicarafaelgodoy.es` | Producción | ✅ Añadir |
| `www.clinicarafaelgodoy.es` | Producción | ✅ Añadir |
| `*.vercel.app` | Preview | ✅ Añadir (o el subdominio específico) |
| `localhost` | Desarrollo | Opcional — añadir para probar en local |

> Si `localhost` no está autorizado, Cookiebot no muestra el banner en desarrollo. En ese caso el mapa de Google Maps puede no cargarse en local porque `data-blockingmode="auto"` bloquea el iframe. Para desarrollo, o bien autorizas localhost o bien comentas temporalmente el atributo `data-blockingmode`.

### Escaneo de cookies

1. En el dashboard de Cookiebot → Cookie Scanner
2. Ejecutar escaneo sobre la preview URL (antes de lanzamiento) y sobre producción (después)
3. Verificar que las cookies detectadas coinciden con la Política de Cookies
4. Si el escáner detecta cookies no documentadas, añadirlas a la política

### Configuración de Consent Mode en Cookiebot

Verificar en Cookiebot dashboard que "Google Consent Mode v2" está habilitado:
- Settings → Integrations → Google Consent Mode V2 → Enable

---

## Verificación del flujo de consentimiento

### Checklist de comportamiento esperado

**Primera visita (sin cookies previas):**
- [ ] Banner de Cookiebot aparece
- [ ] GA4 NO ha disparado ningún evento (analytics_storage=denied)
- [ ] Google Maps NO está visible (marketing=denied)
- [ ] `window.dataLayer` contiene el evento consent default con todos denied

**Tras aceptar todas las cookies:**
- [ ] Banner desaparece
- [ ] GA4 empieza a medir (analytics_storage=granted)
- [ ] Google Maps se carga en ContactSection
- [ ] `window.dataLayer` contiene evento `gtm.consent` con signals granted

**Tras rechazar todas las cookies:**
- [ ] Banner desaparece
- [ ] GA4 NO dispara eventos
- [ ] Google Maps permanece bloqueado con un placeholder
- [ ] Cookie `CookieConsent` guardada con valor de rechazo

**Cambiar preferencias:**
- [ ] Enlace en la Política de Cookies lleva al panel de gestión
- [ ] Cambio de preferencias actualiza consent signals en tiempo real

### Prueba técnica en consola

```javascript
// Ver estado actual del consentimiento
window.Cookiebot?.consent

// Ver el dataLayer para signals de consent
window.dataLayer.filter(e => e.event === 'gtm.consent' || e['0'] === 'consent')
```

---

## Comportamiento en entornos

| Entorno | Cookiebot dominio | Banner | GA4 | Google Maps |
|---|---|---|---|---|
| `localhost:3000` | No autorizado por defecto | ❌ No aparece | No dispara | Bloqueado por auto-mode |
| `*.vercel.app` (preview) | Autorizar en dashboard | ✓ Aparece | Dispara (filtrar en GTM) | Bloqueado hasta consent |
| `clinicarafaelgodoy.es` | Autorizado | ✓ Aparece | Solo con consent | Bloqueado hasta consent |

**Para desarrollo local:** Añadir `localhost` en Cookiebot dashboard O desactivar temporalmente `data-blockingmode="auto"` en local (revertir antes de deploy).

---

## Página de Política de Cookies

Ruta: `/politica-cookies`
Estado: ✓ Existe y está correctamente enlazada desde el footer

**Contenido verificado:**
- Cookies necesarias (CookieConsent de Cookiebot) ✓
- Cookies estadísticas (_ga, _ga_*) ✓
- Cookies de marketing (Google Maps — corregido) ✓
- Gestión de preferencias ✓
- Base legal (LSSI + RGPD) ✓
- Información de terceros (Google) ✓

---

## Coherencia legal mínima verificada

| Requisito | Estado |
|---|---|
| Consentimiento previo para cookies no esenciales | ✓ Cookiebot bloquea antes de consent |
| Política accesible antes de consentir | ✓ Enlazada en el banner |
| Posibilidad de retirar consentimiento | ✓ Via panel de Cookiebot |
| Información sobre cada cookie | ✓ En /politica-cookies |
| Base legal documentada | ✓ LSSI + RGPD |
| Responsable del tratamiento | ✓ En /politica-privacidad |
