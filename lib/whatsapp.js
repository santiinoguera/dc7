import { CONTACTO, MENSAJE_GENERAL } from '@/data/site';

// Arma el link wa.me con el mensaje prellenado.
export function linkWhatsApp(mensaje = MENSAJE_GENERAL) {
  return `https://wa.me/${CONTACTO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

// Mensaje estándar para pedir un producto de la grilla.
export function mensajeProducto(nombre) {
  return `¡Hola DC7! 👋 Quiero pedir: ${nombre}. ¿Lo tienen disponible?`;
}

// Mensaje para un producto dentro de una campaña.
export function mensajeProductoPromo(nombre, campana) {
  return `¡Hola DC7! 👋 Vengo por la promo de ${campana} y quiero: ${nombre}. ¿Me pasan info?`;
}
