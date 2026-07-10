import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const group = useRef();
  const inner = useRef();

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
    }
    if (inner.current) {
      inner.current.rotation.y -= delta * 0.32;
      inner.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#c9a25d" wireframe transparent opacity={0.85} />
      </mesh>
      <mesh ref={inner}>
        <octahedronGeometry args={[0.85, 0]} />
        <meshBasicMaterial color="#edeae2" wireframe transparent opacity={0.5} />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshBasicMaterial color="#c9a25d" transparent opacity={0.03} />
      </mesh>
    </group>
  );
}

function OrbitRing({ radius, tilt, speed, dashed = true }) {
  const ref = useRef();
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return pts;
  }, [radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return (
    <group rotation={[tilt, 0, 0]}>
      <group ref={ref}>
        <Line points={points} color="#8b93a1" lineWidth={1} dashed={dashed} dashSize={0.08} gapSize={0.08} transparent opacity={0.35} />
      </group>
    </group>
  );
}

function Scene() {
  return (
    <>
      <Core />
      <OrbitRing radius={2.6} tilt={0.5} speed={0.12} />
      <OrbitRing radius={3.2} tilt={-0.35} speed={-0.08} dashed={false} />
      <OrbitRing radius={2.1} tilt={1.1} speed={0.2} />
    </>
  );
}

export default function SchematicCore({ className = "" }) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
