// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import './LoginPage.css'

import InformationalPages from './InformationalPages';
import BlogSection from './BlogSection';
import SymptomTracker from './SymptomTracker';
import LoginPage from './LoginPage';
import PeriodTracker from './PeriodTracker'; // Import PeriodTracker component
import ChatBot from './ChatBot';

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/information">Information</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/symptom-tracker">Symptom Tracker</Link>
              </li>
              <li>
                <Link to="/period-tracker">Period Tracker</Link> 
              </li>
              <li>
                 <Link to="/chat-bot">ChatBot</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/information" element={<InformationalPages />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/symptom-tracker" element={<SymptomTracker />} />
          <Route path="/period-tracker" element={<PeriodTracker />} /> 
          <Route path="/chat-bot" element={<ChatBot />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
