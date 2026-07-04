/**
 * ============================================================
 * FUNDACIÓN IKNAHL — ARCHIVO DE CONFIGURACIÓN
 * ============================================================
 * Este es el ÚNICO archivo que necesitas editar para actualizar
 * el contenido del sitio. No modifiques el HTML directamente.
 * ============================================================
 */

const CONFIG = {

  // ──────────────────────────────────────────────
  // INFORMACIÓN INSTITUCIONAL
  // ──────────────────────────────────────────────
  org: {
    name: "Fundación IKNAHL",
    tagline: "Protegemos derechos. Acompañamos caminos. Reconstruimos esperanza.",
    mision: "Brindar apoyo, orientación y acompañamiento a personas migrantes, solicitantes de refugio y refugiadas, promoviendo el respeto a sus derechos humanos, su dignidad y su integración social.",
    vision: "Ser una fundación de referencia en el acompañamiento humanitario de personas en movilidad, construyendo redes de apoyo, protección y esperanza.",
    valores: [
      { icono: "justicia",         titulo: "Justicia",         descripcion: "Trabajamos desde un enfoque de derechos humanos y acceso a la justicia." },
      { icono: "solidaridad",      titulo: "Solidaridad",      descripcion: "Construimos redes de apoyo humano, social e institucional." },
      { icono: "confidencialidad", titulo: "Confidencialidad", descripcion: "Cuidamos la información y la historia de cada persona que solicita apoyo." },
      { icono: "proteccion",       titulo: "Protección",       descripcion: "Promovemos entornos seguros y orientación clara para personas en situación de vulnerabilidad." },
      { icono: "dignidad",         titulo: "Dignidad",         descripcion: "Reconocemos el valor de cada persona, sin importar su origen, nacionalidad o situación migratoria." },
      { icono: "esperanza",        titulo: "Esperanza",        descripcion: "Creemos en la posibilidad de reconstruir proyectos de vida con acompañamiento y comunidad." }
    ]
  },

  // ──────────────────────────────────────────────
  // CONTACTO
  // ──────────────────────────────────────────────
  contacto: {
    email: "contacto@iknahl.org",
    whatsapp: "",                     // número sin + ni espacios — vacío hasta tener línea oficial
    whatsappTexto: "Hola, necesito orientación sobre mi situación migratoria.",
    horario: "Lunes a viernes · 9:00 – 17:00 hrs",
    direccion: "Ciudad de México, México",
    ciudad: "Ciudad de México",
    redes: {
      facebook:  "",
      instagram: "",
      twitter:   "",
      linkedin:  "",
      youtube:   ""
    }
  },

  // ──────────────────────────────────────────────
  // CONTADORES DE IMPACTO
  // ──────────────────────────────────────────────
  impacto: [
    { numero: 0,   prefijo: "+", sufijo: "",  etiqueta: "Personas orientadas" },
    { numero: 0,   prefijo: "+", sufijo: "",  etiqueta: "Acompañamientos" },
    { numero: 0,   prefijo: "+", sufijo: "",  etiqueta: "Actividades comunitarias" },
    { numero: 100, prefijo: "",  sufijo: "%", etiqueta: "Compromiso humanitario" }
  ],

  // ──────────────────────────────────────────────
  // SERVICIOS
  // ──────────────────────────────────────────────
  servicios: [
    {
      icono: "orientacion",
      titulo: "Orientación humanitaria",
      descripcion: "Información clara y acompañamiento inicial según la situación de cada persona."
    },
    {
      icono: "refugio",
      titulo: "Refugio y protección internacional",
      descripcion: "Orientación sobre procesos de solicitud de refugio y protección en México."
    },
    {
      icono: "derechos",
      titulo: "Derechos humanos",
      descripcion: "Información sobre derechos de personas migrantes, refugiadas y solicitantes de protección."
    },
    {
      icono: "acompanamiento",
      titulo: "Acompañamiento institucional",
      descripcion: "Apoyo para comprender procedimientos ante instituciones y autoridades competentes."
    },
    {
      icono: "canalizacion",
      titulo: "Canalización",
      descripcion: "Vinculación con organizaciones, redes de apoyo o servicios especializados cuando sea necesario."
    },
    {
      icono: "capacitacion",
      titulo: "Capacitación",
      descripcion: "Actividades formativas sobre movilidad humana, derechos humanos y protección."
    },
    {
      icono: "comunidad",
      titulo: "Integración comunitaria",
      descripcion: "Apoyo para fortalecer redes, acceso a información y construcción de comunidad."
    }
  ],

  // ──────────────────────────────────────────────
  // EQUIPO
  // ──────────────────────────────────────────────
  // Se deja vacío intencionalmente: mientras no haya perfiles reales que
  // publicar, el sitio muestra automáticamente tarjetas institucionales
  // genéricas (ver perfilesGenericos en js/main.js). Agrega objetos aquí
  // cuando el equipo quiera publicar información real.
  equipo: [],

  // ──────────────────────────────────────────────
  // CENTRO DE AYUDA — PREGUNTAS FRECUENTES
  // ──────────────────────────────────────────────
  faq: [
    {
      categoria: "Refugio",
      preguntas: [
        {
          pregunta: "¿Qué es la condición de refugiado?",
          respuesta: "La condición de refugiado es el reconocimiento oficial de que una persona necesita protección internacional porque en su país de origen enfrenta persecución por motivos de raza, religión, nacionalidad, género, pertenencia a determinado grupo social u opiniones políticas. En México, este reconocimiento lo otorga la Comisión Mexicana de Ayuda a Refugiados (COMAR)."
        },
        {
          pregunta: "¿Dónde puedo solicitar refugio en México?",
          respuesta: "Debes presentarte personalmente ante la COMAR dentro de los 30 días hábiles siguientes a tu ingreso al territorio mexicano o al momento en que surgieron las causas de tu solicitud. La COMAR tiene oficinas en Ciudad de México, Tapachula, Tijuana, Monterrey y Guadalajara, entre otras ciudades."
        },
        {
          pregunta: "¿Qué debo preparar para contar mi historia?",
          respuesta: "Es útil ordenar, con la calma que puedas, las fechas y los motivos por los que saliste de tu país. No necesitas documentos para iniciar el proceso. Te podemos orientar sobre cómo presentar tu situación con claridad ante la autoridad competente."
        }
      ]
    },
    {
      categoria: "Migración",
      preguntas: [
        {
          pregunta: "¿Cuáles son mis derechos como persona migrante?",
          respuesta: "Toda persona en México, independientemente de su situación migratoria, tiene derechos fundamentales: derecho a la vida, a la integridad personal, a la salud, a la educación (en el caso de niñas, niños y adolescentes), al debido proceso, a no ser detenida arbitrariamente y a recibir información sobre sus derechos. La Ley de Migración y la Ley sobre Refugiados garantizan estos derechos."
        },
        {
          pregunta: "¿Qué hago si necesito orientación sobre un trámite migratorio?",
          respuesta: "Puedes contactarnos y te brindaremos orientación general sobre el trámite que corresponda a tu situación, así como canalización hacia las instancias u organizaciones especializadas cuando sea necesario."
        }
      ]
    },
    {
      categoria: "Apoyo",
      preguntas: [
        {
          pregunta: "¿La atención tiene costo?",
          respuesta: "No. La orientación que brindamos no tiene costo para las personas que la solicitan."
        },
        {
          pregunta: "¿Mi información será confidencial?",
          respuesta: "Sí. Tratamos con confidencialidad la información y la historia de cada persona que solicita apoyo, y la utilizamos únicamente para brindar orientación."
        },
        {
          pregunta: "¿IKNAHL es una autoridad migratoria?",
          respuesta: "No. Fundación IKNAHL no es autoridad migratoria. Somos una fundación de apoyo y acompañamiento humanitario comprometida con la dignidad de las personas."
        }
      ]
    }
  ],

  // ──────────────────────────────────────────────
  // NOTICIAS (máximo 6 noticias recientes)
  // ──────────────────────────────────────────────
  noticias: [
    {
      titulo: "Guías de orientación para personas migrantes",
      fecha: "",
      resumen: "Materiales informativos sobre derechos y rutas de apoyo. Próximamente.",
      imagen: "assets/images/noticia-placeholder.svg",
      enlace: "#",
      proximamente: true
    },
    {
      titulo: "Jornadas comunitarias",
      fecha: "",
      resumen: "Actividades de orientación, escucha y vinculación. Próximamente.",
      imagen: "assets/images/noticia-placeholder.svg",
      enlace: "#",
      proximamente: true
    },
    {
      titulo: "Talleres y capacitaciones",
      fecha: "",
      resumen: "Espacios formativos sobre movilidad humana y derechos humanos. Próximamente.",
      imagen: "assets/images/noticia-placeholder.svg",
      enlace: "#",
      proximamente: true
    }
  ],

  // ──────────────────────────────────────────────
  // TRANSPARENCIA
  // ──────────────────────────────────────────────
  transparencia: [
    {
      categoria: "Informes de actividades",
      archivos: []
    },
    {
      categoria: "Estados financieros",
      archivos: []
    },
    {
      categoria: "Documentos institucionales",
      archivos: []
    },
    {
      categoria: "Convenios y alianzas",
      archivos: []
    },
    {
      categoria: "Convocatorias",
      archivos: []
    },
    {
      categoria: "Avisos",
      archivos: []
    }
  ],

  // ──────────────────────────────────────────────
  // TESTIMONIOS (siempre anónimos, sin país de origen)
  // ──────────────────────────────────────────────
  testimonios: [
    {
      texto: "Recibí orientación cuando no sabía por dónde empezar. Me explicaron mis opciones con respeto y paciencia.",
      persona: "Persona solicitante de apoyo"
    },
    {
      texto: "Sentí que alguien escuchaba mi historia sin juzgarme. Eso me dio tranquilidad para seguir adelante.",
      persona: "Persona migrante"
    },
    {
      texto: "El acompañamiento me ayudó a entender mejor mis derechos y los pasos que podía tomar.",
      persona: "Persona refugiada"
    }
  ]

};

// Exportar para uso en módulos (si se usa bundler futuro)
if (typeof module !== 'undefined') module.exports = CONFIG;
