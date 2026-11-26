# DaleClick7 (DC7): landing

Tienda online de Rosario, Zona Sur, Argentina. Vende bazar, regalería, electrónica, deco y hogar.
Producto estrella: auriculares tipo AirPods. Casi todo el tráfico llega desde Instagram en el celular.

## Stack
- Next.js 15 (App Router) + Tailwind CSS 3. Sin base de datos ni backend.
- Repo propio: `santiinoguera/dc7`. Se publica en Vercel desde la raíz del repo (sin configurar Root Directory).
- Fuentes locales vía `@fontsource-variable` (Fredoka para títulos, Nunito para texto). No usar `next/font/google`.
- Imágenes siempre con `next/image`. Las fotos van en `public/productos/` en JPG de hasta 1200 px.
- `npm run dev` para desarrollar, `npm run build` antes de pushear.

## Paleta (fija, definida en `tailwind.config.js`)
| Nombre Tailwind | Hex | Uso |
| --- | --- | --- |
| `naranja` | `#F97F10` | Color principal (logo) |
| `naranja-oscuro` | `#E85A06` | Hover, texto naranja sobre blanco |
| `naranja-claro` | `#F8A219` | Punta amarilla del degradé del logo |
| `negro` | `#141414` | Texto, fondos oscuros, botones |
| `blanco` | `#FFFFFF` | Fondo |
| `amarillo` | `#FFF3C4` | Amarillo clarito: el detalle distintivo |
| `bg-degrade-logo` | degradé `#F95F09 → #F97F10 → #F8A219` | Igual al logo |

**No usar otros colores** (nada de `bg-green-500`, `text-gray-…`, hex sueltos). Para grises usar opacidad: `text-negro/70`.
Texto chico sobre naranja va en **negro**, no en blanco (contraste).

## Estilo visual
Canchero, moderno, limpio. Botones `rounded-full`, tarjetas `rounded-3xl`, mucho espacio en blanco.
Mobile first: diseñar primero para ~390 px, sin scroll horizontal.

## Voz de marca
- Canchera, cercana, divertida y barrial. Emojis sí, con medida. Humor sin exagerar.
- Español rioplatense: vos, tenés, escribinos, pedí, mirá.
- Frases cortas. Nada de "estimado cliente" ni tono corporativo.
- Ejemplos: "Todo lo que buscás, a un click 👆", "Más fácil que armar el mate", "Avisá rápido que vuela".

## Datos de contacto
- WhatsApp: 341 262-4326 → `https://wa.me/543412624326?text=...` (siempre con mensaje prellenado; usar `lib/whatsapp.js`).
- Instagram: https://instagram.com/daleclick7 (@daleclick7)
- Zona: Rosario, Zona Sur. Horario: 9 a 20 hs.
- Pagos: **solo efectivo o transferencia**. Los pedidos se confirman una vez abonados.
- Envíos: bonificado en Rosario y zona; resto del país aprox. $3.000 a $5.000 (a confirmar); retiro por Zona Sur o punto de encuentro.
- Por encargo, entrega en unos 2 días. Foco minorista (no mayorista por ahora).

## Reglas
1. **No inventar precios, stock, descuentos ni políticas.** Lo que falte va como dato de ejemplo o `null` con un comentario `// EDITAR`.
2. **Todo el texto editable vive en `/data`** (o en constantes), nunca escrito directo en los componentes.
3. Antes de escribir código para un pedido nuevo, mostrar el plan de archivos y esperar el OK.
4. No presentar productos como de marca original si no lo son: usar "tipo AirPods", "vaso térmico", etc.
   (Excepción: productos de marca que sí se venden como tales, ej. la freidora Liliana.)
5. La única promo segura hoy es "envío bonificado en Rosario y zona".

## Estructura
```
app/            layout (SEO, OG, fuentes, botón flotante), page (orden de secciones), íconos
components/     una sección por archivo + BotonWhatsApp, ProductCard, Countdown, usePromos
data/           site.js (contacto y todos los textos), products.js, categories.js, navidad.js,
                reviews.js, faq.js, promos.js
lib/            whatsapp.js (links), format.js (precios), promos.js (lógica de campañas)
public/         logo.png, og-image.jpg, productos/*.jpg
```
Orden de la página: Header, Hero, Producto estrella, **Promos**, Categorías, Destacados, Navidad, Cómo comprar, Envíos, Pagos, Opiniones, FAQ, Footer.

## Promos por fecha (`data/promos.js`)
La sección se arma sola según la fecha de hoy en hora de Argentina (UTC-3). El cálculo corre **en el navegador**
(hook `components/usePromos.js`) para que no quede congelado en la fecha del deploy.

### Exports
- `BENEFICIO_BASE`: chip que aparece en todas las campañas (envío bonificado).
- `LINEA_FIJA`: línea debajo de las tarjetas.
- `PROMOS_TEXTOS`: textos fijos de la sección (botones, "Faltan", "Después viene:", etc.).
- `CAMPANAS`: array de campañas.

### Estructura de una campaña
```js
{
  id: 'black-friday',              // único, sin espacios
  nombre: 'Black Friday',          // se usa en la tira "Después viene" y en el mensaje de WhatsApp
  fechaInicio: '2026-11-16',       // AAAA-MM-DD, desde las 00:00 (inclusive)
  fechaFin: '2026-11-30',          // AAAA-MM-DD, hasta las 23:59 (inclusive)
  fechaEvento: '2026-11-27',       // la cuenta regresiva va hasta este día a las 00:00
  textoCuenta: 'para el Black Friday',             // se muestra "Faltan para el Black Friday"
  textoExtension: '⚡ ¡Extendido hasta el Cyber Monday! Termina en', // desde fechaEvento hasta fechaFin
  titulo: '...', subtitulo: '...', emoji: '🖤',
  colorDestacado: 'negro',         // SOLO 'naranja' | 'negro' | 'blanco' | 'amarillo'
  mensajeWhatsApp: '...',          // mensaje del botón grande del banner
  fechaLimitePedidos: null,        // 'AAAA-MM-DD' o null (no se muestra)
  productos: [
    { nombre: '...', foto: '/productos/x.jpg' /* o null → emoji */, precio: 27000 /* o null */, precioPromo: null },
  ],
}
```

### Comportamiento
- Activa = hoy entre `fechaInicio` y `fechaFin`. Si hay varias, se muestra la que **termina su cuenta antes**.
- Antes de `fechaEvento`: "Faltan …" + cuenta hasta el evento. Desde `fechaEvento` hasta `fechaFin`: `textoExtension` + cuenta hasta el fin.
- Al terminar, pasa sola a la siguiente (se recalcula cada segundo).
- "Después viene:" muestra otra campaña activa superpuesta o, si no hay, la próxima en empezar.
- Sin campaña activa: la sección no se renderiza y el link "Promos" del header desaparece (`soloConPromo: true` en `data/site.js`).
- `precio: null` → "Consultá precio". `precioPromo: null` → solo precio normal. Con `precioPromo` → precio tachado + chip PROMO.
- Probar otra fecha: `http://localhost:3000/?fecha=2026-12-20` (simula ese día al mediodía).

### Cómo agregar una campaña nueva (ej. Día del Niño u Hot Sale)
1. Copiar un objeto de `CAMPANAS` y pegarlo al final del array.
2. Cambiar `id`, `nombre`, las 3 fechas, `textoCuenta`, `textoExtension`, textos, `emoji` y `colorDestacado`.
   - Día del Niño 2027 (3.er domingo de agosto): `fechaEvento: '2027-08-15'`, arrancar ~2 semanas antes.
   - Hot Sale: evento de varios días → `fechaEvento` = primer día, `fechaFin` = último día, `textoExtension: '🔥 ¡Es Hot Sale! Termina en'`.
3. Cargar `productos` con fotos en `public/productos/` y precios `null // EDITAR` hasta tener los reales.
4. Probar con `?fecha=` y correr `npm run build`.
No hace falta tocar ningún componente.
