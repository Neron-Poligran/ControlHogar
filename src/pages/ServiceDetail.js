import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Shield, Clock } from 'lucide-react';
import { servicesData } from '../data/services';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === parseInt(id));

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Servicio no encontrado</h2>
          <Link to="/servicios" className="text-blue-600 hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/servicios"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Catálogo
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-96 object-cover"
              />
              {service.promotion && (
                <motion.div 
                  className="absolute top-6 right-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2"
                  initial={{ scale: 0, rotate: -45 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Star className="w-5 h-5" />
                  PROMOCIÓN ESPECIAL
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {service.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  {service.price}
                </span>
                {service.promotion && (
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Oferta Limitada
                  </span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Descripción Completa</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-green-700 font-medium">Garantía Incluida</span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-700 font-medium">Instalación Rápida</span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Lo que incluye:</h4>
                <div className="space-y-2">
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Check className="w-5 h-5 text-green-600" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-700 font-semibold">
                  {service.availability}
                </p>
              </div>

              <motion.button
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Solicitar Cotización
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;