import { defineCollection, z } from 'astro:content';

// Definimos la colección de PILARES como 'data' (YAML)
const pilares = defineCollection({
  type: 'data', // <--- ESTO ES LA CLAVE (antes era 'content' por defecto)
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string(),
  }),
});

// Definimos la colección de HERO también como 'data'
const hero = defineCollection({
  type: 'data',
  schema: z.object({
    titulo: z.string().optional(),
    subtitulo: z.string().optional(),
    descripcion: z.string().optional(),
    textoBoton: z.string().optional(),
    imagen: z.string().optional(),
  }),
});

export const collections = {
  pilares,
  hero,
};