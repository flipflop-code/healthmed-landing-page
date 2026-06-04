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
      levelStyles = 'text-h1';
      break;
    case 2:
      levelStyles = 'text-h2';
      break;
    case 3:
      levelStyles = 'text-h3';
      break;
    case 4:
      levelStyles = 'text-h4';
      break;
  }

  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : 'h4';

  return (
    <Tag id={id} className={`${levelStyles} ${className}`}>
      {children}
    </Tag>
  );
}
