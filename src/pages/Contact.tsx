/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    howHelp: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Multi-route state restoration/management
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });

    // SEO Meta updates
    const prevTitle = document.title;
    const prevDescMeta = document.querySelector('meta[name="description"]');
    const prevDesc = prevDescMeta?.getAttribute('content') || '';
    
    // Set dynamic values
    document.title = 'Contact Us | Healthmed';
    if (prevDescMeta) {
      prevDescMeta.setAttribute('content', 'Contact Healthmed for healthcare software solutions, support, and healthcare technology consultations.');
    }

    // Direct Canonical Link tag handling
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const prevCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://healthmedtechnologies.com/contact');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://healthmedtechnologies.com/contact');
      document.head.appendChild(canonicalLink);
    }

    // Open Graph Head Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    const prevOgUrl = ogUrl?.getAttribute('content') || '';

    if (ogTitle) ogTitle.setAttribute('content', 'Contact Us | Healthmed');
    if (ogDesc) ogDesc.setAttribute('content', 'Contact Healthmed for healthcare software solutions, support, and healthcare technology consultations.');
    if (ogUrl) ogUrl.setAttribute('content', 'https://healthmedtechnologies.com/contact');

    // Schema Markup
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.id = 'contact-json-schema';
    schemaScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact Us - Healthmed',
      'description': 'Contact Healthmed for healthcare software solutions, support, and healthcare technology consultations.',
      'url': 'https://healthmedtechnologies.com/contact',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Healthmed Technologies India Pvt Ltd',
        'telephone': '+91 9500450672',
        'email': 'info@healthmedtechnologies.com',
        'address': {
          '@type': 'PostalAddress',
          'streetAddress': 'Guindy Industrial Estate, SIDCO Industrial Estate',
          'addressLocality': 'Guindy, Chennai',
          'addressRegion': 'Tamil Nadu',
          'postalCode': '600032',
          'addressCountry': 'IN'
        }
      }
    });
    document.head.appendChild(schemaScript);

    // Clean up on component unmount to restore home meta tags perfectly
    return () => {
      document.title = prevTitle;
      if (prevDescMeta) {
        prevDescMeta.setAttribute('content', prevDesc);
      }
      if (canonicalLink) {
        if (prevCanonical) {
          canonicalLink.setAttribute('href', prevCanonical);
        } else {
          canonicalLink.remove();
        }
      }
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      if (ogUrl && prevOgUrl) ogUrl.setAttribute('content', prevOgUrl);
      
      const attachedSchema = document.getElementById('contact-json-schema');
      if (attachedSchema) {
        attachedSchema.remove();
      }
    };
  }, []);

  // GSAP Animation setup with context revert on unmount for 0 CLS and safe GPU acceleration
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero fade up elements
      gsap.fromTo(
        '.contact-hero-anim',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          force3D: true,
        }
      );

      // Info card slide-in-left
      gsap.fromTo(
        '#contact-info-card',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: '#contact-info-card',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );

      // Form card slide-in-right
      gsap.fromTo(
        '#contact-form-card',
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: '#contact-form-card',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          }
        }
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      setSubmitStatus('error');
      return;
    }
    // Simple mock success handling
    setSubmitStatus('success');
    setFormData({
      fullName: '',
      email: '',
      howHelp: '',
      message: ''
    });
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f5f3ef]" id="contact-page-root">
      {/* Navbar component */}
      <Navbar />

      {/* Hero Section styled with light warm gray background and rich padding details */}
      <section 
        className="w-full bg-[#f5f3ef] pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 lg:px-8 text-center"
        id="contact-hero"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 
            className="contact-hero-anim text-5xl md:text-[5.5rem] font-serif font-light text-brand-charcoal tracking-tight leading-[1.1] mb-6 select-none"
            style={{ willChange: 'transform' }}
          >
            Have a Query?<br />
            <span className="italic">We're Ready to Assist You</span>
          </h1>
          <p 
            className="contact-hero-anim text-sm md:text-base leading-relaxed text-brand-slate max-w-2xl text-center select-none"
            style={{ willChange: 'transform' }}
          >
            We're here to help! Whether you have questions or need support, contacting Healthmed is simple. Our team is ready to assist you and ensure a smooth experience.
          </p>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#f5f3ef]" id="contact-details-form">
        <div 
          className="max-w-6xl mx-auto bg-white rounded-[2rem] border border-brand-gray-200/50 shadow-stage overflow-hidden grid grid-cols-1 md:grid-cols-2 p-6 sm:p-8 md:p-12 gap-10 md:gap-16"
          id="contact-cards-wrapper"
        >
          {/* Left Column: Get in Touch Cards with natural space layout */}
          <div 
            className="flex flex-col space-y-8"
            id="contact-info-card"
            style={{ willChange: 'transform' }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif font-normal text-brand-charcoal tracking-tight">
                Get in Touch
              </h2>
              <p className="text-sm md:text-base text-brand-slate leading-relaxed">
                Have a question or need support? The Healthmed team is here to help. Reach out and we'll get back to you shortly.
              </p>
            </div>

            {/* Interaction informational cards list */}
            <div className="space-y-4 pt-6 bg-transparent" id="contact-info-list">
              {/* Card 1: Address Details */}
              <div 
                className="flex items-start p-5 rounded-2xl border border-brand-gray-250/60 bg-white transition-all duration-300 hover:border-brand-blue-200 hover:shadow-stage group"
                id="contact-card-address"
              >
                <div 
                  className="p-3 bg-brand-gray-50 text-brand-gray-600 rounded-xl flex-shrink-0 mr-4 flex items-center justify-center"
                  id="address-icon-bg"
                >
                  <MapPin className="h-6 w-6 stroke-[1.5]" id="icon-map" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-sans font-semibold text-brand-charcoal mb-1 select-none">
                    Address
                  </h3>
                  <p className="text-xs md:text-sm text-brand-slate leading-relaxed font-sans font-light whitespace-pre-line">
                    Healthmed Technologies India Pvt Ltd,{"\n"}
                    Guindy Industrial Estate, SIDCO Industrial Estate,{"\n"}
                    Guindy, Chennai, Tamil Nadu 600032.
                  </p>
                </div>
              </div>

              {/* Card 2: Phone details with clean double chevron matching the image */}
              <a 
                href="tel:+919500450672"
                className="flex items-center justify-between p-5 rounded-2xl border border-brand-gray-250/60 bg-white transition-all duration-300 hover:border-brand-blue-200 hover:shadow-stage group cursor-pointer"
                id="contact-card-phone"
              >
                <div className="flex items-center min-w-0">
                  <div 
                    className="p-3 bg-brand-gray-50 text-brand-gray-600 rounded-xl flex-shrink-0 mr-4 flex items-center justify-center"
                    id="phone-icon-bg"
                  >
                    <Phone className="h-6 w-6 stroke-[1.5]" id="icon-phone" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-sans font-semibold text-brand-charcoal mb-1 select-none">
                      Give Us A Call
                    </h3>
                    <p className="text-xs md:text-sm text-brand-slate font-sans font-light">
                      +91 9500450672
                    </p>
                  </div>
                </div>
                <div 
                  className="w-8 h-8 rounded-full border border-brand-gray-200 flex items-center justify-center text-brand-gray-400 group-hover:text-brand-blue-accent group-hover:border-brand-blue-200 transition-colors"
                  id="phone-card-arrow-bg"
                >
                  <span className="text-sm font-semibold select-none">»</span>
                </div>
              </a>

              {/* Card 3: Email details with clean double chevron matching the image */}
              <a 
                href="mailto:info@healthmedtechnologies.com"
                className="flex items-center justify-between p-5 rounded-2xl border border-brand-gray-250/60 bg-white transition-all duration-300 hover:border-brand-blue-200 hover:shadow-stage group cursor-pointer"
                id="contact-card-email"
              >
                <div className="flex items-center min-w-0">
                  <div 
                    className="p-3 bg-brand-gray-50 text-brand-gray-600 rounded-xl flex-shrink-0 mr-4 flex items-center justify-center"
                    id="email-icon-bg"
                  >
                    <Mail className="h-6 w-6 stroke-[1.5]" id="icon-email" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-sans font-semibold text-brand-charcoal mb-1 select-none">
                      Let's Talk
                    </h3>
                    <p className="text-xs md:text-sm text-brand-slate font-sans font-light break-all">
                      info@healthmedtechnologies.com
                    </p>
                  </div>
                </div>
                <div 
                  className="w-8 h-8 rounded-full border border-brand-gray-200 flex items-center justify-center text-brand-gray-400 group-hover:text-brand-blue-accent group-hover:border-brand-blue-200 transition-colors"
                  id="email-card-arrow-bg"
                >
                  <span className="text-sm font-semibold select-none">»</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry/Feedback Form matching image spacing and placeholderless style */}
          <div 
            className="flex flex-col bg-white"
            id="contact-form-card"
            style={{ willChange: 'transform' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5" id="contact-inquiry-form">
              {/* Field 1: First Name */}
              <div className="flex flex-col space-y-1.5" id="form-group-name">
                <label htmlFor="fullName" className="text-sm font-sans font-semibold text-brand-charcoal">
                  First Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  required
                  placeholder=""
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[#f8f9fa] border border-brand-gray-200/60 rounded-xl focus:bg-white focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm font-sans font-light text-brand-charcoal"
                />
              </div>

              {/* Field 2: Email address */}
              <div className="flex flex-col space-y-1.5" id="form-group-email">
                <label htmlFor="email" className="text-sm font-sans font-semibold text-brand-charcoal">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder=""
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[#f8f9fa] border border-brand-gray-200/60 rounded-xl focus:bg-white focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm font-sans font-light text-brand-charcoal"
                />
              </div>

              {/* Field 3: Inquiry context */}
              <div className="flex flex-col space-y-1.5" id="form-group-help">
                <label htmlFor="howHelp" className="text-sm font-sans font-semibold text-brand-charcoal">
                  How can we help?
                </label>
                <input
                  type="text"
                  name="howHelp"
                  id="howHelp"
                  placeholder=""
                  value={formData.howHelp}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[#f8f9fa] border border-brand-gray-200/60 rounded-xl focus:bg-white focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm font-sans font-light text-brand-charcoal"
                />
              </div>

              {/* Field 4: Message text content */}
              <div className="flex flex-col space-y-1.5" id="form-group-message">
                <label htmlFor="message" className="text-sm font-sans font-semibold text-brand-charcoal">
                  Leave a Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder=""
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-[#f8f9fa] border border-brand-gray-200/60 rounded-xl focus:bg-white focus:outline-none focus:border-brand-blue-400 focus:ring-1 focus:ring-brand-blue-400 transition-all text-sm font-sans font-light text-brand-charcoal resize-none"
                />
              </div>

              {/* Form submit handlers feed-back UI */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 text-emerald-800 text-sm font-sans rounded-xl border border-emerald-200" id="msg-submit-success">
                  Your message has been received successfully! Our representative will connect with you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 text-red-800 text-sm font-sans rounded-xl border border-red-200" id="msg-submit-error">
                  Please fill in all mandatory fields with valid values.
                </div>
              )}

              {/* Submission button */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-[#191C1F] hover:bg-[#343A40] text-white text-base font-sans font-semibold rounded-xl tracking-wide transition-all duration-200 shadow-md transform active:scale-[0.99] select-none cursor-pointer"
                id="btn-submit-message"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer layout component */}
      <Footer />
    </div>
  );
}
