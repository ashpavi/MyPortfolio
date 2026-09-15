import { Canvas } from "@react-three/fiber";
import useInView from "../hooks/useInView";

const defaultGL = {
  antialias: false,
  powerPreference: "high-performance",
  stencil: false,
  depth: true,
  alpha: false,
};

const LazyCanvas = ({
  children,
  className = "h-full w-full",
  rootMargin = "200px",
  frameloop = "always",
  dpr = [1, 1.5],
  eager = false,
  gl,
  onCreated,
  ...props
}) => {
  const { ref, isInView, hasBeenInView } = useInView({ rootMargin, initial: eager });

  return (
    <div ref={ref} className={className} style={{ width: "100%", height: "100%" }}>
      {hasBeenInView && (
        <Canvas
          dpr={dpr}
          frameloop={isInView ? frameloop : "demand"}
          gl={{ ...defaultGL, ...gl }}
          onCreated={(state) => {
            state.invalidate();
            onCreated?.(state);
          }}
          {...props}
        >
          {children}
        </Canvas>
      )}
    </div>
  );
};

export default LazyCanvas;
