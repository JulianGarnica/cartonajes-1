import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API
    console.log('Formulario enviado:', formData);
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 background-primary text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 color-secondary"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="background-secondary p-10 rounded-3xl shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <FaEnvelope className="mr-4" /> Envíanos un Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl background-primary border  focus:outline-none focus:ring-2 focus:ring-white-400 text-white placeholder-white"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 rounded-xl background-primary border  focus:outline-none focus:ring-2 focus:ring-white-400 text-white placeholder-white"
                  placeholder="tu.email@ejemplo.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-5 py-3 rounded-xl background-primary border focus:outline-none focus:ring-2 focus:ring-white-400 text-white placeholder-white"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-white color-secondary py-4 px-8 rounded-xl font-bold text-xl shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
              >
                Enviar Mensaje <FaPaperPlane />
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="background-secondary p-10 rounded-3xl shadow-xl flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-6">Información de Contacto</h3>
            <ul className="space-y-6 text-lg">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-3xl mr-4 color-primary" />
                <span>Cl. 8A # 36 - 08, Zipaquirá, Cundinamarca</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-3xl mr-4 color-primary" />
                <span>(1) 852 0366 - 852 0946</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-3xl mr-4 color-primary" />
                <span>info@cartonajestroquelados.com</span>
              </li>
            </ul>
            <p className="mt-8 text-lg">
              ¿Tienes alguna pregunta o necesitas una cotización? No dudes en contactarnos. ¡Estamos aquí para ayudarte!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;