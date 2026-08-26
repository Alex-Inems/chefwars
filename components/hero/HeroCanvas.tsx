"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "./Scene";

export function HeroCanvas() {
  return (
    <div className="hero-canvas" aria-hidden>
      <Canvas
        shadows
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.9, 4.2], fov: 42, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMappingExposure: 1.55,
          preserveDrawingBuffer: true,
        }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
