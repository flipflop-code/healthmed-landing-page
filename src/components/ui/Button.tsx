/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'link';
  onClick?: () => void;
  className?: string;
  href?: string;
  id?: string;
}

export function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  href,
  id,
}: ButtonProps) {
  // Common styled base using smooth transitions and cursor pointer
  const baseStyles = 'cursor-pointer select-none';
  
  let variantStyles = '';
  switch (variant) {
    case 'primary':
      variantStyles = 'btn-primary';
      break;
    case 'secondary':
      variantStyles = 'btn-secondary';
      break;
    case 'outline':
      variantStyles = 'btn-outline';
      break;
    case 'link':
      variantStyles = 'btn-link';
      break;
  }

  const combinedStyles = `${baseStyles} ${variantStyles} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} id={id} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedStyles}
      id={id}
    >
      {children}
    </motion.button>
  );
}
