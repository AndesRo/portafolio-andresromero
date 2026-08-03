<div align="center">

# ⚡ Portafolio · Andrés Romero

**Portafolio web moderno-futurista con i18n, proyectos dinámicos vía Supabase, foto de perfil con efecto de escaneo, y hora/temperatura en vivo.**

![React](https://img.shields.io/badge/React-18-0A0E17?style=for-the-badge&logo=react&logoColor=00E5FF)
![Vite](https://img.shields.io/badge/Vite-6-0A0E17?style=for-the-badge&logo=vite&logoColor=7C5CFC)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-0A0E17?style=for-the-badge&logo=tailwindcss&logoColor=00E5FF)
![Supabase](https://img.shields.io/badge/Supabase-Backend-0A0E17?style=for-the-badge&logo=supabase&logoColor=3ECF8E)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-0A0E17?style=for-the-badge&logo=framer&logoColor=7C5CFC)

</div>

---

## 🧭 Vista general

Portafolio de una sola página con estética **HUD futurista**. Incluye:

- 🌐 **i18n ES/EN** — toggle de idioma persistente (localStorage), se autodetecta el idioma del navegador la primera vez
- 🗂️ **Proyectos dinámicos** — se cargan desde **Supabase**; si no configuras credenciales, cae automáticamente a datos locales (nunca se ve vacío)
- 🕐 **Hora local en vivo** — reloj en tiempo real con la zona horaria de tu ubicación
- 🌡️ **Temperatura en vivo** — vía Open-Meteo (API pública, sin API key)
- 📡 **Efecto de escaneo** — animación tipo scanner sobre la foto de perfil
- 🖼️ **Foto de perfil**, 🧑‍💻 **Sobre mí**, 📍 **Ubicación** (mapa embebido), ✉️ **Contacto/redes**, 📄 **CV descargable** (ES/EN)

## 🚀 Cómo correrlo en Visual Studio Code

```bash
# 1. Descomprime el .zip y abre la carpeta en VS Code
npm install
npm run dev       # http://localhost:5173
npm run build      # build de producción
```

## 🌐 Configurar Supabase (proyectos dinámicos)

1. Crea un proyecto en [supabase.com](https://supabase.com)
2. Ve a **SQL Editor** y pega el contenido de `supabase/migration.sql` — esto crea la tabla `projects`, activa RLS con lectura pública, e inserta tus 4 proyectos como datos semilla
3. Copia `.env.example` a `.env` y completa:
   ```
   VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
   VITE_SUPABASE_ANON_KEY=tu-anon-key
   ```
   (ambos valores están en **Project Settings → API** de tu dashboard)
4. Reinicia `npm run dev`

**Sin `.env` configurado, el sitio sigue funcionando** mostrando los proyectos de `src/data/profile.js` — así nunca te quedas con la sección vacía mientras configuras Supabase. Para agregar/editar proyectos después, hazlo directamente en la tabla `projects` desde el dashboard de Supabase (Table Editor) — no necesitas tocar código ni redesplegar.

## 📲 Vista previa en WhatsApp / redes sociales

El `index.html` ya incluye meta tags de **Open Graph** y **Twitter Card**, más una imagen de portada (`public/og-image.png`, 1200×630) para que al pegar el link del portafolio en WhatsApp, LinkedIn, X o Slack se muestre una tarjeta con imagen, título y descripción.

**Después de desplegar, tienes que:**

1. Reemplazar `https://tu-portafolio.vercel.app/` por tu dominio real en `index.html` — hay 6 apariciones (`canonical`, `og:url`, `og:image`, `twitter:url`, `twitter:image`, y el JSON-LD)
2. Opcional: reemplazar `public/og-image.png` por tu propio diseño o foto (mantén 1200×630px para que no se recorte en WhatsApp/Facebook)

> ⚠️ WhatsApp y redes sociales no ejecutan JavaScript al generar la vista previa — leen el HTML tal cual. Por eso el título/descripción están escritos directamente en `index.html` además de en `profile.js`. Si cambias tu nombre, rol o tagline en `profile.js`, actualiza también esos mismos textos en `index.html`.

Para probar cómo se ve tu tarjeta antes de compartirla, usa el [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) o el [Twitter Card Validator](https://cards-dev.twitter.com/validator) una vez desplegado (WhatsApp reutiliza el caché de Facebook).

## ✏️ Cómo personalizar el resto del contenido

**Todo vive en:**

```
src/data/profile.js     # datos personales, bio, redes, CV — campos { es, en } son bilingües
src/i18n/translations.js  # textos fijos del UI (botones, títulos de sección, etc.)
```

### Reemplaza estos archivos placeholder:

| Archivo | Qué hacer |
|---|---|
| `public/profile.svg` | Tu foto real (`profile.jpg`, 500×500px recomendado) — actualiza `photo` en `profile.js` |
| `public/cv-es.pdf` / `public/cv-en.pdf` | Tu CV real en cada idioma |

Busca los comentarios `// TODO` en `profile.js` para completar email, teléfono, LinkedIn y WhatsApp reales.

## 📦 Estructura del proyecto

```
src/
├── components/
│   ├── AmbientBackground.jsx   # Fondo con grid + glow
│   ├── Navbar.jsx              # Navegación + toggle idioma + CV
│   ├── Hero.jsx                # Presentación + foto con scan + reloj/temp
│   ├── Projects.jsx            # Proyectos (Supabase con fallback local)
│   ├── About.jsx                # Datos personales + skills
│   ├── LocationPanel.jsx       # Mapa + coordenadas + reloj/temp
│   ├── Contact.jsx             # Contacto + redes
│   └── Footer.jsx
├── data/
│   └── profile.js              # ← Contenido bilingüe del portafolio
├── i18n/
│   ├── translations.js         # ← Textos fijos del UI (ES/EN)
│   └── LanguageContext.jsx     # Contexto + hook useLanguage()
├── hooks/
│   ├── useProjects.js          # Fetch a Supabase + fallback local
│   └── useSystemStatus.js      # Reloj en vivo + clima (Open-Meteo)
├── lib/
│   └── supabaseClient.js       # Cliente Supabase (null si no hay .env)
├── App.jsx
├── main.jsx
└── index.css

supabase/
└── migration.sql               # Crea tabla `projects` + RLS + datos semilla
```

## 🌐 Despliegue

Listo para **Vercel**:

```bash
npm i -g vercel
vercel
```

Recuerda agregar `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY` como variables de entorno en el dashboard de Vercel (Project Settings → Environment Variables) para que los proyectos dinámicos funcionen también en producción.

---

<div align="center">

Hecho con ❤️ en Santiago, Chile

</div>
