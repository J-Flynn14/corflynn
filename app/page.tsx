'use client';

import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import HeroTitle from '@/components/HeroTitle';

import {
  Handshake,
  Bot,
  Send,
  Megaphone,
  PhoneCall,
  CornerDownRight,
  Linkedin,
} from 'lucide-react';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';

import botAnimation from '@/public/bot_animation.json';

/* ------------------------------------------------------------------ */
/*  ANIMATED WRAPPER                                                  */
/* ------------------------------------------------------------------ */
function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, delay }}
    >
      {children}
    </motion.section>
  );
}

/* ------------------------------------------------------------------ */
/*  DATA ARRAYS                                                       */
/* ------------------------------------------------------------------ */
const recruitmentTools = [
  {
    title: 'Automatic candidate–job matching',
    desc: 'AI-driven fit scoring to shortlist top talent instantly.',
    icon: Handshake,
  },
  {
    title: 'Recruiter agent',
    desc: 'Ask an agent to find candidates with specific skills.',
    icon: Bot,
  },
];

const outreachTools = [
  {
    title: 'Candidate outreach',
    desc: 'Personalised follow-ups that gather screening info.',
    icon: Send,
  },
  {
    title: 'Client outreach campaigns',
    desc: 'Scrape job ads then match your candidates.',
    icon: Megaphone,
  },
];

const otherTools = [
  {
    title: 'Personalised Voice agent',
    desc: 'Records information and answers phone calls in real time.',
    icon: PhoneCall,
  },
  {
    title: 'even more coming soon!',
    desc: '',
    icon: CornerDownRight,
  },
];

const howItWorksSteps = [
  {
    title: 'AI-powered candidate profiling',
    text:
      'Every new CV is parsed for skills, achievements, location and salary expectations, turning unstructured résumés into rich, searchable talent profiles.',
  },
  {
    title: 'Instant vacancy matching',
    text:
      'As soon as a job hits your CRM, a semantic query ranks best-fit candidates in milliseconds, so recruiters act first.',
  },
  {
    title: 'Smart outreach & screening',
    text:
      'Personalised email sequences go out automatically, offering the role and collecting key screening answers in-thread.',
  },
  {
    title: 'Automated client lead generation',
    text:
      'Weekly we scan major job boards for fresh vacancies in your niche, match them to your talent pool and pitch your services to hiring managers.',
  },
];

const faqs = [
  {
    q: 'How does CorFlynn minimise algorithmic bias in candidate matching?',
    a:
      'Our extraction pipeline only uses job-relevant factors—never protected attributes—and is audited regularly.',
  },
  {
    q: 'Is the platform GDPR-compliant and how is candidate data protected?',
    a:
      'Yes. Data stays in EU data-centres, encrypted in transit and at rest, with seamless consent and deletion workflows.',
  },
  {
    q: 'Can CorFlynn integrate with my existing ATS or CRM?',
    a:
      'Absolutely. CorFlynn runs quietly in the background and exports every profile, note and status update to your ATS/CRM in real time.',
  },
  {
    q: 'What ROI can I expect and how quickly?',
    a:
      'Most agencies see value on day one: the system resurfaces dormant candidates and matches them to open roles—often yielding placements within 24 h.',
  },
  {
    q: 'Do I own the software and can I resell it?',
    a:
      'Your licence grants unlimited internal use, but all intellectual property stays with CorFlynn—no resale, sublicensing or white-labelling.',
  },
  {
    q: 'How do automated email sequences stay compliant and maintain deliverability?',
    a:
      'Custom sending domains, warm-up plans, throttling and opt-out links keep bounce rates low and meet anti-spam regulations.',
  },
];

const testimonials = [
  'Through internal adoption, our systems have saved a recruitment company £95,000+ per year by reducing their workforce and optimising their hiring process.',
];

/* ------------------------------------------------------------------ */
/*  PAGE                                                              */
/* ------------------------------------------------------------------ */
export default function Home() {
  return (
    <>
      {/* ------------------------- HERO ------------------------- */}
      <AnimatedSection delay={0.15}>
        <header className="relative overflow-hidden py-28 text-center">
          <HeroTitle>Welcome to CorFlynn</HeroTitle>
          <HeroTitle
            as="p"
            size="small"
            className="mt-4 text-gray-300 leading-snug"
          >
            AI-powered automations for any business
          </HeroTitle>
        </header>
      </AnimatedSection>

      <main className="space-y-60">
        {/* ---------------------- BENEFITS ---------------------- */}
        <AnimatedSection delay={0.25}>
          <section id="benefits" className="px-6 pt-12">
            <h2 className="text-center text-3xl font-bold">Benefits</h2>
            <div className="mx-auto mt-2 mb-12 h-1 w-24 rounded bg-[#00b9a9] opacity-80 md:mb-16" />

            <div
              className="relative flex flex-col md:flex-row md:gap-12
                         before:hidden md:before:block
                         md:before:absolute md:before:left-1/2 md:before:top-0
                         md:before:h-full md:before:w-px md:before:bg-gray-700"
            >
              {/* TEXT COLUMN */}
              <div className="flex w-full items-start justify-center p-8 md:w-1/2 md:pr-12">
                <div className="max-w-md space-y-8">
                  {/* Recruitment tools */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-[#18cb96]">
                      Recruitment tools
                    </h3>
                    {recruitmentTools.map(({ title, desc, icon: Icon }) => (
                      <div key={title} className="mb-6 flex items-start">
                        <Icon className="mr-3 mt-1 h-6 w-6 text-[#00b9a9]" />
                        <div>
                          <h4 className="text-xl font-semibold">{title}</h4>
                          <p className="text-gray-300">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Outreach tools */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-[#18cb96]">
                      Outreach tools
                    </h3>
                    {outreachTools.map(({ title, desc, icon: Icon }) => (
                      <div key={title} className="mb-6 flex items-start">
                        <Icon className="mr-3 mt-1 h-6 w-6 text-[#00b9a9]" />
                        <div>
                          <h4 className="text-xl font-semibold">{title}</h4>
                          <p className="text-gray-300">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Other tools */}
                  <div>
                    <h3 className="mb-4 text-lg font-semibold text-[#18cb96]">
                      Other tools
                    </h3>
                    {otherTools.map(({ title, desc, icon: Icon }) => (
                      <div key={title} className="mb-6 flex items-start">
                        <Icon className="mr-3 mt-1 h-6 w-6 text-[#00b9a9]" />
                        <div>
                          <h4 className="text-xl font-semibold">{title}</h4>
                          <p className="text-gray-300">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* IMAGE COLUMN */}
              <div className="flex w-full items-center justify-center p-8 md:w-1/2 md:pl-12">
                <Image
                  src="/business.jpg"
                  alt="Business illustration"
                  width={500}
                  height={400}
                  className="max-w-full rounded-lg object-contain shadow-md"
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* ------------------- HOW IT WORKS --------------------- */}
        <AnimatedSection delay={0.35}>
          <section id="how-it-works" className="px-6">
            <h2 className="text-center text-3xl font-bold">
              How our recruitment pipeline works
            </h2>
            <div className="mx-auto mt-2 mb-12 h-1 w-24 rounded bg-[#00b9a9] opacity-80 md:mb-16" />

            {/* 25 % / 75 % SPLIT */}
            <div
              className="relative flex flex-col md:flex-row-reverse md:gap-12
                         before:hidden md:before:block
                         md:before:absolute md:before:left-1/4 md:before:top-0
                         md:before:h-full md:before:w-px md:before:bg-gray-700"
            >
              {/* TEXT COLUMN – 75 % */}
              <div className="flex w-full items-start justify-center p-8 md:w-3/4 md:pl-12">
                <div>
                  {howItWorksSteps.map((step, i) => (
                    <div key={i} className="mb-6">
                      <p className="mb-2 text-xl font-semibold">
                        Step {i + 1}:{' '}
                        <span className="text-[#18cb96]">{step.title}</span>
                      </p>
                      <p className="text-gray-300">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ANIMATION COLUMN – 25 % */}
              <div className="flex w-full items-center justify-center p-8 md:w-1/4 md:pr-12">
                <Lottie
                  animationData={botAnimation}
                  loop
                  style={{ height: 350, width: '100%' }}
                />
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* --------------- TESTIMONIALS ------------------------- */}
        <AnimatedSection delay={0.45}>
          <motion.section
            id="testimonials"
            className="px-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-center text-3xl font-bold">
              How our products have helped companies so far
            </h2>

            <div className="mx-auto max-w-4xl py-6 px-6 text-center">
              {testimonials.map((quote, idx) => (
                <p key={idx} className="text-xl text-gray-200">
                  {quote}
                </p>
              ))}
            </div>
          </motion.section>
        </AnimatedSection>

        {/* ------------------------- CTA ------------------------ */}
        <AnimatedSection delay={0.55}>
          <section id="cta" className="px-6 text-center">
            <HeroTitle as="h2">
              Ready to streamline your business?
            </HeroTitle>
            <a
              href="https://calendly.com/tom-corflynn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-gradient mt-10">Get Started</button>
            </a>
          </section>
        </AnimatedSection>

        {/* ------------------------- FAQ ------------------------ */}
        <AnimatedSection delay={0.65}>
          <section id="faq" className="px-6">
            <h2 className="text-center text-3xl font-bold">FAQ</h2>
            <div className="mx-auto mt-2 mb-12 h-1 w-24 rounded bg-[#00b9a9] opacity-80" />

            <Accordion
              type="single"
              collapsible
              className="mx-auto max-w-2xl"
            >
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="flex w-full items-center justify-between py-4 font-medium transition-all hover:no-underline focus:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="overflow-hidden text-sm text-[#18cb96] data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </AnimatedSection>
      </main>

      {/* ------------------------ FOOTER ----------------------- */}
      <footer className="px-6 py-12">
        <div className="mb-8 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/thomas-flannery-55378a363/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 transition hover:text-[#00b9a9]" />
          </a>
        </div>
        <p className="mt-10 text-center text-xs text-gray-400">
          © 2025 CorFlynn Automations. All rights reserved.
        </p>
      </footer>
    </>
  );
}

















