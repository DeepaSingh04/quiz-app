import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSetup: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('9');
  const [difficulty, setDifficulty] = useState('easy');
  const [numQuestions, setNumQuestions] = useState(5);
  const navigate = useNavigate();

  const startQuiz = () => {
    // Save quiz settings to local storage or state
    localStorage.setItem('quizSettings', JSON.stringify({ name, category, difficulty, numQuestions }));
    navigate('/quiz');
  };

  return (
    <div>
      <h1>Quiz Setup</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="9">General Knowledge</option>
        <option value="21">Sports</option>
        <option value="22">Geography</option>
      </select>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input
        type="number"
        min="1"
        max="20"
        value={numQuestions}
        onChange={(e) => setNumQuestions(Number(e.target.value))}
      />
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default QuizSetup;
