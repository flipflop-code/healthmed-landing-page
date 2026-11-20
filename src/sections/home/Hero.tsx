/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Heading } from '../../components/ui/Heading';
import { Button } from '../../components/ui/Button';
// @ts-expect-error - image asset type declaration may be missing
import hero4x3_480 from '../../assets/images/hero_image-4x3-480.webp';
// @ts-expect-error - image asset type declaration may be missing
import hero4x3_768 from '../../assets/images/hero_image-4x3-768.webp';
// @ts-expect-error - image asset type declaration may be missing
import hero16x10_960 from '../../assets/images/hero_image-16x10-960.webp';
// @ts-expect-error - image asset type declaration may be missing
import hero16x10_1200 from '../../assets/images/hero_image-16x10-1200.webp';
import { AnimatedCounter } from '../../components/common/AnimatedCounter';

interface CounterStatProps {
  key?: React.Key;
  value: string;
  label: string;
  id: string;
  labelId: string;
}

function CounterStat({ value, label, id, labelId }: CounterStatProps) {
  return (
    <div className="flex flex-col items-start text-left px-3 sm:px-6 md:px-10">
      <AnimatedCounter
        value={value}
        className="text-[20px] leading-tight sm:text-[28px] md:brand-text-5xl font-serif text-white block text-left"
        id={id}
      />
      <span className="text-white/85 text-[11px] sm:text-sm md:brand-text-xl mt-0.5 md:mt-2 block text-left leading-tight sm:leading-snug" id={labelId}>
        {label}
      </span>
    </div>
  );
}

export default function Hero() {
  const stats = [
    { value: '1m+', label: 'Appointments Managed' },
    { value: '15M+', label: 'Patient Interactions' },
    { value: '120+', label: 'Healthcare Organizations' },
    { value: '99.9%', label: 'Platform Uptime' },
  ];

  return (
    <section className="bg-brand-bg pt-10 pb-14 sm:pt-14 sm:pb-20 md:pt-20 md:pb-28 overflow-hidden" id="home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Accent Label - Plain text centering as shown in the reference */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="brand-text-3xl text-brand-blue text-center"
            id="hero-badge"
          >
            AI-Powered Healthcare Infrastructure
          </motion.div>
        </div>

        {/* Dynamic Display Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-8">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Heading
              level={1}
              id="hero-heading"
              className="hero-title text-center"
            >
              One Intelligent Platform for Modern <br className="hidden sm:inline" />
              <span className="italic block mt-1 sm:mt-2 text-brand-charcoal">
                Healthcare Operations.
              </span>
            </Heading>
          </motion.div>

          {/* Subheading description */}
          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 sm:mt-6 text-brand-gray-700 brand-text-3xl max-w-[1000px] mx-auto"
            id="hero-description"
          >
            HealthMed helps hospitals, clinics, and healthcare teams manage patient care, diagnostics, billing, pharmacy, and operations through one connected healthcare management system.
          </motion.p>
        </div>

        {/* Call to Actions CTA Buttons - Matches the exact neutral buttons in the layout */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-20"
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
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-6xl mx-auto overflow-hidden shadow-xl bg-white group"
          id="hero-image-block"
        >
          {/* Main surgery professionals photo */}
          <div className="aspect-[4/3] md:aspect-[16/10] w-full relative">
            <picture className="block w-full h-full">
              <source
                media="(max-width: 767px)"
                srcSet={`${hero4x3_480} 480w, ${hero4x3_768} 768w`}
                sizes="94vw"
                type="image/webp"
              />
              <img
                src={hero16x10_1200}
                srcSet={`${hero16x10_960} 960w, ${hero16x10_1200} 1200w`}
                sizes="(max-width: 1280px) 92vw, 1152px"
                alt="Healthcare professionals team standing in modern clinical suite"
                width={1200}
                height={750}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </picture>
            {/* Bottom gradient overlay ensuring crisp contrast for overlaid white stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent md:from-black/25 md:via-black/15"></div>
          </div>

          {/* Integrated Statistics Container holding figures */}
          <div className="absolute bottom-0 left-0 right-0 w-full" id="hero-stats-panel">
            <div className="max-w-6xl mx-auto px-2 sm:px-4 py-3 sm:py-5 md:py-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-2.5 gap-x-1 sm:gap-y-4 md:gap-y-0 text-left text-white md:divide-x md:divide-brand-gray-400">
                {stats.map((stat, i) => (
                  <CounterStat
                    key={i}
                    value={stat.value}
                    label={stat.label}
                    id={`hero-stat-value-${i}`}
                    labelId={`hero-stat-label-${i}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
