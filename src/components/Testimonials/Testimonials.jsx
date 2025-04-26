import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Testimonials.css';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('teachers');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const teacherTestimonials = [
    {
      name: "Mrs. xyz",
      position: "Mathematics Teacher",
      years: "15 years at St. George Academy",
      quote: "Teaching at St. George Academy has been the most rewarding experience of my career. The collaborative environment among faculty and the school's commitment to professional development has allowed me to grow as an educator. Our students are curious, motivated, and respectful, making each day in the classroom a joy.",
      image: "https://images.pexels.com/photos/5212321/pexels-photo-5212321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Mr. Jane",
      position: "Science Department Head",
      years: "10 years at St. George Academy",
      quote: "What sets St. George Academy apart is our focus on experiential learning. The administration supports innovative teaching methods and provides resources for hands-on experiments and projects. I've seen countless students develop a genuine passion for science through our approach to education.",
      image: "https://images.pexels.com/photos/8617612/pexels-photo-8617612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Ms. Priya Sharma",
      position: "English Literature Teacher",
      years: "8 years at St. George Academy",
      quote: "The diverse perspectives and backgrounds of our student body create rich classroom discussions. At St. George Academy, we don't just teach subjects; we foster critical thinking and empathy. The small class sizes allow me to provide personalized guidance to each student, helping them find their unique voice.",
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const studentTestimonials = [
    {
      name: "Aiden Thompson",
      grade: "Grade 10 Student",
      quote: "Before joining St. George Academy in 7th grade, I struggled with math and science. The teachers here took the time to understand my learning style and helped me build confidence. Now I'm taking advanced placement courses and even won the regional science competition last year!",
      image: "https://images.pexels.com/photos/5905469/pexels-photo-5905469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sophia Garcia",
      grade: "Grade 8 Student",
      quote: "What I love most about St. George Academy is the community. Everyone is so supportive and encouraging. The teachers challenge us but also make learning fun. I've made amazing friends and discovered my passion for debate and public speaking through the school's extracurricular programs.",
      image: "https://images.pexels.com/photos/5905905/pexels-photo-5905905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Ethan Patel",
      grade: "Grade 9 Student",
      quote: "Transferring to St. George Academy was the best decision my parents made for my education. The teachers genuinely care about each student's success. I especially appreciate how they connect classroom lessons to real-world applications, making everything we learn feel relevant and important.",
      image: "https://images.pexels.com/photos/5212340/pexels-photo-5212340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];
  
  const activeTestimonials = activeTab === 'teachers' ? teacherTestimonials : studentTestimonials;
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % activeTestimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + activeTestimonials.length) % activeTestimonials.length);
  };
  
  // Reset slide index when changing tabs
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeTab]);
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, activeTestimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        
        <div className="testimonials-tabs">
          <button 
            className={`tab-button ${activeTab === 'teachers' ? 'active' : ''}`}
            onClick={() => setActiveTab('teachers')}
          >
            Teachers' Testimonials
          </button>
          <button 
            className={`tab-button ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            Students' Testimonials
          </button>
        </div>
        
        <div 
          ref={ref}
          className={`testimonials-slider ${inView ? 'visible' : ''}`}
        >
          <div className="testimonials-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {activeTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-content">
                    <div className="quote-icon">❝</div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-author">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.position || testimonial.grade}</p>
                      {testimonial.years && <p className="testimonial-years">{testimonial.years}</p>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="slider-controls">
            <button className="slider-btn prev" onClick={prevSlide}>❮</button>
            <div className="slider-dots">
              {activeTestimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button className="slider-btn next" onClick={nextSlide}>❯</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;