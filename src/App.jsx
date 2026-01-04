import React from 'react';
import Navbar from './components/Navbar';
// Placeholder imports for components we are about to build
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProductExplorer from './components/InteractiveProduct';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <ProductExplorer />
      <Skills />
      <Contact />

      <footer className="bg-black py-8 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Sanket Patel. All rights reserved.</p>
        <p className="mt-2">Created with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;
