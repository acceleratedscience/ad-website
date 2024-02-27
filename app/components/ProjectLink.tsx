'use client';

import Link from 'next/link';
// @ts-ignore
import { ArrowRight } from '@carbon/icons-react';
import SectionContainer from './SectionContainer';

export default function ProjectLink({
  label,
  href
}: {
  label: string;
  href: string;
}) {
  return (
    <SectionContainer level={4} className='project-link-container mt-24'>
      <Link className='project-link box-title' href={href}>
        {label} <ArrowRight />
      </Link>
    </SectionContainer>
  );
}
