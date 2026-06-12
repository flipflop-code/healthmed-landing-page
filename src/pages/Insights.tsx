/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Badge } from '../components/ui/Badge';
import { Heading } from '../components/ui/Heading';
import SEO from '../components/ui/SEO';
import { useGsapFadeIn, useGsapScrollReveal } from '../hooks/useGsapAnimation';

// Shared structured data
import { categories } from '../data/categories';
import { blogs, featuredBlog } from '../data/blogs';
import { faqData } from '../data/faq';

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

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

  const toggleFaq = (idx: number) => {
    setActiveFaqIndex(activeFaqIndex === idx ? null : idx);
  };

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
    <div className="insights-page-root flex flex-col min-h-screen" id="insights-page-root">
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
        <section className="blog-hero-section" id="blog-hero" ref={heroRef}>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="insights-hero-anim flex justify-center">
              <Badge variant="white" className="insights-hero-badge" id="insights-hero-badge">
                Blog
              </Badge>
            </div>

            <h1 className="insights-hero-anim insights-hero-title" id="insights-main-title">
              Insights Shaping the Future <br />
              of Healthcare Operations
            </h1>

            <p className="insights-hero-anim insights-hero-subtitle" id="insights-subtitle">
              Explore expert perspectives, industry trends, product updates, and best practices for modern healthcare management.
            </p>
          </div>

          {/* FEATURED ARTICLE CARD */}
          <div className="featured-blog-card-wrapper" id="featured-article-container" ref={featuredRef}>
            <div 
              className="featured-blog-card-grid"
              id="featured-blog-card-element"
            >
              {/* Left Column: Image with covered sizing */}
              <Link to="/insights/hms-workloads-35" className="featured-image-link">
                <img 
                  src={featuredBlog.imageUrl} 
                  alt={featuredBlog.title}
                  className="featured-image-canvas"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width="800"
                  height="450"
                />
              </Link>

              {/* Right Column: Descriptions */}
              <div className="md:col-span-7 flex flex-col justify-center py-4 md:pr-4 space-y-6" id="featured-content-wrapper">
                <span className="featured-tag-badge">
                  Featured Post
                </span>

                <Link to="/insights/hms-workloads-35" className="block text-left">
                  <Heading 
                    level={2} 
                    className="featured-title-text"
                    id="featured-title"
                  >
                    How HMIS Platforms <br className="hidden sm:block" />
                    Reduce Administrative <br className="hidden sm:block" />
                    Workload by 35%
                  </Heading>
                </Link>

                <p className="featured-desc-text" id="featured-description">
                  {featuredBlog.description}
                </p>

                <div className="pt-4 text-left">
                  <Link 
                    to="/insights/hms-workloads-35"
                    className="featured-read-btn"
                    id="featured-read-action"
                  >
                    <span className="featured-read-btn-label">Read More</span>
                    <span className="featured-read-btn-arrow">&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: CATEGORIES FILTERS & GRID */}
        <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t bg-white border-brand-gray-200/50" id="blog-grid-section-container" ref={gridRef}>
          <div className="max-w-6xl mx-auto">
            {/* Action Title */}
            <h2 className="categories-title-heading" id="categories-heading">
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
                    className={`categories-pill-base ${
                      isActive 
                        ? 'categories-pill-active'
                        : 'categories-pill-inactive'
                    }`}
                    id={`filter-pill-${cat.id}`}
                  >
                    {cat.name}
                  </button>
                );
              })}
            </div>

            {/* Grid display layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12" id="blogs-grid-layout">
              <AnimatePresence mode="popLayout">
                {filteredBlogs.slice(0, visibleCount).map((blog) => (
                  <Link 
                    key={blog.id} 
                    to={`/insights/${blog.slug}`}
                    className="blog-grid-card-item blog-grid-card-inner group"
                    id={`blog-card-${blog.id}`}
                  >
                    {/* Image Area */}
                    <div className="blog-grid-card-image-wrapper">
                      <img 
                        src={blog.imageUrl} 
                        alt={blog.title} 
                        className="blog-grid-card-image-el"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width="400"
                        height="340"
                      />
                    </div>

                    {/* Meta Row */}
                    <div className="blog-grid-meta-row flex" id={`blog-card-meta-${blog.id}`}>
                      <div className="blog-grid-category-box">
                        <span className="blog-grid-category-dot" />
                        <span className="blog-grid-category-text">{blog.categoryName}</span>
                      </div>
                      <span className="blog-grid-date-text">
                        /{blog.date}
                      </span>
                    </div>

                    {/* Header Title */}
                    <h3 className="blog-grid-title-el" id={`blog-card-title-${blog.id}`}>
                      {blog.title}
                    </h3>

                    {/* Description Excerpt */}
                    <p className="blog-grid-desc-el" id={`blog-card-desc-${blog.id}`}>
                      {blog.description}
                    </p>
                  </Link>
                ))}
              </AnimatePresence>
            </div>

            {/* Loader Trigger button */}
            {visibleCount < filteredBlogs.length && (
              <div className="blog-load-more-container" id="blog-grid-loadmore-container">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 3)}
                  className="blog-load-more-btn"
                  id="btn-load-more"
                >
                  Load more posts
                </button>
              </div>
            )}
          </div>
        </section>

        {/* SECTION 4: FAQ SECTION */}
        <section className="blog-faq-section-wrapper" id="insights-faq-section" ref={faqRef}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Centered Heading */}
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20" id="insights-faq-header">
              <div className="insights-faq-anim flex justify-center mb-5">
                <Badge variant="dark" id="faq-badge-pill">
                  FAQ
                </Badge>
              </div>
              <Heading level={2} id="faq-main-heading" className="insights-faq-anim text-brand-charcoal text-4xl md:text-5xl font-serif leading-snug">
                <span className="italic font-normal">Answers to your</span> most common concerns
              </Heading>
            </div>

            {/* Accordion List with dividers */}
            <div className="border-t border-brand-gray-300 max-w-3xl mx-auto" id="insights-faq-accordion">
              {faqData.slice(0, 5).map((faq, idx) => {
                const isOpen = activeFaqIndex === idx;
                return (
                  <div 
                    key={idx} 
                    className="border-b border-brand-gray-300 overflow-hidden"
                    id={`insights-faq-row-${idx}`}
                  >
                    {/* Header Trigger bar */}
                    <button
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full text-left py-6 flex items-center justify-between gap-4 font-sans font-medium text-base sm:text-lg md:text-body-lg text-brand-charcoal hover:text-brand-blue-accent transition-colors focus:outline-none cursor-pointer"
                      id={`insights-faq-button-${idx}`}
                    >
                      <span className="tracking-tight">{faq.question}</span>
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-blue-accent hover:bg-brand-blue-accent-hover flex items-center justify-center text-white shadow-sm transition-colors duration-200">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-white stroke-[2.5]" />
                        ) : (
                          <Plus className="h-4 w-4 text-white stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {/* Collapsible Answer Pane */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          id={`insights-faq-panel-${idx}`}
                        >
                          <div className="pb-6 text-brand-slate text-sm sm:text-base leading-relaxed font-sans max-w-2xl bg-transparent">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* Dynamic Footer */}
      <Footer />
    </div>
  );
}
