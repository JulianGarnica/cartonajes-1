import React from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaRocket } from 'react-icons/fa';

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 background-primary text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-5xl font-extrabold text-center color-secondary mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Acerca de Nosotros
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <FaRocket className="text-5xl color-secondary mr-4" />
              <h3 className="text-3xl font-bold text-gray-800">Nuestra Misión</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser líderes en la fabricación de empaques de cartón troquelado, ofreciendo soluciones innovadoras y sostenibles que superen las expectativas de nuestros clientes, contribuyendo al éxito de sus productos y al cuidado del medio ambiente.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-10 rounded-3xl shadow-xl border border-gray-200"
            variants={itemVariants}
          >
            <div className="flex items-center mb-6">
              <FaEye className="text-5xl color-secondary mr-4" />
              <h3 className="text-3xl font-bold text-gray-800">Nuestra Visión</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Consolidarnos como el referente principal en la industria de empaques, reconocidos por nuestra excelencia operativa, compromiso con la calidad, innovación constante y responsabilidad social, expandiendo nuestra presencia a nivel nacional e internacional.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;