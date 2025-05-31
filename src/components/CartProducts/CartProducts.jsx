import React, { useContext } from 'react';
import scss from './CartProducts.module.scss';
import { CounterCart } from 'components/CounterCart/CounterCart';
import { DataContext } from 'components/App';
import PropTypes from 'prop-types';

export const CartProducts = ({ products }) => {
  const { refreshProducts } = useContext(DataContext);

  const formatPrice = price => {
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  const handleDeleteProduct = productId => {
    const newList = products.filter(pr => pr.id !== productId);
    localStorage.setItem('products', JSON.stringify(newList));
    refreshProducts();
  };

  const handlePlus = productId => {
    const newList = products.map(pr => {
      if (pr.id === productId) {
        return { ...pr, count: pr.count + 1 };
      }
      return pr;
    });
    localStorage.setItem('products', JSON.stringify(newList));
    refreshProducts();
  };

  const handleMinus = productId => {
    const product = products.find(pr => pr.id === productId);

    if (product.count <= 1) {
      handleDeleteProduct(productId);
    } else {
      const newList = products.map(pr => {
        if (pr.id === productId) {
          return { ...pr, count: pr.count - 1 };
        }
        return pr;
      });
      localStorage.setItem('products', JSON.stringify(newList));
      refreshProducts();
    }
  };

  return (
    <div className={scss.products}>
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
          <CounterCart
            count={pr.count}
            minus={() => handleMinus(pr.id)}
            plus={() => handlePlus(pr.id)}
          />
        </div>
      ))}
    </div>
  );
};

CartProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
