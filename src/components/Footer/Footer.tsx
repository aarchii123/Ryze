import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">Ryze</h3>
            <p className="footer-description">
              AI-powered advertising management that maximizes your ROI and minimizes your workload.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Twitter" className="social-link">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="social-link">LinkedIn</a>
              <a href="#" aria-label="Facebook" className="social-link">Facebook</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              <li><Link to="/features">Features</Link></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#demo">Book a Demo</a></li>
              <li><a href="#">Integrations</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Ryze. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

