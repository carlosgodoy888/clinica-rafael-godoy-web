Reconstrucción web desde cero con Next.js + TypeScript + Tailwind CSS
Última actualización: Abril 2026
Versión: 1.0


📊 RESUMEN EJECUTIVO
Objetivo: Crear una web profesional de conversión para clínica dental en Córdoba, optimizada para SEO local y captación de pacientes vía llamada telefónica.
Tipo de proyecto: Landing page corporativa + páginas legales
Stack tecnológico: Next.js 14 (App Router) + TypeScript + Tailwind CSS
Deployment: Vercel
Timeline: 8 fases (ver roadmap completo abajo)
Prioridades:

Conversión telefónica
SEO local Córdoba
Performance móvil >90
Accesibilidad WCAG AA


🏥 DATOS DE LA CLÍNICA (SOURCE OF TRUTH)
Información General
yamlNombre Oficial: "Clínica Dental Dr. Rafael Godoy"
Nombre Comercial: "Dr. Rafael Godoy"
Titular: "Dr. Rafael Godoy Pizarro"

Especialidad: "Médico Estomatólogo"
Formación Principal: "Universidad de Montpellier (Francia)"
Años de Experiencia: 35
Fecha Inicio Ejercicio: ~1991

Propuesta de Valor:
  - "Formación europea de élite"
  - "35 años de experiencia en Córdoba"
  - "Tecnología 3D avanzada"
  - "Atención personalizada y cercana"
Datos de Contacto (NAP - Name, Address, Phone)
yamlTeléfono Principal: "+34957292969"
Teléfono Display: "957 29 29 69"
Email Principal: "info@clinicarafaelgodoy.es"
WhatsApp: "PENDIENTE CONFIRMAR SI EXISTE"

Dirección Completa:
  Calle: "Plaza de Andalucía, 3, Sur"
  Ciudad: "Córdoba"
  Provincia: "Córdoba"
  Código Postal: "14009"
  País: "España"
  Región: "Andalucía"

Coordenadas GPS:
  Latitud: 37.87013
  Longitud: -4.78119
  
Google Maps URL: "https://maps.app.goo.gl/kC8tagP8EjpJBEnP7"
Horarios de Atención
yamlLunes:
  Mañana: "9:00 - 14:00"
  Tarde: "17:00 - 20:30"
  
Martes:
  Mañana: "9:00 - 14:00"
  Tarde: "17:00 - 20:30"
  
Miércoles:
  Mañana: "9:00 - 14:00"
  Tarde: "CERRADO"
  
Jueves:
  Mañana: "9:00 - 14:00"
  Tarde: "17:00 - 20:30"
  
Viernes:
  Mañana: "9:00 - 14:00"
  Tarde: "CERRADO"
  
Sábado: "CERRADO"
Domingo: "CERRADO"

Nota: "Horario de invierno. Confirmar si hay horario de verano diferente."
Datos Legales (PENDIENTES DE COMPLETAR)
yamlNIF/CIF: "PENDIENTE - NECESARIO PARA AVISO LEGAL"
Registro Sanitario: "PENDIENTE - NECESARIO PARA AVISO LEGAL"
Razón Social: "PENDIENTE - Confirmar si persona física o jurídica"
Redes Sociales (PENDIENTES DE CONFIRMAR)
yamlFacebook: "PENDIENTE - Confirmar URL exacta"
Instagram: "PENDIENTE - Confirmar handle"
LinkedIn: "PENDIENTE - Confirmar si existe"
Twitter/X: "NO APLICA"
TikTok: "NO APLICA"

💻 STACK TÉCNICO DEFINITIVO
Frontend Framework
yamlFramework: "Next.js 14+"
Router: "App Router (no Pages Router)"
Lenguaje: "TypeScript"
Versión Node: "18.17.0 o superior"

Razones de elección:
  - "Server-side rendering por defecto (SEO)"
  - "Image optimization automática"
  - "File-based routing"
  - "TypeScript nativo"
  - "Integración perfecta con Vercel"
Styling
yamlFramework CSS: "Tailwind CSS"
Versión: "Latest (3.4+)"
Approach: "Utility-first"
Custom Components: "Componentes React reutilizables"

Configuración:
  - "Mobile-first breakpoints"
  - "Custom color palette (teal)"
  - "Custom font family (Inter)"
  - "No CSS-in-JS libraries adicionales"
State Management
yamlGlobal State: "NO NECESARIO en V1"
Local State: "React useState/useReducer"
Forms: "NO HAY FORMULARIOS en V1"
Analytics y Tracking
yamlTag Manager: "Google Tag Manager"
GTM Container ID: "GTM-T89SFQTZ"

Consent Management: "Cookiebot"
Cookiebot ID: "90daba5c-1344-4c8f-8b95-813d140ce76d"

Consent Mode: "Google Consent Mode V2"
Default State: "ALL DENIED (RGPD compliance)"

GA4 Property: "DENTRO DE GTM (no hardcoded)"

Eventos a Trackear:
  - "phone_call - Click en cualquier enlace de teléfono"
  - "map_click - Click en abrir Google Maps"
  - "scroll_depth - 25%, 50%, 75%, 100%"
Deployment
yamlPlatform: "Vercel"
Plan: "Free (suficiente para V1)"
Deploy Trigger: "Push to main branch"
Preview Deploys: "Automático en cada PR"

Custom Domain: "clinicarafaelgodoy.es"
WWW Redirect: "www → non-www (301)"
SSL: "Let's Encrypt (automático via Vercel)"
Hosting Actual (Temporal)
yamlRegistrar Dominio: "DonDominio"
DNS Management: "Se migrará a Vercel DNS"
Hosting Actual: "FTP tradicional (a eliminar)"

🎨 BRANDING Y DISEÑO
Paleta de Colores
yaml# Color principal (Teal sanitario)
Primary: "#007C7C"
Primary Hover: "#006363"

# Colores secundarios (gradaciones teal)
Teal 50: "#E6F7F7"   # Fondos suaves
Teal 100: "#B8E6E6"  # Fondos destacados
Teal 200: "#8AD5D5"
Teal 300: "#5CC4C4"
Teal 400: "#2EB3B3"
Teal 500: "#007C7C"  # Principal
Teal 600: "#006363"  # Hover
Teal 700: "#004A4A"  # Texto sobre claro
Teal 800: "#003131"
Teal 900: "#001818"  # Texto oscuro

# Grises para texto
Gray 900: "#0F1C1C"  # Texto principal
Gray 700: "#2C3E3E"  # Texto secundario
Gray 500: "#64748b"  # Texto deshabilitado

# Fondos
White: "#FFFFFF"
Background: "#F9FAFB"

# Semánticos (si necesarios en futuro)
Success: "#10B981"
Warning: "#F59E0B"
Error: "#EF4444"
Info: "#3B82F6"
Tipografía
yamlFont Family: "Inter"
Font Source: "Google Fonts"
Weights Used:
  - 400 (Regular) - Texto normal
  - 500 (Medium) - Énfasis sutil
  - 600 (SemiBold) - Subtítulos
  - 700 (Bold) - Títulos principales
  - 800 (ExtraBold) - Headlines grandes (opcional)

Font Loading Strategy:
  - "Preload critical weights (400, 600, 700)"
  - "font-display: swap"
  - "Subsetting: latin"

Fallback Stack:
  - "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
Type Scale (Tailwind)
yamlH1 (Hero):
  Mobile: "text-4xl (36px)"
  Tablet: "text-5xl (48px)"
  Desktop: "text-6xl (60px)"
  Weight: "font-bold (700)"
  
H2 (Sections):
  Mobile: "text-3xl (30px)"
  Desktop: "text-4xl (36px)"
  Weight: "font-bold (700)"
  
H3 (Subsections):
  Mobile: "text-2xl (24px)"
  Desktop: "text-3xl (30px)"
  Weight: "font-semibold (600)"
  
Body Large:
  Size: "text-lg (18px)"
  Weight: "font-normal (400)"
  
Body Regular:
  Size: "text-base (16px)"
  Weight: "font-normal (400)"
  
Body Small:
  Size: "text-sm (14px)"
  Weight: "font-normal (400)"
Spacing System
yamlSecciones Verticales:
  Mobile: "py-16 (64px)"
  Desktop: "py-24 (96px)"

Container Max Width: "max-w-7xl (1280px)"

Padding Horizontal Container:
  Mobile: "px-4 (16px)"
  Tablet: "px-6 (24px)"
  Desktop: "px-8 (32px)"

Gap Grid Servicios: "gap-6 md:gap-8"
Gap Grid Testimonios: "gap-6"

Cards Padding: "p-6 md:p-8"
Border Radius
yamlSmall: "rounded-lg (8px)"     # Botones pequeños
Medium: "rounded-xl (12px)"   # Cards
Large: "rounded-2xl (16px)"   # Secciones destacadas
Full: "rounded-full"          # Pills, badges, botón flotante
Shadows
yamlCard Default: "shadow-md"
Card Hover: "shadow-lg"
Card Active: "shadow-xl"

Floating Button: "shadow-2xl"

Header Scrolled: "shadow-sm"
Design Principles
yamlEstilo General: "Limpio, clínico, profesional"
Tono Visual: "Confiable y cálido (no frío corporativo)"
Enfoque: "Mobile-first, responsive"
Animaciones: "Sutiles y funcionales (no excesivas)"
Iconos: "Consistentes (un solo set, preferible Heroicons o Lucide)"
Imágenes: "Profesionales, reales (no stock genérico)"

🗂️ ARQUITECTURA WEB V1
Sitemap
https://clinicarafaelgodoy.es/
│
├── /                           [HOME - Landing completa]
│   ├── #hero                   (Hero section)
│   ├── #credenciales           (Badges)
│   ├── #servicios              (Grid servicios)
│   ├── #por-que-elegirnos      (Features)
│   ├── #doctor                 (Bio + foto)
│   ├── #testimonios            (Carousel/grid)
│   └── #contacto               (Info + mapa)
│
├── /aviso-legal                [Página legal]
├── /politica-privacidad        [Página legal]
└── /politica-cookies           [Página legal]
Dominio y Canonical
yamlDominio Principal: "clinicarafaelgodoy.es"
Dominio WWW: "www.clinicarafaelgodoy.es"

Configuración Canonical:
  - "Canonical: https://clinicarafaelgodoy.es (SIN www)"
  - "Redirect: www.clinicarafaelgodoy.es → clinicarafaelgodoy.es (301)"
  - "Redirect: http:// → https:// (301 automático por Vercel)"

Razón Elección Non-WWW:
  - "Más corto y memorable"
  - "Tendencia moderna"
  - "Más limpio en material impreso"
Páginas Futuras (V2+, NO CREAR AHORA)
yamlPáginas Tratamientos (solo cuando haya contenido de calidad):
  - "/tratamientos/implantes-dentales-cordoba"
  - "/tratamientos/ortodoncia-cordoba"
  - "/tratamientos/estetica-dental-cordoba"
  - "/tratamientos/periodoncia-cordoba"
  
Otras Páginas Potenciales:
  - "/sobre-el-doctor" (si bio en home no es suficiente)
  - "/contacto" (si se añade formulario complejo)
  - "/blog" (solo si hay recursos para mantenerlo)
  - "/casos-exito" (si se consiguen fotos antes/después legales)

CRITERIO: NO crear páginas hasta tener contenido >1500 palabras de calidad

📄 SECCIONES HOME (orden y contenido)
1. Header (Sticky)
yamlPosición: "Fixed top, transparent → white on scroll"
Altura: "h-20 (80px)"

Elementos:
  Left:
    - Logo/Nombre clínica (link a /)
  Right:
    - Teléfono visible (desktop)
    - Icono teléfono (mobile)
    
Mobile:
  - "Simplificado: Logo + Teléfono icon"
  - "Sin menú hamburguesa (todo en scroll)"

Comportamiento Scroll:
  - "Scroll down: ocultar header (translateY -100%)"
  - "Scroll up: mostrar header"
  - "Scroll > 100px: añadir shadow"
2. Hero Section
yamlH1: "Dr. Rafael Godoy - 35 Años Cuidando Sonrisas en Córdoba"

Subheadline:
  "Especialista en Estomatología por la Universidad de Montpellier"
  "Formación Europea · Tecnología Avanzada · Trato Cercano"

Descripción (opcional):
  "Recupera tu sonrisa con confianza. Ofrecemos tratamientos de máxima 
   calidad adaptados a tus necesidades, combinando décadas de experiencia 
   con la tecnología más avanzada del sector dental."

CTAs:
  Primary:
    - Text: "Llamar Ahora: 957 29 29 69"
    - Link: "tel:+34957292969"
    - Style: "bg-teal-600 text-white px-8 py-4 rounded-full"
    
  Secondary (opcional):
    - Text: "Ver Ubicación y Horarios"
    - Link: "#contacto" (smooth scroll)
    - Style: "border-2 border-teal-600 text-teal-600"

Background:
  - "Gradient teal suave"
  - "O imagen hero (si disponible): clínica/doctor profesional"
  
Layout:
  Mobile: "Stack vertical (texto arriba, CTA abajo)"
  Desktop: "Centro, max-width contenido"
3. Credentials Section
yamlLayout: "Grid 2x2 mobile, 4x1 desktop"

Badge 1:
  Icon: "🎓"
  Title: "Universidad de Montpellier"
  
Badge 2:
  Icon: "⏱️"
  Title: "35 Años de Experiencia"
  
Badge 3:
  Icon: "🔬"
  Title: "Tecnología 3D Avanzada"
  
Badge 4:
  Icon: "🇪🇺"
  Title: "Formación Continua Europea"

Estilo:
  - "Fondos teal-50"
  - "Iconos grandes y claros"
  - "Texto conciso"
4. Services Section
yamlSection Title:
  H2: "Tratamientos Dentales de Excelencia"
  Subtitle: "Cada especialidad combina décadas de experiencia clínica 
             con las técnicas más avanzadas de la odontología europea."

Layout: "Grid 1 col mobile, 2 cols tablet, 3 cols desktop"

Servicios a Incluir (6-8):

1. Implantología Avanzada:
   Icon: "implantes.svg"
   Title: "Implantología Avanzada"
   Description: "Recupera dientes perdidos con implantes de titanio 
                 y planificación digital 3D. Soluciones permanentes 
                 que se sienten como dientes naturales."

2. Ortodoncia Integral:
   Icon: "ortodoncia.svg"
   Title: "Ortodoncia Integral"
   Description: "Alinea tu sonrisa con brackets tradicionales o estéticos. 
                 Tratamientos personalizados para cada edad, desde niños 
                 hasta adultos."

3. Estética Dental Premium:
   Icon: "estetica.svg"
   Title: "Estética Dental Premium"
   Description: "Blanqueamiento profesional, carillas de porcelana y diseño 
                 de sonrisa digital. Transformaciones naturales que realzan 
                 tu rostro."

4. Periodoncia Especializada:
   Icon: "periodoncia.svg"
   Title: "Periodoncia Especializada"
   Description: "Tratamiento integral de enfermedades de las encías con 
                 técnicas microquirúrgicas. Detección temprana y soluciones 
                 efectivas."

5. Endodoncia Microscópica:
   Icon: "endodoncia.svg"
   Title: "Endodoncia Microscópica"
   Description: "Salvamos dientes mediante tratamiento de conductos con 
                 microscopio clínico. Precisión máxima, mínima molestia."

6. Prostodoncia Avanzada:
   Icon: "prostodoncia.svg"
   Title: "Prostodoncia Avanzada"
   Description: "Rehabilitaciones completas con prótesis de alta gama 
                 diseñadas digitalmente. Recupera función masticatoria 
                 y estética."

Estilo Cards:
  - "Background white"
  - "Shadow-md, hover:shadow-lg"
  - "Padding p-6"
  - "Border-radius rounded-2xl"
  - "Hover: translateY(-4px)"
5. Why Choose Us Section
yamlSection Title:
  H2: "Por Qué Confiar en el Dr. Rafael Godoy"
  Subtitle: "La elección natural para quienes buscan calidad contrastada, 
             tecnología de vanguardia y un trato verdaderamente personalizado."

Layout: "Grid 1 col mobile, 2x2 desktop"

Features:

Feature 1:
  Icon: "🇪🇺"
  Title: "Formación Europea de Élite"
  Description: "Especialista titulado por la Universidad de Montpellier con 
                formación continua en los mejores centros europeos. Estándares 
                internacionales de calidad en cada tratamiento."

Feature 2:
  Icon: "🏆"
  Title: "35 Años de Experiencia Demostrada"
  Description: "Más de tres décadas en ejercicio exclusivo de la odontología. 
                Miles de casos complejos resueltos con éxito. La confianza que 
                da trabajar con un profesional que ha visto y tratado de todo."

Feature 3:
  Icon: "🔬"
  Title: "Tecnología de Vanguardia"
  Description: "Diagnóstico 3D con tomografía CBCT, cirugía láser, microscopio 
                clínico y sistemas de planificación digital. Inversión continua 
                en tecnología para resultados más precisos y predecibles."

Feature 4:
  Icon: "❤️"
  Title: "Atención Personalizada y Humana"
  Description: "Tiempo dedicado a escucharte y entender tus necesidades. 
                Explicaciones claras de cada procedimiento. Acompañamiento 
                completo durante todo el proceso. Trato humano y cercano 
                que marca la diferencia."
6. Doctor Section
yamlLayout: "2 columnas desktop (imagen left, texto right), stack mobile"

Imagen:
  - "Foto profesional Dr. Godoy (retrato corporativo)"
  - "Aspect ratio: square o 3:4"
  - "Tamaño: 600x800px optimizado"
  - "PLACEHOLDER temporal: emoji 👨‍⚕️ en círculo"

H2: "Dr. Rafael Godoy - Tu Especialista de Confianza"

Bio Intro:
  "Médico Estomatólogo con 35 años de experiencia dedicado exclusivamente 
   al cuidado de la salud dental en Córdoba. Mi formación en la prestigiosa 
   Universidad de Montpellier y mi actualización constante en Europa me 
   permiten ofrecer tratamientos de máxima calidad adaptados a las necesidades 
   específicas de cada paciente."

Subsecciones:
  H3: "Formación Académica"
  - "Médico Estomatólogo, Universidad de Montpellier (Francia)"
  - "Formación continua en centros de referencia europeos"
  - "Especialización multidisciplinar en todas las áreas odontológicas"
  
  H3: "Experiencia Clínica"
  - "35 años en ejercicio profesional en Córdoba"
  - "Miles de tratamientos exitosos realizados"
  - "Referente local en odontología especializada"
  
  H3: "Filosofía de Trabajo"
  - "Cada paciente es único y merece un tratamiento personalizado"
  - "Combinación de experiencia con las técnicas más avanzadas"
  - "Compromiso con la excelencia y la satisfacción del paciente"

Quote del Doctor:
  "Cada paciente es único y merece un tratamiento personalizado. Mi compromiso 
   es combinar la experiencia de 35 años con las técnicas más avanzadas de 
   Europa para ofrecer resultados excepcionales en cada sonrisa que trato. 
   La confianza de mis pacientes es mi mayor logro profesional."
   
   — Dr. Rafael Godoy Pizarro
7. Testimonials Section
yamlSection Title:
  H2: "Lo Que Dicen Nuestros Pacientes"
  Subtitle: "35 años cuidando sonrisas han dejado miles de testimonios 
             de satisfacción. La confianza de generaciones de familias 
             cordobesas es nuestro mejor aval."

Layout: 
  - "Grid 1 col mobile, 2-3 cols desktop"
  - "O carousel si >6 testimonios"

Testimonios a Incluir (usar estos exactos):

Testimonio 1:
  Nombre: "Carmen Ruiz"
  Iniciales: "CR"
  Avatar: "Círculo con iniciales, fondo teal-100"
  Rating: ⭐⭐⭐⭐⭐
  Texto: "Llevo siendo paciente del Dr. Godoy más de 25 años. Su profesionalidad 
          y experiencia son extraordinarias. Me ha realizado varios implantes y 
          una rehabilitación completa. El resultado no podría ser mejor. Es un 
          verdadero especialista en quien confío totalmente."
  Meta: "Paciente desde 2000 · Implantes y rehabilitación"

Testimonio 2:
  Nombre: "Luis García"
  Iniciales: "LG"
  Avatar: "Círculo con iniciales, fondo teal-100"
  Rating: ⭐⭐⭐⭐⭐
  Texto: "Mi ortodoncia con el Dr. Godoy fue perfecta. Su experiencia de 35 años 
          se nota en cada consulta. Explicó todo el proceso detalladamente y los 
          resultados superaron mis expectativas. Un profesional excepcional con 
          un trato humano increíble."
  Meta: "Paciente desde 2018 · Ortodoncia"

Testimonio 3:
  Nombre: "Elena Martínez"
  Iniciales: "EM"
  Avatar: "Círculo con iniciales, fondo teal-100"
  Rating: ⭐⭐⭐⭐⭐
  Texto: "Después de años evitando al dentista por malas experiencias, encontré 
          en el Dr. Godoy un trato tan profesional y cálido que cambió completamente 
          mi percepción. Su formación en Montpellier y experiencia se reflejan en 
          cada tratamiento. Ahora vengo sin ansiedad."
  Meta: "Paciente desde 2019 · Odontología conservadora"

Testimonio 4 (opcional):
  Nombre: "Antonio López"
  Iniciales: "AL"
  Rating: ⭐⭐⭐⭐⭐
  Texto: "Necesitaba una rehabilitación completa y el Dr. Godoy me devolvió la 
          confianza. Su experiencia y la tecnología que utiliza hacen que los 
          tratamientos sean más precisos y cómodos. Totalmente recomendable."
  Meta: "Paciente desde 2015 · Prostodoncia"

Testimonio 5 (opcional):
  Nombre: "María Jiménez"
  Iniciales: "MJ"
  Rating: ⭐⭐⭐⭐⭐
  Texto: "Trato a toda mi familia en la clínica. Tanto a mis hijos como a mí 
          nos atienden con profesionalidad y paciencia. Es difícil encontrar 
          un especialista que combine experiencia con trato tan humano."
  Meta: "Paciente desde 2012 · Familia completa"

Testimonio 6 (opcional):
  Nombre: "Manuel Herrera"
  Iniciales: "MH"
  Rating: ⭐⭐⭐⭐⭐
  Texto: "La cirugía con láser del Dr. Godoy fue increíble. Sin dolor, sin sangrado 
          y recuperación ultrarrápida. Su formación continua en Europa se nota en el 
          uso de tecnologías avanzadas. Un nivel profesional que no he encontrado 
          en ningún otro sitio."
  Meta: "Paciente desde 2021 · Cirugía láser"

Estilo Cards:
  - "Background white"
  - "Shadow-md"
  - "Padding p-6"
  - "Quote visual grande al inicio"
  - "Avatar con iniciales (no fotos reales)"
8. Contact Section
yamlSection Title:
  H2: "Pide Tu Cita en Córdoba"
  Intro: "Estamos en el corazón de Córdoba, con fácil acceso y excelente 
          comunicación. Llámanos o visítanos para cualquier consulta o 
          urgencia dental."

Layout: "2 columnas desktop (info left, mapa right), stack mobile"

Columna Izquierda (Info):
  
  CTA Principal:
    Text: "Llamar Ahora: 957 29 29 69"
    Link: "tel:+34957292969"
    Style: "Botón grande, teal-600, text-xl"
  
  Dirección:
    Icon: "📍"
    Text: "Plaza de Andalucía, 3, Sur\n14009 Córdoba"
  
  Horarios:
    Icon: "⏰"
    H3: "Horario de Atención"
    
    Table:
      | Día       | Mañana        | Tarde         |
      |-----------|---------------|---------------|
      | Lunes     | 9:00 - 14:00  | 17:00 - 20:30 |
      | Martes    | 9:00 - 14:00  | 17:00 - 20:30 |
      | Miércoles | 9:00 - 14:00  | —             |
      | Jueves    | 9:00 - 14:00  | 17:00 - 20:30 |
      | Viernes   | 9:00 - 14:00  | —             |
  
  Email (opcional):
    Icon: "✉️"
    Text: "info@clinicarafaelgodoy.es"
    Link: "mailto:info@clinicarafaelgodoy.es"

Columna Derecha (Mapa):
  
  Google Maps Embed:
    iframe:
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3210.297146946436!2d-4.78119!3d37.87013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6d208ffb3f85ef%3A0x431a65a007c2a476!2sCl%C3%ADnica%20Dental%20Dr.%20Rafael%20Godoy%20Pizarro!5e0!3m2!1ses!2ses!4v1730558920000!5m2!1ses!2ses"
      width: "100%"
      height: "400"
      loading: "lazy"
      referrerpolicy: "no-referrer-when-downgrade"
  
  Link Externo:
    Text: "Abrir en Google Maps"
    Link: "https://maps.app.goo.gl/kC8tagP8EjpJBEnP7"
    Target: "_blank"
    Rel: "noopener noreferrer"
    Style: "Botón outline teal"
9. Footer
yamlLayout: "3-4 columnas desktop, stack mobile"

Columna 1: Branding
  Logo/Nombre: "Dr. Rafael Godoy"
  Tagline: "Clínica Dental en Córdoba"
  Description: "Especialista en Estomatología con 35 años de experiencia. 
                Formación Universidad de Montpellier. Tratamientos de máxima 
                calidad con tecnología avanzada y trato cercano."

Columna 2: Contacto
  H4: "Contacto"
  - "📞 957 29 29 69"
  - "📍 Plaza de Andalucía, 3, Sur\n14009 Córdoba"
  - "✉️ info@clinicarafaelgodoy.es"

Columna 3: Navegación (opcional si home tiene anchors)
  H4: "Información"
  - "Inicio"
  - "Servicios"
  - "El Doctor"
  - "Testimonios"
  - "Contacto"

Columna 4: Legal
  H4: "Legal"
  - "Aviso Legal"
  - "Política de Privacidad"
  - "Política de Cookies"

Footer Bottom:
  "© 2025 Clínica Dental Dr. Rafael Godoy. Todos los derechos reservados."
  "Especialista en Estomatología - Universidad de Montpellier"

Background: "bg-gray-900 text-gray-300"
Links: "hover:text-teal-400"
10. Floating Call Button
yamlPosición: "fixed bottom-8 right-8"
Z-index: "z-50"
Size: "w-16 h-16"
Shape: "rounded-full"
Background: "bg-teal-600 hover:bg-teal-700"
Shadow: "shadow-2xl"
Icon: "Teléfono SVG, color white"
Link: "tel:+34957292969"

Comportamiento:
  - "Oculto inicialmente (opacity-0)"
  - "Visible tras scroll > 300px"
  - "Animación pulse sutil"
  - "Tracking onClick: phone_call event"

Mobile:
  - "bottom-6 right-6 (más accesible al pulgar)"
  - "Safe area aware (iOS notch)"

Accesibilidad:
  - aria-label: "Llamar a la Clínica Dental Dr. Rafael Godoy"

🔍 ESTRATEGIA SEO COMPLETA
Keywords Research
Keywords Primarias (Home)
yamlPrimary 1:
  Keyword: "clínica dental córdoba"
  Volumen Estimado: "1000-3000/mes"
  Dificultad: "Media"
  Intención: "Transaccional local"
  Prioridad: "ALTA"

Primary 2:
  Keyword: "dentista córdoba"
  Volumen Estimado: "2000-5000/mes"
  Dificultad: "Media-Alta"
  Intención: "Transaccional local"
  Prioridad: "ALTA"

Primary 3:
  Keyword: "dr rafael godoy córdoba"
  Volumen Estimado: "50-200/mes"
  Dificultad: "Baja"
  Intención: "Navegacional"
  Prioridad: "MEDIA"
Keywords Secundarias (Home)
yamlSecondary 1: "estomatólogo córdoba"
Secondary 2: "clínica dental plaza andalucía córdoba"
Secondary 3: "dentista cerca de mí" (geo-dependiente)
Secondary 4: "clínica dental con experiencia córdoba"
Secondary 5: "dentista formación europea córdoba"
Long-tail Keywords (Home)
yamlLong-tail 1: "implantes dentales 3d córdoba"
Long-tail 2: "ortodoncia invisible córdoba"
Long-tail 3: "dentista especialista córdoba centro"
Long-tail 4: "clínica dental tecnología avanzada córdoba"
Long-tail 5: "estomatólogo universidad montpellier córdoba"
Long-tail 6: "dentista toda la familia córdoba"
Long-tail 7: "clínica dental horario tarde córdoba"
Keywords Futuras (Páginas Tratamientos - V2+)
yamlImplantes:
  - "implantes dentales córdoba"
  - "implantes dentales córdoba precio"
  - "implantes dentales 3d córdoba"
  - "implantología córdoba"

Ortodoncia:
  - "ortodoncia córdoba"
  - "brackets córdoba"
  - "ortodoncia invisible córdoba"
  - "ortodoncia adultos córdoba"

Estética:
  - "blanqueamiento dental córdoba"
  - "carillas dentales córdoba"
  - "estética dental córdoba"
  - "diseño de sonrisa córdoba"

Periodoncia:
  - "periodoncia córdoba"
  - "limpieza dental profesional córdoba"
  - "tratamiento encías córdoba"

Endodoncia:
  - "endodoncia córdoba"
  - "endodoncia con microscopio córdoba"
  - "tratamiento conductos córdoba"
Metadata SEO por Página
HOME (/)
yamlTitle Tag (57 caracteres):
  Opción A: "Clínica Dental Dr. Rafael Godoy | Córdoba - 35 años"
  Opción B: "Dr. Rafael Godoy - Dentista Córdoba | 35 años experiencia"
  Opción C: "Clínica Dental Córdoba | Dr. Rafael Godoy - Especialista"
  
  RECOMENDACIÓN: Opción A (incluye keyword principal + diferenciador)

Meta Description (158 caracteres):
  "Especialista en Estomatología con 35 años de experiencia en Córdoba. 
   Formación Universidad de Montpellier. Implantes, ortodoncia, estética dental. 
   ☎️ 957 29 29 69"

Keywords Meta (deprecado pero no hace daño):
  "clínica dental córdoba, dentista córdoba, estomatólogo córdoba, 
   implantes dentales, ortodoncia, dr rafael godoy"

Canonical URL:
  "https://clinicarafaelgodoy.es/"

OpenGraph:
  og:type: "website"
  og:site_name: "Clínica Dental Dr. Rafael Godoy"
  og:title: "Clínica Dental Dr. Rafael Godoy | Córdoba - 35 años"
  og:description: "Atención cercana y tratamientos personalizados. 35 años 
                   de experiencia. Plaza de Andalucía, 3, Córdoba. 
                   ☎️ 957 29 29 69"
  og:url: "https://clinicarafaelgodoy.es"
  og:image: "https://clinicarafaelgodoy.es/images/og/og-image.jpg"
  og:image:width: "1200"
  og:image:height: "630"
  og:locale: "es_ES"

Twitter Card:
  twitter:card: "summary_large_image"
  twitter:title: "Clínica Dental Dr. Rafael Godoy | Córdoba"
  twitter:description: "35 años de experiencia en odontología especializada"
  twitter:image: "https://clinicarafaelgodoy.es/images/og/og-image.jpg"
AVISO LEGAL (/aviso-legal)
yamlTitle: "Aviso Legal | Clínica Dental Dr. Rafael Godoy"

Meta Description:
  "Información legal de la Clínica Dental Dr. Rafael Godoy en Córdoba. 
   Datos identificativos y condiciones de uso del sitio web."

H1: "Aviso Legal - Clínica Dental Dr. Rafael Godoy"

Canonical: "https://clinicarafaelgodoy.es/aviso-legal"

Robots: "index, follow"
POLÍTICA DE PRIVACIDAD (/politica-privacidad)
yamlTitle: "Política de Privacidad | Clínica Dental Dr. Rafael Godoy"

Meta Description:
  "Información sobre protección de datos personales y privacidad en la 
   Clínica Dental Dr. Rafael Godoy. Cumplimiento RGPD."

H1: "Política de Privacidad - Clínica Dental Dr. Rafael Godoy"

Canonical: "https://clinicarafaelgodoy.es/politica-privacidad"

Robots: "index, follow"
POLÍTICA DE COOKIES (/politica-cookies)
yamlTitle: "Política de Cookies | Clínica Dental Dr. Rafael Godoy"

Meta Description:
  "Información sobre el uso de cookies en clinicarafaelgodoy.es. 
   Gestión y configuración de cookies."

H1: "Política de Cookies - Clínica Dental Dr. Rafael Godoy"

Canonical: "https://clinicarafaelgodoy.es/politica-cookies"

Robots: "index, follow"
Estructura de Headings (HOME)
yamlH1: (único, 1 vez)
  "Clínica Dental Dr. Rafael Godoy - 35 Años Cuidando Sonrisas en Córdoba"

H2: (6-8 veces, uno por sección)
  - "Tratamientos Dentales de Excelencia"
  - "Por Qué Confiar en el Dr. Rafael Godoy"
  - "Dr. Rafael Godoy - Tu Especialista de Confianza"
  - "Lo Que Dicen Nuestros Pacientes"
  - "Pide Tu Cita en Córdoba"

H3: (subsecciones dentro de cada H2)
  En "Doctor":
    - "Formación Académica"
    - "Experiencia Clínica"
    - "Filosofía de Trabajo"
  
  En "Por Qué Elegirnos":
    - "Formación Europea de Élite"
    - "35 Años de Experiencia Demostrada"
    - "Tecnología de Vanguardia"
    - "Atención Personalizada y Humana"
  
  En "Contacto":
    - "Horario de Atención"
    - "Cómo Llegar"

IMPORTANTE: No saltar niveles (H1 → H3 sin H2 intermedio)
Schema.org Markup
LocalBusiness / Dentist (en layout.tsx global)
json{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://clinicarafaelgodoy.es/#dentist",
  "name": "Clínica Dental Dr. Rafael Godoy",
  "alternateName": "Dr. Rafael Godoy Pizarro",
  "description": "Clínica dental especializada en Córdoba con más de 35 años de experiencia. Especialista en Estomatología por la Universidad de Montpellier.",
  "url": "https://clinicarafaelgodoy.es",
  "logo": {
    "@type": "ImageObject",
    "url": "https://clinicarafaelgodoy.es/images/logo.png",
    "width": 512,
    "height": 512
  },
  "image": [
    "https://clinicarafaelgodoy.es/images/clinica-exterior.jpg",
    "https://clinicarafaelgodoy.es/images/dr-godoy.jpg",
    "https://clinicarafaelgodoy.es/images/og/og-image.jpg"
  ],
  "telephone": "+34957292969",
  "email": "info@clinicarafaelgodoy.es",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Plaza de Andalucía, 3, Sur",
    "addressLocality": "Córdoba",
    "addressRegion": "Andalucía",
    "postalCode": "14009",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "37.87013",
    "longitude": "-4.78119"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday"],
      "opens": "09:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Thursday"],
      "opens": "17:00",
      "closes": "20:30"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Wednesday", "Friday"],
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "€€",
  "areaServed": {
    "@type": "City",
    "name": "Córdoba",
    "@id": "https://www.wikidata.org/wiki/Q5818"
  },
  "founder": {
    "@type": "Person",
    "name": "Dr. Rafael Godoy Pizarro",
    "jobTitle": "Médico Estomatólogo",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Universidad de Montpellier",
      "@id": "https://www.wikidata.org/wiki/Q164025"
    }
  },
  "medicalSpecialty": [
    "Dentistry",
    "Oral Surgery",
    "Orthodontics",
    "Periodontics",
    "Endodontics"
  ],
  "sameAs": [
    "https://www.facebook.com/clinicarafaelgodoy",
    "https://www.instagram.com/drrafaelgodoy"
  ]
}
BreadcrumbList (futuro, para páginas tratamientos)
json{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://clinicarafaelgodoy.es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Tratamientos",
      "item": "https://clinicarafaelgodoy.es/#servicios"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Implantes Dentales",
      "item": "https://clinicarafaelgodoy.es/tratamientos/implantes-dentales-cordoba"
    }
  ]
}
SEO Local - Google Business Profile
yamlCRÍTICO: Optimizar Google Business Profile es TAN IMPORTANTE como la web

Acciones Requeridas:

1. Completar Perfil 100%:
   - Nombre exacto: "Clínica Dental Dr. Rafael Godoy"
   - Categoría principal: "Dentist"
   - Categorías secundarias: "Dental implants periodontist", "Orthodontist", "Cosmetic dentist"
   - Descripción completa (750 caracteres): incluir keywords naturales
   - Atributos: "Accessible entrance", "Accessible parking", etc. (si aplica)

2. Fotos (mínimo 10, óptimo 20+):
   - Exterior clínica (3-5 fotos)
   - Interior: sala espera, consulta (5-8 fotos)
   - Equipo: doctor, personal (2-3 fotos)
   - Equipamiento: tecnología 3D, láser (3-5 fotos)
   - Logo (alta calidad)

3. Horarios:
   - Actualizar exactamente según briefing
   - Marcar horarios especiales (festivos)
   - Incluir "horario de verano" si difiere

4. Productos/Servicios:
   - Añadir cada servicio como "producto"
   - Descripción breve + precio orientativo si posible
   - Fotos específicas por servicio

5. Posts Regulares:
   - Frecuencia: 1-2 por semana
   - Contenido: consejos, novedades clínica, promociones
   - Llamada a acción: "Llama ahora", "Pide cita"

6. Reseñas:
   - Responder TODAS las reseñas (positivas y negativas)
   - Tiempo respuesta: <48h
   - Tono: profesional, empático, agradecido
   - Invitar pacientes satisfechos a dejar reseña (SIN INCENTIVOS)

7. Preguntas y Respuestas:
   - Monitorizar Q&A semanalmente
   - Responder preguntas frecuentes
   - Añadir FAQs proactivamente
SEO Local - Citations (NAP Consistency)
yamlNAP = Name, Address, Phone (EXACTAMENTE IGUALES EN TODOS LADOS)

Formato Estándar a Usar:
  Name: "Clínica Dental Dr. Rafael Godoy"
  Address: "Plaza de Andalucía, 3, Sur, 14009 Córdoba"
  Phone: "+34 957 29 29 69" o "957 29 29 69"

Directorios Prioritarios (España):

1. Google Business Profile ⭐⭐⭐⭐⭐
2. PaginasAmarillas.es ⭐⭐⭐⭐
3. 11870.com ⭐⭐⭐⭐
4. Yelp España ⭐⭐⭐
5. Foursquare ⭐⭐⭐
6. Bing Places ⭐⭐⭐

Directorios Salud (si valen la pena):
7. Doctoralia
8. TopDoctors
9. SaludOnNet
10. Mundofichas

Directorios Locales Córdoba:
- Buscar: "directorio empresas córdoba"
- Cámaras de comercio locales
- Asociaciones dentistas Córdoba

IMPORTANTE: 
- Usar SIEMPRE el mismo formato NAP
- Incluir URL web en todas las citations
- Verificar cada 6 meses que datos siguen correctos
SEO Técnico - Checklist Completa
yamlIndexación:
  ✅ Robots.txt accesible y correcto
  ✅ Sitemap.xml generado dinámicamente
  ✅ Sitemap enviado a Google Search Console
  ✅ URL Inspection para páginas clave
  ✅ No hay páginas bloqueadas por error

Canonical Tags:
  ✅ Presente en TODAS las páginas
  ✅ Apunta a versión sin www
  ✅ Protocolo https://
  ✅ Sin trailing slash (o consistente)

Meta Robots:
  ✅ Home: index, follow
  ✅ Legales: index, follow
  ✅ No hay noindex accidentales

Schema Markup:
  ✅ LocalBusiness en layout global
  ✅ Validado en Google Rich Results Test
  ✅ Sin errores ni warnings críticos

Images:
  ✅ Alt text en TODAS las imágenes
  ✅ Formato AVIF/WebP con fallback
  ✅ Dimensiones explícitas (width/height)
  ✅ Lazy loading (excepto hero)
  ✅ Next.js Image component

Core Web Vitals:
  ✅ LCP < 2.5s (objetivo: <2s)
  ✅ FID/INP < 100ms (objetivo: <50ms)
  ✅ CLS < 0.1 (objetivo: <0.05)

Mobile:
  ✅ Responsive en todos los breakpoints
  ✅ Touch targets >48x48px
  ✅ Texto legible sin zoom (16px mínimo)
  ✅ Sin horizontal scroll

HTTPS:
  ✅ Certificado SSL válido
  ✅ Sin mixed content warnings
  ✅ HSTS header (Vercel automático)

Page Speed:
  ✅ Total page size <2MB
  ✅ Requests <50
  ✅ Time to First Byte <600ms
  ✅ First Contentful Paint <1.8s

Structured Data:
  ✅ JSON-LD (no microdata)
  ✅ Válido según schema.org
  ✅ Sin datos falsos o exagerados

📊 TRACKING Y ANALYTICS
Google Tag Manager Setup
yamlContainer ID: "GTM-T89SFQTZ"

Implementación:
  Location: "src/app/layout.tsx <head>"
  Load Strategy: "afterInteractive (Next.js Script)"
  DataLayer: "Inicializado antes de GTM"

Script GTM (en layout.tsx):
```tsx
  <Script
    id="gtm"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T89SFQTZ');
      `,
    }}
  />
```

GTM Noscript (en layout.tsx <body>):
```tsx
  <noscript>
    <iframe
      src="https://www.googletagmanager.com/ns.html?id=GTM-T89SFQTZ"
      height="0"
      width="0"
      style={{ display: 'none', visibility: 'hidden' }}
    />
  </noscript>
```
Consent Mode V2 (RGPD Compliance)
yamlImplementación: "ANTES de GTM script"

Script Consent Init (en layout.tsx <head>):
```tsx
  <Script
    id="consent-init"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied',
          analytics_storage: 'denied',
          functionality_storage: 'denied',
          personalization_storage: 'denied',
          security_storage: 'granted',
          wait_for_update: 500
        });
      `,
    }}
  />
```

Estados de Consentimiento:
  ad_storage: "denied"              # Publicidad
  ad_user_data: "denied"            # Datos usuario ads
  ad_personalization: "denied"      # Personalización ads
  analytics_storage: "denied"       # Analytics (cambia a granted si acepta)
  functionality_storage: "denied"   # Funcionalidad
  personalization_storage: "denied" # Personalización
  security_storage: "granted"       # SIEMPRE permitido

Actualización tras Consentimiento:
  - "Cookiebot actualiza automáticamente estos valores"
  - "Si acepta estadísticas → analytics_storage: 'granted'"
Cookiebot Integration
yamlCookiebot ID: "90daba5c-1344-4c8f-8b95-813d140ce76d"

Script Cookiebot (en layout.tsx <head>, ANTES de GTM):
```tsx
  <Script
    id="Cookiebot"
    src="https://consent.cookiebot.com/uc.js"
    data-cbid="90daba5c-1344-4c8f-8b95-813d140ce76d"
    strategy="beforeInteractive"
  />
```

Funcionamiento:
  1. Cookiebot carga primero
  2. Muestra banner de consentimiento
  3. Usuario acepta/rechaza cookies
  4. Cookiebot actualiza Consent Mode
  5. GTM respeta consentimiento

Categorías Cookies:
  Necesarias: "Siempre activas (seguridad, funcionalidad crítica)"
  Estadísticas: "GTM + GA4 (solo si acepta)"
  Marketing: "NO USADAS en V1"
  Preferencias: "NO USADAS en V1"

Customización Banner (en Cookiebot dashboard):
  - Traducir a español
  - Colores corporativos (teal)
  - Texto claro y conciso
  - Link a política de cookies
Custom Events Tracking
yamlHelper Functions (src/lib/analytics.ts):
```typescript
  export function trackPhoneClick(location: string) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_call', {
        event_category: 'engagement',
        event_label: location, // 'header', 'hero', 'floating_button'
        value: 1
      });
    }
  }

  export function trackMapClick() {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'map_click', {
        event_category: 'engagement',
        event_label: 'google_maps',
        value: 1
      });
    }
  }

  export function trackScrollDepth(percentage: number) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'scroll_depth', {
        event_category: 'engagement',
        event_label: `${percentage}%`,
        value: percentage
      });
    }
  }
```

Eventos a Implementar:

1. phone_call:
   - Dónde: onClick en TODOS los links tel:
   - Ubicaciones: header, hero, floating button, contact section
   - Parámetro location: identificar desde dónde llamaron

2. map_click:
   - Dónde: onClick en link "Abrir en Google Maps"
   - Parámetro: ninguno adicional

3. scroll_depth:
   - Cuándo: 25%, 50%, 75%, 100% de página
   - Implementar con IntersectionObserver o scroll event

4. section_view (opcional):
   - Cuándo: cada sección entra en viewport
   - Parámetro section_name: 'hero', 'services', 'doctor', etc.
Google Analytics 4 Configuration
yamlImplementación: "DENTRO de GTM (no script directo)"

Setup en GTM:
  1. Tag: Google Analytics: GA4 Configuration
  2. Measurement ID: [CONFIGURAR EN GTM DASHBOARD]
  3. Trigger: All Pages
  4. Consent: Requiere analytics_storage = granted

Configuración Recomendada:
  - Enhanced Measurement: ACTIVAR
    - Page views: ✅
    - Scrolls: ✅
    - Outbound clicks: ✅
    - Site search: ❌ (no hay buscador)
    - Video engagement: ❌ (no hay videos)
    - File downloads: ❌
  
  - User Properties:
    - Ninguna personalizada en V1
  
  - Custom Dimensions (futuras):
    - phone_clicked_from (location del click)
    - section_viewed (secciones vistas)

Objetivos/Conversiones en GA4:
  1. phone_call → Conversión principal
  2. map_click → Conversión secundaria
  3. scroll_depth_100 → Engagement

Informes Clave:
  - Adquisición: ¿De dónde vienen usuarios?
  - Engagement: ¿Qué secciones ven?
  - Conversiones: ¿Cuántos clican teléfono?
  - Páginas: ¿Qué páginas más visitan?

🗄️ ESTRUCTURA DE ARCHIVOS DEL PROYECTO
Árbol Completo
clinica-rafael-godoy-web/
│
├── .git/                                # Git repository
├── .next/                               # Build output (auto-generado, .gitignore)
├── node_modules/                        # Dependencies (auto-generado, .gitignore)
│
├── public/                              # Assets estáticos públicos
│   ├── favicon/                         # ✅ YA DISPONIBLE
│   │   ├── favicon.ico
│   │   ├── favicon.svg
│   │   ├── apple-touch-icon.png
│   │   ├── favicon-96x96.png
│   │   ├── web-app-manifest-192x192.png
│   │   └── web-app-manifest-512x512.png
│   │
│   └── images/                          # 🆕 CREAR Y POBLAR
│       ├── hero/
│       │   └── clinica-cordoba-hero.jpg           # 📸 PENDIENTE (1920x1080)
│       ├── doctor/
│       │   └── dr-rafael-godoy-portrait.jpg       # 📸 PENDIENTE (800x800)
│       ├── clinic/
│       │   ├── clinica-exterior.jpg               # 📸 OPCIONAL (1200x800)
│       │   └── sala-espera.jpg                    # 📸 OPCIONAL (1200x800)
│       ├── services/                              # 🎨 Iconos SVG
│       │   ├── implantes.svg
│       │   ├── ortodoncia.svg
│       │   ├── estetica.svg
│       │   ├── periodoncia.svg
│       │   ├── endodoncia.svg
│       │   └── prostodoncia.svg
│       └── og/
│           └── og-image.jpg                       # 🆕 CREAR (1200x630)
│
├── src/
│   ├── app/                             # Next.js App Router
│   │   ├── layout.tsx                   # 🆕 Root layout (metadata, GTM, fonts)
│   │   ├── page.tsx                     # 🆕 Home page (ensambla sections)
│   │   ├── globals.css                  # 🆕 Global styles (Tailwind + custom)
│   │   │
│   │   ├── robots.ts                    # 🆕 Dynamic robots.txt generator
│   │   ├── sitemap.ts                   # 🆕 Dynamic sitemap.xml generator
│   │   ├── manifest.ts                  # 🆕 PWA manifest generator
│   │   │
│   │   ├── aviso-legal/
│   │   │   └── page.tsx                 # 🆕 Aviso legal
│   │   ├── politica-privacidad/
│   │   │   └── page.tsx                 # 🆕 Política privacidad
│   │   └── politica-cookies/
│   │       └── page.tsx                 # 🆕 Política cookies
│   │
│   ├── components/
│   │   ├── layout/                      # Componentes estructura global
│   │   │   ├── Header.tsx               # 🆕 Header sticky con logo + teléfono
│   │   │   ├── Footer.tsx               # 🆕 Footer con columnas
│   │   │   └── FloatingCallButton.tsx   # 🆕 Botón flotante bottom-right
│   │   │
│   │   ├── sections/                    # Secciones de la home
│   │   │   ├── Hero.tsx                 # 🆕 Hero con H1 + CTAs
│   │   │   ├── Credentials.tsx          # 🆕 Grid 4 badges
│   │   │   ├── Services.tsx             # 🆕 Grid servicios
│   │   │   ├── WhyChooseUs.tsx          # 🆕 Grid 4 features
│   │   │   ├── Doctor.tsx               # 🆕 Bio doctor con foto
│   │   │   ├── Testimonials.tsx         # 🆕 Grid/carousel testimonios
│   │   │   └── Contact.tsx              # 🆕 Info + mapa
│   │   │
│   │   ├── ui/                          # Componentes UI reutilizables
│   │   │   ├── Button.tsx               # 🆕 Botón con variants
│   │   │   ├── Card.tsx                 # 🆕 Card wrapper
│   │   │   ├── Container.tsx            # 🆕 Container max-width
│   │   │   ├── SectionTitle.tsx         # 🆕 Título sección con badge
│   │   │   └── OptimizedImage.tsx       # 🆕 Wrapper Next.js Image
│   │   │
│   │   └── legal/                       # Componentes páginas legales
│   │       ├── LegalPage.tsx            # 🆕 Template común legales
│   │       └── LegalSection.tsx         # 🆕 Sección con título + contenido
│   │
│   ├── config/                          # Configuración centralizada
│   │   ├── site.ts                      # 🆕 Metadata general sitio
│   │   ├── clinic.ts                    # 🆕 Datos clínica (NAP, horarios)
│   │   ├── seo.ts                       # 🆕 SEO defaults
│   │   ├── services.ts                  # 🆕 Array servicios
│   │   └── testimonials.ts              # 🆕 Array testimonios
│   │
│   ├── lib/                             # Utilidades y helpers
│   │   ├── utils.ts                     # 🆕 cn(), formatPhone(), etc.
│   │   ├── schema.ts                    # 🆕 Generadores Schema.org
│   │   └── analytics.ts                 # 🆕 GTM helpers, trackEvent()
│   │
│   ├── types/                           # TypeScript types
│   │   ├── clinic.ts                    # 🆕 ClinicInfo, Address, Hours
│   │   ├── service.ts                   # 🆕 Service type
│   │   └── testimonial.ts               # 🆕 Testimonial type
│   │
│   └── styles/                          # Custom CSS (solo si muy necesario)
│       └── animations.css               # ⚠️ SOLO SI NO SE PUEDE CON TAILWIND
│
├── .env.example                         # 🆕 Template variables entorno
├── .env.local                           # 🆕 Variables reales (GITIGNORED)
│
├── .eslintrc.json                       # ✅ Generado por create-next-app
├── .gitignore                           # ✅ Generado (verificar .env.local)
├── .prettierrc                          # 🆕 Configuración Prettier
│
├── next.config.ts                       # ✏️ Editar (images, redirects)
├── package.json                         # ✅ Generado (scripts, deps)
├── postcss.config.js                    # ✅ Generado (Tailwind)
├── tailwind.config.ts                   # ✏️ Editar (colores, fonts)
├── tsconfig.json                        # ✅ Generado (verificar paths)
│
├── vercel.json                          # 🆕 Redirects www → non-www
│
├── README.md                            # 🆕 Documentación proyecto
│
└── PROJECT-BRIEF.md                     # ✅ ESTE ARCHIVO (referencia)
Leyenda de Símbolos
✅ = Ya existe (generado automáticamente)
🆕 = CREAR desde cero
✏️ = EDITAR/extender archivo existente
📸 = Asset de imagen NECESARIO
🎨 = Asset gráfico/icono NECESARIO
⚠️ = Opcional, solo si estrictamente necesario

📋 ASSETS PENDIENTES Y PLACEHOLDERS
Assets Críticos NECESARIOS
yamlFOTO 1: Dr. Rafael Godoy (Retrato Profesional)
  Tipo: "Fotografía corporativa"
  Formato: "JPG/PNG"
  Dimensiones Óptimas: "800x800px (square) o 600x800px (portrait)"
  Calidad: "Alta resolución, profesional"
  Fondo: "Neutro, preferible gris/blanco"
  Vestimenta: "Bata médica o formal"
  Ubicación Uso: "Doctor Section, Hero (opcional)"
  Placeholder Temporal: "Emoji 👨‍⚕️ en círculo teal"

FOTO 2: Fachada Clínica
  Tipo: "Fotografía exterior"
  Formato: "JPG"
  Dimensiones Óptimas: "1200x800px (landscape)"
  Momento: "Día, buena iluminación"
  Encuadre: "Entrada visible, letrero/rótulo legible"
  Ubicación Uso: "Contact Section, Gallery (futuro)"
  Placeholder Temporal: "Emoji 🏥 + texto dirección"

OG IMAGE: Open Graph Share Image
  Tipo: "Gráfico diseñado"
  Formato: "JPG"
  Dimensiones EXACTAS: "1200x630px"
  Peso: "<300KB"
  Contenido Sugerido:
    - Logo o nombre clínica
    - "Dr. Rafael Godoy"
    - "35 años en Córdoba"
    - Teléfono "957 29 29 69"
    - Fondo teal corporativo
  Ubicación Uso: "Metadata OpenGraph (shares redes sociales)"
  Placeholder Temporal: "Generar simple con texto sobre fondo teal"
Assets Opcionales (Mejoran pero no bloqueantes)
yamlFOTO 3: Sala de Espera
  Dimensiones: "1200x800px"
  Placeholder: "Emoji 🪑 + texto"

FOTO 4: Consulta/Gabinete
  Dimensiones: "1200x800px"
  Placeholder: "Emoji 🦷 + texto"

FOTO 5: Equipamiento (CBCT, Láser, Microscopio)
  Dimensiones: "800x600px cada una"
  Placeholder: "Emoji 🔬 + texto"

ICONOS SERVICIOS: SVG Icons
  Fuente Recomendada: "Heroicons Medical o Lucide React"
  Formato: "SVG (escalable)"
  Estilo: "Outline (líneas), consistente"
  Color: "Teal #007C7C"
  Placeholder: "Emojis temporales (🦷, 😁, ✨, etc.)"
Estrategia Placeholders Temporales
yamlEnfoque:
  - "Usar placeholders FUNCIONALES pero CLARAMENTE TEMPORALES"
  - "No comprometer UX ni credibilidad"
  - "Facilitar reemplazo rápido cuando lleguen assets reales"

Placeholders a Usar:

Doctor Photo:
  - "Círculo grande con emoji 👨‍⚕️"
  - "O círculo con iniciales RGP"
  - "Fondo gradient teal"
  - "NUNCA usar foto stock genérica"

Clínica Photos:
  - "Rectangles con emoji + texto descriptivo"
  - "Emoji 🏥 + 'Plaza de Andalucía, 3, Córdoba'"
  - "Fondo teal-50"

Service Icons:
  - "Emojis médicos relevantes temporales"
  - "O Heroicons: BeakerIcon, HeartIcon, etc."
  - "REEMPLAZAR con SVG custom cuando diseñen"

OG Image Temporal:
  - "Generar simple: Fondo teal + texto blanco"
  - "Nombre clínica + teléfono"
  - "Canvas HTML5 o herramienta online (Canva free)"

🚀 ROADMAP DE EJECUCIÓN (8 FASES)
FASE 0: Decisiones y Datos (ANTES DE PROGRAMAR)
yamlDuración: "1-2 días"
Owner: "Cliente + Carlos (developer)"

Tareas Críticas:

1. Completar Datos Faltantes:
   ✅ Confirmar NIF/CIF
   ✅ Confirmar Registro Sanitario
   ✅ Confirmar Email definitivo
   ✅ Confirmar si hay WhatsApp Business
   ✅ Confirmar URLs redes sociales (si existen)

2. Decisiones de Branding:
   ✅ Confirmar color DEFINITIVO: Teal #007C7C (RECOMENDADO)
   ✅ Confirmar si hay logo diseñado más allá de favicon
   ✅ Aprobar paleta de colores completa

3. Recopilar Assets:
   ✅ Foto profesional Dr. Godoy (mínimo)
   ✅ Foto fachada clínica (mínimo)
   ✅ Fotos adicionales si disponibles
   ✅ Logo en alta resolución (si existe)

4. Contenido Final:
   ✅ Decidir qué versión usar: sitio-completo o simplificada
   ✅ Seleccionar testimonios definitivos (3-6)
   ✅ Seleccionar servicios a destacar (6-8)
   ✅ Aprobar textos hero y secciones principales

5. Tracking:
   ✅ Confirmar GTM ID: GTM-T89SFQTZ
   ✅ Confirmar Cookiebot ID: 90daba5c-1344-4c8f-8b95-813d140ce76d
   ✅ Decidir si GA4 va dentro de GTM o separado (RECOMENDADO: dentro)

Entregables:
  - "Tabla maestra 'Source of Truth' con todos los datos"
  - "Assets organizados en carpeta local"
  - "Decisiones de branding documentadas"
  - "Briefing completo aprobado por cliente"

Criterio de Éxito:
  - "NO HAY PENDIENTES críticos"
  - "Todos los datos necesarios disponibles"
  - "Assets mínimos disponibles o placeholders aprobados"
FASE 1: Setup Proyecto Base
yamlDuración: "4-6 horas"
Owner: "Carlos (developer)"

Tareas:

1. Crear Proyecto Next.js:
```bash
   npx create-next-app@latest clinica-rafael-godoy-web \
     --typescript \
     --tailwind \
     --eslint \
     --app \
     --src-dir \
     --import-alias "@/*"
```

2. Setup Git y GitHub:
```bash
   cd clinica-rafael-godoy-web
   git init
   git add .
   git commit -m "feat: initial project setup"
   # Crear repo en GitHub
   git remote add origin https://github.com/[usuario]/clinica-rafael-godoy-web.git
   git push -u origin main
```

3. Limpiar Starter:
   - Vaciar app/page.tsx (dejar solo estructura)
   - Limpiar globals.css (solo Tailwind directives)
   - Eliminar archivos demo innecesarios

4. Configurar Tailwind:
   - Actualizar tailwind.config.ts con colores teal
   - Añadir font Inter
   - Configurar breakpoints custom si necesario

5. Crear Estructura de Carpetas:
   - src/components/layout/
   - src/components/sections/
   - src/components/ui/
   - src/components/legal/
   - src/config/
   - src/lib/
   - src/types/
   - public/images/ (subdirs)

6. Archivos Config Base:
   - Crear src/config/site.ts
   - Crear src/config/clinic.ts
   - Crear src/config/seo.ts
   - Poblar con datos de FASE 0

7. Utilidades Base:
   - Crear src/lib/utils.ts con cn()
   - Crear src/lib/schema.ts (vacío por ahora)
   - Crear src/lib/analytics.ts (vacío por ahora)

8. Types Base:
   - Crear src/types/clinic.ts
   - Crear src/types/service.ts
   - Crear src/types/testimonial.ts

9. Environment Variables:
   - Crear .env.example
   - Crear .env.local (gitignored)
   - Añadir GTM_ID, COOKIEBOT_ID, SITE_URL

10. Copiar Assets:
    - Copiar favicons a public/favicon/
    - Crear estructura public/images/
    - Añadir placeholders temporales

Entregables:
  - "Proyecto Next.js funcionando: npm run dev sin errores"
  - "Estructura de carpetas completa"
  - "Archivos config con datos reales"
  - "Git repo inicializado y primer commit"
  - "README.md con instrucciones básicas"

Criterio de Éxito:
  - "npm run dev → localhost:3000 carga sin errores"
  - "ESLint pasa sin warnings"
  - "Todos los paths @ funcionan"
FASE 2: Layout Global y Sistema Diseño
yamlDuración: "6-8 horas"
Owner: "Carlos (developer)"

Tareas:

1. Root Layout (app/layout.tsx):
   - Metadata base (title, description, OG)
   - Font Inter preload desde Google Fonts
   - GTM script con Consent Mode
   - Cookiebot script
   - Schema.org Organization/Dentist
   - HTML lang="es"
   - Theme color meta tag

2. Global Styles (app/globals.css):
   - Tailwind directives
   - Custom CSS variables (si muy necesario)
   - Smooth scroll behavior
   - Focus styles accesibilidad

3. Header Component (components/layout/Header.tsx):
   - Logo/nombre clínica (link a /)
   - Teléfono visible desktop, icon mobile
   - Sticky on scroll
   - Shadow on scroll >100px
   - Hide on scroll down, show on scroll up
   - Mobile responsive

4. Footer Component (components/layout/Footer.tsx):
   - 3-4 columnas: branding, contacto, legal
   - Links a páginas legales
   - NAP consistency
   - Copyright con año dinámico
   - Redes sociales (si aplica)

5. Floating Call Button (components/layout/FloatingCallButton.tsx):
   - Fixed bottom-right
   - Circular, teal background
   - Phone icon SVG
   - Link tel:+34957292969
   - Visible solo tras scroll >300px
   - Pulse animation sutil
   - Tracking onClick

6. Button Component (components/ui/Button.tsx):
   - Variants: primary, secondary, outline
   - Sizes: sm, md, lg
   - Props: disabled, loading (futuro)
   - Fully typed con TypeScript

7. Card Component (components/ui/Card.tsx):
   - Shadow default
   - Hover effect opcional
   - Padding consistente
   - Rounded corners

8. Container Component (components/ui/Container.tsx):
   - Max-width 1280px
   - Padding horizontal responsive
   - Centered

9. SectionTitle Component (components/ui/SectionTitle.tsx):
   - Badge opcional (small pill)
   - Title (H2)
   - Subtitle opcional
   - Centered/left alignment prop

10. Testing Responsive:
    - Mobile: 375px, 414px
    - Tablet: 768px, 1024px
    - Desktop: 1280px, 1920px
    - Chrome, Safari, Firefox

Entregables:
  - "Layout completo renderiza correctamente"
  - "Header + Footer + FloatingButton funcionan"
  - "4-5 componentes UI base creados y testados"
  - "Sistema de colores Tailwind funcionando"
  - "Responsive perfecto en todos breakpoints"

Criterio de Éxito:
  - "Layout renderiza sin errores console"
  - "Header sticky funciona correctamente"
  - "Footer con links a páginas (aunque no existan aún)"
  - "Componentes UI reutilizables"
  - "No warnings TypeScript"
FASE 3: Construcción Home (Sección por Sección)
yamlDuración: "12-16 horas (repartir en 2-3 días)"
Owner: "Carlos (developer)"

Orden de Implementación:

3.1 Hero Section (2h):
   - H1 principal
   - Subheadline
   - Descripción breve
   - 2 CTAs (primary + secondary)
   - Background gradient teal
   - Responsive mobile/desktop
   - Animación fade-in sutil

3.2 Credentials Section (1.5h):
   - Grid 2x2 mobile, 4x1 desktop
   - 4 badges con emoji + texto
   - Hover effects
   - Data desde config/clinic.ts

3.3 Services Section (3h):
   - SectionTitle component
   - Grid 1/2/3 cols responsive
   - 6-8 service cards
   - Iconos SVG o emoji placeholders
   - Data desde config/services.ts
   - Hover shadow effect

3.4 Why Choose Us Section (2.5h):
   - SectionTitle
   - Grid 2x2 features
   - Icons grandes
   - Headlines + descriptions
   - Data hardcoded o config

3.5 Doctor Section (2.5h):
   - Layout 2 cols (imagen + texto)
   - Foto doctor (placeholder temporal)
   - Biografía en prosa
   - Subsecciones H3
   - Quote destacado
   - Reverse mobile (texto arriba)

3.6 Testimonials Section (2.5h):
   - SectionTitle
   - Grid 1/2/3 cols o carousel
   - Testimonial cards
   - Avatar con iniciales
   - 5 estrellas visual
   - Data desde config/testimonials.ts
   - Carousel controls (si aplica)

3.7 Contact Section (3h):
   - SectionTitle
   - Layout 2 cols (info + mapa)
   - Info: dirección, teléfono, horarios
   - CTA llamar grande
   - Google Maps iframe embed
   - Link abrir Maps externo
   - Lazy load del iframe
   - Tracking map click

3.8 Ensamblaje Home (1h):
   - Importar todas las sections en app/page.tsx
   - Orden correcto
   - Spacing entre secciones
   - Testing scroll smooth
   - Testing anchors (#servicios, #contacto)

Testing Continuo:
   - Cada sección funciona standalone
   - Responsive cada sección
   - No CLS (layout shifts)
   - Imágenes optimizadas
   - CTAs trackean eventos

Entregables:
  - "Home completa funcional"
  - "Todas las 7 secciones implementadas"
  - "Contenido real integrado (no lorem ipsum)"
  - "Responsive perfecto mobile/desktop"
  - "Performance Lighthouse >85 (mejorará en FASE 4)"

Criterio de Éxito:
  - "Home renderiza completa sin errores"
  - "Todo el contenido visible y legible"
  - "CTAs todos funcionales (tel: links)"
  - "Scroll smooth entre secciones"
  - "No warnings console"
  - "Lighthouse Accessibility >90"
FASE 4: Páginas Legales + SEO Técnico
yamlDuración: "8-10 horas"
Owner: "Carlos (developer)"

Tareas:

4.1 Componentes Legales Comunes:
   - LegalPage.tsx (template)
   - LegalSection.tsx (sección con título)
   - Estilos consistentes
   - Link "Volver a inicio"

4.2 Aviso Legal (app/aviso-legal/page.tsx):
   - Contenido base del archivo HTML viejo
   - Completar NIF, registro sanitario
   - Metadata específica
   - Canonical URL
   - Structured H2/H3

4.3 Política Privacidad (app/politica-privacidad/page.tsx):
   - Contenido base adaptado
   - Completar responsable tratamiento
   - Finalidades y bases jurídicas
   - Derechos ARCO
   - Metadata específica

4.4 Política Cookies (app/politica-cookies/page.tsx):
   - Contenido adaptado
   - Listar cookies exactas (GTM, Cookiebot)
   - Explicar Consent Mode
   - Cómo gestionar cookies
   - Metadata específica

4.5 Metadata Completa en layout.tsx:
   - Metadata base global
   - OpenGraph defaults
   - Twitter Card defaults
   - Icons (favicon, apple-touch-icon)
   - Manifest link

4.6 Metadata Home (app/page.tsx):
   - Title override
   - Description optimizada
   - Keywords (opcional)
   - Canonical URL
   - OG específico home

4.7 Robots.txt Dinámico (app/robots.ts):
   - Allow: /
   - Disallow: /api/, /_next/
   - Sitemap URL

4.8 Sitemap Dinámico (app/sitemap.ts):
   - Home priority 1.0
   - Legales priority 0.3
   - Frequencies
   - lastModified dinámico

4.9 Manifest PWA (app/manifest.ts):
   - Name, short_name
   - Description
   - Icons (favicons)
   - Theme color #007C7C
   - Display standalone
   - Start URL /

4.10 Schema.org Markup:
    - LocalBusiness/Dentist en layout
    - Person (Dr. Godoy)
    - Organization
    - OpeningHours exactos
    - Address + geo
    - Validar en Google Rich Results Test

4.11 Verificaciones SEO:
    - Alt texts todas las imágenes
    - Headings jerárquicos
    - Canonical tags
    - ARIA labels
    - Lang attribute
    - Skip to main content

Entregables:
  - "3 páginas legales completas y navegables"
  - "Metadata SEO completa en todas las páginas"
  - "Schema.org implementado y validado"
  - "robots.txt y sitemap.xml accesibles"
  - "Manifest PWA funcionando"
  - "Performance mejorada (optimizaciones aplicadas)"

Criterio de Éxito:
  - "Lighthouse SEO score: 100"
  - "Google Rich Results Test: VÁLIDO"
  - "/robots.txt carga correctamente"
  - "/sitemap.xml carga correctamente"
  - "Alt texts en 100% imágenes"
  - "No errores HTML Validator"
FASE 5: Analytics y Consentimiento
yamlDuración: "4-6 horas"
Owner: "Carlos (developer)"

Tareas:

5.1 GTM Implementation:
   - Script en layout.tsx <head>
   - Noscript en <body>
   - dataLayer initialization
   - ID correcto: GTM-T89SFQTZ

5.2 Consent Mode V2:
   - Script consent init ANTES de GTM
   - Estado default: todo denied
   - Wait_for_update: 500ms
   - Security_storage: granted

5.3 Cookiebot Integration:
   - Script Cookiebot ANTES de GTM
   - ID correcto: 90daba5c...
   - Strategy beforeInteractive
   - Testing banner aparece

5.4 Analytics Helper (lib/analytics.ts):
   - trackPhoneClick(location)
   - trackMapClick()
   - trackScrollDepth(percentage)
   - Type-safe window.gtag

5.5 Integrar Tracking en Components:
   - Header phone → onClick track
   - Floating button → onClick track
   - Hero CTA → onClick track
   - Contact CTA → onClick track
   - Map link → onClick track

5.6 Testing Tracking:
   - GTM Tag Assistant extension
   - Consent funciona (rechazar → no GTM)
   - Consent funciona (aceptar → GTM carga)
   - Eventos llegan a dataLayer
   - Cookiebot banner customizable

5.7 Documentar IDs en README:
   - GTM: GTM-T89SFQTZ
   - Cookiebot: 90daba5c...
   - Lista de eventos trackeados

Entregables:
  - "GTM implementado correctamente"
  - "Consent Mode V2 funcionando"
  - "Cookiebot bloqueando/desbloqueando scripts"
  - "Eventos custom trackeando"
  - "Validación completa con Tag Assistant"

Criterio de Éxito:
  - "Banner Cookiebot aparece en primera visita"
  - "Rechazar todo → GTM NO carga"
  - "Aceptar estadísticas → GTM carga"
  - "phone_call event se dispara al click"
  - "map_click event se dispara"
  - "No hay cookies sin consentimiento"
FASE 6: QA y Testing Completo
yamlDuración: "8-12 horas (repartir en 2 días)"
Owner: "Carlos (developer) + Cliente (validación contenido)"

Testing Funcional:

6.1 Navegación:
   - Logo → home
   - Nav links → scroll sections
   - Footer links → páginas legales
   - Back buttons → home
   - Floating button → visible tras scroll

6.2 Links y CTAs:
   - Todos tel: links funcionan mobile
   - Formato: tel:+34957292969
   - Emails mailto: funcionan
   - Maps iframe carga
   - Link Maps externo abre nueva pestaña
   - External links: rel="noopener noreferrer"

6.3 Interacciones:
   - Hover states botones/cards
   - Focus states (keyboard navigation)
   - Smooth scroll funciona
   - No console errors
   - No warnings React

Testing Responsive:

6.4 Mobile:
   - iPhone SE (375x667)
   - iPhone 12/13 (390x844)
   - iPhone Pro Max (428x926)
   - Android small (360x640)
   - Android medium (412x915)

6.5 Tablet:
   - iPad Mini (768x1024)
   - iPad Air (820x1180)
   - iPad Pro (1024x1366)

6.6 Desktop:
   - Laptop (1366x768)
   - Desktop HD (1920x1080)
   - Desktop large (2560x1440)

6.7 Checkpoints Responsive:
   - Header responsive (sin overflow)
   - Secciones stack/grid correctamente
   - Imágenes escalan bien
   - Texto legible sin zoom
   - CTAs accesibles con pulgar mobile
   - No scroll horizontal
   - Footer columnas ajustan

Testing Navegadores:

6.8 Desktop:
   - Chrome (latest)
   - Firefox (latest)
   - Safari macOS (latest)
   - Edge (latest)

6.9 Mobile:
   - Safari iOS
   - Chrome Android

Testing SEO:

6.10 On-page:
    - Title tags únicos
    - Meta descriptions <160 chars
    - H1 único por página
    - Jerarquía headings
    - Canonical tags
    - Alt text 100% imágenes

6.11 Technical:
    - /robots.txt accesible
    - /sitemap.xml accesible
    - /manifest.json accesible
    - Favicon visible
    - OG image accesible
    - Schema.org validado

6.12 Herramientas:
    - Lighthouse SEO >95
    - Rich Results Test VALID
    - W3C Validator sin errores críticos
    - WAVE Accessibility sin errors

Testing Performance:

6.13 Lighthouse Mobile:
    - Performance: >90
    - Accessibility: >95
    - Best Practices: 100
    - SEO: 100

6.14 Lighthouse Desktop:
    - Performance: >95
    - Accessibility: >95
    - Best Practices: 100
    - SEO: 100

6.15 Core Web Vitals:
    - LCP <2.5s
    - FID/INP <100ms
    - CLS <0.1

6.16 Network:
    - Total page size <2MB
    - Requests <50
    - TTFB <600ms
    - FCP <1.8s

Testing Accesibilidad:

6.17 Keyboard:
    - Tab navigation completa
    - Orden lógico
    - Focus visible
    - Skip to main content
    - Modals trap focus (si aplica)

6.18 Screen Readers:
    - ARIA labels botones iconos
    - Landmarks correctos
    - Alt texts descriptivos
    - Form labels (futuro)

6.19 Contraste:
    - Texto >4.5:1
    - Botones >4.5:1
    - WCAG AA compliance

6.20 Herramientas:
    - axe DevTools
    - WAVE Checker
    - Lighthouse Accessibility
    - Test manual NVDA/VoiceOver

Testing Analytics:

6.21 GTM:
    - Container carga
    - Tags disparan
    - Consent Mode respeta

6.22 Custom Events:
    - phone_call dispara
    - map_click dispara
    - Parámetros correctos

6.23 Cookiebot:
    - Banner aparece
    - Rechazar → no cookies
    - Aceptar → GTM carga
    - Config persiste

Testing Contenido:

6.24 Textos:
    - Sin errores ortográficos
    - Sin typos
    - Tono consistente
    - Teléfonos formateados
    - Direcciones correctas
    - Horarios actualizados

6.25 Legal:
    - NIF en aviso legal
    - Datos privacidad completos
    - Cookies listadas
    - Fechas actualización

6.26 Imágenes:
    - Calidad profesional (o placeholders claros)
    - Alt texts útiles
    - No hay placeholders rotos

Pre-Launch Checklist:

6.27 Must-Have:
    - Datos reales (no placeholders texto)
    - Teléfono correcto
    - Email correcto
    - Dirección correcta
    - Horarios actualizados
    - NIF en legal
    - GTM ID correcto
    - Cookiebot ID correcto
    - Canonicals a dominio final
    - No URLs /test o /borrador

Entregables:
  - "Reporte QA completo con screenshots"
  - "Lista bugs encontrados (si hay) y resueltos"
  - "Scores Lighthouse documentados"
  - "Validación accesibilidad completa"
  - "Confirmación analytics funciona"

Criterio de Éxito:
  - "Lighthouse all scores >90"
  - "CERO errores críticos"
  - "Responsive perfecto all devices"
  - "Analytics trackeando correctamente"
  - "Cliente aprueba contenido y funcionalidad"
FASE 7: Deploy Preview en Vercel
yamlDuración: "4-6 horas (con iteraciones feedback)"
Owner: "Carlos (developer)"

Tareas:

7.1 Setup Vercel:
   - Crear cuenta Vercel (si no existe)
   - Conectar con GitHub
   - Importar repo clinica-rafael-godoy-web
   - Configurar project:
     - Framework: Next.js (auto)
     - Build: next build (default)
     - Output: .next (default)
   - Añadir env variables si necesarias

7.2 Primera Deployment:
   - Deploy automático
   - URL preview: clinica-rafael-godoy-web.vercel.app
   - Verificar build success
   - Primera visita a preview URL

7.3 Validación Preview:
   - Home carga ok
   - Legales accesibles
   - Imágenes se ven
   - Fonts cargan
   - JS funciona
   - GTM carga (con consent)
   - No 404s

7.4 Testing Mobile Real:
   - Visitar URL desde iPhone/Android
   - Tel: abre dialer
   - Maps funciona
   - Scroll smooth
   - Floating button visible

7.5 Performance en Preview:
   - PageSpeed Insights con URL preview
   - Verificar Core Web Vitals
   - Vercel Analytics (si activado)

7.6 Revisión Cliente:
   - Email con link preview
   - Checklist para cliente:
     - Teléfono correcto ✓
     - Dirección correcta ✓
     - Horarios ok ✓
     - Textos sin errores ✓
     - Fotos apropiadas ✓
     - Datos legales correctos ✓
   - Plazo feedback: 2-3 días

7.7 Iteraciones (si necesarias):
   - Recibir feedback
   - Priorizar cambios
   - Implementar en branch
   - Push → nuevo preview deploy
   - Compartir nueva URL
   - Aprobar cambios
   - Merge a main

7.8 Preparar Dominio Custom:
   - Verificar acceso DonDominio DNS
   - Documentar config DNS necesaria:
 A     @    76.76.21.21
 CNAME www  cname.vercel-dns.com
   - NO APLICAR AÚN (esperar FASE 8)

7.9 Backup Web Antigua:
   - Descargar todos archivos FTP actual
   - Screenshots todas las páginas
   - Exportar config DNS actual
   - Guardar en /backup-web-antigua/ con fecha

Entregables:
  - "Web desplegada en Vercel preview"
  - "URL preview compartida con cliente"
  - "Feedback recogido y procesado"
  - "Backup web antigua completo"
  - "Config DNS documentada (sin aplicar)"

Criterio de Éxito:
  - "Preview URL accesible públicamente"
  - "Funciona igual que local"
  - "Performance production-like"
  - "Cliente revisa y aprueba (o da feedback)"
  - "Backup vieja web guardado seguro"
FASE 8: Migración Final y Launch
yamlDuración: "4-8 horas (+ tiempo propagación DNS)"
Owner: "Carlos (developer) + Cliente (aprobación final)"

Pre-Flight Checklist:

8.1 Verificaciones Finales:
   - Cliente aprueba versión preview ✓
   - Cambios finales implementados ✓
   - Testing final en preview pasado ✓
   - Backup web antigua completado ✓
   - Acceso DonDominio confirmado ✓

8.2 Confirmar URLs:
   - Canonical URLs usan dominio real
   - OG URLs usan dominio real
   - Schema.org usa dominio real
   - Sitemap usa dominio real
   - Manifest URLs usan dominio real

Configuración Dominio:

8.3 Añadir Dominio en Vercel:
   - Settings → Domains
   - Add: clinicarafaelgodoy.es
   - Add: www.clinicarafaelgodoy.es
   - Vercel muestra config DNS

8.4 Configurar Redirects:
   - Crear vercel.json en root:
```json
     {
       "redirects": [
         {
           "source": "https://www.clinicarafaelgodoy.es/:path*",
           "destination": "https://clinicarafaelgodoy.es/:path*",
           "permanent": true
         }
       ]
     }
```
   - Commit y push

Actualización DNS:

8.5 Login DonDominio:
   - Acceder panel control
   - Localizar dominio
   - Ir a gestión DNS
   - ANOTAR config actual antes de cambiar

8.6 Aplicar Nueva Config DNS:
Tipo    Nombre    Valor                    TTL
A       @         76.76.21.21              3600
CNAME   www       cname.vercel-dns.com     3600
   - Eliminar A records antiguos
   - Eliminar CNAME antiguo www
   - MANTENER MX records (email)
   - MANTENER TXT records (SPF, DKIM)
   - Guardar cambios
   - Anotar hora exacta

Verificación SSL:

8.7 Esperar Propagación:
   - Típico: 15-30 minutos
   - Máximo: 48 horas

8.8 Verificar en Vercel:
   - Domains → "Valid Configuration"
   - SSL → "Valid" o "Issuing"
   - Esperar si "Issuing"

8.9 Testing DNS:
`````bash
   nslookup clinicarafaelgodoy.es
   curl -I https://clinicarafaelgodoy.es
   curl -I https://www.clinicarafaelgodoy.es
Verificación Post-Launch:
8.10 Testing Inmediato:
- https://clinicarafaelgodoy.es carga ✓
- www redirige a non-www ✓
- SSL candado visible ✓
- Certificado válido ✓
- Todas páginas cargan ✓
- Imágenes cargan ✓
- GTM funciona ✓
8.11 Testing Multi-Ubicación:
- Desktop local (cache limpio)
- Mobile 4G
- Modo incógnito
- Diferentes navegadores
- Desde otra red
8.12 Google:
- Buscar "site:clinicarafaelgodoy.es"
- Verificar no aparece vercel.app
Google Search Console:
8.13 Añadir Propiedad:
- search.google.com/search-console
- Añadir: https://clinicarafaelgodoy.es
- Verificar con HTML meta tag
- Añadir también www y marcar preferida
8.14 Enviar Sitemap:
- Submit: /sitemap.xml
- Verificar sin errores
8.15 Solicitar Indexación:
- URL Inspection: home
- Request indexing
- Hacer para legales también
Monitorización:
8.16 Configurar Alertas:
- Vercel deployment notifications
- UptimeRobot (free, cada 5 min)
- Search Console alerts
8.17 Métricas 48h:
- Uptime: 100%
- Response time: <500ms
- Error rate: 0%
- Core Web Vitals estables
8.18 Analytics:
- GA4 recibe tráfico
- Eventos se disparan
- No bounce anormal
Comunicación:
8.19 Anunciar Lanzamiento:
- Email base datos pacientes (si existe)
- Post redes sociales (si existen)
- Actualizar Google Business Profile URL
- Actualizar directorios listados
8.20 Material Apoyo:
- Tarjetas visita actualizadas (si aplica)
- Material impreso con URL
- Firma email actualizada
Handoff Cliente:
8.21 Documentación Entregar:
markdown    ## Accesos
    - Vercel: [email] + password
    - GitHub: [usuario]
    - GTM: GTM-T89SFQTZ
    - Cookiebot: 90daba5c...
    
    ## Mantenimiento
    - Cambiar contenido: /src/config/
    - Deploy: push a main → automático
    - Soporte: [contacto Carlos]
    
    ## Monitorización
    - Uptime: [link UptimeRobot]
    - Performance: Vercel Analytics
    - SEO: Google Search Console
8.22 Training (si aplica):
- Sesión onboarding cliente
- Cómo hacer cambios simples
- Cómo revisar métricas
- Contacto soporte técnico
Post-Launch Checklist:
8.23 Día 1:
- Dominio resuelve everywhere ✓
- No 404s ✓
- SSL válido ✓
- Analytics recibe datos ✓
8.24 Día 3:
- Search Console sin errors ✓
- Métricas: tráfico normal ✓
- Vercel: no deployment issues ✓
- Cliente satisfecho ✓
8.25 Día 7:
- Google indexa (verificar) ✓
- Core Web Vitals estables ✓
- No problemas reportados ✓
- Feedback usuarios positivo ✓
Entregables:

"Web en producción dominio real"
"SSL funcionando"
"Redirects configurados"
"Search Console setup"
"Monitorización activa"
"Documentación entregada cliente"
"Cliente formado (si aplica)"
"Proyecto cerrado exitosamente"

Criterio de Éxito:

"https://clinicarafaelgodoy.es LIVE"
"Performance production >90"
"Analytics trackeando"
"Cliente 100% satisfecho"
"Proyecto entregado y cerrado"


---

## 📌 NOTAS FINALES IMPORTANTES

### Decisiones Técnicas Críticas
````yaml
1. NO usar base de datos en V1:
   - Todo contenido estático
   - Config en archivos TypeScript
   - Escalable a CMS en futuro si necesario

2. NO usar CMS en V1:
   - Overhead innecesario para 4 páginas
   - Cambios en config files son suficientes
   - Considerar en V2 si cliente necesita autonomía total

3. NO crear formularios en V1:
   - Conversión vía teléfono es prioridad
   - Formularios añaden fricción
   - Si V2 necesita citas online, implementar entonces

4. SÍ usar TypeScript estricto:
   - Type safety evita bugs
   - Mejor DX (autocomplete)
   - Código más mantenible

5. SÍ usar Tailwind utility-first:
   - Rapidez desarrollo
   - Consistencia diseño
   - Performance (CSS optimizado)

6. SÍ optimizar imágenes agresivamente:
   - AVIF > WebP > JPEG
   - Lazy load (excepto hero)
   - Next.js Image component siempre

7. SÍ implementar tracking desde día 1:
   - Métricas críticas para negocio
   - Consent Mode RGPD compliance
   - No añadir después, hacerlo bien ahora
````

### Mantenimiento Post-Launch
````yaml
Cambios Frecuentes (clientes pueden hacer):
  - Teléfono: editar src/config/clinic.ts
  - Horarios: editar src/config/clinic.ts
  - Servicios: editar src/config/services.ts
  - Testimonios: editar src/config/testimonials.ts
  - Push a GitHub → deploy automático

Cambios Ocasionales (developer):
  - Añadir nueva sección home
  - Crear página tratamiento
  - Modificar diseño/colores
  - Integrar nuevas herramientas

Mantenimiento Técnico:
  - Actualizar dependencias: mensual
  - Revisar Lighthouse: mensual
  - Verificar links rotos: trimestral
  - Renovar SSL: automático Vercel
  - Backup código: automático GitHub

SEO Ongoing:
  - Google Business Profile: actualizar semanal
  - Responder reseñas: diario
  - Posts GBP: 1-2 por semana
  - Monitorizar Search Console: semanal
  - Revisar keywords ranking: mensual
````

### Escalabilidad Futura (V2, V3...)
````yaml
V2 Posibles Features:
  - Páginas individuales tratamientos (/tratamientos/*)
  - Blog con artículos SEO
  - Sistema citas online
  - Área pacientes (login)
  - Galería antes/después
  - Videos tratamientos
  - FAQs página separada
  - Formulario contacto
  - Live chat / chatbot

V3 Posibles Features:
  - CMS headless (Sanity, Contentful)
  - Multi-idioma (inglés, francés)
  - E-commerce (productos dentales)
  - Telemedicina (consultas online)
  - App móvil (React Native)

Preparación Escalabilidad:
  - Código modular y reutilizable ✓
  - Config centralizada ✓
  - TypeScript types extensibles ✓
  - Componentes atómicos ✓
  - Git workflow establecido ✓
````

---

## ✅ CHECKLIST FINAL PRE-START
````yaml
Antes de empezar FASE 1, verificar que tienes:

Datos:
  ✓ Teléfono confirmado
  ✓ Dirección completa confirmada
  ✓ Email confirmado
  ✓ Horarios confirmados
  ✓ NIF/CIF (o asumido pendiente)
  ✓ Registro sanitario (o asumido pendiente)

Branding:
  ✓ Color principal decidido (teal #007C7C)
  ✓ Fuentes decididas (Inter)
  ✓ Tono de voz definido

Contenido:
  ✓ Textos hero aprobados
  ✓ Servicios listados (6-8)
  ✓ Testimonios seleccionados (3-6)
  ✓ Bio doctor escrita

Assets:
  ✓ Favicons disponibles
  ✓ Foto doctor (real o placeholder aprobado)
  ✓ Foto clínica (real o placeholder aprobado)
  ✓ Iconos servicios (SVG o placeholders)

Tracking:
  ✓ GTM ID: GTM-T89SFQTZ
  ✓ Cookiebot ID: 90daba5c...
  ✓ Acceso GTM dashboard (o pendiente)

Herramientas:
  ✓ Node.js 18+ instalado
  ✓ VS Code (o editor preferido)
  ✓ Git instalado
  ✓ GitHub account
  ✓ Vercel account (crear si no existe)
  ✓ Acceso DonDominio DNS

Conocimiento:
  ✓ Entiendes Next.js App Router
  ✓ Entiendes TypeScript básico
  ✓ Entiendes Tailwind CSS
  ✓ Tienes este briefing a mano como referencia
````

---

**FIN DEL BRIEFING COMPLETO**

**Versión:** 1.0  
**Fecha:** Abril 2026  
**Autor:** Carlos (Developer) con Claude  
**Estado:** LISTO PARA FASE 1

---

**PRÓXIMO PASO:**  
Abrir terminal → Navegar a carpeta proyecto → Ejecutar comandos FASE 1
````bash
# 1. Crear proyecto
npx create-next-app@latest clinica-rafael-godoy-web --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Navegar a proyecto
cd clinica-rafael-godoy-web

# 3. Abrir en VS Code
code .

# 4. Iniciar desarrollo
npm run dev

# 5. Abrir navegador
# http://localhost:3000
````

**¡VAMOS! 🚀**
</details>