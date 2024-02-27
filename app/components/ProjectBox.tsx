'use client';
import LinkButton from './LinkButton';
import { Link, Image } from '../interfaces';
// @ts-ignore
import { CloudApp } from '@carbon/icons-react';
import ProjectBoxImage from './ProjectBoxImage';
import SectionContainer from './SectionContainer';

export default function ProjectBox({
  index,
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  images
}: {
  index: number;
  title: string;
  subtitle?: string;
  description?: string;
  primaryAction?: Link;
  secondaryAction?: Link;
  images?: Image[];
}) {
  return (
    <SectionContainer level={1} className=''>
      <div className='flex flex-col md:flex-row w-full border-subtle-00 py-16 md:py-32 border-b border-solid'>
        <div
          className={`flex flex-col w-full md:w-1/2 md:order-first md:mr-8 lg:mr-16 md:my-0 ${
            images && images?.length > 1
              ? 'order-first mb-8'
              : 'order-last mt-8'
          }`}
        >
          <div className='flex flex-col md:px-0'>
            <span className='cds--type-sans-condensed text-4xl md:text-6xl font-extralight mb-8'>
              {title}
            </span>
            {subtitle && (
              <span className='cds--type-sans font-semibold text-lg mb-4'>
                {subtitle}
              </span>
            )}
            {description && (
              <div
                className='cds--type-sans text-lg whitespace-pre-line text-[#4C4C4C]'
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            )}
            <div className='flex flex-col md:flex-row w-full mt-6 space-x-0 md:space-x-4 space-y-4 md:space-y-0'>
              {primaryAction && (
                <div className='w-1/2 lg:w-1/3'>
                  <LinkButton
                    href={primaryAction.href}
                    className='button--green !w-full'
                  >
                    {primaryAction.label}
                  </LinkButton>
                </div>
              )}
              {secondaryAction && (
                <div className='w-1/2 lg:w-1/3'>
                  <LinkButton
                    href={secondaryAction.href}
                    kind='secondary'
                    renderIcon={CloudApp}
                    className='!w-full'
                  >
                    {secondaryAction.label}
                  </LinkButton>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`flex flex-col w-full md:w-1/2`}>
          {images?.map((image: Image, i: number) => (
            <div
              className={`${i !== images.length - 1 ? 'mb-12' : ''}`}
              key={i}
            >
              <ProjectBoxImage
                image={image}
                loading={index === 0 ? 'eager' : 'lazy'}
              ></ProjectBoxImage>
              <div className='w-full'>
                {image.caption && (
                  <div
                    className={
                      'cds--type-sans text-lg whitespace-pre-line mt-4'
                    }
                    dangerouslySetInnerHTML={{ __html: image.caption }}
                  ></div>
                )}
                {image.primaryAction && (
                  <div className='flex w-full mt-4'>
                    <div className='w-1/2 lg:w-1/3'>
                      <LinkButton
                        href={image.primaryAction.href}
                        className='button--green !w-full'
                      >
                        {image.primaryAction.label}
                      </LinkButton>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
