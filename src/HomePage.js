// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <nav>
        <ul>
          <li>
            <Link to="/information">Information</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/symptom-tracker">Symptom Tracker</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
