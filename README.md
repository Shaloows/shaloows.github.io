# shaloows.github.io

Portfolio de proyectos de Ingeniería Electrónica de Gonzalo "Rulo" Grasso.
Sitio estático (HTML + CSS + JS, sin build), bilingüe ES/EN, alojado en GitHub Pages.

**URL:** https://shaloows.github.io

## Estructura

```
index.html                              Home: hero, índice de proyectos, sobre mí, contacto
assets/css/site.css                     Estilo compartido (tokens de color, tipografía, componentes)
assets/js/i18n.js                       Motor de idioma ES/EN (lee window.I18N de cada página)
projects/
  pendulo-doble-invertido/
    index.html                          Página del proyecto (etapas + bitácora)
    img/                                Fotos, esquemáticos, gráficas del proyecto
```

## Cómo agregar un proyecto nuevo

1. Copiar `projects/pendulo-doble-invertido/` a `projects/<nombre-del-proyecto>/`.
2. Editar el `index.html` nuevo: títulos, lede, etapas y el diccionario `window.I18N` (ES y EN) al final del archivo.
3. En `index.html` (home), agregar la fila al índice de proyectos y sus claves `pN.*` en el diccionario.
4. Subir las imágenes a `projects/<nombre>/img/` y reemplazar el bloque `.ph` por `<img src="img/foto.jpg" alt="...">` dentro del mismo `div.ph`.

## Cómo actualizar el avance del péndulo

- Cambiar el estado de una etapa: en `projects/pendulo-doble-invertido/index.html`, la clase del `<span class="status ...">`:
  - `status on` → En curso (verde, punto encendido)
  - `status done` → Listo (verde)
  - `status planned` → Pendiente (ámbar)
  y la clave `data-i18n` correspondiente (`st.active`, `st.done`, `st.pending`).
- Agregar una entrada a la bitácora: nuevo `<li>` al principio de `<ol class="log">` con `<time datetime="AAAA-MM-DD">` y su texto (agregar la clave `log.eN` en ES y EN).

## Convenciones de color

- Verde (`--accent`): activo, en desarrollo, listo, hover.
- Ámbar (`--accent-2`): planificado, pendiente, notas de borrador.
- Fondo plano oscuro; la grilla de osciloscopio solo aparece dentro de recuadros (panel del hero, placeholders de imagen).

## Probar en local

Abrir `index.html` directamente en el navegador, o:

```
python -m http.server 8000
```

y entrar a http://localhost:8000
