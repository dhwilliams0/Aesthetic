//Suspense is imported from react to help with the conent loading
import React, { Suspense } from 'react';

// Canvas helps with rendering the 3D object and useloaders help with the additional assets like texture 
import { Canvas, useLoader } from '@react-three/fiber';

// GLTF OR (Graphics Language Transmission Format) is a special formal that helps read and understand 3D models to be used in my scene
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

// Importing orbital controls allow users to be interactive with the 3D model, from zooming,panning and rotating
//Perspective camera is there for the default scenen
import { OrbitControls,PerspectiveCamera } from '@react-three/drei';

function Model({ url }) {
  //the glftloader is used to load the model and the result is then stord in the variable 
  const gltf = useLoader(GLTFLoader, url); 

  //the primitive element is used to render the 3D scene
  return <primitive object={gltf.scene} />;
}
function App() {
  return (
    <Canvas style={{ width: '500px', height: '500px'}}>
      <ambientLight intensity={0.5}/>
      <directionalLight intensity={1} position={[3, 2, 1]} />
      <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} zoom={1} /> 
      <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} dampingFactor={0.1} />
      <Suspense fallback={null}>
        <Model url="/camera.glb"/>
      </Suspense>
    </Canvas>
  );
}

export default App;

