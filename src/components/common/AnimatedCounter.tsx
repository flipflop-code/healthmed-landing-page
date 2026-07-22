/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
  decimals?: number;
  className?: string;
  id?: string;
}

/**
 * Parses any numeric value followed by trailing non-numeric suffix characters.
 */
function parseValueAndSuffix(value: number | string, propSuffix?: string) {
  const valStr = String(value);
  // Match a decimal or integer number at the start
  const match = valStr.match(/^([\d.]+)(.*)$/);
  if (!match) {
    return {
      num: 0,
      suffix: propSuffix || valStr,
      decimals: 0
    };
  }

  const num = parseFloat(match[1]);
  const parsedSuffix = match[2] || '';
  const detectedDecimals = match[1].includes('.') ? match[1].split('.')[1].length : 0;

  return {
    num,
    suffix: propSuffix !== undefined ? propSuffix : parsedSuffix,
    decimals: detectedDecimals
  };
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix: propSuffix,
  duration = 4, // Default duration between 1.5 and 2.0 seconds
  decimals,
  className = '',
  id
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Parse values
    const { num, suffix, decimals: parsedDecimals } = parseValueAndSuffix(value, propSuffix);
    const finalDecimals = decimals !== undefined ? decimals : parsedDecimals;

    // Check for prefers-reduced-motion media query
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      elementRef.current.textContent = num.toFixed(finalDecimals) + suffix;
      return;
    }

    // Set starting state for animation
    elementRef.current.textContent = (0).toFixed(finalDecimals) + suffix;

    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: num,
        duration: duration,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 95%', // Trigger immediately as the element enters the bottom of the viewport
          toggleActions: 'play none none none',
          once: true,
        },
        onUpdate: () => {
          if (elementRef.current) {
            elementRef.current.textContent = obj.val.toFixed(finalDecimals) + suffix;
          }
        },
        onComplete: () => {
          // Ensure precise final value matches exactly at the end
          if (elementRef.current) {
            elementRef.current.textContent = num.toFixed(finalDecimals) + suffix;
          }
        }
      });
    }, elementRef);

    return () => {
      ctx.revert();
    };
  }, [value, propSuffix, duration, decimals]);

  // Accessibility: render the final value directly in HTML so it is readable if JS is disabled.
  return (
    <span ref={elementRef} className={className} id={id}>
      {value}
      {propSuffix}
    </span>
  );
};

export default AnimatedCounter;
