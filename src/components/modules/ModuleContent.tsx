import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import { getAllModules, getNextModuleId, getPreviousModuleId } from '../../data/modules';
import { useProgress } from '../../context/ProgressContext';

const ModuleContent: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { markModuleAsComplete } = useProgress();
  
  const allModules = getAllModules();
  const currentModule = allModules.find(m => m.id === moduleId);
  
  const nextModuleId = moduleId ? getNextModuleId(moduleId) : null;
  const prevModuleId = moduleId ? getPreviousModuleId(moduleId) : null;
  
  useEffect(() => {
    if (!currentModule) {
      navigate('/');
    }
  }, [currentModule, navigate]);
  
  if (!currentModule) {
    return <div>Loading...</div>;
  }
  
  const handleNext = () => {
    if (moduleId) {
      markModuleAsComplete(moduleId);
    }
    
    if (nextModuleId) {
      navigate(`/module/${nextModuleId}`);
    } else {
      navigate('/congratulations');
    }
  };
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  
  return (
    <div className="module-content">
      <h2 className="module-title">{currentModule.title}</h2>
      <div className="module-description">{currentModule.description}</div>
      
      <div className="video-container">
        <YouTube videoId={currentModule.videoId} opts={opts} />
      </div>
      
      <h3>Exercise:</h3>
      <div className="exercise-content">
        {currentModule.exercise.split('\n\n').map((paragraph, index) => (
          <p key={index} style={{ marginBottom: '15px', whiteSpace: 'pre-line' }}>{paragraph}</p>
        ))}
      </div>
      
      <div className="navigation-controls">
        {prevModuleId ? (
          <Link to={`/module/${prevModuleId}`} className="nav-button">
            Previous
          </Link>
        ) : (
          <Link to="/" className="nav-button">
            Back to Introduction
          </Link>
        )}
        
        <button onClick={handleNext} className="nav-button">
          {nextModuleId ? 'Next' : 'Complete Training'}
        </button>
      </div>
    </div>
  );
};

export default ModuleContent; 