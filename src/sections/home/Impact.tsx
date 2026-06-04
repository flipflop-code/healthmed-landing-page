/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Impact() {
  const cards = [
    { value: '65%', label: 'Faster Patient Registration' },
    { value: '80%', label: 'Less Manual Documentation' },
    { value: '50%', label: 'Improved Operational Efficiency' },
    { value: '3X', label: 'Faster Medical Record Access' },
    { value: '40%', label: 'Reduced Administrative Work' },
    { value: '35%', label: 'Faster Billing Workflow' },
  ];

  return (
    <section className="bg-white py-24 border-b border-brand-gray-200" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headings */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <span className="px-3.5 py-1.5 bg-brand-black text-white text-xs font-semibold rounded uppercase tracking-wider select-none">
              Impact Created
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-black leading-tight tracking-tight">
            Delivering Measurable Healthcare Impact
          </h2>
          <p className="mt-4 text-brand-gray-600 text-body-lg leading-relaxed">
            HealthMed helps healthcare organizations improve operational efficiency, reduce manual work, and accelerate patient workflows.
          </p>
        </div>

        {/* Modular Stat Panels Masonry-style / Clean Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="impact-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-brand-gray-50 border border-brand-gray-200 rounded-2xl p-8 hover:bg-brand-blue-50/30 hover:border-brand-blue-200 transition-all duration-300 cursor-pointer"
              id={`impact-card-${i}`}
            >
              <div className="flex flex-col space-y-2">
                {/* Visual Number Value */}
                <span className="text-4xl md:text-5xl font-serif tracking-tight text-brand-blue-500 font-bold">
                  {card.value}
                </span>

                {/* Subtitle label explanation */}
                <span className="text-sm font-semibold text-brand-gray-800 leading-tight">
                  {card.label}
                </span>
                
                {/* Technical support tagline for pixel perfect realism */}
                <span className="text-body-xs font-medium text-brand-gray-400 uppercase tracking-widest mt-1">
                  Verified Metric
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
