import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Campus.css';
import { FaSchool, FaBookOpen, FaFlask, FaLaptop, FaFutbol, FaMusic, FaUtensils, FaBus } from 'react-icons/fa';

const Campus = () => {
  const [activeTab, setActiveTab] = useState('facilities');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const facilities = [
    {
      icon: <FaSchool />,
      title: "Modern Classrooms",
      description: "Spacious, air-conditioned classrooms equipped with interactive smartboards and comfortable furniture designed for collaborative learning."
    },
    {
      icon: <FaFlask />,
      title: "Science Labs",
      description: "State-of-the-art physics, chemistry, and biology laboratories with the latest equipment for practical experiments and research."
    },
    {
      icon: <FaLaptop />,
      title: "Computer Labs",
      description: "computer labs with high-speed internet and the latest hardware and software for digital literacy and programming classes."
    },
    {
      icon: <FaFutbol />,
      title: "Sports Facilities",
      description: "Expansive sports complex including a football field, basketball courts, indoor gymnasium, and swimming pool for physical education."
    },
    // {
    //   icon: <FaBookOpen />,
    //   title: "Library",
    //   description: "Comprehensive library with over 20,000 books, digital resources, study areas, and dedicated reading zones for different age groups."
    // },
    // {
    //   icon: <FaMusic />,
    //   title: "Arts Center",
    //   description: "Dedicated spaces for visual arts, music, dance, and theater, including a fully-equipped auditorium for performances and events."
    // },
    // {
    //   icon: <FaUtensils />,
    //   title: "Cafeteria",
    //   description: "Modern cafeteria serving nutritious meals prepared fresh daily, with options to accommodate various dietary requirements."
    // },
    {
      icon: <FaBus />,
      title: "Transportation",
      description: "Fleet of well-maintained buses with experienced drivers providing safe transportation for students across the city."
    }
  ];
  
  const campusLife = [
    {
      image: "https://cdn.dnaindia.com/sites/default/files/2021/02/12/957085-cbse-board-exams-2021.jpg?im=FitAndFill=(1200,900)",
      title: "Academic Excellence",
      description: "Our students consistently excel in board examinations, achieving outstanding results with an average score ranging from 85% to 90%."
    },
    {
      image: "https://cdn.pixabay.com/photo/2013/12/20/17/00/rangoli-231339_1280.jpg",
      title: "Extracurricular Activities",
      description: "We offer a variety of extracurricular activities, including Rangoli competitions, science exhibitions, Diya making contests, etc."
    },
    {
      image: "https://images.pexels.com/photos/3800541/pexels-photo-3800541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Sports Programs",
      description: "Our athletics program features competitive events in cricket and various athletic disciplines such as running, high jump, tug of war, and relay races, promoting teamwork, discipline, and physical fitness."
    }
  ];

  return (
    <section className="campus" id="campus">
      <div className="container">
        <h2 className="section-title">Our Campus</h2>
        
        <div className="campus-tabs">
          <button 
            className={`tab-button ${activeTab === 'facilities' ? 'active' : ''}`}
            onClick={() => setActiveTab('facilities')}
          >
            Facilities
          </button>
          <button 
            className={`tab-button ${activeTab === 'campus-life' ? 'active' : ''}`}
            onClick={() => setActiveTab('campus-life')}
          >
            Campus Life
          </button>
        </div>
        
        <div 
          ref={ref}
          className={`tab-content ${inView ? 'visible' : ''}`}
        >
          {activeTab === 'facilities' ? (
            <div className="facilities-grid">
              {facilities.map((facility, index) => (
                <div 
                  key={index} 
                  className="facility-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="facility-icon">
                    {facility.icon}
                  </div>
                  <h3>{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="campus-life-content">
              {campusLife.map((item, index) => (
                <div 
                  key={index} 
                  className="campus-life-card"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="campus-life-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="campus-life-text">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Campus;