import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'CorFlynn Automations — AI-Powered Recruitment',
  description:
    'Automate candidate matching, CV validation and meeting booking with intelligent agents.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
