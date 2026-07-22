/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';
import { Badge } from '../../components/ui/Badge';

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
    <section className="bg-white py-24 md:py-32 border-b border-brand-gray-200" id="impact">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Headings */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center">
            <Badge variant="dark" id="impact-badge">
              Impact Created
            </Badge>
          </div>
          <h2 className="brand-text-7xl text-brand-black mt-6" id="impact-heading">
            <span className="italic">Delivering</span> Measurable Healthcare Impact
          </h2>
          <p className="mt-6 text-brand-gray-800 brand-text-3xl max-w-6xl mx-auto" id="impact-description">
            HealthMed helps healthcare organizations improve operational efficiency, reduce manual work, and accelerate patient workflows.
          </p>
        </div>

        {/* Modular Stat Panels - Clean minimalist grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="impact-grid">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-brand-gray-50 p-8 md:p-10 flex flex-col justify-center min-h-[160px] md:min-h-[180px]"
              id={`impact-card-${i}`}
            >
              <div className="flex flex-col space-y-3">
                {/* Visual Number Value */}
                <AnimatedCounter 
                  value={card.value} 
                  className="brand-text-6xl text-brand-black select-none" 
                  id={`impact-stat-value-${i}`}
                />

                {/* Subtitle label explanation */}
                <span className="brand-text-2xl text-brand-gray-800">
                  {card.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
