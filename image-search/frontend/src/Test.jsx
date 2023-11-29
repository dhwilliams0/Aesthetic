// // // // // // // // // // // //Suspense is imported from react to help with the conent loading
// // // // // // // // // // // import React, { Suspense } from 'react';

// // // // // // // // // // // // Canvas helps with rendering the 3D object and useloaders help with the additional assets like texture 
// // // // // // // // // // // import { Canvas, useLoader } from '@react-three/fiber';

// // // // // // // // // // // // GLTF OR (Graphics Language Transmission Format) is a special formal that helps read and understand 3D models to be used in my scene
// // // // // // // // // // // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// // // // // // // // // // // // Importing orbital controls allow users to be interactive with the 3D model, from zooming,panning and rotating
// // // // // // // // // // // //Perspective camera is there for the default scenen
// // // // // // // // // // // import { OrbitControls,PerspectiveCamera } from '@react-three/drei';

// // // // // // // // // // // function Model({ url }) {
// // // // // // // // // // //   //the glftloader is used to load the model and the result is then stord in the variable 
// // // // // // // // // // //   const gltf = useLoader(GLTFLoader, url); 

// // // // // // // // // // //   //the primitive element is used to render the 3D scene
// // // // // // // // // // //   return <primitive object={gltf.scene} />;
// // // // // // // // // // // }
// // // // // // // // // // // function App() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <Canvas style={{ width: '500px', height: '500px'}}>
// // // // // // // // // // //       <ambientLight intensity={0.5}/>
// // // // // // // // // // //       <directionalLight intensity={1} position={[3, 2, 1]} />
// // // // // // // // // // //       <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} zoom={1} /> 
// // // // // // // // // // //       <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} dampingFactor={0.1} />
// // // // // // // // // // //       <Suspense fallback={null}>
// // // // // // // // // // //         <Model url="/camera.glb"/>
// // // // // // // // // // //       </Suspense>
// // // // // // // // // // //     </Canvas>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default App;
// // // // // // // // // // import React, { Suspense, useRef } from 'react';
// // // // // // // // // // import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// // // // // // // // // // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
// // // // // // // // // // import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// // // // // // // // // // function Model({ url }) {
// // // // // // // // // //   const gltf = useLoader(GLTFLoader, url);
// // // // // // // // // //   const modelRef = useRef();

// // // // // // // // // //   useFrame(() => {
// // // // // // // // // //     // Rotate the model over time to make it appear to float
// // // // // // // // // //     modelRef.current.rotation.x += 0.005;
// // // // // // // // // //     modelRef.current.rotation.y += 0.005;
// // // // // // // // // //   });

// // // // // // // // // //   return <primitive object={gltf.scene} ref={modelRef} />;
// // // // // // // // // // }

// // // // // // // // // // function App() {
// // // // // // // // // //   return (
// // // // // // // // // //     <Canvas style={{ width: '500px', height: '500px'}}>
// // // // // // // // // //       <ambientLight intensity={0.5}/>
// // // // // // // // // //       <directionalLight intensity={1} position={[3, 2, 1]} />
// // // // // // // // // //       <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} zoom={1} /> 
// // // // // // // // // //       <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} dampingFactor={0.1} />
// // // // // // // // // //       <Suspense fallback={null}>
// // // // // // // // // //         <Model url="/camera.glb"/>
// // // // // // // // // //       </Suspense>
// // // // // // // // // //     </Canvas>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;
// // // // // // // // // // import React, { Suspense, useRef } from 'react';
// // // // // // // // // // import { Canvas, useFrame, useLoader } from '@react-three/fiber';
// // // // // // // // // // import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
// // // // // // // // // // import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

// // // // // // // // // // function Model({ url }) {
// // // // // // // // // //   const gltf = useLoader(GLTFLoader, url);
// // // // // // // // // //   const modelRef = useRef();


// // // // // // // // // //   useFrame(({clock}) => {
// // // // // // // // // //     // console.log("modelRef", modelRef)
// // // // // // // // // //     const yPosition =  Math.sin(clock.elapsedTime) * 0.5; 
// // // // // // // // // //     modelRef.current.position.y = yPosition;
// // // // // // // // // //   });

// // // // // // // // // //   return <primitive object={gltf.scene} ref={modelRef} />;
// // // // // // // // // // }

// // // // // // // // // // function App() {
// // // // // // // // // //   return (
// // // // // // // // // //     <Canvas style={{ width: '500px', height: '500px'}}>
// // // // // // // // // //       <ambientLight intensity={0.5}/>
// // // // // // // // // //       <directionalLight intensity={1} position={[3, 2, 1]} />
// // // // // // // // // //       <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} zoom={1} /> 
// // // // // // // // // //       <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} dampingFactor={0.1} />
// // // // // // // // // //       <Suspense fallback={null}>
// // // // // // // // // //         <Model url="/camera.glb"/>
// // // // // // // // // //       </Suspense>
// // // // // // // // // //     </Canvas>
// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;

// // // // // // // // // // const {innerHeight} = window;


// // // // // // // // // // import React, { useEffect, useRef } from 'react';
// // // // // // // // // // import gsap from 'gsap';
// // // // // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // // // // //  import './App.css';

// // // // // // // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // // // // // function App() {
// // // // // // // // // //   gsap.from("#zoom-out h2", {
// // // // // // // // // //     scale: 50, stagger: 0.25, duration: 3,
// // // // // // // // // //     scrollTrigger: {
// // // // // // // // // //         trigger: "#zoom-out",
// // // // // // // // // //         pin: true,
// // // // // // // // // //         end: `+=${innerHeight * 1.3}`,
// // // // // // // // // //         scrub: 3
// // // // // // // // // //     }
// // // // // // // // // //   });  

// // // // // // // // // //   return (
// // // // // // // // // //     <section id="zoom-out">
// // // // // // // // // //         <h2>Text zoom-out</h2>
// // // // // // // // // //     </section>

// // // // // // // // // //   );
// // // // // // // // // // }

// // // // // // // // // // export default App;import React, { useEffect } from 'react';import React, { useEffect } from 'react';
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js
// // // // // // // // // // ZoomEffect.js

// // // // // // // // // // import React, { useEffect } from 'react';
// // // // // // // // // // import { gsap } from 'gsap';
// // // // // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // // // // // // import './test.css';

// // // // // // // // // // const ZoomEffect = () => {
// // // // // // // // // //   // useEffect(() => {
// // // // // // // // // //   //   gsap.registerPlugin(ScrollTrigger);

// // // // // // // // // //   //   gsap.to("#zoom-in h2", {
// // // // // // // // // //   //     scale: 12,
// // // // // // // // // //   //     opacity: 100,
// // // // // // // // // //   //     duration: 3,
// // // // // // // // // //   //     scrollTrigger: {
// // // // // // // // // //   //       trigger: "#zoom-in",
// // // // // // // // // //   //       start: 'top center',
// // // // // // // // // //   //       end: '+=10%', // Extend the scroll range
// // // // // // // // // //   //       scrub: true,
// // // // // // // // // //   //       markers: true,
// // // // // // // // // //   //     }
// // // // // // // // // //   //   });
// // // // // // // // // //   // }, []);

// // // // // // // // // //   gsap.registerPlugin(ScrollTrigger);

// // // // // // // // // //   gsap.to("#zoom-in h2", {
// // // // // // // // // //     scale: 0.25,
// // // // // // // // // //     opacity: 100,
// // // // // // // // // //     duration: 3,
// // // // // // // // // //     scrollTrigger: {
// // // // // // // // // //       trigger: "#zoom-in",
// // // // // // // // // //       start: 'top center',
// // // // // // // // // //       end: '+=5000', // Extend the scroll range
// // // // // // // // // //       scrub: true,
// // // // // // // // // //       markers: true,
// // // // // // // // // //     }
// // // // // // // // // //   })

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       {/* Section 1 */}
// // // // // // // // // //       <div id="zoom-out" className="section">
// // // // // // // // // //         <h2>Zoom Out Text</h2>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Section 2 */}
// // // // // // // // // //       <div id="zoom-in" className="section zoom-in">
// // // // // // // // // //         <h2>Zoom In Text</h2>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ZoomEffect;import React, { useEffect } from 'react';import React, { useEffect } from 'react';
// // // // // // // // // // import React, {useEffect} from 'react';
// // // // // // // // // // import gsap from 'gsap';
// // // // // // // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // // // // // // // // // import './test.css'; // Import your stylesheet

// // // // // // // // // // const ZoomAnimation = () => {
// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     gsap.registerPlugin(ScrollTrigger);

// // // // // // // // // //     const { innerHeight } = window;

// // // // // // // // // //     // zoom-out
// // // // // // // // // //     gsap.from('#zoom-out h2', {
// // // // // // // // // //       scale: 50,
// // // // // // // // // //       stagger: 0.25,
// // // // // // // // // //       duration: 3,
// // // // // // // // // //       scrollTrigger: {
// // // // // // // // // //         trigger: '#zoom-out',
// // // // // // // // // //         pin: true,
// // // // // // // // // //         end: `+=${innerHeight * 1.3}`,
// // // // // // // // // //         scrub: 3,
// // // // // // // // // //       },
// // // // // // // // // //     });

// // // // // // // // // //     // zoom-in
// // // // // // // // // //     gsap.to('#zoom-in h2', {
// // // // // // // // // //       scale: 400,
// // // // // // // // // //       stagger: 0.25,
// // // // // // // // // //       duration: 3,
// // // // // // // // // //       scrollTrigger: {
// // // // // // // // // //         trigger: '#zoom-in',
// // // // // // // // // //         pin: true,
// // // // // // // // // //         end: `+=${innerHeight * 3.3}`,
// // // // // // // // // //         scrub: 3,
// // // // // // // // // //       },
// // // // // // // // // //     });
// // // // // // // // // //   }, []); // Empty dependency array ensures the effect runs only once on mount

// // // // // // // // // //   return (
// // // // // // // // // //     <div>
// // // // // // // // // //       <section id="zoom-out">
// // // // // // // // // //         <h2>Text zoom-out</h2>
// // // // // // // // // //       </section>

// // // // // // // // // //       <section id="zoom-in">
// // // // // // // // // //         <h2>Text zoom-in</h2>
// // // // // // // // // //       </section>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ZoomAnimation;


// // // // // // // // // ZoomAnimation.jsx
// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useNavigate } from 'react-router-dom';

// import './animation.css';

// const ZoomAnimation = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const { innerHeight } = window;

//     // zoom-out
//     // gsap.from('#zoom-out h2', {
//     //   scale: 50,
//     //   stagger: 0.25,
//     //   duration: 3,
//     //   scrollTrigger: {
//     //     trigger: '#zoom-out',
//     //     pin: true,
//     //     end: `+=${innerHeight * 1.3}`,
//     //     scrub: 3,
//     //   },
//     // });

//     // zoom-in
//     gsap.to('#zoom-in h2', {
//       scale: 1600,
//       stagger: 0.25,
//       duration: 3,
//       opacity:"100",
//       scrollTrigger: {
//         trigger: '#zoom-in',
//         pin: true,
//         end: `+=${innerHeight * 1.3}`,
//         scrub: 1,
//         onUpdate: (animation) => {
//           // console.log("end",animation)
//           // console.log("end of",animation.start)
//           // navigate('/');
//           // if (animation.end) {
//           // // console.log("end",animation.end)
//           // //   navigate('/');
//           //  }
//           if (animation.progress === 1) {
//             console.log("end")
//             // navigate('/');
//           }
//         },
//       },
//     });
//   }, [navigate]);

//   return (
//     <div>
//       <section id="zoom-out">
//         <h2>Text zoom-out</h2>
//       </section>

//       <section id="zoom-in">
//         <h2>Text zoom-in</h2>
//     </section>
    
//     </div>
//   );
// };

// export default ZoomAnimation;

// // import React, { useEffect } from 'react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import "./animation.css"
// // const ZoomAnimation = () => {
// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const { innerHeight } = window;

// //     // zoom-out
// //     // gsap.from('#zoom-out h2', {
// //     //   scale: 50,
// //     //   stagger: 0.25,
// //     //   duration: 3,
// //     //   scrollTrigger: {
// //     //     trigger: '#zoom-out',
// //     //     end: `+=${innerHeight * 1.3}`,
// //     //     scrub: 3,
// //     //   },
// //     // });

// //     // zoom-in
// //     gsap.to('#zoom-in h2', {
// //       scale: 2,
// //       stagger: 0.25,
// //       duration: 3,
// //       opacity: 1,
// //       scrollTrigger: {
// //         trigger: '#zoom-in',
// //         end: `+=${innerHeight * 1.3}`,
// //         scrub: 1,
// //         onUpdate: (animation) => {
// //           if (animation.progress === 1) {
// //             console.log('Animation complete');
// //             // You can perform any action when the animation is complete
// //           }
// //         },
// //       },
// //     });
// //   }, []);

// //   return (
// //     <div>
// //       <div id="zoom-out">
// //         <h2>Text zoom-out</h2>
// //       </div>

// //       <div id="zoom-in">
// //         <h2>SHARE YOUR CREATIVITY</h2>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ZoomAnimation;



// // // import React, { useEffect, useState } from 'react';
// // // import gsap from 'gsap';
// // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // import Lenis from '@studio-freight/lenis';

// // // import './test.css'; // Make sure to create a corresponding CSS file

// // // const SoSickComponent = () => {
// // //   const [images, setImages] = useState([]);

// // //   useEffect(() => {
// // //     gsap.registerPlugin(ScrollTrigger);

// // //     const lenis = new Lenis({
// // //       duration: 1.2,
// // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // //     });

// // //     function raf(time) {
// // //       lenis.raf(time);
// // //       requestAnimationFrame(raf);
// // //     }

// // //     requestAnimationFrame(raf);

// // //     gsap.to('.img', {
// // //       stagger: 0.2,
// // //       y: -700,
// // //       scrollTrigger: {
// // //         trigger: '.img',
// // //         scrub: true,
// // //       },
// // //     });
// // //   }, []);

// // //   const imageUrls = [
// // //     'https://assets.codepen.io/2621168/img1.jpg',
// // //     'https://assets.codepen.io/2621168/img2.jpg',
// // //     'https://assets.codepen.io/2621168/img3.jpg',
// // //     'https://assets.codepen.io/2621168/img3.jpg',

// // //     // Add more image URLs as needed
// // //   ];
  
// // // const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// // // const perPage = 25;

// // //   let query = "anime"
// // //   const loadImages = ( page = 1) => {
// // //     let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

// // //     fetch(url)
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         const imageUrls = data.results.map((result) => result.urls.regular);
// // //         // console.log("eye", imageUrls)
// // //         setImages(imageUrls);
    
// // //       })
// // //       .catch((error) => console.error(error));
// // //     };
// // //     loadImages()
// // //     console.log("imaf",images)
// // //   return (
// // //     <>
// // //       <h1>embrace beautiful</h1>

// // //       <section className="gallery">
// // //         {[...Array(images.length)].map((_, index) => (
// // //           <div key={index} className="line"></div>
// // //         ))}
// // //       </section>

// // //       <section className="gallery">
// // //   {images.map((url, index) => (
// // //     <div key={index} className="img" style={{ backgroundImage: `url(${url})` }}>
// // //       {/* Your image content here */}
// // //     </div>
// // //   ))}
// // // </section>
// // // </>
// // //   );
// // // };
// // // export default SoSickComponent;





// // // //1///////////////////////////////////////////////////////////////////////////////////////////////

// // // // import React, { useEffect, useState } from 'react';
// // // // import gsap from 'gsap';
// // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // import Lenis from '@studio-freight/lenis';

// // // // import './test.css'; // Make sure to create a corresponding CSS file
// // // // import Home from  './Home';

// // // // const SoSickComponent = () => {
// // // //   const [images, setImages] = useState([]);

// // // //   useEffect(() => {
// // // //     gsap.registerPlugin(ScrollTrigger);

// // // //     const lenis = new Lenis({
// // // //       duration: 1.2,
// // // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // // //     });

// // // //     function raf(time) {
// // // //       lenis.raf(time);
// // // //       requestAnimationFrame(raf);
// // // //     }

// // // //     requestAnimationFrame(raf);

// // // //     gsap.to('.img', {
// // // //       stagger: 0.2,
// // // //       y: -700,
// // // //       scrollTrigger: {
// // // //         trigger: '.img',
// // // //         scrub: true,
// // // //       },
// // // //     });
// // // //   }, []);

// // // //   const imageUrls = [
// // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',

// // // //     // Add more image URLs as needed
// // // //   ];
  
// // // // const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// // // // const perPage = 15;

// // // //   let query = "anime"
// // // //   const loadImages = ( page = 1) => {
// // // //     let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

// // // //     fetch(url)
// // // //       .then((response) => response.json())
// // // //       .then((data) => {
// // // //         const imageUrls = data.results.map((result) => result.urls.regular);
// // // //         //console.log("eye", imageUrls)
// // // //         setImages(imageUrls);
// // // //       })
// // // //       .catch((error) => console.error(error));
// // // //     };
// // // //     loadImages()
// // // //     console.log("imaf",images)
// // // //   return (
// // // //     <>
// // // //       <h1>embrace beautiful</h1>

// // // //       <section className="gallery">
// // // //         {[...Array(images.length)].map((_, index) => (
// // // //           <div key={index} className="line"></div>
// // // //           ))}
// // // //           <div className='behind'><Home/></div>
// // // //       </section>

// // // //       <section className="gallery">
// // // //   {images.map((url, index) => (
// // // //     <div key={index} className="img" style={{ backgroundImage: `url(${url})` }}>
// // // //       {/* Your image content here */}
// // // //     </div>
// // // //   ))}
// // // // </section>
// // // // </>
// // // //   );
// // // // };

// // // // export default SoSickComponent;


// // // ///////////////////////////////////////////////////

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import './App.css'; // Import your CSS file

// // // // // // function App() {
// // // // // //   const [scrollPosition, setScrollPosition] = useState(0);
// // // // // //   const [showWords, setShowWords] = useState(true);
// // // // // // console.log("window", window.scrollY)
// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       setScrollPosition(window.scrollY);
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   const handleWordsVisibility = () => {
// // // // // //     // You can adjust the scroll threshold based on your preference
// // // // // //     const scrollThreshold = 200;

// // // // // //     if (scrollPosition > scrollThreshold) {
// // // // // //       setShowWords(false);
// // // // // //     } else {
// // // // // //       setShowWords(true);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     handleWordsVisibility();
// // // // // //   }, [scrollPosition]);

// // // // // //   return (
// // // // // //     <div className={`hidden-words ${showWords ? 'visible' : 'hidden'}`}>
// // // // // //       {showWords ? (
// // // // // //         <>
// // // // // //           <p>Scroll down to reveal more words</p>
// // // // // //           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
// // // // // //         </>
// // // // // //       ) : (
// // // // //   //         <>
// // // // // //           <p>More Words Revealed!</p>
// // // // // //           <p>These are additional words that appear as you scroll down.</p>
// // // // // //         </>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;


// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // function App() {
// // // // // //   const [showButton, setShowButton] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     const handleKeyPress = (event) => {
// // // // // //       // if (event.key === 'Enter') {
// // // // // //       //   setShowButton(true);
// // // // // //       // }
// // // // // //       if (window.scrollY === 200){
// // // // // //         setShowButton(true);
// // // // // //       }
// // // // // //     };
// // // // // //     if (window.scrollY > 200){
// // // // // //       console.log("window", window.scrollY)
// // // // // //       setShowButton(true);
// // // // // //     }
// // // // // //     console.log("scroll", window.scrollY)

// // // // // //     window.addEventListener('keydown', handleKeyPress);

// // // // // //     return () => {
// // // // // //       window.removeEventListener('keydown', handleKeyPress);
// // // // // //     };
// // // // // //   }, []); // Empty dependency array ensures that the effect runs once when the component mounts

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>fdvdvfdvfdvd</h1>
// // // // // //       {showButton && <button onClick={() => alert('Button Clicked!')}>Click Me</button>}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;
// // // // // // import React, { useState, useEffect } from 'react';

// // // // // // function App() {
// // // // // //   const [showButton, setShowButton] = useState(false);

// // // // // //   useEffect(() => {
// // // // // //     console.log("scrollo", window.scrollY)
// // // // // //     const handleScroll = () => {
// // // // // //       if (window.scrollY > 100) {
// // // // // //         setShowButton(true);
// // // // // //         console.log("scrolly", window.scrollY)
// // // // // //       } else {
// // // // // //         setShowButton(false);
// // // // // //       }
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // //     // Cleanup the event listener when the component is unmounted
// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //     };
// // // // // //   }, []); // Empty dependency array ensures that the effect runs once when the component mounts

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h1>fdvdvfdvfdvd</h1>
// // // // // //       {showButton && <h1 onClick={() => alert('Button Clicked!')}>Click Me</h1>}
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default App;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import gsap from 'gsap';
// // // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // // import Lenis from '@studio-freight/lenis';
// // // // // import './test.css'; // Make sure to create a corresponding CSS file
// // // // // import Home from  './Home';

// // // // // const SoSickComponent = () => {
// // // // //   const [images, setImages] = useState([]);

// // // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // // //   useEffect(() => {
// // // // //     gsap.registerPlugin(ScrollTrigger);

// // // // //     const lenis = new Lenis({
// // // // //       duration: 1.2,
// // // // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // // // //     });

// // // // //     function raf(time) {
// // // // //       lenis.raf(time);
// // // // //       requestAnimationFrame(raf);
// // // // //     }

// // // // //     requestAnimationFrame(raf);

// // // // //     gsap.to('.img', {
// // // // //       stagger: 0.2,
// // // // //       y: -700,
// // // // //       scrollTrigger: {
// // // // //         trigger: '.img',
// // // // //         scrub: true,
// // // // //       },
// // // // //     });
// // // // //   }, []);

// // // // //   const imageUrls = [
// // // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // // //     // Add more image URLs as needed
// // // // //   ];

// // // // //   const dynamicStyles = imageUrls.map((url, index) => `
// // // // //     &:nth-of-type(${index + 1}) {
// // // // //       background-image: url('${url}');
// // // // //     }
// // // // //   `).join('\n');



// // // // //   const [showButton, setShowButton] = useState(false);
// // // // //   console.log("scrollo", window.scrollY)
// // // // // //   useEffect(() => {
// // // // // //     console.log("scrolly position", window.scrollY)
// // // // // //     const handleScroll = () => {
// // // // // //       if (window.scrollY > 0 && window.scrollY < 100) {
// // // // // //         const scrolled = window.scrollY > 0 && window.scrollY < 1; // Adjust the scroll threshold as needed
// // // // // //         console.log("tr")
// // // // // //      setIsScrolled(true);
// // // // // // //     };
// // // // // //        } 
// // // // // //      else if (window.scrollY >100&& window.scrollY <=300) {
// // // // // //        return  setShowButton(true);
// // // // // //         console.log("scrolly", window.scrollY)
// // // // // //       } 
// // // // // //       else {
// // // // // //         // Hide the button otherwise
// // // // // //         return setShowButton(false);
// // // // // //       }
// // // // // //       // if(window.scrollY > 810) {
// // // // // //       //   console.log("end")
// // // // // //       //   setShowButton(false);
// // // // // //       // }
// // // // // //     };

// // // // // //     window.addEventListener('scroll', handleScroll);

// // // // // //     // Cleanup the event listener when the component is unmounted
// // // // // //     return () => {
// // // // // //       window.removeEventListener('scroll', handleScroll);
// // // // // //     };
// // // // // //   }, [window.scrollY]); 
// // // // // useEffect(() => {
// // // // //   const handleScroll = () => {
// // // // //     const scrollY = window.scrollY;

// // // // //     if (scrollY < -2 || scrollY > 9 ) {
// // // // //       setIsScrolled(true);
// // // // //     } else if (scrollY >=  100 || scrollY < 200) {
// // // // //       setShowButton(true);
// // // // //     } else {
// // // // //       setIsScrolled(false);
// // // // //       setShowButton(false);
// // // // //     }
// // // // //   };

// // // // //   window.addEventListener('scroll', handleScroll);

// // // // //   // Cleanup the event listener when the component is unmounted
// // // // //   return () => {
// // // // //     window.removeEventListener('scroll', handleScroll);
// // // // //   };
// // // // // }, []);

// // // // //   return (
// // // // //     <>
// // // // //       {/* <h1>Find your ESCENCE</h1> */}
// // // // //       {/* {showButton && <h1 className="fading" onClick={() => alert('Button Clicked!')}>Find your ESCENCE</h1>} */}
// // // // //        <h1 className={`${isScrolled ? 'hidden' : ''}`}onClick={() => alert('Button Clicked!')}>Find your ESCENCE</h1>
// // // // //       <div class="wrapper">
// // // // //         {/* <span>Smoke</span>
// // // // //         <h1>sd</h1> */}
// // // // //         {showButton && <h1 className="fading" onClick={() => alert('Button Clicked!')}>Find your ESCENCE</h1>}
      
// // // // //     </div>
// // // // //       <section className="gallery">
// // // // //         {[...Array(imageUrls.length)].map((_, index) => (
// // // // //           <div key={index} className="line"></div>
// // // // //         ))}
// // // // //         <div className='behind'><Home/></div>
// // // // //       </section>

// // // // //       <section className="gallery">
// // // // //         {imageUrls.map((url, index) => (
// // // // //           <div key={index} className="img" style={{ backgroundImage: `url(${url})` }}>
// // // // //             {/* Your image content here */}
// // // // //           </div>
// // // // //         ))}
// // // // //       </section>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default SoSickComponent;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import './test.css'; // You can create a separate CSS file for styles

// // // // // const App = () => {
// // // // //   const [isVisible, setIsVisible] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       // You can adjust the scroll threshold as needed
// // // // //       const scrollThreshold = 100;
// // // // //       const currentScrollPos = window.scrollY;
// // // // // console.log("t",window.scrollY)
// // // // //       // setIsVisible(window.scrollY === 0);
// // // // //       if(window.scrollY > 20 && window.scrollY < 100) {
// // // // //         // setIsVisible(false)
// // // // //         setIsVisible(true);
// // // // //       }
// // // // //       else { 
// // // // //         setIsVisible(false);
// // // // //       }
// // // // //     };

// // // // //     // Add scroll event listener when component mounts
// // // // //     window.addEventListener('scroll', handleScroll);

// // // // //     // Clean up the event listener when component unmounts
// // // // //     return () => {
// // // // //       window.removeEventListener('scroll', handleScroll);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className="App">
// // // // //       <header className={isVisible ? 'visible' : 'hidden'}>
// // // // //         <h1>Scroll to hide text</h1>
// // // // //       </header>
// // // // //       <div className="content">
// // // // //         {/* Your main content goes here */}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
// // // // // import './App.css';

// // // // // const App = () => {
// // // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // // //   useEffect(() => {
// // // // //     console.log(window.scrollY)
// // // // //     const handleScroll = () => {

// // // // //       const scrolled = window.scrollY > 50 && window.scrollY < 100; // Adjust the scroll threshold as needed
// // // // //       setIsScrolled(scrolled);
// // // // //     };

// // // // //     window.addEventListener('scroll', handleScroll);

// // // // //     return () => {
// // // // //       window.removeEventListener('scroll', handleScroll);
// // // // //     };
// // // // //   }, []);

// // // // //   // Set up react-scroll event listener
// // // // //   useEffect(() => {
// // // // //     Events.scrollEvent.register('begin', () => console.log('begin scrolling'));
// // // // //     Events.scrollEvent.register('end', () => console.log('end scrolling'));

// // // // //     return () => {
// // // // //       Events.scrollEvent.remove('begin');
// // // // //       Events.scrollEvent.remove('end');
// // // // //     };
// // // // //   }, [window.scrollY]);

// // // // //   const scrollToTop = () => {
// // // // //     scroll.scrollToTop();
// // // // //   };

// // // // //   return (
// // // // //     <div className={`${isScrolled ? 'hidden' : ''}`}>
// // // // //       <header>
// // // // //         <h1>Scroll to hide text</h1>
// // // // //       </header>
// // // // //       <div className="content">
// // // // //         {/* Your main content goes here */}
// // // // //       </div>
// // // // //       <div className="scroll-to-top" onClick={scrollToTop}>
// // // // //         Scroll to Top
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default App;



// // // // import React, { useEffect, useState } from 'react';
// // // // import gsap from 'gsap';
// // // // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // // // import Lenis from '@studio-freight/lenis';
// // // // import './test.css'; // Make sure to create a corresponding CSS file
// // // // import Home from  './Home';

// // // // const SoSickComponent = () => {
// // // //   const [images, setImages] = useState([]);

// // // //   const [isScrolled, setIsScrolled] = useState(false);

// // // //   useEffect(() => {
// // // //     gsap.registerPlugin(ScrollTrigger);

// // // //     const lenis = new Lenis({
// // // //       duration: 1.2,
// // // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // // //     });

// // // //     function raf(time) {
// // // //       lenis.raf(time);
// // // //       requestAnimationFrame(raf);
// // // //     }

// // // //     requestAnimationFrame(raf);

// // // //     gsap.to('.img', {
// // // //       stagger: 0.2,
// // // //       y: -700,
// // // //       scrollTrigger: {
// // // //         trigger: '.img',
// // // //         scrub: true,
// // // //       },
// // // //     });
// // // //   }, []);

// // // //   const imageUrls = [
// // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img1.jpg',
// // // //     'https://assets.codepen.io/2621168/img2.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     'https://assets.codepen.io/2621168/img3.jpg',
// // // //     // Add more image URLs as needed
// // // //   ];

// // // //   const dynamicStyles = imageUrls.map((url, index) => `
// // // //     &:nth-of-type(${index + 1}) {
// // // //       background-image: url('${url}');
// // // //     }
// // // //   `).join('\n');



// // // //   const [showButton, setShowButton] = useState(false);
// // // //   console.log("scrollo", window.scrollY)
// // // // //   useEffect(() => {
// // // // //     console.log("scrolly position", window.scrollY)
// // // // //     const handleScroll = () => {
// // // // //       if (window.scrollY > 0 && window.scrollY < 100) {
// // // // //         const scrolled = window.scrollY > 0 && window.scrollY < 1; // Adjust the scroll threshold as needed
// // // // //         console.log("tr")
// // // // //      setIsScrolled(true);
// // // // // //     };
// // // // //        } 
// // // // //      else if (window.scrollY >100&& window.scrollY <=300) {
// // // // //        return  setShowButton(true);
// // // // //         console.log("scrolly", window.scrollY)
// // // // //       } 
// // // // //       else {
// // // // //         // Hide the button otherwise
// // // // //         return setShowButton(false);
// // // // //       }
// // // // //       // if(window.scrollY > 810) {
// // // // //       //   console.log("end")
// // // // //       //   setShowButton(false);
// // // // //       // }
// // // // //     };

// // // // //     window.addEventListener('scroll', handleScroll);

// // // // //     // Cleanup the event listener when the component is unmounted
// // // // //     return () => {
// // // // //       window.removeEventListener('scroll', handleScroll);
// // // // //     };
// // // // //   }, [window.scrollY]); 
// // // // useEffect(() => {
// // // //   const handleScroll = () => {
// // // //     console.log("wind", window.scrollY)
// // // //     const scrollY = window.scrollY;

// // // //     if (scrollY > -2 && scrollY < 735 ) {
// // // //       setIsScrolled(true);
// // // //     }
// // // //     // else if (scrollY >=  30 && scrollY < 20) {
// // // //     //   setShowButton(true);
// // // //     // } 
// // // //     else {
// // // //       setIsScrolled(false);
// // // //     //   setShowButton(false);
// // // //     }
// // // //   };

// // // //   window.addEventListener('scroll', handleScroll);

// // // //   // Cleanup the event listener when the component is unmounted
// // // //   return () => {
// // // //     window.removeEventListener('scroll', handleScroll);
// // // //   };
// // // // }, [window.scrollY]);

// // // //   return (
// // // //     <>
// // // //       {/* <h1>Find your ESCENCE</h1> */}
// // // //       {/* {showButton && <h1 className="fading" onClick={() => alert('Button Clicked!')}>Find your ESCENCE</h1>} */}
// // // //        <h1 className={`${isScrolled ? 'play' : 'paused'}`}>Find your ESCENCE</h1>
// // // //       <div class="wrapper">
// // // //         {/* <span>Smoke</span>
// // // //         <h1>sd</h1> */}
// // // //         {/* {showButton && <h1 className="fading" onClick={() => alert('Button Clicked!')}>Find your ESCENCE</h1>} */}
      
// // // //     </div>
// // // //       <section className="gallery">
// // // //         {[...Array(imageUrls.length)].map((_, index) => (
// // // //           <div key={index} className="line"></div>
// // // //         ))}
// // // //         <div className='behind'><Home props= {"word"}/> kj</div>
// // // //       </section>

// // // //       <section className="gallery">
// // // //         {imageUrls.map((url, index) => (
// // // //           <div key={index} className="img" style={{ backgroundImage: `url(${url})` }}>
// // // //             {/* Your image content here */}
// // // //           </div>
// // // //         ))}
// // // //       </section>
// // // //     </>
// // // //   );
// // // // };

// // // // export default SoSickComponent;
// // // // import React from "react";
// // // // import "./animation.css"

// // // // function Test () {
// // // //   return (
// // // //     <>
// // // //     <div class ="box">
// // // //     <span></span>
// // // //     <span></span>
// // // //     <span></span>
// // // //     </div>
// // // //     </>
// // // //   );
// // // // }
// // // // export default Test;



// // import React, { useEffect, useState, useRef } from 'react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Lenis from '@studio-freight/lenis';

// // import './test.css'; // Make sure to create a corresponding CSS file

// // const SoSickComponent = () => {
// //   const [images, setImages] = useState([]);
// //   const dynamicImagesRef = useRef([]);

// //   useEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);

// //     const lenis = new Lenis({
// //       duration: 1.2,
// //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //     });

// //     function raf(time) {
// //       lenis.raf(time);
// //       requestAnimationFrame(raf);
// //     }

// //     requestAnimationFrame(raf);

// //     // Apply scroll trigger to dynamic images
// //     dynamicImagesRef.current.forEach((img) => {
// //       gsap.to(img, {
// //         y: -700,
// //         scrollTrigger: {
// //           trigger: img,
// //           scrub: true,
// //         },
// //       });
// //     });
// //   }, [images]); // Trigger the effect when images change

// //   const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// //   const perPage = 25;

// //   let query = "anime";
// //   const loadImages = (page = 1) => {
// //     let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

// //     fetch(url)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const imageUrls = data.results.map((result) => result.urls.regular);
// //         setImages(imageUrls);
// //       })
// //       .catch((error) => console.error(error));
// //   };

// //   useEffect(() => {
// //     loadImages();
// //   }, []); // Trigger the effect only on initial render

// //   return (
// //     <>
// //       <h1>embrace beautiful</h1>

// //       <section className="gallery">
// //         {[...Array(images.length)].map((_, index) => (
// //           <div key={index} className="line"></div>
// //         ))}
// //       </section>

// //       <section className="gallery">
// //         {images.map((url, index) => (
// //           <div
// //             key={index}
// //             className="img"
// //             ref={(el) => (dynamicImagesRef.current[index] = el)}
// //             style={{ backgroundImage: `url(${url})` }}
// //           >
// //             {/* Your image content here */}
// //           </div>
// //         ))}
// //       </section>
// //     </>
// //   );
// // };

// // export default SoSickComponent;







// // import React, { useEffect, useState, useRef } from 'react';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Lenis from '@studio-freight/lenis';

// // import './animation.css'; 

// // const SoSickComponent = () => {
// //   const [images, setImages] = useState([]);
// //   const dynamicImagesRef = useRef([]);


// // const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// // const perPage = 10;
// //   const loadImages = (query, page = 1) => {
// //     let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

// //     fetch(url)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         const imageUrls = data.results.map((result) => result.urls.regular);
// //         setImages(imageUrls);
// //       })
// //       .catch((error) => console.error(error));
// //   };

// //   useEffect(() => {
// //     loadImages();
// //     return () => {};
// //   }, []);

// // console.log("test",images)

// //   useEffect(() => {
// //     // Register ScrollTrigger plugin
// //     gsap.registerPlugin(ScrollTrigger);

// //     // Initialize Lenis animation
// //     const lenis = new Lenis({
// //       duration: 1.2,
// //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //     });

// //     // Define RAF function
// //     function raf(time) {
// //       lenis.raf(time);
// //       requestAnimationFrame(raf);
// //     }

// //     // Start RAF loop
// //     requestAnimationFrame(raf);

// //     // Create GSAP timeline
// //     const tl = gsap.timeline({
// //       scrollTrigger: {
// //         trigger: '.img',
// //         scrub: true,
// //       },
// //     })
// //     .to('.img', {
// //       stagger: 0.2,
// //       y: -700,
// //       scrub: true,
// //     });

// //     // Cleanup on unmount
// //     return () => {
// //       tl.kill(); // Kill the timeline to avoid memory leaks
// //     };
// //   }, []); 
// // //   useEffect(() => {
// // //     gsap.registerPlugin(ScrollTrigger);

// // //     const lenis = new Lenis({
// // //       duration: 1.2,
// // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // //     });

// // //     function raf(time) {
// // //       lenis.raf(time);
// // //       requestAnimationFrame(raf);
// // //     }

// // //     requestAnimationFrame(raf);

// // //     // Apply scroll trigger to dynamic images
// // //     dynamicImagesRef.current.forEach((img) => {
// // //       gsap.to(img, {
// // //         y: -700,
// // //         scrollTrigger: {
// // //           trigger: img.parentElement, // 
// // //           scrub: true,
// // //         },
// // //       });
// // //     });


// // //     const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// // //     const perPage = 10;
  
// // //     let query = "anime";
// // //     const loadImages = (page = 1) => {
// // //       let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;
  
// // //       fetch(url)
// // //         .then((response) => response.json())
// // //         .then((data) => {
// // //           const imageUrls = data.results.map((result) => result.urls.regular);
// // //           setImages(imageUrls);
// // //         })
// // //         .catch((error) => console.error(error));
// // //     };
   
// // //     // useEffect(() => {
// // //     //   loadImages();
// // //     // }, []); 



// // //   }, [images]); // Trigger the effect when images change

// // // // Trigger the effect only on initial render
// // // loadImages();
// //   return (
// //     <>
// //       <h1>embrace beautiful</h1>
// // {/* 
// //       <h1>so sick</h1> */}

// // <section>
// //   <div class="line"></div>
// //   <div class="line"></div>
// //   <div class="line"></div>
// // </section>

// // <section>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   <div class="img"></div>
// //   {/* {images.map((image, index) => {
// //         console.log("img", image);
// //         return <img className = "img"key={index} src={image} alt={`Image ${index}`} />;
// //       })} */}
// // </section>

// // <section></section>
// //     </>
// //   );
// // };

// // export default SoSickComponent;






// // import React, { useEffect } from 'react';
// // import { gsap } from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import './test.css';

// // const ZoomEffect = () => {
// //   const { innerHeight } = window;

// //   useEffect(() => {
// //     // zoom-out
// //     gsap.from("#zoom-out h2", {
// //       scale: 50, stagger: 0.25, duration: 3,
// //       scrollTrigger: {
// //           trigger: "#zoom-out",
// //           pin: true,
// //           end: `+=${innerHeight * 1.3}`,
// //           scrub: 3
// //       }
// //     });

// //     // zoom-in
// //     gsap.to("#zoom-in h2", {
// //       scale: 100, stagger: 0.25, duration: 3,
// //       scrollTrigger: {
// //           trigger: "#zoom-in",
// //           pin: true,
// //           end: `+=${innerHeight * 1.3}`,
// //           scrub: 3
// //       }
// //     });
// //   }, [innerHeight]);

// //   return (
// //     <div>
// //       {/* Section 1 */}
// //       <div id="zoom-out" className="section">
// //         <h2>Zoom Out Text</h2>
// //       </div>
      
// //       {/* Section 2 */}
// //       <div id="zoom-in" className="section">
// //         <h2>Zoom In Text</h2>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ZoomEffect;


import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ZoomAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const { innerHeight } = window;
    const startScrollPosition = 200; //

    gsap.to('#zoom-in .zoom', {
      scale: 700,
      stagger: 0.25,
      duration: 3,
      opacity: 1,
      scrollTrigger: {
        trigger: '#zoom-in',
        pin: true,
        start: `top+=${startScrollPosition}`,
        end: `+=${innerHeight * 1.3}`,
        scrub: 1,
        onUpdate: (animation) => {
       
          if (animation.progress > 0) {
            gsap.to('.extraBox', {
              scaleX: 1,
              ease: 'none',
            });
          } else {
            gsap.to('.extraBox', {
              scaleX: 0,
              ease: 'none',
            });
          }
        },
      },
    });
  }, []);

  return (
    <div id="zoom-in">
      <h1 className="zoom">Your Text</h1>
      <div className="extraBox"></div>
    </div>
  );
};

export default ZoomAnimation;
