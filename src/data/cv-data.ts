import type { CVData } from './types';

export const cvData: CVData = {
  personal: {
    fullName: 'Samuel David Arenas Pareja',
    title: {
      en: 'Senior Software Engineer',
      es: 'Ingeniero de Software Senior',
    },
    email: 'samuelsaxofon@gmail.com',
    phone: '+57 3017463071',
    linkedin: 'https://www.linkedin.com/in/samuel-arenas-pareja',
    githubPersonal: 'https://github.com/samsax',
  },

  summary: {
    en: 'Senior software engineer with 10 years of experience, contracted through FullStack Labs to a US construction-technology platform. Promoted from mid-level to senior in April 2024. I work on company and project home for construction teams, first on onboarding services and, since June 2025, on company and project home surfaces.',
    es: 'Ingeniero de software sénior con 10 años de experiencia, contratado a través de FullStack Labs para una plataforma estadounidense de tecnología para la construcción. Ascendí de nivel intermedio a sénior en abril de 2024. Trabajo en las páginas de inicio de empresa y proyecto para equipos de construcción: primero en servicios de incorporación y, desde junio de 2025, en las páginas de inicio de empresa y proyecto.',
  },

  experience: [
    {
      company: 'FullStack Labs',
      location: 'Remote (USA / Colombia)',
      roles: [
        {
          title: {
            en: 'Senior Software Engineer',
            es: 'Ingeniero de Software Senior',
          },
          startDate: '2024-04',
          endDate: 'present',
        },
        {
          title: {
            en: 'Mid-Level Software Engineer',
            es: 'Ingeniero de Software Mid-Level',
          },
          startDate: '2022-01',
          endDate: '2024-04',
        },
      ],
      overview: {
        en: 'Contracted through FullStack Labs to a US construction-technology platform. Worked on onboarding services through mid-2025, then on company and project home surfaces.',
        es: 'Contratado a través de FullStack Labs para una plataforma estadounidense de tecnología para la construcción. Trabajé en servicios de incorporación hasta mediados de 2025 y luego en las páginas de inicio de empresa y proyecto.',
      },
      achievements: {
        en: [
          'Shipped an in-app toggle between a legacy portfolio experience and company/project home across a Ruby on Rails monolith and React UI. Implemented the admin API and authorization, shared eligibility and redirects, configuration defaults, and a confirmation step before bulk project-home updates; demoed the working flow to product and engineering.',
          'Built company and project home UI in React 18, TypeScript, and Next.js: routed existing and new projects to the home view by default and delivered project-information and open-items cards plus the project team panel. Configured feature-flag beta segments for production and sandbox.',
          'Moved company-home views to a service API using Node.js/NestJS and AWS DynamoDB Streams. Seeded default company, project, and development containers and emitted outbox events through Kafka Connect to Databricks; removed legacy cutover flags after rollout.',
          'Improved keyboard access and screen-reader behavior across portfolio, safety, and project-home screens, fixing tab navigation and roles, keyboard use of notes actions, and weather announcements.',
        ],
        es: [
          'Puse en producción un control dentro de la aplicación para alternar entre una experiencia de portafolio heredada y las páginas de inicio de empresa y proyecto, integradas con un monolito Ruby on Rails y una interfaz React. Implementé la API administrativa y la autorización, la elegibilidad y los redireccionamientos compartidos, los valores predeterminados de configuración y una confirmación antes de actualizar en lote las páginas de inicio de proyectos; presenté el flujo a producto e ingeniería.',
          'Desarrollé las interfaces de inicio de empresa y proyecto con React 18, TypeScript y Next.js: configuré el enrutamiento predeterminado de proyectos existentes y nuevos a la página de inicio e implementé tarjetas de información del proyecto y elementos pendientes, además del panel del equipo. Configuré segmentos beta de feature flags para producción y sandbox.',
          'Conecté las vistas de inicio de empresa a una API de servicio con Node.js/NestJS y DynamoDB Streams de AWS. Inicialicé contenedores predeterminados de empresa, proyecto y desarrollo, y envié eventos outbox a Databricks mediante Kafka Connect; retiré las feature flags de transición después del lanzamiento.',
          'Mejoré la navegación por teclado y la experiencia con lectores de pantalla en las pantallas de portafolio, seguridad e inicio de proyecto: corregí la navegación y los roles de pestañas, habilité el uso por teclado de las acciones de notas y mejoré los anuncios del clima.',
        ],
      },
    },
    {
      company: 'DataHome, S. de R.L. de C.V.',
      location: 'Villahermosa, Tabasco, México',
      roles: [
        {
          title: {
            en: 'Senior Software Engineer',
            es: 'Ingeniero de Software Senior',
          },
          startDate: '2019-03',
          endDate: '2021-12',
        },
        {
          title: {
            en: 'Junior Software Developer',
            es: 'Desarrollador de Software Junior',
          },
          startDate: '2017-01',
          endDate: '2019-03',
        },
        {
          title: {
            en: 'Developer Intern',
            es: 'Pasante de Desarrollo',
          },
          startDate: '2016-06',
          endDate: '2016-12',
        },
      ],
      overview: {
        en: 'DataHome provided software and infrastructure for a trip service used by drivers, passengers, and transport companies, earning a small fee per trip.',
        es: 'DataHome ofrecía software e infraestructura para un servicio de transporte usado por conductores, pasajeros y empresas de transporte, y cobraba una pequeña comisión por viaje.',
      },
      achievements: {
        en: [
          'Built the Android app for drivers and passengers, first in Java and later in Kotlin; developed the trip-platform dashboard with Vue.js and PostgreSQL.',
          'Reorganized the PHP web-service logic from one large file into a multi-file Zend Framework backend; made technical decisions on a four-person team.',
        ],
        es: [
          'Desarrollé la aplicación Android para conductores y pasajeros, primero en Java y luego en Kotlin; desarrollé el dashboard de la plataforma de viajes con Vue.js y PostgreSQL.',
          'Reorganicé la lógica de servicios web en PHP, de un único archivo extenso a un backend de Zend Framework con múltiples archivos; tomé decisiones técnicas en un equipo de cuatro personas.',
        ],
      },
    },
    {
      company: 'Grupo de Investigación Ingeniería y Software (GIIS) — UdeA',
      location: 'Medellín, Colombia',
      roles: [
        {
          title: {
            en: 'Research Assistant',
            es: 'Asistente de Investigación',
          },
          startDate: '2015-08',
          endDate: '2016-06',
        },
      ],
      achievements: {
        en: [
          'Developed an Android application for personalized nutrition tracking using Java, Android SDK, and SQLite.',
          'Implemented calorie and macro intake calculation algorithms based on scientific literature and healthcare guidelines.',
        ],
        es: [
          'Desarrollé una aplicación Android para el seguimiento nutricional personalizado con Java, Android SDK y SQLite.',
          'Implementación de algoritmos de cálculo calórico y macronutrientes basados en literatura médica y científica.',
        ],
      },
    },
  ],

  skills: {
    now: [
      'React',
      'TypeScript',
      'Next.js',
      'Ruby on Rails',
      'Node.js',
      'Kafka',
      'DynamoDB',
      'AWS',
      'LaunchDarkly',
    ],
    earlier: ['Kotlin', 'Java/Android', 'Vue.js', 'PostgreSQL', 'PHP'],
  },

  certifications: [
    { name: 'Curso de Bitcoin y Blockchain 2017', issuer: 'Platzi', issuedAt: '2020-08' },
    { name: 'Curso Profesional de Scrum', issuer: 'Platzi', issuedAt: '2020-09' },
    {
      name: 'Curso de Introducción a los Negocios Online en Ecommerce',
      issuer: 'Platzi',
      issuedAt: '2020-09',
    },
    { name: 'Curso de Gestión de Equipos Ágiles', issuer: 'Platzi', issuedAt: '2020-10' },
    { name: 'Curso de Design Sprint Aplicado', issuer: 'Platzi', issuedAt: '2020-10' },
    { name: 'Curso de Liderazgo para Equipos de Trabajo', issuer: 'Platzi', issuedAt: '2021-01' },
    { name: 'Curso de Técnicas de Negociación', issuer: 'Platzi', issuedAt: '2021-03' },
    { name: 'Claude Code in Action', issuer: 'Anthropic', issuedAt: '2026-05' },
    {
      name: 'Certificate of completion: Introduction to agent skills',
      issuer: 'Anthropic',
      issuedAt: '2026-04',
    },
  ],

  education: {
    degree: {
      en: "Bachelor's Degree in Systems Engineering",
      es: 'Pregrado en Ingeniería de Sistemas',
    },
    institution: 'Universidad de Antioquia (UdeA)',
    startDate: '2012-03',
    endDate: '2017-09',
  },

  languages: [
    {
      name: { en: 'Spanish', es: 'Español' },
      level: { en: 'Native', es: 'Nativo' },
    },
    {
      name: { en: 'English', es: 'Inglés' },
      level: { en: 'Professional Working Proficiency', es: 'Competencia Profesional' },
    },
  ],

};
