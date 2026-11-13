# Página: Taller

**Ruta:** `/taller` · **Prioridad:** P1 (fase 1) / P2 (fase 2, turnero)

## Objetivo

Posicionar el taller como **Shimano Service Center**, mostrar **servicios y precios** con claridad y que pedir un turno sea muy fácil.

## Decisión: dos fases

| Fase | Turnos | Por qué |
| --- | --- | --- |
| **Fase 1 (lanzamiento)** | Formulario en la web → **mensaje armado por WhatsApp**. El taller maneja la agenda como hoy. | Rápido de hacer, sin riesgo de sobrevender cupos y sin cambiar la forma de trabajar del taller. |
| **Fase 2** | **Turnero online**: el cliente elige día y franja con cupo, recibe un código y el taller confirma desde el panel. | Ordena la demanda y reduce mensajes, pero requiere definir reglas con el taller (ver abajo). |

## Estructura

### 1. Hero del taller (sección oscura)
- Foto del taller o un mecánico trabajando.
- Eyebrow: `SHIMANO SERVICE CENTER`.
- Título: "Tu bici, en manos expertas".
- Bajada: "Diagnóstico, mantenimiento y puesta a punto con repuestos originales."
- CTA: `Pedir turno` (baja al formulario).

### 2. Por qué nuestro taller
- Técnicos capacitados por Shimano.
- Repuestos originales.
- Diagnóstico sin cargo **[PENDIENTE, confirmar]**.
- Garantía en los trabajos **[PENDIENTE]**.

### 3. Servicios y precios
Tarjetas o tabla, editables desde el panel (`ServicioTaller`):

| Servicio | Incluye (ejemplo) | Precio | Demora |
| --- | --- | --- | --- |
| Service básico | Limpieza, lubricación, ajuste de cambios y frenos, control de presión | Desde $ — | En el día / 24 h |
| Service completo | Desarme, limpieza profunda, engrase de rodamientos, ajuste general | Desde $ — | 48–72 h |
| Puesta a punto Shimano | Ajuste fino de transmisión y frenos con herramientas oficiales | $ — | 24 h |
| Purgado de frenos hidráulicos | Purga y cambio de fluido | $ — | En el día |
| Centrado de ruedas | | $ — | 24 h |
| Tubeless | Conversión o mantenimiento | $ — | En el día |
| Armado de bicicleta | | $ — | 24–48 h |
| Diagnóstico | Revisión y presupuesto | Sin cargo / $ — | En el día |

> **[PENDIENTE]** La lista, lo que incluye cada servicio, los precios y las demoras reales los define el taller. La tabla es un ejemplo de estructura.

- Cada tarjeta tiene el botón `Pedir este servicio`, que completa el formulario con el servicio elegido.
- Nota: "Los repuestos se presupuestan aparte."

### 4. Cómo funciona
Pasos con íconos: **1. Pedí tu turno → 2. Traé tu bici → 3. Te avisamos cuando está lista → 4. Retirala**.

### 5. Formulario de turno

#### Fase 1 — Por WhatsApp
| Campo | Tipo | Obligatorio |
| --- | --- | --- |
| Servicio | Select (desde backend) + "Otro / no sé" | Sí |
| Bicicleta | Texto ("MTB Scott rodado 29") | Sí |
| ¿Qué le pasa? | Textarea | No |
| Día preferido | Date picker (solo lunes a sábado, sin días bloqueados) | Sí |
| Franja | Mañana / Tarde | Sí |
| Nombre | Texto | Sí |

Al enviar se abre WhatsApp con:

```
¡Hola Ciclismo Zonal! 🔧 Quiero pedir un turno para el taller:

Servicio: Service completo
Bicicleta: MTB Scott rodado 29
Problema: hacen ruido los cambios
Día preferido: jueves 3/12 — mañana
Nombre: Juan Pérez
```

#### Fase 2 — Turnero online
1. El cliente elige el **servicio**.
2. Ve un **calendario** con los días con cupo (`GET /turnos/disponibilidad`); los días sin cupo o bloqueados aparecen deshabilitados.
3. Elige **franja** (mañana o tarde) y completa sus datos (nombre, teléfono, email opcional, bici, comentario).
4. Confirma → `POST /turnos` → pantalla de éxito con el **código** (p. ej. `CZ-7K3P`) y el botón "Avisar por WhatsApp" (opcional).
5. El taller ve el turno en el panel como `PENDIENTE` y lo confirma; el estado avanza a `EN_TALLER`, `LISTO` y `ENTREGADO`.
6. El cliente puede consultar el estado en `/taller/turno/[codigo]` y cancelar con más de 24 h de anticipación.
7. Notificaciones (P3): email de confirmación; WhatsApp automático con la API de WhatsApp Business (tiene costo y requiere trámite, así que queda para más adelante).

**Reglas a definir con el taller antes de la fase 2:**
- ¿El turno es para **dejar la bici** (recepción por franja) o para un **horario exacto**? **[SUPUESTO]** Recepción por franja: es más simple y es como suelen trabajar los talleres.
- Cupo por franja y por día (¿varía por servicio?).
- Con cuánta anticipación se puede reservar (p. ej. hasta 30 días) y hasta cuándo (p. ej. el día anterior).
- Política de cancelación y de "no se presentó".
- Días no laborables y vacaciones.

### 6. Preguntas frecuentes (acordeón) — P2
- ¿Cada cuánto conviene hacer un service?
- ¿Trabajan con todas las marcas?
- ¿Cuánto tarda un service?
- ¿Puedo dejar la bici sin turno?
- ¿Hacen presupuesto antes de trabajar?

## SEO
- `title`: "Taller de bicicletas Shimano Service Center | Ciclismo Zonal Santa Rosa"
- Datos estructurados `Service` / `FAQPage`.

## Criterios de aceptación
- [ ] Los servicios y precios salen del backend y se editan desde el panel.
- [ ] (Fase 1) El formulario valida los campos y abre WhatsApp con el mensaje completo.
- [ ] (Fase 1) No se pueden elegir domingos ni días bloqueados.
- [ ] (Fase 2) Dos personas no pueden ocupar el último cupo al mismo tiempo (transacción en la base).
- [ ] (Fase 2) El cliente recibe un código y puede ver el estado de su turno.
