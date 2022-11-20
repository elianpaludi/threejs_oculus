import React, { Suspense } from "react";
import "./styles.css";
import styled from "styled-components";

import Background from "./components/Background";
import TextSection from "./components/TextSection";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Iphone from "./components/Iphone.js";
import Oculus from "./components/Oculus.js";
import Personaje from "./components/Personaje.js";
// import {Canvas} from "@react-three/fiber"

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />

      <Canvas className="canvas">
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Oculus />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;

  .canvas {
    height: 100px;
  }
`;
