import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuizSetup from './components/QuizSetup';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizSetup />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </Router>
  );
};

export default App;
