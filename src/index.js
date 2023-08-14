import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);