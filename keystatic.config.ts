// keystatic.config.ts
import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  cloud: {
    project: 'ivancarrillovela/landing-rabina',
  },
  storage: import.meta.env.DEV ? { kind: 'local' } : { kind: 'cloud' },

  singletons: {
    // 1. HERO (Añadimos lo que faltaba)
    hero: singleton({
      label: 'Sección Hero (Portada)',
      path: 'src/content/hero/datos',
      schema: {
        etiquetaSuperior: fields.text({ label: 'Etiqueta Superior (ej: Inversión en Talento)' }), // NUEVO
        titulo: fields.text({ label: 'Título Principal' }),
        subtitulo: fields.text({ label: 'Subtítulo (parte en color)' }),
        descripcion: fields.text({ label: 'Descripción', multiline: true }),
        textoBoton: fields.text({ label: 'Texto Botón Principal' }),
        textoBotonSecundario: fields.text({ label: 'Texto Botón Secundario (ej: Cómo colaborar)' }), // NUEVO
        imagen: fields.image({
          label: 'Imagen de portada',
          directory: 'public/images/hero',
          publicPath: '/images/hero/',
        }),
        // Datos del "Badge" flotante (La cajita blanca sobre la foto)
        badgeTitulo: fields.text({ label: 'Badge: Título (ej: +1.200 Becas)' }), // NUEVO
        badgeDesc: fields.text({ label: 'Badge: Descripción' }), // NUEVO
      },
    }),

    // 2. PILARES INTRO (Nueva sección para el texto introductorio)
    pilaresIntro: singleton({
      label: 'Sección Pilares (Intro)',
      path: 'src/content/pilares-intro/datos',
      schema: {
        etiqueta: fields.text({ label: 'Etiqueta pequeña (ej: Nuestro Enfoque)' }),
        titulo: fields.text({ label: 'Título Grande' }),
        descripcion: fields.text({ label: 'Descripción Lateral', multiline: true }),
      },
    }),

    // 3. CONTACTO (Nueva sección)
    contacto: singleton({
      label: 'Sección Contacto',
      path: 'src/content/contacto/datos',
      schema: {
        etiqueta: fields.text({ label: 'Etiqueta pequeña (ej: Hablemos)' }),
        titulo: fields.text({ label: 'Título Grande' }),
        descripcion: fields.text({ label: 'Texto descriptivo', multiline: true }),
        textoBoton: fields.text({ label: 'Texto del Botón Enviar' }),
      },
    }),
  },

  // Las colecciones se quedan igual
  collections: {
    pilares: collection({
      label: 'Pilares (Tarjetas)',
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