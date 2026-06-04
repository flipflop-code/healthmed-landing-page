/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';

export default function FAQ() {
  const faqs = [
    {
      question: 'Who can use HealthMed?',
      answer: 'HealthMed is built for hospitals, multi-specialty clinics, diagnostic laboratories, digital pharmacies, and custom healthcare providers who want to unify their end-to-end clinical and administrative workflows.',
    },
    {
      question: 'Does HealthMed support multi-location management?',
      answer: 'Yes, HealthMed provides advanced multi-location, multi-tenant databases allowing group hospitals and chain clinics to synchronize patient records, billing data and inventory across different geographical sites.',
    },
    {
      question: 'Is HealthMed cloud-based?',
      answer: 'Absolutely. HealthMed is built on high-availability cloud infrastructure, ensuring 99.9% uptime with end-to-end automatic daily updates and robust compliance guarantees.',
    },
    {
      question: 'Can HealthMed integrate with third-party systems?',
      answer: 'Yes, we provide fully-developed secure REST APIs and HL7/FHIR integration capabilities to allow easy synchronization with existing healthcare hardware, laboratories, and insurance frameworks.',
    },
    {
      question: 'Does HealthMed support EMR/EHR workflows?',
      answer: 'Yes, EMR/EHR clinical charts, prescription tracking, and historical patient healthcare trends are natively integrated into our primary clinical interface module.',
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className="bg-brand-bg py-20 md:py-28 border-b border-brand-gray-100 overflow-hidden" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings matching the image */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <Badge variant="dark" id="faq-badge">
              FAQ
            </Badge>
          </div>
          <Heading level={2} id="faq-heading" className="text-brand-charcoal">
            <span className="italic font-normal">Answers to your</span> most common concerns
          </Heading>
        </div>

        {/* Dynamic Accordion flat list with thin dividers as shown in reference */}
        <div className="border-t border-gray-200 max-w-3xl mx-auto" id="faq-accordion-container">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="border-b border-gray-200 overflow-hidden"
                id={`faq-item-${idx}`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left py-6 flex items-center justify-between gap-4 font-sans font-medium text-body-lg text-brand-charcoal hover:text-brand-blue-accent transition-colors focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <span className="tracking-tight">{faq.question}</span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue-accent hover:bg-brand-blue-accent-hover flex items-center justify-center text-white shadow-sm transition-colors duration-200" id={`faq-indicator-${idx}`}>
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-white stroke-[2.5]" id={`faq-icon-minus-${idx}`} />
                    ) : (
                      <Plus className="h-4 w-4 text-white stroke-[2.5]" id={`faq-icon-plus-${idx}`} />
                    )}
                  </div>
                </button>

                {/* Smooth Accordion Body transition */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      id={`faq-body-${idx}`}
                    >
                      <div className="pb-6 text-brand-slate text-body leading-relaxed font-sans max-w-2xl bg-transparent">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
