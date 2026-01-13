import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'Sistema de Gestión de Inventarios',
      description: 'Plataforma empresarial para gestión de inventario en tiempo real',
      problem: 'Empresa retail necesitaba controlar stock con múltiples ubicaciones y proveedores',
      solution: 'Desarrollé una aplicación web con dashboard en tiempo real, notificaciones automáticas y reportes personalizados',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    },
    {
      title: 'API de Microservicios E-commerce',
      description: 'Arquitectura de microservicios para plataforma de comercio electrónico',
      problem: 'Monolito difícil de mantener y escalar con picos de tráfico estacionales',
      solution: 'Diseñé e implementé arquitectura basada en microservicios con comunicación asíncrona y escalado automático',
      technologies: ['Node.js', 'Express', 'MongoDB', 'RabbitMQ', 'Kubernetes'],
      github: 'https://github.com',
      featured: true
    },
    {
      title: 'Aplicación de Gestión de Proyectos',
      description: 'Herramienta colaborativa para equipos de desarrollo ágiles',
      problem: 'Equipos distribuidos necesitaban centralizar tareas, documentación y seguimiento',
      solution: 'Creé aplicación con tableros Kanban, integración Git, y chat en tiempo real',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind', 'Socket.io'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Proyectos Destacados
        </h2>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden glow-border animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      {project.featured && (
                        <span className="px-3 py-1 bg-primary-100 dark:bg-accent-900/30 text-primary-700 dark:text-accent-300 text-sm font-medium rounded-full">
                          Destacado
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="Código en GitHub"
                      >
                        <FaGithub className="w-6 h-6" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        aria-label="Ver demo"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full"></span>
                      Problema
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.problem}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full"></span>
                      Solución
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-primary-50 dark:bg-accent-900/30 text-primary-700 dark:text-accent-300 text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;