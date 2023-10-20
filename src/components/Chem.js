import React, { useState } from 'react';
import './Chem.css';
import chemQuestions from '../data/chemQuestions';

function Chem() {
    const [showFinalResults, setFinalResults] = useState(false);
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);


const optionClicked = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }

    if (currentQuestion + 1 < chemQuestions.length) {
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
    <div className="Chem">
        <h2>Typical Questions for IB</h2>

        <h2>Current Score: {score}</h2>

        { showFinalResults ? (
            <div className='final-results'>
                <h2>Final Results</h2>
                <h2>{score} out of {chemQuestions.length} correct - ({(score/chemQuestions.length)*100}%)</h2>
            <button className='restart-button' onClick={() => restartGame()}>Restart Game</button>
            </div>
        ) : (
            <div className='question-card'>
            <h2>Question {currentQuestion + 1} out of {chemQuestions.length}</h2>
            <h3 className='question-text'>{questions[currentQuestion].text}</h3>

        <ul>
            {questions[currentQuestion].options.map((option) => {
                return (
                    <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
                );
            })}
        </ul>

        </div>

        )

        }

    </div>
);

}

export default Chem