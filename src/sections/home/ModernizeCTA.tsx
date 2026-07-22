/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, Shield, Globe, CloudUpload } from 'lucide-react';
import { Heading } from '../../components/ui/Heading';
import { Button } from '../../components/ui/Button';

export default function ModernizeCTA() {
  const complianceItems = [
    { label: 'HIPAA COMPLIANT', icon: <BadgeCheck className="h-6 w-6 text-slate-300" strokeWidth={1.6} /> },
    { label: 'SOC2 TYPE II', icon: <Shield className="h-6 w-6 text-slate-300" strokeWidth={1.6} /> },
    { label: 'GLOBAL SUPPORT', icon: <Globe className="h-6 w-6 text-slate-300" strokeWidth={1.6} /> },
    { label: 'CLOUD NATIVE', icon: <CloudUpload className="h-6 w-6 text-slate-300" strokeWidth={1.6} /> },
  ];

  return (
    <section className="bg-brand-bg py-16 md:py-24 border-b border-brand-gray-100 overflow-hidden" id="book-a-call">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark nested banner card framed inside the warm cream background */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-brand-blue-900 text-white py-16 md:py-20 overflow-hidden shadow-2xl border border-white/5"
          id="modernize-cta-banner"
         >
          {/* Subtle glowing dark blue/cyan radial lights */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-brand-blue-accent/10 rounded-full filter blur-[100px] pointer-events-none"></div>

          {/* Core Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Title display matching the exact styling with italics */}
            <Heading level={1} className="brand-text-7xl text-white mb-6 max-w-3xl">
              Ready to modernize your <br />
              <span className="italic block mt-2 text-white">
                healthcare infrastructure?
              </span>
            </Heading>

            {/* Paragraph body subtitle */}
            <p className="brand-text-3xl mb-10">
              Deliver faster care and smarter operations through one connected healthcare ecosystem.
            </p>

            {/* Navigation buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16" id="cta-actions">
              <Button
                variant="primary"
                href="/contact"
                id="cta-btn-book"
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                href="#about"
                id="cta-btn-learn" 
                className="text-white"
              >
                Learn More
              </Button>
            </div>

          </div>

          {/* Compliance Shields bottom line inside banner - Full Width Line */}
          <div className="relative z-10 w-full pt-16 border-t border-blue-700" id="cta-compliance-grid">
            <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
              {complianceItems.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center" id={`cta-compliance-item-${idx}`}>
                  <div className="mb-3 text-brand-blue flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 brand-text-xl uppercase select-none">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
