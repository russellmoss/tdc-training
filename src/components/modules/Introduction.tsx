import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { introduction } from '../../data/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWineGlass, 
  faUsers, 
  faChartLine, 
  faGraduationCap,
  faClock
} from '@fortawesome/free-solid-svg-icons';

const Introduction: React.FC = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = introduction.content.split('\n\n');

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sections.length]);

  return (
    <div className="module-content">
      <h2 className="module-title">{introduction.title}</h2>
      
      <div className="intro-grid">
        <div className="intro-card">
          <FontAwesomeIcon icon={faWineGlass} className="intro-icon" />
          <h3>What is TDC?</h3>
          <p>A loyalty program designed to make wine more accessible to Bhutanese citizens while building customer loyalty.</p>
        </div>

        <div className="intro-card">
          <FontAwesomeIcon icon={faUsers} className="intro-icon" />
          <h3>Two-Tier System</h3>
          <p>Special benefits for trade members (restaurants, hotels, distributors) and non-trade members.</p>
        </div>

        <div className="intro-card">
          <FontAwesomeIcon icon={faChartLine} className="intro-icon" />
          <h3>Earn & Redeem</h3>
          <p>Collect points through purchases and referrals, redeem for products and special offers.</p>
        </div>
      </div>

      <div className="system-overview">
        <h3>System Components</h3>
        <div className="system-cards">
          <div className="system-card">
            <h4>Admin Dashboard</h4>
            <p>Manage members, transactions, and system settings</p>
            <a 
              href="https://thunder-dragon.netlify.app/admin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="system-link"
            >
              Access Dashboard
            </a>
          </div>
          <div className="system-card">
            <h4>Member Portal</h4>
            <p>View points, track history, manage profile</p>
            <a 
              href="https://thunder-dragon.netlify.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="system-link"
            >
              Access Portal
            </a>
          </div>
        </div>
      </div>

      <div className="training-info">
        <div className="info-item">
          <FontAwesomeIcon icon={faGraduationCap} className="info-icon" />
          <span>Complete training in one sitting</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faClock} className="info-icon" />
          <span>45-60 minutes duration</span>
        </div>
      </div>

      <div className="navigation-controls">
        <div></div>
        <Link to="/module/module1.1" className="nav-button start-button">
          Start Training
        </Link>
      </div>
    </div>
  );
};

export default Introduction; 