import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { SectionAudioGear } from 'components/SectionAudioGear/SectionAudioGear';

export const Layout = () => {
  const location = useLocation();

  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {!isCheckoutPage && <SectionAudioGear />}
      <Footer />
    </>
  );
};
