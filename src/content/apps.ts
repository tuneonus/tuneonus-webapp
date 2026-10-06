export const apps = [
  {
    slug: 'paisiq',
    name: 'PaisiQ',
    brand: 'TuneOnus',
    category: 'Personal Finance',
    icon: '/apps/paisiq/icon.webp',
    showcase: '/apps/paisiq/showcase.webp',
    socialImage: '/apps/paisiq/feature-graphic.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tuneonus.paisiq',
    tagline: 'Local-first personal expense and budget tracker.',
    description: 'A personal finance tracker that keeps expense and budget data on your device, with optional reminders, export support, and multiple currencies.',
    detailsPath: '/apps/paisiq',
    privacyPath: '/privacy/paisiq',
    features: [
      { title: 'Expenses and budgets', description: 'Track personal expenses and manage budgets with financial records stored on your device.' },
      { title: 'Multiple currencies', description: 'Keep track of your finances with support for multiple currencies.' },
      { title: 'Data exports', description: 'Export your records as PDF, CSV, or JSON when you choose to save or share them.' },
      { title: 'Optional reminders', description: 'Enable local reminders and budget alerts with notification permission.' },
    ],
  },
] as const;

export type AppItem = (typeof apps)[number];
