"use client";

import { useSyncExternalStore } from "react";
import { categorias, type Producto } from "@/data/catalogo";

/**
 * Carrito guardado en el navegador (localStorage). No hay backend:
 * el pedido se termina enviando por WhatsApp desde /carrito.
 */
export type ItemGuardado = { slug: string; cantidad: number };
export type ItemCarrito = { producto: Producto; cantidad: number };

const CLAVE = "cz-carrito-v1";
const MAXIMO = 20;
const VACIO: ItemGuardado[] = [];

let estado: ItemGuardado[] = VACIO;
let cargado = false;
const oyentes = new Set<() => void>();

const productos = new Map<string, Producto>(
  categorias.flatMap((c) => c.productos.map((p) => [p.slug, p] as const)),
);

function leer(): ItemGuardado[] {
  try {
    const datos: unknown = JSON.parse(window.localStorage.getItem(CLAVE) ?? "[]");
    if (!Array.isArray(datos)) return VACIO;
    return datos.filter(
      (i): i is ItemGuardado =>
        typeof i?.slug === "string" && productos.has(i.slug) && Number.isInteger(i?.cantidad) && i.cantidad > 0,
    );
  } catch {
    return VACIO; // localStorage bloqueado o datos rotos: se arranca vacío
  }
}

function guardar(nuevo: ItemGuardado[]) {
  estado = nuevo;
  try {
    window.localStorage.setItem(CLAVE, JSON.stringify(nuevo));
  } catch {
    // sin localStorage el carrito igual funciona hasta cerrar la pestaña
  }
  oyentes.forEach((f) => f());
}

function suscribir(avisar: () => void) {
  oyentes.add(avisar);
  // si el carrito cambia en otra pestaña, se actualiza acá también
  const alCambiar = (e: StorageEvent) => {
    if (e.key === CLAVE) {
      estado = leer();
      avisar();
    }
  };
  window.addEventListener("storage", alCambiar);
  return () => {
    oyentes.delete(avisar);
    window.removeEventListener("storage", alCambiar);
  };
}

function foto() {
  if (!cargado) {
    estado = leer();
    cargado = true;
  }
  return estado;
}

export function agregar(slug: string) {
  const actual = foto();
  const existe = actual.find((i) => i.slug === slug);
  guardar(
    existe
      ? actual.map((i) => (i.slug === slug ? { ...i, cantidad: Math.min(MAXIMO, i.cantidad + 1) } : i))
      : [...actual, { slug, cantidad: 1 }],
  );
}

export function cambiarCantidad(slug: string, cantidad: number) {
  const n = Math.max(1, Math.min(MAXIMO, Math.round(cantidad)));
  guardar(foto().map((i) => (i.slug === slug ? { ...i, cantidad: n } : i)));
}

export function quitar(slug: string) {
  guardar(foto().filter((i) => i.slug !== slug));
}

export function vaciar() {
  guardar([]);
}

/** Items del carrito con los datos de cada producto. En el servidor siempre está vacío. */
export function useCarrito(): { items: ItemCarrito[]; unidades: number } {
  const guardados = useSyncExternalStore(suscribir, foto, () => VACIO);
  const items = guardados.flatMap((i) => {
    const producto = productos.get(i.slug);
    return producto ? [{ producto, cantidad: i.cantidad }] : [];
  });
  return { items, unidades: items.reduce((t, i) => t + i.cantidad, 0) };
}
