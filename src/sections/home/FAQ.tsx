/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import FAQComponent from '../../components/common/FAQ';

export default function FAQ() {
  const faqs = [
    {
      question: 'Who can use HealthMed?',
      answer: 'HealthMed is built for hospitals, multi-specialty clinics, diagnostic laboratories, digital pharmacies, and custom healthcare providers who want to unify their end-to-end clinical and administrative workflows.',
    },
    {
      question: 'Does HealthMed support multi-location management?',
      answer: 'Yes, HealthMed provides advanced multi-location, multi-tenant databases allowing group hospitals and chain clinics to synchronize patient records, billing data and inventory across different geographical sites.',
    },
    {
      question: 'Is HealthMed cloud-based?',
      answer: 'Absolutely. HealthMed is built on high-availability cloud infrastructure, ensuring 99.9% uptime with end-to-end automatic daily updates and robust compliance guarantees.',
    },
    {
      question: 'Can HealthMed integrate with third-party systems?',
      answer: 'Yes, we provide fully-developed secure REST APIs and HL7/FHIR integration capabilities to allow easy synchronization with existing healthcare hardware, laboratories, and insurance frameworks.',
    },
    {
      question: 'Does HealthMed support EMR/EHR workflows?',
      answer: 'Yes, EMR/EHR clinical charts, prescription tracking, and historical patient healthcare trends are natively integrated into our primary clinical interface module.',
    },
  ];

  return (
    <FAQComponent
      badge="FAQ"
      title={
        <>
          <span className="italic font-normal">Answers to your</span> most common concerns
        </>
      }
      items={faqs}
    />
  );
}

