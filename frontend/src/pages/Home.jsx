import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import { PerspectiveCamera } from '@react-three/drei';
import { Mesh } from 'three'
import './Home.css'

export function DeskSetup(props) {
  const { nodes, materials } = useGLTF("/desk_w_lamp_laptop.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0.09, 0.817, -0.078]} rotation={[0, -0.37, 0]}>
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
      <group position={[0, 0.78, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.desk_leg}
        />
      </group>
      <group
        position={[-0.544, 1.278, 0.008]}
        rotation={[0, -0.36, -Math.PI / 6]}
        scale={1.272}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube125.geometry}
          material={materials["Lamp Metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube125_1.geometry}
          material={materials["Lamp body"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube125_2.geometry}
          material={materials["Lamp Light"]}
        />
      </group>
      <pointLight
        intensity={1.5}
        decay={2}
        color="#ffd073"
        position={[-0.441, 1.177, 0.039]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/desk_w_lamp_laptop.glb");

export const Home = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="home-container" >
        <div className="intro-text inter-400">
            <p> Hi, I'm John Salinas</p>
        </div>
        <Canvas>
          <PerspectiveCamera makeDefault fov={75} position={[0,0.5,2]} rotation={[0,0,0]}/>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <DeskSetup position={[0, -0.5, 0]} rotation={[0.25,0,0]}/>
        </Canvas>
        
      </div>
    </CSSTransition>
  )
}
