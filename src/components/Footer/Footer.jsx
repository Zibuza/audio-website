import React from 'react';
import scss from './Footer.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Logo } from 'components/Logo/Logo';
import { NavLinksFooter } from 'components/NavLinksFooter/NavLinksFooter';
import { Media } from 'components/Media/Media';

export const Footer = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let footerStyle = scss.footer;
  let containerStyle = scss.footer__container;
  let containerThirdStyle = scss.footer__containerThird;
  let lineStyle = scss.footer__line;
  let aboutStyle = scss.footer__about;
  let copyrightStyle = scss.footer__copyright;
  let containerFifthStyle;

  if (isDesktop) {
    footerStyle += ` ${scss.footerDesktop}`;
    containerStyle += ` ${scss.footerDesktop__container}`;
    lineStyle += ` ${scss.footerDesktop__line}`;
    containerThirdStyle += ` ${scss.footerDesktop__containerThird}`;
    aboutStyle += ` ${scss.footerDesktop__about}`;
    copyrightStyle += ` ${scss.footerDesktop__copyright}`;
  } else if (isTablet) {
    footerStyle += ` ${scss.footerTablet}`;
    containerStyle += ` ${scss.footerTablet__container}`;
    lineStyle += ` ${scss.footerTablet__line}`;
    containerThirdStyle += ` ${scss.footerTablet__containerThird}`;
    containerFifthStyle = ` ${scss.footerTablet__containerFifth}`;
  } else if (isMobile) {
    footerStyle += ` ${scss.footerMobile}`;
    containerStyle += ` ${scss.footerMobile__container}`;
    lineStyle += ` ${scss.footerMobile__line}`;
    containerThirdStyle += ` ${scss.footerMobile__containerThird}`;
    aboutStyle += ` ${scss.footerMobile__about}`;
    containerFifthStyle = ` ${scss.footerMobile__containerFifth}`;
  }

  return (
    <footer className={footerStyle}>
      <div className={containerStyle}>
        <div className={lineStyle}></div>

        <div className={scss.footer__containerSecond}>
          <div className={containerThirdStyle}>
            <Logo />
            {(isTablet || isMobile) && <NavLinksFooter />}
            <p className={aboutStyle}>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
          </div>
          {isDesktop && (
            <div className={scss.footer__containerForth}>
              <NavLinksFooter />
              <Media />
            </div>
          )}
        </div>
        <div className={containerFifthStyle}>
          <p className={copyrightStyle}>Copyright 2024. All Rights Reserved</p>
          {(isTablet || isMobile) && <Media />}
        </div>
      </div>
    </footer>
  );
};
