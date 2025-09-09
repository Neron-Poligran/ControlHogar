import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Play, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
        >
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white"
            >
              <motion.div 
                className="flex items-center gap-2 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-yellow-400 font-semibold">Tecnología Premium</span>
              </motion.div>

              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {slides[currentSlide].title}
              </motion.h1>

              <motion.h2 
                className="text-2xl md:text-3xl text-blue-400 font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {slides[currentSlide].subtitle}
              </motion.h2>

              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {slides[currentSlide].description}
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Link to="/servicios">
                  <motion.button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:shadow-2xl transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Ver Servicios
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>

                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-white hover:text-gray-900 transition-all duration-300"
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

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
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

      <motion.div 
        className="absolute bottom-8 right-8 flex items-center gap-2 text-white"
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