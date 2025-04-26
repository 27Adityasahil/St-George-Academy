import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    if (menuOpen) setMenuOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'campus', label: 'Campus' },
    { id: 'programs', label: 'Programs' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'fees', label: 'Fees' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        <Link to="hero" spy={true} smooth={true} duration={500} className="navbar-logo" onClick={closeMenu}>
          <h1> <span>St. George Academy</span></h1>
        </Link>
        
        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={activeSection === item.id ? 'active' : ''}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="navbar-cta">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-secondary"
              onClick={closeMenu}
            >
              Enroll Now
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;