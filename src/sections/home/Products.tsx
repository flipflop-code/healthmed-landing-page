/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Badge } from '../../components/ui/Badge';
import { Heading } from '../../components/ui/Heading';
import { Button } from '../../components/ui/Button';

export default function Products() {
  const cards = [
    {
      id: 'HMIS',
      title: 'HMIS',
      description: 'Hospital Management Information System that connects all your departments and implements all your workflows.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=500&fm=webp',
    },
    {
      id: 'CMS',
      title: 'CMS',
      description: "Multi-user software to cover your clinic's workflow, from patient management and medical records, to scheduling and billing.",
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=500&fm=webp',
    },
    {
      id: 'LAB',
      title: 'LAB',
      description: 'Laboratory is an evolving concept, with new features and functionality being added often the functions of an eLaboratory will also change.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=500&fm=webp',
    },
    {
      id: 'EMR',
      title: 'EMR',
      description: 'Healthmed Electronic Medical Record offers physicians more than just a solution that saves a great deal of time and money.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500&fm=webp',
    },
  ];

  return (
    <section className="bg-brand-bg py-20 md:py-28 border-b border-brand-gray-100 overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Headings */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <div className="flex justify-center mb-5">
            <Badge variant="dark">
              Products
            </Badge>
          </div>
          <Heading level={2} id="products-heading" className="text-brand-charcoal">
            Everything Healthcare Teams Need <br />
            <span className="italic font-normal block mt-2">Connected in One Platform</span>
          </Heading>
          <p className="mt-5 text-brand-slate text-body-lg max-w-2xl mx-auto leading-relaxed font-sans" id="products-description">
            HealthMed combines clinical, operational, financial, and patient workflows into one intelligent healthcare management ecosystem.
          </p>
        </div>

        {/* 2x2 Grid of Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto" id="products-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="card-custom overflow-hidden hover:border-brand-blue/30 flex flex-col group cursor-pointer"
              id={`product-card-${card.id.toLowerCase()}`}
            >
              
              {/* Product Card Image Banner */}
              <div className="aspect-[16/10] w-full overflow-hidden relative bg-gray-100">
                <img
                  src={card.image}
                  alt={`${card.title} - ${card.description}`}
                  width={600}
                  height={375}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[1s]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* Product Info Block */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title and Read More Action Link on the exact same row */}
                <div className="flex items-center justify-between mb-4">
                  <Heading level={3} className="text-brand-charcoal font-medium leading-none">
                    {card.title}
                  </Heading>
                  <Button
                    variant="link"
                    href={`#product-${card.id.toLowerCase()}`}
                    id={`product-link-${card.id.toLowerCase()}`}
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                {/* Body Paragraph description with custom leading and text-sm / text-[13.5px] */}
                <p className="text-brand-slate text-body-sm leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
