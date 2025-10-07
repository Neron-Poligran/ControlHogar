import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Star, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

// Componente principal Home: página de inicio del sitio
const Home = () => {
  // features: array de características destacadas que se muestran en la landing
  const features = [
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Sistemas de última generación con monitoreo 24/7 y respaldo técnico completo."
    },
    {
      icon: Star,
      title: "Calidad Premium",
      description: "Productos certificados y tecnología de vanguardia para resultados excepcionales."
    },
    {
      icon: Users,
      title: "Soporte Experto",
      description: "Equipo técnico especializado disponible para instalación y mantenimiento."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero: componente de carrusel animado en la parte superior */}
      <Hero />
      {/* Sección principal con animaciones y contenido de la landing */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-gray-50 to-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
        {/* Bloque "¿Quiénes Somos?" con animación de entrada */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Quiénes Somos?
            </h2>
             {/* Línea decorativa animada */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              En <span className="font-bold text-blue-600">ControlHogar</span> transformamos espacios tradicionales 
              en hogares inteligentes del futuro. Nuestra misión es hacer que la tecnología domótica sea 
              accesible, confiable y fácil de usar para todas las familias.
            </p>
          </motion.div>

          {/* Grid de características destacadas con animaciones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Icono animado de la característica */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-blue-950 from-10%  to-lime-500 to-100% rounded-2xl flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Llamada a la acción para explorar servicios */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              ¿Listo para el Futuro?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Descubre nuestro catálogo completo de servicios y encuentra la solución perfecta para tu hogar.
            </p>
            {/* Botón animado para navegar a la página de servicios */}
            <Link to="/servicios">
              <motion.button
                className="bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 mx-auto hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explorar Servicios
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
