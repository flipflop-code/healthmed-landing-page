/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const Contact = lazy(() => import('./pages/Contact'));

export default function App() {
  return (
    <BrowserRouter>
      <div id="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={
            <Suspense fallback={<div className="min-h-screen bg-white" />}>
              <Contact />
            </Suspense>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
