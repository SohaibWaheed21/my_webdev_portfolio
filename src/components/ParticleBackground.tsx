import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulse: number;
  depth: number;
};

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let animationFrame = 0;
    let drift = 0;
    const pointer = { x: 0, y: 0, active: false };

    const createParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.42,
      vy: (Math.random() - 0.5) * 0.42,
      size: Math.random() * 2.1 + 0.7,
      alpha: Math.random() * 0.32 + 0.18,
      pulse: Math.random() * Math.PI * 2,
      depth: Math.random() * 1 + 0.7,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const particleCount = Math.max(34, Math.min(112, Math.floor((width * height) / 15500)));
      particles = Array.from({ length: particleCount }, createParticle);
      drawScene(true);
    };

    const drawBackdrop = () => {
      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(14, 14, 15, 0.98)");
      gradient.addColorStop(0.55, "rgba(24, 24, 26, 0.95)");
      gradient.addColorStop(1, "rgba(10, 10, 11, 0.98)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      const glowA = context.createRadialGradient(width * 0.18, height * 0.22, 0, width * 0.18, height * 0.22, width * 0.45);
      glowA.addColorStop(0, "rgba(255, 255, 255, 0.08)");
      glowA.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = glowA;
      context.fillRect(0, 0, width, height);

      const glowB = context.createRadialGradient(width * 0.82, height * 0.18, 0, width * 0.82, height * 0.18, width * 0.35);
      glowB.addColorStop(0, "rgba(214, 197, 167, 0.1)");
      glowB.addColorStop(1, "rgba(214, 197, 167, 0)");
      context.fillStyle = glowB;
      context.fillRect(0, 0, width, height);

      const glowC = context.createRadialGradient(width * 0.5, height * 0.78, 0, width * 0.5, height * 0.78, width * 0.4);
      glowC.addColorStop(0, "rgba(255, 255, 255, 0.04)");
      glowC.addColorStop(1, "rgba(255, 255, 255, 0)");
      context.fillStyle = glowC;
      context.fillRect(0, 0, width, height);
    };

    const drawConnections = () => {
      const maxDistance = 150;

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const dx = particles[first].x - particles[second].x;
          const dy = particles[first].y - particles[second].y;
          const distance = Math.hypot(dx, dy);

          if (distance >= maxDistance) {
            continue;
          }

          const opacity = (1 - distance / maxDistance) * 0.2;
          context.strokeStyle = `rgba(242, 242, 242, ${opacity})`;
          context.lineWidth = 0.72;
          context.beginPath();
          context.moveTo(particles[first].x, particles[first].y);
          context.lineTo(particles[second].x, particles[second].y);
          context.stroke();
        }
      }
    };

    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.02;

        if (particle.x <= -20 || particle.x >= width + 20) {
          particle.vx *= -1;
        }

        if (particle.y <= -20 || particle.y >= height + 20) {
          particle.vy *= -1;
        }

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0 && distance < 220) {
            const force = ((220 - distance) / 1450) * particle.depth;
            particle.x -= (dx / distance) * force;
            particle.y -= (dy / distance) * force;
          }
        }

        const shimmer = 0.78 + Math.sin(particle.pulse) * 0.28;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = `rgba(245, 245, 244, ${particle.alpha * shimmer})`;
        context.shadowColor = "rgba(255, 255, 255, 0.24)";
        context.shadowBlur = 14;
        context.fill();
      });

      context.shadowBlur = 0;
    };

    const drawScene = (isStatic = false) => {
      context.clearRect(0, 0, width, height);
      drawBackdrop();

      if (!isStatic) {
        drift += 0.0038;
        pointer.x += Math.sin(drift) * 0.28;
        pointer.y += Math.cos(drift * 0.8) * 0.2;
        updateParticles();
      } else {
        particles.forEach((particle) => {
          const shimmer = 0.82 + Math.sin(particle.pulse) * 0.18;
          context.beginPath();
          context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          context.fillStyle = `rgba(245, 245, 244, ${particle.alpha * shimmer})`;
          context.fill();
        });
      }

      drawConnections();
    };

    const animate = () => {
      drawScene();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    resize();

    if (!reducedMotion.matches) {
      animate();
    }

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="ambient-orb ambient-orb-left absolute -left-24 top-[10%] h-80 w-80 rounded-full" />
      <div className="ambient-orb ambient-orb-right absolute -right-16 top-[14%] h-72 w-72 rounded-full" />
      <div className="ambient-orb ambient-orb-bottom absolute left-1/3 top-[62%] h-64 w-64 rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_34%),radial-gradient(circle_at_82%_14%,rgba(201,186,160,0.08),transparent_20%)]" />
      <canvas ref={canvasRef} className="particle-canvas h-full w-full opacity-95" />
    </div>
  );
};

export default ParticleBackground;