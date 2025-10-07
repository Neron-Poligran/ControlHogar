import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Star, Shield, Clock } from 'lucide-react';
import { servicesData } from '../data/services';

// resolveImg: función para obtener la URL correcta de la imagen del servicio
const resolveImg = (p) => {
  if (!p) return '';
  if (/^(https?:)?\/\//i.test(p)) return p;
  const base = process.env.PUBLIC_URL || '';
  const path = p.startsWith('/') ? p : `/${p}`;
  return `${base}${path}`;
};

// Componente principal ServiceDetail: muestra el detalle de un servicio seleccionado
const ServiceDetail = () => {
  // Obtiene el parámetro id de la URL
  const { id } = useParams();
  // Busca el servicio correspondiente en el array de datos
  const service = servicesData.find(s => s.id === parseInt(id));

  // Si no se encuentra el servicio, muestra mensaje de error y enlace de retorno
  if (!service) {
      return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Servicio no encontrado</h2>
          <Link to="/servicios" className="text-blue-600 hover:underline">
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container px-4 mx-auto">
        {/* Enlace para volver al catálogo de servicios */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Link 
            to="/servicios"
            className="inline-flex items-center gap-2 font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Catálogo
          </Link>
        </motion.div>
              
        {/* Grid principal: imagen y detalles del servicio */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Sección de imagen con animación y etiqueta de promoción */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden shadow-2xl rounded-2xl">
              <img
                src={resolveImg(service.image)}
                alt={service.name}
                className="object-cover w-full h-96"
              />
              {service.promotion && (
                <motion.div 
                  className="absolute flex items-center gap-2 px-4 py-2 font-bold text-white rounded-full top-6 right-6 bg-gradient-to-r from-red-500 to-pink-500"
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

          {/* Sección de información y características del servicio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              {/* Título y precio del servicio */}
              <h1 className="mb-4 text-4xl font-bold text-gray-900">
                {service.name}
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-bold text-blue-600">
                  {service.price}
                </span>
                {/* Etiqueta de oferta si está en promoción */}
                {service.promotion && (
                  <span className="px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full">
                    Oferta Limitada
                  </span>
                )}
              </div>
            </div>

            {/* Descripción completa y beneficios destacados */}
            <div className="p-6 bg-white shadow-lg rounded-xl">
              <h3 className="mb-4 text-xl font-bold text-gray-900">Descripción Completa</h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Beneficios visuales: garantía e instalación rápida */}
              <div className="grid grid-cols-1 gap-4 mb-6 sm:grid-cols-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-700">Garantía Incluida</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-700">Instalación Rápida</span>
                </div>
              </div>

              {/* Lista de características incluidas en el servicio */}
              <div className="mb-6">
                <h4 className="mb-3 font-bold text-gray-900">Lo que incluye:</h4>
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

              {/* Disponibilidad actual del servicio */}
              <div className="p-4 mb-6 border border-green-200 rounded-lg bg-green-50">
                <p className="font-semibold text-green-700">
                  {service.availability}
                </p>
              </div>

              {/* Botón para solicitar cotización */}
              <motion.button
                className="w-full px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% rounded-xl hover:shadow-2xl"
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
