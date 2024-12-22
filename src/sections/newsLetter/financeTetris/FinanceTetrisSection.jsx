'use client';

import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, useBox, usePlane } from "@react-three/cannon";
import { useDrag } from "react-use-gesture";
import { Text } from "@react-three/drei";

// Single Card Component
function Card({ position, color, text }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position,
    args: [2, 1, 0.2], // Dimensions of the card
  }));

  const bind = useDrag(({ offset: [x, y] }) => {
    api.position.set(x, -y, 0);
    api.velocity.set(0, 0, 0); // Stop movement after dragging
  });

  return (
    <mesh ref={ref} {...bind()} castShadow>
      <boxGeometry args={[2, 1, 0.2]} />
      <meshStandardMaterial color={color} />
      <Text
        position={[0, 0, 0.2]} // Slightly above the card
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </mesh>
  );
}

// Bottom Container
function Container() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -3, 0],
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color="#d3d3d3" />
    </mesh>
  );
}

export default function FinanceTetrisSection() {
  const colors = ["#FF5733", "#FFC300", "#3498DB", "#2ECC71", "#E74C3C"];
  const cards = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    position: [Math.random() * 4 - 2, Math.random() * 4 + 4, 0],
    color: colors[i % colors.length],
    text: `Card ${i + 1}`,
  }));

  return (
    <div className="bg-purple-400 px-5 sm:px-0 py-24">
      <div className="max-w-[1360px] h-[600px] mx-auto bg-[#EBE8D8] rounded-[34px] relative overflow-hidden">
        <h1 className="absolute top-5 w-full text-center font-poppins font-bold text-[40px] sm:text-[70px] text-[#ffffff]">
          Finance Playground
        </h1>
        <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} castShadow />
          <Physics>
            {cards.map((card) => (
              <Card key={card.id} position={card.position} color={card.color} text={card.text} />
            ))}
            <Container /> {/* Acts as the floor */}
          </Physics>
        </Canvas>
      </div>
    </div>
  );
}
