import React from 'react';
import scss from './SectionAudioGear.module.scss';
import { useMediaQuery } from 'react-responsive';

export const SectionAudioGear = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let audioGearStyle = scss.audioGear;
  let containerStyle = scss.audioGear__container;
  let descriptionStyle = scss.audioGear__description;
  let pictureStyle = scss.audioGear__picture;
  let titleStyle = scss.audioGear__title;
  let textStyle = scss.audioGear__text;

  if (isDesktop) {
    audioGearStyle += ` ${scss.audioGearDesktop}`;
    containerStyle += ` ${scss.audioGearDesktop__container}`;
    descriptionStyle += ` ${scss.audioGearDesktop__description}`;
    pictureStyle += ` ${scss.audioGearDesktop__picture}`;
    titleStyle += ` ${scss.audioGearDesktop__title}`;
  } else if (isTablet) {
    audioGearStyle += ` ${scss.audioGearTablet}`;
    containerStyle += ` ${scss.audioGearTablet__container}`;
    descriptionStyle += ` ${scss.audioGearTablet__description}`;
    pictureStyle += ` ${scss.audioGearTablet__picture}`;
    titleStyle += ` ${scss.audioGearTablet__title}`;
    textStyle += ` ${scss.audioGearTablet__text}`;
  } else if (isMobile) {
    audioGearStyle += ` ${scss.audioGearMobile}`;
    containerStyle += ` ${scss.audioGearMobile__container}`;
    descriptionStyle += ` ${scss.audioGearMobile__description}`;
    pictureStyle += ` ${scss.audioGearMobile__picture}`;
    titleStyle += ` ${scss.audioGearMobile__title}`;
    textStyle += ` ${scss.audioGearMobile__text}`;
  }

  return (
    <section className={audioGearStyle}>
      <div className={containerStyle}>
        <div className={descriptionStyle}>
          <h2 className={titleStyle}>
            Bringing you the <span className={scss.audioGear__span}>best</span>
            &nbsp; audio gear
          </h2>
          <p className={textStyle}>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className={pictureStyle}></div>
      </div>
    </section>
  );
};
