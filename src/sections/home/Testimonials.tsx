/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
  const leftReviews = [
    {
      text: 'HealthMed significantly improved our hospital coordination and reduced operational delays across departments.',
      author: 'Alex Bean',
      role: 'Hospital Administrator',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100&fm=webp',
    },
    {
      text: 'The EMR workflow and centralized patient access helped our doctors reduce paperwork and improve consultation efficiency.',
      author: 'Roy JK',
      role: 'Senior Physician',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&fm=webp',
    },
    {
      text: 'The platform gave us complete visibility into diagnostics, billing, and operational workflows in real time.',
      author: 'Daniel John',
      role: 'Operations Manager',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100&fm=webp',
    }
  ];

  const rightReviews = [
    {
      text: 'The EMR workflow and centralized patient access helped our doctors reduce paperwork and improve consultation efficiency.',
      author: 'Roy JK',
      role: 'Senior Physician',
      img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100&fm=webp',
    },
    {
      text: 'The platform gave us complete visibility into diagnostics, billing, and operational workflows in real time.',
      author: 'Daniel John',
      role: 'Operations Manager',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100&fm=webp',
    },
    {
      text: 'HealthMed significantly improved our hospital coordination and reduced operational delays across departments.',
      author: 'Alex Bean',
      role: 'Hospital Administrator',
      img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=100&fm=webp',
    }
  ];

  // For a perfect continuous loop, we duplicate to assure infinite height and seamless translation
  const doubledLeft = [...leftReviews, ...leftReviews];
  const doubledRight = [...rightReviews, ...rightReviews];

  const renderCard = (review: typeof leftReviews[0], idx: number, prefix: string) => (
    <div
      key={`${prefix}-${idx}`}
      className="bg-white rounded-md p-8 md:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-brand-gray-200/60 transition-all duration-300 flex-shrink-0 flex flex-col justify-between min-h-[260px]"
      id={`testimonial-card-${prefix}-${idx}`}
    >
      <div>
        {/* Quote Icon indicator */}
        <div className="text-brand-blue-500 mb-6 flex items-center">
          <svg className="w-8 h-8 text-brand-blue-500 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quotation block text */}
        <p className="text-brand-gray-750 text-base md:text-[17px] leading-relaxed mb-8 font-sans">
          {review.text}
        </p>
      </div>

      {/* Author profile info line */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100/50">
        <div className="flex flex-col">
          <span className="font-semibold text-[15px] tracking-tight text-brand-black leading-tight">
            {review.author}
          </span>
          <span className="text-xs md:text-sm text-brand-gray-500 mt-1 leading-none">
            {review.role}
          </span>
        </div>
        <img
          src={review.img}
          alt={review.author}
          width={48}
          height={48}
          className="w-12 h-12 rounded-lg object-cover shadow-sm border border-gray-100"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );

  return (
    <section className="bg-brand-gray-50 py-24 md:py-32 border-b border-brand-gray-200" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Card head section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-gradient-to-b from-[#343A40] to-[#191C1F] text-white text-[11px] md:text-xs font-semibold rounded shadow-sm select-none tracking-wide font-sans cursor-default border border-brand-gray-700/60" id="testimonial-badge">
              Testimonial
            </span>
          </div>
          {/* Typo Match: "What our Client Say" with elegant italicized serif start */}
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-serif font-normal text-brand-black leading-tight tracking-tight mt-6" id="testimonial-heading">
            <span className="italic font-light">What</span> our Client Say
          </h2>
        </div>

        {/* 2-Column Infinite Vertical Marquee Container with fade blurs on edges */}
        <div className="relative max-w-5xl mx-auto h-[720px] overflow-hidden" id="testimonials-scroller-box">
          
          {/* Fade blurs to hide edge entries cleanly */}
          <div className="absolute inset-x-0 top-0 h-24 md:h-32 bg-gradient-to-b from-brand-gray-50 via-brand-gray-50/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-brand-gray-50 via-brand-gray-50/80 to-transparent z-10 pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full" id="testimonials-marquee-grid">
            
            {/* Left Marquee: Scrolls UPWARDS */}
            <div className="h-full overflow-hidden relative flex flex-col" id="col-upwards">
              <div className="flex flex-col gap-6 animate-scroll-y-up hover:[animation-play-state:paused] cursor-pointer">
                {doubledLeft.map((review, i) => renderCard(review, i, 'up'))}
              </div>
            </div>

            {/* Right Marquee: Scrolls DOWNWARDS (hidden on simple screen view to match layout seamlessly) */}
            <div className="h-full overflow-hidden relative hidden md:flex flex-col" id="col-downwards">
              <div className="flex flex-col gap-6 animate-scroll-y-down hover:[animation-play-state:paused] cursor-pointer">
                {doubledRight.map((review, i) => renderCard(review, i, 'down'))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
