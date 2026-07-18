/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  id?: string;
}

export function Heading({ children, level = 2, className = '', id }: HeadingProps) {
  let levelStyles = '';
  switch (level) {
    case 1:
      levelStyles = 'brand-text-7xl';
      break;
    case 2:
      levelStyles = 'brand-text-5xl';
      break;
    case 3:
      levelStyles = 'brand-text-3xl';
      break;
    case 4:
      levelStyles = 'brand-text-2xl-medium';
      break;
  }

  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';

  return (
    <Tag id={id} className={`${levelStyles} ${className}`}>
      {children}
    </Tag>
  );
}
