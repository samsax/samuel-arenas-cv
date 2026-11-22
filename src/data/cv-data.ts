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
        en: 'From 2022 to mid-2025 I was on the onboarding team, working on account provisioning, entitlements (which paid modules each customer can use), and new-customer setup, built as TypeScript/NestJS microservices on AWS and, from late 2023, React frontends. Since June 2025 I have been on the home team, building company and project home pages across the home UI, its microservice, and the platform’s Rails monolith. I use Cursor, Claude Code, and GitHub Copilot day to day.',
        es: 'De 2022 a mediados de 2025 estuve en el equipo de onboarding, trabajando en el aprovisionamiento de cuentas, las habilitaciones de módulos (entitlements, qué módulos de pago puede usar cada cliente) y la configuración de clientes nuevos, con microservicios en TypeScript/NestJS sobre AWS y, desde finales de 2023, frontends en React. Desde junio de 2025 estoy en el equipo de páginas de inicio y desarrollo páginas de inicio de empresa y proyecto en la interfaz de inicio, su microservicio y el monolito de Rails de la plataforma. Uso Cursor, Claude Code y GitHub Copilot a diario.',
      },
      achievements: {
        en: [
          'Planned and shipped an in-app toggle between the legacy portfolio page and the new home experience, from a written implementation plan to production across the Ruby on Rails monolith and the home UI: a settings service and admin API with authorization, shared eligibility and redirect logic, configuration defaults, and a confirmation step before bulk project updates. Over 80% of paying customers now have both legacy pages turned off.',
          'Moved home views and containers from static JSON configuration to the home microservice (Node.js/NestJS, DynamoDB): built delta-aware seeding with source-of-truth detection that emits integration events through a transactional outbox with Debezium CDC to Kafka, added entitlement filtering so customers only see views their plan includes, and removed the cutover flags after rollout. Ran production data fixes as gated one-shot Kubernetes jobs, dry run first and then live, one region at a time.',
          'Built home UI in React, TypeScript, and TanStack Query on a webpack Module Federation host that loads independently deployed card micro-frontends at runtime, and built several of those cards (project information with weather, project links, project dates, and open items) with permission-aware rendering and Jest, React Testing Library, and Cypress tests. Made the new project overview the default for existing and new projects, rolled out behind LaunchDarkly flags.',
          'Fixed keyboard and screen-reader issues across portfolio, project home, and card screens: tab navigation with a nav landmark and aria-current, keyboard-operable notes actions and report menus, accessible slider names, and decorative weather images hidden from assistive tech. Verified the fixes with VoiceOver and NVDA.',
          'Reviewed over 1,000 pull requests from teammates since 2022, including 330+ on the home service and UI since June 2025, and contributed to the team’s Electron developer console for running micro-frontends locally with Docker.',
          'Moved into frontend work in late 2023: built core parts of the new project home page in React (project details form, paginated team tab, permission checks, and recent activity backed by a new Rails endpoint), then a guided setup checklist in the side panel that rolled out to all English-language accounts in February 2025. Its backend checks each customer’s tool permissions and entitlements and caches CMS content in Redis.',
          'Set up infrastructure and operations for the onboarding services: Terraform for DynamoDB tables and IAM, Helm and Argo CD deployments, private access through an Istio gateway, and transactional outbox tables with Debezium change data capture streaming three services’ events to the data lake. Added availability and latency SLOs to four services and stopped auth tokens and change-password URLs from reaching logs.',
          'One of two main engineers on a NestJS service that gives each new customer account a sample project and template tailored to its company type, copying RFIs, submittals, specifications, drawings, documents, cost codes, vendors, users, and permission templates through the platform’s APIs. It replaced generic demo data that implementation managers had to fix by hand. Updated its design record to take it from proof of concept to general availability.',
        ],
        es: [
          'Planifiqué y puse en producción un control dentro de la aplicación para alternar entre la página de portafolio heredada y la nueva experiencia de inicio, desde un plan de implementación escrito hasta producción, en el monolito de Ruby on Rails y la interfaz de inicio: un servicio de configuración y una API administrativa con autorización, lógica compartida de elegibilidad y redireccionamiento, valores predeterminados de configuración y una confirmación antes de actualizar proyectos en lote. Más del 80 % de los clientes de pago ya tiene ambas páginas heredadas desactivadas.',
          'Migré las vistas y contenedores de inicio de una configuración JSON estática al microservicio de inicio (Node.js/NestJS, DynamoDB): desarrollé una inicialización incremental de datos con detección de la fuente de verdad que emite eventos de integración mediante un outbox transaccional con CDC de Debezium hacia Kafka, agregué filtrado por habilitaciones para que cada cliente vea solo las vistas incluidas en su plan y retiré las feature flags de transición tras el lanzamiento. Ejecuté correcciones de datos en producción como jobs únicos de Kubernetes con salvaguardas: primero en modo de prueba y luego en vivo, una región a la vez.',
          'Desarrollé la interfaz de inicio con React, TypeScript y TanStack Query sobre un host de Module Federation de webpack que carga en tiempo de ejecución micro-frontends de tarjetas desplegados de forma independiente, y desarrollé varias de esas tarjetas (información del proyecto con clima, enlaces, fechas y elementos abiertos) con renderizado según permisos y pruebas con Jest, React Testing Library y Cypress. Hice que el nuevo resumen de proyecto fuera la vista predeterminada para proyectos existentes y nuevos, con despliegue progresivo mediante feature flags de LaunchDarkly.',
          'Corregí problemas de teclado y lectores de pantalla en las pantallas de portafolio, inicio de proyecto y tarjetas: navegación por pestañas con landmark de navegación y aria-current, acciones de notas y menús de reportes operables con teclado, nombres accesibles en controles deslizantes e imágenes decorativas del clima ocultas para tecnologías de asistencia. Verifiqué las correcciones con VoiceOver y NVDA.',
          'Revisé más de 1000 pull requests de compañeros desde 2022, más de 330 de ellos en el servicio y la interfaz de inicio desde junio de 2025, y contribuí a la consola de desarrollo en Electron del equipo para ejecutar micro-frontends en local con Docker.',
          'Pasé al frontend a finales de 2023: desarrollé partes centrales de la nueva página de inicio de proyecto en React (formulario de detalles del proyecto, pestaña de equipo paginada, validación de permisos y actividad reciente con un nuevo endpoint en Rails) y luego una guía de configuración en el panel lateral que se habilitó para todas las cuentas en inglés en febrero de 2025. Su backend valida los permisos de herramientas y las habilitaciones de cada cliente y guarda en caché el contenido del CMS con Redis.',
          'Configuré la infraestructura y la operación de los servicios de onboarding: Terraform para tablas de DynamoDB e IAM, despliegues con Helm y Argo CD, acceso privado mediante un gateway de Istio y tablas outbox transaccionales con captura de cambios (CDC) de Debezium que envían los eventos de tres servicios al data lake. Agregué SLOs de disponibilidad y latencia a cuatro servicios y evité que los tokens de autenticación y las URLs de cambio de contraseña quedaran en los logs.',
          'Fui uno de los dos ingenieros principales de un servicio en NestJS que crea para cada cuenta nueva un proyecto de ejemplo y una plantilla adaptados a su tipo de empresa, copiando RFIs, submittals, especificaciones, planos, documentos, códigos de costo, proveedores, usuarios y plantillas de permisos mediante las APIs de la plataforma. Reemplazó datos de demostración genéricos que los gerentes de implementación debían corregir a mano. Actualicé su documento de diseño para llevarlo de prueba de concepto a disponibilidad general.',
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
        es: 'DataHome desarrollaba software e infraestructura para clientes en México, entre ellos un servicio de transporte usado por conductores, pasajeros y empresas de transporte (con una pequeña comisión por viaje), una tienda en línea de vehículos con financiamiento bancario y un sistema estatal de licencias de conducir.',
      },
      achievements: {
        en: [
          'As technical lead of a four-person team, owned architecture and code review across Android, web, and backend, and reorganized the PHP web services from one large file into a multi-file Zend Framework backend.',
          'Built the Android app for drivers and passengers, first in Java and later in Kotlin; developed the trip-platform dashboard with Vue.js and PostgreSQL.',
          'Led the architecture of a driver’s license system for the state of Tabasco and worked directly with the state government on its implementation: a secure connection to state government records and a mobile app that replaced the physical license and let drivers pay for renewals directly.',
          'Designed the architecture of and built an online vehicle store with inventory management where buyers uploaded documents and answered a questionnaire to apply for credit directly with one of México’s largest banks through its API; sales closed in person.',
        ],
        es: [
          'Como líder técnico de un equipo de cuatro personas, definí la arquitectura y revisé el código de Android, web y backend, y reorganicé los servicios web en PHP, de un único archivo extenso a un backend de Zend Framework con múltiples archivos.',
          'Desarrollé la aplicación Android para conductores y pasajeros, primero en Java y luego en Kotlin; desarrollé el dashboard de la plataforma de viajes con Vue.js y PostgreSQL.',
          'Lideré la arquitectura de un sistema de licencias de conducir para el estado de Tabasco y trabajé directamente con el gobierno estatal en su implementación: una conexión segura con la información del gobierno estatal y una aplicación móvil que reemplazaba la licencia física y permitía pagar la renovación directamente.',
          'Diseñé la arquitectura y desarrollé una tienda en línea de vehículos con sistema de inventario, donde los clientes subían su documentación y respondían un cuestionario para solicitar crédito directamente con uno de los bancos más grandes de México a través de su API; la venta se cerraba de forma presencial.',
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
