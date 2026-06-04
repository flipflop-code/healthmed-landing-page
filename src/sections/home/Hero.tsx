/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { Heading } from '../../components/ui/Heading';
import { Button } from '../../components/ui/Button';
// @ts-expect-error - image asset type declaration may be missing
import heroSurgeonsImg from '../../assets/images/hero.png';

export default function Hero() {
  const stats = [
    { value: '1m+', label: 'Appointments Managed' },
    { value: '15M+', label: 'Patient Interactions' },
    { value: '120+', label: 'Healthcare Organizations' },
    { value: '99.9%', label: 'Platform Uptime' },
  ];

  return (
    <section className="bg-brand-bg pt-20 pb-28 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Accent Label - Plain text centering as shown in the reference */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-body-sm md:text-lg font-sans font-semibold text-brand-blue text-center"
            id="hero-badge"
          >
            AI-Powered Healthcare Infrastructure
          </motion.div>
        </div>

        {/* Dynamic Display Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading
              level={1}
              id="hero-heading"
              className="hero-title text-center"
            >
              One Intelligent Platform for Modern <br />
              <span className="italic font-normal block mt-2 text-brand-charcoal">
                Healthcare Operations.
              </span>
            </Heading>
          </motion.div>

          {/* Subheading description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-brand-gray-700 text-body-lg max-w-2xl mx-auto leading-relaxed font-sans"
            id="hero-description"
          >
            HealthMed helps hospitals, clinics, and healthcare teams manage patient care, diagnostics, billing, pharmacy, and operations through one connected healthcare management system.
          </motion.p>
        </div>

        {/* Call to Actions CTA Buttons - Matches the exact neutral buttons in the layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
          id="hero-actions"
        >
          <Button
            href="#book-a-call"
            variant="secondary"
            id="hero-btn-book"
          >
            Book a Call
          </Button>
          <Button
            href="#learn-more"
            variant="outline"
            id="hero-btn-learn"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Hero Group Image Section with Stats Strip overlaid at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto  overflow-hidden shadow-xl  bg-white group"
          id="hero-image-block"
        >
          {/* Main surgery professionals photo */}
          <div className="aspect-[4/3] md:aspect-[16/10] w-full relative">
            <img
              src={heroSurgeonsImg}
              alt="Healthcare professionals team standing in modern clinical suite"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
            {/* Elegant dark overlay at bottom only to match reference */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/15 to-transparent"></div>
          </div>

          {/* Integrated Statistics Container holding figures */}
          <div className="absolute bottom-0 left-0 right-0 w-full" id="hero-stats-panel">
            <div className="max-w-6xl mx-auto px-6 py-6 md:py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 text-center text-white  md:divide-x md:divide-white/20">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col justify-center px-4">
                    <span className="text-4xl md:text-5xl font-serif text-white block tracking-tight font-medium" id={`hero-stat-value-${i}`}>
                      {stat.value}
                    </span>
                    <span className="text-white/80 text-body-xs font-sans tracking-wide mt-2 block leading-snug" id={`hero-stat-label-${i}`}>
                      {stat.label}
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
