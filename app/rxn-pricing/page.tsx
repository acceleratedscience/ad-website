'use client';
import ExportedImage from 'next-image-export-optimizer';
import json from '@/public/data/rxn-pricing.json';
import ProductPageBannerHero from '../components/ProductPageBannerHero';
import { TalkToARapresentative } from '../interfaces';
import HubspotForm from '../components/HubspotForm';
import { Grid, Column } from '@carbon/react';

export default function TalkToARepresentative() {
  const data = json as TalkToARapresentative;
  return (
    <div className={`min-h-screen w-full`}>
      <div
        className={`background-product-page bg-[image:var(--image-url)] !h-[90vh]`}
        style={{
          ['--image-url' as any]: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, #f4f4f4 90%), url(/images/${data.bannerImage.imagePath})`
        }}
      ></div>

      <div className='md:hidden relative w-full h-[60vh]'>
        <div
          className='absolute inset-0 z-20'
          style={{
            background: `linear-gradient(to top, rgba(255,255,255,0) 50%, rgba(255,255,255,1) 90%)`
          }}
        ></div>
        <ExportedImage
          src={`/images/${data.bannerImageMobile.imagePath}`}
          fill
          className='object-cover z-10'
          alt={data.title}
          loading={'eager'}
        />
      </div>

      <ProductPageBannerHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
      >
        {
          <Grid className='h-full'>
            <Column sm={4} md={8} lg={14} xlg={14}>
              <HubspotForm formConfig={data.hubspotFormConfig}></HubspotForm>
            </Column>
          </Grid>
        }
      </ProductPageBannerHero>
    </div>
  );
}
