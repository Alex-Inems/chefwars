"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import {
  plateFragment,
  plateVertex,
  sauceFragment,
  sauceVertex,
  steamFragment,
  steamVertex,
} from "./shaders";

function Plate() {
  const mat = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (mat.current) mat.current.uniforms.uTime.value = clock.elapsedTime;
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#ffffff") },
      uColorB: { value: new THREE.Color("#f2f7f3") },
      uRim: { value: new THREE.Color("#d7ebe0") },
    }),
    [],
  );

  return (
    <group>
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
        castShadow
      >
        <cylinderGeometry args={[1.55, 1.72, 0.14, 96]} />
        <shaderMaterial
          ref={mat}
          vertexShader={plateVertex}
          fragmentShader={plateFragment}
          uniforms={uniforms}
        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.075, 0]}>
        <ringGeometry args={[1.05, 1.48, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          roughness={0.28}
          metalness={0.08}
        />
      </mesh>
    </group>
  );
}

function SaucePool() {
  const mat = useRef<THREE.ShaderMaterial>(null);

  useFrame(({ clock }) => {
    if (mat.current) mat.current.uniforms.uTime.value = clock.elapsedTime;
  });

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor: { value: new THREE.Color("#e23d2a") },
    }),
    [],
  );

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.09, 0]}>
      <circleGeometry args={[0.98, 64]} />
      <shaderMaterial
        ref={mat}
        transparent
        depthWrite={false}
        vertexShader={sauceVertex}
        fragmentShader={sauceFragment}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function Protein() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.4) * 0.08;
    group.current.position.y = 0.24 + Math.sin(clock.elapsedTime * 0.9) * 0.025;
  });

  return (
    <group ref={group}>
      <mesh castShadow position={[0.05, 0, -0.05]} rotation={[0.15, 0.4, 0.1]}>
        <boxGeometry args={[1.05, 0.26, 0.6]} />
        <meshStandardMaterial
          color="#c45a2e"
          roughness={0.38}
          metalness={0.1}
          envMapIntensity={1.35}
        />
      </mesh>
      <mesh castShadow position={[0.05, 0.14, -0.05]} rotation={[0.15, 0.4, 0.1]}>
        <boxGeometry args={[1.0, 0.06, 0.56]} />
        <meshStandardMaterial
          color="#ff7a45"
          roughness={0.28}
          metalness={0.14}
          emissive="#ff5a2a"
          emissiveIntensity={0.18}
        />
      </mesh>
      {[
        [-0.28, 0.18, 0.06],
        [0.05, 0.18, -0.14],
        [0.3, 0.18, 0.1],
      ].map((p, i) => (
        <mesh
          key={i}
          position={p as [number, number, number]}
          rotation={[0.15, 0.4, 0.1]}
        >
          <boxGeometry args={[0.09, 0.012, 0.45]} />
          <meshStandardMaterial color="#5a2a18" roughness={0.85} />
        </mesh>
      ))}
    </group>
  );
}

function Greens() {
  const items = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => {
        const a = (i / 16) * Math.PI * 2;
        const r = 0.58 + (i % 3) * 0.14;
        return {
          pos: [Math.cos(a) * r, 0.15 + (i % 4) * 0.025, Math.sin(a) * r] as [
            number,
            number,
            number,
          ],
          rot: [0.45 + (i % 5) * 0.1, a, 0.25] as [number, number, number],
          scale: 0.75 + (i % 4) * 0.16,
          color: i % 2 === 0 ? "#3f9a55" : "#2f7d4b",
        };
      }),
    [],
  );

  return (
    <group>
      {items.map((leaf, i) => (
        <mesh
          key={i}
          position={leaf.pos}
          rotation={leaf.rot}
          scale={leaf.scale}
          castShadow
        >
          <sphereGeometry
            args={[0.13, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.55]}
          />
          <meshStandardMaterial
            color={leaf.color}
            roughness={0.48}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function GarnishDots() {
  const dots = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => {
        const a = (i / 22) * Math.PI * 2 + (i % 3) * 0.2;
        const r = 0.28 + (i % 5) * 0.14;
        return {
          pos: [Math.cos(a) * r, 0.13, Math.sin(a) * r] as [
            number,
            number,
            number,
          ],
          s: 0.035 + (i % 4) * 0.01,
          color: i % 3 === 0 ? "#ffe056" : i % 3 === 1 ? "#fff8ef" : "#7ed957",
        };
      }),
    [],
  );

  return (
    <group>
      {dots.map((d, i) => (
        <mesh key={i} position={d.pos} castShadow>
          <sphereGeometry args={[d.s, 16, 16]} />
          <meshStandardMaterial
            color={d.color}
            roughness={0.32}
            metalness={0.06}
            emissive={d.color}
            emissiveIntensity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

function Steam() {
  const mat = useRef<THREE.ShaderMaterial>(null);
  const count = 90;

  const { positions, scales, offsets } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    const offsets = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.95;
      positions[i * 3 + 1] = Math.random() * 0.25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.75;
      scales[i] = 10 + Math.random() * 20;
      offsets[i] = Math.random() * 10;
    }
    return { positions, scales, offsets };
  }, []);

  useFrame(({ clock }) => {
    if (mat.current) mat.current.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points position={[0, 0.4, 0]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={mat}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexShader={steamVertex}
        fragmentShader={steamFragment}
        uniforms={{ uTime: { value: 0 } }}
      />
    </points>
  );
}

export function GourmetDish() {
  const root = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!root.current) return;
    const t = clock.elapsedTime;
    root.current.rotation.y = t * 0.15 + pointer.x * 0.22;
    root.current.rotation.x = 0.22 + pointer.y * 0.07;
    root.current.position.y = Math.sin(t * 0.75) * 0.06;
  });

  return (
    <group ref={root} position={[0.8, -0.02, 0]} scale={1.35}>
      <Plate />
      <SaucePool />
      <Protein />
      <Greens />
      <GarnishDots />
      <Steam />
    </group>
  );
}
