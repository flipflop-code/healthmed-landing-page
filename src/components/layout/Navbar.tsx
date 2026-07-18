/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
// @ts-expect-error - image asset type declaration may be missing
import logoImg from '../../assets/images/logo.png';

export function Logo() {
  return (
    <div className="flex items-center justify-center py-1" id="nav-logo">
      <img
        src={logoImg}
        alt="Healthmed Logo"
        width={165}
        height={44}
        className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain max-h-11 select-none transition-all duration-300"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModulesOpen, setIsModulesOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);

  // Lock scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const location = useLocation();
  const isContactPage = location.pathname === '/contact';
  const isInsightsPage = location.pathname.startsWith('/insights') || location.pathname === '/blog';
  const isRelativeRedirect = isContactPage || isInsightsPage;

  // Active states check
  const isHomeActive = location.pathname === '/' && (!location.hash || location.hash === '#home');
  const isAboutActive = location.pathname === '/' && location.hash === '#about';

  const modules = [
    { label: 'Clinical Operations', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Hospital Operations', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Diagnostics', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Workforce Management', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Pharmacy & Inventory', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Analytics & Quality', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Revenue & Finance', href: isRelativeRedirect ? '/#products' : '#products' },
    { label: 'Platform Administration', href: isRelativeRedirect ? '/#products' : '#products' },
  ];

  const handleBookClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-gray-100/70 backdrop-blur-md border-b border-brand-gray-200" id="main-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20" id="navbar-inner-container">
          
          {/* LEFT: Logo */}
          <div className="flex-shrink-0 cursor-pointer" id="nav-logo-container">
            <Link to="/" id="nav-logo-link">
              <Logo />
            </Link>
          </div>

          {/* CENTER: Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9" id="desktop-nav-menu">
            {/* Home link */}
            {isRelativeRedirect ? (
              <Link
                to="/"
                className={`brand-text-xl font-sans font-medium transition-colors duration-200 ${
                  isHomeActive
                    ? 'text-brand-blue-500'
                    : 'text-brand-gray-700 hover:text-brand-black'
                }`}
                id="nav-link-home"
              >
                Home
              </Link>
            ) : (
              <a
                href="#home"
                className={`brand-text-xl font-sans font-medium transition-colors duration-200 ${
                  isHomeActive
                    ? 'text-brand-blue-500'
                    : 'text-brand-gray-700 hover:text-brand-black'
                }`}
                id="nav-link-home"
              >
                Home
              </a>
            )}

            {/* About link */}
            {isRelativeRedirect ? (
              <Link
                to="/#about"
                className={`brand-text-xl font-sans font-medium transition-colors duration-200 ${
                  isAboutActive
                    ? 'text-brand-blue-500'
                    : 'text-brand-gray-700 hover:text-brand-black'
                }`}
                id="nav-link-about"
              >
                About
              </Link>
            ) : (
              <a
                href="#about"
                className={`brand-text-xl font-sans font-medium transition-colors duration-200 ${
                  isAboutActive
                    ? 'text-brand-blue-500'
                    : 'text-brand-gray-700 hover:text-brand-black'
                }`}
                id="nav-link-about"
              >
                About
              </a>
            )}

            {/* Our Modules Dropdown Triger */}
            <div
              className="relative py-4"
              id="nav-module-dropdown-wrapper"
              onMouseEnter={() => setIsModulesOpen(true)}
              onMouseLeave={() => setIsModulesOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 brand-text-xl font-sans font-medium text-brand-gray-700 hover:text-brand-black transition-colors focus:outline-none cursor-pointer"
                id="nav-link-modules-trigger"
                aria-haspopup="true"
                aria-expanded={isModulesOpen}
              >
                Our Modules
                <ChevronDown className={`w-4 h-4 text-brand-gray-500 transition-transform duration-250 ${isModulesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Interaction bridge to avoid mouse-leave flickering */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-full h-3 bg-transparent" />

              {/* Dropdown Menu Overlay */}
              <AnimatePresence>
                {isModulesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[560px] bg-white rounded-2xl border border-brand-gray-200/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 z-50 pointer-events-auto"
                    id="nav-modules-dropdown-card"
                  >
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3" id="dropdown-modules-grid">
                      {modules.map((m) => (
                        <Link
                          key={m.label}
                          to={m.href}
                          onClick={() => setIsModulesOpen(false)}
                          className="block brand-text-xl font-sans font-medium text-brand-charcoal hover:text-brand-blue-500 hover:bg-brand-gray-50/60 py-2.5 px-4 rounded-xl transition-all duration-200 cursor-pointer"
                          id={`dropdown-item-${m.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                        >
                          {m.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blog link */}
            <Link
              to="/insights"
              className={`brand-text-xl font-sans font-medium transition-colors duration-200 ${
                isInsightsPage
                  ? 'text-brand-blue-500'
                  : 'text-brand-gray-700 hover:text-brand-black'
              }`}
              id="nav-link-blog"
            >
              Blog
            </Link>
          </nav>

          {/* RIGHT: CTA Button or Toggle button */}
          <div className="hidden md:flex items-center" id="nav-cta-container">
            {isRelativeRedirect ? (
              <Link
                to="/#book-a-call"
                className="px-5 py-2.5 bg-brand-black hover:bg-brand-gray-800 text-white font-medium brand-text-xl rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer inline-block"
                id="nav-btn-book"
                onClick={handleBookClick}
              >
                Book a Call
              </Link>
            ) : (
              <Link
                to="/contact"
                className="px-5 py-2.5 bg-brand-black hover:bg-brand-gray-800 text-white font-medium brand-text-xl rounded-lg transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer inline-block"
                id="nav-btn-book"
                onClick={handleBookClick}
              >
                Book a Call
              </Link>
            )}
          </div>

          {/* Hamburger Menu on Mobile */}
          <div className="flex md:hidden" id="mobile-toggle-wrapper">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-700 hover:text-brand-black hover:bg-brand-gray-100 focus:outline-none cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="nav-btn-mobile-toggle"
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close-icon' : 'menu-icon'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isOpen ? <X className="h-6 w-6" id="icon-close" /> : <Menu className="h-6 w-6" id="icon-menu" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] h-screen w-screen bg-white md:hidden flex flex-col"
            id="mobile-menu"
          >
            {/* Header section in Mobile Menu to align with header height */}
            <div className="h-20 border-b border-brand-gray-200/50 px-4 sm:px-6 flex items-center justify-between flex-shrink-0">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-700 hover:text-brand-black hover:bg-brand-gray-100 focus:outline-none cursor-pointer"
                id="nav-btn-mobile-overlay-close"
              >
                <motion.div
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              </button>
            </div>

            {/* Menu options with sequential flow */}
            <div className="flex-1 flex flex-col justify-between px-6 sm:px-10 py-10 overflow-y-auto">
              <nav className="flex flex-col space-y-6">
                
                {/* Home link */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05, duration: 0.3 }}
                >
                  {isRelativeRedirect ? (
                    <Link
                      to="/"
                      onClick={() => setIsOpen(false)}
                      className={`brand-text-2xl font-serif tracking-tight block py-1 transition-colors ${
                        isHomeActive ? 'text-brand-blue-500 font-semibold' : 'text-brand-gray-800 hover:text-brand-black'
                      }`}
                      id="mobile-nav-link-home"
                    >
                      Home
                    </Link>
                  ) : (
                    <a
                      href="#home"
                      onClick={() => setIsOpen(false)}
                      className={`brand-text-2xl font-serif tracking-tight block py-1 transition-colors ${
                        isHomeActive ? 'text-brand-blue-500 font-semibold' : 'text-brand-gray-800 hover:text-brand-black'
                      }`}
                      id="mobile-nav-link-home"
                    >
                      Home
                    </a>
                  )}
                </motion.div>

                {/* About link */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                >
                  {isRelativeRedirect ? (
                    <Link
                      to="/#about"
                      onClick={() => setIsOpen(false)}
                      className={`brand-text-2xl font-serif tracking-tight block py-1 transition-colors ${
                        isAboutActive ? 'text-brand-blue-500 font-semibold' : 'text-brand-gray-800 hover:text-brand-black'
                      }`}
                      id="mobile-nav-link-about"
                    >
                      About
                    </Link>
                  ) : (
                    <a
                      href="#about"
                      onClick={() => setIsOpen(false)}
                      className={`brand-text-2xl font-serif tracking-tight block py-1 transition-colors ${
                        isAboutActive ? 'text-brand-blue-500 font-semibold' : 'text-brand-gray-800 hover:text-brand-black'
                      }`}
                      id="mobile-nav-link-about"
                    >
                      About
                    </a>
                  )}
                </motion.div>

                {/* Our Modules Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.3 }}
                  className="flex flex-col"
                >
                  <button
                    onClick={() => setIsMobileAccordionOpen(!isMobileAccordionOpen)}
                    type="button"
                    className="w-full flex items-center justify-between brand-text-2xl font-serif tracking-tight text-brand-gray-800 hover:text-brand-black py-1 focus:outline-none cursor-pointer"
                    id="mobile-accordion-trigger"
                  >
                    <span>Our Modules</span>
                    <ChevronDown className={`w-5 h-5 text-brand-gray-500 transition-transform duration-250 ${isMobileAccordionOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileAccordionOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden pl-4 flex flex-col space-y-3 pt-2.5 border-l border-brand-gray-200"
                        id="mobile-accordion-content"
                      >
                        {modules.map((m) => (
                          <Link
                            key={m.label}
                            to={m.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsMobileAccordionOpen(false);
                            }}
                            className="brand-text-xl font-sans text-brand-gray-600 hover:text-brand-blue-500 transition-colors block py-0.5"
                            id={`mobile-accordion-item-${m.label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          >
                            {m.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Blog link */}
                <motion.div
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                >
                  <Link
                    to="/insights"
                    onClick={() => setIsOpen(false)}
                    className={`block py-1 transition-colors brand-text-2xl ${
                      isInsightsPage ? 'text-brand-blue-500' : 'text-brand-gray-800 hover:text-brand-black'
                    }`}
                    id="mobile-nav-link-blog"
                  >
                    Blog
                  </Link>
                </motion.div>
              </nav>

              {/* Book a Call Button Footer in Mobile Panel */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-6 border-t border-brand-gray-100 flex flex-col"
              >
                {isRelativeRedirect ? (
                  <Link
                    to="/#book-a-call"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-brand-black hover:bg-brand-gray-800 text-white rounded-lg shadow-sm transition-all duration-200 cursor-pointer brand-text-xl-medium"
                    id="mobile-nav-btn-book"
                  >
                    Book a Call
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center w-full px-6 py-3.5 bg-brand-black hover:bg-brand-gray-800 text-white rounded-lg shadow-sm transition-all duration-200 cursor-pointer brand-text-xl-medium"
                    id="mobile-nav-btn-book"
                  >
                    Book a Call
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
