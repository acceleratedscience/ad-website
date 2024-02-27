'use client';
import { Heading } from '@carbon/react';
import { ReactNode } from 'react';
import SectionContainer from './SectionContainer';

export default function ProductPageBannerHero({
  title,
  subtitle,
  description,
  children
}: {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <SectionContainer level={1} className='pt-8 md:pt-40'>
      <div className='max-w-full md:max-w-xs lg:max-w-[50%]'>
        {subtitle && (
          <Heading className='heading-subtitle mb-4'>{subtitle}</Heading>
        )}
        {title && <Heading className='heading-title'>{title}</Heading>}
        {description && (
          <div
            className='heading-description max-w-prose whitespace-pre-line mt-8 md:mt-16'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        )}
        {children && <div className='mt-6'>{children}</div>}
      </div>
    </SectionContainer>
  );
}
