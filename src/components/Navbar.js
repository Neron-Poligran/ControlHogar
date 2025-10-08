import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, Settings, User, Package } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Componente Navbar: barra de navegación principal
const Navbar = () => {
  // Estado para controlar si el menú móvil está abierto
  const [isOpen, setIsOpen] = useState(false);
  // Hook para obtener la ruta actual y resaltar el ítem activo
  const location = useLocation();

  // Elementos de navegación: nombre, ruta y icono
  const navItems = [
    { name: 'Inicio', path: '/', icon: Home },
    { name: 'Servicios', path: '/servicios', icon: Package  },
    { name: 'Login', path: '/login', icon: User }
  ];

  return (
    // Barra de navegación animada (entrada desde arriba)
    <motion.nav 
      className="sticky top-0 z-50 border-b shadow-sm bg-white/95 backdrop-blur-lg border-gray-200/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo de la marca con animación al pasar el mouse */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >

          <Link to="/">
            <div className="flex items-center justify-center">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} 
                alt="Logo ControlHogar" 
                className="w-auto h-16"
              />
            </div>
          </Link>

          </motion.div>

          {/* Menú de navegación para escritorio (oculto en móvil) */}        
          <div className="items-center hidden gap-8 md:flex">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              // Ítem de menú con animación y estilos según si está activo
              return (
                <motion.div key={item.name} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          {/* Botón para abrir/cerrar el menú móvil */}
          <motion.button
            className="p-2 rounded-lg md:hidden hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
        
        {/* Menú desplegable para móvil, animado y con transición de altura */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-64' : 'max-h-0'}`}
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              // Ítem de menú móvil, cierra el menú al hacer clic
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-950 from-10%  to-lime-500 to-100% text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
