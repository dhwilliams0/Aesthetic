import React, { useState, useEffect } from 'react';
import './second.css'

const accessKey = 'i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M';
const perPage = 30;

const Second = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  //code for modal, using useState
  const [isOpen, setIsOpen] = useState(false);

  const loadImages = (query, page = 1) => {
    let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const imageUrls = data.results.map((result) => result.urls.regular);
        setImages(imageUrls);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadImages('');
    return () => {
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loadImages(searchQuery);
  };


   //once the modal is clicked then it will display base on what is true 

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search.."
          id ="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className = "buttonBar">Search</button>
      </form>
        {/* <div className='row' >
            <div className="image-gallery">
                {images.map((imageUrl, index) => (
             <div className ="im">
                <h1>hrt</h1>
                <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
            </div>
                ))}
            </div>
        </div> */}
        {/* <div className = "image-container">
            <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                
            </div>
        </div> */}

<div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
      {images.map((image, index) => (
        <div className="column" key={index} style={{ width: '30%', marginBottom: '20px' }}>
          <div className="content-wrapper">
            <div className="image-wrapper">
              <div className="overlay">
                <div>
                  <button className="save">Like</button>

                  <button className="save">Like</button>

                  <div>
                    <button className="round-button">
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/512/512142.png"/> */}
                      {/* <img src={image} alt="Like Icon" /> */}
                    </button>
                  </div>
                </div>
              </div>
              <img src={image} alt="Image" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Second;
