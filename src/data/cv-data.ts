import type { CVData } from './types';

export const cvData: CVData = {
  personal: {
    fullName: 'Samuel David Arenas Pareja',
    title: {
      en: 'Senior Full-Stack Engineer',
      es: 'Ingeniero Full-Stack Senior',
    },
    email: 'samuelsaxofon@gmail.com',
    phone: '+57 3017463071',
    linkedin: 'https://www.linkedin.com/in/samuel-arenas-pareja',
    githubPersonal: 'https://github.com/samsax',
  },

  summary: {
    en: 'Senior full-stack engineer with 10 years of experience. Contracted through FullStack Labs since 2022 to a US construction-tech SaaS platform, where I have built microservices throughout and its React and TypeScript frontend for the last 3 years. Promoted to senior in April 2024. I now build the home pages construction teams use to manage their companies and projects, end to end across React, Node.js/NestJS, and Ruby on Rails.',
    es: 'Ingeniero full-stack sénior con 10 años de experiencia. Desde 2022 trabajo contratado a través de FullStack Labs para una plataforma SaaS estadounidense de tecnología para la construcción, donde he desarrollado microservicios durante todo ese tiempo y su frontend con React y TypeScript en los últimos 3 años. Ascendí a sénior en abril de 2024. Hoy desarrollo de extremo a extremo las páginas de inicio que los equipos de construcción usan para gestionar sus empresas y proyectos, con React, Node.js/NestJS y Ruby on Rails.',
  },

  experience: [
    {
      company: {
        en: 'FullStack Labs (Remote, USA Contractor)',
        es: 'FullStack Labs (Remoto, contratista de EE. UU.)',
      },
      location: { en: 'Remote (USA / Colombia)', es: 'Remoto (EE. UU. / Colombia)' },
      roles: [
        {
          title: {
            en: 'Senior Software Engineer',
            es: 'Ingeniero de Software Senior',
          },
          startDate: '2024-04',
          endDate: null,
        },
        {
          title: {
            en: 'Mid-Level Software Engineer',
            es: 'Ingeniero de Software de nivel intermedio',
          },
          startDate: '2022-01',
          endDate: '2024-04',
        },
      ],
      overview: {
        en: 'I worked on the platform’s onboarding services until mid-2025, including implementing entitlements in a feature service that controls which paid modules each customer can use. I joined the home team in June 2025 and build company and project home for construction teams across the home UI, its microservice, and the platform’s Rails monolith. I use Cursor, Claude Code, and GitHub Copilot day to day.',
        es: 'Trabajé en los servicios de onboarding de la plataforma hasta mediados de 2025, incluyendo la implementación de las habilitaciones de módulos (entitlements) en un servicio de funcionalidades que controla qué módulos de pago puede usar cada cliente. Me incorporé al equipo de páginas de inicio en junio de 2025 y desarrollo páginas de inicio de empresa y proyecto para equipos de construcción en la interfaz de inicio, su microservicio y el monolito de Rails de la plataforma. Uso Cursor, Claude Code y GitHub Copilot a diario.',
      },
      achievements: {
        en: [
          'Shipped an in-app toggle between the legacy portfolio page and the new home experience across the platform’s Ruby on Rails monolith and the home UI. Implemented the admin API and authorization, shared eligibility and redirects, configuration defaults, and a confirmation step before bulk project updates; demoed the working flow to product and engineering. Across about 6K paid companies, over 80% have both legacy pages turned off.',
          'Built the project overview and company home UI in React 18, React Router, TanStack Query, and TypeScript: routed existing and new projects to the new views by default and delivered the project information card, open items modal, and full team panel. Configured LaunchDarkly beta segments for the card library in production and sandbox.',
          'Moved company home views to the home service API, using Node.js/NestJS and AWS DynamoDB Streams. Seeded default company, project, and dev home containers and emitted outbox events through Kafka Connect to Databricks; removed legacy cutover flags after rollout.',
          'Improved keyboard access and screen-reader behavior across portfolio, safety, and project home screens, fixing tab navigation and roles, keyboard use of notes actions, and weather announcements. Verified the fixes with manual VoiceOver and NVDA testing.',
          'Built and configured a webpack Module Federation host that loads independently deployed card micro-frontends at runtime for company and project home.',
          'Wrote Jest and React Testing Library unit tests and Cypress end-to-end tests for the home UI.',
        ],
        es: [
          'Puse en producción un control dentro de la aplicación para alternar entre la página de portafolio heredada y la nueva experiencia de inicio en el monolito de Ruby on Rails de la plataforma y la interfaz de inicio. Implementé la API administrativa y la autorización, la elegibilidad y los redireccionamientos compartidos, los valores predeterminados de configuración y una confirmación antes de actualizar proyectos en lote; presenté el flujo a producto e ingeniería. En unas 6 mil empresas de pago, más del 80 % tiene ambas páginas heredadas desactivadas.',
          'Desarrollé la interfaz de resumen de proyecto y de inicio de empresa con React 18, React Router, TanStack Query y TypeScript: configuré el enrutamiento predeterminado de proyectos existentes y nuevos a las nuevas vistas e implementé la tarjeta de información del proyecto, el modal de elementos abiertos y el panel completo del equipo. Configuré segmentos beta de LaunchDarkly para la biblioteca de tarjetas en producción y sandbox.',
          'Conecté las vistas de inicio de empresa a la API del servicio de inicio con Node.js/NestJS y DynamoDB Streams de AWS. Inicialicé los contenedores de inicio predeterminados de empresa, proyecto y desarrollo y envié eventos outbox a Databricks mediante Kafka Connect; retiré las feature flags de transición después del lanzamiento.',
          'Mejoré la navegación por teclado y la experiencia con lectores de pantalla en las pantallas de portafolio, seguridad e inicio de proyecto: corregí la navegación y los roles de pestañas, habilité el uso por teclado de las acciones de notas y mejoré los anuncios del clima. Verifiqué con pruebas manuales con VoiceOver y NVDA.',
          'Desarrollé y configuré un host de Module Federation de webpack que carga micro-frontends de tarjetas desplegados de forma independiente en tiempo de ejecución.',
          'Escribí pruebas unitarias con Jest y React Testing Library y pruebas end-to-end con Cypress para la interfaz de inicio.',
        ],
      },
    },
    {
      company: { en: 'DataHome, S. de R.L. de C.V.', es: 'DataHome, S. de R.L. de C.V.' },
      location: { en: 'Villahermosa, Tabasco, México', es: 'Villahermosa, Tabasco, México' },
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
  ],

  skills: {
    now: [
      'React',
      'TypeScript',
      'Ruby on Rails',
      'Node.js',
      'Kafka',
      'DynamoDB',
      'AWS',
      'LaunchDarkly',
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
    ],
    earlier: ['Next.js', 'Kotlin', 'Java/Android', 'Vue.js', 'PostgreSQL', 'PHP'],
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
    note: {
      en: 'Research assistant at GIIS (UdeA): built “MyVitalBox: Nutrición”, an Android nutrition-tracking app with Java and SQLite.',
      es: 'Asistente de investigación en GIIS (UdeA): desarrollé “MyVitalBox: Nutrición”, una app Android de seguimiento nutricional con Java y SQLite.',
    },
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
