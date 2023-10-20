// //import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// // import './App.css'
// import { Routes, Route } from 'react-router-dom';
// import SearchImages from './SearchImages'
// import Home from './Home'
// import Nav from './Nav'
// import {Link} from 'react-router-dom'

// function App() {
//   return (
//     <>
//      <SearchImages/>
//     {/* <Home/>
//     <Second/> */}
//     <Nav/>
//     {/* <Home/>  */}
//      {/* <Nav/>
//     <main>
//       <Routes>
//         <Route path='/e' element={<Home />} />
//       </Routes>
//     </main> */}
//     </> 
//   )
//   }

// export default App

import React from 'react'; // Import React
import { Routes, Route } from 'react-router-dom'; // Import React Router
import SearchImages from './SearchImages'; // Import your components
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav /> {/* Include your navigation component at the top */}
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchImages />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
