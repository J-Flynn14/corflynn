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
    title: 'Smart Matching',
    desc: 'AI-driven candidate-job fit scoring to shortlist top talent instantly.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'CV Validation',
    desc: 'Automated resume parsing and verification for faster screening.',
    icon: FileWarning,
  },
  {
    title: 'Seamless Outreach',
    desc: 'Personalised email campaigns and follow-ups—on autopilot.',
    icon: Mail,
  },
  {
    title: 'Auto-Scheduled Interviews',
    desc: 'Calendar integrations that book interviews without lifting a finger.',
    icon: CalendarClock,
  },
];

const testimonials = [
  {
    quote: 'CorFlynn cut our time-to-hire in half!',
    author: 'Jane Doe, Talent Lead at Acme Corp',
    avatar: '/avatars/jane.jpg',
  },
  {
    quote: 'The AI matching is eerily accurate.',
    author: 'John Smith, Head of Recruiting at Beta Inc',
    avatar: '/avatars/john.jpg',
  },
];

export default function Home() {
  return (
    <>
      <header className="relative overflow-hidden py-20">
        <h1 className="text-5xl font-extrabold text-center">
          Welcome to CorFlynn
        </h1>
        <p className="mt-4 text-lg text-center text-gray-300">
          Automate recruitment workflows with AI-powered agents.
        </p>
      </header>

      <main>
        {/* Features Section */}
        <section className="py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6">
          {features.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="flex flex-col items-start">
              <Icon className="h-8 w-8 mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{desc}</p>
            </div>
          ))}
        </section>

        {/* Testimonials Section */}
        <motion.section
          className="bg-gray-800 py-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
            {testimonials.map(({ quote, author, avatar }) => (
              <div key={author} className="flex flex-col items-center text-center">
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt={author}
                  className="rounded-full mb-4"
                />
                <p className="italic text-gray-200 mb-2">“{quote}”</p>
                <p className="text-gray-300 text-sm">{author}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Call-to-Action Section */}
        <section className="py-24 text-center px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Ready to streamline your hiring?
          </h2>
          <button className="px-8 py-4 rounded-full bg-green-600 hover:bg-green-700 transition">
            Get Started
          </button>
        </section>
      </main>

      <footer className="py-12 px-6">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://linkedin.com">
            <Linkedin className="h-6 w-6 hover:text-gray-300 transition" />
          </a>
          {/* add other social icons here */}
        </div>
        <p className="mt-10 text-center text-xs text-gray-300">
          © 2025 CorFlynn Automations. All rights reserved.
        </p>
      </footer>
    </>
  );
}

