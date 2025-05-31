import React, { useState, useContext } from 'react';
import scss from './SectionProductDetails.module.scss';
import { useMediaQuery } from 'react-responsive';
import { nanoid } from 'nanoid';
import { ButtonAddToCart } from 'components/ButtonAddToCart/ButtonAddToCart';
import { LinkGoBack } from 'components/LinkGoBack/LinkGoBack';
import { Counter } from 'components/Counter/Counter';
import { DataContext } from 'components/App';
import PropTypes from 'prop-types';

export const SectionProductDetails = ({ product }) => {
  const { products, refreshProducts } = useContext(DataContext);

  const [count, setCount] = useState(1);

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
  let priceStyle = scss.sectionProducts__price;
  let detailsContainerStyles = scss.sectionProducts__detailsContainer;
  let featuresStyle = scss.sectionProducts__features;
  let featuresTitleStyle;
  let boxStyles = scss.sectionProducts__box;
  let boxTitleStyle = scss.sectionProducts__boxTitle;
  let boxItemStyles = scss.sectionProducts__boxItem;

  if (isDesktop) {
    sectionProductsStyle += ` ${scss.sectionProductsDesktop}`;
    containerStyle += ` ${scss.sectionProductsDesktop__container}`;
    productContainerStyle += ` ${scss.sectionProductsDesktop__productContainer}`;
    imageStyle += ` ${scss.sectionProductsDesktop__image}`;
    textContainerStyle += ` ${scss.sectionProductsDesktop__textContainer}`;
    titleStyle += ` ${scss.sectionProductsDesktop__title}`;
    descriptionStyle += ` ${scss.sectionProductsDesktop__description}`;
    newStyle += ` ${scss.sectionProductsDesktop__new}`;
    priceStyle += ` ${scss.sectionProductsDesktop__price}`;
    detailsContainerStyles += ` ${scss.sectionProductsDesktop__detailsContainer}`;
    featuresStyle += ` ${scss.sectionProductsDesktop__features}`;
    featuresTitleStyle = ` ${scss.sectionProductsDesktop__featuresTitle}`;
    boxStyles += ` ${scss.sectionProductsDesktop__box}`;
    boxTitleStyle += ` ${scss.sectionProductsDesktop__boxTitle}`;
    boxItemStyles += ` ${scss.sectionProductsDesktop__boxItem}`;
  } else if (isTablet) {
    sectionProductsStyle += ` ${scss.sectionProductsTablet}`;
    containerStyle += ` ${scss.sectionProductsTablet__container}`;
    productContainerStyle += ` ${scss.sectionProductsTablet__productContainer}`;
    imageStyle += ` ${scss.sectionProductsTablet__image}`;
    textContainerStyle += ` ${scss.sectionProductsTablet__textContainer}`;
    titleStyle += ` ${scss.sectionProductsTablet__title}`;
    descriptionStyle += ` ${scss.sectionProductsTablet__description}`;
    newStyle += ` ${scss.sectionProductsTablet__new}`;
    priceStyle += ` ${scss.sectionProductsTablet__price}`;
    detailsContainerStyles += ` ${scss.sectionProductsTablet__detailsContainer}`;
    featuresTitleStyle = ` ${scss.sectionProductsTablet__featuresTitle}`;
    boxStyles += ` ${scss.sectionProductsTablet__box}`;
    boxTitleStyle += ` ${scss.sectionProductsTablet__boxTitle}`;
    boxItemStyles += ` ${scss.sectionProductsTablet__boxItem}`;
  } else if (isMobile) {
    sectionProductsStyle += ` ${scss.sectionProductsMobile}`;
    containerStyle += ` ${scss.sectionProductsMobile__container}`;
    productContainerStyle += ` ${scss.sectionProductsMobile__productContainer}`;
    imageStyle += ` ${scss.sectionProductsMobile__image}`;
    textContainerStyle += ` ${scss.sectionProductsMobile__textContainer}`;
    titleStyle += ` ${scss.sectionProductsMobile__title}`;
    descriptionStyle += ` ${scss.sectionProductsMobile__description}`;
    newStyle += ` ${scss.sectionProductsMobile__new}`;
    priceStyle += ` ${scss.sectionProductsMobile__price}`;
    detailsContainerStyles += ` ${scss.sectionProductsMobile__detailsContainer}`;
    featuresTitleStyle = ` ${scss.sectionProductsMobile__featuresTitle}`;
    boxStyles += ` ${scss.sectionProductsMobile__box}`;
    boxTitleStyle += ` ${scss.sectionProductsMobile__boxTitle}`;
    boxItemStyles += ` ${scss.sectionProductsMobile__boxItem}`;
  }

  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handlePlus = () => {
    const newCount = count + 1;
    setCount(newCount);

    const existingProduct = products.find(p => p.id === product.id);

    if (existingProduct) {
      const updatedProducts = products.map(p =>
        p.id === product.id ? { ...p, count: newCount } : p
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      refreshProducts();
    }
  };
  const handleMinus = () => {
    const newCount = count > 1 ? count - 1 : 1;
    setCount(newCount);

    const existingProduct = products.find(p => p.id === product.id);

    if (existingProduct && newCount >= 1) {
      const updatedProducts = products.map(p =>
        p.id === product.id ? { ...p, count: newCount } : p
      );
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      refreshProducts();
    }
    if (count <= 1) {
      setCount(1);
    }
  };

  const handleAddToCart = () => {
    if (products.find(p => p.id === product.id && p.count === count)) {
      return;
    } else if (products.find(p => p.id === product.id && p.count !== count)) {
      const filteredProducts = products.filter(p => p.id !== product.id);
      filteredProducts.push({ ...product, count });
      localStorage.setItem('products', JSON.stringify(filteredProducts));
      refreshProducts();
    } else {
      products.push({ ...product, count });
      localStorage.setItem('products', JSON.stringify(products));
      refreshProducts();
    }
  };

  return (
    <section className={sectionProductsStyle}>
      <LinkGoBack />
      <div className={containerStyle}>
        <div className={productContainerStyle}>
          <div className={`${scss[product.slug]} ${imageStyle}`}></div>
          <div className={textContainerStyle}>
            {product.new && <div className={newStyle}>new product</div>}
            <h4 className={titleStyle}>{product.name}</h4>
            <p className={descriptionStyle}>{product.description}</p>
            <p className={priceStyle}>$ {formatPrice(product.price)}</p>
            <div className={scss.sectionProducts__buttonsContainer}>
              <Counter count={count} minus={handleMinus} plus={handlePlus} />
              <ButtonAddToCart onClick={handleAddToCart} />
            </div>
          </div>
        </div>
        <div className={detailsContainerStyles}>
          <div className={featuresStyle}>
            <h4 className={featuresTitleStyle}>FEATURES</h4>
            <p
              className={scss.sectionProducts__featuresDescription}
              dangerouslySetInnerHTML={{ __html: product.features }}
            ></p>
          </div>
          <div className={boxStyles}>
            <h4 className={boxTitleStyle}>in the box</h4>
            <div className={scss.sectionProducts__boxIncludes}>
              {product.includes.map(item => (
                <div className={boxItemStyles} key={nanoid()}>
                  <p className={scss.sectionProducts__boxItemQuantity}>
                    {item.quantity}x
                  </p>
                  <p className={scss.sectionProducts__boxItemText}>
                    {item.item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionProductDetails.propTypes = {
  product: PropTypes.object.isRequired,
};
