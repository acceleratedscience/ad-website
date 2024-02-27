'use client';
import ExportedImage from 'next-image-export-optimizer';
import { Image } from '../interfaces';
import { useEffect, useRef } from 'react';

export default function ProjectBoxImage({
  image,
  loading
}: {
  image: Image;
  loading: 'eager' | 'lazy';
}) {
  const parallaxImgRef = useRef<HTMLDivElement>(null);
  const staticImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        if (parallaxImgRef.current && staticImgRef.current) {
          const { top } = staticImgRef.current.getBoundingClientRect();
          const offset = window.scrollY - (window.scrollY - top);
          parallaxImgRef.current.style.transform = `translateY(${
            offset * 0.2
          }px)`;
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            // NOTE: this need when refresh the page and the scroll is not on top
            handleScroll();
            window.addEventListener('scroll', handleScroll);
          } else {
            window.removeEventListener('scroll', handleScroll);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0
      }
    );
    if (parallaxImgRef.current) {
      observer.observe(parallaxImgRef.current);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  return (
    <div className='flex justify-center relative'>
      {image.parallaxImagePath && (
        <div
          className='w-[calc(100%_+_2rem)] h-full absolute z-10'
          ref={parallaxImgRef}
        >
          <ExportedImage
            src={'images/projects/' + image.parallaxImagePath}
            alt=''
            loading={loading}
            fill
            className='z-10'
            sizes='(max-width: 672px) 100vw, 50vw'
          />
        </div>
      )}
      <div className='w-full h-full' ref={staticImgRef}>
        <ExportedImage
          src={'images/projects/' + image.imagePath}
          alt={image.alt}
          loading={loading}
          fill
          sizes='(max-width: 672px) 100vw, 50vw'
          className='object-cover w-full ml-auto mr-auto !relative'
        />
      </div>
    </div>
  );
}
