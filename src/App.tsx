import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import Introduction from './components/modules/Introduction';
import ModuleContent from './components/modules/ModuleContent';
import Congratulations from './components/modules/Congratulations';

function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <Router>
          <div id="outer-container">
            <div id="page-wrap">
              <div className="App">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="*" element={
                    <ProtectedRoute>
                      <>
                        <Navigation />
                        <div className="content-container">
                          <Header />
                          <Routes>
                            <Route path="/" element={<Introduction />} />
                            <Route path="/module/:moduleId" element={<ModuleContent />} />
                            <Route path="/congratulations" element={<Congratulations />} />
                          </Routes>
                        </div>
                      </>
                    </ProtectedRoute>
                  } />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </ProgressProvider>
    </AuthProvider>
  );
}

export default App;
