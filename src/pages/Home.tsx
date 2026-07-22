/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../sections/home/Hero';
import Partners from '../sections/home/Partners';
import Modules from '../sections/home/Modules';
import WhyChooseUs from '../sections/home/WhyChooseUs';
import EcosystemHub from '../sections/home/EcosystemHub';
import Products from '../sections/home/Products';
import Features from '../sections/home/Features';
import AIWorkflows from '../sections/home/AIWorkflows';
import Impact from '../sections/home/Impact';
import Testimonials from '../sections/home/Testimonials';
import VideoTestimonials from '../sections/home/VideoTestimonials';
import CustomerStories from '../sections/home/CustomerStories';
import FAQ from '../sections/home/FAQ';
import ModernizeCTA from '../sections/home/ModernizeCTA';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-gray-100" id="home-page-container">
      {/* Navigation Layout */}
      <Navbar />

      {/* Main Sections Fold Flow */}
      <main className="flex-grow">
        <Hero />
        <Partners />
        <Modules />
        <WhyChooseUs />
        <EcosystemHub />
        <Products />
        <Features />
        <AIWorkflows />
        <Impact />
        <CustomerStories />
        <Testimonials />
        <VideoTestimonials />
        <FAQ />
        <ModernizeCTA />
      </main>

      {/* Footer Layout */}
      <Footer />
    </div>
  );
}
