/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { 
  Users, 
  Sparkle, 
  Monitor, 
  FileText, 
  FlaskConical, 
  Store 
} from 'lucide-react';

export default function Features() {
  const items = [
    {
      title: 'Smart Patient Management',
      text: 'Manage appointments, registrations, and medical records digitally.',
      icon: <Users className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: true,
    },
    {
      title: 'AI Workflow Automation',
      text: 'Automate scheduling, alerts, and operational tasks.',
      icon: <Sparkle className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: false,
    },
    {
      title: 'Advanced EMR System',
      text: 'Access patient history, diagnostics, and prescriptions instantly.',
      icon: <Monitor className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: true,
    },
    {
      title: 'Billing & Insurance',
      text: 'Simplify invoicing, insurance claims, and payments.',
      icon: <FileText className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: false,
    },
    {
      title: 'Diagnostics & Laboratory',
      text: 'Manage reports, tests, and lab operations efficiently.',
      icon: <FlaskConical className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: true,
    },
    {
      title: 'Pharmacy Management',
      text: 'Track medicines, prescriptions, and inventory seamlessly.',
      icon: <Store className="h-6 w-6 text-white" strokeWidth={2.2} />,
      hasBg: false,
    },
  ];

  return (
    <section className="features-section py-20 md:py-28 overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content and Badges */}
        <div className="text-center mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <Badge variant="glass">
              Features
            </Badge>
          </div>
          <Heading level={2} id="features-heading" className="text-white">
            <span className="italic">Built for Smarter</span> Healthcare Management
          </Heading>
        </div>

        {/* 3-Column Chessboard/Staggered Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto" id="features-grid">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`features-card flex flex-col justify-start text-left ${
                item.hasBg ? 'features-card-with-bg' : 'features-card-transparent'
              }`}
              id={`feature-card-${idx}`}
            >
              {/* Feature Icon container alignment */}
              <div className="features-card-icon-wrapper flex items-center justify-start">
                {item.icon}
              </div>

              {/* Title heading formatted neatly */}
              <h3 className="brand-text-3xl-medium features-card-title">
                {item.title}
              </h3>

              {/* Description Paragraph with high opacity & readable spacing */}
              <p className="features-card-desc">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
