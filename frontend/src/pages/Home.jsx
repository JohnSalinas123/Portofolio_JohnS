import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import { PerspectiveCamera } from '@react-three/drei';
import { Mesh } from 'three'
import '../styles/Home.css'

export function LaptopModel(props) {
  const { nodes, materials } = useGLTF("/laptop.glb");
  const meshRef = useRef();

  useFrame(() => {
    if (!meshRef.current) {
      return
    }

    meshRef.current.rotation.y += 0.005;
  })

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <mesh 
        castShadow
        receiveShadow
        geometry={nodes.Cube185.geometry}
        material={materials.laptop_body}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube185_1.geometry}
        material={materials.laptop_keys}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube185_2.geometry}
        material={materials.laptop_screen}
      />
    </group>
  );
}

useGLTF.preload("/laptop.glb");

export const Home = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="home-container" >
        <Canvas>
          <PerspectiveCamera makeDefault fov={75} position={[0,0,0.7]} rotation={[0,0,0]}/>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <LaptopModel position={[0, 0, 0]} rotation={[0.5,0,0]}/>
          
          

          

        </Canvas>
        
      </div>
    </CSSTransition>
  )
}
