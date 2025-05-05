import React, { useEffect, useRef } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Initialize particles
    let particles = [];
    const particleCount = Math.min(window.innerWidth / 10, 100);
    
    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(157, 88, 31, ${Math.random() * 0.5 + 0.1})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25
        });
      }
    };
    
    // Draw particles
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Draw connections
        connectParticles(particle, i);
      });
    };
    
    // Connect particles with lines if they're close enough
    const connectParticles = (particle, index) => {
      const maxDistance = 150;
      
      for (let i = index + 1; i < particles.length; i++) {
        const dx = particle.x - particles[i].x;
        const dy = particle.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          // Calculate opacity based on distance
          const opacity = 1 - (distance / maxDistance);
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(157, 88, 31, ${opacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(particles[i].x, particles[i].y);
          ctx.stroke();
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    
    // Handle mouse movement
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      particles.forEach(particle => {
        // Calculate distance between mouse and particle
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          // Push particles away from mouse
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 500;
          
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
        }
      });
    };
    
    // Initialize
    setCanvasSize();
    createParticles();
    animate();
    
    // Event listeners
    window.addEventListener('resize', () => {
      setCanvasSize();
      createParticles();
    });
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return <canvas ref={canvasRef} className="particle-canvas" />;
};

export default ParticleBackground;