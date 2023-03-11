import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h2>
        {"This page doesn't exist."} Go <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
