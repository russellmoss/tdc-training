import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <header className="admin-header">
      <img src="https://i.imgur.com/VyBIzSl.png" alt="Thunder Dragon Club Logo" className="logo" />
      {currentUser && (
        <div className="user-controls">
          <span>{currentUser.email}</span>
          <button 
            onClick={handleLogout} 
            className="button secondary-button"
            style={{ marginLeft: '15px' }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header; 