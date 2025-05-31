import React from 'react';
import scss from './Counter.module.scss';
import PropTypes from 'prop-types';

export const Counter = ({ count, plus, minus }) => {
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

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
};
