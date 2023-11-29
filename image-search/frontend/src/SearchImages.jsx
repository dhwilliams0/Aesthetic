import React, { useState, useEffect, useContext } from "react";
import "./second.css";
import "./modal.css";
import "./test.css"
import CommentContainer from "./CommentsContainer";

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
const perPage = 30;

import Nav from "./Nav"

import searchContext from "./searchContext"

import { useNavigate } from 'react-router-dom';
const Second = ({}) => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [clickedImageUrl, setImageUrl] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  
  const {searchTerm} = useContext(searchContext)

  const navigate = useNavigate();
  const loadImages = (query, page = 1) => {
    let url = `https://api.unsplash.com/search/photos?query=${query||"anime"}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const imageUrls = data.results.map((result) => result.urls.regular);
        setImages(imageUrls);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadImages("");
    return () => {};
  }, []);

  // console.log("search term from context",searchTerm)
  loadImages(searchTerm);
  const handleSubmit = (e) => {
    e.preventDefault();
    loadImages(searchQuery);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const retrieveUrl = (clickedImageUrl) => {
    setImageUrl(clickedImageUrl);
  };




  ////////////////USED GSAP AND LINES/////////////////////////////////////////////////////////////////////////////////////


  const login = () => {
    navigate("/login");
  }

  return (

    <div className="searchedImagesContainer">
      {/* <Nav prop={}/> */}

            
      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search.."
          id="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="buttonBar">
          Search
        </button>
      </form> */}
      <div
        className="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {images.map((image, index) => (
          <div
            className="column"
            key={index}
            style={{
              width: "30%",
              marginBottom: "20px",
            }}
          >
            <div className="content-wrapper">
              <div className="image-wrapper">
                <div className="overlay">
                  <div>
                    <button className="save" onClick={() => login()}>
                      Like
                    </button>

                    <button
                      className="save"
                      onClick={() => {
                        retrieveUrl(image);
                        openModal();
                      }}
                    >
                      Comments
                    </button>
                    {isOpen && (
                      <div className="modal">
                        <div className="modal-content" 
                            onClick={closeModal}>X
                          {/* <img
                            src="https://cdn-icons-png.flaticon.com/128/2938/2938884.png"
                            alt="Close Icon"
                            className="close"
                            onClick={closeModal}
                          /> */}
                          <div className="comments-container">
                            <CommentContainer />
                          </div>
                          <div className="imageCommentContainer">
                            <div className="imgContainer">
                              {/* <img src={clickedImageUrl} style={{ width: '100%' }} /> */}

                              {/* <div id="polaroid"> */}

                              <div class="polaroid-frame">
                                <figure>
                                  <img
                                    src={clickedImageUrl}
                                    style={{ width: "100%" }}
                                  />
                                  <figcaption></figcaption>
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      // </div>
                    )}

                    {/* <div>
                      <button className="round-button"></button>
                    </div> */}
                  </div>
                </div>

                <img src={image} alt="Image" style={{ width: "100%" }} />
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Second;
