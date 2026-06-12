/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FadeInOptions {
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
}

interface ScrollRevealOptions extends FadeInOptions {
  start?: string;
  once?: boolean;
}

/**
 * Reusable GSAP hook to animate elements on initial container or component mount.
 */
export function useGsapFadeIn(
  target: string | HTMLElement | (HTMLElement | null)[] | null,
  options: FadeInOptions = {},
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!target) return;

    const {
      y = 30,
      duration = 0.8,
      stagger = 0.12,
      delay = 0,
      ease = 'power3.out'
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          delay,
          ease,
          force3D: true
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, dependencies);
}

/**
 * Reusable GSAP hook to animate elements using ScrollTrigger when scrolled into view.
 */
export function useGsapScrollReveal(
  target: string | HTMLElement | (HTMLElement | null)[] | null,
  trigger: string | HTMLElement | null,
  options: ScrollRevealOptions = {},
  dependencies: any[] = []
) {
  useEffect(() => {
    if (!target || !trigger) return;

    const {
      y = 40,
      duration = 0.8,
      stagger = 0.1,
      ease = 'power3.out',
      start = 'top 85%',
      once = true
    } = options;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        target,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease,
          force3D: true,
          scrollTrigger: {
            trigger: trigger as any,
            start,
            toggleActions: 'play none none none',
            once
          }
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, dependencies);
}
