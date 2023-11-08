import "./home.css";
//Suspense is imported from react to help with the conent loading
import React, { Suspense, useRef } from "react";

// Canvas helps with rendering the 3D object and useloaders help with the additional assets like texture
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

// GLTF OR (Graphics Language Transmission Format) is a special formal that helps read and understand 3D models to be used in my scene
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";

// Importing orbital controls allow users to be interactive with the 3D model, from zooming,panning and rotating
//Perspective camera is there for the default scenen
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function Model({ url }) {
  //the glftloader is used to load the model and the result is then stord in the variable
  const gltf = useLoader(GLTFLoader, url);

  const modelRef = useRef(); //Allows us to keep track of our 3D model

  useFrame(({ clock }) => {
    //Using the useFrame hook allows us to perform action on our 3D model each frame
    // console.log("modelRef", modelRef)

    // Using Math.sin() creates an up and down movement
    const yPosition = Math.sin(clock.elapsedTime) * 0.5; //Keeps track of the total time that the clock has been running. Default is 0
    modelRef.current.position.y = yPosition; //Moves to model up and down base on the yPostion
  });

  //the primitive element is used to render the 3D scene
  return <primitive object={gltf.scene} ref={modelRef} />;
}

const Home = () => {
  return (
    <div className="ccon">
      
      {/* <h1>HOME</h1> */}
{/* 
        <h1 className="wordContainer">
        <h1>Find Your</h1>
        <div class="message">
        <div class="word1">AESTHEIC</div>
        <div class="word2">ESCENCE</div>
            <div class="word3">BEAUTY</div>
          </div>
        </h1> */}
      <section className="hero">
        {/* <h1></h1> */}
        <div className="word">
        <h1 className = "find">Find</h1>
        <h2 className = "your">YOUR</h2>
        </div>

        <h1 className="wordContainer"> 
          {/* <h1 className = "find">Find Your</h1> */}
          <div class="message">
            <div class="word1">AESTHEIC</div>
            <div class="word2">ESCENCE</div>
            <div class="word3">BEAUTY</div>
          </div> 
          <div className="box"></div>
        </h1>


        {/* CAMER CONTAINER */}
        <div className="cameraContainer">
          <Canvas className="cameraSize"
            style={{ width: "800px", height: "800px", marginLeft: "160px" }}
          >
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
