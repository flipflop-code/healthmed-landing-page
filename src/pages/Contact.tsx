/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin, ChevronsRight } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { Badge } from '../components/ui/Badge';
import { useGsapFadeIn, useGsapScrollReveal } from '../hooks/useGsapAnimation';
import { Heading } from '../components/ui/Heading';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    howHelp: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // GSAP animation hooks
  useGsapFadeIn('.contact-hero-anim', { y: 40, duration: 0.8, stagger: 0.15 });

  useGsapScrollReveal(
    '#contact-info-card',
    '#contact-details-form',
    { y: 0, x: -40, duration: 1, ease: 'power3.out' } as any
  );

  useGsapScrollReveal(
    '#contact-form-card',
    '#contact-details-form',
    { y: 0, x: 40, duration: 1, ease: 'power3.out' } as any
  );

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

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Us - Healthmed',
    'description': 'Contact Healthmed for healthcare software solutions, support, and healthcare technology consultations.',
    'url': 'https://healthmedtechnologies.com/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Healthmed Technologies India Pvt Ltd',
      'telephone': '+91 7550002160',
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
  };

  return (
    <div className="bg-[var(--brand-bg-cream)] flex flex-col min-h-screen" id="contact-page-root">
      {/* Dynamic SEO Tag */}
      <SEO 
        title="Contact Us | Healthmed"
        description="Contact Healthmed for healthcare software solutions, support, and healthcare technology consultations."
        canonicalUrl="https://healthmedtechnologies.com/contact"
        schema={contactSchema}
      />

      {/* Navbar component */}
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-[var(--space-2xl)] pb-[var(--space-xl)] md:pt-[var(--space-3xl)] md:pb-[var(--space-2xl)] px-[var(--space-md)] text-center bg-[var(--brand-bg-cream)]" id="contact-hero">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Badge variant="page" id="contact-page-badge" className="mb-6 contact-hero-anim">
            Contact Us
          </Badge>
           <Heading
              level={1}
              id="hero-heading"
              className="contact-hero-anim mb-[var(--space-xl)] select-none"
            >
              <span className="italic">Have a Query?</span><br />
            We're Ready to Assist You
            </Heading>
          <p 
            className="contact-hero-anim brand-text-3xl text-[var(--color-brand-gray-800)] max-w-7xl text-center select-none"
            style={{ willChange: 'transform' }}
          >
            We're here to help! Whether you have questions or need support, contacting Healthmed is simple. Our team is ready to assist you and ensure a smooth experience.
          </p>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="w-full py-40 " id="contact-details-form">
        <div className="max-w-[80rem] p-4 gap-4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-lg)] items-stretch bg-[var(--color-brand-white)] rounded-[var(--radius-2xl)]" id="contact-cards-wrapper">
          {/* Left Column: Get in Touch Card */}
          <div 
            className="bg-[var(--color-brand-white)] border border-[var(--color-border-subtle)] rounded-[var(--radius-2xl)] p-[var(--space-lg)] sm:p-[var(--space-xl)] flex flex-col justify-between shadow-[var(--shadow-sm)] gap-[var(--space-lg)]"
            id="contact-info-card"
            style={{ willChange: 'transform' }}
          >
            <div className="flex flex-col gap-[var(--space-sm)]">
              <h2 className="brand-text-6xl text-[var(--color-brand-charcoal)]">
                Get in Touch
              </h2>
              <p className="brand-text-xl text-[var(--color-brand-gray-600)] leading-relaxed">
                Have a question or need support? The Healthmed team is here to help. Reach out and we'll get back to you shortly.
              </p>
            </div>

            {/* Interaction informational cards list */}
            <div className="flex flex-col gap-[var(--space-md)]" id="contact-info-list">
              {/* Card 1: Address Details */}
              <div className="flex items-center bg-[var(--color-brand-white)] p-[var(--space-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] gap-[var(--space-md)]" id="contact-card-address">
                <div className="w-12 h-12 rounded-[var(--radius-full)] bg-[var(--color-surface-tertiary)] flex items-center justify-center text-[var(--color-brand-black)] shrink-0" id="address-icon-bg">
                  <MapPin className="h-5 w-5 stroke-[1.75]" id="icon-map" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="brand-text-2xl text-[var(--color-brand-gray-900)] select-none mb-[var(--space-xs)]">
                    Address
                  </h3>
                  <p className="brand-text-xl text-[var(--color-brand-gray-600)] whitespace-pre-line break-words">
                    Healthmed Technologies India Pvt Ltd.{"\n"}
                    Guindy Industrial Estate, SIDCO Industrial Estate,{"\n"}
                    Guindy, Chennai, Tamil Nadu 600032.
                  </p>
                </div>
              </div>

              {/* Card 2: Phone details */}
              <a 
                href="https://wa.me/919940066572"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-[var(--color-brand-white)] p-[var(--space-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gray-400)] transition-colors duration-200 group cursor-pointer"
                id="contact-card-phone"
              >
                <div className="flex items-center gap-[var(--space-md)] min-w-0">
                  <div className="w-12 h-12 rounded-[var(--radius-full)] bg-[var(--color-surface-tertiary)] flex items-center justify-center text-[var(--color-brand-black)] shrink-0" id="phone-icon-bg">
                    <Phone className="h-5 w-5 stroke-[1.75]" id="icon-phone" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="brand-text-2xl text-[var(--color-brand-gray-900)] select-none mb-[var(--space-xs)]">
                      Give Us a Call
                    </h3>
                    <p className="brand-text-xl text-[var(--color-brand-gray-600)]">
                      +91 9940066572
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-[var(--radius-full)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-gray-700)] group-hover:bg-[var(--color-surface-secondary)] transition-colors duration-200 shrink-0" id="phone-card-arrow-bg">
                  <ChevronsRight className="h-4 w-4" />
                </div>
              </a>

              {/* Card 3: Email details */}
              <a 
                href="mailto:info@healthmedtechnologies.com"
                className="flex items-center justify-between bg-[var(--color-brand-white)] p-[var(--space-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] hover:border-[var(--color-brand-gray-400)] transition-colors duration-200 group cursor-pointer"
                id="contact-card-email"
              >
                <div className="flex items-center gap-[var(--space-md)] min-w-0">
                  <div className="w-12 h-12 rounded-[var(--radius-full)] bg-[var(--color-surface-tertiary)] flex items-center justify-center text-[var(--color-brand-black)] shrink-0" id="email-icon-bg">
                    <Mail className="h-5 w-5 stroke-[1.75]" id="icon-email" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="brand-text-2xl text-[var(--color-brand-gray-900)] select-none mb-[var(--space-xs)]">
                      Let's Talk
                    </h3>
                    <p className="brand-text-xl text-[var(--color-brand-gray-600)] break-all">
                      info@healthmedtechnologies.com
                    </p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-[var(--radius-full)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-brand-gray-700)] group-hover:bg-[var(--color-surface-secondary)] transition-colors duration-200 shrink-0" id="email-card-arrow-bg">
                  <ChevronsRight className="h-4 w-4" />
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form Card */}
          <div 
            className="bg-[var(--color-brand-white)] border border-[var(--color-border-subtle)] rounded-[var(--radius-2xl)] p-[var(--space-lg)] sm:p-[var(--space-xl)] flex flex-col justify-between shadow-[var(--shadow-sm)]"
            id="contact-form-card"
            style={{ willChange: 'transform' }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-[var(--space-md)]" id="contact-inquiry-form">
              {/* Field 1: First Name */}
              <div className="flex flex-col gap-[var(--space-xs)]" id="form-group-name">
                <label htmlFor="fullName" className="brand-text-xl-medium text-[var(--color-brand-black)]">
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
                  className="w-full brand-text-xl text-[var(--color-brand-black)] py-[0.875rem] px-4 bg-[var(--color-brand-gray-50)] border border-[var(--color-border)] rounded-[var(--radius-xl)] focus:bg-[var(--color-brand-white)] focus:outline-none focus:border-[var(--color-brand-gray-500)] transition-all duration-200"
                />
              </div>

              {/* Field 2: Email address */}
              <div className="flex flex-col gap-[var(--space-xs)]" id="form-group-email">
                <label htmlFor="email" className="brand-text-xl-medium text-[var(--color-brand-black)]">
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
                  className="w-full brand-text-xl text-[var(--color-brand-black)] py-[0.875rem] px-4 bg-[var(--color-brand-gray-50)] border border-[var(--color-border)] rounded-[var(--radius-xl)] focus:bg-[var(--color-brand-white)] focus:outline-none focus:border-[var(--color-brand-gray-500)] transition-all duration-200"
                />
              </div>

              {/* Field 3: Inquiry context */}
              <div className="flex flex-col gap-[var(--space-xs)]" id="form-group-help">
                <label htmlFor="howHelp" className="brand-text-xl-medium text-[var(--color-brand-black)]">
                  How can we help?
                </label>
                <input
                  type="text"
                  name="howHelp"
                  id="howHelp"
                  placeholder=""
                  value={formData.howHelp}
                  onChange={handleChange}
                  className="w-full brand-text-xl text-[var(--color-brand-black)] py-[0.875rem] px-4 bg-[var(--color-brand-gray-50)] border border-[var(--color-border)] rounded-[var(--radius-xl)] focus:bg-[var(--color-brand-white)] focus:outline-none focus:border-[var(--color-brand-gray-500)] transition-all duration-200"
                />
              </div>

              {/* Field 4: Message text content */}
              <div className="flex flex-col gap-[var(--space-xs)]" id="form-group-message">
                <label htmlFor="message" className="brand-text-xl-medium text-[var(--color-brand-black)]">
                  Leave a Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  placeholder=""
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full brand-text-xl text-[var(--color-brand-black)] py-[0.875rem] px-4 bg-[var(--color-brand-gray-50)] border border-[var(--color-border)] rounded-[var(--radius-xl)] focus:bg-[var(--color-brand-white)] focus:outline-none focus:border-[var(--color-brand-gray-500)] transition-all duration-200 resize-none h-[10rem]"
                />
              </div>

              {/* Form submit handlers feed-back UI */}
              {submitStatus === 'success' && (
                <div className="brand-text-xl p-[var(--space-md)] bg-[#f0fdf4] text-[#166534] border border-[#bbf7d0] rounded-[var(--radius-xl)]" id="msg-submit-success">
                  Your message has been received successfully! Our representative will connect with you shortly.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="brand-text-xl p-[var(--space-md)] bg-[#fef2f2] text-[#991b1b] border border-[#fecaca] rounded-[var(--radius-xl)]" id="msg-submit-error">
                  Please fill in all mandatory fields with valid values.
                </div>
              )}

              {/* Submission button */}
              <button
                type="submit"
                className="w-full brand-text-2xl-medium text-[var(--color-brand-white)] bg-[var(--brand-charcoal-dark)] hover:bg-[var(--color-brand-black)] rounded-[var(--radius-xl)] py-[var(--space-md)] px-[var(--space-lg)] transition-all duration-200 shadow-[var(--shadow-sm)] cursor-pointer select-none active:scale-[0.99]"
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
