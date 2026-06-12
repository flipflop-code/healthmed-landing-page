/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import SEO from '../components/ui/SEO';
import { useGsapFadeIn, useGsapScrollReveal } from '../hooks/useGsapAnimation';

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
  };

  return (
    <div className="contact-page-root flex flex-col min-h-screen" id="contact-page-root">
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
      <section className="contact-hero-sect" id="contact-hero">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 
            className="contact-hero-anim contact-hero-title-text"
            style={{ willChange: 'transform' }}
          >
            Have a Query?<br />
            <span className="italic">We're Ready to Assist You</span>
          </h1>
          <p 
            className="contact-hero-anim contact-hero-desc"
            style={{ willChange: 'transform' }}
          >
            We're here to help! Whether you have questions or need support, contacting Healthmed is simple. Our team is ready to assist you and ensure a smooth experience.
          </p>
        </div>
      </section>

      {/* Main Contact Container */}
      <section className="contact-content-sect" id="contact-details-form">
        <div 
          className="contact-wrapper-card"
          id="contact-cards-wrapper"
        >
          {/* Left Column: Get in Touch Cards */}
          <div 
            className="contact-info-block"
            id="contact-info-card"
            style={{ willChange: 'transform' }}
          >
            <div className="space-y-4">
              <h2 className="contact-info-title">
                Get in Touch
              </h2>
              <p className="contact-info-desc">
                Have a question or need support? The Healthmed team is here to help. Reach out and we'll get back to you shortly.
              </p>
            </div>

            {/* Interaction informational cards list */}
            <div className="space-y-4 pt-6 bg-transparent" id="contact-info-list row">
              {/* Card 1: Address Details */}
              <div 
                className="contact-info-item-card"
                id="contact-card-address"
              >
                <div 
                  className="contact-info-icon-box"
                  id="address-icon-bg"
                >
                  <MapPin className="h-6 w-6 stroke-[1.5]" id="icon-map" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="contact-info-item-title animate-none">
                    Address
                  </h3>
                  <p className="contact-info-item-text whitespace-pre-line">
                    Healthmed Technologies India Pvt Ltd,{"\n"}
                    Guindy Industrial Estate, SIDCO Industrial Estate,{"\n"}
                    Guindy, Chennai, Tamil Nadu 600032.
                  </p>
                </div>
              </div>

              {/* Card 2: Phone details */}
              <a 
                href="tel:+919500450672"
                className="contact-info-item-card justify-between cursor-pointer"
                id="contact-card-phone"
              >
                <div className="flex items-center min-w-0">
                  <div 
                    className="contact-info-icon-box"
                    id="phone-icon-bg"
                  >
                    <Phone className="h-6 w-6 stroke-[1.5]" id="icon-phone" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="contact-info-item-title">
                      Give Us A Call
                    </h3>
                    <p className="contact-info-item-text text-brand-slate font-sans font-light">
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

              {/* Card 3: Email details */}
              <a 
                href="mailto:info@healthmedtechnologies.com"
                className="contact-info-item-card justify-between cursor-pointer"
                id="contact-card-email"
              >
                <div className="flex items-center min-w-0">
                  <div 
                    className="contact-info-icon-box"
                    id="email-icon-bg"
                  >
                    <Mail className="h-6 w-6 stroke-[1.5]" id="icon-email" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="contact-info-item-title">
                      Let's Talk
                    </h3>
                    <p className="contact-info-item-text break-all">
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

          {/* Right Column: Contact Inquiry Form */}
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
                  className="contact-form-input"
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
                  className="contact-form-input"
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
                  className="contact-form-input"
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
                  className="contact-form-input resize-none"
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
                className="contact-form-submit-btn"
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
