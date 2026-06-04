/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Shield, Globe, Cloud } from 'lucide-react';
import { Heading } from '../../components/ui/Heading';
import { Button } from '../../components/ui/Button';

export default function ModernizeCTA() {
  const complianceItems = [
    { label: 'HIPAA COMPLIANT', icon: <ShieldCheck className="h-5 w-5 text-white/90" strokeWidth={1.8} /> },
    { label: 'SOC2 TYPE II', icon: <Shield className="h-5 w-5 text-white/90" strokeWidth={1.8} /> },
    { label: 'GLOBAL SUPPORT', icon: <Globe className="h-5 w-5 text-white/90" strokeWidth={1.8} /> },
    { label: 'CLOUD NATIVE', icon: <Cloud className="h-5 w-5 text-white/90" strokeWidth={1.8} /> },
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
          className="relative bg-brand-blue-900 text-white rounded-3xl px-8 py-16 md:py-20 overflow-hidden shadow-2xl border border-white/5"
          id="modernize-cta-banner"
         >
          {/* Subtle glowing dark blue/cyan radial lights */}
          <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-sky-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-brand-blue-accent/10 rounded-full filter blur-[100px] pointer-events-none"></div>

          {/* Core Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Title display matching the exact styling with italics */}
            <Heading level={2} className="text-3xl sm:text-4xl md:text-[50px] text-white mb-6 max-w-3xl">
              Ready to modernize your <br />
              <span className="italic font-normal block mt-2 text-white">
                healthcare infrastructure?
              </span>
            </Heading>

            {/* Paragraph body subtitle */}
            <p className="text-slate-300 text-[15px] md:text-[16px] max-w-2xl mb-10 leading-relaxed font-sans">
              Deliver faster care and smarter operations through one connected healthcare ecosystem.
            </p>

            {/* Navigation buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16" id="cta-actions">
              <Button
                variant="primary"
                href="#contact"
                id="cta-btn-book"
              >
                Book a Call
              </Button>
              <Button
                variant="outline"
                href="#about"
                id="cta-btn-learn"
              >
                Learn More
              </Button>
            </div>

            {/* Compliance Shields bottom line inside banner */}
            <div className="w-full pt-10 border-t border-white/10" id="cta-compliance-grid">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center justify-center">
                {complianceItems.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-center text-center" id={`cta-compliance-item-${idx}`}>
                    <div className="mb-3 text-brand-blue flex items-center justify-center">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-sans font-bold text-slate-400 uppercase tracking-widest select-none">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
