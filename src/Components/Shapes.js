import  React, {useRef, useState, Suspense} from "react";
import {Sphere, Tetrahedron, Dodecahedron, Shadow} from "@react-three/drei"
import { useFrame, } from "@react-three/fiber";
import { useNormalTexture } from '@react-three/drei'
import normal from "../Static/textures/normal.jpg"

export const RotatingSphere = (props) =>{
    const [hovered, setHover] = useState(false);
    const mesh = useRef(null);

    const [newNormal] = useNormalTexture(normal)
    useFrame(()=>(
        mesh.current.rotation.z = mesh.current.rotation.x += props.speed
    ))
    return (
        <>
        <Suspense fallback={null}>
            <Sphere 
                ref={mesh} 
                args={[1,60]} 
                position={props.position}  
                onPointerOver={(event) => 
                    setHover(true)}
                onPointerOut={(event) => 
                    setHover(false)}>
                <meshStandardMaterial attach='material'color={hovered? 'hotpink' : props.color} metalness={.7} normalMap={newNormal}/>
            </Sphere>
            <Shadow color={props.color} scale={[4, 4, 1]} opacity={0.4} position={[4,-2,-5]} rotation={[-Math.PI / 2, 0, 0]}  />
            </Suspense>
        </>
    )
}

export const RotatingTetrahedron = (props) =>{

    const mesh = useRef(null);
    
    useFrame(()=>(
        mesh.current.rotation.z = mesh.current.rotation.x += props.speed
    ))
    return (
        <>
            <Tetrahedron ref={mesh} args={[1,0]} position={props.position}>
                <meshStandardMaterial attach='material' color={props.color}/>
            </Tetrahedron>
            <Shadow color="red" scale={[4, 4, 1]} opacity={0.3} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} />
        </>
    )
}

export const RotatingDodecahedron= (props) =>{

    const mesh = useRef(null);

    useFrame(()=>(
        mesh.current.rotation.z = mesh.current.rotation.x += props.speed
    ))
    return (
        <>
            <Dodecahedron ref={mesh} args={[1,0]} position={props.position}>
                <meshStandardMaterial attach='material' color={props.color}/>
            </Dodecahedron>
            <Shadow color={props.color} scale={[4, 4, 1]} opacity={0.3} position={[-4,-2,-5]} rotation={[-Math.PI / 2, 0, 0]} />
        </>
    )
}


