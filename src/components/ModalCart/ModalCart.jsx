import React, { useContext } from 'react';
import scss from './ModalCart.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { DataContext } from 'components/App';
import { CartProducts } from 'components/CartProducts/CartProducts';
import PropTypes from 'prop-types';

export const ModalCart = ({ onClick }) => {
  const { products, refreshProducts } = useContext(DataContext);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let modalStyle = scss.modal;
  let cartStyle = scss.modal__cart;

  if (isDesktop) {
    modalStyle += ` ${scss.modalDesktop}`;
    cartStyle += ` ${scss.modalDesktop__cart}`;
  } else if (isTablet) {
    modalStyle += ` ${scss.modalTablet}`;
    cartStyle += ` ${scss.modalTablet__cart}`;
  } else if (isMobile) {
    modalStyle += ` ${scss.modalMobile}`;
    cartStyle += ` ${scss.modalMobile__cart}`;
  }

  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleDelete = () => {
    localStorage.removeItem('products');
    refreshProducts();
  };

  const calculateTotalPrice = cartProducts => {
    const prices = [];
    cartProducts.forEach(pr => {
      prices.push(pr.price * pr.count);
    });
    const price = prices.reduce((a, b) => a + b, 0);
    return formatPrice(price);
  };

  return (
    <div className={modalStyle} onClick={onClick}>
      <div className={cartStyle}>
        <div className={scss.modal__cartHeader}>
          <p className={scss.modal__amount}>cart ({products.length})</p>
          <button
            type="button"
            className={scss.modal__btnClear}
            onClick={handleDelete}
          >
            Remove all
          </button>
        </div>
        <CartProducts products={products} />
        {products.length !== 0 && (
          <div className={scss.modal__totalPrice}>
            <p className={scss.modal__totalPriceText}>TOTAL</p>
            <p className={scss.modal__totalPricePrice}>
              $ {calculateTotalPrice(products)}
            </p>
          </div>
        )}
        {products.length !== 0 && (
          <Link
            to="/checkout"
            className={scss.modal__btnCheckout}
            onClick={onClick}
          >
            checkout
          </Link>
        )}
      </div>
    </div>
  );
};

ModalCart.propTypes = {
  onClick: PropTypes.func.isRequired,
};
