# ordinal. — museo de historias de datos

Sitio web de Ordinal Studio. Un museo de historias de datos: data storytelling y data art,
inspirado en el ginkgo biloba y en cómo el otoño no agrega color a las hojas — **revela el
dorado que siempre estuvo abajo del verde**.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Home — el museo (scrollytelling, dos alas, ginkgo) |
| `coleccion.html` | La colección — data storytelling & data art |

## Paleta

Otoño `#F0B613` (primario) · Otoño profundo `#C98C06` (énfasis) · Verano `#6E7A42`
(secundario) · Corteza `#22271C` (tinta) · Papel `#FAF7F1` (fondo) · Tan `#E8DCC4` (panel).

## Tipografía

**Young Serif** (display, hermana del wordmark) · **Newsreader** (texto editorial
e itálicas) · **Instrument Sans** (UI) · **IBM Plex Mono** (etiquetas).

## Características

- **Bilingüe ES/EN** — toggle en la navegación, persistente entre páginas (`localStorage`).
- **Verde → dorado por scroll** — el color de acento de todo el sitio (hojas, numerales,
  cursor, barra de progreso) se va corriendo de la clorofila al dorado a medida que bajás.
- **Hojas de ginkgo en acuarela cayendo** — canvas con las 8 etapas reales de la
  hoja: caen verdes al principio del scroll y doradas/marrones hacia el final.
- **Metamorfosis de la hoja** — 6 acuarelas se funden en secuencia con el scroll:
  del verde oscuro al dorado puro, mientras el texto avanza.
- **El árbol de fondo** — el ginkgo completo (copa verde, base dorada) vive
  fijo detrás de todo el home y se va recorriendo de arriba hacia abajo con el
  scroll: empezás en el verde y terminás en el dorado.
- **Dos alas del museo** — scrollytelling para data storytelling (ala de lectura)
  y data art (ala de obra), con demos visuales que cambian con el scroll.
- **Anotaciones a mano** — círculo, subrayado y flecha de tinta que se dibujan
  solos sobre palabras clave al entrar en pantalla.
- **Hojas flotantes con parallax** — en todas las páginas.
- **Data art generativo** — en La colección, una hoja formada por cientos de partículas.
- Cursor propio, botones magnéticos, parallax, marquee infinito,
  contadores, textura de papel, nav que se esconde al bajar.
- Respeta `prefers-reduced-motion` y es responsive (menú hamburguesa en móvil).

## Cómo verlo

No necesita build ni dependencias. Serví la carpeta con cualquier servidor estático:

```bash
python3 -m http.server 8080
# o
npx serve .
```

Abrí `http://localhost:8080` en el navegador.
