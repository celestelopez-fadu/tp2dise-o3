# Cúspides — Academia de Montaña Patagónica

## Estructura del proyecto

```
cuspides-project/
├── index.html          ← Estructura HTML principal
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← Navegación, carruseles, animaciones
├── img/                ← Carpeta para imágenes locales (vacía, ver abajo)
└── README.md
```

## Tipografías (Google Fonts — ya incluidas)
- **Russo One** → títulos y headings
- **Inter** → body text y párrafos
- **JetBrains Mono** → datos técnicos, labels, CTAs

## Paleta de colores (CSS variables en styles.css)
| Variable      | Hex         | Uso                          |
|---------------|-------------|------------------------------|
| --black       | #0D0F0E     | Fondo principal              |
| --black2      | #0A0D0C     | Fondo secciones band         |
| --light       | #D9E4DF     | Texto principal              |
| --stone       | #8FA89E     | Texto secundario / bordes    |
| --orange      | #DD3C2B     | CTAs / acento / alertas      |
| --glacier     | #1C3A35     | Hover de cards               |

## Imágenes actuales (Unsplash URLs — para reemplazar)

Cada imagen está referenciada directamente con src de Unsplash.
Para reemplazarlas con imágenes locales:
1. Guardá tu imagen en la carpeta `img/`
2. Reemplazá la URL de Unsplash por `img/nombre-archivo.jpg`

### Mapa de imágenes por sección

| Sección                  | Elemento              | URL actual (Unsplash)                                        |
|--------------------------|-----------------------|--------------------------------------------------------------|
| Hero                     | Fondo principal       | photo-1464822759023-fed622ff2c3b                             |
| Módulo 01 — Navegación   | Card background       | photo-1527004013197-933c4bb611b3                             |
| Módulo 02 — Primeros Aux | Card background       | photo-1576091160399-112ba8d25d1d                             |
| Módulo 03 — Progresión   | Card background       | photo-1464822759023-fed622ff2c3b                             |
| Módulo 04 — Bivouac      | Card background       | photo-1606787366850-de6330128bfc                             |
| Módulo 05 — Meteorología | Card background       | photo-1551632436-cbf8dd35adfa                                |
| Quote strip              | Fondo                 | photo-1519681393784-d120267933ba                             |
| Expedición — Tronador    | Card background       | photo-1551632811-561732d1e306                                |
| Expedición — Lanín       | Card background       | photo-1519120944692-1a8d8cfc107f                             |
| Expedición — Fitz Roy    | Card background       | photo-1501854140801-50d01698950b                             |
| Expedición — Torres Paine| Card background       | photo-1506905925346-21bda4d32df4                             |
| Expedición — Copahue     | Card background       | photo-1473773508845-188df298d2d1                             |
| Expedición — San Valentín| Card background       | photo-1486870591958-9b9d0d1dda99                             |
| Equipo — Martín Álvarez  | Foto instructor       | photo-1570295999919-56ceb5ecca61                             |
| Equipo — Sofía González  | Foto instructora      | photo-1494790108377-be9c29b29330                             |
| Equipo — Ignacio Rdz.    | Foto instructor       | photo-1500648767791-00dcc994a43e                             |
| Equipo — Laura Méndez    | Foto médica           | photo-1508214751196-bcfd4ca60f91                             |
| Equipo — Diego Vargas    | Foto instructor       | photo-1552058544-f2b08422138a                                |
| Equipo — Pablo Herrera   | Foto guía             | photo-1560250097-0b93528c311a                                |
| Equipo — Ana Peralta     | Foto psicóloga        | photo-1607746882042-944635dfe10e                             |
| Escuela de Guías         | Fondo de sección      | photo-1506905925346-21bda4d32df4                             |
| CTA Final                | Fondo principal       | photo-1464822759023-fed622ff2c3b                             |

## Cómo reemplazar una imagen

**Con URL de Unsplash diferente:**
```html
<!-- Antes -->
<img src="https://images.unsplash.com/photo-XXXXXX?w=800&q=80..." />

<!-- Después (otra foto de Unsplash) -->
<img src="https://images.unsplash.com/photo-YYYYYY?w=800&q=80&auto=format&fit=crop" />
```

**Con imagen local:**
```html
<!-- Antes -->
<img src="https://images.unsplash.com/photo-XXXXXX?w=800..." />

<!-- Después -->
<img src="img/tronador-principal.jpg" />
```

## Carruseles

Hay 3 carruseles en la página:
- **Módulos** (`#modTrack`) — muestra 3 items en desktop
- **Expediciones** (`#expTrack`) — muestra 3 items en desktop
- **Equipo** (`#teamTrack`) — muestra 4 items en desktop

Para agregar un item nuevo a un carrusel, copiá uno de los `<article>` existentes dentro del `carousel-track` correspondiente y modificá el contenido.

## Variables CSS principales (en styles.css, línea 1)

Para cambiar colores globalmente, editá las variables en `:root { }`:
```css
--orange: #DD3C2B;   /* color de acento — CTAs, alertas */
--glacier: #1C3A35;  /* hover de cards */
```
