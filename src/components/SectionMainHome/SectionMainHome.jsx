import React from 'react';
import scss from './SectionMainHome.module.scss';
import { useMediaQuery } from 'react-responsive';
import { LinkSeeOrange } from 'components/LinkSeeOrange/LinkSeeOrange';

export const SectionMainHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionMainHomeStyle = scss.sectionMainHome;
  let containerStyle = scss.sectionMainHome__container;
  let containerTextStyle = scss.sectionMainHome__containerText;
  let titleStyle = scss.sectionMainHome__title;
  let textStyle = scss.sectionMainHome__text;

  if (isDesktop) {
    sectionMainHomeStyle += ` ${scss.sectionMainHomeDesktop}`;
    containerStyle += ` ${scss.sectionMainHomeDesktop__container}`;
    containerTextStyle += ` ${scss.sectionMainHomeDesktop__containerText}`;
    titleStyle += ` ${scss.sectionMainHomeDesktop__title}`;
    textStyle += ` ${scss.sectionMainHomeDesktop__text}`;
  } else if (isTablet) {
    sectionMainHomeStyle += ` ${scss.sectionMainHomeTablet}`;
    containerStyle += ` ${scss.sectionMainHomeTablet__container}`;
    containerTextStyle += ` ${scss.sectionMainHomeTablet__containerText}`;
    titleStyle += ` ${scss.sectionMainHomeTablet__title}`;
    textStyle += ` ${scss.sectionMainHomeTablet__text}`;
  } else if (isMobile) {
    sectionMainHomeStyle += ` ${scss.sectionMainHomeMobile}`;
    containerStyle += ` ${scss.sectionMainHomeMobile__container}`;
    containerTextStyle += ` ${scss.sectionMainHomeMobile__containerText}`;
    titleStyle += ` ${scss.sectionMainHomeMobile__title}`;
    textStyle += ` ${scss.sectionMainHomeMobile__text}`;
  }

  return (
    <section className={sectionMainHomeStyle}>
      <div className={containerStyle}>
        <div className={containerTextStyle}>
          <p className={scss.sectionMainHome__description}>NEW PRODUCT</p>
          <h1 className={titleStyle}>XX99 Mark II HeadphoneS</h1>
          <p className={textStyle}>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <LinkSeeOrange slug={'xx99-mark-two-headphones'} />
        </div>
      </div>
    </section>
  );
};
