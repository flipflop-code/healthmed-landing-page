/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Import generated dashboard mockup images
// @ts-expect-error - image asset type declaration may be missing
import patientCareImg from '../assets/images/tab/1.png';
// @ts-expect-error - image asset type declaration may be missing
import hospitalOpsImg from '../assets/images/tab/2.png';
// @ts-expect-error - image asset type declaration may be missing
import financialMgmtImg from '../assets/images/tab/3.png';
// @ts-expect-error - image asset type declaration may be missing
import platformInsightsImg from '../assets/images/tab/4.png';

export interface ModuleAction {
  label: string;
  href: string;
}

export interface ModuleData {
  id: string;
  tabTitle: string;
  badge: string;
  headingPrefix: string;
  headingItalic: string;
  description: string;
  actions: ModuleAction[];
  image: string;
}

export const modulesData: ModuleData[] = [
  {
    id: 'patient-care',
    tabTitle: 'Patient Care',
    badge: 'Patient Care',
    headingPrefix: 'Deliver Better Care at Every Stage of the ',
    headingItalic: 'Patient Journey',
    description: 'Connect clinical workflows to streamline consultations, diagnostics, and treatment—improving care quality while reducing delays.',
    actions: [
      { label: 'Explore Clinical Operations', href: '/#clinical' },
      { label: 'Explore Diagnostics', href: '/#diagnostics' }
    ],
    image: patientCareImg
  },
  {
    id: 'hospital-operations',
    tabTitle: 'Hospital Operations',
    badge: 'Hospital Operations',
    headingPrefix: 'Optimize Patient Flow and Maximize ',
    headingItalic: 'Resource Utilization',
    description: 'Unify bed management, ward workflows, and staffing schedules to eliminate bottlenecks and optimize operational capacity.',
    actions: [
      { label: 'Explore Bed Management', href: '/#beds' },
      { label: 'Explore Ward Operations', href: '/#ward' }
    ],
    image: hospitalOpsImg
  },
  {
    id: 'financial-management',
    tabTitle: 'Financial Management',
    badge: 'Financial Management',
    headingPrefix: 'Accelerate Claims and Simplify the ',
    headingItalic: 'Revenue Cycle',
    description: 'Automate billing, claims processing, and insurance verification to reduce denials, accelerate reimbursements, and secure financial health.',
    actions: [
      { label: 'Explore Claims Processing', href: '/#claims' },
      { label: 'Explore Revenue Cycle', href: '/#revenue' }
    ],
    image: financialMgmtImg
  },
  {
    id: 'platform-insights',
    tabTitle: 'Platform & Insights',
    badge: 'Platform & Insights',
    headingPrefix: 'Drive Clinical and Operational Excellence with ',
    headingItalic: 'AI Analytics',
    description: 'Unlock predictive insights, real-time metrics, and automated reporting to empower administrators and elevate performance across your healthcare network.',
    actions: [
      { label: 'Explore AI Insights', href: '/#ai-insights' },
      { label: 'Explore Platform Analytics', href: '/#analytics' }
    ],
    image: platformInsightsImg
  }
];
