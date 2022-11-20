import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/oculus.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.03}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            scale={10}
            position={[0, 0.3, -1.41]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.Quest_Front}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.Quest_Stoff}
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.Quest_Stecker}
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials.Quest_Samt}
            />
            <mesh
              geometry={nodes.Object_8.geometry}
              material={materials.Quest_Foam}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.Quest_Headstrap}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials.Quest_Plastik}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.Quest_Kamera_Linsen}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials.Quest_Kamera}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials.Quest_Samt_2}
            />
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials.Quest_Screen}
            />
            <mesh
              geometry={nodes.Object_15.geometry}
              material={materials.Quest_Gummi_Linse}
            />
            <mesh
              geometry={nodes.Object_16.geometry}
              material={materials.Quest_Lautstrketaste}
            />
            <mesh
              geometry={nodes.Object_17.geometry}
              material={materials.Quest_Linsen}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/oculus.gltf");
