import React from 'react';
import scss from './CartProductsCheckout.module.scss';
import PropTypes from 'prop-types';

export const CartProductsCheckout = ({ products, style }) => {
  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <div className={`${scss.products} ${style}`}>
      {products.map(pr => (
        <div key={pr.id} className={scss.products__product}>
          <div className={scss.products__prImageText}>
            <div className={`${scss[pr.slug]} ${scss.products__prImage}`}></div>
            <div>
              <h4 className={scss.products__prTitle}>{pr.shortName}</h4>
              <p className={scss.products__prPrice}>
                $ {formatPrice(pr.price)}
              </p>
            </div>
          </div>
          <p className={scss.products__count}>x{pr.count}</p>
        </div>
      ))}
    </div>
  );
};

CartProductsCheckout.propTypes = {
  products: PropTypes.array.isRequired,
};
