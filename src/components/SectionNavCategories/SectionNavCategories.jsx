import React from 'react';
import scss from './SectionNavCategories.module.scss';
import { useMediaQuery } from 'react-responsive';
import { NavCategories } from 'components/NavCategories/NavCategories';

export const SectionNavCategories = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionNavCategoriesStyle;

  if (isDesktop) {
    sectionNavCategoriesStyle = ` ${scss.sectionNavCategoriesDesktop}`;
  } else if (isTablet) {
    sectionNavCategoriesStyle = ` ${scss.sectionNavCategoriesTablet}`;
  } else if (isMobile) {
    sectionNavCategoriesStyle = ` ${scss.sectionNavCategoriesMobile}`;
  }

  return (
    <section className={sectionNavCategoriesStyle}>
      <NavCategories />
    </section>
  );
};
