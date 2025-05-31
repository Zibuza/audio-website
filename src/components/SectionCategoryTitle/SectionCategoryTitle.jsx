import React from 'react';
import scss from './SectionCategoryTitle.module.scss';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

export const SectionCategoryTitle = ({ title }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionCategoryTitleStyle = scss.sectionCategoryTitle;
  let containerStyle = scss.sectionCategoryTitle__container;

  if (isDesktop) {
    sectionCategoryTitleStyle += ` ${scss.sectionCategoryTitleDesktop}`;
    containerStyle += ` ${scss.sectionCategoryTitleDesktop__container}`;
  } else if (isTablet) {
    sectionCategoryTitleStyle += ` ${scss.sectionCategoryTitleTablet}`;
    containerStyle += ` ${scss.sectionCategoryTitleTablet__container}`;
  } else if (isMobile) {
    sectionCategoryTitleStyle += ` ${scss.sectionCategoryTitleMobile}`;
    containerStyle += ` ${scss.sectionCategoryTitleMobile__container}`;
  }
  return (
    <section className={sectionCategoryTitleStyle}>
      <div className={containerStyle}>
        <h2>{title}</h2>
      </div>
    </section>
  );
};

SectionCategoryTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
