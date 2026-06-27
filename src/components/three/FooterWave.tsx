'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function FooterWave() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = mount.clientWidth;
    const h = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
    camera.position.set(0, 1.5, 5);
    camera.lookAt(0, 0, 0);

    const isMobile = w < 768;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setSize(w, h);
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Low-poly wave mesh grid
    const segX = 40, segY = 20;
    const geo = new THREE.PlaneGeometry(12, 6, segX, segY);
    geo.rotateX(-Math.PI / 2.8);

    const mat = new THREE.MeshBasicMaterial({
      color: 0x5b21b6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.y = -0.5;
    scene.add(mesh);

    // Second denser layer — cyan accent
    const geo2 = new THREE.PlaneGeometry(12, 6, segX / 2, segY / 2);
    geo2.rotateX(-Math.PI / 2.8);
    const mat2 = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    });
    const mesh2 = new THREE.Mesh(geo2, mat2);
    mesh2.position.y = -0.3;
    scene.add(mesh2);

    const originalY1 = Array.from((geo.attributes.position.array as Float32Array));
    const originalY2 = Array.from((geo2.attributes.position.array as Float32Array));

    let animId: number;
    let t = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      t += 0.012;

      const pos1 = geo.attributes.position.array as Float32Array;
      const pos2 = geo2.attributes.position.array as Float32Array;

      for (let i = 0; i < pos1.length / 3; i++) {
        const ox = originalY1[i * 3];
        const oz = originalY1[i * 3 + 2];
        pos1[i * 3 + 1] = originalY1[i * 3 + 1] + Math.sin(ox * 1.2 + t) * 0.18 + Math.cos(oz * 0.8 + t * 0.7) * 0.12;
      }
      for (let i = 0; i < pos2.length / 3; i++) {
        const ox = originalY2[i * 3];
        const oz = originalY2[i * 3 + 2];
        pos2[i * 3 + 1] = originalY2[i * 3 + 1] + Math.sin(ox * 1.0 + t * 1.1) * 0.22 + Math.cos(oz * 1.2 + t * 0.5) * 0.1;
      }

      geo.attributes.position.needsUpdate = true;
      geo2.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const nw = mount.clientWidth;
      const nh = mount.clientHeight;
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      renderer.forceContextLoss();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0, left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
