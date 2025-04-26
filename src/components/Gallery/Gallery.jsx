import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Gallery.css';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'science', label: 'Science Exhibition' },
    { id: 'sports', label: 'Sports Events' },
    { id: 'classroom', label: 'Classroom Activities' },
    { id: 'arts', label: 'Arts & Culture' }
  ];
  
  const galleryItems = [
    {
      id: 1,
      category: 'science',
      title: 'Annual Science Exhibition',
      image: 'https://images.pexels.com/photos/8926546/pexels-photo-8926546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#science-exhibition'
    },
    
    {
      id: 2,
      category: 'science',
      title: 'Chemistry Experiments',
      image: 'https://images.pexels.com/photos/8326490/pexels-photo-8326490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#chemistry-lab'
    },
    {
      id: 3,
      category: 'sports',
      title: 'Annual Sports Day',
      image: 'https://images.pexels.com/photos/8224733/pexels-photo-8224733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#sports-day'
    },
    
    
    {
      id: 4,
      category: 'classroom',
      title: 'Interactive Learning',
      image: 'https://images.pexels.com/photos/8422381/pexels-photo-8422381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#classroom-activities'
    },
    {
      id: 5,
      category: 'classroom',
      title: 'Group Projects',
      image: 'https://images.pexels.com/photos/8617793/pexels-photo-8617793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#group-projects'
    },
    
    {
      id: 6,
      category: 'arts',
      title: 'Rangoli Competition',
      image: 'https://images.pexels.com/photos/7095514/pexels-photo-7095514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      link: '#school-concert'
    }
  ];
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">Photo Gallery</h2>
        
        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div 
          ref={ref}
          className={`gallery-grid ${inView ? 'visible' : ''}`}
        >
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="gallery-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a href={item.link} className="gallery-link">
                <div className="gallery-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <span>View Gallery</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;