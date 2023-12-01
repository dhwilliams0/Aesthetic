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
import SecondHomePage from './secondHomePage';
import Login from "./Login"
function App() {
  return (
  <>
    <Nav /> 
    {/* Include your navigation component at the top */}
    <Routes>
      {/* Define your routes */}
      <Route path="/test" element={<Test />} />
      <Route path="/second" element={<SecondHomePage />} />
      <Route path="/" element={<SecondHomePage />} />
      <Route path="/search" element={<SearchImages />} />
      <Route path="/com" element={<Com />} />
      <Route path="/login" element={<Login/>} />
      {/* Add more routes as needed */}
    </Routes>
  </>

  );
}

export default App;
