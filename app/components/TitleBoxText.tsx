'use client';
import { Heading, Tile } from '@carbon/react';
import SectionContainer from './SectionContainer';

/**
 * @param text string
 * @param level HeadingLevel: 1 | 2 | 3 | 4 | 5 | 6;
 * @returns
 */
export default function TitleBoxText({
  text,
  level = 2
}: {
  text: string;
  level?: any;
}) {
  return (
    <SectionContainer
      level={level}
      md={6}
      lg={12}
      xlg={{ span: 12, offset: 1 }}
    >
      <Tile className='tile--blue-60 md:px-8 md:py-12'>
        <Heading className='box-title'>{text}</Heading>
      </Tile>
    </SectionContainer>
  );
}
