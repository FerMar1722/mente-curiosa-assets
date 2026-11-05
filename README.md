# Mente Curiosa – animaciones propias

Animaciones 2D generadas con código (canvas + Playwright + ffmpeg), alojadas aquí para que vidIQ las importe por URL.

- `tools/render.js`: `node tools/render.js anim/x.html 4 anim/x.mp4` (1080×1920, 30 fps).
- `tools/ejemplo_tierra_sin_luna.html`: ejemplo de estilo (gradiente #0B1026→#0F2A1D, estrellas, amarillo #FFD43B, verde #51CF66, rojo #FF6B6B, fuente Inter, easing cúbico).
- `anim/AAAA-MM-DD_*.mp4`: animaciones de cada día. Se borran las de más de 14 días.
- URL pública: `https://raw.githubusercontent.com/FerMar1722/mente-curiosa-assets/main/anim/<archivo>.mp4` → `vidiq_video_upload(url)` → `videoUrl` para `vidiq_compose`.
