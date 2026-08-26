"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  Lightformer,
  Sparkles,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  HueSaturation,
} from "@react-three/postprocessing";
import * as THREE from "three";
import { GourmetDish } from "./GourmetDish";
import { FloatingIngredients } from "./FloatingIngredients";

function CameraRig() {
  const target = useRef(new THREE.Vector3());

  useFrame((state) => {
    target.current.set(
      0.2 + state.pointer.x * 0.35,
      1.1 + state.pointer.y * 0.15,
      3.9,
    );
    state.camera.position.lerp(target.current, 0.05);
    state.camera.lookAt(0.65, 0.25, 0);
  });

  return null;
}

function KitchenFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0.5, -1.05, 0]} receiveShadow>
      <circleGeometry args={[5.8, 64]} />
      <meshStandardMaterial color="#eef6f0" roughness={0.92} metalness={0.02} />
    </mesh>
  );
}

export function Scene() {
  return (
    <>
      <color attach="background" args={["#f3f8f4"]} />
      <fog attach="fog" args={["#f3f8f4", 8, 18]} />

      <ambientLight intensity={0.85} color="#ffffff" />
      <hemisphereLight args={["#fff7df", "#cfe8d6", 0.95]} />
      <directionalLight
        castShadow
        position={[4.2, 7.2, 3.2]}
        intensity={3.4}
        color="#fff4d4"
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00015}
      />
      <spotLight
        position={[-2.4, 5, 2.8]}
        angle={0.55}
        penumbra={0.7}
        intensity={2.4}
        color="#b7efc5"
      />
      <pointLight position={[1.6, 1.5, 1.8]} intensity={1.8} color="#ffd666" />
      <pointLight position={[0.4, 1.1, 1.4]} intensity={1.1} color="#ff8f70" />

      <Environment resolution={256}>
        <Lightformer
          intensity={4.5}
          position={[0, 6, -1]}
          scale={[12, 3, 1]}
          color="#ffffff"
        />
        <Lightformer
          intensity={2.2}
          position={[-5, 2, 2]}
          scale={[3, 5, 1]}
          color="#9be7b0"
        />
        <Lightformer
          intensity={2}
          position={[5, 1, 1]}
          scale={[2.5, 4, 1]}
          color="#ffe56a"
        />
      </Environment>

      <GourmetDish />
      <FloatingIngredients />
      <KitchenFloor />

      <ContactShadows
        position={[0.5, -1.04, 0]}
        opacity={0.28}
        scale={11}
        blur={2.8}
        far={4.5}
        color="#4a6354"
      />

      <Sparkles
        count={40}
        scale={[6, 3.2, 3.2]}
        size={2.2}
        speed={0.35}
        opacity={0.35}
        color="#ffe56a"
        position={[0.7, 0.95, 0]}
      />

      <CameraRig />

      <EffectComposer enableNormalPass={false}>
        <Bloom
          intensity={0.35}
          luminanceThreshold={0.88}
          luminanceSmoothing={0.35}
          mipmapBlur
        />
        <HueSaturation saturation={0.12} />
      </EffectComposer>
    </>
  );
}
