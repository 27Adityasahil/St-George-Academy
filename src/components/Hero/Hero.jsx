import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Excellence in Education",
      subtitle: "Nurturing minds, building character, inspiring excellence",
      cta: "Explore Programs",
      image: "https://images.pexels.com/photos/8617942/pexels-photo-8617942.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      title: "Discover Your Potential",
      subtitle: "A supportive environment for academic and personal growth",
      cta: "Learn More",
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=1920"
    },
    {
      title: "Building Future Leaders",
      subtitle: "Comprehensive education for a rapidly changing world",
      cta: "View Campus",
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920"
    }
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [slides.length]);
  
  return (
    <section className="hero" id="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-subtitle">{slide.subtitle}</p>
              <div className="hero-cta">
                <Link 
                  to={index === 0 ? "programs" : index === 1 ? "about" : "campus"} 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500} 
                  className="btn"
                >
                  {slide.cta}
                </Link>
                <Link 
                  to="contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-80} 
                  duration={500} 
                  className="btn btn-secondary"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="hero-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;