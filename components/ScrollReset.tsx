'use client';

import { useEffect } from 'react';

/**
 * On mount: disable history scroll restoration and
 * scroll to the very top. Keeps reloads starting at (0,0).
 */
export default function ScrollReset() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return null;
}
