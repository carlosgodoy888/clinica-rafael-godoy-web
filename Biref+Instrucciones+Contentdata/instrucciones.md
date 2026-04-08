# INSTRUCCIONES PARA CLAUDE CODE

## OBJETIVO
Reconstruir la web de la Clínica Dental Dr. Rafael Godoy desde cero usando Next.js + TypeScript + Tailwind CSS.

## ARCHIVOS DE CONTEXTO DISPONIBLES
1. `PROJECT-BRIEF.md` - Briefing completo del proyecto
2. `content-data.json` - Datos estructurados (clínica, servicios, testimonios)

## FASE ACTUAL: FASE 1 - Setup Proyecto Base

### TAREAS A EJECUTAR (en orden):

1. **Crear proyecto Next.js:**
````bash
   npx create-next-app@latest clinica-rafael-godoy-web \
     --typescript \
     --tailwind \
     --eslint \
     --app \
     --src-dir \
     --import-alias "@/*"
````

2. **Navegar al proyecto:**
````bash
   cd clinica-rafael-godoy-web
````

3. **Configurar Tailwind con colores teal:**
   - Editar `tailwind.config.ts`
   - Añadir paleta teal (#007C7C)
   - Configurar font Inter

4. **Crear estructura de carpetas:**
src/components/layout/
src/components/sections/
src/components/ui/
src/components/legal/
src/config/
src/lib/
src/types/
public/images/hero/
public/images/doctor/
public/images/clinic/
public/images/services/
public/images/og/

5. **Crear archivos de configuración:**
   - `src/config/site.ts` - Metadata general
   - `src/config/clinic.ts` - Datos clínica (leer de content-data.json)
   - `src/config/services.ts` - Array servicios
   - `src/config/testimonials.ts` - Array testimonios

6. **Crear archivos de utilidades:**
   - `src/lib/utils.ts` - Helper cn() para Tailwind
   - `src/lib/schema.ts` - Generadores Schema.org
   - `src/lib/analytics.ts` - Helpers GTM

7. **Crear types TypeScript:**
   - `src/types/clinic.ts`
   - `src/types/service.ts`
   - `src/types/testimonial.ts`

8. **Setup environment variables:**
   - Crear `.env.example`
   - Crear `.env.local`

9. **Inicializar Git:**
````bash
   git init
   git add .
   git commit -m "feat: initial project setup"
````

10. **Testing:**
````bash
    npm run dev
````
    - Verificar que carga en localhost:3000
    - Sin errores console

## CRITERIOS DE ÉXITO FASE 1
- ✓ Proyecto Next.js creado
- ✓ Estructura de carpetas completa
- ✓ Archivos config con datos de content-data.json
- ✓ Tailwind configurado con colores teal
- ✓ npm run dev funciona sin errores
- ✓ Git inicializado

## NOTAS IMPORTANTES
- **NO crear componentes todavía** (eso es FASE 2)
- **NO implementar páginas todavía** (eso es FASE 3+)
- Solo setup y estructura base
- Usar datos de `content-data.json` para poblar configs

## DESPUÉS DE FASE 1
Cuando termines FASE 1, pregúntame si quiero continuar con FASE 2 (Layout + Componentes UI).
