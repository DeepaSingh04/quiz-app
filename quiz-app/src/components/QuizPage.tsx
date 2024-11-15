import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const QuizPage: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(20);

  useEffect(() => {
    const fetchQuestions = async () => {
      const settings = JSON.parse(localStorage.getItem('quizSettings') || '{}');
      const { category, difficulty, numQuestions } = settings;

      const response = await axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`);
      setQuestions(response.data.results);
    };

    fetchQuestions();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleNext();
          return 20; // Reset timer for next question
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentQuestionIndex]);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(20);
    } else {
      alert(`Quiz completed! Your score: ${score}`);
    }
  };

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setScore(score + 1);
    }
    handleNext();
  };

  if (!questions.length) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const options = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer].sort();

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1} / {questions.length}</h2>
      <p>{currentQuestion.question}</p>
      {options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)}>{option}</button>
      ))}
      <p>Time left: {timer}s</p>
    </div>
  );
};

export default QuizPage;
