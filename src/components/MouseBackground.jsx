import React from 'react';
import { useMouse } from '../contexts/MouseContext';

const MouseBackground = () => {
  const { mousePosition, isMobile } = useMouse();

  if (isMobile) {
    return null; // No mostrar efectos de mouse en móvil
  }

  return (
    <>
      {/* Gradiente dinámico que sigue el mouse */}
      <div 
        className="fixed inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
              rgba(14, 165, 233, 0.08) 0%,
              transparent 25%
            ),
            radial-gradient(
              circle at ${(1 - mousePosition.x) * 100}% ${(1 - mousePosition.y) * 100}%,
              rgba(168, 85, 247, 0.05) 0%,
              transparent 20%
            )
          `,
          filter: 'blur(40px)',
          zIndex: 0
        }}
      />

      {/* Partículas interactivas */}
      {[...Array(20)].map((_, i) => {
        const size = 1 + Math.random() * 2;
        const distanceX = (mousePosition.x - 0.5) * 50;
        const distanceY = (mousePosition.y - 0.5) * 50;
        
        return (
          <div
            key={i}
            className="fixed rounded-full pointer-events-none transition-all duration-700"
            style={{
              left: `${10 + (i * 4) % 80}%`,
              top: `${10 + (i * 6) % 80}%`,
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 3 === 0 
                ? 'rgba(14, 165, 233, 0.3)' 
                : i % 3 === 1 
                  ? 'rgba(168, 85, 247, 0.3)' 
                  : 'rgba(59, 130, 246, 0.3)',
              transform: `translate(${distanceX * (0.1 + Math.random() * 0.2)}px, ${distanceY * (0.1 + Math.random() * 0.2)}px)`,
              animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)',
              zIndex: 0
            }}
          />
        );
      })}

      {/* Efecto de ondas */}
      <div 
        className="fixed rounded-full pointer-events-none"
        style={{
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.1) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          transition: 'all 0.1s ease-out',
          filter: 'blur(20px)',
          zIndex: 0
        }}
      />

      {/* Líneas de conexión */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const length = 100 + Math.random() * 200;
        
        return (
          <div
            key={`line-${i}`}
            className="fixed pointer-events-none"
            style={{
              left: '50%',
              top: '50%',
              width: `${length}px`,
              height: '1px',
              background: `linear-gradient(90deg, 
                transparent 0%, 
                rgba(14, 165, 233, ${0.1 + mousePosition.x * 0.1}) 50%, 
                transparent 100%)`,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              transformOrigin: '0 0',
              transition: 'opacity 0.3s ease',
              opacity: 0.1 + mousePosition.x * 0.2,
              filter: 'blur(1px)',
              zIndex: 0
            }}
          />
        );
      })}
    </>
  );
};

export default MouseBackground;