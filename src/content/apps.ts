export const apps = [
  {
    slug: 'paisiq',
    name: 'PaisiQ',
    tagline: 'Local-first personal expense and budget tracker.',
    description: 'A personal finance tracker that keeps expense and budget data on your device, with optional reminders, export support, and multiple currencies.',
    detailsPath: '/apps/paisiq',
    privacyPath: '/privacy/paisiq',
  },
] as const;

export type AppItem = (typeof apps)[number];
