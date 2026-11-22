import type { CVData } from './types';

export const cvData: CVData = {
  personal: {
    fullName: 'Samuel David Arenas Pareja',
    title: {
      en: 'Senior Full-Stack Engineer',
      es: 'Ingeniero Full-Stack Senior',
    },
    email: 'samuelsaxofon@gmail.com',
    linkedin: 'https://www.linkedin.com/in/samuel-arenas-pareja',
    githubPersonal: 'https://github.com/samsax',
  },

  summary: {
    en: 'Senior full-stack engineer with 10 years of experience. Contracted through FullStack Labs since 2022 to a US construction-tech SaaS platform, where I have built microservices throughout and its React and TypeScript frontend for the last 3 years. Promoted to senior in April 2024. I now build the home pages construction teams use to manage their companies and projects, end to end across React, Node.js/NestJS, and Ruby on Rails.',
    es: 'Ingeniero full-stack sénior con 10 años de experiencia. Desde 2022, a través de FullStack Labs, trabajo para una plataforma SaaS estadounidense de tecnología para la construcción: microservicios desde el inicio y frontend con React y TypeScript en los últimos 3 años. Ascendí a sénior en abril de 2024. Hoy desarrollo de extremo a extremo las páginas de inicio de empresas y proyectos con React, Node.js/NestJS y Ruby on Rails.',
  },

  experience: [
    {
      company: { en: 'FullStack Labs', es: 'FullStack Labs' },
      location: { en: 'Remote from Colombia · US client', es: 'Remoto desde Colombia · Cliente de EE. UU.' },
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
        en: 'Onboarding team (2022 – mid-2025): account provisioning, entitlements, and new-customer setup on TypeScript/NestJS microservices on AWS, plus React frontends from late 2023. Home team (since June 2025): company and project home pages across the home UI, its microservice, and the Rails monolith. I use Claude Code, Cursor, and GitHub Copilot daily and share Claude Code skills with the team.',
        es: 'Equipo de onboarding (2022 – mediados de 2025): aprovisionamiento de cuentas, habilitaciones de módulos (entitlements) y configuración de clientes nuevos con microservicios en TypeScript/NestJS sobre AWS y, desde finales de 2023, frontends en React. Equipo de inicio (desde junio de 2025): páginas de inicio de empresa y proyecto en la interfaz, su microservicio y el monolito de Rails. Uso Claude Code, Cursor y GitHub Copilot a diario y comparto skills de Claude Code con el equipo.',
      },
      achievements: {
        en: [
          'Wrote the plan for and shipped an in-app toggle from the legacy portfolio page to the new home experience across the Ruby on Rails monolith and React UI, including a settings API with authorization, shared redirects, and bulk-update safeguards. Over 80% of paying customers have since turned both legacy pages off.',
          'Moved home views from static JSON to the home microservice (Node.js/NestJS, DynamoDB) with delta-aware seeding, entitlement filtering, and integration events via a transactional outbox and Debezium CDC to Kafka. Ran production data fixes as gated Kubernetes jobs: dry run, then live, one region at a time.',
          'Built home UI in React, TypeScript, and TanStack Query on a webpack Module Federation host, including the project information, links, dates, and open-items cards, with Jest, React Testing Library, and Cypress tests. Made the new project overview the default, rolled out behind LaunchDarkly flags.',
          'Fixed keyboard and screen-reader issues across portfolio, project home, and card screens (landmarks, aria-current, keyboard-operable menus, accessible sliders); verified with VoiceOver and NVDA.',
          'Reviewed 1,000+ teammates’ pull requests since 2022 (330+ on home since June 2025) and contributed to the team’s Electron developer console for running micro-frontends locally with Docker.',
          'Moved into frontend in late 2023: built core parts of the new project home page in React with a new Rails endpoint, then a guided setup checklist enabled for all English-language accounts in February 2025, backed by permission and entitlement checks and Redis caching.',
          'Set up infrastructure for the onboarding services: Terraform (DynamoDB, IAM), Helm and Argo CD, an Istio private gateway, and outbox tables with Debezium CDC to the data lake. Added availability and latency SLOs to four services and kept auth tokens out of logs.',
          'One of two main engineers on a NestJS service that seeds new customer accounts with sample projects tailored to company type, replacing generic demo data that implementation managers fixed by hand. Updated its design record from proof of concept to general availability.',
        ],
        es: [
          'Escribí el plan e implementé en producción un control para pasar de la página de portafolio heredada a la nueva experiencia de inicio en el monolito de Ruby on Rails y la interfaz en React, con API de configuración y autorización, redireccionamientos compartidos y salvaguardas en actualizaciones masivas. Más del 80 % de los clientes de pago ya desactivó ambas páginas heredadas.',
          'Migré las vistas de inicio de JSON estático al microservicio de inicio (Node.js/NestJS, DynamoDB) con inicialización incremental de datos, filtrado por habilitaciones y eventos de integración mediante un outbox transaccional con CDC de Debezium hacia Kafka. Ejecuté correcciones de datos en producción con jobs de Kubernetes controlados: primero en prueba y luego en vivo, región por región.',
          'Desarrollé la interfaz de inicio con React, TypeScript y TanStack Query sobre un host de Module Federation de webpack, incluidas las tarjetas de información del proyecto, enlaces, fechas y elementos abiertos, con pruebas en Jest, React Testing Library y Cypress. Hice del nuevo resumen de proyecto la vista predeterminada, con despliegue mediante feature flags de LaunchDarkly.',
          'Corregí problemas de teclado y lectores de pantalla en portafolio, inicio de proyecto y tarjetas (landmarks, aria-current, menús operables con teclado, controles deslizantes accesibles); verifiqué con VoiceOver y NVDA.',
          'Revisé más de 1000 pull requests de compañeros desde 2022 (más de 330 en inicio desde junio de 2025) y contribuí a la consola de desarrollo en Electron del equipo para ejecutar micro-frontends en local con Docker.',
          'Pasé al frontend a finales de 2023: desarrollé partes centrales de la nueva página de inicio de proyecto en React con un nuevo endpoint en Rails y luego una guía de configuración habilitada para todas las cuentas en inglés en febrero de 2025, con validación de permisos y habilitaciones y caché en Redis.',
          'Configuré la infraestructura de los servicios de onboarding: Terraform (DynamoDB, IAM), Helm y Argo CD, un gateway privado de Istio y tablas outbox con CDC de Debezium hacia el data lake. Agregué SLOs de disponibilidad y latencia a cuatro servicios y evité que los tokens de autenticación quedaran en los logs.',
          'Uno de los dos ingenieros principales de un servicio en NestJS que crea proyectos de ejemplo según el tipo de empresa, en lugar de datos genéricos que se corregían a mano. Actualicé su documento de diseño para pasar a disponibilidad general.',
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
        en: 'DataHome built software and infrastructure for clients in México, including a trip service used by drivers, passengers, and transport companies (earning a small fee per trip), an online vehicle store with bank financing, and a state driver’s license system.',
        es: 'DataHome desarrollaba software para clientes en México: un servicio de transporte con comisión por viaje, una tienda en línea de vehículos con financiamiento bancario y un sistema estatal de licencias de conducir.',
      },
      achievements: {
        en: [
          'As technical lead of a four-person team, owned architecture and code review across Android, web, and backend, and reorganized the PHP web services from one large file into a multi-file Zend Framework backend.',
          'Built the Android app for drivers and passengers, first in Java and later in Kotlin; developed the trip-platform dashboard with Vue.js and PostgreSQL.',
          'Led the architecture of a driver’s license system for the state of Tabasco and worked directly with the state government on its implementation: a secure connection to government records, a Kotlin Android app that replaced the physical license and handled renewal payments, and a Python/Django and Vue.js dashboard.',
          'Designed and built an online vehicle store (Python/Django, Vue.js) with inventory where buyers applied for credit with one of México’s largest banks through its API; sales closed in person.',
        ],
        es: [
          'Como líder técnico de un equipo de cuatro personas, definí la arquitectura y revisé el código de Android, web y backend, y reorganicé los servicios web en PHP, de un único archivo extenso a un backend de Zend Framework con múltiples archivos.',
          'Desarrollé la aplicación Android para conductores y pasajeros, primero en Java y luego en Kotlin; desarrollé el dashboard de la plataforma de viajes con Vue.js y PostgreSQL.',
          'Lideré la arquitectura del sistema de licencias de conducir de Tabasco y trabajé directamente con el gobierno estatal: conexión segura con sus datos, app Android en Kotlin que reemplazaba la licencia física y cobraba la renovación, y dashboard en Python/Django y Vue.js.',
          'Diseñé y desarrollé una tienda en línea de vehículos (Python/Django, Vue.js) con inventario, donde los compradores solicitaban crédito a uno de los bancos más grandes de México vía su API; la venta se cerraba en persona.',
        ],
      },
    },
  ],

  skills: {
    now: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Module Federation',
      'Node.js',
      'NestJS',
      'Ruby on Rails',
      'DynamoDB',
      'Kafka',
      'Redis',
      'AWS',
      'Terraform',
      'Kubernetes',
      'Jest',
      'Cypress',
      'Cursor',
      'Claude Code',
      'GitHub Copilot',
    ],
    earlier: ['Python/Django', 'Kotlin', 'Java/Android', 'Vue.js', 'PostgreSQL', 'PHP'],
  },

  certifications: [
    { name: 'Claude Code in Action', issuer: 'Anthropic', issuedAt: '2026-05' },
    { name: 'Introduction to agent skills', issuer: 'Anthropic', issuedAt: '2026-04' },
    { name: 'Curso de Liderazgo para Equipos de Trabajo', issuer: 'Platzi', issuedAt: '2021-01' },
    { name: 'Curso de Gestión de Equipos Ágiles', issuer: 'Platzi', issuedAt: '2020-10' },
    { name: 'Curso Profesional de Scrum', issuer: 'Platzi', issuedAt: '2020-09' },
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
      en: 'Research assistant at GIIS (UdeA): built “MyVitalBox: Nutrición”, an Android nutrition-tracking app with Java and SQLite. Took my final course online during the DataHome internship.',
      es: 'Asistente de investigación en GIIS (UdeA): desarrollé “MyVitalBox: Nutrición”, app Android de nutrición (Java, SQLite). Cursé la última materia en línea durante la práctica en DataHome.',
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
