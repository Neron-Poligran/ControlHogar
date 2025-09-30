import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales de domótica para transformar tu hogar en un espacio inteligente, 
            seguro y eficiente. Cada servicio incluye instalación profesional y garantía completa.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar servicios..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
            />
          </div>
          <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Filter className="w-5 h-5" />
            Filtros
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contáctanos para soluciones personalizadas adaptadas a tus necesidades específicas.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;