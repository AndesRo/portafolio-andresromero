import React, { useEffect, useState } from 'react';
import { FaChevronRight, FaCode, FaLaptopCode, FaTerminal } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiTailwindcss } from 'react-icons/si';
import { useMouse } from '../contexts/MouseContext';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const { mousePosition } = useMouse();

  const roles = [
  "Software Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer"
  ];

  // Efecto para el texto que cambia
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Efecto para el cursor que parpadea
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-16 pb-8"
    >
      {/* Efecto de gradiente local basado en mouse */}
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `
            radial-gradient(
              circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
              rgba(14, 165, 233, 0.03) 0%,
              transparent 50%
            )
          `,
          filter: 'blur(60px)',
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Columna izquierda - Texto */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Badge profesional */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 dark:bg-accent-500/10 backdrop-blur-sm rounded-full border border-primary-500/20 dark:border-accent-500/20 animate-fade-in-down">
              <div className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary-700 dark:text-accent-400">
                Disponible para nuevas oportunidades
              </span>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="block text-gray-900 dark:text-white animate-slide-up">
                  Hola, soy
                </span>
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 animate-gradient-x"
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  Andrés
                </span>
              </h1>
            </div>

            {/* Rol que cambia */}
            <div className="h-12 flex items-center justify-center lg:justify-start">
              <div className="relative inline-flex items-center">
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  <span className="relative">
                    {roles[textIndex]}
                    <span 
                      className={`absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary-500 dark:bg-accent-500 transition-opacity duration-100 ${
                        cursorVisible ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </span>
                </span>
              </div>
            </div>

            {/* Frase de valor */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in-up">
              Entuciasmado en crear soluciones digitales{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-primary-600 dark:text-accent-400">
                  escalables
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-200 dark:bg-accent-500/30 -rotate-1"></span>
              </span>
              ,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-primary-600 dark:text-accent-400">
                  eficientes
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-200 dark:bg-accent-500/30 rotate-1"></span>
              </span>
              {" "}y{" "}
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-primary-600 dark:text-accent-400">
                  mantenibles
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary-200 dark:bg-accent-500/30 -rotate-1"></span>
              </span>
              . Combinando diseño intuitivo con código de calidad.
            </p>

       

            {/* CTA Principal */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 dark:bg-accent-500 dark:hover:bg-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10">Ver proyectos destacados</span>
                <FaChevronRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                
                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border-2 border-primary-300 dark:border-accent-500 hover:border-primary-500 dark:hover:border-accent-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <span>Contáctame</span>
                <div className="w-6 h-6 rounded-full bg-primary-500/10 dark:bg-accent-500/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-500 dark:bg-accent-400 rounded-full animate-ping" />
                </div>
              </a>
            </div>

       
          </div>

          {/* Columna derecha - Foto */}
          <div className="flex-1 flex justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Anillos decorativos */}
              <div className="absolute inset-0 rounded-full border-4 border-primary-200/30 dark:border-accent-500/20 animate-ping-slow"></div>
              <div className="absolute inset-0 rounded-full border-2 border-primary-300/50 dark:border-accent-500/30 animate-spin-slow" style={{ animationDuration: '20s' }}></div>
              
              {/* Foto principal */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group">
                <img
                  src="/perfil.png"
                  alt="Foto profesional de Andrés"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay con efecto */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Badge flotante - Experiencia */}
              <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 animate-bounce-slow">
                <div className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      Disponible
                    </span>
                  </div>
                </div>
              </div>

              {/* Badge flotante - Stack */}
              <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 animate-float">
                <div className="px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-xl">
                  <span className="text-sm font-semibold">Web Developer </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 dark:text-gray-500 tracking-widest">DESPLAZAR</span>
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos CSS inline (o puedes moverlos a custom.css) */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 6s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 0.8s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;