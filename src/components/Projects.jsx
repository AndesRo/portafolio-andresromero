import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaDatabase, FaServer, FaReact, FaPhp } from 'react-icons/fa';
import { SiBootstrap, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Reclamos Turísticos',
      description: 'Plataforma web completa para gestión de reclamos en agencias de turismo',
      problem: 'Agencia turística necesitaba un sistema centralizado para recibir, procesar y dar seguimiento a reclamos de clientes, con generación de reportes y notificaciones automáticas.',
      solution: 'Desarrollé un sistema web con panel administrativo, generación de tickets, notificaciones por email, y generación automática de reportes en PDF para documentación legal.',
      technologies: ['HTML', 'PHP', 'CSS', 'JavaScript', 'SQL', 'DOMPDF', 'PHPMailer', 'Bootstrap'],
      features: [
        'Panel de administración completo',
        'Generación de tickets con seguimiento',
        'Notificaciones automáticas por email',
        'Reportes PDF automáticos',
        'Base de datos relacional para historial'
      ],
      github: 'https://github.com/AndesRo/system-reclamos',
      demo: 'https://demo-reclamos-turisticos.com',
      icon: <FaServer className="w-8 h-8" />,
      category: 'Backend',
      featured: true
    },
    {
      title: 'Sistema de Inventario para Taller Mecánico',
      description: 'Sistema de gestión de inventario especializado para taller de motos',
      problem: 'Taller mecánico con problemas de control de stock, pérdida de repuestos y falta de organización en pedidos de proveedores, llevando registros manuales propensos a errores.',
      solution: 'Implementé un sistema de inventario con control de stock en tiempo real, alertas de reposición, gestión de proveedores y reportes de consumo mensual.',
      technologies: ['HTML', 'PHP', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL', 'Chart.js'],
      features: [
        'Control de stock en tiempo real',
        'Alertas de reposición automáticas',
        'Gestión de múltiples proveedores',
        'Reportes gráficos de consumo',
        'Interfaz optimizada para dispositivos móviles'
      ],
      github: 'https://github.com/tuusuario/inventario-taller-motos',
      demo: 'https://inventario-taller-motos.demo.com',
      icon: <FaDatabase className="w-8 h-8" />,
      category: 'Full Stack',
      featured: true
    },
    {
      title: 'Landing Page - Arriendo de Propiedades',
      description: 'Landing page moderna para empresa de arriendo de propiedades',
      problem: 'Empresa de arriendos necesitaba una presencia web moderna, rápida y atractiva para captar clientes, mostrar propiedades disponibles y facilitar contacto directo.',
      solution: 'Desarrollé una landing page responsive con diseño moderno, galería de propiedades, formularios de contacto integrados y optimización para motores de búsqueda.',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion'],
      features: [
        'Diseño completamente responsive',
        'Galería de propiedades con filtros',
        'Formularios de contacto integrados',
        'Optimización SEO avanzada',
        'Carga ultra rápida con Vite',
        'Animaciones suaves para mejor UX'
      ],
      github: 'https://github.com/AndesRo/casavillarrica',
      demo: 'https://casavillarrica.vercel.app',
      icon: <FaReact className="w-8 h-8" />,
      category: 'Frontend',
      featured: true
    }
  ];

  const getTechIcon = (tech) => {
    const techIcons = {
      'HTML': '🟧',
      'CSS': '🟦',
      'JavaScript': '🟨',
      'PHP': '🟪',
      'SQL': '🗃️',
      'React': '⚛️',
      'Vite': '⚡',
      'Bootstrap': '🎨',
      'Tailwind CSS': '🎯',
      'DOMPDF': '📄',
      'PHPMailer': '📧',
      'MySQL': '🐬',
      'Chart.js': '📊',
      'React Router': '🔄',
      'Framer Motion': '🎬'
    };
    return techIcons[tech] || '🔧';
  };

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Soluciones reales desarrolladas con tecnologías modernas, enfocadas en resolver problemas específicos
          </p>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden glow-border animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="p-6 md:p-8">
                {/* Header del proyecto */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="p-2 bg-primary-100 dark:bg-accent-900/30 rounded-lg">
                          {project.icon}
                        </div>
                        <span className="px-3 py-1 bg-primary-50 dark:bg-accent-900/20 text-primary-700 dark:text-accent-300 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                      
                      {project.featured && (
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-sm font-medium rounded-full">
                          ⭐ Destacado
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-300 font-medium rounded-lg transition-colors"
                        aria-label="Código en GitHub"
                      >
                        <FaGithub className="w-5 h-5" />
                        Código
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 bg-primary-500 hover:bg-primary-600 dark:bg-accent-500 dark:hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
                        aria-label="Ver demo en vivo"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Ver Demo
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Contenido principal */}
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  {/* Problema y Solución */}
                  <div className="space-y-6">
                    <div className="p-5 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-800/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Problema a resolver
                        </h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div className="p-5 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 dark:border-green-800/30">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          Solución implementada
                        </h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        {project.solution}
                      </p>
                    </div>
                  </div>
                  
                  {/* Características principales */}
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      Características principales
                    </h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2"></div>
                          <span className="text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Tecnologías utilizadas */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                    Tecnologías y herramientas utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        <span className="text-lg">{getTechIcon(tech)}</span>
                        <span className="font-medium text-gray-900 dark:text-white">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Sección de más proyectos */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              ¿Interesado en ver más proyectos?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md">
              Explora mi perfil de GitHub para ver más proyectos, contribuciones de código y colaboraciones.
            </p>
            <a
              href="https://github.com/AndesRo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              Ver todos los proyectos en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;