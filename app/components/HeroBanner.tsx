'use client';
import ExportedImage from 'next-image-export-optimizer';
import BackgroundOverlay from './BackgroundOverlay';
import SectionContainer from './SectionContainer';
import { Heading } from '@carbon/react';

export default function HeroBanner({
  title,
  description
}: {
  title: string;
  description: string;
}) {
  return (
    <div className='w-full h-[100svh] flex flex-col text-white relative'>
      <SectionContainer
        level={1}
        className='w-full h-full pt-20 md:pt-24 lg:pt-24 xl:pt-32 pb-4 md:pb-8 lg:pb-12 xl:pb-24'
      >
        <div className='flex flex-col text-white h-full'>
          <ExportedImage
            src='/images/home-page/hero-banner.jpg'
            alt=''
            fill
            loading='eager'
            className='object-cover'
          />
          <BackgroundOverlay />
          <Heading className='heading-title max-w-prose leading-tight z-10'>
            {title}
          </Heading>
          <div
            className='heading-description max-w-prose mt-auto whitespace-pre-line z-10'
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>
      </SectionContainer>
    </div>
  );
}
