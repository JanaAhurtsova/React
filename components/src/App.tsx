import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import HomePage from './pages/homePage/home';
import AboutPage from './pages/about/about';
import NotFoundPage from './pages/404/404';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='about' element={<AboutPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
