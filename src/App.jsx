import React from 'react';
import { MouseProvider } from './contexts/MouseContext';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';
import MouseBackground from './components/MouseBackground';
import './styles/custom.css';

function App() {
  return (
    <MouseProvider>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <MouseBackground />
        <ThemeToggle />
        
        <main className="relative z-10 max-w-7xl mx-auto">
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        
        <footer className="relative z-10 py-8 px-4 border-t border-gray-200 dark:border-gray-800 mt-16">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-400">
             AndesRo © {new Date().getFullYear()} 
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Diseñado y desarrollado con React, Tailwind CSS y Vite.
            </p>
          </div>
        </footer>
      </div>
    </MouseProvider>
  );
}

export default App;