import React, { useState, useEffect } from 'react';
import './second.css';
import './modal.css';

const accessKey = 'i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M';
const perPage = 30;

const Second = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [clickedImageUrl, setImageUrl] = useState('');

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
    return () => {};
  }, []);

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
      </form>

      <div className="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {images.map((image, index) => (
          <div className="column" key={index} style={{ width: '30%', marginBottom: '20px' }}>
            <div className="content-wrapper">
              <div className="image-wrapper">
                <div className="overlay">
                  <div>
                    <button className="save" onClick={() => retrieveUrl(image)}>
                      Like
                    </button>

                    <button className="save" onClick={() => {retrieveUrl(image); openModal();}}>
                      Open Modal
                    </button>
                    {isOpen && (
                      <div className="modal">
                        <div className="modal-content">
                          <div className='imageCommentContainer'>
                          <button className="close" onClick={closeModal}>
                            Close
                          </button>
                            <h2>Image Preview
                              <div className='imgContainer'>
                                <img src={clickedImageUrl} style={{ width: '100%' }} />
                              </div>
                            </h2>
                        </div>
                        </div>
                      </div>
                    )}

                    <div>
                      <button className="round-button"></button>
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
