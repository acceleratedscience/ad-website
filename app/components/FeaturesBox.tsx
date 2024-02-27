'use client';
import { Tile, Heading } from '@carbon/react';
// @ts-ignore
import * as CarbonIcons from '@carbon/pictograms-react';
import { Features } from '../interfaces';
import SectionContainer from './SectionContainer';

/**
 * @param features Features
 * @param level HeadingLevel: 1 | 2 | 3 | 4 | 5 | 6;
 * @returns
 */
export default function FeaturesBox({
  features,
  level = 2
}: {
  features: Features;
  level?: any;
}) {
  return (
    <SectionContainer
      level={level}
      lg={{ span: 12 }}
      xlg={{ span: 12, offset: 1 }}
    >
      <Tile className='tile--gray-layer-01'>
        <Heading className='box-title'>{features.title}</Heading>
        <div className='mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          {features.items.map((feature, index) => {
            const Pictogram = CarbonIcons[feature.pictogramName];
            return (
              <div key={index} className='feature-item-column mb-8'>
                <div className='flex gap-x-6'>
                  <div>
                    <Pictogram />
                  </div>
                  <div className='max-w-md cds--type-sans'>
                    <h5>{feature.title}</h5>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: feature.description || ''
                      }}
                    ></p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Tile>
    </SectionContainer>
  );
}
