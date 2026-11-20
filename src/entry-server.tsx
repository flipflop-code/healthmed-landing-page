/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { getBlogBySlug } from './data/blogs';

export function isValidRoute(url: string): boolean {
  const rawPath = url.split('?')[0].split('#')[0];
  const pathname = rawPath !== '/' ? rawPath.replace(/\/+$/, '') : '/';

  if (pathname === '/' || pathname === '/contact' || pathname === '/insights' || pathname === '/blog') {
    return true;
  }

  const blogMatch = pathname.match(/^\/(?:insights|blog)\/([^/]+)$/);
  if (blogMatch) {
    return Boolean(getBlogBySlug(decodeURIComponent(blogMatch[1])));
  }

  return false;
}

export function render(url: string) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </React.StrictMode>
  );
}
