import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Home, Heart } from 'lucide-react';

const Footer = () => {
  const contactInfo = [
    { icon: Mail, text: 'info@controlhogar.com', href: 'mailto:info@controlhogar.com' },
    { icon: Phone, text: '+57 300 123 4567', href: 'tel:+573001234567' }
  ];

  const socialLinks = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">ControlHogar</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Transformamos tu hogar en un espacio inteligente, cómodo y seguro. 
              Tecnología de vanguardia para mejorar tu calidad de vida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Contacto</h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-5 h-5" />
                    {item.text}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Síguenos</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © 2025 ControlHogar. Todos los derechos reservados. 
            <span className="flex items-center gap-1">
              Hecho con <Heart className="w-4 h-4 text-red-500" /> para tu hogar
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;