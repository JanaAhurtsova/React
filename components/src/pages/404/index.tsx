import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container">
      <h1>404</h1>
      <h2>
        {"This page doesn't exist."} Go <Link to="/">Home</Link>
      </h2>
    </div>
  );
};
