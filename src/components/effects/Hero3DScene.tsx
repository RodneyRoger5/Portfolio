import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function FloatingIcon({ position, color, shape }: { position: [number, number, number]; color: string; shape: "box" | "octahedron" | "torus" | "icosahedron" }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
    }
  });

  const geometry = useMemo(() => {
    switch (shape) {
      case "box":
        return new THREE.BoxGeometry(0.5, 0.5, 0.5);
      case "octahedron":
        return new THREE.OctahedronGeometry(0.4);
      case "torus":
        return new THREE.TorusGeometry(0.3, 0.1, 16, 32);
      case "icosahedron":
        return new THREE.IcosahedronGeometry(0.4);
      default:
        return new THREE.BoxGeometry(0.5, 0.5, 0.5);
    }
  }, [shape]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function GridFloor() {
  return (
    <gridHelper
      args={[30, 30, "#39FF14", "#1a1a2e"]}
      position={[0, -3, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#39FF14"
        wireframe
        emissive="#39FF14"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

const Hero3DScene = () => {
  return (
    <div className="absolute inset-0 -z-5">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#39FF14" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          color="#39FF14"
        />

        <AnimatedSphere />
        
        <FloatingIcon position={[-3, 2, -2]} color="#39FF14" shape="box" />
        <FloatingIcon position={[3, 1, -1]} color="#39FF14" shape="octahedron" />
        <FloatingIcon position={[-2, -1.5, 1]} color="#39FF14" shape="torus" />
        <FloatingIcon position={[2.5, -1, 0]} color="#39FF14" shape="icosahedron" />
        <FloatingIcon position={[0, 2.5, -3]} color="#39FF14" shape="box" />
        
        <GridFloor />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
