import { useState } from "react";
import { useInView } from "react-intersection-observer";
import "./Contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    childGrade: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formErrors = validateForm();

  //   if (Object.keys(formErrors).length > 0) {
  //     setErrors(formErrors);
  //     return;
  //   }

  //   // Here you would normally send the form data to your backend
  //   console.log("Form submitted:", formData);

  //   // Show success message
  //   setSubmitted(true);

  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: "",
  //     childGrade: "",
  //   });
  // };

  // added code

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    // Send form data to backend
    fetch('http://localhost:5000/api/contact', {   // <-- Important: backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setSubmitted(true);
        } else {
          alert(data.error || 'Something went wrong!');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Failed to send message.');
      });
  
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      childGrade: "",
    });
  };
//end of added code  
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      details: ["+919801132202"],
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["admissions@stgeorgeacademy.edu"],
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      details: [
        "Purandarpur",
        "FCI road, Near Arjun Vihar Apartment",
        "Patna, Bihar - 800001",
      ],
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 4:00 PM",
        "Saturday: 9:00 AM - 12:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>

        <div
          ref={ref}
          className={`contact-container ${inView ? "visible" : ""}`}
        >
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              We're here to answer any questions you may have about our
              programs, admission process, or campus facilities.
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="info-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="info-icon">{info.icon}</div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <h3>Thank You!</h3>
                <p>
                  Your message has been sent successfully. We will get back to
                  you shortly.
                </p>
                <button className="btn" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3>Send us a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && (
                      <span className="error-message">{errors.name}</span>
                    )}
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                      />
                      {errors.email && (
                        <span className="error-message">{errors.email}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number*</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? "error" : ""}
                      />
                      {errors.phone && (
                        <span className="error-message">{errors.phone}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="childGrade">
                        Child's Grade (if applicable)
                      </label>
                      <select
                        id="childGrade"
                        name="childGrade"
                        value={formData.childGrade}
                        onChange={handleChange}
                      >
                        <option value="">Select Grade</option>
                        <option value="Pre-K">Pre-K</option>
                        <option value="KG">Kindergarten</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i} value={`Grade ${i + 1}`}>
                            Grade {i + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message*</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="btn">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="map-container">
        {/* <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.2386905909484!2d77.22767591508063!3d28.59513778243353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x717971125923e5d!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1635247273799!5m2!1sen!2sin" 
          width="100%" 
          height="400" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
          title="School Location"
        ></iframe> */}

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.1706258314216!2d85.12710787543793!3d25.59924587745433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581335af3387%3A0xa05e9bcff7805a9d!2sSt.%20George%20Academy!5e0!3m2!1sen!2sin!4v1745657393506!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          title="School location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
