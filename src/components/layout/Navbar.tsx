/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
// @ts-expect-error - image asset type declaration may be missing
import logoImg from '../../assets/images/logo.png';

export function Logo({ isDark = false }: { isDark?: boolean }) {
  return (
    <div className="flex items-center" id="nav-logo">
      <div className="flex items-center select-none animate-fade-in bg-white py-1 px-2 rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-gray-100/30">
        <img
          src={logoImg}
          alt="Healthmed Logo"
          width={165}
          height={44}
          className="h-10 md:h-11 w-auto object-contain"
          decoding="async"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  const navLinks = [
    { label: 'Home', href: isContactPage ? '/' : '#home', active: !isContactPage },
    { label: 'About', href: isContactPage ? '/#about' : '#about', active: false },
    { label: 'Products', href: isContactPage ? '/#products' : '#products', active: false },
    { label: 'Careers', href: isContactPage ? '/#careers' : '#careers', active: false },
    { label: 'Contact', href: '/contact', active: isContactPage },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-brand-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo container */}
          <div className="flex-shrink-0 cursor-pointer">
            <Link to="/" id="nav-logo-link">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation Links (Centered perfectly) */}
          <nav className="hidden md:flex items-center space-x-8" id="desktop-nav-menu">
            {navLinks.map((link) => {
              const isRoute = link.href.startsWith('/');
              if (isRoute) {
                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      link.active
                        ? 'text-brand-blue-500 hover:text-brand-blue-600 font-semibold text-shadow-sm'
                        : 'text-brand-gray-600 hover:text-brand-black'
                    }`}
                    id={`nav-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    link.active
                      ? 'text-brand-blue-500 hover:text-brand-blue-600 font-semibold text-shadow-sm'
                      : 'text-brand-gray-600 hover:text-brand-black'
                  }`}
                  id={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button (Desktop Only) */}
          <div className="hidden md:flex items-center">
            {isContactPage ? (
              <Link
                to="/#book-a-call"
                className="px-5 py-2.5 bg-brand-black hover:bg-brand-gray-800 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-sm shadow-brand-black/10 hover:shadow-md"
                id="nav-btn-book"
              >
                Book a Call
              </Link>
            ) : (
              <a
                href="#book-a-call"
                className="px-5 py-2.5 bg-brand-black hover:bg-brand-gray-800 text-white font-medium text-sm rounded-lg transition-all duration-200 shadow-sm shadow-brand-black/10 hover:shadow-md"
                id="nav-btn-book"
              >
                Book a Call
              </a>
            )}
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 focus:outline-none"
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

      {/* Mobile Navigation Panel (Full Screen Cover overlay with beautiful staggered animations) */}
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
            {/* Overlay Header containing Logo and Close Button to align with page header layout */}
            <div className="h-20 border-b border-brand-gray-200 px-4 sm:px-6 flex items-center justify-between flex-shrink-0">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-brand-gray-600 hover:text-brand-black hover:bg-brand-gray-100 focus:outline-none"
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

            {/* Overlay Navigation list with one-by-one sequential staggered flow */}
            <div className="flex-1 flex flex-col justify-between px-8 sm:px-12 py-16">
              <nav className="flex flex-col space-y-8">
                {navLinks.map((link, idx) => {
                  const isRoute = link.href.startsWith('/');
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.08,
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1] // Custom refined spring-like easeOut
                      }}
                    >
                      {isRoute ? (
                        <Link
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-2xl font-serif tracking-tight block py-1.5 transition-all duration-300 ${
                            link.active
                              ? 'text-brand-blue-500 font-normal italic'
                              : 'text-brand-gray-800 hover:text-brand-black hover:translate-x-3'
                          }`}
                          id={`mobile-nav-link-${link.label.toLowerCase()}`}
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-2xl font-serif tracking-tight block py-1.5 transition-all duration-300 ${
                            link.active
                              ? 'text-brand-blue-500 font-normal italic'
                              : 'text-brand-gray-800 hover:text-brand-black hover:translate-x-3'
                          }`}
                          id={`mobile-nav-link-${link.label.toLowerCase()}`}
                        >
                          {link.label}
                        </a>
                      )}
                    </motion.div>
                  );
                })}
              </nav>

              {/* Staggered action button in mobile navigation panel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: navLinks.length * 0.08 + 0.1,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="pt-8 border-t border-brand-gray-100 flex flex-col space-y-4"
              >
                <a
                  href="#book-a-call"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center w-full px-6 py-4 bg-brand-black hover:bg-brand-gray-800 text-white font-semibold text-lg rounded-lg shadow-sm hover:shadow transition-all duration-200"
                  id="mobile-nav-btn-book"
                >
                  Book a Call
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
