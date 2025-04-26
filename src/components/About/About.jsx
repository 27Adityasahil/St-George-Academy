import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const { ref: sectionRef, inView: sectionVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const { ref: messageRef, inView: messageVisible } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Our School</h2>
        
        <div 
          ref={sectionRef} 
          className={`about-content ${sectionVisible ? 'visible' : ''}`}
        >
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="School building" 
            />
          </div>
          <div className="about-text">
            <h3>Our Journey of Excellence</h3>
            <p>
              Established in 1985, St. George Academy has been at the forefront of educational innovation for over three decades. Our commitment to academic excellence, character development, and holistic growth has made us one of the most respected educational institutions in the region.
            </p>
            <p>
              At St. George Academy, we believe that education extends beyond textbooks. Our unique teaching methodology combines traditional learning with modern pedagogical approaches to create an environment where students don't just memorize information, but truly understand concepts and develop critical thinking skills.
            </p>
            <p>
              Our state-of-the-art facilities, dedicated faculty, and comprehensive curriculum ensure that students receive a well-rounded education that prepares them for future academic pursuits and life challenges. We take pride in nurturing young minds and helping them discover their potential.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">35+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Dedicated Staff</span>
              </div>
              
            </div>
          </div>
        </div>
        
        <div 
          ref={messageRef} 
          className={`leadership-messages ${messageVisible ? 'visible' : ''}`}
        >
          <div className="message-card">
            <div className="message-image">
              <img 
                src="https://images.pexels.com/photos/5212665/pexels-photo-5212665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Principal" 
              />
            </div>
            <div className="message-content">
              <h3>Principal's Message</h3>
              <p>
                "At St. George Academy, we believe in nurturing not just academic excellence, but also character, creativity, and a sense of social responsibility. Our goal is to create an environment where students feel empowered to explore, question, and grow. We focus on providing personalized attention to each student, recognizing their unique talents and helping them overcome challenges."
              </p>
              <p className="message-signature">— Dr. Sarah Johnson, Principal</p>
            </div>
          </div>
          
          <div className="message-card">
            <div className="message-image">
              <img 
                src="https://images.pexels.com/photos/5553050/pexels-photo-5553050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Director" 
              />
            </div>
            <div className="message-content">
              <h3>Director's Message</h3>
              <p>
                "Education is the cornerstone of progress, both for individuals and for society. At St. George Academy, we are committed to providing an education that balances academic rigor with the development of essential life skills. Our curriculum is designed to foster critical thinking, problem-solving abilities, and effective communication — skills that are crucial in today's rapidly evolving world."
              </p>
              <p className="message-signature">— Michael Anderson, Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;