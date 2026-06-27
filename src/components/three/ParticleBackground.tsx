'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip heavy 3D on mobile for performance
    if (window.innerWidth < 768) return;

    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 5;

    // ── Radar rings: expanding concentric circles ──────────────────
    const RING_COUNT = 6;
    const rings: Array<{ mesh: THREE.Mesh; phase: number }> = [];

    for (let i = 0; i < RING_COUNT; i++) {
      const geo = new THREE.RingGeometry(0.01, 0.03, 96);
      const mat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x7c3aed : 0x06b6d4,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.z = -1;
      scene.add(mesh);
      rings.push({ mesh, phase: (i / RING_COUNT) * Math.PI * 2 });
    }

    // ── Static faint grid circles (background depth) ───────────────
    for (let r = 1; r <= 5; r++) {
      const pts: THREE.Vector3[] = [];
      for (let j = 0; j <= 128; j++) {
        const a = (j / 128) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.cos(a) * r * 0.9, Math.sin(a) * r * 0.9, -1));
      }
      const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x4c1d95,
        transparent: true,
        opacity: 0.1,
      });
      scene.add(new THREE.Line(lineGeo, lineMat));
    }

    // ── Crosshair lines ────────────────────────────────────────────
    const crossMat = new THREE.LineBasicMaterial({ color: 0x5b21b6, transparent: true, opacity: 0.15 });
    const hGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-6, 0, -1), new THREE.Vector3(6, 0, -1),
    ]);
    const vGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, -4, -1), new THREE.Vector3(0, 4, -1),
    ]);
    scene.add(new THREE.Line(hGeo, crossMat));
    scene.add(new THREE.Line(vGeo, crossMat));

    // ── Rotating sweep arm (radar sweep line) ──────────────────────
    const sweepLength = 4.5;
    const sweepGeo = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -1),
      new THREE.Vector3(sweepLength, 0, -1),
    ]);
    const sweepMat = new THREE.LineBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.55,
    });
    const sweepLine = new THREE.Line(sweepGeo, sweepMat);
    scene.add(sweepLine);

    // Sweep trail — fading arc behind the arm
    const TRAIL_SEGMENTS = 40;
    const trailLines: THREE.Line[] = [];
    for (let i = 0; i < TRAIL_SEGMENTS; i++) {
      const tGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -1),
        new THREE.Vector3(sweepLength, 0, -1),
      ]);
      const tMat = new THREE.LineBasicMaterial({
        color: 0x7c3aed,
        transparent: true,
        opacity: (1 - i / TRAIL_SEGMENTS) * 0.25,
      });
      const tLine = new THREE.Line(tGeo, tMat);
      scene.add(tLine);
      trailLines.push(tLine);
    }

    // ── Blip particles (targets detected by radar) ─────────────────
    const BLIP_COUNT = 18;
    const blips: Array<{ mesh: THREE.Mesh; angle: number; radius: number; flickerSpeed: number }> = [];
    for (let i = 0; i < BLIP_COUNT; i++) {
      const angle  = Math.random() * Math.PI * 2;
      const radius = 0.5 + Math.random() * 3.8;
      const bGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const bMat = new THREE.MeshBasicMaterial({
        color: Math.random() > 0.5 ? 0x22d3ee : 0xa78bfa,
        transparent: true,
        opacity: 0,
      });
      const mesh = new THREE.Mesh(bGeo, bMat);
      mesh.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, -1);
      scene.add(mesh);
      blips.push({ mesh, angle, radius, flickerSpeed: 0.5 + Math.random() * 2 });
    }

    // ── Mouse parallax ─────────────────────────────────────────────
    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth  - 0.5) * 0.4;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    };
    window.addEventListener('mousemove', onMouse);

    // ── Animation ──────────────────────────────────────────────────
    let animId: number;
    let sweepAngle = 0;
    let t = 0;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.016;
      sweepAngle -= 0.022; // clockwise sweep

      // Rotate sweep arm
      sweepLine.rotation.z = sweepAngle;

      // Trail segments slightly behind sweep
      trailLines.forEach((line, i) => {
        line.rotation.z = sweepAngle + (i + 1) * 0.045;
      });

      // Expanding rings
      rings.forEach(({ mesh, phase }) => {
        const ringT = ((t * 0.6 + phase / (Math.PI * 2)) % 1);
        const scale = ringT * 5.5;
        mesh.scale.setScalar(scale);
        (mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - ringT) * 0.35);
      });

      // Blips: light up when sweep arm passes over them
      blips.forEach((b) => {
        const normalizedSweep = ((-sweepAngle) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const blipAngle = (b.angle % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2);
        const angleDiff = Math.abs(normalizedSweep - blipAngle);
        const hit = angleDiff < 0.25 || Math.abs(angleDiff - Math.PI * 2) < 0.25;
        const mat = b.mesh.material as THREE.MeshBasicMaterial;
        if (hit) {
          mat.opacity = 0.9;
        } else {
          mat.opacity *= 0.97; // fade out slowly
        }
      });

      // Mouse parallax
      scene.rotation.y += (mouseX * 0.5 - scene.rotation.y) * 0.04;
      scene.rotation.x += (-mouseY * 0.4 - scene.rotation.x) * 0.04;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.75,
      }}
    />
  );
}
