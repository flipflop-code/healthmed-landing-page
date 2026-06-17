/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
  const handleClick = () => {
    window.open('https://wa.me/917550002160', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] group flex items-center justify-center p-0 border-0 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] select-none cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.08] active:scale-95 animate-whatsapp-float"
      id="whatsapp-floating-button"
      aria-label="Contact us on WhatsApp"
    >
      {/* Soft pulse animation effect */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-whatsapp-pulse" />

      {/* Main button container */}
      <div className="relative flex items-center justify-center w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-colors duration-300">
        <span className="text-[28px] md:text-[32px] flex items-center justify-center">
          <FaWhatsapp />
        </span>
      </div>
    </button>
  );
}
