import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return <div className="bg-gradient-to-b from-black to-[#0E0B1F] text-white min-h-screen w-full overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>;
}