import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaBuilding } from 'react-icons/fa';

const Facilities = () => {
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1121.1379676764761!2d-73.98029206340617!3d5.029871939150215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9975ac2e9727%3A0x437fb6dc29dd7ea9!2sCartonajes%20Troquelados%20S.A.S!5e1!3m2!1ses!2sco!4v1754272754147!5m2!1ses!2sco"; // Reemplaza con la URL real de Google Maps de tu ubicación

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          className="text-5xl font-extrabold text-center text-gray-900 mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Nuestras Instalaciones
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cartonajes Troquelados S.A.S."
            ></iframe>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-200">
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="text-5xl text-green-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-800">Encuéntranos Aquí</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Estamos ubicados estratégicamente para servirte mejor. Ven y conoce nuestras modernas instalaciones.
            </p>
            <p className="text-xl font-semibold text-gray-800 flex items-center">
              <FaBuilding className="mr-3 text-blue-500" />
              Dirección: Cl. 8A # 36 - 08, Zipaquirá, Cundinamarca
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Facilities;