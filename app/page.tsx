'use client';

import Image from 'next/image';
import {
  Handshake,
  Send,
  Megaphone,
  Bot,
  Linkedin,
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from '../components/ui/resizable';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';

/* ------------------------------------------------------------------ */
/*  FAST SCROLL-FADE WRAPPER                                          */
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
/*  DATA                                                              */
/* ------------------------------------------------------------------ */

const features = [
  {
    title: 'Automatic candidate–job matching',
    desc: 'AI-driven fit scoring to shortlist top talent instantly.',
    icon: Handshake,
  },
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
  {
    title: 'Recruiter agent',
    desc: 'Ask an agent to find candidates with specific skills.',
    icon: Bot,
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
      'Weekly, we scan major job boards for fresh vacancies in your niche, match them to your talent pool and pitch your services to hiring managers.',
  },
];

const faqs = [
  {
    q: 'How does CorFlynn minimise algorithmic bias in candidate matching?',
    a:
      'Our extraction pipeline follows strict guidelines that consider only qualifications, experience and other job-relevant factors—never gender, age, race or similar attributes. We layer this with scheduled fairness audits and human override checkpoints to ensure equitable results.',
  },
  {
    q: 'Is the platform GDPR-compliant and how is candidate data protected?',
    a:
      'Yes. The entire system is deployed on a dedicated domain and server that only your organisation can access after setup. CorFlynn engineers are granted entry solely for maintenance. Data stays in EU data-centres, encrypted in transit and at rest, with consent and deletion workflows meeting GDPR requirements.',
  },
  {
    q: 'Can CorFlynn integrate with my existing ATS or CRM?',
    a:
      'Absolutely. While CorFlynn runs quietly in the background, every profile, note and status update is exported to your ATS/CRM in real time via API and webhooks—so recruiters see native records inside the tools they already use.',
  },
  {
    q: 'What ROI can I expect and how quickly?',
    a:
      'Most agencies see value the very first day: the system re-surfaces dormant candidates and matches them to open roles, often yielding placements within 24 hours of go-live. Over the first month, time-to-fill typically drops 50-70 %.',
  },
  {
    q: 'Do I own the software and can I resell it?',
    a:
      'Your licence grants unlimited internal use, but all intellectual property stays with CorFlynn. Resale, sublicensing or white-labelling is prohibited.',
  },
  {
    q: 'How do automated email sequences maintain deliverability and compliance?',
    a:
      'We use custom sending domains, warm-up plans, throttling and opt-out links to keep bounce rates low and stay compliant with anti-spam regulations.',
  },
];

const testimonials = [
  'Through internal adoption, our systems have saved a recruitment company £95 k+ per year by reducing their workforce and optimising their hiring process.',
];
import Lottie from 'lottie-react';
import botAnimation from '@/public/bot_animation.json';
/* ------------------------------------------------------------------ */
/*  PAGE COMPONENT                                                    */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      {/* ------------------------- HERO ------------------------- */}
      <AnimatedSection delay={0}>
        <header className="relative overflow-hidden py-20 text-center">
          <h1 className="text-5xl font-extrabold">Welcome to CorFlynn</h1>
          <p className="mt-4 text-lg text-gray-300">
            Automate recruitment workflows with AI-powered agents.
          </p>
        </header>
      </AnimatedSection>

      <main>
        {/* ---------------------- BENEFITS ---------------------- */}
        <AnimatedSection delay={0.05}>
          <section id="benefits" className="px-6 py-24">
            <h2 className="mb-8 text-center text-3xl font-bold">Benefits</h2>
            <div className="mx-auto mb-12 h-1 w-16 rounded bg-[#00b9a9] opacity-80 md:mb-16" />

            <ResizablePanelGroup direction="horizontal">
              {/* left panel centred content */}
              <ResizablePanel className="p-4">
                <div className="mx-auto max-w-md">
                  {features.map(({ title, desc, icon: Icon }) => (
                    <div key={title} className="mb-6 flex items-start">
                      <Icon className="mr-3 mt-1 h-6 w-6 text-[#00b9a9]" />
                      <div>
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <p className="text-gray-300">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ResizablePanel>

              <ResizableHandle withHandle />

              {/* right panel image */}
              <ResizablePanel className="flex items-center justify-center p-4">
                <Image
                  src="/business.jpg"
                  alt="Business illustration"
                  width={500}
                  height={400}
                  className="object-contain rounded-lg shadow-md"
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </section>
        </AnimatedSection>

        {/* ------------------- HOW IT WORKS --------------------- */}
        <AnimatedSection delay={0.1}>
          <section id="how-it-works" className="px-6 py-24">
            <h2 className="mb-8 text-center text-3xl font-bold">How it works</h2>
            <div className="mx-auto mb-12 h-1 w-16 rounded bg-[#00b9a9] opacity-80 md:mb-16" />

            <ResizablePanelGroup direction="horizontal">
              {/* Lottie animation */}
              <ResizablePanel className="flex items-center justify-center p-4">
                <Lottie
                  animationData={botAnimation}
                  loop
                  style={{ height: 350, width: '100%' }}
                />
              </ResizablePanel>

              <ResizableHandle withHandle />

              <ResizablePanel className="p-4">
                {howItWorksSteps.map((step, i) => (
                  <div key={i} className="mb-6">
                    <p className="mb-2 text-xl font-semibold">
                      Step {i + 1}:{' '}
                      <span className="text-[#18cb96]">{step.title}</span>
                    </p>
                    <p className="text-gray-300">{step.text}</p>
                  </div>
                ))}
              </ResizablePanel>
            </ResizablePanelGroup>
          </section>
        </AnimatedSection>

        {/* ------------------------- CTA ------------------------ */}
        <AnimatedSection delay={0.15}>
          <section id="cta" className="px-6 py-24 text-center">
            <h2 className="mb-6 text-4xl font-extrabold">
              Ready to streamline your hiring?
            </h2>
            <a
              href="https://calendly.com/tom-corflynn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="rounded-full bg-[#18cb96] px-8 py-4 font-semibold text-black transition hover:bg-[#00b9a9]">
                Get Started
              </button>
            </a>
          </section>
        </AnimatedSection>

        {/* ------------------- TESTIMONIALS --------------------- */}
        <AnimatedSection delay={0.2}>
          <motion.section
            id="testimonials"
            className="px-6 py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <h2 className="mb-12 text-center text-3xl font-bold">
              How our product has helped recruitment companies
            </h2>

            <div className="mx-auto max-w-4xl px-6 text-center">
              {testimonials.map((quote, idx) => (
                <p key={idx} className="mb-4 text-xl text-gray-200">
                  {quote}
                </p>
              ))}
            </div>
          </motion.section>
        </AnimatedSection>

        {/* ------------------------- FAQ ------------------------ */}
        <AnimatedSection delay={0.25}>
          <section id="faq" className="px-6 py-24">
            <h2 className="mb-8 text-center text-3xl font-bold">FAQ</h2>
            <div className="mx-auto mb-8 h-1 w-16 rounded bg-[#00b9a9] opacity-80" />

            <Accordion type="single" collapsible className="mx-auto max-w-2xl">
              {faqs.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0">
                  <AccordionTrigger
                    className="flex w-full items-center justify-between
                              py-4 font-medium transition-all           /* ⬅ keeps smoothness */
                              hover:no-underline focus:no-underline"
                  >
                    {item.q}
                  </AccordionTrigger>

                  {/* accent-coloured answer, animations preserved */}
                  <AccordionContent
                    className="overflow-hidden text-sm text-[#18cb96]
                              data-[state=closed]:animate-accordion-up
                              data-[state=open]:animate-accordion-down"
                  >
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
          <a href="https://linkedin.com" aria-label="LinkedIn">
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







