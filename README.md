# Fundación IKNAHL — Sitio Oficial

## Descripción

Sitio web institucional de Fundación IKNAHL. Construido con HTML5, CSS3 y
JavaScript Vanilla. Sin frameworks ni dependencias externas. Derivado de la
misma arquitectura probada en el sitio de Puentes de Esperanza, con
identidad visual, paleta de colores y contenido propios de IKNAHL..

---

## ⚠️ Pendiente antes de publicar

1. ~~Logo oficial~~ ✅ Integrado. `assets/logo/iknahl-logo.jpg` contiene el
   emblema circular oficial (recortado de la imagen entregada) y se usa en
   el header, la tarjeta del hero y las páginas secundarias.
   `assets/logo/iknahl-logo-full.jpg` contiene el logotipo completo
   (emblema + "IKNAHL" + "Apoyo a Migrantes y Refugiados") y se usa en la
   sección "Quiénes somos" y como imagen de vista previa para redes
   sociales (`og:image`). El favicon (`assets/icons/favicon.svg`) se dejó
   como un ícono abstracto simplificado en los mismos tonos de marca,
   porque el emblema real tiene demasiado detalle para verse bien a 16–32px;
   si prefieres un favicon basado en el logo real, puedo generar una
   versión simplificada.
2. **WhatsApp y redes sociales.** `js/config.js` tiene `whatsapp` y
   `redes` vacíos a propósito. El sitio ya maneja esto con elegancia
   (oculta el botón flotante y muestra "Próximamente" donde corresponde),
   pero conviene completarlos en cuanto existan.
3. **Dominio propio.** Las URLs (canonical, sitemap.xml, robots.txt,
   manifest, JSON-LD) usan `https://fundacioniknahl.github.io/` como
   marcador de posición. Ajusta a tu URL real de GitHub Pages o dominio
   propio cuando lo tengas (ver `sitemap.xml`, `robots.txt`, y las
   etiquetas `<link rel="canonical">` / `og:url` en cada página).

---

## 🗂️ Estructura del proyecto

```
/
├── index.html              # Página principal (all-in-one)
├── centro-de-ayuda.html    # FAQ + guías + procedimientos
├── biblioteca.html         # Recursos descargables
├── transparencia.html      # Informes + rendición de cuentas
├── css/
│   ├── main.css            # Variables (paleta IKNAHL) + reset + base
│   ├── components.css      # Componentes reutilizables
│   └── sections.css        # Secciones específicas
├── js/
│   ├── config.js           # ← ÚNICO ARCHIVO A EDITAR
│   └── main.js             # Lógica + renderizado dinámico
├── assets/
│   ├── icons/favicon.svg
│   └── logo/
│       ├── iknahl-logo.jpg        # emblema circular (header, hero, subpáginas)
│       └── iknahl-logo-full.jpg   # logotipo completo (sección "Quiénes somos", og:image)
├── documents/
├── robots.txt
├── sitemap.xml
├── manifest.json
└── README.md
```

---

## ✏️ Cómo actualizar contenido

**Solo necesitas editar `js/config.js`**. Ahí puedes modificar:

- Información institucional (misión, visión, valores)
- Datos de contacto (email, WhatsApp, horario, redes sociales)
- Contadores de impacto
- Servicios
- Equipo (mientras esté vacío, el sitio muestra tarjetas genéricas
  institucionales automáticamente)
- FAQ / Centro de ayuda
- Noticias
- Testimonios
- Transparencia

No es necesario tocar el HTML para estos cambios.

---

## 🎨 Identidad visual

Paleta institucional (definida en `css/main.css`):

| Variable | Color | Uso |
|---|---|---|
| `--color-primary` | `#123047` (azul marino) | Marca principal, botones, header |
| `--color-primary-dark` | `#0A1F2F` | Fondos oscuros, footer |
| `--color-primary-soft` | `#1F4A63` | Superficies secundarias |
| `--color-secondary` | `#5F8FA3` (azul petróleo) | Acentos, énfasis |
| `--color-accent` | `#A9C7D3` (azul claro) | Hover, detalles suaves |
| `--color-ice` | `#EAF3F6` | Fondos muy claros |
| `--color-cream` / `--color-cream-light` | `#F6F2E8` / `#FBF8F0` | Calidez humana, secciones alternas |

Tipografía: Playfair Display (títulos) + Inter (texto) + JetBrains Mono
(detalles), igual que en el sitio base.

---

## 🚀 Publicar el sitio

### GitHub Pages
1. Sube todos los archivos a un repositorio público en GitHub.
2. Ve a Settings → Pages → Source: main branch / root.
3. Tu sitio estará en `https://tu-usuario.github.io/nombre-repo`.
4. Actualiza `sitemap.xml`, `robots.txt` y las etiquetas `canonical` /
   `og:url` con esa URL real.

### Netlify / Cloudflare Pages
1. Arrastra la carpeta del proyecto al panel de Netlify o Cloudflare Pages,
   o conéctalo directamente a tu repositorio de GitHub.
2. No requiere build step: es HTML/CSS/JS estático.

---

## ✅ Accesibilidad y rendimiento

- Contraste AA, foco visible, navegación por teclado, `aria-label` en
  botones de ícono, `aria-expanded` en menú móvil y FAQ, `alt` en
  imágenes, soporte `prefers-reduced-motion`.
- Sin librerías pesadas, CSS/JS separados y ligeros, fuentes con
  `preconnect` implícito vía `@import` de Google Fonts.
