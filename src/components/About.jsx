import React from 'react';

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 animate-slide-up"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Sobre mí
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
  Desarrollador web con formación en análisis y programación computacional, con experiencia en el desarrollo
  de aplicaciones web y sistemas de gestión. Trabajo con tecnologías modernas enfocadas en crear
  soluciones funcionales, claras y mantenibles.
</p>

<p>
  Mi enfoque combina conocimientos de frontend y backend, lo que me permite desarrollar interfaces
  intuitivas y conectar correctamente la lógica de negocio con bases de datos. Valoro el código ordenado,
  la reutilización de componentes y las buenas prácticas en el desarrollo web.
</p>

<p>
  Busco integrarme a equipos donde pueda aportar desde el primer día, colaborar en proyectos reales,
  brindar soporte técnico y continuar fortaleciendo mis habilidades profesionales en un entorno de
  aprendizaje constante.
</p>

          
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-primary-600 dark:text-accent-400 mb-3">
              Enfoque profesional
            </h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3"></span>
                Desarrollo basado en buenas prácticas y patrones de diseño
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3"></span>
                Enfoque en rendimiento, seguridad y escalabilidad
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-primary-500 dark:bg-accent-500 rounded-full mt-2 mr-3"></span>
                Comunicación clara y trabajo colaborativo en equipo
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;