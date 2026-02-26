"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/solar-house.glb");
  return <primitive object={scene} scale={1.5} />;
}

export default function SolarModel() {
  return (
    <Canvas camera={{ position: [0, 2, 7], fov: 80 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}