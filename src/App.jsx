import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Programs from './components/Programs/Programs';
import Gallery from './components/Gallery/Gallery';
import FeesStructure from './components/FeesStructure/FeesStructure';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { useInView } from 'react-intersection-observer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Function to handle section visibility and update active state
  const SectionObserver = ({ id, children }) => {
    const { ref, inView } = useInView({
      threshold: 0.3,
      triggerOnce: false
    });
    
    useEffect(() => {
      if (inView) {
        setActiveSection(id);
      }
    }, [inView, id]);
    
    return (
      <div ref={ref} id={id} className="section-container">
        {children}
      </div>
    );
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      
      <SectionObserver id="hero">
        <Hero />
      </SectionObserver>
      
      <SectionObserver id="about">
        <About />
      </SectionObserver>
      
      <SectionObserver id="campus">
        <Campus />
      </SectionObserver>
      
      <SectionObserver id="programs">
        <Programs />
      </SectionObserver>
      
      <SectionObserver id="gallery">
        <Gallery />
      </SectionObserver>
      
      <SectionObserver id="fees">
        <FeesStructure />
      </SectionObserver>
      
      <SectionObserver id="testimonials">
        <Testimonials />
      </SectionObserver>
      
      <SectionObserver id="contact">
        <Contact />
      </SectionObserver>
      
      <Footer />
    </div>
  );
}

export default App;