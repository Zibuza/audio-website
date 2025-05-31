import React from 'react';
import scss from './IconMenu.module.scss';
import { useMediaQuery } from 'react-responsive';
import PropTypes from 'prop-types';

export const IconMenu = ({ onClick }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  let iconMenuStyle = scss.iconMenu;

  if (isMobile) {
    iconMenuStyle += ` ${scss.iconMenuMobile}`;
  }
  return (
    <button type="button" className={iconMenuStyle} onClick={onClick}>
      <svg
        className={scss.iconMenu__icon}
        width="16"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="" fillRule="evenodd">
          <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
        </g>
      </svg>
    </button>
  );
};

IconMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};
