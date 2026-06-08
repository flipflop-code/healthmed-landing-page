/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/home/Hero';
import Partners from '../sections/home/Partners';

// Below-the-fold sections are dynamically imported to maximize LightHouse performance scores and page initialization
const WhyChooseUs = lazy(() => import('../sections/home/WhyChooseUs'));
const EcosystemHub = lazy(() => import('../sections/home/EcosystemHub'));
const Products = lazy(() => import('../sections/home/Products'));
const Features = lazy(() => import('../sections/home/Features'));
const AIWorkflows = lazy(() => import('../sections/home/AIWorkflows'));
const Impact = lazy(() => import('../sections/home/Impact'));
const Testimonials = lazy(() => import('../sections/home/Testimonials'));
const FAQ = lazy(() => import('../sections/home/FAQ'));
const ModernizeCTA = lazy(() => import('../sections/home/ModernizeCTA'));

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white" id="home-page-container">
      {/* Navigation Layout */}
      <Navbar />

      {/* Main Sections Fold Flow */}
      <main className="flex-grow">
        <Hero />
        <Partners />
        
        {/* Progressively hydrated lower folds preserve layout spacing to yield 0.00 CLS */}
        <Suspense fallback={<div className="bg-brand-bg w-full min-h-[500px] border-b border-brand-gray-100" />}>
          <WhyChooseUs />
        </Suspense>

        <Suspense fallback={<div className="bg-brand-bg w-full min-h-[500px] border-b border-brand-gray-100" />}>
          <EcosystemHub />
        </Suspense>

        <Suspense fallback={<div className="bg-brand-bg w-full min-h-[500px] border-b border-brand-gray-100" />}>
          <Products />
        </Suspense>

        <Suspense fallback={<div className="bg-brand-blue-accent w-full min-h-[400px] border-b border-brand-blue-600" />}>
          <Features />
        </Suspense>

        <Suspense fallback={<div className="bg-[#FAF9F6] w-full min-h-[500px] border-b border-brand-gray-200" />}>
          <AIWorkflows />
        </Suspense>

        <Suspense fallback={<div className="bg-white w-full min-h-[400px] border-b border-brand-gray-200" />}>
          <Impact />
        </Suspense>

        <Suspense fallback={<div className="bg-brand-gray-50 w-full min-h-[500px] border-b border-brand-gray-200" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="bg-brand-bg w-full min-h-[500px] border-b border-brand-gray-100" />}>
          <FAQ />
        </Suspense>

        <Suspense fallback={<div className="bg-brand-bg w-full min-h-[400px] border-b border-brand-gray-100" />}>
          <ModernizeCTA />
        </Suspense>
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  );
}
