// import React from 'react';
// ////import './ImageRenderer.css';
// import image from './images/frame.png'; // Import the image directly

// const ImageRenderer = () => {
//   return (
//     <div className="image-container">
//       <img src={image} alt="Your Image" />
//     </div>
//   );
// };

// export default ImageRenderer;

import React from 'react';
import './second.css';

function App() {
  return (
    <div className="polaroid">
      <div className="tape"></div>
      <img
        src="https://placekitten.com/400/300" // Replace with your image URL
        alt="Cat"
      />
    </div>
  );
}

export default App;
