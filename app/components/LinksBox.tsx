'use client';
import { Section, Heading } from '@carbon/react';

export default function LinksBox({
  title,
  subtitle,
  children,
  className = ''
}: {
  title: string;
  subtitle?: string;
  children?: any;
  className?: string;
}) {
  return (
    <Section level={2} className={`${className} py-16`}>
      <Heading className='box-title'>{title}</Heading>
      {subtitle && <p className='mt-8 cds--type-sans'>{subtitle}</p>}
      <div className='mt-12'>{children}</div>
    </Section>
  );
}
