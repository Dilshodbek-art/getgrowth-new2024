'use client';

import { useEffect } from 'react';

interface LangUpdaterProps {
  lang: string;
}

export default function LangUpdater({ lang }: LangUpdaterProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  return null;
}
