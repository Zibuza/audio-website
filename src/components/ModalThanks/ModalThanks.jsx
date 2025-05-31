import React, { useState, useContext } from 'react';
import scss from './ModalThanks.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { DataContext } from 'components/App';
import { CartProductsCheckout } from 'components/CartProductsCheckout/CartProductsCheckout';
import { IconConfirm } from 'components/IconConfirm/IconConfirm';
import PropTypes from 'prop-types';

export const ModalThanks = ({ grandTotal, products }) => {
  const { refreshProducts } = useContext(DataContext);

  const [isLess, setIsLess] = useState(true);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktopTablet = useMediaQuery({ minWidth: 769 });

  let modalThanksStyle = scss.modalThanks;
  let titleStyle = scss.modalThanks__title;
  let summaryStyle = scss.modalThanks__summary;
  let cartProductsStyle = scss.modalThanks__cartProducts;
  let grandTotalTextPrice = scss.modalThanks__grandTotalTextPrice;

  if (isDesktopTablet) {
    modalThanksStyle += ` ${scss.modalThanksDesktopTablet}`;
    titleStyle += ` ${scss.modalThanksDesktopTablet__title}`;
    summaryStyle += ` ${scss.modalThanksDesktopTablet__summary}`;
    cartProductsStyle += ` ${scss.modalThanksDesktopTablet__cartProducts}`;
    grandTotalTextPrice += ` ${scss.modalThanksDesktopTablet__grandTotalTextPrice}`;
  } else if (isMobile) {
    modalThanksStyle += ` ${scss.modalThanksMobile}`;
    titleStyle += ` ${scss.modalThanksMobile__title}`;
    summaryStyle += ` ${scss.modalThanksMobile__summary}`;
    grandTotalTextPrice += ` ${scss.modalThanksMobile__grandTotalTextPrice}`;
  }

  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const oneProduct = products[0];

  const handleToggleView = () => {
    setIsLess(!isLess);
  };

  const removeProducts = () => {
    localStorage.removeItem('products');
    refreshProducts();
  };

  return (
    <div className={modalThanksStyle}>
      <IconConfirm />
      <h2 className={titleStyle}>
        THANK YOU
        <br /> FOR YOUR ORDER
      </h2>
      <p className={scss.modalThanks__text}>
        You will receive an email confirmation shortly.
      </p>
      <div className={summaryStyle}>
        <div className={cartProductsStyle}>
          {isLess ? (
            <div className={scss.modalThanks__product}>
              <div className={scss.modalThanks__prImageText}>
                <div
                  className={`${scss[oneProduct.slug]} ${
                    scss.modalThanks__prImage
                  }`}
                ></div>
                <div>
                  <h4 className={scss.modalThanks__prTitle}>
                    {oneProduct.shortName}
                  </h4>
                  <p className={scss.modalThanks__prPrice}>
                    $ {formatPrice(oneProduct.price)}
                  </p>
                </div>
              </div>
              <p className={scss.modalThanks__count}>x{oneProduct.count}</p>
            </div>
          ) : (
            <CartProductsCheckout
              products={products}
              style={scss.modalThanks__productList}
            />
          )}
          {products.length > 1 && (
            <button
              type="button"
              className={scss.modalThanks__btn}
              onClick={handleToggleView}
            >
              {isLess
                ? `and ${products.slice(1).length} other item(s)`
                : 'View less'}
            </button>
          )}
        </div>
        <div className={scss.modalThanks__grandTotal}>
          <div className={grandTotalTextPrice}>
            <p className={scss.modalThanks__grandTotalText}>GRAND TOTAL</p>
            <p className={scss.modalThanks__grandTotalPrice}>{grandTotal}</p>
          </div>
        </div>
      </div>

      <Link
        to="/home"
        className={scss.modalThanks__link}
        onClick={removeProducts}
      >
        BACK TO HOME
      </Link>
    </div>
  );
};

ModalThanks.propTypes = {
  grandTotal: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
