import { Column, Grid, Section } from '@carbon/react';
import { ColumnSpan } from '@carbon/react/lib/components/Grid/Column';

/**
 * Use for section container, double grid was used to have more flexibility with condensed
 *
 */
export default function SectionContainer({
  children,
  level,
  className = 'mt-16 md:mt-24',
  sm = 4,
  md = 8,
  lg = 16,
  xlg = { span: 14, offset: 1 }
}: {
  children: any;
  level: any;
  className?: string;
  sm?: ColumnSpan;
  md?: ColumnSpan;
  lg?: ColumnSpan;
  xlg?: ColumnSpan;
}) {
  return (
    <Section level={level} className={className}>
      <Grid className='h-full'>
        <Column sm={sm} md={md} lg={lg} xlg={xlg}>
          {children}
        </Column>
      </Grid>
    </Section>
  );
}
