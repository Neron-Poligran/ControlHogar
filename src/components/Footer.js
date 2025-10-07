import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Home, Heart } from "lucide-react";
import { Link } from "react-router-dom";

// MotionLink: versión animada del componente Link de React Router
const MotionLink = motion(Link);

// isExternal: función utilitaria para detectar enlaces externos (http, mailto, tel)
const isExternal = (href = "") => /^(https?:\/\/|mailto:|tel:)/i.test(href);

// SmartLink: componente que decide si renderizar un <a> externo o un <Link> interno, ambos animados
const SmartLink = ({ href, children, className, ...motionProps }) => {
  if (isExternal(href)) {
    // Enlace externo: abre en nueva pestaña
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }
 // Enlace interno: usa React Router respetando basename
  return (
    <MotionLink to={href || "/"} className={className} {...motionProps}>
      {children}
    </MotionLink>
  );
};

// Componente principal Footer: pie de página animado y responsivo
const Footer = () => {
  // Información de contacto (íconos y enlaces)
  const contactInfo = [
    {
      icon: Mail,
      text: "info@controlhogar.com",
      href: "mailto:info@controlhogar.com",
    },
    { icon: Phone, text: "+57 300 123 4567", href: "tel:+573001234567" },
  ];

  // Enlaces a redes sociales (pueden ser actualizados con URLs reales)
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
  ];

  return (
    <motion.footer
      className="text-white bg-gradient-to-br from-gray-900 to-gray-800"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Sección de marca y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4 justify-left">
              <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                alt="Logo ControlHogar"
                className="w-auto h-16"
              />
            </div>
            <p className="leading-relaxed text-gray-300">
              Transformamos tu hogar en un espacio inteligente, cómodo y seguro.
              Tecnología de vanguardia para mejorar tu calidad de vida.
            </p>
          </motion.div>

          {/* Sección de contacto */}        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-xl font-semibold text-blue-400">
              Contacto
            </h4>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <SmartLink
                    key={index}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 transition-colors duration-300 hover:text-blue-400"
                    whileHover={{ x: 5 }}
                  >
                    <Icon className="w-5 h-5" />
                    {item.text}
                  </SmartLink>
                );
              })}
            </div>
          </motion.div>

          {/* Sección de redes sociales */}      
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-6 text-xl font-semibold text-blue-400">
              Síguenos
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <SmartLink
                  key={index}
                  href={social.href}
                  className="px-4 py-2 text-sm font-medium transition-colors duration-300 bg-gray-700 rounded-lg hover:bg-blue-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.name}
                </SmartLink>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Línea inferior con derechos y mensaje personalizado */}      
        <motion.div
          className="pt-8 mt-12 text-center border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-2 text-gray-400">
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
