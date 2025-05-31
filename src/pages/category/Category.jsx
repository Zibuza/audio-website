import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { SectionCategoryTitle } from 'components/SectionCategoryTitle/SectionCategoryTitle';
import { SectionNavCategories } from 'components/SectionNavCategories/SectionNavCategories';
import { SectionProducts } from 'components/SectionProducts/SectionProducts';

export default function Category() {
  const { categoryName } = useParams();

  return (
    <>
      <Helmet>
        <title>
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </title>
      </Helmet>
      <SectionCategoryTitle title={categoryName} />
      <SectionProducts category={categoryName} />
      <SectionNavCategories />
    </>
  );
}
