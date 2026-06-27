'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type ShapeType = 'ai' | 'web' | 'saas' | 'mobile' | 'cloud' | 'automation';

const SHAPE_CONFIG: Record<ShapeType, { color: number; color2: number }> = {
  ai:         { color: 0x7c3aed, color2: 0xa855f7 },
  web:        { color: 0x06b6d4, color2: 0x22d3ee },
  saas:       { color: 0x10b981, color2: 0x34d399 },
  mobile:     { color: 0xf59e0b, color2: 0xfbbf24 },
  cloud:      { color: 0x3b82f6, color2: 0x60a5fa },
  automation: { color: 0xef4444, color2: 0xf87171 },
};

export default function ServiceIcon({ shape }: { shape: ShapeType }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 100);
    camera.position.z = 3.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const cfg = SHAPE_CONFIG[shape];

    // Wireframe geometry per shape type
    let geo: THREE.BufferGeometry;
    switch (shape) {
      case 'ai':         geo = new THREE.IcosahedronGeometry(1, 1); break;
      case 'web':        geo = new THREE.BoxGeometry(1.4, 1.4, 1.4); break;
      case 'saas':       geo = new THREE.OctahedronGeometry(1.1); break;
      case 'mobile':     geo = new THREE.CylinderGeometry(0.6, 0.6, 1.8, 8); break;
      case 'cloud':      geo = new THREE.TorusGeometry(0.8, 0.3, 8, 20); break;
      case 'automation': geo = new THREE.TorusKnotGeometry(0.7, 0.25, 60, 8); break;
      default:           geo = new THREE.SphereGeometry(1, 8, 8);
    }

    // Solid glowing mesh
    const mat = new THREE.MeshBasicMaterial({ color: cfg.color, transparent: true, opacity: 0.15 });
    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Wireframe on top
    const wireMat = new THREE.MeshBasicMaterial({ color: cfg.color2, wireframe: true, transparent: true, opacity: 0.7 });
    const wire = new THREE.Mesh(geo, wireMat);
    scene.add(wire);

    // Ambient glow particles around the shape
    const pCount = 80;
    const pPos = new Float32Array(pCount * 3);
    for (let i = 0; i < pCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      const r     = 1.3 + Math.random() * 0.4;
      pPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({ color: cfg.color2, size: 0.06, transparent: true, opacity: 0.6 });
    const pCloud = new THREE.Points(pGeo, pMat);
    scene.add(pCloud);

    // Hover
    let targetX = 0, targetY = 0;
    const onMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width  - 0.5) * 1.5;
      targetY = ((e.clientY - rect.top)  / rect.height - 0.5) * -1.5;
    };
    mount.addEventListener('mousemove', onMouseMove);

    let animId: number;
    let t = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.01;

      mesh.rotation.y  += 0.008;
      mesh.rotation.x  += 0.004;
      wire.rotation.y   = mesh.rotation.y;
      wire.rotation.x   = mesh.rotation.x;
      pCloud.rotation.y += 0.005;

      // Bob up and down
      mesh.position.y  = Math.sin(t) * 0.08;
      wire.position.y  = mesh.position.y;

      // Hover tilt
      mesh.rotation.y += (targetX - mesh.rotation.y) * 0.05;
      mesh.rotation.x += (targetY - mesh.rotation.x) * 0.05;
      wire.rotation.y  = mesh.rotation.y;
      wire.rotation.x  = mesh.rotation.x;

      // Pulse opacity
      (mat as THREE.MeshBasicMaterial).opacity = 0.1 + Math.sin(t * 2) * 0.05;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      mount.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [shape]);

  return <div ref={mountRef} style={{ width: '100%', height: '80px' }} />;
}
