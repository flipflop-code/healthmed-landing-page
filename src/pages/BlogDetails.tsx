/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Link as LinkIcon, 
  Check, 
  ArrowLeft,
  ChevronLeft
} from 'lucide-react';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Badge } from '../components/ui/Badge';
import { Heading } from '../components/ui/Heading';
import SEO from '../components/ui/SEO';
import { getBlogBySlug, blogs as allBlogs } from '../data/blogs';
import { useGsapFadeIn, useGsapScrollReveal } from '../hooks/useGsapAnimation';

// Premium editorial title parser/styler
const getStyledTitle = (slug: string, defaultTitle: string) => {
  if (slug === 'hms-workloads-35') {
    return (
      <>
        How HMIS Platforms Reduce <br className="hidden md:inline" />
        Administrative <span className="italic font-normal">Workload</span> by 35%
      </>
    );
  }
  if (slug === 'ai-transforming-operations') {
    return (
      <>
        How AI is Transforming <br className="hidden md:inline" />
        Modern <span className="italic font-normal">Hospital</span> Operations
      </>
    );
  }
  if (slug === 'improving-registration') {
    return (
      <>
        Improving Patient <br className="hidden md:inline" />
        <span className="italic font-normal">Registration</span> Without Increasing Staff
      </>
    );
  }
  if (slug === 'reducing-waiting-time') {
    return (
      <>
        Reducing Patient <span className="italic font-normal">Waiting Time</span>: <br className="hidden md:inline" />
        Strategies That Actually Work
      </>
    );
  }
  if (slug === 'healthcare-trends-2026') {
    return (
      <>
        Healthcare <span className="italic font-normal">Trends</span> Every <br className="hidden md:inline" />
        Administrator Should Watch
      </>
    );
  }
  if (slug === 'reducing-lab-tat') {
    return (
      <>
        Reducing Laboratory Report <span className="italic font-normal">TAT</span> <br className="hidden md:inline" />
        Through Workflow Improvements
      </>
    );
  }
  if (slug === 'collaborative-ecosystem') {
    return (
      <>
        Creating a Connected Healthcare <br className="hidden md:inline" />
        <span className="italic font-normal">Ecosystem</span> Across Departments
      </>
    );
  }
  return defaultTitle;
};

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);

  const articleContentRef = useRef<HTMLDivElement>(null);

  // Look up current dynamic post details
  const currentSlug = slug || 'hms-workloads-35';
  const post = getBlogBySlug(currentSlug);

  // Fallback to featured blog or redirect if totally invalid
  const activePost = post || getBlogBySlug('hms-workloads-35')!;

  // Related posts: pick up to 3 posts excluding the current one
  const relatedPosts = allBlogs
    .filter((b) => b.slug !== activePost.slug)
    .slice(0, 3);

  // Handle link clipboard copy
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // GSAP animation hooks
  useGsapFadeIn('.article-hero-anim', { y: 30, duration: 0.8, stagger: 0.12 });

  useGsapFadeIn(
    '#article-featured-image-canvas', 
    { y: 35, duration: 0.95, ease: 'power3.out' }
  );

  useGsapScrollReveal(
    '.article-content-block',
    '#article-rendered-prose',
    { y: 25, duration: 0.8, stagger: 0.15, ease: 'power2.out' }
  );

  useGsapScrollReveal(
    '.explore-blog-card',
    '#more-explore-trigger',
    { y: 35, duration: 0.8, stagger: 0.12, ease: 'power3.out', start: 'top 80%' }
  );

  const currentUrl = `https://healthmedtechnologies.com/insights/${activePost.slug}`;

  // Structured breadcrumb and article metadata schemas
  const articleSchema = [
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
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': activePost.title,
          'item': currentUrl
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      'headline': activePost.title,
      'description': activePost.description,
      'image': [activePost.imageUrl],
      'datePublished': '2026-06-12T08:00:00+05:30',
      'dateModified': '2026-06-12T08:30:00+05:30',
      'author': {
        '@type': 'Person',
        'name': activePost.author,
        'jobTitle': activePost.authorRole
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Healthmed Technologies India Pvt Ltd',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://healthmedtechnologies.com/images/favicon.ico'
        }
      }
    }
  ];

  return (
    <div className="blog-details-root-container flex flex-col min-h-screen" id="blog-details-root">
      {/* Article-specific SEO tags setup */}
      <SEO 
        title={`${activePost.title} | Healthmed`}
        description={activePost.description}
        canonicalUrl={currentUrl}
        ogImage={activePost.imageUrl}
        schema={articleSchema}
      />
      
      {/* Dynamic Header */}
      <Navbar />

      <main className="flex-grow">
        
        {/* SECTION 1: HEADER & ARTICLE INTRO */}
        <article className="details-main-section" id="article-section-body">
          <div className="max-w-4xl mx-auto">
            
            {/* Back Button */}
            <div className="mb-10 article-hero-anim">
              <Link 
                to="/insights"
                className="inline-flex items-center gap-1 text-brand-charcoal hover:text-brand-slate font-sans text-sm md:text-base font-medium transition-colors select-none"
                id="back-to-insights-btn"
              >
                <ChevronLeft className="h-4.5 w-4.5" /> Blog
              </Link>
            </div>

            {/* Main Article Title */}
            <h1 
              className="article-hero-anim details-hero-title mb-6"
              id="article-detail-title"
            >
              {getStyledTitle(activePost.slug, activePost.title)}
            </h1>

            {/* Main Article Subtitle / Description */}
            <p className="article-hero-anim text-brand-slate font-sans text-base sm:text-lg md:text-[19px] leading-relaxed mb-12 max-w-3xl" id="article-detail-description">
              {activePost.description}
            </p>

            {/* Cleaner borderless Metadata row right above the image */}
            <div 
              className="article-hero-anim flex items-center justify-between text-xs sm:text-sm font-sans tracking-tight text-brand-slate pb-4 mb-4"
              id="article-metadata-row"
            >
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-brand-blue-accent inline-block"></span>
                <span className="font-semibold uppercase tracking-wider text-brand-slate text-[11px] sm:text-xs">
                  {activePost.categoryName}
                </span>
              </div>
              <div className="text-brand-slate text-[11px] sm:text-xs font-mono">
                {activePost.date}
              </div>
            </div>

            {/* Central Featured Image with exact rounded-3xl corners as in the UI */}
            <div 
              className="w-full overflow-hidden relative rounded-3xl shadow-sm mb-16 select-none bg-brand-gray-100"
              id="article-featured-image-canvas"
            >
              <img 
                src={activePost.imageUrl} 
                alt={activePost.title}
                className="w-full h-auto object-cover rounded-3xl"
                referrerPolicy="no-referrer"
                loading="eager"
                width="1200"
                height="600"
              />
            </div>

            {/* ARTICLE WRITTEN CONTENT */}
            <div 
              ref={articleContentRef} 
              className="max-w-3xl mx-auto prose prose-slate prose-lg lg:prose-xl"
              id="article-rendered-prose"
            >
              {activePost.sections && activePost.sections.length > 0 ? (
                <div className="space-y-12">
                  {activePost.sections.map((sec, index) => (
                    <div 
                      key={index} 
                      className="article-content-block space-y-5"
                      id={`article-section-${index}`}
                    >
                      {/* Heading structures dynamic */}
                      {sec.heading && (
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-charcoal tracking-tight font-medium mt-10 mb-5 leading-snug">
                          {sec.heading}
                        </h2>
                      )}

                      {/* Paragraph blocks */}
                      {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                        <p 
                          key={pIdx} 
                          className="font-sans text-brand-slate text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed tracking-normal font-normal"
                        >
                          {p}
                        </p>
                      ))}

                      {/* Quote sections */}
                      {sec.quote && (
                        <blockquote className="border-l-4 border-brand-blue-accent bg-white/50 rounded-r-xl p-6 sm:p-8 my-8 shadow-sm">
                          <p className="font-serif italic text-brand-charcoal text-lg sm:text-xl md:text-2xl leading-relaxed text-left">
                            "{sec.quote}"
                          </p>
                          {activePost.author && (
                            <cite className="block mt-3 text-xs sm:text-sm font-sans font-bold uppercase tracking-wider text-brand-blue-accent not-italic">
                              — {activePost.author}
                            </cite>
                          )}
                        </blockquote>
                      )}

                      {/* Lists dynamically checked */}
                      {sec.listItems && sec.listItems.length > 0 && (
                        <ul className="list-disc pl-5 sm:pl-6 space-y-3 my-6 font-sans text-brand-slate text-[15px] sm:text-[16px] md:text-[17px]">
                          {sec.listItems.map((item, itemIdx) => (
                            <li 
                              key={itemIdx} 
                              className="leading-relaxed list-inside pl-1"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                // Fallback structured description
                <div className="space-y-6 article-content-block">
                  <p className="font-sans text-brand-slate text-[16px] md:text-lg leading-relaxed">
                    {activePost.description}
                  </p>
                  <p className="font-sans text-brand-slate text-[16px] md:text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum turpis eget erat hendrerit, id convallis sem facilisis. Curabitur sed erat ligula. Donec ac ipsum eu purus feugiat molestie. Duis vel est sodales, aliquam nisl ut, luctus mauris.
                  </p>
                </div>
              )}
            </div>

            {/* Elegant End-of-article Author Profile Signature Card */}
            <div className="max-w-3xl mx-auto border-t border-brand-gray-300/40 mt-16 pt-8 flex items-center gap-4 animate-fade-in" id="article-author-signature">
              <div className="w-10 h-10 rounded-full bg-brand-blue-accent/10 flex items-center justify-center text-brand-blue-accent font-serif font-bold text-sm shadow-sm select-none">
                {activePost.author.charAt(0)}
              </div>
              <div className="font-sans text-sm">
                <span className="block font-semibold text-brand-charcoal">Written by {activePost.author}</span>
                <span className="block text-xs text-brand-slate mt-0.5">{activePost.authorRole}</span>
              </div>
            </div>

            {/* SOCIAL SHARE SECTION */}
            <div 
              className="max-w-3xl mx-auto border-t border-brand-gray-300/70 pt-8 mt-16 flex flex-wrap items-center justify-between gap-4"
              id="article-social-share-strip"
            >
              <span className="details-meta-info-sidebar">
                Share this article
              </span>

              <div className="flex items-center gap-3" id="social-share-buttons-container">
                {/* Facebook Trigger */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white hover:bg-brand-gray-100 border border-brand-gray-300 text-brand-slate hover:text-brand-blue-accent flex items-center justify-center transition-all duration-200"
                  aria-label="Share on Facebook"
                  title="Share on Facebook"
                >
                  <Facebook className="h-4.5 w-4.5" />
                </a>

                {/* X / Twitter Trigger */}
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(activePost.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white hover:bg-brand-gray-100 border border-brand-gray-300 text-brand-slate hover:text-brand-blue-accent flex items-center justify-center transition-all duration-200"
                  aria-label="Share on X"
                  title="Share on X"
                >
                  <Twitter className="h-4.5 w-4.5" />
                </a>

                {/* LinkedIn Trigger */}
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white hover:bg-brand-gray-100 border border-brand-gray-300 text-brand-slate hover:text-brand-blue-accent flex items-center justify-center transition-all duration-200"
                  aria-label="Share on LinkedIn"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="h-4.5 w-4.5" />
                </a>

                {/* Copy Link Trigger button */}
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className={`w-9 h-9 rounded-full bg-white border flex items-center justify-center transition-all duration-200 cursor-pointer ${
                    copied 
                      ? 'details-share-btn-copied' 
                      : 'border-brand-gray-300 text-brand-slate hover:text-brand-blue-accent hover:bg-brand-gray-100'
                  }`}
                  aria-label="Copy link address"
                  title="Copy link address"
                  id="btn-article-copy-link"
                >
                  {copied ? <Check className="h-4.5 w-4.5" /> : <LinkIcon className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {/* Tiny copy success indicator */}
            <AnimatePresence>
              {copied && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="text-right max-w-3xl mx-auto mt-2 text-xs font-sans text-emerald-600 font-semibold"
                  id="toast-clipboard-success"
                >
                  Link successfully copied to clipboard!
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </article>

        {/* SECTION 2: MORE TO EXPLORE */}
        <section className="w-full py-20 md:py-24 bg-transparent border-t border-brand-gray-300/30" id="more-explore-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14" id="more-explore-trigger">
              <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal font-normal" id="explore-main-heading">
                <span className="italic font-normal">More</span> to Explore
              </h2>
            </div>

            {/* Related items row layout with exact zero-border, borderless aesthetic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12" id="related-blogs-grid">
              {relatedPosts.map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/insights/${blog.slug}`}
                  className="flex flex-col h-full group select-none cursor-pointer"
                  id={`explore-blog-card-${blog.id}`}
                >
                  {/* Image Block with crisp corners and scale-hover anim */}
                  <div className="aspect-[1.5] w-full rounded-2xl overflow-hidden relative mb-5 block bg-brand-gray-100 shadow-sm border border-brand-gray-200/10">
                    <img 
                      src={blog.imageUrl} 
                      alt={blog.title} 
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      width="400"
                      height="270"
                    />
                  </div>

                  {/* Meta Label details: Left-aligned Category with square prefix, right-aligned date with leading slash */}
                  <div className="flex items-center justify-between text-xs sm:text-sm font-sans text-brand-slate mb-3.5 px-0.5" id={`explore-blog-meta-${blog.id}`}>
                    <div className="flex items-center gap-1.5 font-medium text-brand-slate">
                      <span className="inline-block w-1.5 h-1.5 bg-brand-gray-400"></span>
                      <span>{blog.categoryName}</span>
                    </div>
                    <span className="font-mono text-brand-slate/85">
                      /{blog.date}
                    </span>
                  </div>

                  {/* Title details with snug line height */}
                  <h3 className="text-lg sm:text-[19px] font-sans font-bold text-brand-charcoal leading-snug mb-3 px-0.5 group-hover:text-brand-blue-accent transition-colors duration-200" id={`explore-blog-title-${blog.id}`}>
                    {blog.title}
                  </h3>

                  {/* Excerpt details */}
                  <p className="text-xs sm:text-[13px] md:text-sm font-sans text-brand-slate leading-relaxed flex-grow line-clamp-3 px-0.5" id={`explore-blog-desc-${blog.id}`}>
                    {blog.description}
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </section>

      </main>

      {/* Footer component reuse */}
      <Footer />
    </div>
  );
}
