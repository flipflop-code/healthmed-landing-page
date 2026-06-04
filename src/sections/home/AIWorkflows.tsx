/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';

export default function AIWorkflows() {
  const points = [
    'Smart Appointment Optimization',
    'Resource Utilization Analytics',
    'Real-Time Performance Monitoring',
  ];

  return (
    <section className="bg-white py-24 border-b border-brand-gray-200" id="ai-workflows">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Polished Web-Rendered CSS AI Workflows Graphics */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center p-4"
            id="ai-graphic-block"
          >
            {/* White card container representing the radiology suite visualization */}
            <div className="relative w-full max-w-md aspect-square bg-card-custom rounded-card-lg overflow-hidden flex items-center justify-center p-8">
              
              {/* Central Radar Circles wave pattern */}
              <div className="absolute inset-x-0 inset-y-0 flex items-center justify-center pointer-events-none select-none">
                <div className="workflow-outer-ring"></div>
                <div className="workflow-inner-ring animate-pulse">
                  <div className="workflow-core-ring"></div>
                </div>
              </div>

              {/* Central Glowing Sparkle Icon Node */}
              <div className="relative z-10 w-28 h-28 rounded-2xl bg-brand-blue-500 flex items-center justify-center shadow-xl border-2 border-white/50 overflow-hidden group">
                {/* Embedded pulse sparkles */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-700 to-brand-blue-400"></div>
                <Sparkles className="h-10 w-10 text-white relative z-10 animate-bounce-subtle" />
              </div>

              {/* Floating Badge 1 (Top Right): Analysis Active */}
              <div className="absolute top-8 right-4 md:right-8 bg-white rounded-full py-2.5 px-4 shadow-lg border border-brand-gray-200 flex items-center gap-2 z-20">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-body-xs font-semibold text-brand-gray-800 font-mono tracking-tight leading-none">
                  Analysis Active: Radiology Suite
                </span>
              </div>

              {/* Floating Badge 2 (Bottom Left): Processing MRI Data */}
              <div className="absolute bottom-8 left-4 md:left-8 bg-white rounded-full py-2.5 px-4 shadow-lg border border-brand-gray-200 flex items-center gap-2 z-20">
                <RefreshCw className="h-3 w-3 text-brand-blue-500 animate-spin" />
                <span className="text-body-xs font-semibold text-brand-gray-800 font-mono tracking-tight leading-none">
                  Processing MRI Data...
                </span>
              </div>

            </div>
          </motion.div>

          {/* Right Column: AI-focused check list */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6"
            id="ai-content-block"
          >
            {/* Pill Badge */}
            <div className="flex">
              <Badge variant="dark">
                AI-Powered Operations
              </Badge>
            </div>

            {/* Display Headings */}
            <Heading level={2} className="text-brand-black">
              Smarter Healthcare Workflows <br />
              <span className="italic font-normal text-brand-blue-500">with AI</span>
            </Heading>

            {/* Sub description */}
            <p className="text-brand-gray-600 text-sm md:text-base leading-relaxed">
              HealthMed leverages intelligent automation and AI-powered insights to help healthcare organizations optimize workflows, improve resource planning, and reduce operational inefficiencies.
            </p>

            {/* Point listings checkmarks */}
            <div className="flex flex-col space-y-3.5 pt-2" id="ai-list">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3 text-sm font-semibold text-brand-black" id={`ai-point-${index}`}>
                  <CheckCircle2 className="h-5 w-5 text-brand-blue-500 flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
