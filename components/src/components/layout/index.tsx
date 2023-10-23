import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';

export const Layout: React.FC = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
