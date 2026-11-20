/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { modulesData } from '../../data/modules';

export default function Modules() {
  const [activeTabId, setActiveTabId] = useState(modulesData[0].id);
  const [isDragging, setIsDragging] = useState(false);
  const activeTab = modulesData.find((m) => m.id === activeTabId) || modulesData[0];

  // Refs for horizontal scroll container, drag tracking, and keyboard accessibility
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const dragCleanupRef = useRef<(() => void) | null>(null);
  const dragStateRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
    didDrag: false,
  });

  useEffect(() => {
    return () => {
      dragCleanupRef.current?.();
    };
  }, []);

  const scrollTabIntoView = (tabId: string) => {
    const container = tabsListRef.current;
    const btn = tabRefs.current[tabId];
    if (!container || !btn) return;
    if (container.scrollWidth > container.clientWidth) {
      const targetLeft = btn.offsetLeft - (container.clientWidth - btn.offsetWidth) / 2;
      container.scrollTo({
        left: Math.max(0, Math.min(targetLeft, container.scrollWidth - container.clientWidth)),
        behavior: 'smooth',
      });
    }
  };

  const handleSelectTab = (tabId: string) => {
    if (dragStateRef.current.didDrag) {
      dragStateRef.current.didDrag = false;
      return;
    }
    setActiveTabId(tabId);
    scrollTabIntoView(tabId);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = tabsListRef.current;
    if (!container || container.scrollWidth <= container.clientWidth) return;
    if (e.button !== 0) return;

    dragCleanupRef.current?.();

    dragStateRef.current = {
      active: true,
      startX: e.clientX,
      startScrollLeft: container.scrollLeft,
      didDrag: false,
    };

    const handleMouseMove = (moveEvent: MouseEvent) => {
      if (!dragStateRef.current.active || !tabsListRef.current) return;
      const dx = moveEvent.clientX - dragStateRef.current.startX;
      if (Math.abs(dx) > 5) {
        dragStateRef.current.didDrag = true;
        setIsDragging(true);
      }
      if (dragStateRef.current.didDrag) {
        tabsListRef.current.scrollLeft = dragStateRef.current.startScrollLeft - dx;
      }
    };

    const cleanup = () => {
      dragStateRef.current.active = false;
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', cleanup);
      window.removeEventListener('blur', cleanup);
      dragCleanupRef.current = null;
      // Reset didDrag after click event phase completes
      setTimeout(() => {
        dragStateRef.current.didDrag = false;
      }, 0);
    };

    dragCleanupRef.current = cleanup;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', cleanup);
    window.addEventListener('blur', cleanup);
  };

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
    scrollTabIntoView(nextTabId);
    tabRefs.current[nextTabId]?.focus();
  };

  return (
    <section 
      className="bg-[var(--color-brand-bg)] py-12 sm:py-[var(--spacing-5xl)] md:py-[var(--spacing-6xl)] border-b border-[var(--color-brand-gray-100)]" 
      id="modules"
      aria-labelledby="modules-section-title"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-4 sm:px-[var(--space-lg)] lg:px-[var(--space-xl)]">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-8 sm:mb-[var(--space-2xl-3xl)] md:mb-[var(--spacing-4xl)]">
          <Badge variant="dark" id="modules-header-badge" className="mb-4 sm:mb-[var(--space-md)]">
            Modules
          </Badge>
          
          <Heading level={2} id="modules-section-title text-" className="text-[var(--color-brand-charcoal)] mt-[var(--space-xs)] max-w-[var(--container-max-width)] text-center">
            The complete agent stack for healthcare
          </Heading>
          
          <p className="text-[var(--color-brand-gray-600)] mt-3 sm:mt-[var(--space-md)] max-w-[var(--container-md)] text-center brand-text-3xl" id="modules-section-subtitle">
            Build, govern, and scale AI across the enterprise
          </p>
        </div>

        {/* Outer container for tabs and card to ensure identical width alignment */}
        <div className="max-w-6xl mx-auto w-full min-w-0 flex flex-col" id="modules-tabs-card-container">
          
          {/* Tabs Navigation */}
          <div 
            ref={tabsListRef}
            onMouseDown={handleMouseDown}
            className={`relative border-b-[1.5px] border-[var(--color-border-subtle)] w-full min-w-0 max-w-full mb-6 sm:mb-[var(--space-xl-2xl)] flex flex-nowrap justify-start lg:justify-stretch overflow-x-auto overflow-y-hidden overscroll-x-contain [touch-action:pan-x_pan-y] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab lg:cursor-default'
            }`}
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
                  onClick={() => handleSelectTab(tab.id)}
                  className={`flex-none shrink-0 lg:flex-1 lg:min-w-0 h-[52px] sm:h-[64px] md:h-[72px] py-3 px-4 sm:py-4 sm:px-6 md:py-[24px] md:px-[32px] gap-[8px] flex items-center justify-center text-center whitespace-nowrap transition-colors duration-300 relative brand-text-3xl cursor-pointer select-none [touch-action:pan-x_pan-y] ${
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
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#2271E8] z-10 pointer-events-none" 
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
            className="bg-[var(--color-brand-white)] border border-[var(--color-border-subtle)] rounded-[var(--radius-card)] p-5 sm:p-[var(--space-xl)] md:p-[var(--space-2xl)] lg:p-[var(--space-2xl-3xl)] shadow-[var(--shadow-card)]"
            id={`panel-${activeTab.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab.id}`}
          >
            <motion.div
              key={activeTab.id} 
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-[var(--space-xl-2xl)] lg:gap-[var(--spacing-4xl)] items-center"
            >
              {/* Left Column: Content */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full" id="modules-card-left">
                <div className="flex flex-col mb-6 sm:mb-[var(--space-xl)]">
                  {/* Category Badge */}
                  <div className="bg-gradient-to-b from-[#2271E8] to-[#66A3FF] text-[var(--color-brand-white)] px-[var(--space-sm-md)] py-[0.375rem] rounded-[var(--radius-md)] w-fit mb-4 sm:mb-[var(--space-md-lg)] brand-text-xl-medium" id={`category-badge-${activeTab.id}`}>
                    {activeTab.badge}
                  </div>

                  {/* Title with Serif Italics */}
                  <h3 className="text-[var(--color-brand-gray-900)] mb-3 sm:mb-[var(--space-md-lg)] brand-text-6xl" id={`heading-${activeTab.id}`}>
                    {activeTab.headingPrefix}
                    <span className="italic">{activeTab.headingItalic}</span>
                  </h3>

                  {/* Paragraph Description */}
                  <p className="text-[var(--color-brand-gray-800)] brand-text-2xl" id={`desc-${activeTab.id}`}>
                    {activeTab.description}
                  </p>
                </div>

                {/* Action Links */}
                <div className="flex flex-col gap-2.5 sm:gap-[var(--space-sm-md)]" id={`actions-container-${activeTab.id}`}>
                  {activeTab.actions.map((act, index) => (
                    <a
                      key={index}
                      href={act.href}
                      className="group/link flex items-center justify-between bg-[var(--color-surface-secondary)] border border-[var(--color-border)] rounded-[var(--radius-xl)] py-3 px-4 md:py-[var(--space-md)] md:px-[var(--space-lg)] text-[var(--color-brand-charcoal)] hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-brand-gray-300)] transition-all duration-[var(--transition-duration-default)] brand-text-xl-medium md:brand-text-2xl-medium"
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
              <div className="w-full max-w-[524px] aspect-[524/584] lg:h-[584px] rounded-2xl overflow-hidden">
                  <img
                    src={activeTab.image}
                    srcSet={`${activeTab.imageSmall} 360w, ${activeTab.image} 524w`}
                    sizes="(max-width: 640px) 88vw, 524px"
                    alt={`${activeTab.tabTitle} Dashboard Mockup`}
                    width={524}
                    height={584}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
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
