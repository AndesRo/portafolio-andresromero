import React from 'react';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPhp, FaReact, 
  FaNodeJs, FaGitAlt, FaDocker, FaAws, FaJava,
  FaPython, FaDatabase, FaMobileAlt, FaServer
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiPostgresql, 
  SiMongodb, SiJest, SiGraphql, SiRedis, SiKubernetes,
  SiSpring, SiLaravel, SiSymfony, SiExpress, SiMysql,
  SiVuedotjs, SiAngular, SiSass, SiBootstrap
} from 'react-icons/si';

const TechStack = () => {
  const techCategories = [
    {
      category: 'Fundamentos Web',
      icon: '🌐',
      description: 'Tecnologías base para desarrollo web',
      technologies: [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-500' },
        { name: 'PHP', icon: <FaPhp />, color: 'text-purple-500' },
      ]
    },
    {
      category: 'Frontend',
      icon: '💻',
      description: 'Frameworks y librerías para interfaz de usuario',
      technologies: [
        { name: 'React', icon: <FaReact />, color: 'text-cyan-500' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-black' },
        { name: 'Vue.js', icon: <SiVuedotjs />, color: 'text-green-500' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-teal-500' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: 'text-purple-600' },
      
      ]
    },
    {
      category: 'Backend',
      icon: '⚙️',
      description: 'Tecnologías del lado del servidor',
      technologies: [
        { name: 'Node.js', icon: <FaNodeJs />, color: 'text-green-600' },
        { name: 'Express', icon: <SiExpress />, color: 'text-gray-500' },
        { name: 'Java', icon: <FaJava />, color: 'text-red-600' },
        { name: 'Python', icon: <FaPython />, color: 'text-blue-500' },
    
       
      ]
    },
    {
      category: 'Bases de Datos',
      icon: '🗄️',
      description: 'Sistemas de almacenamiento y gestión de datos',
      technologies: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-700' },
        { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-600' },
        { name: 'SQLite', icon: <FaDatabase />, color: 'text-blue-500' },
      ]
    },
    {
      category: 'Infraestructura',
      icon: '🚀',
      description: 'DevOps, despliegue y herramientas de desarrollo',
      technologies: [
        { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-600' },
        { name: 'AWS', icon: <FaAws />, color: 'text-orange-500' },
        { name: 'Git', icon: <FaGitAlt />, color: 'text-orange-600' },
        { name: 'Jest', icon: <SiJest />, color: 'text-red-800' },
        { name: 'CI/CD', icon: <FaServer />, color: 'text-gray-600' },
        { name: 'Mobile', icon: <FaMobileAlt />, color: 'text-blue-400' },
      ]
    }
  ];

  return (
    <section id="techstack" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tecnologías y Herramientas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stack tecnológico completo para el desarrollo de aplicaciones modernas y escalables
          </p>
        </div>
        
        <div className="space-y-12">
          {techCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Encabezado de categoría */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-accent-900/20 rounded-lg">
                    <span className="text-2xl">{category.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Grid de tecnologías */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group relative"
                  >
                    <div className="aspect-square flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-accent-500 transition-all duration-300 hover:shadow-md glow-border">
                      {/* Icono */}
                      <div className={`text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                        {tech.icon}
                      </div>
                      
                      {/* Nombre */}
                      <span className="text-sm font-medium text-gray-900 dark:text-white text-center">
                        {tech.name}
                      </span>
                      
                      {/* Efecto hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-lg"></div>
                      </div>
                    </div>
                    
                    {/* Tooltip en hover (opcional) */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-10">
                      <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                        {tech.name}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Nota adicional */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-50 dark:bg-accent-900/20 border border-primary-100 dark:border-accent-800/30 rounded-lg">
            <span className="text-primary-600 dark:text-accent-400 font-medium">
              Continuamente aprendiendo y adaptándome a nuevas tecnologías
            </span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            Esta lista representa las tecnologías con las que trabajo regularmente
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;