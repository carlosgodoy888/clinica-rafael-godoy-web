# Checklist de Lanzamiento — Clínica Dental Dr. Rafael Godoy
**Última actualización:** Abril 2026

---

## PRE-LANZAMIENTO: Antes de tocar nada en producción

### Código y build

- [ ] `npm run build` pasa sin errores en local
- [ ] `npm run lint` pasa sin errores bloqueantes
- [ ] Confirmar que `public/images/doctor/rafael-godoy-v02.jpg` existe y se ve correctamente
- [ ] Confirmar que `public/images/hero/og-image.jpg` existe (1200×630)
- [ ] Confirmar que `public/images/clinic/clinica-exterior.jpg` existe
- [ ] Eliminar `.DS_Store` del repo: `find . -name .DS_Store -delete && git rm --cached -r . && git add .`
- [ ] Verificar que `.env.local` NO está commiteado: `git status` no debe mostrarlo
- [ ] Patches de este documento aplicados (ver sección Patches)

### Vercel — Configuración del proyecto

- [ ] Proyecto creado en Vercel importando desde GitHub (rama: main)
- [ ] Root Directory: `./` (sin cambios)
- [ ] Framework Preset: Next.js (auto-detectado)
- [ ] **Node.js version: 20.x** (Settings → General → Node.js Version)
- [ ] Variables de entorno configuradas (Settings → Environment Variables):
  - [ ] `NEXT_PUBLIC_GTM_ID` = `GTM-T89SFQTZ` (All environments)
  - [ ] `NEXT_PUBLIC_COOKIEBOT_ID` = `90daba5c-1344-4c8f-8b95-813d140ce76d` (All environments)
  - [ ] `NEXT_PUBLIC_SITE_URL` = `https://clinicarafaelgodoy.es` (Production only)
  - [ ] `NEXT_PUBLIC_SITE_URL` = _(URL de preview)_ (Preview — dejar vacío o poner URL de Vercel)

### Cookiebot dashboard

- [ ] Dominio `clinicarafaelgodoy.es` añadido como autorizado
- [ ] Dominio `www.clinicarafaelgodoy.es` añadido
- [ ] Dominio `*.vercel.app` añadido (para previews)
- [ ] Escaneo de cookies ejecutado sobre la preview de Vercel
- [ ] Banner de consentimiento visible y funcional en preview

### Google Tag Manager

- [ ] Contenedor GTM-T89SFQTZ accesible
- [ ] Tag de GA4 configurada en GTM (Measurement ID de Google Analytics)
- [ ] Trigger de Consent Updated configurado para activar GA4 cuando analytics_storage = granted
- [ ] Filtro de hostname añadido: excluir `*.vercel.app` de todos los triggers de producción
- [ ] Previsualización GTM activada sobre la preview URL para verificar tags

---

## DEPLOY INICIAL (Preview)

- [ ] Primer deploy automático al conectar GitHub → Vercel
- [ ] Preview URL verificada manualmente:
  - [ ] Home carga correctamente
  - [ ] Header con teléfono funciona (tel: link)
  - [ ] Sección servicios con modal funcional
  - [ ] Sección contacto: horario, mapa (puede estar bloqueado por Cookiebot), teléfono
  - [ ] Footer con links legales
  - [ ] Páginas legales accesibles: /aviso-legal, /politica-privacidad, /politica-cookies
  - [ ] Botón flotante de llamada aparece al scroll
- [ ] Banner de Cookiebot visible en primera visita
- [ ] Aceptar cookies → Google Maps se carga en ContactSection
- [ ] Rechazar cookies → Google Maps permanece bloqueado
- [ ] Revisar consola del navegador: sin errores de hidratación ni 404s
- [ ] Verificar dataLayer en consola: `window.dataLayer` tiene eventos al interactuar

---

## PREPARACIÓN DNS (antes del corte)

- [ ] Anotar los DNS actuales de DonDominio (captura o export)
- [ ] Anotar registros MX (correo): no tocarlos
- [ ] Reducir TTL de registros A a 300 segundos (5 min) — hacer esto 24h antes del corte
- [ ] En Vercel: Settings → Domains → Add `clinicarafaelgodoy.es`
- [ ] En Vercel: Settings → Domains → Add `www.clinicarafaelgodoy.es`
- [ ] Copiar los valores DNS que proporciona Vercel (IP del A record + CNAME para www)

---

## CORTE A PRODUCCIÓN (Cambio DNS)

- [ ] Hora elegida: fuera del horario de mayor tráfico (noche/madrugada o fin de semana)
- [ ] En DonDominio → DNS del dominio:
  - [ ] Registro A `@` → `76.76.21.21` (verificar en Vercel el valor exacto)
  - [ ] Registro CNAME `www` → `cname.vercel-dns.com`
  - [ ] Mantener registros MX sin cambios
- [ ] Guardar cambios
- [ ] Esperar propagación (5-60 minutos con TTL bajo)

---

## VALIDACIÓN POST-CORTE (Día 0)

### Técnica
- [ ] `curl -I https://clinicarafaelgodoy.es` → HTTP 200
- [ ] `curl -I https://www.clinicarafaelgodoy.es` → HTTP 301 a `https://clinicarafaelgodoy.es/`
- [ ] `curl -I http://clinicarafaelgodoy.es` → HTTP 301 a `https://clinicarafaelgodoy.es/`
- [ ] Certificado SSL válido (candado verde en el navegador)
- [ ] Correo `info@clinicarafaelgodoy.es` sigue funcionando (enviar email de prueba)

### Web en producción
- [ ] Visita manual completa: home, todas las secciones, todas las páginas legales
- [ ] Verificar `https://clinicarafaelgodoy.es/sitemap.xml` → responde con XML
- [ ] Verificar `https://clinicarafaelgodoy.es/robots.txt` → responde con texto
- [ ] Verificar `https://clinicarafaelgodoy.es/manifest.json` → responde con JSON
- [ ] Teléfono funciona desde móvil real
- [ ] Google Maps carga (tras aceptar cookies)
- [ ] OG image: probar URL en https://developers.facebook.com/tools/debug/

### Analytics en producción
- [ ] GTM Tag Assistant: verificar tags activos sobre producción
- [ ] GA4 Realtime report: ver visita propia aparece en tiempo real
- [ ] Evento `phone_call` dispara al hacer clic en teléfono
- [ ] Evento `map_click` dispara al hacer clic en mapas
- [ ] Cookiebot: banner aparece en primera visita en producción

### SEO
- [ ] Google Search Console: solicitar indexación de `https://clinicarafaelgodoy.es/`
- [ ] Enviar sitemap en Search Console
- [ ] Inspeccionar URL home con la herramienta de inspección

---

## PRIMER MES POST-LANZAMIENTO

### Semana 1
- [ ] Verificar propiedad en Search Console (registro TXT en DonDominio)
- [ ] Inspeccionar URLs: `/`, `/aviso-legal`, `/politica-privacidad`, `/politica-cookies`
- [ ] Revisar informe de cobertura en Search Console
- [ ] Revisar Page Indexing: sin errores de exclusión inesperados
- [ ] Comprobar Core Web Vitals en Vercel Analytics (si habilitado)

### Semana 2-4
- [ ] Rich Results Test en Google: https://search.google.com/test/rich-results sobre la home
- [ ] Comprobar schema en Search Console → Enhancements
- [ ] Revisar primeras impresiones orgánicas en Search Console → Performance
- [ ] Verificar Google Business Profile apunta a la nueva URL
- [ ] Añadir URL de Google Business Profile en `sameAs` del schema

### Mes 1
- [ ] Revisar informe de rendimiento en GA4 (sesiones, eventos, conversion rate)
- [ ] Revisar Core Web Vitals report en Search Console
- [ ] Verificar que no hay URLs de preview indexadas (buscar en Google: `site:*.vercel.app "rafael godoy"`)
- [ ] Solicitar indexación manual de páginas si la cobertura tarda

---

## ROLLBACK

Si algo falla después del cambio DNS:
1. Volver en DonDominio los registros A y CNAME a los valores originales
2. El TTL bajo (300s) hace que la reversión propague en ~5-10 minutos
3. La web antigua en el FTP de DonDominio sigue activa hasta que se elimine
4. No borrar el hosting antiguo hasta haber validado producción durante al menos 1 semana
