import React from 'react';
import scss from './SectionProductGallery.module.scss';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

export const SectionProductGallery = ({ product }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionProductGalleryStyle = scss.sectionProductGallery;
  let containerStyle = scss.sectionProductGallery__container;
  let containerImageStyle = scss.sectionProductGallery__containerImage;
  let image1Style = scss.sectionProductGallery__image1;
  let image2Style = scss.sectionProductGallery__image2;
  let image3Style = scss.sectionProductGallery__image3;

  if (isDesktop) {
    sectionProductGalleryStyle += ` ${scss.sectionProductGalleryDesktop}`;
    containerStyle += ` ${scss.sectionProductGalleryDesktop__container}`;
    containerImageStyle += ` ${scss.sectionProductGalleryDesktop__containerImage}`;
    image1Style += ` ${scss.sectionProductGalleryDesktop__image1}`;
    image2Style += ` ${scss.sectionProductGalleryDesktop__image2}`;
    image3Style += ` ${scss.sectionProductGalleryDesktop__image3}`;
  } else if (isTablet) {
    sectionProductGalleryStyle += ` ${scss.sectionProductGalleryTablet}`;
    containerStyle += ` ${scss.sectionProductGalleryTablet__container}`;
    containerImageStyle += ` ${scss.sectionProductGalleryTablet__containerImage}`;
    image1Style += ` ${scss.sectionProductGalleryTablet__image1}`;
    image2Style += ` ${scss.sectionProductGalleryTablet__image2}`;
    image3Style += ` ${scss.sectionProductGalleryTablet__image3}`;
  } else if (isMobile) {
    sectionProductGalleryStyle += ` ${scss.sectionProductGalleryMobile}`;
    containerStyle += ` ${scss.sectionProductGalleryMobile__container}`;
    containerImageStyle += ` ${scss.sectionProductGalleryMobile__containerImage}`;
    image1Style += ` ${scss.sectionProductGalleryMobile__image1}`;
    image2Style += ` ${scss.sectionProductGalleryMobile__image2}`;
    image3Style += ` ${scss.sectionProductGalleryMobile__image3}`;
  }

  return (
    <section className={sectionProductGalleryStyle}>
      <div className={containerStyle}>
        <div className={containerImageStyle}>
          <div className={`${image1Style} ${scss[product.slug + '-1']}`}></div>
          <div className={`${image2Style} ${scss[product.slug + '-2']}`}></div>
        </div>
        <div className={`${image3Style} ${scss[product.slug + '-3']}`}></div>
      </div>
    </section>
  );
};

SectionProductGallery.propTypes = {
  product: PropTypes.object.isRequired,
};
