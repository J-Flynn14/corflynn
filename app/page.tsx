'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  BriefcaseBusiness,
  FileWarning,
  Mail,
  CalendarClock,
  Linkedin,
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────────────────── */
/*  Data                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

const features = [
  {
    Icon: BriefcaseBusiness,
    title: 'AI-Powered Candidate Matching',
    desc: 'Instantly pair every candidate with the best-fit jobs in your database.',
  },
  {
    Icon: FileWarning,
    title: 'Form ↔ CV Cross-Check',
    desc: 'Flag inconsistencies automatically and draft alerts ready for approval.',
  },
  {
    Icon: Mail,
    title: 'Automatic Outreach Emails',
    desc: 'Generate personalised emails to prospects in seconds.',
  },
  {
    Icon: CalendarClock,
    title: 'Autonomous Meeting Booking',
    desc: 'AI books hiring-manager calls directly into your calendar—hands-free.',
  },
] as const;

const testimonials = [
  {
    quote:
      'CorFlynn Automations shaved hours off our weekly hiring workflow. The AI does 80 % of the grunt work so our team can focus on people.',
    name: 'Sam Rogers',
    role: 'Lead Recruiter · TalentLeap',
  },
  {
    quote:
      'We filled roles 55 % faster after switching to CorFlynn. It’s like having an extra recruiter working 24/7.',
    name: 'Aisha Khan',
    role: 'Head of Talent · TechNova',
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────── */
/*  Helpers                                                                 */
/* ────────────────────────────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page component                                                          */
/* ────────────────────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ───────── HERO ───────── */}
      <header className="bg-gradient-to-br from-corcyan to-cordenim text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mb-6 max-w-4xl text-4xl font-extrabold md:text-6xl"
          >
            Automate Recruitment with AI
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.15 }}
            className="mb-10 max-w-2xl text-lg md:text-2xl"
          >
            CorFlynn Automations matches candidates, validates data and books
            meetings—so your recruiters can hire&nbsp;faster than ever.
          </motion.p>

          <motion.a
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            href="tel:07383106388"
            className="rounded bg-corgreen px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-cormint focus:outline-none focus:ring-2 focus:ring-white"
          >
            Call Us Now • 07383 106 388
          </motion.a>
        </div>
      </header>

      <main>
        {/* ───────── FEATURE GRID ───────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          id="features"
          className="mx-auto max-w-5xl px-6 py-24"
        >
          <h2 className="mb-14 text-center text-3xl font-bold">
            Platform Features
          </h2>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {features.map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start space-x-5"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-corblue text-white">
                  <Icon size={26} />
                </span>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ───────── TESTIMONIALS ───────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="bg-gray-50 py-24"
          variants={fadeUp}
          id="testimonials"
        >
          <h2 className="mb-14 text-center text-3xl font-bold">
            What Users Are Saying
          </h2>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 px-6">
            {testimonials.map(({ quote, name, role }, idx) => (
              <motion.figure
                key={name}
                variants={fadeUp}
                transition={{ delay: idx * 0.1 }}
                className="rounded-lg bg-white p-8 shadow-sm"
              >
                <svg
                  aria-hidden
                  className="mb-4 h-8 w-8 text-cormint"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.17 9.58C5.61 9.58 4.38 10.81 4.38 12.37c0 1.55 1.24 2.79 2.79 2.79.85 0 1.61-.38 2.11-.98l1.56 1.56c-.98 1.14-2.44 1.86-4.07 1.86C3.01 17.6.8 15.39.8 12.37.8 9.34 3 7.13 6.02 7.13c.24 0 .48.02.71.06v2.39l.44.44zm11.37-2.45c.24 0 .48.02.71.06v2.39l.44.44c-.55-.6-1.31-.98-2.11-.98-1.54 0-2.79 1.23-2.79 2.79 0 1.55 1.24 2.79 2.79 2.79.85 0 1.61-.38 2.11-.98l1.56 1.56c-.98 1.14-2.44 1.86-4.07 1.86-3.02 0-5.23-2.21-5.23-5.23 0-3.02 2.21-5.23 5.23-5.23z" />
                </svg>
                <blockquote className="mb-4 text-gray-800">{`"${quote}"`}</blockquote>
                <figcaption className="text-sm font-medium text-gray-700">
                  {name} — {role}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </motion.section>

        {/* ───────── FINAL CTA ───────── */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="bg-corgreen py-20 text-center text-white"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Ready to Hire Two Times Faster?
          </h2>
          <p className="mb-10 text-lg">
            Start your free trial of CorFlynn Automations in minutes.
          </p>
          <a
            href="tel:07383106388"
            className="rounded bg-white px-10 py-4 font-semibold text-corgreen shadow-lg transition hover:bg-gray-100"
          >
            Call 07383 106 388
          </a>
        </motion.section>
      </main>

      {/* ───────── FOOTER ───────── */}
      <footer className="bg-gray-900 py-14 text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:justify-between">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold text-white">
              CorFlynn Automations
            </h3>
            <p className="mt-2 max-w-xs text-sm">
              AI-powered hiring solutions. Empowering recruiters to work smarter
              since 2025.
            </p>
          </div>

          {/* Column 2 (quick links) */}
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-white">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>

          {/* Column 3 (contact + socials) */}
          <div>
            <p id="contact" className="mb-3 text-sm">
              <strong>Call:</strong>{' '}
              <a
                href="tel:07383106388"
                className="hover:text-white underline-offset-2"
              >
                07383 106 388
              </a>
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-white"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-gray-500">
          © 2025 CorFlynn Automations. All rights reserved.
        </p>
      </footer>
    </>
  );
}
