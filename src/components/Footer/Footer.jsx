import { Link } from 'react-scroll';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-info">
              <h3 className="footer-logo"> <span> St. George Academy</span></h3>
              <p>
                Excellence in education since 1985. Nurturing young minds and building future leaders through comprehensive education and holistic development.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-link">
                  <FaYoutube />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="programs" spy={true} smooth={true} offset={-80} duration={500}>
                    Programs
                  </Link>
                </li>
                <li>
                  <Link to="gallery" spy={true} smooth={true} offset={-80} duration={500}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="fees" spy={true} smooth={true} offset={-80} duration={500}>
                    Fees Structure
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Programs</h4>
              <ul>
                <li><a href="#elementary">Elementary (KG-5)</a></li>
                <li><a href="#middleschool">Middle School (6-8)</a></li>
                <li><a href="#highschool">High School Prep (9-10)</a></li>
                <li><a href="#extracurricular">Extracurricular Activities</a></li>
                <li><a href="#summercamp">Summer Programs</a></li>
              </ul>
            </div>
            
            <div className="footer-contact">
              <h4>Contact Info</h4>
              <ul>
                <li>
                  <strong>Address:</strong> Purandarpur, FCI road, Near Arjun Vihar Apartment, Patna, Bihar - 800001
                </li>
                <li>
                  <strong>Phone:</strong> +919801132202
                </li>
                <li>
                  <strong>Email:</strong> info@stgeorgeacademy.edu
                </li>
                <li>
                  <strong>Working Hours:</strong> 8:00 AM - 4:00 PM, Monday to Friday
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>© {currentYear} St. George Academy. All Rights Reserved | Privacy Policy | Terms of Service</p>
          <p className="attribution">Designed with <span role="img" aria-label="love">❤️</span> for excellence in education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;