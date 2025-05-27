import './globals.css';
import type { ReactNode } from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

export const metadata = {
  title: 'CorFlynn Automations — AI-Powered Recruitment',
  description:
    'Automate candidate matching, CV validation and meeting booking with intelligent agents.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* relative so the fixed particles obey z-index */}
      <body className="relative">
        <ParticlesBackground />   {/* << NEW */}
        {children}
      </body>
    </html>
  );
}

