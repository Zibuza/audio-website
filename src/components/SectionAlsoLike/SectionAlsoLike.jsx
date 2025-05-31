import React from 'react';
import scss from './SectionAlsoLike.module.scss';
import { useMediaQuery } from 'react-responsive';
import { LinkSeeOrange } from 'components/LinkSeeOrange/LinkSeeOrange';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export const SectionAlsoLike = ({ product }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionAlsoLikeStyle = scss.sectionAlsoLike;
  let containerStyle = scss.sectionAlsoLike__container;
  let titleMainStyle = scss.sectionAlsoLike__titleMain;
  let imageStyle = scss.sectionAlsoLike__image;

  if (isDesktop) {
    sectionAlsoLikeStyle += ` ${scss.sectionAlsoLikeDesktop}`;
    containerStyle += ` ${scss.sectionAlsoLikeDesktop__container}`;
    titleMainStyle += ` ${scss.sectionAlsoLikeDesktop__titleMain}`;
    imageStyle += ` ${scss.sectionAlsoLikeDesktop__image}`;
  } else if (isTablet) {
    sectionAlsoLikeStyle += ` ${scss.sectionAlsoLikeTablet}`;
    containerStyle += ` ${scss.sectionAlsoLikeTablet__container}`;
    titleMainStyle += ` ${scss.sectionAlsoLikeTablet__titleMain}`;
    imageStyle += ` ${scss.sectionAlsoLikeTablet__image}`;
  } else if (isMobile) {
    sectionAlsoLikeStyle += ` ${scss.sectionAlsoLikeMobile}`;
    containerStyle += ` ${scss.sectionAlsoLikeMobile__container}`;
    titleMainStyle += ` ${scss.sectionAlsoLikeMobile__titleMain}`;
    imageStyle += ` ${scss.sectionAlsoLikeMobile__image}`;
  }

  return (
    <section className={sectionAlsoLikeStyle}>
      <h2 className={titleMainStyle}>You may also like</h2>
      <div className={containerStyle}>
        {product.others.map(pr => (
          <div
            className={scss.sectionAlsoLike__productContainer}
            key={nanoid()}
          >
            <div className={`${scss[pr.slug]} ${imageStyle}`}></div>
            <h4 className={scss.sectionAlsoLike__title}>{pr.name}</h4>
            <LinkSeeOrange slug={pr.slug} />
          </div>
        ))}
      </div>
    </section>
  );
};

SectionAlsoLike.propTypes = {
  product: PropTypes.object.isRequired,
};
