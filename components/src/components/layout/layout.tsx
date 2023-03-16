import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';

export default class Layout extends React.Component {
  render() {
    return (
      <>
        <Outlet />
        <Footer />
      </>
    );
  }
}
