import { Metadata } from 'next';
import { ProjectList, Home } from './interfaces';
import homePageData from '@/public/data/home-page.json';
import Banner from './components/Banner';
import ProjectBox from './components/ProjectBox';
import HeroBanner from './components/HeroBanner';
import TileBoxes from './components/TileBoxes';
import Head from 'next/head';

function IndexPage() {
  return (
    // <div>
      <Head>
        <script type="text/javascript">
  window.heap=window.heap||[],heap.load=function(e,t){window.heap.appid=e,window.heap.config=t=t||{};var r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://cdn.heapanalytics.com/js/heap-"+e+".js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(r,a);for(var n=function(e){return function(){heap.push([e].concat(Array.prototype.slice.call(arguments,0)))}},p=["addEventProperties","addUserProperties","clearEventProperties","identify","resetIdentity","removeEventProperty","setEventProperties","track","unsetEventProperty"],o=0;o<p.length;o++)heap[p[o]]=n(p[o])};
  heap.load("757684585");
        </script>
      </Head>
   // </div>
  )
}
 
export default IndexPage

export const metadata: Metadata = {
  title: homePageData.seo.title,
  description: homePageData.seo.description,
  keywords: homePageData.seo.keywords
};

export default async function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <HeroBanner {...homePageData.heroBannerProps}></HeroBanner>
      <div className='flex flex-col w-full'>
        {homePageData.projects &&
          homePageData.projects.map((project: ProjectList, index: number) => (
            <ProjectBox key={index} index={index} {...project}></ProjectBox>
          ))}
      </div>
      {homePageData.bannerProps && (
        <Banner {...homePageData.bannerProps}></Banner>
      )}
      <TileBoxes tileBoxes={homePageData.tileBoxes} />
    </main>
  );
}
