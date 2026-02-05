// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: import.meta.env.DEV
    ? {
        kind: 'local',
      }
    : {
        kind: 'github',
        repo: 'ivancarrillo/landing-rabina',
      },

  // 1. CONFIGURACIÓN DEL HERO (Singleton: Solo hay uno)
  singletons: {
    hero: singleton({
      label: 'Sección Hero',
      path: 'src/content/hero/datos',
      schema: {
        titulo: fields.text({ label: 'Título Principal' }),
        subtitulo: fields.text({ label: 'Subtítulo (parte en color)' }),
        descripcion: fields.text({ label: 'Descripción', multiline: true }),
        textoBoton: fields.text({ label: 'Texto del Botón' }),
        imagen: fields.image({
            label: 'Imagen de portada',
            directory: 'public/images/hero',
            publicPath: '/images/hero/'
        }),
      },
    }),
  },

  // 2. CONFIGURACIÓN DE LOS PILARES (Collection: Puede haber varios)
  collections: {
    pilares: collection({
      label: 'Pilares de Inversión',
      slugField: 'titulo',
      path: 'src/content/pilares/*',
      schema: {
        titulo: fields.slug({ name: { label: 'Título del Pilar' } }),
        descripcion: fields.text({ label: 'Descripción breve', multiline: true }),
        icono: fields.text({ label: 'Emoji o Icono (ej: 🎓)' }),
      },
    }),
  },
});