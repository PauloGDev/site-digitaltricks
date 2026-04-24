import React, { useEffect, useRef } from "react";

const MODEL_PATH = "/NADANDO.glb";

const MascotSwimmer = ({ className = "absolute inset-0 z-[25] opacity-95" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let animationFrame;
    let mixer, model, renderer;
    let resizeObserver;

    const setupScene = async () => {
      const [THREE, { GLTFLoader }] = await Promise.all([
        import("three"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
      ]);

      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(0, 0.2, 4.4);

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      mount.appendChild(renderer.domElement);

      // 🌊 LUZ OCEANO
      const ambientLight = new THREE.HemisphereLight(0xffffff, 0x01040a, 0.6);

      const keyLight = new THREE.DirectionalLight(0xffffff, 1.8);
      keyLight.position.set(2.5, 3.8, 4.5);

      const deepLight = new THREE.DirectionalLight(0x7B61FF, 0.5);
      deepLight.position.set(-3.4, -1.2, 2.2);

      const rimLight = new THREE.PointLight(0x22d3ee, 1.1, 7);
      rimLight.position.set(-2.4, 0.9, 2.4);

      scene.add(ambientLight, keyLight, deepLight, rimLight);

      const swimmer = new THREE.Group();
      scene.add(swimmer);

      const clock = new THREE.Clock();
      const loader = new GLTFLoader();

      // 🌊 CAUSTICS
      const caustics = new THREE.Group();
      scene.add(caustics);

      for (let i = 0; i < 18; i++) {
        const geo = new THREE.PlaneGeometry(1 + Math.random() * 2, 0.02);
        const mat = new THREE.MeshBasicMaterial({
          color: 0x7dd3fc,
          transparent: true,
          opacity: 0.08,
          depthWrite: false,
        });

        const line = new THREE.Mesh(geo, mat);
        line.position.set(
          (Math.random() - 0.5) * 6,
          1 + Math.random() * 2,
          -2
        );
        line.rotation.z = Math.random() * Math.PI;
        caustics.add(line);
      }

      // 🫧 BUBBLES
      const bubbleCount = 80;
      const positions = new Float32Array(bubbleCount * 3);
      const speeds = [];

      for (let i = 0; i < bubbleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 6;
        positions[i * 3 + 1] = -3 + Math.random() * 6;
        positions[i * 3 + 2] = -2 + Math.random();

        speeds.push(0.2 + Math.random() * 0.4);
      }

      const bubbleGeo = new THREE.BufferGeometry();
      bubbleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const bubbleMat = new THREE.PointsMaterial({
        color: 0xbff4ff,
        size: 0.035,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
      });

      const bubbles = new THREE.Points(bubbleGeo, bubbleMat);
      scene.add(bubbles);

      // 📦 MODEL
      loader.load(MODEL_PATH, (gltf) => {
        model = gltf.scene;

        model.traverse((child) => {
          if (child.isMesh && child.material) {
            child.material.roughness = 0.7;
            child.material.metalness = 0.05;

          }
        });

        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();

        box.getSize(size);
        box.getCenter(center);

        model.position.sub(center);
        model.scale.setScalar(2.55 / Math.max(size.x, size.y, size.z));

        // 🐋 virar para frente
        model.rotation.set(0.05, Math.PI - 0.82, -0.04);

        swimmer.add(model);

        mixer = new THREE.AnimationMixer(model);

        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();
        });
      });

      const resize = () => {
        const { clientWidth, clientHeight } = mount;

        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(clientWidth, clientHeight, false);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      resize();

      // 🎥 LOOP
      const render = () => {
        const delta = clock.getDelta();
        const elapsed = clock.elapsedTime;

        // câmera viva
        camera.position.x = Math.sin(elapsed * 0.3) * 0.5;
        camera.position.y = 0.2 + Math.sin(elapsed * 0.5) * 0.2;
        camera.lookAt(0, 0, 0);

        // movimento base (direção)
        const forward = Math.sin(elapsed * 0.25) * 0.6;

        // flutuação
        const floatX = Math.sin(elapsed * 0.8) * 0.12;
        const floatY = Math.sin(elapsed * 1.1) * 0.08;

        swimmer.position.set(
          forward + floatX,
          floatY,
          0
        );

        // rotação acompanha movimento (muito importante)
        swimmer.rotation.y = -0.15 + Math.sin(elapsed * 0.25) * 0.25;
        swimmer.rotation.z = Math.sin(elapsed * 0.6) * 0.05;
        swimmer.rotation.x = Math.sin(elapsed * 0.5) * 0.03;

        if (mixer) mixer.update(delta);

        // caustics animando
        caustics.children.forEach((line, i) => {
          line.position.x += Math.sin(elapsed + i) * 0.002;
          line.material.opacity = 0.04 + Math.sin(elapsed * 2 + i) * 0.02;
        });

        // bubbles subindo
        const pos = bubbles.geometry.attributes.position.array;

        for (let i = 0; i < bubbleCount; i++) {
          pos[i * 3 + 1] += speeds[i] * delta;

          if (pos[i * 3 + 1] > 3) {
            pos[i * 3 + 1] = -3;
          }
        }

        bubbles.geometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
        animationFrame = requestAnimationFrame(render);
      };

      render();
    };

    setupScene();

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      renderer?.dispose();
    };
  }, []);

  return <div ref={mountRef} className={`pointer-events-none ${className}`} />;
};

export default MascotSwimmer;