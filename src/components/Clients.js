import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaStar } from 'react-icons/fa';

const clientLogos = [
  '/img/artesanias.png',
  '/img/peldar.webp',
  '/img/cristar.jpg',
  '/img/discordoba.png',
  '/img/ebel.png',
  '/img/idlcb.jpg',
];

const Clients = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="clients" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Clientes
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {clientLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="p-2 bg-white rounded-2xl shadow-lg border border-gray-200 flex items-center justify-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <img src={logo} alt={`Cliente ${index + 1}`} className="max-h-20 max-w-full object-contain" />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-xl text-gray-700 mt-16 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <FaHandshake className="inline-block text-blue-600 text-3xl mr-3 align-middle" />
          La confianza de nuestros clientes es nuestro mayor activo. Trabajamos día a día para construir relaciones duraderas basadas en la calidad y el compromiso.
          <FaStar className="inline-block text-yellow-500 text-3xl ml-3 align-middle" />
        </motion.p>
      </div>
    </section>
  );
};

export default Clients;