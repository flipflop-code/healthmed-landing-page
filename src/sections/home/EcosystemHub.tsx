/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Activity, Pill, Users } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';

export default function EcosystemHub() {
  return (
    <section className="bg-brand-bg py-20 md:py-28 border-b border-brand-gray-100 overflow-hidden" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Header & Badging matching the reference image */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <Badge variant="dark">
              Unified Healthcare Ecosystem
            </Badge>
          </div>
          <Heading level={2} id="ecosystem-heading" className="text-brand-charcoal">
            One Healthcare Management <br />
            <span className="italic font-normal block mt-2">Platform for Every Workflow</span>
          </Heading>
          <p className="mt-5 text-brand-slate text-body-lg max-w-2xl mx-auto leading-relaxed font-sans" id="ecosystem-description">
            Manage clinical, operational, and financial workflows through one scalable hospital management system.
          </p>
        </div>

        {/* Central Interactive Ecosystem Stage on cream background without container borders */}
        <div className="ecosystem-stage-container" id="ecosystem-stage">
          
          {/* Concentric Orbital dashed circle line passing exactly through the cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Soft, beautiful radial highlight matching the reference image */}
            <div className="ecosystem-ring-outer-elem" />
            
            {/* The primary dashed orbit track line */}
            <div className="ecosystem-ring-inner-elem" />
          </div>

          {/* Central Blue Orb representing HealthMed Core Node */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="ecosystem-center-badge"
            id="ecosystem-node-core"
          >
            <span className="text-lg md:text-xl font-sans font-extrabold tracking-tight">HealthMed</span>
          </motion.div>

          {/* Satellite Badge Cards - Arranged Cardinally onto the Orbit perfectly */}
          <div className="absolute inset-0 w-full h-full" id="ecosystem-satellites">
            
            {/* 1. Hospitals (Top-Left Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -8, 0],
                x: [0, 4, 0]
              }}
              transition={{
                y: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 4.5, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="absolute top-4 left-2 md:top-[12%] md:left-[8%] satellite-card group"
              id="node-hospitals"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="text-body-sm font-sans font-bold text-brand-charcoal tracking-tight">Hospitals</span>
            </motion.div>

            {/* 2. Diagnostics (Top-Right Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, 8, 0],
                x: [0, -5, 0]
              }}
              transition={{
                y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="absolute top-4 right-2 md:top-[12%] md:right-[8%] satellite-card group"
              id="node-diagnostics"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Activity className="h-5 w-5" />
              </div>
              <span className="text-body-sm font-sans font-bold text-brand-charcoal tracking-tight">Diagnostics</span>
            </motion.div>

            {/* 3. Pharmacies (Bottom-Left Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -6, 0],
                x: [0, -4, 0]
              }}
              transition={{
                y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="absolute bottom-4 left-2 md:bottom-[12%] md:left-[8%] satellite-card group"
              id="node-pharmacies"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Pill className="h-5 w-5" />
              </div>
              <span className="text-body-sm font-sans font-bold text-brand-charcoal tracking-tight">Pharmacies</span>
            </motion.div>

            {/* 4. Care Teams (Bottom-Right Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                y: [0, 7, 0],
                x: [0, 5, 0]
              }}
              transition={{
                y: { duration: 5.2, repeat: Infinity, ease: 'easeInOut' },
                x: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' }
              }}
              whileHover={{ scale: 1.05, y: -4, transition: { duration: 0.2 } }}
              className="absolute bottom-4 right-2 md:bottom-[12%] md:right-[8%] satellite-card group"
              id="node-careteams"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Users className="h-5 w-5" />
              </div>
              <span className="text-body-sm font-sans font-bold text-brand-charcoal tracking-tight">Care Teams</span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
