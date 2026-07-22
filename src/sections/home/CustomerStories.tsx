/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../../components/ui/Badge';
import { customerStoriesData } from '../../data/customerStories';

export default function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  const isLargeDesktop = windowWidth >= 1280;

  const totalStories = customerStoriesData.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalStories) % totalStories);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalStories);
  };

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 50;
    if (info.offset.x < -threshold) {
      handleNext();
    } else if (info.offset.x > threshold) {
      handlePrev();
    }
  };

  // Maps logoTypes to corporate identity headers with active/inactive mode support
  const renderLogo = (logoType: 'orlando' | 'providence' | 'vanderbilt' | 'mayo' | 'cleveland', isActive: boolean) => {
    switch (logoType) {
      case 'orlando':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-orlando-svg">
            <span 
              className="text-[32px] font-medium tracking-[0.06em] uppercase text-[#0F8241] leading-none" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Orlando
            </span>
            <span 
              className="text-[24px] tracking-[0.15em] uppercase text-[#0F8241] font-medium mt-1 leading-none relative"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Health<span className="text-[10px] absolute -top-1 -right-2.5 font-sans font-normal">®</span>
            </span>
          </div>
        );
      case 'providence':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-providence-svg">
            <div className="flex items-center justify-center space-x-2 mb-1">
              <svg className="w-6 h-6 text-[#0055FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M5 9h14" />
              </svg>
              <span 
                className="text-[28px] font-medium tracking-[0.04em] uppercase text-[#111827] leading-none"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Providence
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] font-sans mt-0.5 font-semibold">
              Health & Services
            </span>
          </div>
        );
      case 'vanderbilt':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-vanderbilt-svg">
            <span 
              className="text-[30px] font-medium tracking-[0.04em] uppercase text-[#997F3D] leading-none"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Vanderbilt
            </span>
            <span 
              className="text-[11px] uppercase tracking-[0.3em] text-[#6B7280] font-sans mt-1 leading-none font-semibold"
            >
              University Medical Center
            </span>
          </div>
        );
      case 'mayo':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-mayo-svg">
            <span 
              className="text-[32px] font-bold tracking-[0.05em] uppercase text-[#0A2D62] leading-none"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Mayo Clinic
            </span>
          </div>
        );
      case 'cleveland':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-cleveland-svg">
            <span 
              className="text-[28px] font-bold tracking-[0.02em] uppercase text-[#006643] leading-none"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Cleveland Clinic
            </span>
          </div>
        );
    }
  };

  // Precise positioning calculations matching Figma side-by-side specs
  const getPositionStyles = (diff: number) => {
    if (diff === 0) {
      return {
        left: '50%',
        x: '-50%',
        scale: 1,
        opacity: 1,
        zIndex: 30,
        pointerEvents: 'auto' as const,
      };
    }

    let offset = 590; // Desktop offset for 560px cards + gap

    if (isMobile) {
      offset = windowWidth - 32;
    } else if (isTablet) {
      offset = 510;
    } else if (isLargeDesktop) {
      offset = 590;
    }

    if (diff === -1) {
      return {
        left: `calc(50% - ${offset}px)`,
        x: '-50%',
        scale: 1,
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === 1) {
      return {
        left: `calc(50% + ${offset}px)`,
        x: '-50%',
        scale: 1,
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === -2) {
      return {
        left: `calc(50% - ${offset * 2}px)`,
        x: '-50%',
        scale: 0.9,
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none' as const,
      };
    }
    if (diff === 2) {
      return {
        left: `calc(50% + ${offset * 2}px)`,
        x: '-50%',
        scale: 0.9,
        opacity: 0,
        zIndex: 10,
        pointerEvents: 'none' as const,
      };
    }

    return {
      left: diff < 0 ? '-120%' : '220%',
      x: '-50%',
      scale: 0.8,
      opacity: 0,
      zIndex: 1,
      pointerEvents: 'none' as const,
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      handlePrev();
    }
  };

  return (
    <section 
      className="bg-[var(--color-surface-warm)] pt-[var(--spacing-5xl)] pb-[var(--spacing-5xl)] border-b border-[var(--color-border-subtle)]" 
      id="customer-stories"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Customer Success Stories Carousel"
    >
      <div className="max-w-[var(--container-max-width)] mx-auto px-[var(--space-lg)]">
        
        {/* Centered Badge Indicator */}
        <div className="flex justify-center mb-[var(--space-md)]">
          <Badge variant="dark" id="customer-stories-badge">
            Customer Stories
          </Badge>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-[var(--container-lg)] mx-auto mt-10 mb-20">
          <h2 className="text-[var(--color-text)] mt-[var(--space-md)] mb-10 brand-text-7xl " id="customer-stories-heading">
            <span className="italic">Real outcomes</span> from real deployments
          </h2>
          <p className="text-brand-gray-800 max-w-[var(--container-md)] mx-auto brand-text-3xl" id="customer-stories-subtitle">
            See how leading health systems, payers, and programs are transforming themselves.
          </p>
        </div>

        {/* Dynamic Showcase Area with Custom Gradient Frame */}
        <div className="rounded-[32px] py-4 sm:py-6 lg:py-8 px-0 relative overflow-hidden w-full lg:max-w-[1280px] mx-auto bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_100%),linear-gradient(55deg,transparent_20%,rgba(255,255,255,0.12)_21%,rgba(255,255,255,0.12)_35%,transparent_36%,transparent_45%,rgba(255,255,255,0.08)_46%,rgba(255,255,255,0.08)_58%,transparent_59%,transparent_70%,rgba(255,255,255,0.15)_71%,rgba(255,255,255,0.15)_85%,transparent_86%),linear-gradient(135deg,#0A5CFF_0%,#0044DB_35%,#0084FF_70%,#00C2FF_100%)]" id="customer-stories-showcase-box">
          
          <div className="relative w-full h-[580px] sm:h-[590px] lg:h-[600px] overflow-hidden select-none" id="customer-stories-carousel-viewport">
            
            {customerStoriesData.map((story, i) => {
              let diff = i - activeIndex;
              if (diff < -2) diff += totalStories;
              if (diff > 2) diff -= totalStories;

              const position = getPositionStyles(diff);
              const isActive = diff === 0;

              return (
                <motion.div
                  key={story.id}
                  className={`absolute top-1/2 w-[calc(100vw-64px)] sm:w-[480px] lg:w-[560px] h-[546px] rounded-[16px] p-[24px] flex flex-col justify-between gap-[32px] cursor-grab active:cursor-grabbing transition-all duration-300 ease-out ${
                    isActive 
                      ? 'bg-white shadow-[0_0_60px_rgba(0,0,0,0.25)] border border-white/80 pointer-events-auto opacity-100' 
                      : 'bg-white/80 backdrop-blur-md shadow-[0_0_60px_rgba(0,0,0,0.25)] border border-white/60 cursor-pointer hover:bg-white/90 opacity-80'
                  }`}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    pointerEvents: position.pointerEvents,
                  }}
                  animate={{
                    left: position.left,
                    x: position.x,
                    y: '-50%',
                    scale: position.scale,
                    opacity: position.opacity,
                    zIndex: position.zIndex,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                  }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.35}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  onClick={() => !isActive && setActiveIndex(i)}
                  aria-hidden={!isActive}
                  id={`customer-story-card-${story.id}`}
                >
                  {/* Brand Logo Container */}
                  <div className="rounded-[12px] h-[148px] flex items-center justify-center p-6 bg-[#F4F6F9] border border-black/5 shrink-0">
                    {renderLogo(story.logoType, isActive)}
                  </div>

                  {/* Core Customer Metrics Panel (3 rows with dividers) */}
                  <div className="flex flex-col justify-between flex-grow">
                    {story.metrics.map((metric, idx) => (
                      <div 
                        className="flex items-center py-[16px] sm:py-[18px] border-t border-[#E5E7EB] transition-colors duration-300 ease-out" 
                        key={idx}
                        id={`story-metric-${story.id}-${idx}`}
                      >
                        <span className="w-[120px] sm:w-[140px] shrink-0 font-serif text-[42px] sm:text-[48px] leading-none font-normal text-[#111827]">
                          {metric.value}
                        </span>
                        <span className="pl-4 text-[15px] sm:text-[16px] leading-snug font-sans text-[#4B5563]">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>

          {/* Interactive Progress Track Bar (Pill Indicators) */}
          <div className="flex justify-center items-center gap-[var(--space-sm)] mt-[var(--space-md)] lg:mt-[var(--space-sm)]" id="customer-stories-progress-pills">
            {customerStoriesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Show customer story slide ${i + 1}`}
                className={`w-[var(--size-progress-pill-width)] h-[var(--size-progress-pill-height)] rounded-[var(--radius-full)] border-none cursor-pointer transition-[background-color,transform] duration-[var(--transition-duration-medium)] ease-[var(--transition-bezier-smooth)] outline-none ${
                  i === activeIndex ? 'bg-[var(--color-surface)] scale-105' : 'bg-white/35 hover:bg-white/65'
                }`}
                id={`customer-stories-pill-${i}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

