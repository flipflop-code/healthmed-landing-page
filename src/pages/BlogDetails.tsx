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
  Instagram,
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
        Administrative <span className="italic">Workload</span> by 35%
      </>
    );
  }
  if (slug === 'ai-transforming-operations') {
    return (
      <>
        How AI is Transforming <br className="hidden md:inline" />
        Modern <span className="italic">Hospital</span> Operations
      </>
    );
  }
  if (slug === 'improving-registration') {
    return (
      <>
        Improving Patient <br className="hidden md:inline" />
        <span className="italic">Registration</span> Without Increasing Staff
      </>
    );
  }
  if (slug === 'reducing-waiting-time') {
    return (
      <>
        Reducing Patient <span className="italic">Waiting Time</span>: <br className="hidden md:inline" />
        Strategies That Actually Work
      </>
    );
  }
  if (slug === 'healthcare-trends-2026') {
    return (
      <>
        Healthcare <span className="italic">Trends</span> Every <br className="hidden md:inline" />
        Administrator Should Watch
      </>
    );
  }
  if (slug === 'reducing-lab-tat') {
    return (
      <>
        Reducing Laboratory Report <span className="italic">TAT</span> <br className="hidden md:inline" />
        Through Workflow Improvements
      </>
    );
  }
  if (slug === 'collaborative-ecosystem') {
    return (
      <>
        Creating a Connected Healthcare <br className="hidden md:inline" />
        <span className="italic">Ecosystem</span> Across Departments
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
    <div className="flex flex-col min-h-screen" id="blog-details-root">
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
        <article className="w-full" id="article-section-body">
          {/* Article Header & Hero Banner */}
          <header className="w-full py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[var(--brand-bg-cream)]" id="article-header-wrapper">
            <div className="max-w-[1040px] mx-auto">
              
              {/* Back Button */}
              <div className="mb-10 article-hero-anim">
                <Link 
                  to="/insights"
                  className="inline-flex items-center gap-1 text-brand-charcoal hover:text-brand-slate brand-text-xl-medium transition-colors select-none"
                  id="back-to-insights-btn"
                >
                  <ChevronLeft className="h-4.5 w-4.5" /> Blog
                </Link>
              </div>

              {/* Main Article Title */}
              <h1 
                className="article-hero-anim brand-text-9xl text-brand-charcoal text-left mb-6"
                id="article-detail-title"
              >
                {getStyledTitle(activePost.slug, activePost.title)}
              </h1>

              {/* Main Article Subtitle / Description */}
              <p className="article-hero-anim text-brand-slate brand-text-3xl mb-12" id="article-detail-description">
                {activePost.description}
              </p>

              {/* Cleaner borderless Metadata row right above the image */}
              <div 
                className="article-hero-anim flex items-center justify-between text-brand-slate pb-4 mb-4 brand-text-xl "
                id="article-metadata-row"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gray-400  inline-block"></span>
                  <span className=" text-brand-charcoal brand-text-xl-medium">
                    {activePost.categoryName}
                  </span>
                </div>
                <div className="text-brand-charcoal brand-text-xl">
                  {activePost.date}
                </div>
              </div>

              {/* Central Featured Image with exact 1040x570px and 16px radius as per Figma spec */}
              <div 
                className="w-full max-w-[1040px] h-[280px] sm:h-[420px] md:h-[570px] overflow-hidden relative rounded-[16px] shadow-sm select-none bg-brand-gray-100 mx-auto"
                id="article-featured-image-canvas"
              >
                <img 
                  src={activePost.imageUrl} 
                  alt={activePost.title}
                  className="w-full h-full object-cover rounded-[16px]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  width="1040"
                  height="570"
                />
              </div>

            </div>
          </header>

          {/* ARTICLE WRITTEN CONTENT SECTION (WHITE BACKGROUND) */}
          <div className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-brand-gray-200/60" id="article-content-wrapper">
            <div className="max-w-4xl mx-auto">

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
                          <h2 className="text-brand-charcoal mt-10 mb-5 brand-text-4xl">
                            {sec.heading}
                          </h2>
                        )}

                        {/* Paragraph blocks */}
                        {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                          <p 
                            key={pIdx} 
                            className="text-brand-slate brand-text-2xl"
                          >
                            {p}
                          </p>
                        ))}

                        {/* Quote sections */}
                        {sec.quote && (
                          <blockquote className="border-l-4 border-brand-blue-accent bg-brand-gray-50/80 rounded-r-xl p-6 sm:p-8 my-8 shadow-sm">
                            <p className="italic text-brand-charcoal text-left brand-text-2xl">
                              "{sec.quote}"
                            </p>
                            {activePost.author && (
                              <cite className="block mt-3 uppercase text-brand-blue-accent not-italic brand-text-xl-medium">
                                — {activePost.author}
                              </cite>
                            )}
                          </blockquote>
                        )}

                        {/* Lists dynamically checked */}
                        {sec.listItems && sec.listItems.length > 0 && (
                          <ul className="list-disc pl-5 sm:pl-6 space-y-3 my-6 text-brand-slate brand-text-2xl">
                            {sec.listItems.map((item, itemIdx) => (
                              <li 
                                key={itemIdx} 
                                className="list-inside pl-1"
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
                    <p className="text-brand-slate brand-text-2xl">
                      {activePost.description}
                    </p>
                    <p className="text-brand-slate brand-text-2xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum turpis eget erat hendrerit, id convallis sem facilisis. Curabitur sed erat ligula. Donec ac ipsum eu purus feugiat molestie. Duis vel est sodales, aliquam nisl ut, luctus mauris.
                    </p>
                  </div>
                )}
              </div>

              {/* Elegant End-of-article Author Profile Signature Card */}
              <div className="max-w-3xl mx-auto border-t border-brand-gray-300/40 mt-16 pt-8 flex items-center gap-4 animate-fade-in" id="article-author-signature">
                <div className="w-10 h-10 rounded-full bg-brand-blue-accent/10 flex items-center justify-center text-brand-blue-accent shadow-sm select-none brand-text-xl-medium">
                  {activePost.author.charAt(0)}
                </div>
                <div className="brand-text-xl">
                  <span className="block text-brand-charcoal brand-text-xl-medium">Written by {activePost.author}</span>
                  <span className="block text-brand-slate mt-0.5">{activePost.authorRole}</span>
                </div>
              </div>

              {/* SOCIAL SHARE SECTION */}
              <div 
                className="max-w-3xl mx-auto border-t border-brand-gray-300/60 pt-8 mt-16 flex items-center justify-end gap-5"
                id="article-social-share-strip"
              >
                <span className="brand-text-xl font-medium text-brand-charcoal mr-1 select-none">
                  Share
                </span>

                <div className="flex items-center gap-4" id="social-share-buttons-container">
                  {/* X / Twitter Trigger */}
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(activePost.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-charcoal hover:text-brand-blue-accent transition-colors p-1"
                    aria-label="Share on X"
                    title="Share on X"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* Facebook Trigger */}
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-charcoal hover:text-brand-blue-accent transition-colors p-1"
                    aria-label="Share on Facebook"
                    title="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5 fill-current stroke-none" />
                  </a>

                  {/* LinkedIn Trigger */}
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-charcoal hover:text-brand-blue-accent transition-colors p-1"
                    aria-label="Share on LinkedIn"
                    title="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 fill-current stroke-none" />
                  </a>

                  {/* Instagram Trigger */}
                  <a 
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-charcoal hover:text-brand-blue-accent transition-colors p-1"
                    aria-label="Share or visit on Instagram"
                    title="Share or visit on Instagram"
                    id="btn-article-instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </article>

        {/* SECTION 2: MORE TO EXPLORE */}
        <section className="w-full py-20 md:py-24 bg-transparent border-t border-brand-gray-300/30" id="more-explore-section">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center mb-14" id="more-explore-trigger">
              <h2 className="brand-text-7xl text-brand-charcoal" id="explore-main-heading">
                <span className="italic">More</span> to Explore
              </h2>
            </div>

            {/* Related items row layout with exact zero-border, borderless aesthetic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12" id="related-blogs-grid">
              {relatedPosts.map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/insights/${blog.slug}`}
                  className="blog-grid-card-item flex flex-col w-full bg-transparent focus:outline-none group"
                  id={`explore-blog-card-${blog.id}`}
                >
                  {/* Image Block with crisp corners and scale-hover anim */}
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

                  {/* Meta Label details: Left-aligned Category with square prefix, right-aligned date with leading slash */}
                  <div className="flex items-center justify-between mb-3 border-b pb-3 border-brand-gray-300 " id={`explore-blog-meta-${blog.id}`}>
                       <div className="flex items-center gap-1.5 text-left brand-text-xl">
                        <span className="inline-block rounded-xs w-[0.375rem] h-[0.375rem] bg-brand-gray-400" />
                        <span className="text-brand-gray-800">{blog.categoryName}</span>
                      </div>
                    <span className="text-right text-brand-gray-800 whitespace-nowrap brand-text-xl">
                      /{blog.date}
                    </span>
                  </div>

                  {/* Title details with snug line height */}
                  <h3 className="text-brand-charcoal text-left mb-2.5 transition-colors brand-text-3xl hover:text-[var(--brand-blue-accent-custom)]" id={`explore-blog-title-${blog.id}`}>
                    {blog.title}
                  </h3>

                  {/* Excerpt details */}
                  <p className="text-brand-gray-700 text-left line-clamp-2 brand-text-xl" id={`explore-blog-desc-${blog.id}`}>
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
