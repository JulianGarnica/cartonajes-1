import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const sliderImages = [
  '/img/imagen-1.jpg',
  '/img/imagen-2.jpg',
  '/img/imagen-3.jpg'
];

const HeroSlider = () => {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {sliderImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${src})` }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center text-white p-8 bg-black bg-opacity-40 rounded-lg"
              >
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
                  Cartonajes Troquelados S.A.S.
                </h1>
                <p className="text-xl md:text-2xl font-medium drop-shadow-md">
                  Innovación en empaques para un futuro sostenible.
                </p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;