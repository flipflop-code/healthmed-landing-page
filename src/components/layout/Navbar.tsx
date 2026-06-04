/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
// @ts-expect-error - image asset type declaration may be missing
import logoImg from '../../assets/images/logo.png';

export function Logo({ isDark = false }: { isDark?: boolean }) {
  return (
    <div className="flex items-center" id="nav-logo">
      <div className="flex items-center select-none animate-fade-in bg-white py-1 px-2 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100/30">
        <img
          src={logoImg}
          alt="Healthmed Logo"
          className="h-10 md:h-11 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo container */}
          <div className="flex-shrink-0 cursor-pointer">
            <Logo />
          </div>

          {/* Desktop Navigation Links (Centered perfectly) */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-menu">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  link.active
                    ? 'text-brand-blue-500 hover:text-brand-blue-600 font-semibold'
                    : 'text-brand-gray-600 hover:text-brand-black'
                }`}
                id={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#book-a-call"
              className="px-5 py-2.5 bg-brand-black hover:bg-brand-gray-800 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-sm shadow-brand-black/10 hover:shadow-md"
              id="nav-btn-book"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="nav-btn-mobile-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" id="icon-close" /> : <Menu className="h-6 w-6" id="icon-menu" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-gray-200" id="mobile-menu">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                  link.active
                    ? 'bg-brand-blue-50 text-brand-blue-500 font-semibold'
                    : 'text-brand-gray-600 hover:bg-brand-gray-50 hover:text-brand-black'
                }`}
                id={`mobile-nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 pb-2 border-t border-brand-gray-100 px-3">
              <a
                href="#book-a-call"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 bg-brand-black hover:bg-brand-gray-800 text-white font-medium rounded-lg shadow-sm"
                id="mobile-nav-btn-book"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
