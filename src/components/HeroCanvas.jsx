import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';

function Interactive3DCore() {
  const meshRef = useRef();
  const outerRingRef = useRef();
  const wireframeRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const mouseX = (state.pointer.x * Math.PI) / 6;
    const mouseY = (state.pointer.y * Math.PI) / 6;

    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t / 2) * 0.3 + mouseY;
      meshRef.current.rotation.y = Math.cos(t / 2) * 0.4 + mouseX;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.2;
      outerRingRef.current.rotation.x = t * 0.1;
    }

    if (wireframeRef.current) {
      wireframeRef.current.rotation.y = -t * 0.3;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.5}>
      <group scale={1.15}>
        {/* Central Holographic Torus Knot */}
        <mesh ref={meshRef}>
          <torusKnotGeometry args={[1.2, 0.38, 128, 32]} />
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#1e1b4b"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.85}
            distort={0.25}
            speed={2}
          />
        </mesh>

        {/* Outer Tech Wireframe Sphere */}
        <mesh ref={wireframeRef}>
          <icosahedronGeometry args={[2.2, 2]} />
          <meshBasicMaterial
            color="#818cf8"
            wireframe
            transparent
            opacity={0.18}
          />
        </mesh>

        {/* Orbiting Tech Ring */}
        <mesh ref={outerRingRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.6, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#38bdf8"
            emissiveIntensity={0.8}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

const HeroCanvas = () => {
  return (
    <div className="w-full h-full min-h-[400px] lg:min-h-[550px] relative flex items-center justify-center">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 6.5]} fov={50} />
        
        {/* Lighting setup */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#38bdf8" />
        <pointLight position={[-10, -10, -5]} intensity={1.2} color="#a855f7" />
        <spotLight position={[0, 5, 10]} intensity={1} color="#00f0ff" />

        <Interactive3DCore />
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
