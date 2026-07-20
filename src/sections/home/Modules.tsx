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
import './Modules.css';

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
      className="modules-section" 
      id="modules"
      aria-labelledby="modules-section-title"
    >
      <div className="modules-container">
        
        {/* Header Section */}
        <div className="modules-header flex flex-col items-center">
          <Badge variant="dark" id="modules-header-badge" className="modules-header-badge">
            Modules
          </Badge>
          
          <Heading level={2} id="modules-section-title text-" className="modules-section-title">
            The complete agent stack for healthcare
          </Heading>
          
          <p className="modules-section-subtitle brand-text-3xl" id="modules-section-subtitle">
            Build, govern, and scale AI across the enterprise
          </p>
        </div>

        {/* Outer container for tabs and card to ensure identical width alignment */}
        <div className="modules-tabs-card-container flex flex-col" id="modules-tabs-card-container">
          
          {/* Tabs Navigation */}
          <div 
            className="modules-tabs-list flex overflow-x-auto"
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
                  className={`modules-tab-button brand-text-xl-medium flex relative ${
                    isActive ? 'modules-tab-button-active' : ''
                  }`}
                >
                  {/* Active bottom line */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabUnderline" 
                      className="modules-tab-underline absolute bottom-0 left-0 right-0 z-10" 
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Active top/background subtle vertical gradient fade-in */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="modules-tab-bg-gradient absolute inset-x-0 top-0 bottom-0"
                      transition={{ type: 'tween', duration: 0.25 }}
                    />
                  )}

                  {tab.tabTitle}
                </button>
              );
            })}
          </div>

          {/* Tab Content Card */}
          <div 
            className="modules-card"
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
          >
            <motion.div
              key={activeTab.id} 
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="modules-card-content-grid"
            >
              {/* Left Column: Content */}
              <div className="modules-card-left lg:col-span-6 flex flex-col justify-between" id="modules-card-left">
                <div className="modules-card-left-inner flex flex-col">
                  {/* Category Badge */}
                  <div className="modules-category-badge brand-text-xl-medium" id={`category-badge-${activeTab.id}`}>
                    {activeTab.badge}
                  </div>

                  {/* Title with Serif Italics */}
                  <h3 className="modules-card-title brand-text-6xl" id={`heading-${activeTab.id}`}>
                    {activeTab.headingPrefix}
                    <span className="modules-card-title-italic">{activeTab.headingItalic}</span>
                  </h3>

                  {/* Paragraph Description */}
                  <p className="modules-card-desc brand-text-xl md:brand-text-2xl" id={`desc-${activeTab.id}`}>
                    {activeTab.description}
                  </p>
                </div>

                {/* Action Links */}
                <div className="modules-actions-list flex flex-col" id={`actions-container-${activeTab.id}`}>
                  {activeTab.actions.map((act, index) => (
                    <a
                      key={index}
                      href={act.href}
                      className="modules-action-link brand-text-xl-medium md:brand-text-2xl-medium flex items-center justify-between"
                      id={`action-button-${activeTab.id}-${index}`}
                    >
                      <span className="modules-action-text">{act.label}</span>
                      <ArrowRight className="modules-action-arrow" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="modules-card-right lg:col-span-6 flex items-center justify-center" id="modules-card-right">
                <div className="modules-image-container relative overflow-hidden" id="modules-image-container">
                  <img
                    src={activeTab.image}
                    alt={`${activeTab.tabTitle} Dashboard Mockup`}
                    referrerPolicy="no-referrer"
                    className="modules-image"
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
