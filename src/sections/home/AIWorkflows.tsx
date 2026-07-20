/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Heading } from '../../components/ui/Heading';

export default function AIWorkflows() {
  const points = [
    'Smart Appointment Optimization',
    'Resource Utilization Analytics',
    'Real-Time Performance Monitoring',
  ];

  return (
    <section className="bg-[#FAF9F6] py-24 md:py-32 border-b border-brand-gray-200 overflow-hidden" id="ai-workflows">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual AI Graphic Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 flex items-center justify-center p-2"
            id="ai-graphic-block"
          >
            {/* White card container representing the radiology suite visualization */}
            <div className="relative w-full max-w-[440px] aspect-square bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-brand-gray-100 flex items-center justify-center p-8 overflow-hidden z-10">
              
              {/* Concentric Circles Background Pattern */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                <div className="w-[320px] h-[320px] rounded-full border border-brand-gray-100/40 flex items-center justify-center">
                  <div className="w-[240px] h-[240px] rounded-full border border-brand-gray-100/60 flex items-center justify-center">
                    <div className="w-[160px] h-[160px] rounded-full border border-brand-gray-100/80 flex items-center justify-center"></div>
                  </div>
                </div>
              </div>

              {/* Central Premium Squircle Hub */}
              <div className="relative z-10 p-2 bg-gradient-to-b from-brand-blue-50/10 to-brand-blue-100/20 rounded-[44px] border border-brand-blue-100/30">
                <div className="p-1 bg-white rounded-[38px] shadow-[0_12px_40px_rgba(0,102,255,0.12)]">
                  <div className="w-[105px] h-[105px] rounded-[32px] bg-[#0066FF] flex items-center justify-center shadow-[inset_0_2px_6px_rgba(255,255,255,0.2)]">
                    {/* Custom high-fidelity Sparkles mirroring reference image */}
                    <svg className="h-[46px] w-[46px] text-white fill-current" viewBox="0 0 24 24" id="central-sparkle-svg">
                      {/* Left/Main Sparkle */}
                      <path d="M9.5 3c0 3.59-2.91 6.5-6.5 6.5 3.59 0 6.5 2.91 6.5 6.5 0-3.59 2.91-6.5 6.5-6.5-3.59-0-6.5-2.91-6.5-6.5z" />
                      {/* Top Right Sparkle */}
                      <path d="M17.5 6.5c0 1.93-1.57 3.5-3.5 3.5 1.93 0 3.5 1.57 3.5 3.5 0-1.93 1.57-3.5 3.5-3.5-1.93 0-3.5-1.57-3.5-3.5z" />
                      {/* Bottom Right Sparkle */}
                      <path d="M15.5 16.5c0 1.38-1.12 2.5-2.5 2.5 1.38 0 2.5 1.12 2.5 2.5 0-1.38 1.12-2.5 2.5-2.5-1.38 0-2.5-1.12-2.5-2.5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1 (Top Right): Analysis Active */}
              <motion.div
                initial={{ opacity: 0, y: 15, x: 10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="absolute top-12 right-[-10px] md:right-3 bg-white rounded-2xl py-3 px-4.5 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-brand-gray-100 flex items-center gap-2.5 z-20 cursor-default select-none rotate-[4deg]"
                id="floating-badge-top"
              >
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
                </span>
                <span className="text-brand-black">
                  Analysis Active: Radiology Suite
                </span>
              </motion.div>

              {/* Floating Badge 2 (Bottom Left): Processing MRI Data */}
              <motion.div
                initial={{ opacity: 0, y: -15, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="absolute bottom-12 left-[-10px] md:left-3 bg-white rounded-2xl py-3 px-4.5 shadow-[0_12px_36px_rgba(0,0,0,0.06)] border border-brand-gray-100 flex items-center gap-2.5 z-20 cursor-default select-none rotate-[-2deg]"
                id="floating-badge-bottom"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-blue-50">
                  <svg className="h-3 w-3 text-[#0066FF] stroke-current stroke-[2.5]" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                <span className="text-brand-black">
                  Processing MRI Data...
                </span>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: AI-focused check list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-1 lg:col-span-6 flex flex-col space-y-10"
            id="ai-content-block"
          >
            {/* Pill Badge */}
            <div className="flex">
              <span className="badge-custom-dark select-none" id="ai-pill-tag">
                AI-Powered Operations
              </span>
            </div>

              <Heading
              level={3}
              id="hero-heading"
              className="hero-title "
            >
              <span className="italic block">
                Smarter Healthcare
              </span>
              Workflows with AI.
            </Heading>

            {/* Sub description */}
            <p className="text-brand-gray-800 brand-text-3xl max-w-lg" id="ai-paragraph">
              HealthMed leverages intelligent automation and AI-powered insights to help healthcare organizations optimize workflows, improve resource planning, and reduce operational inefficiencies.
            </p>

            {/* Point listings checkmarks */}
            <div className="flex flex-col space-y-8 pt-2" id="ai-list">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-brand-black" id={`ai-point-${index}`}>
                  <div className="text-[#0066FF] flex-shrink-0" id={`ai-check-icon-${index}`}>
                    <svg className="w-5 h-5 fill-current text-[#0066FF]" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M9 12l2 2 4-4"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-brand-gray-750 brand-text-xl-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
