/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { modulesData } from '../../data/modules';

export default function Modules() {
  const [activeTabId, setActiveTabId] = useState(modulesData[0].id);
  const activeTab = modulesData.find((m) => m.id === activeTabId) || modulesData[0];

  // For Keyboard accessibility
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % modulesData.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + modulesData.length) % modulesData.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = modulesData.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const nextTabId = modulesData[nextIndex].id;
    setActiveTabId(nextTabId);
    tabRefs.current[nextTabId]?.focus();
  };

  return (
    <section 
      className="bg-[var(--color-brand-bg)] py-[var(--spacing-5xl)] md:py-[var(--spacing-6xl)] border-b border-[var(--color-brand-gray-100)]" 
      id="modules"
      aria-labelledby="modules-section-title"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--space-md)] sm:px-[var(--space-lg)] lg:px-[var(--space-xl)]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-[var(--space-2xl-3xl)] md:mb-[var(--spacing-4xl)]">
          <Badge variant="dark" id="modules-header-badge" className="mb-[var(--space-md)]">
            Modules
          </Badge>
          
          <Heading level={2} id="modules-section-title text-" className="text-[var(--color-brand-charcoal)] mt-[var(--space-xs)] max-w-[var(--container-max-width)] text-center">
            The complete agent stack for healthcare
          </Heading>
          
          <p className="text-[var(--color-brand-gray-600)] mt-[var(--space-md)] max-w-[var(--container-md)] text-center brand-text-3xl" id="modules-section-subtitle">
            Build, govern, and scale AI across the enterprise
          </p>
        </div>

        {/* Outer container for tabs and card to ensure identical width alignment */}
        <div className="max-w-6xl mx-auto w-full flex flex-col" id="modules-tabs-card-container">
          
          {/* Tabs Navigation */}
          <div 
            className="border-b-[1.5px] border-[var(--color-border-subtle)] w-full mb-[var(--space-xl-2xl)] flex justify-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Healthcare Modules Tabs"
            id="modules-tabs-list"
          >
            {modulesData.map((tab, i) => {
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  ref={(el) => { tabRefs.current[tab.id] = el; }}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex-1 min-w-[140px] md:min-w-0 h-[72px] py-[24px] px-[32px] gap-[8px] flex items-center justify-center text-center transition-all duration-300 relative brand-text-3xl ${
                    isActive
                      ? 'text-[var(--color-brand-charcoal)] bg-[#F7F6F3]'
                      : 'text-[var(--color-brand-gray-600)] hover:text-[var(--color-brand-charcoal)]'
                  }`}
                >
                  {/* Active bottom radial gradient glow with reduced height */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      className="absolute bottom-0 left-0 right-0 h-[32px] pointer-events-none [background:radial-gradient(100%_100%_at_50%_100%,rgba(34,113,232,0.20)_0%,rgba(247,246,243,0)_100%)]"
                      transition={{ type: 'tween', duration: 0.2 }}
                    />
                  )}

                  {/* Active bottom line (3px #2271E8) */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline" 
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2271E8] z-10" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {tab.tabTitle}
                </button>
              );
            })}
          </div>

          {/* Tab Content Card */}
          <div 
            className="bg-[var(--color-brand-white)] border border-[var(--color-border-subtle)] rounded-[var(--radius-card)] p-[var(--space-xl)] md:p-[var(--space-2xl)] lg:p-[var(--space-2xl-3xl)] shadow-[var(--shadow-card)]"
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
          >
            <motion.div
              key={activeTab.id} 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-xl-2xl)] lg:gap-[var(--spacing-4xl)] items-center"
            >
              {/* Left Column: Content */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full" id="modules-card-left">
                <div className="flex flex-col mb-[var(--space-xl)]">
                  {/* Category Badge */}
                  <div className="bg-gradient-to-b from-[#2271E8] to-[#66A3FF] text-[var(--color-brand-white)] px-[var(--space-sm-md)] py-[0.375rem] rounded-[var(--radius-md)] w-fit mb-[var(--space-md-lg)] brand-text-xl-medium" id={`category-badge-${activeTab.id}`}>
                    {activeTab.badge}
                  </div>

                  {/* Title with Serif Italics */}
                  <h3 className="text-[var(--color-brand-gray-900)] mb-[var(--space-md-lg)] brand-text-6xl" id={`heading-${activeTab.id}`}>
                    {activeTab.headingPrefix}
                    <span className="italic">{activeTab.headingItalic}</span>
                  </h3>

                  {/* Paragraph Description */}
                  <p className="text-[var(--color-brand-gray-800)] brand-text-2xl" id={`desc-${activeTab.id}`}>
                    {activeTab.description}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-col gap-[var(--space-sm-md)]" id={`actions-container-${activeTab.id}`}>
                  {activeTab.actions.map((act, index) => (
                    <a
                      key={index}
                      href={act.href}
                      className="group/link flex items-center justify-between bg-[var(--color-surface-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] py-[0.875rem] md:py-[var(--space-md)] px-[var(--space-md-lg)] md:px-[var(--space-lg)] text-[var(--color-brand-charcoal)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-brand-gray-300)] transition-all duration-[var(--transition-duration-default)] brand-text-xl-medium md:brand-text-2xl-medium"
                      id={`action-button-${activeTab.id}-${index}`}
                    >
                      <span>{act.label}</span>
                      <ArrowRight className="h-[var(--space-md-lg)] w-[var(--space-md-lg)] text-[var(--color-brand-charcoal)] transition-transform duration-[var(--transition-duration-default)] group-hover/link:translate-x-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="lg:col-span-6 flex items-center justify-center" id="modules-card-right">
              <div className="h-[584px] rounded-2xl overflow-hidden">
                  <img
                    src={activeTab.image}
                    alt={`${activeTab.tabTitle} Dashboard Mockup`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover "
                  />
              </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
