# Página: Contacto

**Ruta:** `/contacto` · **Prioridad:** P1

## Objetivo

Que cualquier persona sepa **cómo comunicarse y cómo llegar** en segundos. WhatsApp es el canal principal.

## Estructura

### 1. Encabezado
- Título: "Contacto".
- Bajada: "Escribinos, llamanos o vení al local. Te asesoramos."

### 2. Canales (tarjetas grandes)
| Canal | Dato | Acción |
| --- | --- | --- |
| WhatsApp | +54 9 2954 52-2411 | `Escribinos` → `wa.me` |
| Teléfono | **[PENDIENTE]** fijo, si tienen | `tel:` |
| Email | **[PENDIENTE]** confirmar casilla | `mailto:` |
| Instagram | @ciclismozonal | Link al perfil |
| Facebook | /ciclismozonal | Link a la página |

### 3. Dirección y mapa
- **Marcelo T. de Alvear 216, Santa Rosa, La Pampa (L6300)**.
- Mapa de Google embebido (lazy load) + botón `Cómo llegar`.
- Referencia opcional: "A X cuadras de la plaza San Martín" **[PENDIENTE]**.

### 4. Horarios
- Componente `HorariosLocal` con el indicador "Abierto ahora / Cerrado · Abre a las 16:00".
- Horarios **[PENDIENTE, confirmar]**: el sitio actual dice lunes a viernes 8:30–12:30 y 16:00–20:00, y sábados 9:00–13:00, pero otras fuentes difieren.
- Aviso para feriados, editable desde el panel (P2).

### 5. Formulario de consulta — P2
- Campos: nombre, contacto (teléfono o email), motivo (Compra / Taller / Otro) y mensaje.
- **[DECISIÓN]** En fase 1 el formulario arma un mensaje de WhatsApp (sin backend), igual que el carrito y el taller.
- Fase 2 opcional: guardarlo en el backend y avisar por email.

### 6. Envíos
Bloque corto: "Hacemos envíos a todo el país. Escribinos por WhatsApp con tu localidad y lo coordinamos."

## SEO
- `title`: "Contacto | Ciclismo Zonal — Alvear 216, Santa Rosa"
- Los datos de contacto coinciden exactamente con el perfil de Google Business (NAP consistente).

## Criterios de aceptación
- [ ] Todos los links (WhatsApp, `tel:`, `mailto:`, Maps, redes) funcionan en mobile.
- [ ] El estado "Abierto ahora" es correcto en hora de Argentina.
- [ ] El mapa no bloquea la carga de la página.
