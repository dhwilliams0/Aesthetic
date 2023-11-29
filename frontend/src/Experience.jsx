// import { OrbitControls } from "drei"
// import { MeshNormalMaterial } from "three"
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
// import { CurveModifier } from 'three/addons/modifiers/CurveModifier.js';
// import { EdgeSplitModifier } from 'three/addons/modifiers/EdgeSplitModifier.js';


// export const Experience  = () => {
//     return (
//         <mesh><OrbitControls/>
//             <boxGeometry/>
//                 <MeshNormalMaterial/>
//         </mesh>
//     )
// }

// FadeTransition.jsx
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useHistory, useLocation } from 'react-router-dom';

const FadeTransition = ({ children }) => {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const handleFade = async () => {
      // Fade out animation
      await gsap.to('#zoom-in h2', { opacity: 0, duration: 0.5, ease: 'power3.inOut' });

      // Navigate to the new page
      history.push(location.pathname);

      // Fade in animation on the new page
      gsap.to('#zoom-in h2', { opacity: 1, duration: 0.5, ease: 'power3.inOut' });
    };

    handleFade();
  }, [history, location.pathname]);

  return <>{children}</>;
};

export default FadeTransition;
