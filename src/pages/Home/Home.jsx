import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionProductsHome } from 'components/SectionProductsHome/SectionProductsHome';
import { SectionMainHome } from 'components/SectionMainHome/SectionMainHome';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Audiophile</title>
      </Helmet>
      <SectionMainHome />
      <SectionNavCategories />
      <SectionProductsHome />
    </>
  );
}
