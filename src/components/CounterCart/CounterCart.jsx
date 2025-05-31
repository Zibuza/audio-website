import React from 'react';
import scss from './CounterCart.module.scss';
import PropTypes from 'prop-types';

export const CounterCart = ({ count, plus, minus }) => {
  return (
    <div className={scss.counter}>
      <button className={scss.counter__button} onClick={minus}>
        -
      </button>
      <p className={scss.counter__count}>{count}</p>
      <button className={scss.counter__button} onClick={plus}>
        +
      </button>
    </div>
  );
};

CounterCart.propTypes = {
  count: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};
