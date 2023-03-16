import React from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.scss';
import router from '../../router/router';

class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
