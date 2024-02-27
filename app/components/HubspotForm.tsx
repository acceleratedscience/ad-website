'use client';
import Script from 'next/script';
import { HubspotFormConfig } from '../interfaces';

export default function HubspotForm({
  id = 'hsforms',
  formConfig,
  className
}: {
  id?: string;
  formConfig: HubspotFormConfig;
  className?: string;
}) {
  return (
    <>
      <div id={id}></div>
      <Script
        type='text/javascript'
        src='//js.hsforms.net/forms/embed/v2.js'
        strategy='lazyOnload'
        onReady={() => {
          // @ts-ignore
          hbspt.forms.create({
            ...formConfig,
            target: `#${id}`,
            cssClass: `hubspot-form ${className}`
          });
        }}
      />
    </>
  );
}
