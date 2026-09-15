import { Float, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIcons = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name !== "Three.js") return;

    scene.scene.traverse((child) => {
      if (child.isMesh && child.name === "Object_5") {
        child.material = new THREE.MeshStandardMaterial({ color: "white" });
      }
    });
  }, [scene, model.name]);

  return (
    <Canvas
      dpr={[1, 1.25]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      style={{ touchAction: "pan-y" }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={1}>
        <group
          scale={model.scale}
          rotation={model.rotation}
          position={model.position || [0, 0, 0]}
        >
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcons;
