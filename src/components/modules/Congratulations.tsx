import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { Link } from 'react-router-dom';

const Congratulations: React.FC = () => {
  const { width, height } = useWindowSize();
  const [modalOpen, setModalOpen] = useState(true);

  return (
    <div className="module-content">
      <div className="confetti-container">
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={true}
        />
      </div>
      
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button 
              className="close-modal"
              onClick={() => setModalOpen(false)}
            >
              ×
            </button>
            <h2>Congratulations!</h2>
            <p>You are now a Thunder Dragon master!</p>
            <p style={{ marginTop: '20px' }}>
              You have completed all the training modules and are now fully equipped to use the Thunder Dragon Club system.
            </p>
            <button 
              className="button"
              style={{ marginTop: '20px' }}
              onClick={() => setModalOpen(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
      
      <h2 className="module-title">Training Complete!</h2>
      <p>
        Congratulations on completing the Thunder Dragon Club training program! You are now equipped with the knowledge and skills to effectively use the system.
      </p>
      <p style={{ marginTop: '20px' }}>
        Remember that the admin dashboard is located at <a href="https://thunder-dragon.netlify.app/admin" target="_blank" rel="noopener noreferrer">https://thunder-dragon.netlify.app/admin</a>
      </p>
      <p>
        And the member portal is located at <a href="https://thunder-dragon.netlify.app" target="_blank" rel="noopener noreferrer">https://thunder-dragon.netlify.app</a>
      </p>
      
      <div className="navigation-controls" style={{ marginTop: '30px' }}>
        <Link to="/" className="nav-button">
          Back to Introduction
        </Link>
      </div>
    </div>
  );
};

export default Congratulations; 