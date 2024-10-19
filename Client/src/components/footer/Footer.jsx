import './Footer.css';
import { FaRegAddressBook } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

function Footer() {
  return (
    <footer id="Footer">
    <div className="container ">
      <div className="row w-100 p-3">
            <div className="footer-1 d-flex flex-column justify-content-center col-3">
                <h2>Travel with us</h2>
            </div>
            <div className="footer-2 col-3 fot-info">
                <h3>Dekho Apna Desh!</h3>
                <ul>
                    <li><a href="https://indianculture.gov.in/">Indian Culture</a></li>
                    <li><a href="https://www.incredibleindia.org/content/incredible-india-v2/en.html">Incredible!ndia</a></li>
                    <li><a href="http://www.indiaculture.nic.in/hi">Ministry of Culture</a></li>
                    <li><a href="https://swachhbharatmission.gov.in/SBMCMS/index.htm">Swachh Bharat</a></li>
                </ul>
            </div>
            <div className="footer-3 col-3 fot-info">
                <h3>Visit For More</h3>
                <ul>
                    <li><a href="https://www.mygov.in/">My Government</a></li>
                    <li><a href="https://www.digitalindia.gov.in/">Digital India</a></li>
                    <li><a href="https://tourism.gov.in/">Ministry of Tourism</a></li>
                </ul>
            </div>
            <div className="footer-4 col-3 fot-info">
                <h3>Contact Us</h3>
                <ul>
                    <li><a href="https://github.com/">GOWTHAM CHOWDARY</a></li>
                    <li><a href="https://github.com/">ABHIRAM GOPISETTI</a></li>
                    <li><a href="https://github.com/">ANNE GRISHMANTH</a></li>
                    <li><a href="https://github.com/">ADAPA HEMESH</a></li>
                </ul>
            </div>
        </div>
    </div>
    <p className="copyright">Developed by GOWTHAM, ABHIRAM, GRISHMANTH, HEMESH</p>
</footer>
  )
}

export default Footer