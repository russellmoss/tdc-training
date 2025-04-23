import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import YouTube from 'react-youtube';
import { getAllModules, getNextModuleId, getPreviousModuleId } from '../../data/modules';
import { useProgress } from '../../context/ProgressContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faArrowRight,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';

const ModuleContent: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const navigate = useNavigate();
  const { markModuleAsComplete } = useProgress();
  
  const allModules = getAllModules();
  const currentModule = allModules.find(m => m.id === moduleId);
  
  const nextModuleId = moduleId ? getNextModuleId(moduleId) : null;
  const prevModuleId = moduleId ? getPreviousModuleId(moduleId) : null;
  
  // Scroll to top when module changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [moduleId]);
  
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
  
  const parseExercise = (exercise: string) => {
    const parts = exercise.split('\n\n');
    const scenario = parts[0];
    const tasks = parts.slice(1).filter(part => part.trim() !== '');
    
    return { scenario, tasks };
  };
  
  const { scenario, tasks } = parseExercise(currentModule.exercise);
  
  return (
    <div className="module-content">
      <div className="module-header">
        <h2 className="module-title">{currentModule.title}</h2>
        <div className="module-description">{currentModule.description}</div>
      </div>
      
      <div className="video-container">
        <YouTube videoId={currentModule.videoId} opts={opts} />
      </div>
      
      <div className="exercise-container">
        <div className="exercise-scenario">
          <div className="scenario-icon">🎯</div>
          <h3>Scenario</h3>
          <p>{scenario}</p>
        </div>

        <div className="exercise-tasks">
          <h3>Your Tasks</h3>
          {tasks.map((task, index) => (
            <div key={index} className="task-card">
              <div className="task-number">{index + 1}</div>
              <div className="task-content">
                <p>{task}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="exercise-tips">
          <h3>
            <FontAwesomeIcon icon={faLightbulb} className="tip-icon" />
            Pro Tips
          </h3>
          <ul>
            <li>Watch the video carefully before starting the exercise</li>
            <li>Take notes if needed</li>
            <li>Complete all tasks in order</li>
            <li>Verify your work before moving on</li>
          </ul>
        </div>
      </div>
      
      <div className="navigation-controls">
        {prevModuleId ? (
          <Link to={`/module/${prevModuleId}`} className="nav-button prev-button">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Previous</span>
          </Link>
        ) : (
          <Link to="/" className="nav-button prev-button">
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Back to Introduction</span>
          </Link>
        )}
        
        <button onClick={handleNext} className="nav-button next-button">
          <span>{nextModuleId ? 'Next' : 'Complete Training'}</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ModuleContent; 