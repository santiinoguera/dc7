# DaleClick7: landing

Landing de DC7 (Rosario, Zona Sur). Next.js + Tailwind, sin backend.

## Correr en tu compu
```bash
npm install
npm run dev        # abrí http://localhost:3000
```
Probá cómo se ve otra campaña: `http://localhost:3000/?fecha=2026-12-20`

## Qué se edita y dónde
| Qué | Archivo |
| --- | --- |
| WhatsApp, Instagram, horario, todos los textos de la página | `data/site.js` |
| Producto estrella y los 8 destacados | `data/products.js` |
| Categorías | `data/categories.js` |
| Navidad y regalos | `data/navidad.js` |
| Opiniones de clientes | `data/reviews.js` |
| Preguntas frecuentes | `data/faq.js` |
| Promos por fecha (Black Friday, Navidad, Reyes…) | `data/promos.js` |
| Colores | `tailwind.config.js` |
| Logo | `public/logo.png` (reemplazalo manteniendo el nombre) |
| Fotos | `public/productos/` |

Buscá `EDITAR` en la carpeta `data/` para ver todo lo que falta completar (precios, reseñas reales, etc.).

## Subir a GitHub y desplegar en Vercel
1. Subí los cambios: `git add . && git commit -m "Actualizo promos" && git push`.
2. Entrá a https://vercel.com, iniciá sesión con GitHub y tocá **Add New → Project**.
3. Elegí el repo `dc7` → **Deploy** (Vercel detecta Next.js solo).
4. Listo: cada `git push` a la rama conectada vuelve a publicar solo, en 1 o 2 minutos.
5. Cuando tengas la URL final (o dominio propio), cambiala en `data/site.js` → `SEO.url`.
