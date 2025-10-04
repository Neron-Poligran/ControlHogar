# ControlHogar 🚀 Hogares Inteligentes a tu Medida

**Nota académica:** Este proyecto fue desarrollado de forma colaborativa como trabajo del programa de Frontend del Politécnico Grancolombiano. Es un proyecto académico y de demostración; no está pensado ni probado para entornos de producción.

## Descripcion General
ControlHogar es una aplicacion web construida con React y Tailwind CSS que presenta el portafolio digital de servicios domoticos de la marca. Esta orientada a hogares y profesionales que buscan integrar soluciones inteligentes de seguridad, confort y eficiencia energetica. El sitio combina una landing animada, un catalogo interactivo y un panel administrativo protegido para gestionar la informacion mostrada.


## Objetivo
Mostrar y administrar soluciones inteligentes de seguridad, confort y eficiencia energética para hogares y profesionales, facilitando la presentación comercial y la gestión de contenidos.


## Caracteristicas Clave
- Landing page inmersiva con carrusel hero animado y llamadas a la accion.
- Catalogo de servicios con tarjetas dinamicas, estados de promocion y disponibilidad en tiempo real.
- Vista de detalle con beneficios destacados, lista de caracteristicas e imagenes optimizadas para despliegues estaticos.
- Flujo de autenticacion basica (credenciales demo) y rutas protegidas mediante `localStorage`.
- Panel administrativo responsive con CRUD en memoria, formularios multi-step y alertas de estado.
- Configuracion lista para GitHub Pages, incluyendo manejo de `PUBLIC_URL`, fallback 404 y assets en `public/img`.

## Tecnologias Utilizadas ⚙️
- React 18 con Create React App (`react-scripts`).
- Framer Motion para animaciones declarativas.
- Tailwind CSS y tailwind-merge para estilos utilitarios; PostCSS + Autoprefixer en la cadena de build.
- Lucide React para iconografia ligera.

## Instalacion 📦
1. Clona el repositorio y entra en la carpeta del proyecto:
   ```bash
   git clone https://github.com/neron-poligran/ControlHogar.git
   cd ControlHogar
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
   La aplicacion arranca en `http://localhost:3000` y detecta el `HOST` definido en `.env`.

## Uso
- Explora la landing para conocer ventajas  y acceso directo hacia el catalogo de servicio.
- Accede a `/servicios` para listar el portafolio; el buscador y botones de filtro no son funcionales pero estan listos para integrarse con logica adicional.
- Selecciona cualquier servicio para ver `/servicio/:id` con detalle, disponibilidad y boton para solicitar cotizacion, unque este ultimo no esta funcionando esta listo para integrarse con la logica de redirigirlo a un telefono whatsapp u otra tecnologia.
- Ingresa a `/login` con las credenciales demo que estan en la parte inferior de la vista  `admin / admin123` para acceder al panel protegido.
- En `/admin` administra servicios existentes, crea nuevos registros, edita o elimina elementos y visualiza tabs para funcionalidades futuras.

## Estructura del Proyecto
```text
ControlHogar/
|-- public/
|   |-- img/              # Recursos de marca y mockups de servicios
|   `-- index.html        # Shell principal de la SPA
|-- src/
|   |-- components/       # Navbar, Hero, tarjetas y utilidades compartidas
|   |-- pages/            # Vistas SPA (Home, Servicios, Detalle, Login, Admin)
|   |-- data/services.js  # Fuente estatica de servicios (mock)
|   |-- App.js            # Configuracion de rutas y layout base
|   `-- styles.css        # Entrada Tailwind
`-- .github/workflows/pages.yml  # Pipeline de despliegue a GitHub Pages
```

## Configuracion Avanzada
- `.env`: incluye `HOST=0.0.0.0`, `WDS_SOCKET_PORT=0` y `WDS_SOCKET_PATH=/ws` para facilitar desarrollo en redes locales y manejar WebSocket en entornos restringidos.
- `PUBLIC_URL`: definido por el entorno (ej. GitHub Pages) para que assets y rutas funcionen con subdirectorios (`BrowserRouter basename`).
- Las imagenes de servicios pueden alojarse en CDN; el helper `resolveImg` admite rutas absolutas o relativas a `PUBLIC_URL`.


## Despliegue 🚀
- Ejecuta un build local con:
  ```bash
  npm run build
  ```
  El resultado queda en `build/` listo para servir como contenido estatico.
- El workflow `.github/workflows/pages.yml` construye la app en Node 20, genera fallback `404.html` y publica automaticamente en GitHub Pages cuando hay push a `main`.
- La URL publica configurada es `https://neron-poligran.github.io/ControlHogar/`.

## Autores y Creditos
- [Neron Poligran](https://github.com/neron-poligran) - Frontend y contenido del portafolio.

## Licencia
Este proyecto se publica bajo la licencia MIT. Consulta el archivo `LICENSE` en la raíz del repositorio para los términos completos.

> Nota: es un trabajo académico y colaborativo para el programa de Frontend del Politécnico Grancolombiano; no está pensado ni probado para entornos de producción.

## Capturas o Demo
- Demo en vivo: https://neron-poligran.github.io/ControlHogar/
- Recursos gráficos disponibles en `public/img/`; se agrega algunas capturas de la pagina en esta carpeta con su respectivo enlace.

Nota sobre las imágenes
- La mayoría de las imágenes y mockups incluidos en `public/img/` fueron generados con herramientas de inteligencia artificial y se usan únicamente con fines académicos y de demostración en este proyecto.

<!-- HOME: -->
![Captura: Home](./public/img/HOME.png)
