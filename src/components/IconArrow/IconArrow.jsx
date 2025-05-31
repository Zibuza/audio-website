import React from 'react';
import scss from './IconArrow.module.scss';

export const IconArrow = () => {
  return (
    <div className={scss.iconArrow}>
      <svg
        className={scss.iconArrow__icon}
        width="8"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.322 1l5 5-5 5"
          stroke="#D87D4A"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};
