/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  schema?: any;
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage,
  schema
}: SEOProps) {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDescMeta = document.querySelector('meta[name="description"]');
    const prevDesc = prevDescMeta?.getAttribute('content') || '';

    // Update document title
    document.title = title;

    // Update description meta tag
    if (prevDescMeta) {
      prevDescMeta.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const prevCanonical = canonicalLink?.getAttribute('href') || '';
    if (canonicalUrl) {
      if (canonicalLink) {
        canonicalLink.setAttribute('href', canonicalUrl);
      } else {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        canonicalLink.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalLink);
      }
    }

    // Update Open Graph metadata tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    const ogImgMeta = document.querySelector('meta[property="og:image"]');

    const prevOgTitle = ogTitle?.getAttribute('content') || '';
    const prevOgDesc = ogDesc?.getAttribute('content') || '';
    const prevOgUrl = ogUrl?.getAttribute('content') || '';
    const prevOgType = ogTypeMeta?.getAttribute('content') || '';
    const prevOgImage = ogImgMeta?.getAttribute('content') || '';

    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (canonicalUrl && ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    if (ogTypeMeta) ogTypeMeta.setAttribute('content', ogType);
    if (ogImage && ogImgMeta) ogImgMeta.setAttribute('content', ogImage);

    // Inject JSON-LD Schema
    let schemaScript: HTMLScriptElement | null = null;
    if (schema) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.id = 'dynamic-page-seo-schema';
      schemaScript.textContent = JSON.stringify(schema);
      document.head.appendChild(schemaScript);
    }

    // Cleanup and restoration on unmount
    return () => {
      document.title = prevTitle;
      if (prevDescMeta) {
        prevDescMeta.setAttribute('content', prevDesc);
      }
      if (canonicalLink) {
        if (prevCanonical) {
          canonicalLink.setAttribute('href', prevCanonical);
        } else {
          canonicalLink.remove();
        }
      }
      if (ogTitle && prevOgTitle) ogTitle.setAttribute('content', prevOgTitle);
      if (ogDesc && prevOgDesc) ogDesc.setAttribute('content', prevOgDesc);
      if (ogUrl && prevOgUrl) ogUrl.setAttribute('content', prevOgUrl);
      if (ogTypeMeta && prevOgType) ogTypeMeta.setAttribute('content', prevOgType);
      if (ogImgMeta && prevOgImage) ogImgMeta.setAttribute('content', prevOgImage);

      if (schemaScript) {
        schemaScript.remove();
      }
    };
  }, [title, description, canonicalUrl, ogType, ogImage, schema]);

  return null;
}
