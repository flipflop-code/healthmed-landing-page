/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'dark' | 'glass' | 'white';
  className?: string;
  id?: string;
}

export function Badge({ children, variant = 'dark', className = '', id }: BadgeProps) {
  let variantStyles = '';
  switch (variant) {
    case 'dark':
      variantStyles = 'badge-custom-dark';
      break;
    case 'glass':
      variantStyles = 'badge-custom-glass';
      break;
    case 'white':
      variantStyles = 'badge-custom-white';
      break;
  }

  return (
    <span
      id={id}
      className={`inline-block select-none ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
}
