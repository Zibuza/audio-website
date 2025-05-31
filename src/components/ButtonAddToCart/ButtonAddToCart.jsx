import React from 'react';
import scss from './ButtonAddToCart.module.scss';
import PropTypes from 'prop-types';

export const ButtonAddToCart = ({ onClick }) => {
  return (
    <>
      <button className={scss.buttonAddToCart} onClick={onClick}>
        ADD TO CART
      </button>
    </>
  );
};

ButtonAddToCart.propTypes = {
  onClick: PropTypes.func.isRequired,
};
