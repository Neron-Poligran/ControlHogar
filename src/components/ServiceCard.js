import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// resolveImg: función para obtener la URL correcta de la imagen del servicio
const resolveImg = (p) => {
  if (!p) return '';
  if (/^(https?:)?\/\//i.test(p)) return p; // Si es URL absoluta, la retorna
  const base = process.env.PUBLIC_URL || ''; // Base para rutas relativas
  const path = p.startsWith('/') ? p : `/${p}`;
  return `${base}${path}`;
};

// Componente ServiceCard: muestra la tarjeta de un servicio en el catálogo
const ServiceCard = ({ service, index }) => {
  return (
    // Tarjeta animada con framer-motion
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Animación de entrada
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }} // Animación al pasar el mouse
      className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-2xl group"
    >
      <div className="relative overflow-hidden">
        {/* Imagen del servicio con animación de zoom al pasar el mouse */}
        <motion.img
          src={resolveImg(service.image)}
          alt={service.name}
          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        {/* Etiqueta de promoción si el servicio está en promoción */}  
        {service.promotion && (
          <motion.div 
            className="absolute px-3 py-1 text-sm font-bold text-white rounded-full top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Star className="inline w-4 h-4 mr-1" />
            PROMOCIÓN
          </motion.div>
        )}
      </div>

      <div className="p-6">
        {/* Nombre del servicio con animación al pasar el mouse */}
        <motion.h3 
          className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600"
          whileHover={{ x: 5 }}
        >
          {service.name}
        </motion.h3>
        {/* Precio del servicio animado */}
        <motion.p 
          className="mb-4 text-2xl font-bold text-blue-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {service.price}
        </motion.p>

        {/* Descripción corta del servicio */}
        <motion.p 
          className="mb-4 text-gray-600 line-clamp-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {service.description}
        </motion.p>

        {/* Disponibilidad del servicio */}  
        <motion.p 
          className="mb-6 text-sm font-semibold text-green-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {service.availability}
        </motion.p>

        {/* Botón para ver más detalles del servicio */}  
        <Link to={`/servicio/${service.id}`}>
          <motion.button
            className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% rounded-xl hover:shadow-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Más
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
