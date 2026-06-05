// Update this number to Osato's real WhatsApp number (international format, no +).
export const WHATSAPP_NUMBER = "393000000000";

export function whatsappLink(message = "Ciao Osato! I'd love to place an order ✨") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
