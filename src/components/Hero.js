import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Componente principal Hero: carrusel animado de la landing page
const Hero = () => {
  // Estado para el slide actual del carrusel
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array de slides con imagen, título, subtítulo y descripción
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
      title: "Tu Hogar Inteligente Te Espera",
      subtitle: "Controla todo desde tu smartphone",
      description: "Iluminación, seguridad, clima y más en la palma de tu mano"
    },
    {
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&h=600&fit=crop",
      title: "Seguridad de Última Generación",
      subtitle: "Protege lo que más amas",
      description: "Videovigilancia HD y alertas en tiempo real las 24 horas"
    },
    {
      image: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa0?w=1200&h=600&fit=crop",
      title: "Eficiencia Energética Inteligente",
      subtitle: "Ahorra mientras vives mejor",
      description: "Sistemas automatizados que optimizan el consumo de energía"
    }
  ];

  // useEffect: cambia el slide automáticamente cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
    {/* Carrusel de fondo animado con transición entre slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        >
          {/* Imagen de fondo del slide actual */}
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Gradiente para mejorar la legibilidad del texto */}  
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

        {/* Contenido principal del Hero: textos y botones animados */}
        <div className="relative z-10 flex items-center h-full">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              {/* Etiqueta de tecnología premium con icono animado */}  
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold text-yellow-400">Tecnología Premium</span>
              </motion.div>

              {/* Título principal del slide */}
              <motion.h1 
                className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              {/* Subtítulo del slide */}  
              <motion.h2 
                className="mb-4 text-2xl font-semibold text-blue-400 md:text-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              {/* Descripción del slide */}
              <motion.p 
                className="mb-8 text-xl leading-relaxed text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Botones de acción: Ver Servicios y Ver Demo */}  
              <motion.div 
                className="flex flex-col gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {/* Botón para navegar a la página de servicios */}
                <Link to="/servicios">
                  <motion.button
                    className="flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% rounded-xl hover:shadow-2xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Servicios
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                {/* Botón de demo */}
                <motion.button
                  className="flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white rounded-xl hover:bg-white hover:text-gray-900"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5" />
                  Ver Demo
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Paginación del carrusel: botones para cambiar de slide */}            
      <div className="absolute flex gap-3 transform -translate-x-1/2 bottom-8 left-1/2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Mensaje de instalación garantizada con icono animado */}  
      <motion.div 
        className="absolute flex items-center gap-2 text-white bottom-8 right-8"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Shield className="w-5 h-5 text-green-400" />
        <span className="text-sm font-medium">Instalación Garantizada</span>
      </motion.div>
    </div>
  );
};

export default Hero;
