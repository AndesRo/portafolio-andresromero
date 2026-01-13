import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaFileDownload, FaUser, FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    isLoading: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor completa todos los campos requeridos',
        isLoading: false
      });
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Por favor ingresa un email válido',
        isLoading: false
      });
      return;
    }

    setFormStatus(prev => ({ ...prev, isLoading: true }));

    // Simulación de envío (reemplazar con tu API real)
    try {
      // Aquí iría tu llamada a la API real
      // Ejemplo: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulación de delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        submitted: true,
        success: true,
        message: '¡Mensaje enviado con éxito! Te responderé en breve.',
        isLoading: false
      });
      
      // Reset del formulario
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Resetear estado después de 5 segundos
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: '',
          isLoading: false
        });
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Hubo un error al enviar el mensaje. Por favor intenta nuevamente.',
        isLoading: false
      });
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "andespart.ar@gmail.com",
      link: "mailto:andespart.ar@gmail.com",
      description: "Respuesta en 24-48 horas"
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      title: "GitHub",
      value: "github.com/AndesRo",
      link: "https://github.com/AndesRo",
      description: "Código y proyectos"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "https://www.linkedin.com/in/romeromllq/",
      link: "https://www.linkedin.com/in/romeromllq/",
      description: "Perfil profesional"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos o tienes alguna pregunta? Envíame un mensaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Información de contacto
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.title !== 'Email' ? "_blank" : "_self"}
                    rel={item.title !== 'Email' ? "noopener noreferrer" : ""}
                    className="block p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 glow-border hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-100 dark:bg-accent-900/30 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-accent-800/50 transition-colors">
                        <div className="text-primary-600 dark:text-accent-400">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-accent-400 transition-colors">
                            {item.title}
                          </h4>
                          <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-accent-900/20 text-primary-700 dark:text-accent-300 rounded-full">
                            {item.description}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 break-all">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Descarga CV */}
            <div className="p-6 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-accent-900/10 dark:to-primary-900/10 rounded-xl border border-primary-100 dark:border-accent-800/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <FaFileDownload className="w-6 h-6 text-primary-600 dark:text-accent-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    Curriculum Vitae
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Descarga mi CV actualizado
                  </p>
                </div>
              </div>
              <a
                href="/cv.pdf"
                download
                className="block w-full text-center py-3 bg-primary-500 hover:bg-primary-600 dark:bg-accent-500 dark:hover:bg-accent-600 text-white font-medium rounded-lg transition-colors"
              >
                Descargar CV (PDF)
              </a>
            </div>

            {/* Disponibilidad */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Disponibilidad
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Abierto a nuevas oportunidades
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Tiempo completo • Remoto • Híbrido
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Respuesta rápida garantizada
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Envíame un mensaje
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Completa el formulario y me pondré en contacto contigo lo antes posible.
            </p>

            {/* Mensaje de estado */}
            {formStatus.submitted && (
              <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'}`}>
                <div className="flex items-center gap-3">
                  {formStatus.success ? (
                    <FaCheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <FaExclamationCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                  <p className={`font-medium ${formStatus.success ? 'text-green-800 dark:text-green-300' : 'text-red-800 dark:text-red-300'}`}>
                    {formStatus.message}
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <FaUser className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                      <FaEnvelope className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent outline-none transition-all"
                  placeholder="Propuesta de trabajo, consulta, etc."
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-accent-500 focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                ></textarea>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                disabled={formStatus.isLoading}
                className={`w-full flex items-center justify-center gap-3 py-4 px-6 ${formStatus.isLoading ? 'bg-primary-400 dark:bg-accent-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600 dark:bg-accent-500 dark:hover:bg-accent-600'} text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]`}
              >
                {formStatus.isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-5 h-5" />
                    Enviar mensaje
                  </>
                )}
              </button>

              {/* Nota */}
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                Los campos marcados con * son obligatorios. Respeto tu privacidad.
              </p>
            </form>
          </div>
        </div>

        {/* Footer de contacto */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap gap-4 justify-center items-center px-6 py-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              También puedes contactarme directamente:
            </span>
            <a
              href="mailto:contacto@tudominio.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 dark:bg-accent-900/20 text-primary-700 dark:text-accent-300 hover:bg-primary-100 dark:hover:bg-accent-800/30 rounded-lg transition-colors"
            >
              <FaEnvelope className="w-4 h-4" />
              andespart.ar@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;