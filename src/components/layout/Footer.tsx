/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
// @ts-expect-error - image asset type declaration may be missing
import logoImg from '../../assets/images/logo.png';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/#about' },
    { label: 'Careers', href: '/#careers' },
    { label: 'Contact Us', href: '/contact' },
  ];

  const modulesLinks = [
    { label: 'Clinical Operations', href: '/#products' },
    { label: 'Diagnostics', href: '/#products' },
    { label: 'Pharmacy & Inventory', href: '/#products' },
    { label: 'Revenue & Finance', href: '/#products' },
    { label: 'Hospital Operations', href: '/#products' },
    { label: 'Workforce Management', href: '/#products' },
    { label: 'Analytics & Quality', href: '/#products' },
    { label: 'Platform Administration', href: '/#products' },
  ];

  return (
    <footer className="app-footer" id="app-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-brand-column">
            <div className="footer-logo-box" id="footer-logo-container">
              <img
                src={logoImg}
                alt="Healthmed Logo"
                className="footer-logo-img"
                decoding="async"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="footer-brand-desc" id="footer-brand-info">
              Healthmed truly understands the problems of healthcare people and has built usable solutions to help them solve their everyday problems.
            </p>
            
            {/* Social Icons exactly matching reference image design */}
            <div className="footer-social-box" id="footer-social-links">
              <a
                href="#twitter-x"
                className="footer-social-link"
                aria-label="Follow us on Twitter X"
                id="footer-social-x"
              >
                <svg className="footer-social-img" style={{ width: '20px', height: '20px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#facebook"
                className="footer-social-link"
                aria-label="Follow us on Facebook"
                id="footer-social-fb"
              >
                <svg className="footer-social-img" style={{ width: '21px', height: '21px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#linkedin"
                className="footer-social-link"
                aria-label="Follow us on LinkedIn"
                id="footer-social-in"
              >
                <svg className="footer-social-img" style={{ width: '21px', height: '21px' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#instagram"
                className="footer-social-link"
                aria-label="Follow us on Instagram"
                id="footer-social-ig"
              >
                <svg className="footer-social-img" style={{ width: '21px', height: '21px' }} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="footer-column-title" id="footer-quicklinks-heading">
              Quick Links
            </h3>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/#') || link.href === '/' ? (
                    <a
                      href={link.href}
                      className="footer-link"
                      id={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="footer-link"
                      id={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Modules */}
          <div className="footer-column">
            <h3 className="footer-column-title" id="footer-modules-heading">
              Our Modules
            </h3>
            <ul className="footer-links-list">
              {modulesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="footer-link"
                    id={`footer-module-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="footer-column">
            <h3 className="footer-column-title" id="footer-getintouch-heading">
              Get in Touch
            </h3>
            <div className="footer-contact-group">
              <div className="footer-contact-block">
                <span className="footer-contact-label">
                  Email
                </span>
                <a
                  href="mailto:info@healthmedtechnologies.com"
                  className="footer-contact-value"
                  id="footer-link-email"
                >
                  info@healthmedtechnologies.com
                </a>
              </div>
              
              <div className="footer-contact-block">
                <span className="footer-contact-label">
                  Phone
                </span>
                <a
                  href="https://wa.me/917550002160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-contact-value"
                  id="footer-link-phone"
                >
                  +91 7550002160
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal bar */}
        <hr className="footer-divider" />
        <div className="footer-copyright-box">
          <p className="footer-copyright-text" id="footer-copyright">
            © 2016-2023 Healthmed Technologies India Pvt Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
