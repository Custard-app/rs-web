'use client';

import React, { useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

export default function FinanceTetrisSection() {
  const sceneRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const labels = [
    'Asset Allocation',
    'Annuity',
    'GDP',
    'IRR',
    'ROI',
    'EPS',
    'Sinking Day Fund',
    'IPO',
    'CABR',
    'Rainy Day Fund',
    'EMI',
    'Corpus',
    'Premium',
    'Deductible',
    'Leverage',
    'FIRE',
    'ELSS',
    'Term Insurance',
    'Capital Gains',
    'Principal',
    'Interest Rates',
    'NPS',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }, 
    );

    if (sceneRef.current) {
      observer.observe(sceneRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Module aliases
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    // Create engine
    const engine = Engine.create();

    // Get container dimensions for responsiveness
    const container = sceneRef.current;
    const width = container.offsetWidth;
    const height = container.offsetHeight;

    // Adjust canvas resolution for better clarity (fix blurriness)
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const scale = window.devicePixelRatio || 1;

    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.scale(scale, scale); // Scale the context

    // Create renderer
    const render = Render.create({
      element: container,
      engine: engine,
      options: {
        width: width,
        height: height,
        background: '#EBE8D8',
        wireframes: false, // Use solid shapes for better visuals
        canvas: canvas, // Set the scaled canvas
      },
    });

    // Generate random colors for the boxes
    const randomColors = Array.from(
      { length: labels.length },
      () => `hsl(${Math.random() * 360}, 90%, 50%)`,
    );

    // Function to create pill-shaped boxes with text
    const createPillBox = (x, y, label, color) => {
      const fontSize = 16;
      const textWidth = fontSize * label.length; // Estimate text width
      const boxWidth = textWidth + 20; // Box width based on text width, with padding
      const boxHeight = 46;
      const pill = Bodies.rectangle(x, y, boxWidth, boxHeight, {
        chamfer: { radius: 22 },
        render: {
          fillStyle: color,
          strokeStyle: '#2c3e50', // Border color
        },
        label: label,
      });
      return pill;
    };

    // Generate boxes with random positions and labels
    const boxes = labels.map((label, index) =>
      createPillBox(
        Math.random() * (width - 100) + 50, // Random x within bounds
        Math.random() * 50, // Random y at the top
        label,
        randomColors[index],
      ),
    );

    // Create static boundaries (ground and walls)
    const ground = Bodies.rectangle(width / 2, height + 10, width, 20, {
      isStatic: true,
    });
    const leftWall = Bodies.rectangle(-10, height / 2, 20, height, {
      isStatic: true,
    });
    const rightWall = Bodies.rectangle(width + 10, height / 2, 20, height, {
      isStatic: true,
    });

    // Add all bodies to the world
    Composite.add(engine.world, [...boxes, ground, leftWall, rightWall]);

    // Add mouse control for dragging
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });
    Composite.add(engine.world, mouseConstraint);

    // Function to check and reset boxes when they go off-screen
    const resetBoxPosition = (box) => {
      const x = Math.random() * (width - 100) + 50;
      const y = Math.random() * 50;
      Matter.Body.setPosition(box, { x, y });
    };

    // Update function to reset boxes when they go out of bounds
    Matter.Events.on(engine, 'afterUpdate', () => {
      boxes.forEach((box) => {
        // Check if box goes out of bounds (off-screen)
        if (box.position.y > height + 50) {
          // Box has fallen below the screen
          resetBoxPosition(box);
        }
      });
    });

    // Render text using Matter.js Events
    Matter.Events.on(render, 'afterRender', () => {
      const context = render.context;
      context.font = 'bold 16px lato';
      context.textAlign = 'center';
      context.fillStyle = '#FFFFFF';

      boxes.forEach((box) => {
        const { position, angle, label } = box;
        context.save(); // Save the current context state
        context.translate(position.x, position.y); // Move to box position
        context.rotate(angle); // Rotate according to box angle
        context.fillText(label, 0, 5); // Draw text centered in box
        context.restore(); // Restore context to avoid affecting other objects
      });
    });

    // Run the renderer and engine
    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

  
    return () => {
      Render.stop(render);
      Composite.clear(engine.world);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [isInView]); 
  return (
    <div className="bg-white px-5 sm:px-0 py-24">
      <div
        className="max-w-[1360px] h-[600px] mx-auto bg-[#EBE8D8] rounded-[34px] relative overflow-hidden"
        ref={sceneRef}
      >
        <h1 className="uppercase select-none absolute top-1/2 transform -translate-y-1/2 w-full text-center font-poppins font-bold text-[50px] sm:text-[150px] text-[#E0DBC5]">
          FINANCE TETRIS
        </h1>
      </div>
    </div>
  );
}
