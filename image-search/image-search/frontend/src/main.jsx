// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; // 
import SearchProvider from "./searchProvider"
import './index.css'

import App from './App'; // Import your main application component

ReactDOM.render(
  <SearchProvider>
  <Router>
    <App />
  </Router>
  </SearchProvider>,
  document.getElementById('root')
);
