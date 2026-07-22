/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { Badge } from '../../ui/Badge';
import { Heading } from '../../ui/Heading';
import { FAQItem } from '../../../data/faq';

export type { FAQItem };

export interface FAQProps {
  /** Optional badge text or ReactNode (defaults to "FAQ") */
  badge?: React.ReactNode;
  /** Main heading title text or ReactNode */
  title?: React.ReactNode;
  /** Optional subtitle or description text below title */
  description?: React.ReactNode;
  /** Array of FAQ items ({ question, answer }) */
  items: FAQItem[];
  /** HTML id for the root section element */
  id?: string;
  /** Additional CSS class names for the root section element */
  className?: string;
  /** Ref object attached to the section element */
  sectionRef?: React.RefObject<HTMLDivElement | null>;
  /** Optional CSS class names for the header container */
  headerClassName?: string;
  /** Optional HTML id for the header container */
  headerId?: string;
  /** Optional CSS class names or animation class for badge wrapper */
  badgeClassName?: string;
  /** Optional HTML id for badge */
  badgeId?: string;
  /** Optional CSS class names for heading */
  headingClassName?: string;
  /** Optional HTML id for heading */
  headingId?: string;
  /** Optional HTML id for accordion container */
  accordionId?: string;
  /** Optional class name for the accordion container */
  accordionClassName?: string;
  /** Optional class name for the item container */
  itemClassName?: string;
  /** Optional class name for the accordion button */
  buttonClassName?: string;
  /** Optional class name for the answer container */
  answerClassName?: string;
}

export const FAQ: React.FC<FAQProps> = ({
  badge = "FAQ",
  title = (
    <>
      <span className="italic font-normal">Answers to your</span> most common concerns
    </>
  ),
  description,
  items,
  id = "faq",
  className = "bg-brand-bg py-20 md:py-28 border-b border-brand-gray-100 overflow-hidden",
  sectionRef,
  headerClassName,
  headerId = "faq-header",
  badgeClassName,
  badgeId = "faq-badge",
  headingClassName = "text-brand-charcoal",
  headingId = "faq-heading",
  accordionId = "faq-accordion-container",
  accordionClassName = "max-w-3xl mx-auto",
  itemClassName = "border-b px-4 border-gray-400 overflow-hidden",
  buttonClassName = "w-full text-left pt-10 pb-4 flex items-center justify-between gap-4 brand-text-3xl hover:text-brand-blue-accent transition-colors focus:outline-none cursor-pointer",
  answerClassName = "pb-6 text-brand-slate brand-text-xl max-w-2xl bg-transparent",
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <section className={className} id={id} ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        {(badge || title || description) && (
          <div className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 ${headerClassName || ''}`} id={headerId}>
            {badge && (
              <div className={`flex justify-center mb-5 ${badgeClassName || ''}`}>
                <Badge variant="dark" id={badgeId}>
                  {badge}
                </Badge>
              </div>
            )}
            {title && (
              <Heading level={2} id={headingId} className={headingClassName}>
                {title}
              </Heading>
            )}
            {description && (
              <p className="mt-4 brand-text-xl text-brand-slate max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Dynamic Accordion flat list with thin dividers */}
        <div className={accordionClassName} id={accordionId}>
          {items.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className={itemClassName}
                id={`faq-item-${idx}`}
              >
                {/* Accordion header button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={buttonClassName}
                  aria-expanded={isOpen}
                  id={`faq-btn-${idx}`}
                >
                  <span id={`faq-q-text-${idx}`}>{faq.question}</span>
                  <div
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue-accent hover:bg-brand-blue-accent-hover flex items-center justify-center text-white shadow-sm transition-colors duration-200"
                    id={`faq-indicator-${idx}`}
                  >
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
                      <div className={answerClassName}>
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
};

export default FAQ;
