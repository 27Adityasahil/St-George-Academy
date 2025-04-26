import { useInView } from 'react-intersection-observer';
import './FeesStructure.css';

const FeesStructure = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  
  const feesData = [
    { grade: '1', admission: '₹25,000', tuition: '₹60,000', activity: '₹15,000', total: '₹100,000' },
    { grade: '2', admission: '₹25,000', tuition: '₹65,000', activity: '₹15,000', total: '₹105,000' },
    { grade: '3', admission: '₹25,000', tuition: '₹70,000', activity: '₹15,000', total: '₹110,000' },
    { grade: '4', admission: '₹25,000', tuition: '₹75,000', activity: '₹15,000', total: '₹115,000' },
    { grade: '5', admission: '₹25,000', tuition: '₹80,000', activity: '₹20,000', total: '₹125,000' },
    { grade: '6', admission: '₹30,000', tuition: '₹85,000', activity: '₹20,000', total: '₹135,000' },
    { grade: '7', admission: '₹30,000', tuition: '₹90,000', activity: '₹20,000', total: '₹140,000' },
    { grade: '8', admission: '₹30,000', tuition: '₹95,000', activity: '₹25,000', total: '₹150,000' },
    { grade: '9', admission: '₹35,000', tuition: '₹100,000', activity: '₹25,000', total: '₹160,000' },
    { grade: '10', admission: '₹35,000', tuition: '₹110,000', activity: '₹25,000', total: '₹170,000' }
  ];
  
  const notes = [
    "Fee payment can be made in quarterly installments (April, July, October, January).",
    "A 5% discount is offered for full annual payment made before April 30th.",
    "Sibling discount: 10% reduction in tuition fee for the second child and 15% for the third child.",
    "Admission fee is a one-time payment for new students only.",
    "Activity fee covers sports, laboratory, library, and extracurricular activities."
  ];

  return (
    <section className="fees" id="fees">
      <div className="container">
        <h2 className="section-title">Fees Structure</h2>
        
        <div 
          ref={ref}
          className={`fees-container ${inView ? 'visible' : ''}`}
        >
          <div className="fees-table-wrapper">
            <table className="fees-table">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Admission Fee</th>
                  <th>Tuition Fee</th>
                  <th>Activity Fee</th>
                  <th>Total (Annual)</th>
                </tr>
              </thead>
              <tbody>
                {feesData.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                    <td><strong>{row.grade}</strong></td>
                    <td>{row.admission}</td>
                    <td>{row.tuition}</td>
                    <td>{row.activity}</td>
                    <td><strong>{row.total}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="fees-notes">
            <h3>Important Notes:</h3>
            <ul>
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
          
          <div className="fees-cta">
            <p>For more information about our fee structure or payment options, please contact our finance office.</p>
            <a href="#contact" className="btn">Contact Finance Office</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeesStructure;