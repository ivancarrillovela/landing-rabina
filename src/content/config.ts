import { defineCollection, z } from 'astro:content';

const pilares = defineCollection({
  type: 'content', // O 'data' si usas yaml/json, keystatic por defecto usa markdoc/yaml
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    icono: z.string(),
  }),
});

// El Hero al ser singleton se guarda un poco diferente, pero podemos leerlo directo
// No es estrictamente necesario definirlo aquí si usamos el reader de keystatic,
// pero para usar la API nativa de Astro:

export const collections = {
  pilares,
};