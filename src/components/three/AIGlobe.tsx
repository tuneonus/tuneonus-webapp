'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AIGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 2.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Particle Globe ──────────────────────────────────────────────
    const particleCount = 1800;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Distribute on sphere surface using Fibonacci spiral
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.0;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      // Color gradient: purple → cyan
      const t = i / particleCount;
      colors[i * 3] = 0.4 + t * 0.3;       // R
      colors[i * 3 + 1] = 0.1 + t * 0.6;   // G
      colors[i * 3 + 2] = 0.9;              // B
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.018,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
    });

    const globe = new THREE.Points(geo, mat);
    scene.add(globe);

    // ── AI Network Lines ────────────────────────────────────────────
    // Pick random "node" pairs and connect them with glowing lines
    const nodeIndices: number[] = [];
    for (let i = 0; i < 60; i++) {
      nodeIndices.push(Math.floor(Math.random() * particleCount));
    }

    const lineGeo = new THREE.BufferGeometry();
    const linePositions: number[] = [];

    for (let i = 0; i < nodeIndices.length; i++) {
      const a = nodeIndices[i];
      const b = nodeIndices[(i + 1) % nodeIndices.length];
      // A
      linePositions.push(positions[a * 3], positions[a * 3 + 1], positions[a * 3 + 2]);
      // B
      linePositions.push(positions[b * 3], positions[b * 3 + 1], positions[b * 3 + 2]);
    }

    lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.25,
    });
    const networkLines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(networkLines);

    // ── Glowing Core ────────────────────────────────────────────────
    const coreGeo = new THREE.SphereGeometry(0.08, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x7c3aed });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── Mouse Interactivity ─────────────────────────────────────────
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ── Animation ───────────────────────────────────────────────────
    let animId: number;
    let time = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.005;

      // Slow auto-rotation
      globe.rotation.y += 0.003;
      globe.rotation.x += 0.001;
      networkLines.rotation.y += 0.003;
      networkLines.rotation.x += 0.001;

      // Mouse parallax
      globe.rotation.y += (mouseX * 0.3 - globe.rotation.y) * 0.02;
      globe.rotation.x += (mouseY * 0.2 - globe.rotation.x) * 0.02;
      networkLines.rotation.y = globe.rotation.y;
      networkLines.rotation.x = globe.rotation.x;

      // Pulse the core
      const pulse = 0.08 + Math.sin(time * 3) * 0.02;
      core.scale.setScalar(pulse / 0.08);
      (coreMat as THREE.MeshBasicMaterial).color.setHSL(0.75 + Math.sin(time) * 0.05, 1, 0.6);

      renderer.render(scene, camera);
    };

    animate();

    // ── Resize ──────────────────────────────────────────────────────
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // ── Cleanup ─────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
