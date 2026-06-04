/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export default function Partners() {
  const renderRow1Logos = () => (
    <>
      {/* 1. TATA CHEMICALS */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <svg className="w-5.5 h-5.5 text-brand-blue fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 3.8l6.8 13.6H5.2L12 5.8z" />
        </svg>
        <span className="font-extrabold text-[15px] font-sans tracking-tight text-brand-charcoal">
          TATA CHEMICALS
        </span>
      </div>

      {/* 2. cts Speciality Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="flex flex-col text-right">
          <span className="text-[17px] font-sans font-extrabold tracking-tighter text-brand-cts-rose italic leading-none">
            cts
          </span>
          <span className="text-[7.5px] font-bold text-red-500 tracking-tight leading-none mt-0.5">Speciality Hospital</span>
        </div>
        <div className="w-6 h-6 text-brand-leaf-green">
          <svg className="w-full h-full text-brand-leaf-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      </div>

      {/* 3. CCH Clinician-Care Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-7 h-7 bg-brand-blue rounded-lg flex items-center justify-center text-white font-bold text-[9px] shadow-sm">
          CCH
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[9px] font-bold text-brand-charcoal uppercase tracking-wider leading-none">CLINICIAN-CARE</span>
          <span className="text-[7px] font-semibold text-gray-400 tracking-widest uppercase leading-none mt-0.5">— HOSPITAL —</span>
        </div>
      </div>

      {/* 4. Brains Super Speciality Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 text-brand-cyan">
          <svg className="w-full h-full text-brand-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-serif font-extrabold text-brand-navy tracking-tight leading-none">BrainS</span>
          <span className="text-[6.5px] font-extrabold text-brand-cyan uppercase tracking-widest leading-none mt-0.5">Super Speciality Hospital</span>
        </div>
      </div>

      {/* 5. Leaf Green Logo */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 bg-gradient-to-tr from-brand-leaf-green to-emerald-400 rounded-full flex items-center justify-center p-1 shadow-sm">
          <svg className="w-full h-full text-white fill-current" viewBox="0 0 24 24">
            <path d="M17 8C8 10 9 21 9 21s11-1 11-11c0-2-3-2-3-2zM9 21s-1-11 8-11" />
          </svg>
        </div>
        <span className="text-[13px] font-sans font-extrabold text-brand-emerald-dark tracking-tight">BioGreen</span>
      </div>

      {/* 6. F.O.R. Ortho & Neuro Hospital */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 rounded-full border-2 border-orange-500 flex items-center justify-center font-sans font-black text-[9px] text-brand-blue shadow-sm leading-none">
          F
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-sans font-black text-brand-violet-blue tracking-tighter leading-none">F.O.R. Ortho & Neuro</span>
          <span className="text-[7px] font-semibold text-orange-500 uppercase tracking-widest mt-0.5 leading-none">Hospital & Research</span>
        </div>
      </div>
    </>
  );

  const renderRow2Logos = () => (
    <>
      {/* 1. SRINIVAS PRIYA */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-5.5 h-5.5 text-brand-blue">
          <svg className="w-full h-full text-brand-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s2-4.5 4.5-4.5S11 8 11 10.5M19.5 16.5c1.5-1.5 2.5-3.5 2.5-6s-2-4.5-4.5-4.5S13 8 13 10.5M12 2v20" />
          </svg>
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-sans font-bold text-brand-blue-800 tracking-wider leading-none uppercase">SRINIVAS PRIYA</span>
          <span className="text-[7.5px] text-gray-400 font-bold uppercase tracking-widest mt-0.5 leading-none">HOSPITAL</span>
        </div>
      </div>

      {/* 2. K.M. Hospitals */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <span className="font-sans italic font-black text-base text-brand-blue-hover tracking-tight">
          K.M.Hospitals
        </span>
      </div>

      {/* 3. SUNRAY */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="relative w-5 h-5 flex items-center justify-center">
          <div className="absolute w-4.5 h-4.5 rounded-full border-2 border-orange-500" />
          <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-sans font-black tracking-widest text-brand-blue-ocean leading-none">SUNRAY</span>
          <span className="text-[6.5px] font-bold text-gray-400 tracking-widest uppercase mt-0.5 leading-none">Global Care</span>
        </div>
      </div>

      {/* 4. State Emblem / Government Approved */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-6 h-6 rounded-full border border-emerald-500 flex items-center justify-center p-0.5 bg-emerald-50">
          <svg className="w-full h-full text-emerald-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8l-2 4h4l-2 4" />
          </svg>
        </div>
        <span className="text-[9px] font-sans font-black text-emerald-800 tracking-tight leading-none uppercase">Government<br />Approved</span>
      </div>

      {/* 5. ARISTO */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="w-5.5 h-5.5 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 rounded-sm flex items-center justify-center font-bold text-[8px] text-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}>
          A
        </div>
        <div className="flex flex-col text-left">
          <span className="text-[12px] font-serif italic font-black text-brand-charcoal tracking-tight leading-none uppercase">ARISTO</span>
          <span className="text-[6.5px] font-bold text-red-500 uppercase tracking-widest mt-0.5 leading-none">Speciality Hospital</span>
        </div>
      </div>

      {/* 6. DH CLINIC */}
      <div className="flex items-center gap-2 h-10 select-none px-6 flex-shrink-0">
        <div className="h-5.5 w-1 bg-red-500 rounded-sm"></div>
        <div className="h-5.5 w-6 bg-[#0b1c30] flex items-center justify-center text-[9px] text-white font-extrabold rounded-sm">
          DH
        </div>
        <span className="font-sans text-[10px] font-bold tracking-widest text-brand-blue-navy uppercase">
          Clinics
        </span>
      </div>
    </>
  );

  return (
    <section className="bg-white py-14 border-b border-brand-gray-100 overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Title */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-gray-600 mb-10">
          Trusted by 30+ Modern Healthcare Organizations
        </p>

        {/* Scalable hospital logo vector loop marquee with edge gradient blurring */}
        <div className="relative w-full flex flex-col gap-8 overflow-hidden" id="partners-marquee-container">
          
          {/* Subtle gradient side panels for fade-in effect to cover edges */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" />

          {/* Row 1 Marquee: Moving Left */}
          <div className="relative w-full overflow-hidden flex" id="partners-marquee-row-1-wrapper">
            <div className="flex animate-scroll-x gap-12 flex-nowrap min-w-max" id="marquee-scroller-active-row1">
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors flex-shrink-0 flex-nowrap">
                {renderRow1Logos()}
              </div>
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors flex-shrink-0 flex-nowrap" aria-hidden="true">
                {renderRow1Logos()}
              </div>
            </div>
          </div>

          {/* Row 2 Marquee: Moving Right */}
          <div className="relative w-full overflow-hidden flex" id="partners-marquee-row-2-wrapper">
            <div className="flex animate-scroll-x-reverse gap-12 flex-nowrap min-w-max" id="marquee-scroller-active-row2">
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors flex-shrink-0 flex-nowrap">
                {renderRow2Logos()}
              </div>
              <div className="flex items-center gap-12 text-brand-gray-600/80 hover:text-brand-gray-900 transition-colors flex-shrink-0 flex-nowrap" aria-hidden="true">
                {renderRow2Logos()}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
