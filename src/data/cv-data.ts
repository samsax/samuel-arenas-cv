import type { CVData } from './types';

export const cvData: CVData = {
  personal: {
    fullName: 'Samuel David Arenas Pareja',
    title: {
      en: 'Senior Software Engineer',
      es: 'Ingeniero de Software Senior',
    },
    location: 'La Ceja, Antioquia, Colombia',
    email: 'samuelsaxofon@gmail.com',
    phone: '+57 3017463071',
    linkedin: 'https://www.linkedin.com/in/samuel-arenas-pareja',
    githubPersonal: 'https://github.com/samsax',
  },

  summary: {
    en: 'Senior software engineer with 10 years of experience, contracted through FullStack Labs to Procore. Promoted from mid-level to senior in April 2024. I work on company and project home for construction teams, first on Procore’s Onboarding services and on Hubs since June 2025.',
    es: 'Ingeniero de software sénior con 10 años de experiencia, contratado a través de FullStack Labs para trabajar con Procore. Ascendí de nivel intermedio a sénior en abril de 2024. Trabajo en las páginas de inicio de empresa y proyecto para equipos de construcción: primero en los servicios de Onboarding de Procore y, desde junio de 2025, en Hubs.',
  },

  experience: [
    {
      company: 'FullStack Labs (Remote, USA Contractor)',
      client: 'Procore Technologies',
      team: 'Hubs Team',
      location: 'Remote (USA / Colombia)',
      roles: [
        {
          title: {
            en: 'Senior Software Engineer — Hubs',
            es: 'Ingeniero de Software Senior — Hubs',
          },
          startDate: 'Apr 2024',
          endDate: 'Present',
        },
        {
          title: {
            en: 'Mid-Level Software Engineer',
            es: 'Ingeniero de Software Mid-Level',
          },
          startDate: 'Jan 2022',
          endDate: 'Apr 2024',
        },
      ],
      overview: {
        en: 'I worked on Procore’s Onboarding services through mid-2025, then joined Hubs in June 2025. I build company and project home for construction teams across the Hubs UI, its microservice, and Cornerstone, Procore’s Rails monolith.',
        es: 'Trabajé en los servicios de Onboarding de Procore hasta mediados de 2025 y me incorporé al equipo Hubs en junio de 2025. Desarrollo páginas de inicio de empresa y proyecto para equipos de construcción en la interfaz de Hubs, su microservicio y Cornerstone, el monolito de Rails de Procore.',
      },
      achievements: {
        en: [
          'Shipped an in-app toggle between legacy Portfolio and Procore Hubs across Cornerstone, Procore’s Ruby on Rails monolith, and the Hubs UI. Implemented the admin API and authorization, shared eligibility and redirects, configuration defaults, and a confirmation step before bulk Project Hub updates; demoed the working flow to product and engineering.',
          'Built Project Overview and Procore Home UI in React 18, TypeScript, and Next.js: routed existing and new projects to hub views by default and delivered the Project Information card, Open Items modal, and full team panel. Configured LaunchDarkly beta segments for Card Library in production and sandbox.',
          'Moved Company Hub views to the Hubs service API, using Node.js/NestJS and AWS DynamoDB Streams. Seeded default Company, Project, and Dev Hub containers and emitted outbox events through Kafka Connect to Databricks; removed legacy cutover flags after rollout.',
          'Improved keyboard access and screen-reader behavior across Portfolio, Safety, and Project Home, fixing tab navigation and roles, keyboard use of Notes actions, and weather announcements.',
        ],
        es: [
          'Puse en producción un control dentro de la aplicación para alternar entre el Portfolio heredado y Procore Hubs en Cornerstone, el monolito de Procore basado en Ruby on Rails, y la interfaz de Hubs. Implementé la API administrativa y la autorización, la elegibilidad y los redireccionamientos compartidos, los valores predeterminados de configuración y una confirmación antes de actualizar en lote los Project Hubs; presenté el flujo a producto e ingeniería.',
          'Desarrollé la interfaz de Project Overview y Procore Home con React 18, TypeScript y Next.js: configuré el enrutamiento predeterminado de proyectos existentes y nuevos a vistas de Hubs e implementé la tarjeta Project Information, el modal Open Items y el panel completo del equipo. Configuré segmentos beta de LaunchDarkly para Card Library en producción y sandbox.',
          'Conecté las vistas de Company Hub a la API del servicio Hubs con Node.js/NestJS y DynamoDB Streams de AWS. Inicialicé los contenedores predeterminados de Company, Project y Dev Hub y envié eventos outbox a Databricks mediante Kafka Connect; retiré las feature flags de transición después del lanzamiento.',
          'Mejoré la navegación por teclado y la experiencia con lectores de pantalla en Portfolio, Safety y Project Home: corregí la navegación y los roles de pestañas, habilité el uso por teclado de las acciones de Notes y mejoré los anuncios del clima.',
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
          startDate: 'Mar 2019',
          endDate: 'Dec 2021',
        },
        {
          title: {
            en: 'Junior Software Developer',
            es: 'Desarrollador de Software Junior',
          },
          startDate: 'Jan 2017',
          endDate: 'Mar 2019',
        },
        {
          title: {
            en: 'Developer Intern',
            es: 'Pasante de Desarrollo',
          },
          startDate: 'Jun 2016',
          endDate: 'Dec 2016',
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
          startDate: 'Aug 2015',
          endDate: 'Jun 2016',
        },
      ],
      achievements: {
        en: [
          'Developed "MyVitalBox: Nutrición", an Android mobile application using Java, Android SDK, and SQLite for personalized nutrition tracking.',
          'Implemented calorie and macro intake calculation algorithms based on scientific literature and healthcare guidelines.',
        ],
        es: [
          'Desarrollo de la aplicación móvil "MyVitalBox: Nutrición" con Java, Android SDK y SQLite para seguimiento nutricional personalizado.',
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
    period: 'Mar 2012 – Sep 2017',
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

  hobbies: {
    en: ['Playing saxophone (Jazz & Latin)', 'Enjoying specialty coffee', 'Barbecuing (BBQ)'],
    es: ['Tocar saxofón (Jazz y ritmos latinos)', 'Disfrutar café de especialidad', 'Hacer asados (BBQ)'],
  },
};
