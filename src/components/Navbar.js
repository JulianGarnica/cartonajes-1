import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Acerca de Nosotros', href: '#about' },
    { name: 'Instalaciones', href: '#facilities' },
    { name: 'Nuestros Clientes', href: '#clients' },
    { name: 'Contáctenos', href: '#contact' },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-opacity-90 backdrop-blur-md shadow-lg z-50 py-4 background-primary "
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 14 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-6xl">
        <div className="text-2xl font-bold text-gray-900">
          <a href="#home" className="hover:text-blue-600 transition-colors duration-300">
            Cartonajes <span className="color-secondary">Troquelados</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="color-secondary text-lg font-medium transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 focus:outline-none">
            {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white bg-opacity-95 backdrop-blur-md py-4 mt-2 shadow-inner"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={toggleMenu}
                  className="block text-gray-800 hover:text-blue-600 text-xl font-medium py-2 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;