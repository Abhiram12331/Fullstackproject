import './Footer.css';
import { FaRegAddressBook } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

function Footer() {
  return (
    <footer id="Footer">
      <div className="container">
        <div className="row footer-content">
          <div className="col-12 text-center mb-4 footer-title">
            <h2>Travel with Us</h2>
            <p className="tagline">Explore India's rich heritage and culture</p>
          </div>

          <div className="col-md-4 footer-section">
            <h3 className="footer-heading">Dekho Apna Desh!</h3>
            <ul>
              <li><a href="https://indianculture.gov.in/">Indian Culture</a></li>
              <li><a href="https://www.incredibleindia.org/content/incredible-india-v2/en.html">Incredible!ndia</a></li>
              <li><a href="http://www.indiaculture.nic.in/hi">Ministry of Culture</a></li>
              <li><a href="https://swachhbharatmission.gov.in/SBMCMS/index.htm">Swachh Bharat</a></li>
            </ul>
          </div>

          <div className="col-md-4 footer-section">
            <h3 className="footer-heading">Visit For More</h3>
            <ul>
              <li><a href="https://www.mygov.in/">My Government</a></li>
              <li><a href="https://www.digitalindia.gov.in/">Digital India</a></li>
              <li><a href="https://tourism.gov.in/">Ministry of Tourism</a></li>
            </ul>
          </div>

          <div className="col-md-4 footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <ul>
              <li><a href="https://github.com/">Gowtham Chowdary</a></li>
              <li><a href="https://github.com/">Abhiram Gopisetty</a></li>
              <li><a href="https://github.com/">Anne Grishmanth</a></li>
              <li><a href="https://github.com/">Adapa Hemesh</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p className='fg'>Developed by Gowtham, Abhiram, Grishmanth, Hemesh</p>
      </div>
    </footer>
  );
}

export default Footer;
