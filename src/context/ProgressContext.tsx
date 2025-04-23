// src/context/ProgressContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedModules: string[];
  markModuleAsComplete: (moduleId: string) => void;
  isModuleComplete: (moduleId: string) => boolean;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType>({
  completedModules: [],
  markModuleAsComplete: () => {},
  isModuleComplete: () => false,
  resetProgress: () => {}
});

export function useProgress() {
  return useContext(ProgressContext);
}

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedModules, setCompletedModules] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedModules');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('completedModules', JSON.stringify(completedModules));
  }, [completedModules]);

  const markModuleAsComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  const isModuleComplete = (moduleId: string) => {
    return completedModules.includes(moduleId);
  };

  const resetProgress = () => {
    setCompletedModules([]);
  };

  const value = {
    completedModules,
    markModuleAsComplete,
    isModuleComplete,
    resetProgress
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}; 