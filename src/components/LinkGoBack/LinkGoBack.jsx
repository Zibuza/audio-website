import React from 'react';
import scss from './LinkGoBack.module.scss';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const LinkGoBack = () => {
  const navigate = useNavigate();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let linkGoBackStyle = scss.linkGoBack;

  if (isDesktop) {
    linkGoBackStyle += ` ${scss.linkGoBackDesktop}`;
  } else if (isTablet) {
    linkGoBackStyle += ` ${scss.linkGoBackTablet}`;
  } else if (isMobile) {
    linkGoBackStyle += ` ${scss.linkGoBackMobile}`;
  }

  const handleGoBack = event => {
    event.preventDefault();
    navigate(-1);
  };
  return (
    <div className={linkGoBackStyle}>
      <Link className={scss.linkGoBack__link} onClick={handleGoBack}>
        Go Back
      </Link>
    </div>
  );
};
