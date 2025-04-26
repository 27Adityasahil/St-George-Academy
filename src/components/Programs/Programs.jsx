import { useInView } from 'react-intersection-observer';
import './Programs.css';

const Programs = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const programs = [
    {
      title: "Elementary Education",
      grades: "Kindergarten to Grade 5",
      description: "Our elementary program focuses on building strong foundations in literacy, numeracy, and critical thinking. Through a blend of guided instruction and exploratory learning, young students develop essential skills while nurturing their natural curiosity and creativity.",
      features: [
        "Phonics-based reading program",
        "Hands-on mathematics using manipulatives",
        "Integrated science and social studies curriculum",
        "Arts, music, and physical education",
        "Character education and social skills development",
        "Interactive technology and coding fundamentals"
      ],
      image: "https://images.pexels.com/photos/8617834/pexels-photo-8617834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Middle School",
      grades: "Grades 6 to 8",
      description: "Our middle school program is designed to support adolescents during a critical transition period. We offer a rigorous academic curriculum while providing the nurturing environment needed for students to develop independence, responsibility, and a positive self-identity.",
      features: [
        "Advanced mathematics including pre-algebra and algebra",
        "Literature and composition with critical analysis",
        "Lab-based science with research projects",
        "World languages and cultural studies",
        "Leadership development opportunities",
        "Digital citizenship and technology skills"
      ],
      image: "https://images.pexels.com/photos/8617913/pexels-photo-8617913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "High School Preparation",
      grades: "Grades 9 to 10",
      description: "Our upper middle school program prepares students for the challenges of high school and beyond. The curriculum emphasizes deeper academic exploration, independent research, and the development of strong study habits and time management skills essential for future success.",
      features: [
        "Advanced mathematics including geometry and advanced algebra",
        "Advanced sciences with laboratory research",
        "Critical literature analysis and essay writing",
        "Foreign language proficiency",
        "Career exploration and planning",
        "Advanced technology and computer science courses"
      ],
      image: "https://images.pexels.com/photos/8617564/pexels-photo-8617564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="programs" id="programs">
      <div className="container">
        <h2 className="section-title">Academic Programs</h2>
        
        <div 
          ref={ref}
          className={`programs-container ${inView ? 'visible' : ''}`}
        >
          {programs.map((program, index) => (
            <div 
              key={index}
              className="program-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="program-image">
                <img src={program.image} alt={program.title} />
                <div className="program-overlay">
                  <span>{program.grades}</span>
                </div>
              </div>
              <div className="program-content">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <h4>Program Features:</h4>
                <ul className="program-features">
                  {program.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="programs-cta">
          <h3>Ready to join our academic community?</h3>
          <p>Discover how our programs can help your child thrive academically and personally.</p>
          <a href="#contact" className="btn">Contact Us Today</a>
        </div>
      </div>
    </section>
  );
};

export default Programs;