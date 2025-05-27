'use client';

import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const loadParticles = () => import('particles.js');

export default function ParticlesBackground() {
  useEffect(() => {
    // handle for clearing the interval on unmount
    let trimInterval: NodeJS.Timeout | undefined;

    loadParticles().then(() => {
      (window as any).particlesJS('particles-js', {
        background: { color: '#121212' },

        particles: {
          number: { value: 60, density: { enable: true, area: 900 } },
          color:  { value: '#18cb96' },
          shape:  { type: 'circle' },
          opacity:{ value: 0.35 },
          size:   { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 160,
            color: '#18cb96',
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 1.2, out_mode: 'out' },
        },

        interactivity: {
          detect_on: 'window',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize:  true,
          },
          modes: {
            grab:  { distance: 180, line_linked: { opacity: 0.45 } },
            push:  { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });

      /* -------------------------------------------------
         Trim logic: every 30 s pop ONE particle
         until total ≤ 100
      --------------------------------------------------*/
      const dom = (window as any).pJSDom?.[0];
      if (dom) {
        trimInterval = setInterval(() => {
          const arr = dom.pJS.particles.array;
          if (arr.length > 100) arr.pop();
        }, 30_000); // 30 000 ms = 30 s
      }
    });

    /* Clean up on unmount */
    return () => {
      document.querySelector('#particles-js > canvas')?.remove();
      if (trimInterval) clearInterval(trimInterval);
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}





