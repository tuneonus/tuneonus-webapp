'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { canUseWebGL } from '../../lib/webgl';

const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { ssr: false }
);

export default function ParticleBackgroundClient() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!canUseWebGL()) return;
    const delay = window.innerWidth < 768 ? 2500 : 750;
    const timer = window.setTimeout(() => setEnabled(true), delay);
    return () => window.clearTimeout(timer);
  }, []);

  return enabled ? <ParticleBackground /> : null;
}
