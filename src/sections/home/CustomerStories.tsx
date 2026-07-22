/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { customerStoriesData, CustomerStory } from '../../data/customerStories';

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

  const totalStories = customerStoriesData.length;

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 60; // drag threshold in pixels to change active slide
    if (info.offset.x < -threshold) {
      // Swiped left -> show next slide
      setActiveIndex((prev) => (prev + 1) % totalStories);
    } else if (info.offset.x > threshold) {
      // Swiped right -> show previous slide
      setActiveIndex((prev) => (prev - 1 + totalStories) % totalStories);
    }
  };

  // Maps logoTypes to beautifully rendered, vector-crisp corporate identity headers
  const renderLogo = (logoType: 'orlando' | 'providence' | 'vanderbilt' | 'mayo' | 'cleveland') => {
    switch (logoType) {
      case 'orlando':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-orlando-svg">
            <span 
              className="brand-text-3xl font-medium tracking-[0.06em] uppercase text-[#0F8241] leading-none" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Orlando
            </span>
            <span 
              className="brand-text-2xl tracking-[0.15em] uppercase text-[#0F8241] font-medium mt-1 leading-none relative"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Health<span className="text-[10px] absolute -top-1 -right-2.5 font-sans font-normal">®</span>
            </span>
          </div>
        );
      case 'providence':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-providence-svg">
            <div className="flex items-center justify-center space-x-1.5 mb-1">
              <svg className="w-5 h-5 text-[#0055FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2v20M5 9h14" />
              </svg>
              <span 
                className="brand-text-2xl font-medium tracking-[0.04em] uppercase text-[#111827] leading-none"
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
              className="brand-text-3xl font-medium tracking-[0.04em] uppercase text-[#997F3D] leading-none"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Vanderbilt
            </span>
            <span 
              className="text-xs uppercase tracking-[0.3em] text-[#6B7280] font-sans mt-1 leading-none font-semibold"
            >
              University Medical Center
            </span>
          </div>
        );
      case 'mayo':
        return (
          <div className="flex flex-col items-center justify-center text-center select-none" id="logo-mayo-svg">
            <span 
              className="brand-text-3xl font-bold tracking-[0.05em] uppercase text-[#0A2D62] leading-none"
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
              className="brand-text-2xl font-bold tracking-[0.02em] uppercase text-[#006643] leading-none"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Cleveland Clinic
            </span>
          </div>
        );
    }
  };

  // Helper mapping to key positions around the active card
  const getPositionStyles = (diff: number) => {
    if (diff === 0) {
      return {
        left: '50%',
        x: '-50%',
        scale: 1,
        opacity: 1,
        zIndex: 20,
        pointerEvents: 'auto' as const,
      };
    }

    let offset = 600; // Desktop default (>= 1024px)
    let scale = 0.85;
    let opacity = 0.55;

    if (isMobile) {
      if (diff === -1) {
        return {
          left: 'calc(50% - 190px)',
          x: '-50%',
          scale: 0.75,
          opacity: 0.25,
          zIndex: 10,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === 1) {
        return {
          left: 'calc(50% + 190px)',
          x: '-50%',
          scale: 0.75,
          opacity: 0.25,
          zIndex: 10,
          pointerEvents: 'auto' as const,
        };
      }
      if (diff === -2) {
        return {
          left: 'calc(50% - 360px)',
          x: '-50%',
          scale: 0.6,
          opacity: 0,
          zIndex: 5,
          pointerEvents: 'none' as const,
        };
      }
      if (diff === 2) {
        return {
          left: 'calc(50% + 360px)',
          x: '-50%',
          scale: 0.6,
          opacity: 0,
          zIndex: 5,
          pointerEvents: 'none' as const,
        };
      }
    } else if (windowWidth < 1024) {
      // Tablet view (768px <= width < 1024px)
      offset = 320;
      scale = 0.85;
      opacity = 0.45;
    }

    if (diff === -1) {
      return {
        left: `calc(50% - ${offset}px)`,
        x: '-50%',
        scale,
        opacity,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === 1) {
      return {
        left: `calc(50% + ${offset}px)`,
        x: '-50%',
        scale,
        opacity,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === -2) {
      return {
        left: `calc(50% - ${offset * 1.8}px)`,
        x: '-50%',
        scale: scale * 0.8,
        opacity: 0,
        zIndex: 5,
        pointerEvents: 'none' as const,
      };
    }
    if (diff === 2) {
      return {
        left: `calc(50% + ${offset * 1.8}px)`,
        x: '-50%',
        scale: scale * 0.8,
        opacity: 0,
        zIndex: 5,
        pointerEvents: 'none' as const,
      };
    }

    // Cards outside the instant preview view are translated completely out of view
    return {
      left: diff < 0 ? '-120%' : '220%',
      x: '-50%',
      scale: 0.6,
      opacity: 0,
      zIndex: 1,
      pointerEvents: 'none' as const,
    };
  };

  // Setup keyboard accessibility trigger
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex((prev) => (prev + 1) % totalStories);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex((prev) => (prev - 1 + totalStories) % totalStories);
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
        <div className="text-center max-w-[var(--container-lg)] mx-auto mb-[var(--space-2xl-3xl)]">
          <h2 className="text-[var(--color-text)] mt-[var(--space-md)] mb-[var(--space-sm)] brand-text-6xl md:brand-text-7xl" id="customer-stories-heading">
            <span className="italic">Real outcomes</span> from real deployments
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-[var(--container-md)] mx-auto brand-text-2xl" id="customer-stories-subtitle">
            See how leading health systems, payers, and programs are transforming themselves.
          </p>
        </div>

        {/* Dynamic Showcase Area with Custom Gradient Frame */}
        <div className="rounded-[var(--radius-card-lg)] p-[var(--space-lg)] lg:p-[var(--space-2xl)] lg:px-[var(--space-xl)] lg:pb-[var(--space-xl)] relative shadow-[var(--shadow-card-hover)] overflow-hidden w-full lg:max-w-[var(--container-xl)] lg:h-[var(--size-showcase-height)] lg:mx-auto bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_50%,rgba(255,255,255,0.1)_100%),linear-gradient(55deg,transparent_20%,rgba(255,255,255,0.12)_21%,rgba(255,255,255,0.12)_35%,transparent_36%,transparent_45%,rgba(255,255,255,0.08)_46%,rgba(255,255,255,0.08)_58%,transparent_59%,transparent_70%,rgba(255,255,255,0.15)_71%,rgba(255,255,255,0.15)_85%,transparent_86%),linear-gradient(135deg,#0A5CFF_0%,#0044DB_35%,#0084FF_70%,#00C2FF_100%)]" id="customer-stories-showcase-box">
          <div className="relative w-full h-[480px] lg:h-[570px] overflow-hidden select-none" id="customer-stories-carousel-viewport">
            
            {customerStoriesData.map((story, i) => {
              // Wrap indices to represent previous 2, current, and next 2 slides
              let diff = i - activeIndex;
              if (diff < -2) diff += totalStories;
              if (diff > 2) diff -= totalStories;

              const position = getPositionStyles(diff);
              const isActive = diff === 0;

              return (
                <motion.div
                  key={story.id}
                  className={`absolute top-1/2 -translate-y-1/2 w-[var(--size-card-width-sm)] min-[480px]:w-[var(--size-card-width-md)] lg:w-[var(--size-card-width-lg)] h-[var(--size-card-height-sm)] min-[480px]:h-[var(--size-card-height-md)] lg:h-[var(--size-card-height-xl)] rounded-[var(--radius-2xl)] p-[var(--space-lg)] lg:p-[var(--space-xl-2xl)] flex flex-col gap-[var(--space-lg-xl)] lg:gap-[var(--space-xl)] cursor-grab active:cursor-grabbing transition-[transform,opacity,background-color] duration-[var(--transition-duration-slow)] ease-[var(--transition-bezier-smooth)] ${
                    isActive 
                      ? 'bg-[var(--color-surface)] border border-[var(--color-surface)] shadow-[var(--shadow-xl)] pointer-events-auto' 
                      : 'bg-white/12 backdrop-blur-[14px] border border-white/18 shadow-none cursor-pointer'
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
                    stiffness: 280,
                    damping: 28,
                  }}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={isActive ? handleDragEnd : undefined}
                  onClick={() => !isActive && setActiveIndex(i)}
                  aria-hidden={!isActive}
                  id={`customer-story-card-${story.id}`}
                >
                  {/* Brand Logo Container */}
                  <div className={`rounded-[var(--radius-xl)] h-[var(--size-logo-box-height-sm)] lg:h-[var(--size-logo-box-height-lg)] flex items-center justify-center p-[var(--space-md)] transition-colors duration-[var(--transition-duration-slow)] ease-out ${
                    isActive ? 'bg-[var(--color-surface-secondary)]' : 'bg-white/5'
                  }`}>
                    {renderLogo(story.logoType)}
                  </div>

                  {/* Core Customer Metrics Panel */}
                  <div className={`flex flex-col justify-center flex-grow border-t transition-colors duration-[var(--transition-duration-slow)] ease-out ${
                    isActive ? 'border-[var(--color-border-subtle)]' : 'border-white/12'
                  }`}>
                    {story.metrics.map((metric, idx) => (
                      <div 
                        className={`flex items-center py-[var(--space-md)] lg:py-[var(--space-md-lg)] border-b last:border-b-0 transition-colors duration-[var(--transition-duration-slow)] ease-out ${
                          isActive ? 'border-[var(--color-border-subtle)]' : 'border-white/12'
                        }`} 
                        key={idx}
                        id={`story-metric-${story.id}-${idx}`}
                      >
                        <span className={`w-[32%] shrink-0 transition-colors duration-[var(--transition-duration-slow)] ease-out brand-text-5xl md:brand-text-7xl ${
                          isActive ? 'text-[var(--color-brand-gray-900)]' : 'text-white/85'
                        }`}>
                          {metric.value}
                        </span>
                        <span className={`w-[68%] pl-[var(--space-md)] transition-colors duration-[var(--transition-duration-slow)] ease-out brand-text-xl ${
                          isActive ? 'text-[var(--color-brand-gray-700)]' : 'text-white/55'
                        }`}>
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
                  i === activeIndex ? 'bg-[var(--color-surface)]' : 'bg-white/35 hover:bg-white/65'
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
