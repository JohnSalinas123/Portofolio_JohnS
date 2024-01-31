import React, { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import './Home.css'

export function Donuts(props) {
  const { nodes, materials } = useGLTF("/donuts_on_plate.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plate.geometry}
        material={materials.Material}
        position={[-0.001, 0.083, -0.001]}
        rotation={[0, -0.12, 0]}
        scale={[1.225, 1, 1.225]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut.geometry}
        material={materials["Material.001"]}
        position={[-0.009, 0.106, 0.069]}
        rotation={[0, 0.002, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing.geometry}
          material={materials["green icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut001.geometry}
        material={materials["Material.001"]}
        position={[0.008, 0.106, -0.072]}
        rotation={[0, -1.429, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing001.geometry}
          material={materials["red icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut002.geometry}
        material={materials["Material.001"]}
        position={[0.007, 0.153, -0.063]}
        rotation={[0, -0.983, 0]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing002.geometry}
          material={materials["green icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut003.geometry}
        material={materials["Material.001"]}
        position={[0.008, 0.196, -0.074]}
        rotation={[Math.PI, -0.178, Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing003.geometry}
          material={materials["chocolate icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut004.geometry}
        material={materials["Material.001"]}
        position={[0.007, 0.241, -0.068]}
        rotation={[2.992, -1.404, 3.011]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing004.geometry}
          material={materials["red icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut005.geometry}
        material={materials["Material.001"]}
        position={[-0.011, 0.149, 0.081]}
        rotation={[-Math.PI, 0.072, -Math.PI]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing005.geometry}
          material={materials["chocolate icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut006.geometry}
        material={materials["Material.001"]}
        position={[-0.009, 0.195, 0.068]}
        rotation={[0.112, -1.13, 0.174]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Icing006.geometry}
          material={materials["red icing"]}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Donut007.geometry}
        material={materials["Material.001"]}
        position={[0.098, 0.14, -0.008]}
        rotation={[0.108, -0.543, -0.802]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus018.geometry}
          material={materials["chocolate icing"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus018_1.geometry}
          material={materials.Sprinkles}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/donuts_on_plate.glb");

export const Home = () => {
  return (
    <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
      <div className="home-container" >
        <Canvas camera={{fov: 35,zoom: 8 ,near: 0.1, far: 1000}}>

          <ambientLight intensity={Math.PI / 2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
          <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
          <Donuts position={[0, -0.15, 0]} rotation={[0.3,-1,0]}/>
          

        </Canvas>
        
      </div>
    </CSSTransition>
  )
}
