import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link, useLocation } from 'react-router-dom';
import { modules } from '../../data/modules';
import { useProgress } from '../../context/ProgressContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle, 
  faChevronRight,
  faHome,
  faBars
} from '@fortawesome/free-solid-svg-icons';

const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isModuleComplete } = useProgress();
  const location = useLocation();

  const handleStateChange = (state: { isOpen: boolean }) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <button className="burger-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <Menu 
        isOpen={menuOpen}
        onStateChange={handleStateChange}
        customBurgerIcon={false}
        width={300}
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
      >
        <div className="menu-header">
          <h3>Training Modules</h3>
        </div>

        <Link 
          to="/" 
          className={`menu-item ${location.pathname === '/' ? 'active' : ''}`}
          onClick={closeMenu}
        >
          <FontAwesomeIcon icon={faHome} className="menu-icon" />
          <span>Introduction</span>
        </Link>
        
        {modules.map((unit) => (
          <div key={unit.id} className="menu-unit-container">
            <div className="menu-unit">
              <FontAwesomeIcon icon={faChevronRight} className="unit-icon" />
              <span>{unit.title}</span>
            </div>
            <div className="submodules-container">
              {unit.submodules?.map((module) => (
                <Link 
                  key={module.id}
                  to={`/module/${module.id}`}
                  className={`submodule-item ${isModuleComplete(module.id) ? 'completed' : ''} ${location.pathname === `/module/${module.id}` ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="module-title">{module.title}</span>
                  {isModuleComplete(module.id) && (
                    <FontAwesomeIcon icon={faCheckCircle} className="completed-icon" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Menu>
    </>
  );
};

export default Navigation; 