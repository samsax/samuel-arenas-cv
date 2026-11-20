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
    githubProfessional: 'https://github.com/samuelfsl',
  },

  summary: {
    en: 'Senior Software Engineer with 8+ years of production experience across web applications, distributed microservices, and cloud architectures. Currently building core platform surfaces at Procore (Hubs team) via FullStack Labs, shipping high-impact features across React, Next.js, Ruby on Rails (Cornerstone), and AWS. Proven track record leading authorization migrations, high-scale event streaming with Apache Kafka, micro-frontend modularization, and WCAG 2.1 accessibility compliance. Passionate about AI agents, cloud computing, and developer experience.',
    es: 'Ingeniero de Software Senior con más de 8 años de experiencia en desarrollo web, microservicios distribuidos y arquitecturas en la nube. Actualmente desarrollando superficies clave de plataforma en Procore (equipo Hubs) a través de FullStack Labs, entregando soluciones de alto impacto con React, Next.js, Ruby on Rails (Cornerstone) y AWS. Experiencia comprobada en migraciones de sistemas de autorización, procesamiento de eventos a escala con Apache Kafka, micro-frontends y accesibilidad WCAG 2.1. Apasionado por agentes de IA, computación en la nube y experiencia de desarrollo.',
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
        en: 'Senior Software Engineer on Procore’s Hubs team, building the company and project home where construction teams organize work across the hubs microservice, the hubs UI, and the Cornerstone monolith. Covers authorization for personal and published views, card-library visibility, LaunchDarkly feature flags, portfolio and home settings, analytics, and API performance.',
        es: 'Ingeniero de Software Senior en el equipo Hubs de Procore, construyendo el inicio de compañía y proyectos donde los equipos de construcción organizan su trabajo a través del microservicio hubs, la UI de hubs y el monolito Cornerstone. Cubre autorización para vistas personales y publicadas, visibilidad de biblioteca de tarjetas, feature flags con LaunchDarkly, configuración de portafolio e inicio, analítica y rendimiento de APIs.',
      },
      achievements: {
        en: [
          'Migrated the permissions client from the full permissions manifest to Cornerstone’s domain operations API, enabling fast checks for named actions (view hubs, manage personal views, publish views, manage containers) and staying within strict latency targets for view and container routes.',
          'Architected and delivered company & project home experiences using React, Next.js, and micro-frontends (MFE), ensuring high reliability and modularity across teams.',
          'Built asynchronous event pipelines using Apache Kafka (Outbox pattern and Kafka Connect) across Onboarding and Hubs services to guarantee event consistency.',
          'Authored 20+ keyboard navigation, ARIA role, and screen-reader accessibility fixes aligning strictly with WCAG 2.1 standards.',
          'Implemented robust entitlement management and sandbox onboarding solutions using Node.js and Amazon DynamoDB, accelerating time-to-value for new users.',
          'Maintained high test coverage with unit and integration test suites using Jest and React Testing Library.',
          'Collaborated on an award-winning AI agent during FullStack Labs internal hackathon (2025), utilizing Python, AWS, and OpenAI APIs to streamline onboarding workflows.',
        ],
        es: [
          'Migración del cliente de permisos desde el manifiesto completo hacia la API de operaciones de dominio de Cornerstone, permitiendo validaciones rápidas para acciones específicas (ver hubs, administrar vistas personales, publicar vistas, administrar contenedores) cumpliendo con los objetivos de latencia para rutas de vistas y contenedores.',
          'Arquitectura e implementación de la experiencia de inicio de proyecto y empresa usando React, Next.js y micro-frontends (MFE), garantizando modularidad y alta confiabilidad.',
          'Diseño de pipelines de eventos asíncronos con Apache Kafka (patrón Outbox y Kafka Connect) en los servicios de Onboarding y Hubs asegurando consistencia de datos.',
          'Resolución de más de 20 mejoras de accesibilidad (navegación por teclado, roles ARIA y lectores de pantalla) bajo el estándar WCAG 2.1.',
          'Implementación de soluciones de gestión de derechos (entitlements) y proyectos sandbox con Node.js y Amazon DynamoDB, agilizando el onboarding de usuarios.',
          'Mantenimiento de alta cobertura de pruebas unitarias e integración con Jest y React Testing Library.',
          'Desarrollo colaborativo de un agente de IA premiado en hackathon interno (2025), integrando Python, AWS y APIs de OpenAI para optimizar onboarding.',
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
        en: 'Led software initiatives from mobile mobility apps to analytics dashboards and legacy system modernization.',
        es: 'Liderazgo en iniciativas de software desde aplicaciones móviles de movilidad hasta tableros de analítica y modernización de sistemas heredados.',
      },
      achievements: {
        en: [
          'Developed Android applications for drivers and passengers using Kotlin, Java, and Firebase, improving user experience and fleet operations.',
          'Built data-driven reporting dashboards with React, Node.js, and PostgreSQL for executive decision-making.',
          'Optimized third-party REST API integrations in Node.js, slashing operational overhead and latency.',
          'Led modernization efforts migrating legacy monolithic systems from PHP to Vue.js and Node.js microservices.',
        ],
        es: [
          'Desarrollo de aplicaciones Android para conductores y pasajeros con Kotlin, Java y Firebase, mejorando la experiencia de usuario y la operación de flotas.',
          'Construcción de dashboards de analítica de datos con React, Node.js y PostgreSQL para la toma de decisiones estratégicas.',
          'Optimización de integraciones con APIs REST de terceros en Node.js, reduciendo costos operativos y tiempos de respuesta.',
          'Liderazgo en la migración de sistemas monolíticos en PHP hacia microservicios en Node.js y frontends en Vue.js.',
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
    advanced: [
      { name: 'React', years: 4, highlight: 'Production UI, Hooks, Performance' },
      { name: 'JavaScript (ES6+)', years: 4, highlight: 'Modern standards, Async, Tooling' },
      { name: 'REST APIs', years: 4, highlight: 'Design, Auth, Performance' },
      { name: 'AWS', years: 4, highlight: 'S3, Lambda, CloudFormation' },
      { name: 'GitHub & Git', years: 4, highlight: 'CI/CD, Workflows, Monorepo' },
      { name: 'Jira', years: 4, highlight: 'Agile, Sprint Planning, Tracking' },
      { name: 'DynamoDB', years: 3, highlight: 'NoSQL modeling, Low latency' },
      { name: 'LaunchDarkly', years: 3, highlight: 'Feature flags, Targeted rollouts' },
      { name: 'Micro-frontends (MFE)', years: 2, highlight: 'Modular architecture, Hubs' },
      { name: 'HTML5 & Semantic Web', years: 4, highlight: 'SEO, Accessibility, Structure' },
    ],
    intermediate: [
      { name: 'Apache Kafka', years: 3, highlight: 'Outbox pattern, Kafka Connect' },
      { name: 'Docker', years: 3, highlight: 'Containerization, Local dev' },
      { name: 'Helm', years: 3, highlight: 'Kubernetes chart deployments' },
      { name: 'TypeScript', years: 2, highlight: 'Type safety, App router' },
      { name: 'Ruby on Rails', years: 2, highlight: 'Cornerstone controllers, Evaluators' },
      { name: 'Node.js', years: 2, highlight: 'Microservices, APIs' },
      { name: 'DevOps & CI/CD', years: 2, highlight: 'Pipelines, Automation' },
      { name: 'WCAG 2.1 Accessibility', years: 1, highlight: 'Keyboard nav, Screen readers' },
      { name: 'YAML', years: 1, highlight: 'Cloud & deployment manifests' },
    ],
    earlierCareer: [
      'Python',
      'Django',
      'Flask',
      'Firebase',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'PHP',
      'Java (Spring Boot / Android)',
      'Kotlin',
      'Vue.js',
      'NestJS',
      'SQLite',
    ],
  },

  certifications: [
    { name: 'Claude Code in Action', issuer: 'Anthropic', year: '2025' },
    { name: 'Curso de Introducción a los Negocios Online en Ecommerce', issuer: 'Platzi' },
    { name: 'Curso de Técnicas de Negociación', issuer: 'Platzi' },
    { name: 'Curso de Bitcoin y Blockchain 2017', issuer: 'Platzi', year: '2017' },
    { name: 'Curso de Liderazgo para Equipos de Trabajo', issuer: 'Platzi' },
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
