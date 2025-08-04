import React from 'react';
import HeroSlider from './components/HeroSlider';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import Clients from './components/Clients';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <main>
        <HeroSlider />
        <AboutUs />
        <Facilities />
        <Clients />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}