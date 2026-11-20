/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';

const USER_CODES = [105, 110, 102, 111]; // "info"
const DOMAIN_CODES = [
  104, 101, 97, 108, 116, 104, 109, 101, 100, 116, 101, 99, 104, 110, 111, 108,
  111, 103, 105, 101, 115, 46, 99, 111, 109,
]; // "healthmedtechnologies.com"

function fromCodes(codes: number[]): string {
  return String.fromCharCode(...codes);
}

export function getProtectedEmail(): string {
  return `${fromCodes(USER_CODES)}${String.fromCharCode(64)}${fromCodes(DOMAIN_CODES)}`;
}

export function getProtectedMailto(): string {
  const scheme = [109, 97, 105, 108, 116, 111, 58].map((c) => String.fromCharCode(c)).join('');
  return `${scheme}${getProtectedEmail()}`;
}

export function useProtectedEmail() {
  const [revealedEmail, setRevealedEmail] = useState<string | null>(null);

  useEffect(() => {
    setRevealedEmail(getProtectedEmail());
  }, []);

  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!revealedEmail) {
      e.preventDefault();
      window.location.href = getProtectedMailto();
    }
  };

  return {
    revealedEmail,
    href: revealedEmail ? getProtectedMailto() : '/contact',
    handleEmailClick,
  };
}

interface ProtectedEmailTextProps {
  className?: string;
}

export const ProtectedEmailText: React.FC<ProtectedEmailTextProps> = ({ className = '' }) => {
  const [revealedEmail, setRevealedEmail] = useState<string | null>(null);

  useEffect(() => {
    setRevealedEmail(getProtectedEmail());
  }, []);

  if (revealedEmail) {
    return <span className={className}>{revealedEmail}</span>;
  }

  return (
    <span
      className={`email-mask ${className}`}
      data-u={fromCodes(USER_CODES)}
      data-d={fromCodes(DOMAIN_CODES)}
      aria-label="Contact email address"
    />
  );
};

interface ProtectedEmailLinkProps {
  className?: string;
  id?: string;
}

export const ProtectedEmailLink: React.FC<ProtectedEmailLinkProps> = ({
  className = '',
  id,
}) => {
  const { revealedEmail, href, handleEmailClick } = useProtectedEmail();

  return (
    <a
      href={href}
      onClick={handleEmailClick}
      className={className}
      id={id}
      rel="nofollow"
    >
      {revealedEmail ? (
        revealedEmail
      ) : (
        <span
          className="email-mask"
          data-u={fromCodes(USER_CODES)}
          data-d={fromCodes(DOMAIN_CODES)}
          aria-label="Contact email address"
        />
      )}
    </a>
  );
};
