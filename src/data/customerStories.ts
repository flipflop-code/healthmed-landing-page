/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StoryMetric {
  value: string;
  label: string;
}

export interface CustomerStory {
  id: string;
  company: string;
  logoType: 'orlando' | 'providence' | 'vanderbilt' | 'mayo' | 'cleveland';
  metrics: StoryMetric[];
}

export const customerStoriesData: CustomerStory[] = [
  {
    id: 'orlando-health',
    company: 'Orlando Health',
    logoType: 'orlando',
    metrics: [
      { value: '50k +', label: 'Charts reviewed system-wide' },
      { value: '7%', label: 'Care gap closure rate increased' },
      { value: '95%', label: 'Accuracy rate' }
    ]
  },
  {
    id: 'providence-health',
    company: 'Providence Health',
    logoType: 'providence',
    metrics: [
      { value: '120k +', label: 'Automated workflows triggered' },
      { value: '14%', label: 'Operational efficiency improvement' },
      { value: '99%', label: 'System uptime sustained' }
    ]
  },
  {
    id: 'vanderbilt-health',
    company: 'Vanderbilt Health',
    logoType: 'vanderbilt',
    metrics: [
      { value: '85k +', label: 'Patient check-ins processed' },
      { value: '3.2x', label: 'Increase in scheduling throughput' },
      { value: '92%', label: 'Clinician satisfaction score' }
    ]
  },
  {
    id: 'mayo-clinic',
    company: 'Mayo Clinic',
    logoType: 'mayo',
    metrics: [
      { value: '200k +', label: 'Synthesized reports delivered' },
      { value: '18%', label: 'Administrative overhead reduction' },
      { value: '97%', label: 'Physician engagement rate' }
    ]
  },
  {
    id: 'cleveland-clinic',
    company: 'Cleveland Clinic',
    logoType: 'cleveland',
    metrics: [
      { value: '150k +', label: 'Diagnostic insights flagged' },
      { value: '2.4x', label: 'Accelerated patient triage' },
      { value: '96%', label: 'Overall accuracy score' }
    ]
  }
];
