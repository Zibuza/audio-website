import React from 'react';
import scss from './SectionProductsHome.module.scss';
import { useMediaQuery } from 'react-responsive';
import speakerImage from '../../assets/home/desktop/image-speaker-zx9.png';
import { LinkSeeBlack } from '../LinkSeeBlack/LinkSeeBlack';
import { LinkSeeTransparent } from 'components/LinkSeeTransparent/LinkSeeTransparent';

export const SectionProductsHome = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });

  let sectionProductsHome = scss.sectionProductsHome;
  let container = scss.sectionProductsHome__container;
  let zx9Container = scss.sectionProductsHome__zx9Container;
  let zx7Container = scss.sectionProductsHome__zx7Container;
  let yx1Container = scss.sectionProductsHome__yx1Container;
  let zx9ContainerText = scss.sectionProductsHome__zx9ContainerText;
  let yx1ContainerText = scss.sectionProductsHome__yx1ContainerText;
  let yx1ContainerImage = scss.sectionProductsHome__yx1ContainerImage;
  let zx9Image = scss.sectionProductsHome__zx9Image;
  let zx9Title = scss.sectionProductsHome__zx9Title;
  let zx9Text = scss.sectionProductsHome__zx9Text;

  if (isDesktop) {
    sectionProductsHome += ` ${scss.sectionProductsHomeDesktop}`;
    container += ` ${scss.sectionProductsHomeDesktop__container}`;
    zx9Container += ` ${scss.sectionProductsHomeDesktop__zx9Container}`;
    zx7Container += ` ${scss.sectionProductsHomeDesktop__zx7Container}`;
    yx1Container += ` ${scss.sectionProductsHomeDesktop__yx1Container}`;
    zx9ContainerText += ` ${scss.sectionProductsHomeDesktop__zx9ContainerText}`;
    yx1ContainerText += ` ${scss.sectionProductsHomeDesktop__yx1ContainerText}`;
    yx1ContainerImage += ` ${scss.sectionProductsHomeDesktop__yx1ContainerImage}`;
    zx9Image += ` ${scss.sectionProductsHomeDesktop__zx9Image}`;
    zx9Title += ` ${scss.sectionProductsHomeDesktop__zx9Title}`;
    zx9Text += ` ${scss.sectionProductsHomeDesktop__zx9Text}`;
  } else if (isTablet) {
    sectionProductsHome += ` ${scss.sectionProductsHomeTablet}`;
    container += ` ${scss.sectionProductsHomeTablet__container}`;
    zx9Container += ` ${scss.sectionProductsHomeTablet__zx9Container}`;
    zx7Container += ` ${scss.sectionProductsHomeTablet__zx7Container}`;
    yx1Container += ` ${scss.sectionProductsHomeTablet__yx1Container}`;
    zx9ContainerText += ` ${scss.sectionProductsHomeTablet__zx9ContainerText}`;
    yx1ContainerText += ` ${scss.sectionProductsHomeTablet__yx1ContainerText}`;
    yx1ContainerImage += ` ${scss.sectionProductsHomeTablet__yx1ContainerImage}`;
    zx9Image += ` ${scss.sectionProductsHomeTablet__zx9Image}`;
    zx9Title += ` ${scss.sectionProductsHomeTablet__zx9Title}`;
    zx9Text += ` ${scss.sectionProductsHomeTablet__zx9Text}`;
  } else if (isMobile) {
    sectionProductsHome += ` ${scss.sectionProductsHomeMobile}`;
    container += ` ${scss.sectionProductsHomeMobile__container}`;
    zx9Container += ` ${scss.sectionProductsHomeMobile__zx9Container}`;
    zx7Container += ` ${scss.sectionProductsHomeMobile__zx7Container}`;
    yx1Container += ` ${scss.sectionProductsHomeMobile__yx1Container}`;
    zx9ContainerText += ` ${scss.sectionProductsHomeMobile__zx9ContainerText}`;
    yx1ContainerText += ` ${scss.sectionProductsHomeMobile__yx1ContainerText}`;
    yx1ContainerImage += ` ${scss.sectionProductsHomeMobile__yx1ContainerImage}`;
    zx9Image += ` ${scss.sectionProductsHomeMobile__zx9Image}`;
    zx9Title += ` ${scss.sectionProductsHomeMobile__zx9Title}`;
    zx9Text += ` ${scss.sectionProductsHomeMobile__zx9Text}`;
  }

  return (
    <section className={sectionProductsHome}>
      <div className={container}>
        <div className={zx9Container}>
          <img className={zx9Image} src={speakerImage} alt="ZX9 SPEAKER" />
          <div className={zx9ContainerText}>
            <h2 className={zx9Title}>ZX9 SPEAKER</h2>
            <p className={zx9Text}>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <LinkSeeBlack slug={'zx9-speaker'} />
          </div>
        </div>
        <div className={zx7Container}>
          <div className={scss.sectionProductsHome__zx7ContainerText}>
            <h4 className={scss.sectionProductsHome__zx7Title}>ZX7 SPEAKER</h4>
            <LinkSeeTransparent slug={'zx7-speaker'} />
          </div>
        </div>
        <div className={yx1Container}>
          <div className={yx1ContainerImage}></div>
          <div className={yx1ContainerText}>
            <div className={scss.sectionProductsHome__yx1ContainerTextInside}>
              <h4 className={scss.sectionProductsHome__yx1Title}>
                YX1 EARPHONES
              </h4>
              <LinkSeeTransparent slug={'yx1-earphones'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
