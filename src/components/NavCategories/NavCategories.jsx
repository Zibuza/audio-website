import React from 'react';
import scss from './NavCategories.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { IconArrow } from 'components/IconArrow/IconArrow';
import headphonesImage from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import speakersImage from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import earphonesImage from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

export const NavCategories = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let navCategoriesStyle = scss.navCategories;
  let itemStyle = scss.navCategories__item;
  let pictureStyle = scss.navCategories__picture;
  let nameStyles = scss.navCategories__name;

  if (isDesktop) {
    navCategoriesStyle += ` ${scss.navCategoriesDesktop}`;
    itemStyle += ` ${scss.navCategoriesDesktop__item}`;
    pictureStyle += ` ${scss.navCategoriesDesktop__picture}`;
    nameStyles += ` ${scss.navCategoriesDesktop__name}`;
  } else if (isTablet) {
    navCategoriesStyle += ` ${scss.navCategoriesTablet}`;
    itemStyle += ` ${scss.navCategoriesTablet__item}`;
    pictureStyle += ` ${scss.navCategoriesTablet__picture}`;
    nameStyles += ` ${scss.navCategoriesTablet__name}`;
  } else if (isMobile) {
    navCategoriesStyle += ` ${scss.navCategoriesMobile}`;
    itemStyle += ` ${scss.navCategoriesMobile__item}`;
    pictureStyle += ` ${scss.navCategoriesMobile__picture}`;
    nameStyles += ` ${scss.navCategoriesMobile__name}`;
  }

  return (
    <div className={navCategoriesStyle}>
      <div className={itemStyle}>
        <img className={pictureStyle} src={headphonesImage} alt="headphones" />
        <p className={nameStyles}>HEADPHONES</p>
        <Link to="/category/headphones" className={scss.navCategories__link}>
          SHOP
          <IconArrow />
        </Link>
      </div>

      <div className={itemStyle}>
        <img className={pictureStyle} src={speakersImage} alt="headphones" />
        <p className={nameStyles}>SPEAKERS</p>
        <Link to="/category/speakers" className={scss.navCategories__link}>
          SHOP
          <IconArrow />
        </Link>
      </div>

      <div className={itemStyle}>
        <img className={pictureStyle} src={earphonesImage} alt="headphones" />
        <p className={nameStyles}>EARPHONES</p>
        <Link to="/category/earphones" className={scss.navCategories__link}>
          SHOP
          <IconArrow />
        </Link>
      </div>
    </div>
  );
};
