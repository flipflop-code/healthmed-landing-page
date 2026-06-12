/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "Who can use Healthmed?",
    answer: "Healthmed is designed specifically for healthcare administrative directors, clinical leads, hospital systems, pharmacies, diagnostic laboratories, and group practices aiming to streamline operation pipelines."
  },
  {
    question: "Does Healthmed support registration management?",
    answer: "Yes. Healthmed provides secure registration modules supporting digital kiosk check-ins, insurance eligibility checks, and automatic patient intake queue synchronization."
  },
  {
    question: "Is Healthmed cloud-based?",
    answer: "Absolutely. Healthmed operates on highly available, fully HIPAA-compliant cloud server instances, ensuring end-to-end data safety, daily updates, and 99.9% uptime guarantees."
  },
  {
    question: "Can Healthmed integrate with existing systems?",
    answer: "Yes, Healthmed provides standard secure REST web APIs along with rich HL7/FHIR integration gateways to dynamically interface with legacy EMR, LIS, and billing networks."
  },
  {
    question: "Does Healthmed support electronic records?",
    answer: "Yes, our modules natively synchronize Electronic Health Records (EHR) and EMR clinical files, ensuring physicians and admins have consistent, unified histories."
  },
  {
    question: "What are healthcare solutions?",
    answer: "Healthcare solutions are integrated technologies, platforms, and automated workflow modules designed to reduce manual paperwork, optimize staff schedules, and elevate clinical patient experiences."
  },
  {
    question: "How Healthmed supports healthcare organizations?",
    answer: "Healthmed unifies separate diagnostic, scheduling, inventory, and administrative workflows into a single high-performance dashboard, reducing operating overhead and eliminating clerical error risk."
  },
  {
    question: "How does Healthmed support operational efficiency?",
    answer: "By automating manual data entry, providing smart predictive queue management, streamlining cross-site record accesses, and optimizing medical stock reordering schedules."
  }
];
