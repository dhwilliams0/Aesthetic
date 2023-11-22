import React,{useState,useContext} from 'react'
import h from './Home'
import User from './images/use.png';
import './nav.css'
import SearchBar from "./SearchImages";
import {  useLocation } from 'react-router-dom';

import searchContext from "./searchContext"
function Nav({prop}) {
  const [search, setSearch] = useState('');
  const location = useLocation();

  const {setSearchTerm} = useContext(searchContext)

  console.log("location",location)

  const handleChange = (e) => {

    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(search)
    // setSearchTerm()
    // setSearchTerm("")
    // console.log('Search term ', searchTerm);
  };


  console.log("ss",search)
  return (
    <>
    <nav>
  <div className='navContainer'>
  <ul>
    {/* { location.pathname !== "/second" &&(
    <>
    <a href="/" className='home'>Home</a>
    <a href="/" className='home'>Search Images</a>
    <a href="/" className='home'>Login</a>
    <a href="/" className='home'>SignUp</a>
    </>
  )
  } */}


{location.pathname !== "/test" &&(
    <>
    <a href="/" className='home'>Home</a>
    {/* <SearchBar search = {searchTerm}/>  */}
    <a href="/" className='home'>Login</a>
    <a href="/" className='home'>SignUp</a>
    <a href="/" className='home'>{prop}</a>
    </>
  )
  }

{/* <form onSubmit="">
        <input
          type="text"
          placeholder="Search.."
          id="search-input"
          value=""
          onChange={(e) => (e.target.value)}
        />
        <button type="submit" className="buttonBar">
          Search
        </button>
      </form> */}


<form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search.."
          id="search-input"
          value={search}
          onChange={handleChange}
        />
        <button type="submit" className="buttonBar">
          Search
        </button>
      </form>

{/* {prop} */}
{/* <SearchBar prop = {""}/> */}
    {/* <SearchBar/> */}
    {/* <SearchBar/> */}
    {/* <img src={User} className='icon'/> */}
  {/* <a href="./shares.html">My Shares</a>
    <a href="./user.html">Profile</a>
    <a href="./likes.html">Likes</a> */}
    </ul>
  </div>
  </nav>

  </>
  )
}

export default Nav

