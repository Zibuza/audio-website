import React, { useState, useEffect, useCallback } from 'react';
import scss from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import { IconCard } from 'components/IconCard/IconCard';
import { IconMenu } from 'components/IconMenu/IconMenu';
import { NavLinksHeader } from 'components/NavLinksHeader/NavLinksHeader';
import { NavCategories } from 'components/NavCategories/NavCategories';
import { ModalCart } from 'components/ModalCart/ModalCart';

export const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);

  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedCart, setIsOpenedCart] = useState(false);

  let headerStyle = scss.header;
  let containerStyle = scss.header__container;
  let menuStyle = scss.header__menu;
  let cartStyle = scss.header__cart;

  if (isDesktop) {
    headerStyle += ` ${scss.headerDesktop}`;
    containerStyle += ` ${scss.headerDesktop__container}`;
    cartStyle += ` ${scss.headerDesktop__cart}`;
  } else if (isTablet) {
    headerStyle += ` ${scss.headerTablet}`;
    containerStyle += ` ${scss.headerTablet__container}`;
    menuStyle += ` ${scss.headerTablet__menu}`;
    cartStyle += ` ${scss.headerTablet__cart}`;
  } else if (isMobile) {
    headerStyle += ` ${scss.headerMobile}`;
    containerStyle += ` ${scss.headerMobile__container}`;
    menuStyle += ` ${scss.headerMobile__menu}`;
    cartStyle += ` ${scss.headerMobile__cart}`;
  }

  const menuClasses = `${menuStyle} ${!isOpened ? scss['is-hidden'] : ''}`;
  const cartClasses = `${cartStyle} ${!isOpenedCart ? scss['is-hidden'] : ''}`;

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const handleMenuClick = () => {
    toggleMenu();
  };

  const toggleCart = useCallback(() => {
    setIsOpenedCart(!isOpenedCart);
  }, [isOpenedCart]);

  const handleCartClick = event => {
    if (event.currentTarget === event.target) {
      toggleCart();
    }
  };

  useEffect(() => {
    if (isOpenedCart && prevLocation.pathname !== location.pathname) {
      setIsOpenedCart(false);
    }
    setPrevLocation(location);
  }, [location, prevLocation, isOpenedCart]);

  useEffect(() => {
    const handleEscapeKeyCart = event => {
      if (isOpenedCart && event.key === 'Escape') {
        toggleCart();
      }
    };
    if (isOpenedCart) {
      document.addEventListener('keydown', handleEscapeKeyCart);
    }
    return () => {
      document.removeEventListener('keydown', handleEscapeKeyCart);
    };
  }, [isOpenedCart, toggleCart]);

  return (
    <header className={headerStyle}>
      <div className={containerStyle}>
        {!isDesktop && <IconMenu onClick={toggleMenu} />}
        <Link to="/home">
          <Logo />
        </Link>
        {isDesktop && <NavLinksHeader />}
        <IconCard onClick={toggleCart} />
      </div>
      {!isDesktop && (
        <div className={menuClasses} onClick={handleMenuClick}>
          <NavCategories />
        </div>
      )}
      <div className={cartClasses} onClick={handleCartClick}>
        <ModalCart onClick={handleCartClick} />
      </div>
    </header>
  );
};
