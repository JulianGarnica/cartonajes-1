import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-300 py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Columna 1: Información de Contacto */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Cartonajes Troquelados S.A.S.</h3>
          <p className="mb-4">
            Innovación y calidad en cada empaque. Tu socio estratégico en soluciones de cartón.
          </p>
          <p className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-3 text-blue-400" />Cl. 8A # 36 - 08, Zipaquirá, Cundinamarca
          </p>
          <p className="flex items-center mb-2">
            <FaPhone className="mr-3 text-blue-400" />(1) 852 0366 - 852 0946
          </p>
          <p className="flex items-center">
            <FaEnvelope className="mr-3 text-blue-400" /> info@cartonajestroquelados.com
          </p>
        </div>

        {/* Columna 2: Mapa del Sitio */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Mapa del Sitio</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-white transition-colors duration-300">Inicio</a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition-colors duration-300">Acerca de Nosotros</a>
            </li>
            <li>
              <a href="#facilities" className="hover:text-white transition-colors duration-300">Instalaciones</a>
            </li>
            <li>
              <a href="#clients" className="hover:text-white transition-colors duration-300">Nuestros Clientes</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition-colors duration-300">Contáctenos</a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes Sociales */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Síguenos</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaFacebook className="text-4xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaTwitter className="text-4xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaLinkedin className="text-4xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <FaInstagram className="text-4xl" />
            </a>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Cartonajes Troquelados S.A.S. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;