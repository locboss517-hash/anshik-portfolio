import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../context/ThemeContext';
import { RefreshCw, Play, Pause } from 'lucide-react';

interface BlockDefinition {
  target: [number, number, number];
  size: [number, number, number];
  colorDark: number;
  colorLight: number;
  isAccent?: boolean;
  isFloating?: boolean;
  floatSpeed?: number;
  floatOffset?: number;
  entryDelay: number;
}

// 22 architectural blocks representing structured venture creation
const BLOCKS_CONFIG: BlockDefinition[] = [
  // Base Layer (Foundation / Strategy / Market Grounding)
  { target: [-1.2, -1.8, -0.6], size: [1.1, 0.5, 1.1], colorDark: 0x111111, colorLight: 0xD1D5DB, entryDelay: 0.05 },
  { target: [0.0, -1.8, -0.6], size: [1.1, 0.5, 1.1], colorDark: 0x181818, colorLight: 0xE5E7EB, entryDelay: 0.1 },
  { target: [1.2, -1.8, -0.6], size: [1.1, 0.5, 1.1], colorDark: 0x0F0F0F, colorLight: 0xF3F4F6, entryDelay: 0.15 },
  { target: [-1.2, -1.8, 0.6], size: [1.1, 0.5, 1.1], colorDark: 0x1A1A1A, colorLight: 0xE5E7EB, entryDelay: 0.2 },
  { target: [0.0, -1.8, 0.6], size: [1.1, 0.5, 1.1], colorDark: 0x0A0A0A, colorLight: 0xF8FAFC, entryDelay: 0.25 },
  { target: [1.2, -1.8, 0.6], size: [1.1, 0.5, 1.1], colorDark: 0x222222, colorLight: 0xD1D5DB, entryDelay: 0.3 },

  // Layer 2 (Business Model & Product Architecture)
  { target: [-0.6, -1.1, -0.6], size: [1.1, 0.7, 1.1], colorDark: 0x242424, colorLight: 0xE5E7EB, entryDelay: 0.35 },
  { target: [0.6, -1.1, -0.6], size: [1.1, 0.7, 1.1], colorDark: 0x1F1F1F, colorLight: 0xF3F4F6, entryDelay: 0.4 },
  { target: [-0.6, -1.1, 0.6], size: [1.1, 0.7, 1.1], colorDark: 0x181818, colorLight: 0xE2E8F0, entryDelay: 0.45 },
  { target: [0.6, -1.1, 0.6], size: [1.1, 0.7, 1.1], colorDark: 0x2C2C2C, colorLight: 0xCBD5E1, entryDelay: 0.5 },

  // Layer 3 (Operations & Go-To-Market Pillars)
  { target: [-0.6, -0.2, 0.0], size: [1.0, 0.8, 1.0], colorDark: 0x333333, colorLight: 0xCBD5E1, entryDelay: 0.55 },
  { target: [0.6, -0.2, 0.0], size: [1.0, 0.8, 1.0], colorDark: 0x2A2A2A, colorLight: 0xE2E8F0, entryDelay: 0.6 },
  { target: [0.0, -0.2, -0.8], size: [0.9, 0.8, 0.9], colorDark: 0x1E1E1E, colorLight: 0xF1F5F9, entryDelay: 0.65 },
  { target: [0.0, -0.2, 0.8], size: [0.9, 0.8, 0.9], colorDark: 0x404040, colorLight: 0x94A3B8, entryDelay: 0.7 },

  // Layer 4 (Innovation & Scaling Structure)
  { target: [0.0, 0.7, 0.0], size: [1.1, 0.8, 1.1], colorDark: 0x1C1C1C, colorLight: 0xF8FAFC, entryDelay: 0.75 },
  { target: [-0.8, 0.7, 0.0], size: [0.65, 0.65, 0.65], colorDark: 0x484848, colorLight: 0xCBD5E1, entryDelay: 0.8 },
  { target: [0.8, 0.7, 0.0], size: [0.65, 0.65, 0.65], colorDark: 0x282828, colorLight: 0xE2E8F0, entryDelay: 0.85 },

  // Layer 5 — Floating & Dynamic Blocks (Experimentation & Discovery)
  { 
    target: [0.0, 1.6, 0.0], 
    size: [0.75, 0.75, 0.75], 
    colorDark: 0x2563EB, // Solid Electric Blue Accent block
    colorLight: 0x2563EB, 
    isAccent: true,
    isFloating: true,
    floatSpeed: 1.8,
    floatOffset: 0.0,
    entryDelay: 0.95 
  },
  { 
    target: [0.75, 1.5, 0.4], 
    size: [0.45, 0.45, 0.45], 
    colorDark: 0x808080, 
    colorLight: 0x64748B, 
    isFloating: true,
    floatSpeed: 2.2,
    floatOffset: 1.2,
    entryDelay: 1.05 
  },
  { 
    target: [-0.7, 1.45, -0.4], 
    size: [0.45, 0.45, 0.45], 
    colorDark: 0x555555, 
    colorLight: 0x94A3B8, 
    isFloating: true,
    floatSpeed: 1.5,
    floatOffset: 2.4,
    entryDelay: 1.15 
  },
  { 
    target: [0.0, 2.3, 0.0], 
    size: [0.35, 0.35, 0.35], 
    colorDark: 0x94A3B8, // Silver summit cube
    colorLight: 0x334155, 
    isFloating: true,
    floatSpeed: 2.0,
    floatOffset: 3.0,
    entryDelay: 1.25 
  },
];

export const BuildingBlocksHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  const [isAssembled, setIsAssembled] = useState(false);
  const [isPlayingMotion, setIsPlayingMotion] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hoveredBlockIndex, setHoveredBlockIndex] = useState<number | null>(null);

  // References for Three.js instance to allow hot reassembly and clean cleanup
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshesRef = useRef<THREE.Mesh[]>([]);
  const edgeLinesRef = useRef<THREE.LineSegments[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });
  const reassembleTriggerRef = useRef<() => void>(() => {});

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // PERSPECTIVE CAMERA with refined focal length
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(5.5, 4.0, 6.5);
    camera.lookAt(0, 0.2, 0);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = false; // keep solid minimalist aesthetic

    // LIGHTING: Solid directional + ambient (NO gradients)
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === 'dark' ? 0.75 : 0.95);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, theme === 'dark' ? 1.4 : 1.2);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xffffff, theme === 'dark' ? 0.4 : 0.5);
    dirLight2.position.set(-5, -2, -5);
    scene.add(dirLight2);

    // MESH GROUP
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // CREATE BLOCKS
    const meshes: THREE.Mesh[] = [];
    const edgeLines: THREE.LineSegments[] = [];
    const blockStartTimes: number[] = [];
    const blockStartPositions: THREE.Vector3[] = [];

    BLOCKS_CONFIG.forEach((cfg, idx) => {
      const geometry = new THREE.BoxGeometry(cfg.size[0], cfg.size[1], cfg.size[2]);

      // Solid color material with zero gradient
      const color = theme === 'dark' ? cfg.colorDark : cfg.colorLight;
      const material = new THREE.MeshLambertMaterial({
        color: color,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.userData = {
        index: idx,
        config: cfg,
        targetPos: new THREE.Vector3(...cfg.target),
        currentHoverLift: 0,
        assembled: prefersReducedMotion,
      };

      // Architectural edge outlines for crisp founder/architect aesthetics
      const edges = new THREE.EdgesGeometry(geometry);
      const edgeColor = cfg.isAccent
        ? 0x60A5FA
        : theme === 'dark'
        ? 0x2A2A2A
        : 0xCBD5E1;
      const lineMaterial = new THREE.LineBasicMaterial({
        color: edgeColor,
        linewidth: 1,
      });
      const wireframe = new THREE.LineSegments(edges, lineMaterial);
      mesh.add(wireframe);
      edgeLines.push(wireframe);

      // Starting positions (staggered entrance from above)
      const startX = cfg.target[0] + (Math.random() - 0.5) * 1.5;
      const startY = cfg.target[1] + 6.0 + idx * 0.4;
      const startZ = cfg.target[2] + (Math.random() - 0.5) * 1.5;

      const startPos = new THREE.Vector3(startX, startY, startZ);
      blockStartPositions.push(startPos);

      if (prefersReducedMotion) {
        mesh.position.set(...cfg.target);
      } else {
        mesh.position.copy(startPos);
      }

      mesh.rotation.y = (Math.random() - 0.5) * 0.4;

      mainGroup.add(mesh);
      meshes.push(mesh);
      blockStartTimes.push(cfg.entryDelay);
    });

    meshesRef.current = meshes;
    edgeLinesRef.current = edgeLines;

    // REASSEMBLE FUNCTION
    let startTime = performance.now();
    let isFullyAssembledInternal = prefersReducedMotion;

    const triggerReassemble = () => {
      startTime = performance.now();
      isFullyAssembledInternal = false;
      setIsAssembled(false);

      meshes.forEach((mesh, idx) => {
        mesh.userData.assembled = false;
        mesh.position.copy(blockStartPositions[idx]);
        mesh.rotation.y = (Math.random() - 0.5) * 0.3;
      });
    };
    reassembleTriggerRef.current = triggerReassemble;

    // RAYCASTER FOR HOVER INTERACTIONS
    const raycaster = new THREE.Raycaster();
    const mouseCoord = new THREE.Vector2(-999, -999);

    const onPointerMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      mouseCoord.x = x;
      mouseCoord.y = y;

      // Parallax smooth interpolation
      mouseRef.current.targetX = x * 0.28;
      mouseRef.current.targetY = y * 0.18;
    };

    const onPointerLeave = () => {
      mouseCoord.x = -999;
      mouseCoord.y = -999;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      setHoveredBlockIndex(null);
    };

    canvas.addEventListener('mousemove', onPointerMove);
    canvas.addEventListener('mouseleave', onPointerLeave);

    // RESIZE OBSERVER
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    // INTERSECTION OBSERVER to trigger entrance when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isFullyAssembledInternal && !prefersReducedMotion) {
            triggerReassemble();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(container);

    // EASING HELPER (Cubic Out for precise snap)
    const easeOutBack = (x: number): number => {
      const c1 = 1.4;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
    };

    // ANIMATION LOOP
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      const elapsedSec = (performance.now() - startTime) / 1000;
      const time = clockRef.current.getElapsedTime();

      // Camera parallax interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      mainGroup.rotation.y = 0.55 + mouseRef.current.x;
      mainGroup.rotation.x = 0.08 - mouseRef.current.y;

      // Raycast for hover
      raycaster.setFromCamera(mouseCoord, camera);
      const intersects = raycaster.intersectObjects(meshes);
      let activeHoveredIdx: number | null = null;
      if (intersects.length > 0) {
        const topHit = intersects[0].object as THREE.Mesh;
        activeHoveredIdx = topHit.userData.index;
      }
      setHoveredBlockIndex(activeHoveredIdx);

      let allAssembled = true;

      // Update blocks
      meshes.forEach((mesh) => {
        const cfg = mesh.userData.config as BlockDefinition;
        const targetPos = mesh.userData.targetPos as THREE.Vector3;
        const startPos = blockStartPositions[mesh.userData.index];
        const isHovered = activeHoveredIdx === mesh.userData.index;

        // Hover lift calculation
        const targetHoverLift = isHovered ? 0.35 : 0;
        mesh.userData.currentHoverLift += (targetHoverLift - mesh.userData.currentHoverLift) * 0.15;

        // Entrance assembly progress
        if (!mesh.userData.assembled && !prefersReducedMotion) {
          const delay = cfg.entryDelay;
          const duration = 0.85;
          const progress = Math.max(0, Math.min(1, (elapsedSec - delay) / duration));

          if (progress < 1) {
            allAssembled = false;
            const eased = easeOutBack(progress);
            mesh.position.x = startPos.x + (targetPos.x - startPos.x) * eased;
            mesh.position.y = startPos.y + (targetPos.y - startPos.y) * eased;
            mesh.position.z = startPos.z + (targetPos.z - startPos.z) * eased;
            mesh.rotation.y = (1 - eased) * 0.3;
          } else {
            mesh.userData.assembled = true;
            mesh.position.copy(targetPos);
            mesh.rotation.y = 0;
          }
        } else {
          // Assembled state: handle floating experimentation & hover
          let posY = targetPos.y + mesh.userData.currentHoverLift;

          if (cfg.isFloating && isPlayingMotion && !prefersReducedMotion) {
            const speed = cfg.floatSpeed || 1.8;
            const offset = cfg.floatOffset || 0;
            const floatDelta = Math.sin(time * speed + offset) * 0.08;
            posY += floatDelta;
            mesh.rotation.y = Math.sin(time * (speed * 0.7) + offset) * 0.05;
          }

          mesh.position.y = posY;
          mesh.position.x = targetPos.x;
          mesh.position.z = targetPos.z;
        }

        // Highlight material on hover
        const mat = mesh.material as THREE.MeshLambertMaterial;
        if (cfg.isAccent) {
          mat.color.setHex(0x2563EB); // Constant solid electric blue
        } else {
          const baseColor = theme === 'dark' ? cfg.colorDark : cfg.colorLight;
          if (isHovered) {
            mat.color.setHex(theme === 'dark' ? 0x4A4A4A : 0xCBD5E1);
          } else {
            mat.color.setHex(baseColor);
          }
        }
      });

      if (allAssembled && !isFullyAssembledInternal) {
        isFullyAssembledInternal = true;
        setIsAssembled(true);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      observer.disconnect();
      resizeObserver.disconnect();
      canvas.removeEventListener('mousemove', onPointerMove);
      canvas.removeEventListener('mouseleave', onPointerLeave);
      renderer.dispose();
      meshes.forEach((m) => {
        m.geometry.dispose();
        if (Array.isArray(m.material)) {
          m.material.forEach((mat) => mat.dispose());
        } else {
          m.material.dispose();
        }
      });
    };
  }, [theme, prefersReducedMotion]);

  // Update theme colors dynamically when theme changes
  useEffect(() => {
    meshesRef.current.forEach((mesh) => {
      const cfg = mesh.userData.config as BlockDefinition;
      const mat = mesh.material as THREE.MeshLambertMaterial;
      if (!cfg.isAccent) {
        mat.color.setHex(theme === 'dark' ? cfg.colorDark : cfg.colorLight);
      }
    });
    edgeLinesRef.current.forEach((lines, idx) => {
      const cfg = BLOCKS_CONFIG[idx];
      const mat = lines.material as THREE.LineBasicMaterial;
      if (cfg.isAccent) {
        mat.color.setHex(0x60A5FA);
      } else {
        mat.color.setHex(theme === 'dark' ? 0x2A2A2A : 0xCBD5E1);
      }
    });
  }, [theme]);

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] flex flex-col items-center justify-center">
      {/* Container with subtle morphism frame */}
      <div 
        ref={containerRef} 
        className="relative w-full h-full rounded-2xl overflow-hidden border border-charcoal-700/50 dark:border-charcoal-700/60 light:border-charcoal-200/80 bg-charcoal-900/40 dark:bg-charcoal-900/60 light:bg-charcoal-50/70 backdrop-blur-sm cursor-grab active:cursor-grabbing transition-colors duration-200"
        aria-label="3D Building Block interactive visual representing startup ideation and assembly"
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
        />

        {/* Floating status pill */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-950/80 dark:bg-charcoal-950/80 light:bg-white/90 border border-charcoal-700/60 dark:border-charcoal-700/60 light:border-charcoal-200 text-xs font-mono text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-700 backdrop-blur-md pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          <span>Venture Assembly · {isAssembled ? 'Structured Form' : 'Assembling...'}</span>
        </div>

        {/* Floating interaction hint */}
        <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-charcoal-950/80 dark:bg-charcoal-950/80 light:bg-white/90 border border-charcoal-700/60 dark:border-charcoal-700/60 light:border-charcoal-200 text-[11px] font-mono text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600 pointer-events-none">
          <span>Hover cubes to inspect</span>
        </div>

        {/* Block inspector info if hovering */}
        {hoveredBlockIndex !== null && (
          <div className="absolute bottom-14 left-4 z-10 px-3 py-1.5 rounded-lg bg-charcoal-950/90 dark:bg-charcoal-950/90 light:bg-white/95 border border-charcoal-700/80 dark:border-charcoal-700/80 light:border-charcoal-300 text-xs text-charcoal-100 dark:text-charcoal-100 light:text-charcoal-800 font-mono shadow-md pointer-events-none">
            {BLOCKS_CONFIG[hoveredBlockIndex].isAccent ? (
              <span className="text-electric-light font-semibold">★ Core Innovation Unit (Venture Catalyst)</span>
            ) : hoveredBlockIndex < 6 ? (
              <span>Foundation Layer · Market & Economic Grounding</span>
            ) : hoveredBlockIndex < 10 ? (
              <span>Structural Tier · Business Model & Unit Economics</span>
            ) : hoveredBlockIndex < 14 ? (
              <span>Operational Layer · Product Strategy & Distribution</span>
            ) : (
              <span>Active Experimentation · Iteration & Scalability</span>
            )}
          </div>
        )}

        {/* Minimal Control Bar */}
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2">
          <button
            onClick={() => reassembleTriggerRef.current()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-700 bg-charcoal-950/80 dark:bg-charcoal-950/80 light:bg-white/90 hover:bg-charcoal-800 dark:hover:bg-charcoal-800 light:hover:bg-charcoal-100 border border-charcoal-700/60 dark:border-charcoal-700/60 light:border-charcoal-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
            title="Reassemble building blocks"
            aria-label="Reassemble building blocks"
          >
            <RefreshCw className="w-3.5 h-3.5 text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600" />
            <span className="hidden sm:inline">Reassemble</span>
          </button>

          {!prefersReducedMotion && (
            <button
              onClick={() => setIsPlayingMotion((prev) => !prev)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-charcoal-200 dark:text-charcoal-200 light:text-charcoal-700 bg-charcoal-950/80 dark:bg-charcoal-950/80 light:bg-white/90 hover:bg-charcoal-800 dark:hover:bg-charcoal-800 light:hover:bg-charcoal-100 border border-charcoal-700/60 dark:border-charcoal-700/60 light:border-charcoal-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              title={isPlayingMotion ? 'Pause oscillation' : 'Resume oscillation'}
              aria-label={isPlayingMotion ? 'Pause oscillation' : 'Resume oscillation'}
            >
              {isPlayingMotion ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-600" />
                  <span className="hidden sm:inline">Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-electric" />
                  <span className="hidden sm:inline">Float</span>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Caption under the canvas */}
      <div className="w-full flex items-center justify-between mt-2.5 px-1 text-[11px] text-charcoal-300 dark:text-charcoal-300 light:text-charcoal-500 font-mono">
        <span>3D Kinetic Assembly</span>
        <span>Ideation → Validation → Architecture</span>
      </div>
    </div>
  );
};
