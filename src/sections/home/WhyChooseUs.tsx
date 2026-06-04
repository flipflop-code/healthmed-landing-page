/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
// @ts-expect-error - image asset type declaration may be missing
import whyChooseUsDoctorImg from '../../assets/images/why_choose_us_doctor_1780580122593.png';

export default function WhyChooseUs() {
  const checkmarks = [
    'Centralized Records',
    'Multi Location Support',
    'Reduce Medical Errors',
    'Reduce Revenue Leakages',
    'Increase Patient throughput',
    'Compliance',
    'Reduce 45 % IT Infrastructure Cost',
  ];

  return (
    <section className="bg-brand-bg py-20 md:py-28 border-b border-brand-gray-100" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text and bullet listings (takes 7 columns in desktop for beautiful spacing) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col space-y-6 md:space-y-7"
            id="whychooseus-text-panel"
          >
            {/* Pill Badge */}
            <div className="flex">
              <Badge variant="dark" id="why-choose-us-badge">
                Why Choose Us?
              </Badge>
            </div>

             {/* Display Headings with custom serif italics */}
            <div className="space-y-3">
              <Heading level={2} className="text-brand-charcoal text-h2 font-sans font-normal">
                Why Healthcare Teams Choose <br />
                <span className="italic font-serif block mt-2 text-brand-charcoal">
                  HealthMed
                </span>
              </Heading>
            </div>

            {/* Paragraph body */}
            <p className="text-brand-slate text-body-lg leading-relaxed max-w-xl font-sans" id="whychooseus-descr">
              Built to improve operational efficiency, patient management, and healthcare coordination through connected workflows.
            </p>

            {/* List checklist items - 2 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4 md:pt-6" id="whychooseus-grid">
              {checkmarks.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-body font-sans text-brand-slate" id={`whychooseus-item-${idx}`}>
                  <BadgeCheck className="h-5 w-5 text-brand-blue flex-shrink-0" />
                  <span className="font-sans font-medium tracking-tight text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Exact Photographic Illustration representing neon shield clinical doctor (takes 5 columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
            id="whychooseus-graphic-panel"
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200/50 bg-white group">
              <img
                src={whyChooseUsDoctorImg}
                alt="Doctor wearing medical uniform holding glowing neon shield"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              {/* Overlay with matching soft lighting */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-black/25 via-transparent to-white/5"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

