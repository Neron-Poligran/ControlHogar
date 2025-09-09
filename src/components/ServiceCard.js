import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          whileHover={{ scale: 1.1 }}
        />
        {service.promotion && (
          <motion.div 
            className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Star className="w-4 h-4 inline mr-1" />
            PROMOCIÓN
          </motion.div>
        )}
      </div>

      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          {service.name}
        </motion.h3>

        <motion.p 
          className="text-2xl font-bold text-blue-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {service.price}
        </motion.p>

        <motion.p 
          className="text-gray-600 mb-4 line-clamp-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {service.description}
        </motion.p>

        <motion.p 
          className="text-sm text-green-600 font-semibold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {service.availability}
        </motion.p>

        <Link to={`/servicio/${service.id}`}>
          <motion.button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver Más
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;