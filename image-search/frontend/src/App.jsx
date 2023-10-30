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

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SearchImages from './SearchImages'; 
import Home from './Home';
import Test from './Test';
import Com from './CommentsContainer';
import Nav from './Nav';

function App() {
  return (
    <>
      <Nav /> {/* Include your navigation component at the top */}
      <Routes>
        {/* Define your routes */}
        <Route path="/u" element={<Test />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchImages />} />
        <Route path="/com" element={<Com />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
