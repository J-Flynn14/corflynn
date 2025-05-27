import './globals.css';
import type { ReactNode } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';
import ScrollReset from '../components/ScrollReset';

export const metadata = {
  title: 'CorFlynn Automations — AI-Powered Recruitment',
  description:
    'Automate candidate matching, CV validation and meeting booking with intelligent agents.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* dynamic background */}
        <ParticlesBackground />

        {/* force scroll to top on every load */}
        <ScrollReset />

        {/* site content */}
        {children}
      </body>
    </html>
  );
}
