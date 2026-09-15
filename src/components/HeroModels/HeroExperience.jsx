import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1279px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1280px)" });

  const cameraZ = isMobile ? 11 : isTablet ? 12.5 : 11;
  const modelScale = isMobile ? 0.85 : isTablet ? 0.9 : 1;
  const modelY = isMobile ? -2.5 : -3.15;

  return (
    <Canvas
      camera={{ position: [0, 0, cameraZ], fov: 45 }}
      dpr={isMobile ? 1 : [1, 1.5]}
      gl={{
        antialias: !isMobile,
        powerPreference: "high-performance",
      }}
      style={{
        touchAction: isMobile ? "none" : "pan-y",
        width: "100%",
        height: "100%",
      }}
    >
      <OrbitControls
        makeDefault
        enablePan={false}
        enableRotate
        enableZoom={isDesktop}
        maxDistance={18}
        minDistance={isMobile ? 8 : 9}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 1.9}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
        rotateSpeed={isMobile ? 0.65 : 1}
      />

      <HeroLights reduced={isMobile} />
      {isDesktop && <Particles count={80} />}

      <group
        scale={modelScale}
        position={[0, modelY, 0]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default HeroExperience;
