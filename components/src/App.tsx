import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
