'use client';
import { Column, FlexGrid, Row } from '@carbon/react';
import { TileBox } from '../interfaces';
import LinkButton from './LinkButton';
import LinksBox from './LinksBox';
import HubspotForm from './HubspotForm';

export default function TileBoxes({
  tileBoxes,
  className = ''
}: {
  tileBoxes: TileBox[];
  className?: string;
}) {
  return (
    <div className={`relative w-full bg-white -z-0 ${className}`}>
      <div className='-z-10 absolute hidden md:block left-0 bottom-0 w-full h-1/2 md:h-full md:left-auto md:right-0 md:top-0 md:bottom-0 md:w-1/2 bg-[#0f62fe]'></div>
      <FlexGrid>
        <Row>
          {tileBoxes && tileBoxes[0] && (
            <Column sm={4} md={4} lg={8} xlg={{ span: 7, offset: 1 }}>
              <LinksBox
                title={tileBoxes[0].title}
                subtitle={tileBoxes[0].subtitle}
              >
                {tileBoxes[0].links && (
                  <div className='flex flex-col gap-y-4'>
                    {tileBoxes[0].links.map((link, index) => (
                      <LinkButton
                        key={index}
                        href={link.href}
                        className='button--green !w-full !max-w-none md:!max-w-xs'
                      >
                        {link.label}
                      </LinkButton>
                    ))}
                  </div>
                )}
                {tileBoxes[0].hubspotFormConfig && (
                  <div className='flex flex-col gap-y-4'>
                    <HubspotForm
                      formConfig={tileBoxes[0].hubspotFormConfig}
                    ></HubspotForm>
                  </div>
                )}
              </LinksBox>
            </Column>
          )}
          {tileBoxes && tileBoxes[1] && (
            <Column
              sm={4}
              md={4}
              lg={8}
              xlg={{ span: 7, offset: 1 }}
              className='bg-[#0f62fe]'
            >
              <LinksBox
                title={tileBoxes[1].title}
                subtitle={tileBoxes[1].subtitle}
                className='text-white ml-0 md:ml-6 lg:ml-10 xl:ml-0'
              >
                {tileBoxes[1].links && (
                  <div className='flex flex-col gap-y-4'>
                    {tileBoxes[1].links?.map((link, index) => (
                      <LinkButton
                        key={index}
                        href={link.href}
                        className='button--blue-20 !w-full !max-w-none md:!max-w-xs'
                      >
                        {link.label}
                      </LinkButton>
                    ))}
                  </div>
                )}
                {tileBoxes[1].hubspotFormConfig && (
                  <div className='flex flex-col gap-y-4'>
                    <HubspotForm
                      formConfig={tileBoxes[1].hubspotFormConfig}
                      className='hubspot-form--white'
                    ></HubspotForm>
                  </div>
                )}
              </LinksBox>
            </Column>
          )}
        </Row>
      </FlexGrid>
    </div>
  );
}

