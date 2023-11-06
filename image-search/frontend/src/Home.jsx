import "./home.css";
//Suspense is imported from react to help with the conent loading
import React, { Suspense } from "react";

// Canvas helps with rendering the 3D object and useloaders help with the additional assets like texture
import { Canvas, useLoader } from "@react-three/fiber";

// GLTF OR (Graphics Language Transmission Format) is a special formal that helps read and understand 3D models to be used in my scene
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

// Importing orbital controls allow users to be interactive with the 3D model, from zooming,panning and rotating
//Perspective camera is there for the default scenen
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Model({ url }) {
  //the glftloader is used to load the model and the result is then stord in the variable
  const gltf = useLoader(GLTFLoader, url);

  //the primitive element is used to render the 3D scene
  return <primitive object={gltf.scene} />;
}

const Home = () => {
  return (
    <div className="ccon">
      <h1>HOME</h1>

      <section className="hero">
        <h1></h1>
        <img src={"data:image/jpeg;base64,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"} alt="My Image" />
        <div className="cameraContainer">
          <Canvas style={{ width: "800px", height: "800px", marginLeft: "323px", }}>
            <ambientLight intensity={0.5} />
            <directionalLight intensity={1} position={[3, 2, 1]} />
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 10]}
              fov={75}
              zoom={1}
            />
            <OrbitControls
              enableZoom={true}
              enablePan={true}
              enableRotate={true}
              dampingFactor={0.1}
            />
            <Suspense fallback={null}>
              <Model url="/camera.glb" />
            </Suspense>
          </Canvas>
        </div>
        {/* Unleash your creativity with our diverse collection of visual inspiration. From fashion to food, travel to design - find your next inspiration on our platform. Join our community today and start exploring! */}
      </section>

      {/* Section 1 */}
      {/* <section className="section-1">
        <img
          src="https://i7x7p5b7.stackpathcdn.com/codrops/wp-content/uploads/2022/06/MakeWay_feat.jpg"
          alt="Description of the image"
        />
        <h2 style={{ fontFamily: "cursive", fontStyle: "italic" }}>
          See Ya There
        </h2>
      </section> */}
    </div>
  );
};

export default Home;
