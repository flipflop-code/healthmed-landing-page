/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhatsAppFloat from './components/common/WhatsAppFloat';

const Contact = lazy(() => import('./pages/Contact'));
const Insights = lazy(() => import('./pages/Insights'));
const BlogDetails = lazy(() => import('./pages/BlogDetails'));

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={
            <Suspense fallback={<div className="min-h-screen bg-[#f5f3ef]" />}>
              <Contact />
            </Suspense>
          } />
          <Route path="/insights" element={
            <Suspense fallback={<div className="min-h-screen bg-[#f5f3ef]" />}>
              <Insights />
            </Suspense>
          } />
          <Route path="/insights/:slug" element={
            <Suspense fallback={<div className="min-h-screen bg-[#f5f3ef]" />}>
              <BlogDetails />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<div className="min-h-screen bg-[#f5f3ef]" />}>
              <Insights />
            </Suspense>
          } />
          <Route path="/blog/:slug" element={
            <Suspense fallback={<div className="min-h-screen bg-[#f5f3ef]" />}>
              <BlogDetails />
            </Suspense>
          } />
        </Routes>
        
        {/* Global floating components */}
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}

