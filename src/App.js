import "./App.css";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Section } from "./Components/Section";
import { Canvas } from "react-three-fiber";
import {
  RotatingDodecahedron,
  RotatingSphere,
  RotatingTetrahedron,
} from "./Components/Shapes";
import { OrbitControls, Html } from "@react-three/drei";
import state from "./Components/state";

const TestShapes = () => {
  const randomSpeed = Math.random() * (0.01 - 0.005) + 0.005;

  return (
    <>
      <RotatingSphere speed={randomSpeed} position={[4, 0, -5]} color="grey" />
      <RotatingTetrahedron
        speed={randomSpeed}
        position={[0, 0, 0]}
        color="red"
      />
      <RotatingDodecahedron
        speed={randomSpeed}
        position={[-4, 0, -5]}
        color="blue"
      />
    </>
  );
};

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      {/* <pointLight position={[0, -10, 0]} intensity={1.5} /> */}
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <directionalLight
        position={[10, 10, 0]}
        intensity={0.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
};
const HTMLContent = ({ children, positionY }) => {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, positionY, 0]}>
        <>{children}</>
      </group>
    </Section>
  );
};

function App() {
  const [events, setEvents] = useState();
  const ref = useRef();
  const domContent = useRef();
  const scrollArea = useRef();
  const randomSpeed = Math.random() * (0.01 - 0.005) + 0.005;

  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Suspense fallback={null}>
        <Canvas
          id="test"
          colorManagement
          camera={{ position: [0, 0, 150], fov: 60 }}
        >
          <Lights />
          {/* <OrbitControls /> */}
          <HTMLContent domContent={domContent} positionY={200}>
            <mesh position={[0, 0, 0]}>
              <RotatingDodecahedron
                speed={randomSpeed}
                position={[-9, 60, 135]}
                color="blue"
              />
            </mesh>
            <Html fullscreen>
              <div className="container">
                <h1 className="title">Edwin Deronvil</h1>
                <h3 className="title">Web Developer</h3>
              </div>
            </Html>
          </HTMLContent>
          <HTMLContent domContent={domContent} positionY={0}>
            <mesh>
              <RotatingTetrahedron
                speed={randomSpeed}
                position={[-6, 60, 135]}
                color="red"
              />
            </mesh>
            <Html fullscreen>
              <div className="container">
                <h1 className="title">I Like to Make cool Stuff</h1>
              </div>
            </Html>
          </HTMLContent>
        </Canvas>
        <div
          className="scrollArea"
          ref={scrollArea}
          onScroll={onScroll}
          {...events}
        >
          <div style={{ position: "sticky", top: 0 }} ref={domContent} />
          <div style={{ height: `${state.pages * 100}vh` }} />
        </div>
      </Suspense>
    </>
  );
}

export default App;
