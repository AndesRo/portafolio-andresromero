import React from 'react';
import { useMouse } from '../contexts/MouseContext';

const MouseEffectCard = ({ children, className = '' }) => {
  const { mousePosition } = useMouse();

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${className}`}
      style={{
        transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 2}deg) rotateX(${(0.5 - mousePosition.y) * 2}deg)`,
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
        boxShadow: `
          ${(mousePosition.x - 0.5) * 20}px ${(mousePosition.y - 0.5) * 20}px 40px rgba(0, 0, 0, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      }}
    >
      {/* Efecto de iluminación en borde */}
      <div
        className="absolute inset-0 pointer-events-none rounded-xl"
        style={{
          background: `radial-gradient(
            circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            rgba(14, 165, 233, 0.05) 0%,
            transparent 50%
          )`
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default MouseEffectCard;