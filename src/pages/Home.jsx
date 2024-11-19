import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import BrowseTheRange from '@/components/BrowseTheRange';
import OurProducts from '@/components/OurProducts';
import ImageGallery from '@/components/ImageGallery';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <BrowseTheRange />
      <OurProducts />
      <ImageGallery />
    </>
  )
}

export default Home