/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Navbar';
import { Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Products', href: '#products' },
    { label: 'Contents', href: '#contents' },
  ];

  return (
    <footer className="bg-brand-black text-white/90 border-t border-white/5 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-6 flex flex-col space-y-6">
            {/* Logo rendered seamlessly in Dark mode */}
            <div className="inline-block">
              <Logo isDark={true} />
            </div>
            
            <p className="text-gray-400 text-body-sm max-w-md leading-relaxed">
              Healthmed truly understands the problems of healthcare people and has built usable solutions to help them solve their everyday problems.
            </p>
            
            {/* Social Icons with elegant style as seen in reference */}
            <div className="flex items-center space-x-6 pt-2">
              <a
                href="#twitter-x"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Twitter X"
                id="footer-social-x"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#facebook"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
                id="footer-social-fb"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#linkedin"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
                id="footer-social-in"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#instagram"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
                id="footer-social-ig"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links with elegant Serif Title */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-5">
            <h3 className="text-h3 font-serif font-medium text-white tracking-tight">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-body-sm font-sans"
                    id={`footer-link-${link.label.toLowerCase().replace(' ', '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details with elegant Serif Title */}
          <div className="col-span-1 md:col-span-3 flex flex-col space-y-5">
            <h3 className="text-h3 font-serif font-medium text-white tracking-tight">
              Get in Touch
            </h3>
            <div className="space-y-5">
              <div>
                <span className="block text-body-sm font-bold text-white mb-1.5 font-sans">
                  Email
                </span>
                <a
                  href="mailto:info@healthmedtechnologies.com"
                  className="text-gray-400 hover:text-white text-body-sm break-all font-sans block"
                  id="footer-link-email"
                >
                  info@healthmedtechnologies.com
                </a>
              </div>
              
              <div>
                <span className="block text-body-sm font-bold text-white mb-1.5 font-sans">
                  Phone
                </span>
                <a
                  href="tel:+917550002160"
                  className="text-gray-400 hover:text-white text-body-sm font-sans block"
                  id="footer-link-phone"
                >
                  +91 7550002160
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Legal bar centered */}
        <div className="mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-center items-center">
          <p className="text-body-xs text-gray-500 font-sans">
            © 2016-2023 Healthmed Technologies India Pvt Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
