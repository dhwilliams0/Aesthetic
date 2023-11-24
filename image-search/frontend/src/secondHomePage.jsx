import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import './test.css';
import Home from  './Home';
import "./animation.css"
import { useNavigate } from 'react-router-dom';

const SecondHomePage = () => {
  // const [images, setImages] = useState([]);

  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.to('.img', {
      stagger: 0.2,
      y: -700,
      scrollTrigger: {
        trigger: '.img',
        scrub: true,
      },
    });
  }, []);

  // const images= [
  //   'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1',
  //   'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1',
  //   'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1',
  //   'https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2019/05/joseph-barrientos-49318-unsplash-e1558728034701.jpg?resize=1500%2C1000&ssl=1', 
  // ];
//   const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// const perPage = 25;

//   let query = "anime"
//   const loadImages = ( page = 1) => {
//     let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

//   fetch(url)
//     .then((response) => response.json())
//      .then((data) => {
//      const imageUrls = data.results.map((result) => result.urls.regular);
// console.log("eye", imageUrls)
//      setImages(imageUrls);
    
//       })
//      .catch((error) => console.error(error));
//     };
//   loadImages()

  // const dynamicStyles = images.map((url, index) => `
  //   &:nth-of-type(${index + 1}) {
  //     background-image: url('${url}');
  //   }
  // `).join('\n'); 

  const [showButton, setShowButton] = useState(false);
  console.log("scrollo", window.scrollY)
//   useEffect(() => {
//     console.log("scrolly position", window.scrollY)
//     const handleScroll = () => {
//       if (window.scrollY > 0 && window.scrollY < 100) {
//         const scrolled = window.scrollY > 0 && window.scrollY < 1; 
//         console.log("test worked")
//      setIsScrolled(true);
// //     };
//        } 
//      else if (window.scrollY >100&& window.scrollY <=300) {
//        return  setShowButton(true);
//         console.log("scrolly", window.scrollY)
//       } 
//       else {
//         // Hide the button otherwise
//         return setShowButton(false);
//       }
//       // if(window.scrollY > 810) {
//       //   console.log("end")
//       //   setShowButton(false);
//       // }
//     };
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [window.scrollY]); 

useEffect(() => {
  const handleScroll = () => {
    console.log("wind", window.scrollY)
    const scrollY = window.scrollY;

    if (scrollY > -2 && scrollY < 735 ) {
      setIsScrolled(true);
    }
    // else if (scrollY >=  30 && scrollY < 20) {
    //   setShowButton(true);
    // } 
    else {
      setIsScrolled(false);
    //   setShowButton(false);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, [window.scrollY]);

///////////////////////////////////
// const accessKey = "i7Jn4SkydZNS5zzkFxSdoi1r7VovkEBA5TuOYj_gN2M";
// const perPage = 25;

//   let query = "anime"
//   const loadImages = ( page = 1) => {
//     let url = `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

//   fetch(url)
//     .then((response) => response.json())
//      .then((data) => {
//      const imageUrls = data.results.map((result) => result.urls.regular);
// console.log("eye", imageUrls)
//      setImages(imageUrls);
    
//       })
//      .catch((error) => console.error(error));
//     };
//   loadImages()
// // // //  ////////////////////////////////// 
// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   const { innerHeight } = window;
//    // zoom-in
//    gsap.to('#zoom-in .zoom', {
//     scale: 700,
//     stagger: 0.25,
//     duration: 3,
//     opacity:"100",
//     scrollTrigger: {
//       trigger: '#zoom-in',
//       pin: true,
//       end: `+=${innerHeight * 1.3}`,
//       scrub: 1,
//       onUpdate: (animation) => {
//         console.log("end",animation)
//         // console.log("end of",animation.start)
//         // navigate('/');
//         // if (animation.end) {
//         // // console.log("end",animation.end)
//         // //   navigate('/');
//         //  }
//         if (animation.progress === 1) {
//           console.log("end")
//           navigate('/');
//         }
//       },
//     },
//   });
// }, [])



// useEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

//   const { innerHeight } = window;
//    // zoom-in
//    gsap.to('#zoom-in .zoom', {
//     scale: 700,
//     stagger: 0.25,
//     duration: 3,
//     opacity:"100",
//     scrollTrigger: {
//       trigger: '#zoom-in',
//       pin: true,
//       end: `+=${innerHeight * 1.3}`,
//       scrub: 1,
//       onUpdate: (animation) => {
//         console.log("progress", animation.progress)
//         if (animation.progress > 0) {
//           gsap.to('.extraBox', {
//             scaleX: 1,
//             ease: 'none',
//           });
//         } else {
//           gsap.to('.extraBox', {
//             scaleX: 0,
//             ease: 'none',
//           });
//         }
//       },
//     },
//   });
// }, [])

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const { innerHeight } = window;

  gsap.to('#zoom-in .zoom', {
    scale: 20,
    stagger: 0.25,
    duration: 0.4,
    opacity: 1,
    scrollTrigger: {
      trigger: '#zoom-in',
      pin: true,
      end: `+=${innerHeight * 1.3}`,
      scrub: 0.5,
      onUpdate: (animation) => {
        if (animation.progress > 0.2) {
          gsap.to('.extraBox', {
            scale: 200,
            ease: 'none',
            pin: true,
            duration: 0.4,
            scrub: 0,
          });
        } else {
          gsap.to('.extraBox', {
            scale: 0,
            ease: 'none',
            pin: true,
            duration: 0.4,
            scrub: 0,
          });
        }
      },
    },
  });
}, []);



  return (
    <>
      {/* <h1>Find your ESCENCE</h1> */}
      {/* {showButton && <h1 className="fading" onClick={() => }>Find your ESCENCE</h1>} */}
       <h1 className={`${isScrolled ? 'play' : 'paused'}`}>embrace beautiful</h1>
      <div class="wrapper">
        {/* <
        <h1>sd</h1> */}
        {/* {showButton && <h1 className="fading" onClick={() => }>Find your ESCENCE</h1>} */}
      
    </div>
    <div className='behind'><Home props= {""}/></div>
      
      {/* <section className="gallery">
        {[...Array(images.length)].map((_, index) => (
          <div key={index} className="line"></div>
        ))}
      </section>

      <section className="gallery">
        {images.map((url, index) => (
          <div key={index} className="img" style={{ backgroundImage: `url(${url})` }}>
          </div>
        ))}
      </section> */}


<section>
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</section>

<section>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  <div class="img"></div>
  {/* {images.map((image, index) => {
        console.log("img", image);
        return <img className = "img"key={index} src={image} alt={`Image ${index}`} />;
      })} */}
</section>







      <div class ="boxContainer">
        <span></span>
        <span></span>
        <span></span>
	    </div>



      <div>
      <div id="zoom-out">
        {/* <h2>Text zoom-out</h2> */}
      </div>

      {/* <div id="zoom-in">
  <h1 className="zoom">Your Text</h1>
  <div class="extraBox"></div>
</div> */}

{/* <div id="zoom-in">
      <h1 className="zoom">See You There</h1>
      <div className="extraBox">U</div>
    </div> */}

<div>
      <div id="zoom-in">
        <h1 className="zoom">See You There</h1>
        <div className="extraBox">U</div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SecondHomePage;
