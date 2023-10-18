//import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Routes, Route } from 'react-router-dom';
import SearchImages from './SearchImages'
import Home from './Home'
import Nav from './Nav'
import {Link} from 'react-router-dom'

function App() {
  return (
    <>
     <SearchImages/>
    {/* <Home/>
    <Second/> */}
    <Nav/>
    {/* <Home/>  */}
     {/* <Nav/>
    <main>
      <Routes>
        <Route path='/e' element={<Home />} />
      </Routes>
    </main> */}
    </> 
  )
  }

export default App