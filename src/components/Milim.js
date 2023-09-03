import React, { useState } from 'react';
import './Milim.css';

function Milim() {

  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [question, setQuestion] = useState(0);
    
  const mila = {
    initialState: null
  }

  const clicked = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }
  }

  const restartGame = () => {
    setScore(0);
    setQuestion(0);
  }

  const inputForm = document.querySelector('input');

  const consoleLog = () => {
    console.log(inputForm.value)
  }

  return (
    <div className="Milim">

        <h2>Translate the following word to Hebrew: </h2>
        <h2 className='word'>Word</h2>

        <div><input className='input'></input></div>

        <div className='button-div'><button onClick={() => consoleLog()}>!לחץ</button></div>

        <h3>Current score: {score}</h3>


      
    </div>
  )
}

export default Milim
