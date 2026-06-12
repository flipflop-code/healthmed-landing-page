/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'healthcare-technology', name: 'Healthcare Technology' },
  { id: 'hospital-operations', name: 'Hospital operations' },
  { id: 'patient-experience', name: 'Patient Experience' },
  { id: 'industry-insights', name: 'Industry Insights' },
  { id: 'case-studies', name: 'Case Studies' }
];
