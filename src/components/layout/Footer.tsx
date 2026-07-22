/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
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
    <footer className="bg-brand-charcoal border-t border-white/8 " id="app-footer">
      <div className="w-full max-w-[var(--container-max-width)] mx-auto px-[var(--space-lg)] md:px-[var(--space-xl)] py-[var(--space-2xl)] md:py-[var(--space-3xl)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2.3fr_1fr_1.6fr_1.3fr] gap-[var(--space-2xl)] lg:gap-[var(--space-3xl)]">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <div className="inline-block select-none pointer-events-none mb-[var(--space-xl)]" id="footer-logo-container">
              <img
                src={logoImg}
                alt="Healthmed Logo"
                className="h-[2.875rem] w-auto object-contain"
                decoding="async"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="brand-text-xl text-brand-gray-400 mb-[2.25rem] max-w-[21rem]" id="footer-brand-info">
              Healthmed truly understands the problems of healthcare people and has built usable solutions to help them solve their everyday problems.
            </p>
            
            {/* Social Icons from lucide-react */}
            <div className="flex items-center gap-[1.5rem]" id="footer-social-links">
              <a
                href="#twitter-x"
                className="text-white/90 inline-flex items-center justify-center transition-colors duration-[var(--transition-duration-default)] hover:text-[#0088cc]"
                aria-label="Follow us on Twitter X"
                id="footer-social-x"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="text-white/90 inline-flex items-center justify-center transition-colors duration-[var(--transition-duration-default)] hover:text-[#0088cc]"
                aria-label="Follow us on Facebook"
                id="footer-social-fb"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#linkedin"
                className="text-white/90 inline-flex items-center justify-center transition-colors duration-[var(--transition-duration-default)] hover:text-[#0088cc]"
                aria-label="Follow us on LinkedIn"
                id="footer-social-in"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#instagram"
                className="text-white/90 inline-flex items-center justify-center transition-colors duration-[var(--transition-duration-default)] hover:text-[#0088cc]"
                aria-label="Follow us on Instagram"
                id="footer-social-ig"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h3 className="brand-text-3xl-medium text-white  mb-[1.75rem] " id="footer-quicklinks-heading">
              Quick Links
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-[1.0625rem]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/#') || link.href === '/' ? (
                    <a
                      href={link.href}
                      className="brand-text-xl text-brand-gray-400 no-underline transition-colors duration-[var(--transition-duration-default)] inline-block hover:text-white"
                      id={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="brand-text-xl text-brand-gray-400 no-underline transition-colors duration-[var(--transition-duration-default)] inline-block hover:text-white"
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
          <div className="flex flex-col">
            <h3 className="brand-text-3xl-medium text-white  mb-[1.75rem] " id="footer-modules-heading">
              Our Modules
            </h3>
            <ul className="list-none p-0 m-0 flex flex-col gap-[1.0625rem]">
              {modulesLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="brand-text-xl text-brand-gray-400 no-underline transition-colors duration-[var(--transition-duration-default)] inline-block hover:text-white"
                    id={`footer-module-link-${link.label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Get In Touch */}
          <div className="flex flex-col">
            <h3 className="brand-text-3xl-medium text-white  mb-[1.75rem] " id="footer-getintouch-heading">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-[1.75rem]">
              <div className="flex flex-col gap-[0.625rem]">
                <span className="brand-text-xl-medium text-white  ">
                  Email
                </span>
                <a
                  href="mailto:info@healthmedtechnologies.com"
                  className="brand-text-xl text-nowrap text-brand-gray-400 no-underline transition-colors duration-[var(--transition-duration-default)] break-all inline-block hover:text-white"
                  id="footer-link-email"
                >
                  info@healthmedtechnologies.com
                </a>
              </div>
              
              <div className="flex flex-col gap-[0.625rem]">
                <span className="brand-text-xl-medium text-white  ">
                  Phone
                </span>
                <a
                  href="https://wa.me/917550002160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="brand-text-xl text-brand-gray-400 no-underline transition-colors duration-[var(--transition-duration-default)] break-all inline-block hover:text-white"
                  id="footer-link-phone"
                >
                  +91 7550002160
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full width divider line */}
      <hr className="w-full border-0 border-t border-white/8 mt-[var(--space-2xl)] md:mt-[var(--space-3xl)]" />

      {/* Legal bar */}
      <div className="w-full max-w-[var(--container-max-width)] mx-auto px-[var(--space-lg)] md:px-[var(--space-xl)] py-[var(--space-lg)] text-center flex justify-center items-center">
        <p className="brand-text-xl text-brand-gray-300 " id="footer-copyright">
          © 2016-2023 Healthmed Technologies India Pvt Ltd. All rights reserved
        </p>
      </div>
    </footer>
  );
}
