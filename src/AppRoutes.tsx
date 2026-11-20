/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Insights from './pages/Insights';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import WhatsAppFloat from './components/common/WhatsAppFloat';
import ScrollToTop from './components/common/ScrollToTop';

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <div id="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<BlogDetails />} />
          <Route path="/blog" element={<Insights />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Global floating components */}
        <WhatsAppFloat />
      </div>
    </>
  );
}
