"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

type Item = {
  pos: [number, number, number];
  rot: [number, number, number];
  color: string;
  kind: "herb" | "pepper" | "citrus" | "seed";
  scale: number;
  speed: number;
};

function IngredientMesh({ item }: { item: Item }) {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.elapsedTime * item.speed * 0.4;
    mesh.current.rotation.z = clock.elapsedTime * item.speed * 0.25;
  });

  if (item.kind === "citrus") {
    return (
      <mesh ref={mesh} castShadow scale={item.scale}>
        <sphereGeometry args={[0.14, 24, 24]} />
        <meshStandardMaterial
          color={item.color}
          roughness={0.35}
          metalness={0.05}
          emissive={item.color}
          emissiveIntensity={0.08}
        />
      </mesh>
    );
  }

  if (item.kind === "pepper") {
    return (
      <mesh ref={mesh} castShadow scale={item.scale} rotation={item.rot}>
        <capsuleGeometry args={[0.05, 0.22, 6, 12]} />
        <meshStandardMaterial color={item.color} roughness={0.5} />
      </mesh>
    );
  }

  if (item.kind === "seed") {
    return (
      <mesh ref={mesh} castShadow scale={item.scale}>
        <icosahedronGeometry args={[0.07, 0]} />
        <meshStandardMaterial color={item.color} roughness={0.4} metalness={0.1} />
      </mesh>
    );
  }

  return (
    <mesh ref={mesh} castShadow scale={item.scale} rotation={item.rot}>
      <torusGeometry args={[0.1, 0.035, 8, 24]} />
      <meshStandardMaterial color={item.color} roughness={0.55} side={THREE.DoubleSide} />
    </mesh>
  );
}

export function FloatingIngredients() {
  const items = useMemo<Item[]>(
    () => [
      {
        pos: [-2.1, 1.1, -0.4],
        rot: [0.4, 0.2, 0.5],
        color: "#3f9a55",
        kind: "herb",
        scale: 1.1,
        speed: 1.1,
      },
      {
        pos: [-1.6, 0.2, 0.8],
        rot: [0.2, 1.1, 0.3],
        color: "#e23d2a",
        kind: "pepper",
        scale: 1,
        speed: 0.9,
      },
      {
        pos: [2.0, 1.35, -0.6],
        rot: [0.1, 0.4, 0.2],
        color: "#ffe056",
        kind: "citrus",
        scale: 1.15,
        speed: 0.75,
      },
      {
        pos: [1.7, 0.15, 0.9],
        rot: [0.5, 0.1, 0.8],
        color: "#fff4d8",
        kind: "seed",
        scale: 0.9,
        speed: 1.3,
      },
      {
        pos: [-0.9, 1.55, -1.1],
        rot: [0.3, 0.7, 0.1],
        color: "#2f7d4b",
        kind: "herb",
        scale: 0.85,
        speed: 1.05,
      },
      {
        pos: [0.9, 1.7, 0.3],
        rot: [0.6, 0.2, 0.4],
        color: "#ffd24a",
        kind: "seed",
        scale: 0.75,
        speed: 1.4,
      },
      {
        pos: [-2.3, -0.3, -0.2],
        rot: [0.1, 0.5, 0.9],
        color: "#ff8a3d",
        kind: "citrus",
        scale: 0.7,
        speed: 0.85,
      },
      {
        pos: [2.35, 0.7, 0.2],
        rot: [0.4, 0.8, 0.2],
        color: "#ff5a3c",
        kind: "pepper",
        scale: 0.95,
        speed: 1.15,
      },
    ],
    [],
  );

  return (
    <group>
      {items.map((item, i) => (
        <Float
          key={i}
          speed={1.2 + (i % 3) * 0.3}
          rotationIntensity={0.55}
          floatIntensity={0.9}
          position={item.pos}
        >
          <IngredientMesh item={item} />
        </Float>
      ))}
    </group>
  );
}
