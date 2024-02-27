'use client';
// @ts-ignore
import { ArrowRight } from '@carbon/icons-react';
// @ts-ignore
import { Button as CarbonButton } from '@carbon/react';
import Link from 'next/link';

export default function LinkButton({ href, children, ...args }: any) {
  return (
    <Link href={href}>
      <CarbonButton renderIcon={ArrowRight} {...args}>
        {children}
      </CarbonButton>
    </Link>
  );
}
