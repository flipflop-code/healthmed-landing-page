/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2, Flag } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/ui/SEO';
import { Heading } from '../components/ui/Heading';
import { Button } from '../components/ui/Button';

export default function NotFound() {
  const location = useLocation();
  const [reported, setReported] = useState(false);

  const destinations = [
    {
      title: 'Platform Overview',
      description: 'Explore our unified healthcare operations platform.',
      to: '/',
    },
    {
      title: 'Core Modules',
      description: 'Patient care, hospital operations, billing & insights.',
      to: '/#modules',
    },
    {
      title: 'Healthcare Insights',
      description: 'Read articles, workflow guides, and case studies.',
      to: '/insights',
    },
    {
      title: 'Contact & Support',
      description: 'Schedule a walkthrough or message our team.',
      to: '/contact',
    },
  ];

  const handleReportBrokenLink = () => {
    setReported(true);
  };

  return (
    <div className="bg-[var(--brand-bg-cream)] flex flex-col min-h-screen" id="not-found-page-root">
      <SEO
        title="Page Not Found (404) | HealthMed"
        description="The page you requested could not be found. Return to the HealthMed homepage or browse our healthcare platform pages."
        robots="noindex, follow"
      />

      <Navbar />

      <main className="flex-grow flex items-center">
        <section
          className="w-full py-12 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
          id="not-found-section"
          aria-labelledby="not-found-heading"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial 404 Message & Recovery Actions */}
            <div className="lg:col-span-7 flex flex-col items-start" id="not-found-content">
              <p className="brand-text-xl-medium text-[var(--color-primary)] mb-3 sm:mb-4 flex items-center gap-2">
                <span>Error 404</span>
                <span aria-hidden="true" className="text-[var(--color-brand-gray-400)]">·</span>
                <span className="text-[var(--color-brand-gray-600)] font-normal">Page Not Found</span>
              </p>

              <Heading
                level={1}
                id="not-found-heading"
                className="brand-text-8xl text-[var(--color-brand-charcoal)] mb-4 sm:mb-6 [text-wrap:balance]"
              >
                We couldn&apos;t find{' '}
                <span className="italic text-[var(--color-primary)]">that page.</span>
              </Heading>

              <p
                className="brand-text-3xl text-[var(--color-brand-gray-600)] max-w-xl mb-6 sm:mb-8 leading-relaxed"
                id="not-found-description"
              >
                The link you followed may be outdated, mistyped, or moved. Only this specific page is missing—the rest of HealthMed is online and ready to explore.
              </p>

              {/* Missing path summary & broken-link report */}
              <div className="w-full max-w-xl border-t border-b border-[var(--color-border-subtle)] py-3.5 sm:py-4 mb-6 sm:mb-8 flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0 flex items-center gap-2 text-sm text-[var(--color-brand-gray-600)]">
                  <span className="shrink-0">Requested URL:</span>
                  <code className="font-mono text-xs sm:text-sm text-[var(--color-brand-charcoal)] truncate max-w-[200px] sm:max-w-[300px]">
                    {location.pathname}
                  </code>
                </div>
                <button
                  type="button"
                  onClick={handleReportBrokenLink}
                  disabled={reported}
                  className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] disabled:text-[var(--color-brand-gray-700)] transition-colors cursor-pointer disabled:cursor-default whitespace-nowrap shrink-0 inline-flex items-center gap-1.5"
                  id="not-found-report-btn"
                >
                  {reported ? (
                    <>
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span>Broken link noted</span>
                    </>
                  ) : (
                    <>
                      <Flag className="h-3.5 w-3.5 shrink-0" />
                      <span>Report broken link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary Recovery Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4" id="not-found-actions">
                <Button
                  variant="primary"
                  href="/"
                  id="not-found-home-btn"
                  className="gap-2 whitespace-nowrap shrink-0"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Homepage
                </Button>
                <Button
                  variant="outline"
                  href="/contact"
                  id="not-found-contact-btn"
                  className="whitespace-nowrap shrink-0 hover:border-[var(--color-brand-charcoal)] hover:bg-black/5"
                >
                  Contact Support
                </Button>
              </div>
            </div>

            {/* Right Column: Helpful Destinations Card */}
            <div className="lg:col-span-5" id="not-found-destinations-wrapper">
              <div
                className="bg-[var(--color-brand-white)] border border-[var(--color-border-subtle)] rounded-[var(--radius-2xl)] p-5 sm:p-8 shadow-[var(--shadow-card)]"
                id="not-found-destinations-card"
              >
                <h2 className="brand-text-5xl text-[var(--color-brand-charcoal)] mb-1.5">
                  Helpful Destinations
                </h2>
                <p className="brand-text-xl text-[var(--color-brand-gray-600)] mb-5 sm:mb-6">
                  Continue exploring HealthMed from our main sections.
                </p>

                <nav aria-label="Helpful site links" className="divide-y divide-[var(--color-border)]">
                  {destinations.map((item) => {
                    const isHashLink = item.to.includes('#');
                    const content = (
                      <>
                        <div className="min-w-0">
                          <div className="brand-text-2xl-medium text-[var(--color-brand-gray-900)] group-hover:text-[var(--color-primary)] transition-colors">
                            {item.title}
                          </div>
                          <div className="text-sm text-[var(--color-brand-gray-600)] mt-0.5">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-[var(--color-brand-gray-500)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all shrink-0" />
                      </>
                    );

                    return isHashLink ? (
                      <a
                        key={item.to}
                        href={item.to}
                        className="py-4 flex items-center justify-between gap-4 group no-underline"
                      >
                        {content}
                      </a>
                    ) : (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="py-4 flex items-center justify-between gap-4 group no-underline"
                      >
                        {content}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
