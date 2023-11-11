import React from 'react'
import h from './Home'
import User from './images/use.png';
import './nav.css'
import SearchBar from "./SearchImages";
function Nav() {
  return (
    <nav>
  <ul>
    <a href="/" className='home'>Home</a>
    {/* <SearchBar/> */}
    <a href="./search"> <SearchBar/></a>
    <img src={User} className='icon'/>
  {/* <a href="./shares.html">My Shares</a>
    <a href="./user.html">Profile</a>
    <a href="./likes.html">Likes</a> */}
    </ul>
    </nav>
  )
}

export default Nav

