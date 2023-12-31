import "./home.css";
// Suspense is imported from react to help with the conent loading
import React, {Suspense, useRef} from "react";

// Canvas helps with rendering the 3D object and useloaders help with the additional assets like texture
import {Canvas, useFrame, useLoader} from "@react-three/fiber";

// GLTF OR (Graphics Language Transmission Format) is a special formal that helps read and understand 3D models to be used in my scene
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";

// Importing orbital controls allow users to be interactive with the 3D model, from zooming,panning and rotating
// Perspective camera is there for the default scenen
import {OrbitControls, PerspectiveCamera} from "@react-three/drei";

import Statue from "./images/statue.png";

import PolaroidFrame from "./images/PolaroidFrame.png"
function Model({url}) { // the glftloader is used to load the model and the result is then stord in the variable
    const gltf = useLoader(GLTFLoader, url);

    const modelRef = useRef(); // Allows us to keep track of our 3D model

    useFrame(({clock}) => {
        // Using the useFrame hook allows us to perform action on our 3D model each frame
        // console.log("modelRef", modelRef)

        // Using Math.sin() creates an up and down movement
        const yPosition = Math.sin(clock.elapsedTime) * 0.5; // Keeps track of the total time that the clock has been running. Default is 0
        modelRef.current.position.y = yPosition; // Moves to model up and down base on the yPostion
    });

    // the primitive element is used to render the 3D scene
    return <primitive object={
            gltf.scene
        }
        ref={modelRef}/>;
}

const Home = ({props}) => {
    console.log("props",props)
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
                {/* <div className="word">
                    <h1 className="find">Find</h1>
                    <h2 className="your">YOUR</h2>
                </div>

                <div className="wordContainer">
                    {/* <h1 className = "find">Find Your</h1> */}
                    {/* <div class="message">
                        <div class="word1">AESTHEIC</div>
                        <div class="word2">ESCENCE</div>
                        <div class="word3">BEAUTY</div>
                    </div>
                    <div className="box"></div>
                </div> */} 

                {/* CAMER CONTAINER */}
                <div className="cameraContainer">
                    <Canvas className="cameraSize"
                        style={
                            {
                                width: "800px",
                                height: "800px",
                                marginLeft: "160px"
                            }
                    }>
                        <ambientLight intensity={0.5}/>
                        <directionalLight intensity={1}
                            position={
                                [3, 2, 1]
                            }/>
                        <PerspectiveCamera makeDefault
                            position={
                                [0, 5, 6]
                            }
                            fov={75}
                            zoom={1}/>
                        <OrbitControls enableZoom={false}
                            enablePan={true}
                            enableRotate={true}
                            dampingFactor={0.1}/>
                        <Suspense fallback={null}>
                            <Model url="/camera.glb"
                                scale={
                                    [801, 708, 720]

                                    
                                }
                                />
                        </Suspense>
                    </Canvas>
                </div>
                {/* Unleash your creativity with our diverse collection of visual inspiration. From fashion to food, travel to design - find your next inspiration on our platform. Join our community today and start exploring! */} </section>
            <section>
                <div className="imageContainer">
                    <img src={Statue} className="statue"/>
                    {/* <img src={PolaroidFrame} className="frame"/> */}
                    {/* <h1 className="inspirationText">FIND YOUR INSPIRATION</h1> */}
                </div>
                <div className="side">
                    <div className="sideContainer">
                        <h2 className="fuel">Fuel your creativity</h2>
                        <p>The purpose of this site is to search, save, and share images that speak to you. 
                        </p>
                        {/* <h2>well you can</h2>
                        <p>Lorem eispum mimbum lal lalal lee momo you what non qwadesfdfdsf but unless 
                        </p> */}
                    </div>
                </div>
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
      </section> */} </div>
    );
};

export default Home;
