/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Building2, Activity, Pill, Users } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import gsap from 'gsap';

export default function EcosystemHub() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!stageRef.current) return;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const ctx = gsap.context(() => {
      // 1. Hospitals (Top-Left Position)
      // Floating: Y: -15px ↔ 15px, Duration: 4s
      gsap.fromTo('#node-hospitals',
        { y: -15, x: 0, rotation: 0 },
        { y: 15, x: 0, rotation: 0, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );

      // 2. Diagnostics (Top-Right Position)
      // Floating: Y: -20px ↔ 20px, X: -8px ↔ 8px, Duration: 5s
      gsap.fromTo('#node-diagnostics',
        { y: -20, x: -8, rotation: 0 },
        { y: 20, x: 8, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );

      // 3. Pharmacies (Bottom-Left Position)
      // Floating: Y: -12px ↔ 12px, Rotation: -2deg ↔ 2deg, Duration: 4.5s
      gsap.fromTo('#node-pharmacies',
        { y: -12, x: 0, rotation: -2 },
        { y: 12, x: 0, rotation: 2, duration: 4.5, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );

      // 4. Care Teams (Bottom-Right Position)
      // Floating: Y: -18px ↔ 18px, X: 6px ↔ -6px, Duration: 5.5s
      gsap.fromTo('#node-careteams',
        { y: -18, x: 6, rotation: -1 },
        { y: 18, x: -6, rotation: 1, duration: 5.5, repeat: -1, yoyo: true, ease: 'sine.inOut' }
      );
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-brand-bg py-20 md:py-28 border-b border-brand-gray-100 overflow-hidden" id="ecosystem">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Header & Badging matching the reference image */}
        <div className="text-center  mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <Badge variant="dark">
              Unified Healthcare Ecosystem
            </Badge>
          </div>
          <Heading level={2} id="ecosystem-heading" className="text-brand-charcoal inline-block">
            <span className="italic pr-1">One Healthcare Management</span>
             Platform for Every Workflow
          </Heading>
          <p className="mt-5 text-brand-slate brand-text-2xl  mx-auto" id="ecosystem-description">
            Manage clinical, operational, and financial workflows through one scalable hospital management system.
          </p>
        </div>

        {/* Central Interactive Ecosystem Stage on cream background without container borders */}
        <div ref={stageRef} className="relative max-w-3xl mx-auto flex items-center justify-center h-[30rem] md:h-[34rem]" id="ecosystem-stage">
          
          {/* Concentric Orbital dashed circle line passing exactly through the cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            {/* Soft, beautiful radial highlight matching the reference image */}
            <div className="absolute rounded-full bg-gradient-to-tr from-brand-blue/10 to-transparent filter blur-[40px] opacity-70 animate-pulse-slow w-[22.5rem] h-[22.5rem] md:w-[31.25rem] md:h-[31.25rem]" />
            
            {/* The primary dashed orbit track line */}
            <div className="absolute rounded-full border border-dashed border-brand-blue-200 w-[17.5rem] h-[17.5rem] md:w-[26.25rem] md:h-[26.25rem]" />
          </div>

          {/* Central Blue Orb representing HealthMed Core Node */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 15 }}
            className="relative z-20 flex flex-col items-center justify-center text-white text-center bg-brand-blue-accent rounded-full shadow-lg border-4 border-white cursor-pointer select-none w-[9rem] h-[9rem] md:w-[11rem] md:h-[11rem]"
            id="ecosystem-node-core"
          >
            <span className="brand-text-xl-medium">HealthMed</span>
          </motion.div>

          {/* Satellite Badge Cards - Arranged Cardinally onto the Orbit perfectly */}
          <div className="absolute inset-0 w-full h-full" id="ecosystem-satellites">
            
            {/* 1. Hospitals (Top-Left Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-4 left-2 md:top-[12%] md:left-[8%] bg-white rounded-2xl py-3 px-5 shadow-sm border border-brand-gray-100/50 flex items-center gap-3.5 cursor-pointer group select-none"
              id="node-hospitals"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Building2 className="h-5 w-5" />
              </div>
              <span className="brand-text-xl-medium text-brand-charcoal">Hospitals</span>
            </motion.div>

            {/* 2. Diagnostics (Top-Right Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute top-4 right-2 md:top-[12%] md:right-[8%] bg-white rounded-2xl py-3 px-5 shadow-sm border border-brand-gray-100/50 flex items-center gap-3.5 cursor-pointer group select-none"
              id="node-diagnostics"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Activity className="h-5 w-5" />
              </div>
              <span className="brand-text-xl-medium text-brand-charcoal">Diagnostics</span>
            </motion.div>

            {/* 3. Pharmacies (Bottom-Left Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-4 left-2 md:bottom-[12%] md:left-[8%] bg-white rounded-2xl py-3 px-5 shadow-sm border border-brand-gray-100/50 flex items-center gap-3.5 cursor-pointer group select-none"
              id="node-pharmacies"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Pill className="h-5 w-5" />
              </div>
              <span className="brand-text-xl-medium text-brand-charcoal">Pharmacies</span>
            </motion.div>

            {/* 4. Care Teams (Bottom-Right Position) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="absolute bottom-4 right-2 md:bottom-[12%] md:right-[8%] bg-white rounded-2xl py-3 px-5 shadow-sm border border-brand-gray-100/50 flex items-center gap-3.5 cursor-pointer group select-none"
              id="node-careteams"
            >
              <div className="p-2 rounded-xl bg-brand-blue-light text-brand-blue-accent transition-colors group-hover:bg-brand-blue-50">
                <Users className="h-5 w-5" />
              </div>
              <span className="brand-text-xl-medium text-brand-charcoal">Care Teams</span>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
