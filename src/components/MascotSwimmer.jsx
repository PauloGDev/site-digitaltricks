import React, { useEffect, useRef } from "react";

const MODEL_PATH = "/NADANDO.glb";
const TARGET_FPS = 36;
const FRAME_INTERVAL = 1000 / TARGET_FPS;

const MascotSwimmer = ({ className = "absolute inset-0 z-[25] opacity-95" }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    let animationFrame = 0;
    let isDisposed = false;
    let isVisible = false;
    let hasStarted = false;
    let lastFrameTime = 0;
    let resizeObserver = null;
    let viewportObserver = null;
    let renderer = null;
    let model = null;
    const layout = {
      cameraBaseY: 0.2,
      cameraX: 0,
      cameraY: 0.2,
      cameraZ: 4.4,
      floatX: 0.48,
      modelOffsetY: 0,
      pixelRatio: 1.35,
      scale: 1,
      swimmerY: 0,
    };
    let cleanupScene = () => {};

    const disposeMaterial = (material) => {
      Object.values(material).forEach((value) => {
        if (value?.isTexture) value.dispose();
      });
      material.dispose();
    };

    const disposeObject = (object) => {
      object.traverse((child) => {
        if (child.geometry) child.geometry.dispose();

        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];

        materials.filter(Boolean).forEach(disposeMaterial);
      });
    };

    const startScene = async () => {
      if (hasStarted || isDisposed) return;
      hasStarted = true;

      const [THREE, { GLTFLoader }] = await Promise.all([
        import("three"),
        import("three/examples/jsm/loaders/GLTFLoader.js"),
      ]);

      if (isDisposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      const swimmer = new THREE.Group();
      const clock = new THREE.Clock();
      const loader = new GLTFLoader();
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      camera.position.set(0, 0.2, 4.4);
      scene.add(swimmer);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "high-performance",
      });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.domElement.style.display = "block";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.width = "100%";
      mount.appendChild(renderer.domElement);

      const ambientLight = new THREE.HemisphereLight(0xffffff, 0x01040a, 0.72);
      const keyLight = new THREE.DirectionalLight(0xffffff, 1.65);
      const deepLight = new THREE.DirectionalLight(0x7b61ff, 0.38);
      const rimLight = new THREE.PointLight(0x22d3ee, 0.9, 7);

      keyLight.position.set(2.5, 3.8, 4.5);
      deepLight.position.set(-3.4, -1.2, 2.2);
      rimLight.position.set(-2.4, 0.9, 2.4);
      scene.add(ambientLight, keyLight, deepLight, rimLight);

      const caustics = new THREE.Group();
      const causticLines = [];
      scene.add(caustics);

      for (let i = 0; i < 10; i += 1) {
        const geometry = new THREE.PlaneGeometry(1.1 + Math.random() * 1.6, 0.02);
        const material = new THREE.MeshBasicMaterial({
          color: 0x7dd3fc,
          depthWrite: false,
          opacity: 0.055,
          transparent: true,
        });
        const line = new THREE.Mesh(geometry, material);

        line.position.set((Math.random() - 0.5) * 5.4, 1 + Math.random() * 2, -2);
        line.rotation.z = Math.random() * Math.PI;
        caustics.add(line);
        causticLines.push(line);
      }

      const bubbleCount = 42;
      const bubblePositions = new Float32Array(bubbleCount * 3);
      const bubbleSpeeds = new Float32Array(bubbleCount);

      for (let i = 0; i < bubbleCount; i += 1) {
        bubblePositions[i * 3] = (Math.random() - 0.5) * 5.4;
        bubblePositions[i * 3 + 1] = -3 + Math.random() * 6;
        bubblePositions[i * 3 + 2] = -2 + Math.random();
        bubbleSpeeds[i] = 0.16 + Math.random() * 0.28;
      }

      const bubbleGeometry = new THREE.BufferGeometry();
      bubbleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(bubblePositions, 3)
      );

      const bubbleMaterial = new THREE.PointsMaterial({
        color: 0xbff4ff,
        depthWrite: false,
        opacity: 0.5,
        size: 0.032,
        transparent: true,
      });

      const bubbles = new THREE.Points(bubbleGeometry, bubbleMaterial);
      scene.add(bubbles);

      let mixer = null;

      loader.load(MODEL_PATH, (gltf) => {
        if (isDisposed) {
          disposeObject(gltf.scene);
          return;
        }

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
        model.rotation.set(0.05, Math.PI - 0.82, -0.04);
        swimmer.add(model);

        mixer = new THREE.AnimationMixer(model);

        const objectClips = gltf.animations.filter(
          (clip) => !clip.name.startsWith("ArmatureAction")
        );
        const armatureClip =
          gltf.animations.find((clip) => clip.name === "ArmatureAction.002") ||
          gltf.animations.find((clip) => clip.name === "ArmatureAction") ||
          gltf.animations
            .filter((clip) => clip.name.startsWith("ArmatureAction"))
            .sort((a, b) => b.tracks.length - a.tracks.length)[0];

        [...objectClips, armatureClip].filter(Boolean).forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.reset();
          action.setLoop(THREE.LoopRepeat, Infinity);
          action.setEffectiveTimeScale(1.15);
          action.setEffectiveWeight(1);
          action.play();
        });

        mixer.update(0);
      });

      const resize = () => {
        const { clientWidth, clientHeight } = mount;
        if (!clientWidth || !clientHeight || !renderer) return;

        const aspect = clientWidth / clientHeight;
        const isMobile = clientWidth < 640;
        const isTablet = clientWidth >= 640 && clientWidth < 1024;
        const isShort = clientHeight < 430;

        camera.fov = isMobile ? 42 : isTablet ? 38 : 34;
        camera.aspect = clientWidth / clientHeight;
        camera.position.x = 0;
        camera.position.y = isMobile ? 0.08 : 0.2;
        camera.position.z = isMobile ? 5.35 : isTablet ? 4.65 : 4.1;
        camera.updateProjectionMatrix();

        layout.cameraBaseY = isMobile ? 0.08 : 0.2;
        layout.cameraX = isMobile ? 0.14 : 0.36;
        layout.cameraY = isMobile ? 0.08 : 0.12;
        layout.cameraZ = camera.position.z;
        layout.floatX = isMobile ? 0.24 : isTablet ? 0.34 : 0.48;
        layout.modelOffsetY = isMobile ? -0.06 : 0;
        layout.pixelRatio = isMobile ? 1.15 : isTablet ? 1.25 : 1.35;
        layout.scale = isMobile
          ? isShort
            ? 1.12
            : 1.12
          : isTablet
          ? 1.02
          : aspect < 0.95
          ? 1.08
          : 1.18;
        layout.swimmerY = isMobile ? -0.08 : 0;

        renderer.setPixelRatio(Math.min(window.devicePixelRatio, layout.pixelRatio));
        renderer.setSize(clientWidth, clientHeight, false);
        swimmer.scale.setScalar(layout.scale);
      };

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(mount);
      resize();

      const render = (frameTime = 0) => {
        if (isDisposed) return;

        animationFrame = requestAnimationFrame(render);

        if (!isVisible || document.hidden) {
          clock.getDelta();
          lastFrameTime = frameTime;
          return;
        }

        if (frameTime - lastFrameTime < FRAME_INTERVAL) return;
        lastFrameTime = frameTime;

        const delta = Math.min(clock.getDelta(), 0.05);
        const elapsed = clock.elapsedTime;
        const motionMultiplier = prefersReducedMotion ? 0 : 1;

        camera.position.x =
          Math.sin(elapsed * 0.25) * layout.cameraX * motionMultiplier;
        camera.position.y =
          layout.cameraBaseY +
          Math.sin(elapsed * 0.45) * layout.cameraY * motionMultiplier;
        camera.position.z = layout.cameraZ;
        camera.lookAt(0, 0, 0);

        swimmer.position.set(
          Math.sin(elapsed * 0.24) * layout.floatX + Math.sin(elapsed * 0.72) * 0.06,
          layout.swimmerY + layout.modelOffsetY + Math.sin(elapsed * 0.95) * 0.06,
          0
        );
        swimmer.rotation.y = -0.15 + Math.sin(elapsed * 0.24) * 0.18;
        swimmer.rotation.z = Math.sin(elapsed * 0.56) * 0.035;
        swimmer.rotation.x = Math.sin(elapsed * 0.45) * 0.02;

        if (mixer) mixer.update(delta);

        causticLines.forEach((line, index) => {
          line.position.x += Math.sin(elapsed + index) * 0.0012;
          line.material.opacity = 0.04 + Math.sin(elapsed * 1.6 + index) * 0.014;
        });

        const positions = bubbles.geometry.attributes.position.array;

        for (let i = 0; i < bubbleCount; i += 1) {
          positions[i * 3 + 1] += bubbleSpeeds[i] * delta;

          if (positions[i * 3 + 1] > 3) {
            positions[i * 3 + 1] = -3;
          }
        }

        bubbles.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };

      cleanupScene = () => {
        if (model) disposeObject(model);
        disposeObject(caustics);
        bubbleGeometry.dispose();
        bubbleMaterial.dispose();
        renderer?.dispose();
        renderer?.domElement.remove();
      };

      render();
    };

    viewportObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) startScene();
      },
      { rootMargin: "240px 0px", threshold: 0.05 }
    );

    viewportObserver.observe(mount);

    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrame);
      resizeObserver?.disconnect();
      viewportObserver?.disconnect();
      cleanupScene();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-label="Mascote orca nadando com oculos"
      className={`pointer-events-none ${className}`}
      role="img"
    />
  );
};

export default MascotSwimmer;
