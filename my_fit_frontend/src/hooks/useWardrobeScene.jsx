import { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function useWardrobeScene(wardrobeRef, active) {
  useEffect(() => {
    if (!active || !wardrobeRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    const camera = new THREE.PerspectiveCamera(
      75,
      wardrobeRef.current.clientWidth / wardrobeRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(
      wardrobeRef.current.clientWidth,
      wardrobeRef.current.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    wardrobeRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 5, 5);
    scene.add(directionalLight);

    // Load wardrobe model (fallback = box)
    const loader = new GLTFLoader();
    let wardrobeModel = null;
    loader.load(
      "/models/wardrobe.gltf", // put your model inside /public/models/
      (gltf) => {
        wardrobeModel = gltf.scene;
        wardrobeModel.scale.set(1.5, 1.5, 1.5);
        scene.add(wardrobeModel);
      },
      undefined,
      (error) => {
        console.error("An error occurred loading wardrobe:", error);
        const placeholder = new THREE.Mesh(
          new THREE.BoxGeometry(2, 3, 1),
          new THREE.MeshStandardMaterial({ color: 0x8b4513 })
        );
        scene.add(placeholder);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      if (wardrobeModel) wardrobeModel.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      if (!wardrobeRef.current) return;
      const width = wardrobeRef.current.clientWidth;
      const height = wardrobeRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (wardrobeRef.current) {
        wardrobeRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material?.dispose();
          }
        }
      });
    };
  }, [active, wardrobeRef]);
}
