/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { customerStoriesData, CustomerStory } from '../../data/customerStories';
import './CustomerStories.css';

export default function CustomerStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
              className="text-3xl font-medium tracking-[0.06em] uppercase text-[#0F8241] leading-none" 
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Orlando
            </span>
            <span 
              className="text-2xl tracking-[0.15em] uppercase text-[#0F8241] font-medium mt-1 leading-none relative"
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
                className="text-2xl font-medium tracking-[0.04em] uppercase text-[#111827] leading-none"
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
              className="text-3xl font-medium tracking-[0.04em] uppercase text-[#997F3D] leading-none"
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
              className="text-3xl font-bold tracking-[0.05em] uppercase text-[#0A2D62] leading-none"
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
              className="text-2xl font-bold tracking-[0.02em] uppercase text-[#006643] leading-none"
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
    if (diff === -1) {
      return {
        left: isMobile ? '-15%' : 'calc(50% - 460px)',
        x: '-50%',
        scale: isMobile ? 0.75 : 0.85,
        opacity: isMobile ? 0.2 : 0.55,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === 1) {
      return {
        left: isMobile ? '115%' : 'calc(50% + 460px)',
        x: '-50%',
        scale: isMobile ? 0.75 : 0.85,
        opacity: isMobile ? 0.2 : 0.55,
        zIndex: 10,
        pointerEvents: 'auto' as const,
      };
    }
    if (diff === -2) {
      return {
        left: isMobile ? '-50%' : 'calc(50% - 780px)',
        x: '-50%',
        scale: isMobile ? 0.6 : 0.7,
        opacity: isMobile ? 0 : 0.25,
        zIndex: 5,
        pointerEvents: 'none' as const,
      };
    }
    if (diff === 2) {
      return {
        left: isMobile ? '150%' : 'calc(50% + 780px)',
        x: '-50%',
        scale: isMobile ? 0.6 : 0.7,
        opacity: isMobile ? 0 : 0.25,
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
      className="customer-stories-section" 
      id="customer-stories"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Customer Success Stories Carousel"
    >
      <div className="customer-stories-container">
        
        {/* Centered Badge Indicator */}
        <div className="customer-stories-badge-wrapper">
          <Badge variant="dark" id="customer-stories-badge">
            Customer Stories
          </Badge>
        </div>

        {/* Section Header */}
        <div className="customer-stories-header">
          <h2 className="customer-stories-title text-6xl md:text-7xl" id="customer-stories-heading">
            <span className="italic">Real outcomes</span> from real deployments
          </h2>
          <p className="customer-stories-subtitle text-2xl" id="customer-stories-subtitle">
            See how leading health systems, payers, and programs are transforming themselves.
          </p>
        </div>

        {/* Dynamic Showcase Area with Custom Gradient Frame */}
        <div className="customer-stories-showcase" id="customer-stories-showcase-box">
          <div className="customer-stories-carousel" id="customer-stories-carousel-viewport">
            
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
                  className={`customer-story-card flex flex-col ${isActive ? 'active' : 'inactive'}`}
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
                  <div className="customer-story-logo-box">
                    {renderLogo(story.logoType)}
                  </div>

                  {/* Core Customer Metrics Panel */}
                  <div className="customer-story-metrics">
                    {story.metrics.map((metric, idx) => (
                      <div 
                        className="customer-story-metric-row" 
                        key={idx}
                        id={`story-metric-${story.id}-${idx}`}
                      >
                        <span className="customer-story-metric-value text-5xl md:text-7xl">
                          {metric.value}
                        </span>
                        <span className="customer-story-metric-label text-xl">
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
          <div className="customer-stories-progress-pills" id="customer-stories-progress-pills">
            {customerStoriesData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Show customer story slide ${i + 1}`}
                className={`customer-stories-pill ${i === activeIndex ? 'active' : ''}`}
                id={`customer-stories-pill-${i}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
