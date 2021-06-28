import './App.css';
import {Section} from './Components/Section';
import { Canvas } from "react-three-fiber";
import {RotatingDodecahedron, RotatingSphere, RotatingTetrahedron} from "./Components/Shapes"
import { OrthographicCamera, OrbitControls, Html} from "@react-three/drei"


const testShapes = ()=>{
  const randomSpeed = (Math.random() * (0.01 - 0.005) + 0.005);

  <Canvas colorManagement camera={{position: [0,0,120], fov: 70}}>
    <OrbitControls />
      <ambientLight intensity={.3}/>
      <directionalLight 
        position={[0, -10, 0]}
        intensity={.8}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        />
      <pointLight position={[-10, 0 , -20]} intensity={0.5}/>
      <pointLight position={[0, -10, 0]} intensity={1.5}/>
      <RotatingSphere speed={randomSpeed} position={[4,0,-5]} color="grey"/>
      <RotatingTetrahedron speed={randomSpeed} position={[0,0,0]} color="red"/>
      <RotatingDodecahedron speed={randomSpeed} position={[-4,0,-5]} color="blue"/> 
   </Canvas>
   
}

const HTMLContent = () =>{

  return(
    <Section factor={1.5} offset={1}>
      <group position={[0, 200, 0]}>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">Hello There</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
}


function App() {
  
  
  return (
    
   <>
    <Canvas id="test" colorManagement camera={{position: [0,100,0], fov: 90}}>
      <HTMLContent />
    </Canvas>
   </>
  );
}

export default App;


