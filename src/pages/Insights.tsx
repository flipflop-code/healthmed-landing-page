/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Badge } from '../components/ui/Badge';
import { Heading } from '../components/ui/Heading';
import SEO from '../components/ui/SEO';
import FAQ from '../components/common/FAQ';
import { useGsapFadeIn, useGsapScrollReveal } from '../hooks/useGsapAnimation';

// Shared structured data
import { categories } from '../data/categories';
import { blogs, featuredBlog } from '../data/blogs';
import { faqData } from '../data/faq';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(6);

  const heroRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  // Filter logic
  const filteredBlogs = activeCategory === 'all' 
    ? blogs 
    : blogs.filter(b => b.category === activeCategory);

  // Reset pagination on category change
  useEffect(() => {
    setVisibleCount(3);
  }, [activeCategory]);

  // Reusable GSAP entrance on mount
  useGsapFadeIn('.insights-hero-anim', { y: 35, duration: 0.8, stagger: 0.12 });

  // Reusable GSAP scroll reveals
  useGsapScrollReveal(
    '#featured-blog-card-element',
    '#featured-blog-card-element',
    { y: 40, duration: 1 }
  );

  useGsapScrollReveal(
    '.blog-grid-card-item',
    '#blog-grid-section-container',
    { y: 45, duration: 0.9, stagger: 0.1 },
    [activeCategory]
  );

  useGsapScrollReveal(
    '.insights-faq-anim',
    '#insights-faq-header',
    { y: 30, duration: 0.8, stagger: 0.15 }
  );

  // Structured breadcrumb, blog and FAQ schemas
  const nestedSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://healthmedtechnologies.com/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Insights',
          'item': 'https://healthmedtechnologies.com/insights'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Blog',
      'name': 'Healthcare Insights & Industry Updates | Healthmed',
      'description': 'Explore healthcare technology insights, operational excellence strategies, industry updates, and best practices from Healthmed.',
      'url': 'https://healthmedtechnologies.com/insights',
      'publisher': {
        '@type': 'Organization',
        'name': 'Healthmed Technologies India Pvt Ltd',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://healthmedtechnologies.com/images/favicon.ico'
        }
      }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': faqData.slice(0, 5).map(item => ({
        '@type': 'Question',
        'name': item.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': item.answer
        }
      }))
    }
  ];

  return (
    <div className="bg-[var(--brand-bg-cream)] flex flex-col min-h-screen" id="insights-page-root">
      {/* Reusable SEO configuration component */}
      <SEO 
        title="Healthcare Insights & Industry Updates | Healthmed" 
        description="Explore healthcare technology insights, operational excellence strategies, industry updates, and best practices from Healthmed." 
        canonicalUrl="https://healthmedtechnologies.com/insights"
        schema={nestedSchema}
      />

      {/* Dynamic Navigation */}
      <Navbar />

      <main className="flex-grow">
        
        {/* SECTION 2: BLOG HERO & HEADERS */}
        <section className="w-full px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-36 bg-[var(--brand-bg-cream)]" id="blog-hero" ref={heroRef}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="insights-hero-anim flex justify-center">
              <Badge variant="page" className="mb-6" id="insights-hero-badge">
                Blog
              </Badge>
            </div>

            <h1 className="insights-hero-anim brand-text-9xl text-center text-brand-charcoal" id="insights-main-title">
              Insights Shaping the Future <br />
              of Healthcare Operations
            </h1>

            <p className="insights-hero-anim text-brand-gray-800 mx-auto text-center brand-text-3xl" id="insights-subtitle">
              Explore expert perspectives, industry trends, product updates, and best practices for modern healthcare management.
            </p>
          </div>

          {/* FEATURED ARTICLE CARD */}
          <div className="max-w-6xl mx-auto px-0 mt-20 md:mt-24" id="featured-article-container" ref={featuredRef}>
            <div 
              className="grid grid-cols-1 md:grid-cols-12 overflow-hidden border border-white/5 shadow-xl bg-[var(--brand-navy-dark)] gap-10 sm:gap-14 rounded-[2.5rem] p-6 sm:p-10 md:p-2.5"
              id="featured-blog-card-element"
            >
              {/* Left Column: Image with covered sizing */}
              <Link to="/insights/hms-workloads-35" className="md:col-span-6 aspect-square sm:aspect-video md:aspect-auto h-auto md:h-full rounded-[1.8rem] overflow-hidden relative block">
                <img 
                  src={featuredBlog.imageUrl} 
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover scale-[1.01] transition-transform duration-500 hover:scale-[1.04] rounded-[1.8rem]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width="800"
                  height="450"
                />
              </Link>

              {/* Right Column: Descriptions */}
              <div className="md:col-span-6 flex flex-col justify-center py-4 md:pr-4 space-y-6" id="featured-content-wrapper">
                <span className=" mb-6 block text-left brand-text-xl-medium text-[var(--brand-blue-accent-custom)]">
                  Featured Post
                </span>

                <Link to="/insights/hms-workloads-35" className="block text-left">
                  <Heading 
                    level={2} 
                    className="text-left brand-text-6xl text-white transition-colors"
                    id="featured-title"
                  >
                    How HMIS Platforms <br className="hidden sm:block" />
                    Reduce Administrative <br className="hidden sm:block" />
                    Workload by 35%
                  </Heading>
                </Link>

                <p className="brand-text-xl text-left max-w-xl text-brand-blue-100" id="featured-description">
                  {featuredBlog.description}
                </p>

                <div className="pt-4 text-left">
                  <Link 
                    to="/insights/hms-workloads-35"
                    className="text-white hover:text-[var(--brand-blue-accent-custom)] border-b border-white inline-flex items-center gap-1.5 transition-colors cursor-pointer text-left brand-text-xl-medium group"
                    id="featured-read-action"
                  >
                    <span className=" group-hover:border-current pb-0.5 transition-colors">Read More</span>
                    <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CATEGORIES FILTERS & GRID */}
        <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t bg-white border-brand-gray-200/50" id="blog-grid-section-container" ref={gridRef}>
          <div className="max-w-[80rem] mx-auto">
            {/* Action Title */}
            <h2 className="brand-text-7xl text-brand-charcoal mb-8 text-center" id="categories-heading">
              Categories
            </h2>

            {/* Category selection row */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-16" id="categories-filter-bar">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`rounded-full transition-all duration-300 focus:outline-none cursor-pointer brand-text-xl-medium py-2.5 px-5 ${
                      isActive 
                        ? 'text-white bg-[var(--color-brand-black)] shadow-sm'
                        : 'text-brand-slate bg-white border border-[rgba(233,236,239,0.8)] hover:text-brand-black hover:bg-white/90 hover:border-[var(--color-brand-gray-400)]'
                    }`}
                    id={`filter-pill-${cat.id}`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Grid display layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8 md:gap-8" id="blogs-grid-layout">
              <AnimatePresence mode="popLayout">
                {filteredBlogs.slice(0, visibleCount).map((blog) => (
                  <Link 
                    key={blog.id} 
                    to={`/insights/${blog.slug}`}
                    className="blog-grid-card-item flex flex-col w-full bg-transparent focus:outline-none group"
                    id={`blog-card-${blog.id}`}
                  >
                    {/* Image Area */}
                    <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden relative mb-4 block bg-brand-gray-100 shadow-sm">
                      <img 
                        src={blog.imageUrl} 
                        alt={blog.title} 
                        className="w-full h-full object-cover rounded-2xl transition-transform duration-500 scale-[1.01] group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width="400"
                        height="320"
                      />
                    </div>

                    {/* Meta Row */}
                    <div className="flex items-center justify-between mb-3 border-b pb-3 border-brand-gray-300 " id={`blog-card-meta-${blog.id}`}>
                      <div className="flex items-center gap-1.5 text-left brand-text-xl">
                        <span className="inline-block rounded-xs w-[0.375rem] h-[0.375rem] bg-brand-gray-400" />
                        <span className="text-brand-gray-800">{blog.categoryName}</span>
                      </div>
                      <span className="text-right text-brand-gray-800 whitespace-nowrap brand-text-xl">
                        /{blog.date}
                      </span>
                    </div>

                    {/* Header Title */}
                    <h3 className="text-brand-charcoal text-left mb-2.5 transition-colors brand-text-3xl hover:text-[var(--brand-blue-accent-custom)]" id={`blog-card-title-${blog.id}`}>
                      {blog.title}
                    </h3>

                    {/* Description Excerpt */}
                    <p className="text-brand-gray-700 text-left line-clamp-2 brand-text-xl" id={`blog-card-desc-${blog.id}`}>
                      {blog.description}
                    </p>
                  </Link>
                ))}
              </AnimatePresence>
            </div>

            {/* Loader Trigger button */}
            {visibleCount < filteredBlogs.length && (
              <div className="flex justify-center mt-12 md:mt-16" id="blog-grid-loadmore-container">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="text-white rounded-lg transition-all duration-200 cursor-pointer shadow-sm text-center brand-text-xl-medium bg-[var(--color-brand-black)] py-2.5 px-6 hover:bg-[var(--brand-navy-hover)]"
                  id="btn-load-more"
                >
                  Load more posts
                </button>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: FAQ SECTION */}
        <FAQ
          id="insights-faq-section"
          sectionRef={faqRef}
          className="w-full py-20 md:py-28 border-t border-brand-gray-200/50 bg-[var(--brand-bg-cream)] overflow-hidden"
          headerId="insights-faq-header"
          badge="FAQ"
          badgeId="faq-badge-pill"
          badgeClassName="insights-faq-anim"
          headingId="faq-main-heading"
          headingClassName="insights-faq-anim"
          title={
            <>
              <span className="italic font-normal">Answers to your</span> most common concerns
            </>
          }
          accordionId="insights-faq-accordion"
          items={faqData.slice(0, 5)}
        />

      </main>

      {/* Dynamic Footer */}
      <Footer />
    </div>
  );
}
