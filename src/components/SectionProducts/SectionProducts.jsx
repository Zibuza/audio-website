import React, { useContext } from 'react';
import scss from './SectionProducts.module.scss';
import { useMediaQuery } from 'react-responsive';
import { DataContext } from 'components/App';
import { LinkSeeOrange } from 'components/LinkSeeOrange/LinkSeeOrange';
import PropTypes from 'prop-types';

export const SectionProducts = ({ category }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionProductsStyle = scss.sectionProducts;
  let containerStyle = scss.sectionProducts__container;
  let productContainerStyle = scss.sectionProducts__productContainer;
  let imageStyle = scss.sectionProducts__image;
  let textContainerStyle = scss.sectionProducts__textContainer;
  let titleStyle = scss.sectionProducts__title;
  let descriptionStyle = scss.sectionProducts__description;
  let newStyle = scss.sectionProducts__new;

  if (isDesktop) {
    sectionProductsStyle += ` ${scss.sectionProductsDesktop}`;
    containerStyle += ` ${scss.sectionProductsDesktop__container}`;
    productContainerStyle += ` ${scss.sectionProductsDesktop__productContainer}`;
    imageStyle += ` ${scss.sectionProductsDesktop__image}`;
    textContainerStyle += ` ${scss.sectionProductsDesktop__textContainer}`;
    titleStyle += ` ${scss.sectionProductsDesktop__title}`;
    descriptionStyle += ` ${scss.sectionProductsDesktop__description}`;
    newStyle += ` ${scss.sectionProductsDesktop__new}`;
  } else if (isTablet) {
    sectionProductsStyle += ` ${scss.sectionProductsTablet}`;
    containerStyle += ` ${scss.sectionProductsTablet__container}`;
    productContainerStyle += ` ${scss.sectionProductsTablet__productContainer}`;
    imageStyle += ` ${scss.sectionProductsTablet__image}`;
    textContainerStyle += ` ${scss.sectionProductsTablet__textContainer}`;
    titleStyle += ` ${scss.sectionProductsTablet__title}`;
    descriptionStyle += ` ${scss.sectionProductsTablet__description}`;
    newStyle += ` ${scss.sectionProductsTablet__new}`;
  } else if (isMobile) {
    sectionProductsStyle += ` ${scss.sectionProductsMobile}`;
    containerStyle += ` ${scss.sectionProductsMobile__container}`;
    productContainerStyle += ` ${scss.sectionProductsMobile__productContainer}`;
    imageStyle += ` ${scss.sectionProductsMobile__image}`;
    textContainerStyle += ` ${scss.sectionProductsMobile__textContainer}`;
    titleStyle += ` ${scss.sectionProductsMobile__title}`;
    descriptionStyle += ` ${scss.sectionProductsMobile__description}`;
    newStyle += ` ${scss.sectionProductsMobile__new}`;
  }

  const { data } = useContext(DataContext);
  const productsInCategory = data
    .filter(product => product.category === category)
    .reverse();

  return (
    <section className={sectionProductsStyle}>
      <div className={containerStyle}>
        {productsInCategory.map((product, index) => (
          <div
            className={`${productContainerStyle} ${
              index % 2 !== 0 ? scss.reversed : ''
            }`}
            key={product.id}
          >
            <div className={`${scss[product.slug]} ${imageStyle}`}></div>
            <div className={textContainerStyle}>
              {product.new && <div className={newStyle}>new product</div>}
              <h4 className={titleStyle}>{product.name}</h4>
              <p className={descriptionStyle}>{product.description}</p>
              <LinkSeeOrange slug={product.slug} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

SectionProducts.propTypes = {
  category: PropTypes.string.isRequired,
};
