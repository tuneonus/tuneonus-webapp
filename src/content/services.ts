export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  eyebrow: string;
  hero: string;
  problem: string;
  solution: string;
  capabilities: string[];
  deliverables: string[];
  technologies: string[];
  industries: string[];
  faqs: ServiceFaq[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: 'ai-development',
    name: 'AI Development Services',
    shortName: 'AI Development',
    title: 'AI Development Services for Digital Products',
    description: 'Plan and build practical AI features, LLM integrations, knowledge assistants, and data workflows for new or existing software products.',
    eyebrow: 'AI product engineering',
    hero: 'Build focused AI capabilities around real product and workflow needs.',
    problem: 'Adding AI to a product involves more than connecting a model. Teams need a clear use case, appropriate data, integration boundaries, useful outputs, and a plan for human review.',
    solution: 'TuneOnus helps shape and implement AI features within the surrounding web, mobile, SaaS, backend, and automation systems that make those features useful.',
    capabilities: ['LLM integration', 'Knowledge assistants', 'AI-enabled product features', 'Data analysis workflows', 'Prompt and output workflows', 'Human review and escalation paths'],
    deliverables: ['Use-case and workflow definition', 'Technical architecture', 'AI feature implementation', 'Data and API integration', 'Testing and output review', 'Deployment and handoff support'],
    technologies: ['Python', 'TypeScript', 'Node.js', 'React', 'Next.js', 'AI', 'Cloud'],
    industries: ['Startups', 'Enterprises', 'Finance', 'Retail', 'Productivity', 'Healthcare'],
    faqs: [
      { question: 'Can TuneOnus add AI to an existing product?', answer: 'Yes. TuneOnus can plan and implement focused AI capabilities inside an existing web, mobile, or SaaS product, subject to its architecture, data, and integration requirements.' },
      { question: 'Does every AI product need a custom model?', answer: 'No. The appropriate approach depends on the use case and available data. Many products can begin with an existing language model, carefully designed context, integrations, and evaluation workflows.' },
      { question: 'How does an AI development project begin?', answer: 'It begins by clarifying the user problem, approved data, desired output, workflow constraints, and where human review is required before selecting an implementation approach.' },
    ],
    related: ['ai-agent-development', 'backend-api-development', 'saas-development'],
  },
  {
    slug: 'ai-agent-development',
    name: 'AI Agent Development Services',
    shortName: 'AI Agent Development',
    title: 'AI Agent Development and Workflow Automation',
    description: 'Build AI assistants and agent workflows connected to approved data, business tools, guardrails, and human review steps.',
    eyebrow: 'Agentic workflows',
    hero: 'Connect AI assistants to the tools and context required for useful work.',
    problem: 'An isolated chatbot cannot complete a multi-step business process. Useful agent workflows need defined tools, reliable context, permissions, observability, and clear escalation boundaries.',
    solution: 'TuneOnus designs agent workflows that coordinate tasks, use approved business systems, and preserve human control for sensitive decisions.',
    capabilities: ['Knowledge assistants', 'Tool-connected agent workflows', 'Support triage assistance', 'Scheduling workflows', 'Document processing', 'Repeatable data and reporting assistants'],
    deliverables: ['Workflow and tool map', 'Agent behavior definition', 'Data and API connections', 'Human approval steps', 'Testing scenarios', 'Deployment and operational handoff'],
    technologies: ['Python', 'TypeScript', 'Node.js', 'AI', 'APIs', 'Cloud'],
    industries: ['Startups', 'Enterprises', 'Finance', 'Retail', 'Productivity', 'Healthcare'],
    faqs: [
      { question: 'What is the difference between an AI agent and a chatbot?', answer: 'A chatbot primarily exchanges messages. An agent workflow may also use approved tools, retrieve relevant information, coordinate steps, and route actions or decisions to people.' },
      { question: 'Can an AI agent include human approval?', answer: 'Yes. Human review can be included before sensitive actions, external communication, or other workflow steps that should not be completed automatically.' },
      { question: 'What workflows can an AI assistant support?', answer: 'Repository-supported examples include support triage, scheduling, document processing, knowledge retrieval, data analysis, reporting, and connected system workflows.' },
    ],
    related: ['ai-development', 'backend-api-development', 'web-development'],
  },
  {
    slug: 'web-development',
    name: 'Web Application Development Services',
    shortName: 'Web Development',
    title: 'Custom Web Application Development Services',
    description: 'Build responsive web applications, portals, dashboards, and internal tools with maintainable frontend and backend architecture.',
    eyebrow: 'Web product engineering',
    hero: 'Develop maintainable web applications around the tasks users need to complete.',
    problem: 'Product-grade web applications must coordinate interface behavior, application state, authentication, APIs, data, accessibility, performance, and future product changes.',
    solution: 'TuneOnus builds responsive web applications with modern frontend and backend technologies, connecting product interfaces to the systems behind them.',
    capabilities: ['Customer-facing web applications', 'Portals and dashboards', 'Internal business tools', 'Responsive interfaces', 'Backend and API integration', 'Authentication and role-based experiences'],
    deliverables: ['Product and technical scope', 'User flows and interface implementation', 'Frontend application', 'Backend/API integration', 'Accessibility and performance review', 'Production build and handoff'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Cloud'],
    industries: ['Startups', 'Enterprises', 'Finance', 'Retail', 'Productivity', 'Healthcare'],
    faqs: [
      { question: 'What types of web applications does TuneOnus build?', answer: 'TuneOnus supports customer-facing applications, SaaS interfaces, portals, dashboards, internal tools, and web experiences connected to backend services.' },
      { question: 'Does web development include backend integration?', answer: 'Yes. A web engagement can include the APIs, authentication, databases, and system integrations needed by the interface.' },
      { question: 'Which web technologies are used?', answer: 'The verified repository stack includes React, Next.js, TypeScript, Node.js, Python, and cloud platforms. The appropriate combination depends on the product.' },
    ],
    related: ['saas-development', 'backend-api-development', 'mobile-development'],
  },
  {
    slug: 'mobile-development',
    name: 'Mobile Application Development Services',
    shortName: 'Mobile Development',
    title: 'Mobile Application Development Services',
    description: 'Create cross-platform mobile applications with clear user flows, backend integration, device capabilities, testing, and release support.',
    eyebrow: 'Mobile product development',
    hero: 'Build mobile experiences connected to the product systems behind them.',
    problem: 'A mobile product must work across screen sizes, network conditions, device capabilities, application state, backend services, and release requirements.',
    solution: 'TuneOnus develops mobile product experiences alongside the APIs, authentication, data flows, and operational systems required to support them.',
    capabilities: ['Cross-platform mobile applications', 'Mobile product interfaces', 'API and authentication integration', 'Device capability integration', 'Web and mobile product alignment', 'Release preparation support'],
    deliverables: ['Mobile product scope', 'User flows and interface implementation', 'Application codebase', 'Backend/API connections', 'Device and functional testing', 'Release and handoff support'],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TypeScript', 'Node.js', 'Cloud'],
    industries: ['Startups', 'Enterprises', 'Finance', 'Retail', 'Productivity', 'Healthcare'],
    faqs: [
      { question: 'Does TuneOnus build cross-platform mobile applications?', answer: 'Yes. Cross-platform mobile development is part of the verified service offering, with React Native and Flutter included in the repository technology stack.' },
      { question: 'Can the same backend support web and mobile products?', answer: 'Often, yes. A shared API and backend can support web and mobile clients when authentication, data contracts, and product requirements are planned accordingly.' },
      { question: 'Does mobile development include release support?', answer: 'The service can include testing, production preparation, and release support. Exact responsibilities should be defined in the project scope.' },
    ],
    related: ['backend-api-development', 'web-development', 'saas-development'],
  },
  {
    slug: 'saas-development',
    name: 'SaaS Product Development Services',
    shortName: 'SaaS Development',
    title: 'SaaS Product Development Services',
    description: 'Plan and build SaaS products with account workflows, role-based access, subscriptions, integrations, and multi-tenant architecture where required.',
    eyebrow: 'SaaS product engineering',
    hero: 'Turn a software product concept into a maintainable SaaS platform.',
    problem: 'SaaS products combine user experience with accounts, permissions, subscriptions, integrations, data separation, administration, and operational requirements.',
    solution: 'TuneOnus supports SaaS development from technical planning through web application, backend, integration, testing, launch, and future iteration.',
    capabilities: ['SaaS web applications', 'Account and workspace workflows', 'Role-based access', 'Subscription integration', 'Multi-tenant architecture where required', 'Administration and operational interfaces'],
    deliverables: ['Product scope and architecture', 'SaaS interface implementation', 'Account and permission workflows', 'Backend and database implementation', 'Subscription and system integrations', 'Testing, launch, and handoff support'],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Cloud'],
    industries: ['Startups', 'Enterprises', 'Finance', 'Retail', 'Productivity', 'Healthcare'],
    faqs: [
      { question: 'Can TuneOnus help build a SaaS MVP?', answer: 'Yes. The repository describes an MVP engagement focused on defining and building a production-ready core feature set within an agreed scope.' },
      { question: 'Does every SaaS product require multi-tenancy?', answer: 'No. Multi-tenancy should be used when the account, workspace, data-separation, and operating model require it rather than added by default.' },
      { question: 'Can SaaS development include subscriptions and permissions?', answer: 'Yes. Subscription integration, role-based access, account workflows, and administrative interfaces can be included when required by the product scope.' },
    ],
    related: ['web-development', 'backend-api-development', 'ai-development'],
  },
  {
    slug: 'backend-api-development',
    name: 'Backend and API Development Services',
    shortName: 'Backend & API Development',
    title: 'Backend and API Development Services',
    description: 'Engineer APIs, databases, authentication, integrations, and cloud infrastructure for web, mobile, SaaS, and AI-enabled products.',
    eyebrow: 'Backend engineering',
    hero: 'Build the APIs, data flows, and integrations that support digital products.',
    problem: 'Reliable product interfaces depend on well-structured APIs, data models, authentication, permissions, integrations, and operational infrastructure.',
    solution: 'TuneOnus builds and integrates backend systems for web, mobile, SaaS, automation, and AI-enabled product experiences.',
    capabilities: ['API development', 'Database-backed applications', 'Authentication and permissions', 'Third-party integrations', 'Workflow and data synchronization', 'Cloud deployment architecture'],
    deliverables: ['Backend architecture', 'API contracts and implementation', 'Database integration', 'Authentication and permission workflows', 'External system integrations', 'Testing, deployment, and handoff support'],
    technologies: ['Node.js', 'Python', 'TypeScript', 'APIs', 'AWS', 'GCP', 'Azure'],
    industries: ['Startups', 'Enterprises', 'Finance', 'Retail', 'Productivity', 'Healthcare'],
    faqs: [
      { question: 'Can TuneOnus build an API for an existing frontend or mobile app?', answer: 'Yes. Backend and API work can support an existing interface when its data, authentication, integration, and deployment requirements are understood.' },
      { question: 'Does backend development include authentication and permissions?', answer: 'It can. Authentication, role-based permissions, account workflows, and data-access boundaries can be included in the agreed backend scope.' },
      { question: 'Which backend and cloud technologies are supported?', answer: 'The verified repository references Node.js, Python, TypeScript, APIs, and deployment on AWS, Google Cloud, or Azure.' },
    ],
    related: ['web-development', 'mobile-development', 'ai-agent-development'],
  },
];

export const servicesBySlug = Object.fromEntries(
  servicePages.map((service) => [service.slug, service]),
) as Record<string, ServicePage>;

export const serviceHubFaqs: ServiceFaq[] = [
  { question: 'Which TuneOnus service is right for an existing product?', answer: 'That depends on the product goal. AI development covers focused AI capabilities, backend and API development covers product systems and integrations, while web, mobile, and SaaS services cover the corresponding product experience.' },
  { question: 'Can one project include more than one service?', answer: 'Yes. A product may combine web or mobile development with backend APIs, SaaS workflows, AI capabilities, and system integrations.' },
  { question: 'How should a prospective project be described?', answer: 'Share the business goal, intended users, current product stage, key workflows, existing systems, constraints, and the areas where technical support is needed.' },
];
