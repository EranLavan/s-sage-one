import React, { useState } from 'react';
import './App.css';

function App() {
  // properties
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      text: "Which of these countries is the largest by population according to official sources?",
      options: [
        { id: 0, text: "United States", isCorrect: false },
        { id: 1, text: "China", isCorrect: false },
        { id: 2, text: "India", isCorrect: true },
        { id: 3, text: "Indonesia", isCorrect: false },
      ],
    },
    {
      text: "Which of these countries is the largest by population according to official sources?",
      options: [
        { id: 0, text: "Bangladesh", isCorrect: false },
        { id: 1, text: "Pakistan", isCorrect: true },
        { id: 2, text: "Brazil", isCorrect: false },
        { id: 3, text: "Nigeria", isCorrect: false },
      ],
    },
    {
      text: "Which of these countries is the largest by population according to official sources?",
      options: [
        { id: 0, text: "Japan", isCorrect: false },
        { id: 1, text: "Ethiopia", isCorrect: false },
        { id: 2, text: "Mexico", isCorrect: false },
        { id: 3, text: "Russia", isCorrect: true },
      ],
    },
    {
      text: "Which of these countries is the largest by population according to official sources?",
      options: [
        { id: 0, text: "Philippines", isCorrect: true },
        { id: 1, text: "D.R. Congo", isCorrect: false },
        { id: 2, text: "Vietnam", isCorrect: false },
        { id: 3, text: "Egypt", isCorrect: false },
      ],
    },
    {
      text: "Which of these countries is the largest by population according to official sources?",
      options: [
        { id: 0, text: "Turkiye", isCorrect: false },
        { id: 1, text: "Germany", isCorrect: false },
        { id: 2, text: "Iran", isCorrect: true },
        { id: 3, text: "Thailand", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  const optionClicked = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
      }
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setFinalResults(true);
      }
  }

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h2>The Quiz Example</h2>

      {/* 2. Current Score */}
      <h2>Current Score: {score}</h2>

      { showFinalResults ? (
            /* 4. Final Results */
            <div className='final-results'>
            <h2>Final Results</h2>
            <h2>{score} out of {questions.length} correct - ({(score/questions.length)*100}%)</h2>
    
            <button onClick={() => restartGame()}>Restart Game</button>
          </div>) : (
                  /* 3. Question Card */
      <div className='question-card'>
      <h2>Question {currentQuestion + 1} out of {questions.length}</h2>
      <h3 className='question-text'>{questions[currentQuestion].text}</h3>
    

    <ul>
      {questions[currentQuestion].options.map((option) => {
        return (
          <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
        );
      })}
    </ul>

    </div>
          )}

    </div>
  );
}

export default App;
