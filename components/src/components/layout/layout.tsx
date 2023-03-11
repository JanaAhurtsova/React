import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    );
  }
}
