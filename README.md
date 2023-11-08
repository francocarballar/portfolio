[<img src="https://raw.githubusercontent.com/francocarballar/argentina-monetary-quotes-api/main/public/img/spanish_flag.png" alt="Español" width="20"> Español](./README.md) | [<img src="https://raw.githubusercontent.com/francocarballar/argentina-monetary-quotes-api/main/public/img/english_flag.png" alt="English" width="20"> English](./README_EN.md)

# 🚀 Franco Carballar - Portafolio personal

Desarrollador web fullstack con experiencia en JavaScript, Node, TypeScript, React, Next, TailwindCSS, Express, SQL, CSS, HTML, Astro y Firebase. Portfolio de proyectos de programación frontend y backend.

<p align="center">
  <img align="center" alt="Portafolio personal de Franco Carballar" src="https://res.cloudinary.com/francocarballar/image/upload/f_auto,q_auto,w_1600,h_836,q_100/l_text:Ubuntu_92_bold:Franco%2520Carballar,co_rgb:ffe4e6,c_fit,w_1200,h_400/fl_layer_apply,g_south_west,x_100,y_340/l_text:Ubuntu_52_bold:Franco%2520Carballar%2520%25C2%25B7%2520https%253A%252F%252Ffrancocarballar.com%252F,co_rgb:ffe4e680,c_fit,w_1400/fl_layer_apply,g_south_west,x_100,y_100/v1/portfolio/og-images/hnhewy5pa0ayultagpyv"/>
</p>

## 🔥 DEMO

[![Ver sitio web](https://res.cloudinary.com/francocarballar/image/upload/f_auto,q_auto/v1/portfolio/icons/yp7optcrm5t9qyns7hmn)](https://francocarballar.com/)

## 🔥 Funciones

- ✅ Rendimiento de Lighthouse 100/100
- ✅ Compatible con SEO con URL canónicas y datos OpenGraph
- ✅ Soporte para mapa del sitio (sitemap)
- ✅ Soporte para RSS Feed
- ✅ Soporte para Markdown & MDX
- ✅ Listo para PWA
- ✅ Totalmente adaptado a dispositivos de diversas resoluciones (responsive)
- ✅ Robots.txt y Humanos.txt
- ✅ Compatibilidad con TypeScript
- ✅ Resaltado de sintaxis
- ✅ Integración con eslint y prettier

## ⚓ Puntuación de Lighthouse - PWA lista

<p align="center">
  <img align="center" alt="Puntaje de Lighthouse" src="https://s3.amazonaws.com/gndx.dev/EV0-astro-theme-lighthouse.png"/>
</p>

## 🚀 Primeros pasos

1. Clone este repositorio en su máquina local usando Git.

   ```bash
   git clone https://github.com/francocarballar/portfolio.git nombre-de-tu-proyecto
   ```

2. Muevesé a la carpeta del proyecto

   ```bash
   cd ./nombre-de-tu-proyecto
   ```

3. Instale las dependencias del proyecto

   ```bash
   npm install
   ```

4. Inicie el servidor local de desarrollo

   ```bash
   npm run dev
   ```

5. En su navegador web, ingrese a la URL que te aparece en la terminal

<br />
<br />

| Comando              | Acción                                                                                                          |
| :------------------- | :-------------------------------------------------------------------------------------------------------------- |
| `npm install`        | Instala las dependencias                                                                                        |
| `npm run dev`        | Inicia el servidor local de desarrollo en `localhost:4321`                                                      |
| `npm run build`      | Construye tu sitio de producción en `./dist/`                                                                   |
| `npm run preview`    | Obtén una vista previa de tu compilación localmente, antes de implementarla en el servidor                      |
| `npm run format`     | Formatea el código utilizando prettier                                                                          |
| `npm run lint`       | Revisa y corrige errores en la sintaxis del código                                                              |
| `npm run production` | Ejecuta todos los comandos necesario antes de enviar los cambios a producción                                   |
| `npm run version`    | se utiliza para generar un nuevo archivo CHANGELOG.md con un registro de los cambios realizados en el proyecto. |

Edite los archivos HTML en el directorio `src/pages` para agregar sus proyectos, experiencias e información personal.

## 📝 Configuración del sitio web

Para configurar tu portafolio, edita el archivo `src/config/config.json`. Este archivo contiene las siguientes opciones:

```json
{
  "site": {
    "title": "Franco Carballar",
    "base_url": "https://francocarballar.com/",
    "base_path": "/",
    "favicon": "/favicons/favicon.ico",
    "apple_icon": "/favicons/apple-touch-icon.png",
    "logo": "https://res.cloudinary.com/francocarballar/image/upload/f_auto,q_auto/v1/portfolio/logo/tatrlwlxcjkny2tokizv",
    "lang": "es",
    "description": "Desarrollador web fullstack con experiencia en JavaScript, Node, TypeScript, React, Next, TailwindCSS, Express, SQL, CSS, HTML, Astro y Firebase. Portfolio de proyectos de programación frontend y backend.",
    "pageSize": 6
  },
  "features": {
    "youtube": false,
    "dark_mode": true
  },
  "metadata": {
    "meta_author": "Franco Carballar @francocarballar",
    "meta_description": "Desarrollador web fullstack con experiencia en JavaScript, Node, TypeScript, React, Next, TailwindCSS, Express, SQL, CSS, HTML, Astro y Firebase. Portfolio de proyectos de programación frontend y backend."
  },
  "author": {
    "name": "Franco Carballar @francocarballar",
    "avatar": "https://res.cloudinary.com/francocarballar/image/upload/f_auto,q_auto/v1/portfolio/profile-picture/francocarballar",
    "bio": "Desarrollador web fullstack con experiencia en JavaScript, Node, TypeScript, React, Next, TailwindCSS, Express, SQL, CSS, HTML, Astro y Firebase. Portfolio de proyectos de programación frontend y backend."
  }
}
```

## 📂 Estructura del proyecto

```bash
/
├── .vscode/
│   └── extensions.json
│   └── launch.json
│   └── settings.json
├── public/
│   └── assets/
│   └── favicons/
│   └── pdf/
│   └── favicon.svg
│   └── humans.txt
├── scripts/
│   └── production.js
├── src/
│   ├── components/
│   │    └── AboutMe.astro
│   │    └── CTA.astro
│   │    └── Header.astro
│   │    └── MenuItems.astro
│   │    └── SocialMedia.astro
│   ├── config/
│   │    └── config.json
│   │    └── menu.json
│   │    └── social.json
│   ├── content/
│   │    └── about.md
│   ├── icons/
│   │    └── CloseIcon.astro
│   │    └── HaburgerIcon.astro
│   │    └── Icon.astro
│   │    └── IconPaths.ts
│   │    └── Logo.astro
│   ├── layouts/
│   │    └── Base.astro
│   ├── pages/
│   │    └── index.astro
│   ├── styles/
│   │    └── global.css
│   ├── types/
│   │    └── about.d.ts
│   │    └── menu.d.ts
│   ├── utils/
│   │    └── createOgImage.ts
│   │    └── manifest.ts
│   │    └── slug.ts
│   └── env.d.ts
└── .eslintignore
└── .eslintrc.cjs
└── .gitignore
└── .prettierignore
└── astro.config.mjs
└── CHANGELOG.md
└── LICENSE
└── package.json
└── pnpm-lock.yaml
└── prettier.config.cjs
└── README_EN.md
└── README.md
└── tailwind.config.cjs
└── tsconfig.json
```

[![Contruido con Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

## 🚀 Registro de cambios

Para obtener más detalles sobre los cambios realizados en el proyecto, consulte el archivo [`CHANGELOG.md`](https://github.com/francocarballar/portfolio/blob/main/CHANGELOG.md)

## 💻 Contribuyendo

Las contribuciones a este proyecto son bienvenidas. Si encuentra un error o tiene una sugerencia de mejora, abra un **issue** o envíe un **pull request**.

## 📃 Licencia

Este proyecto está bajo la licencia LGPL. Consulte el archivo `LICENCIA` para obtener más detalles.

## 📝 Reconocimiento

Quiero agradecer a [Oscar Barajas Tavares](https://github.com/gndx) por construir el proyecto [ev0-astro-theme](https://github.com/gndx/ev0-astro-theme). Su proyecto fue una gran fuente de inspiración y me ayudó a aprender muchas cosas de Astro.
