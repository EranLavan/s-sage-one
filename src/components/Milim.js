import React, { useState } from 'react';
import './Milim.css';

function Milim() {
  const inputForm = document.querySelector('input');
  const [inputContent, setInputContent] = useState(document.querySelector('input')?.value);
  const [language, setLanguage] = useState('english');
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(0);
  const [message, setMessage] = useState('To start please first press the Start button');
  const [showFinalResults, setFinalResults] = useState(false);
  
  const changeLanguage = () => {
      language==='english' ?
      setLanguage('russian') :
      setLanguage('english')
  }

  const words = [
    {
      id: 1,
      english: 'Hello',
      russian: 'Здравствуйте',
      hebrew: 'שלום'
    },

    {
      id: 2,
      english: 'Good morning',
      russian: 'Доброе утро',
      hebrew: 'בוקר טוב'
    },

    {
      id: 3,
      english: 'City',
      russian: 'Город',
      hebrew: 'עיר'
    },

    {
      id: 4,
      english: 'Street',
      russian: 'Улица',
      hebrew: 'רחוב'
    },

    {
      id: 5,
      english: 'Sun',
      russian: 'Солнце',
      hebrew: 'שמש'
    },

    {
      id: 6,
      english: 'Tree',
      russian: 'Дерево',
      hebrew: 'עץ'
    },

    {
      id: 7,
      english: 'Air',
      russian: 'Воздух',
      hebrew: 'אוויר'
    },

    {
      id: 8,
      english: 'Red',
      russian: 'Красный',
      hebrew: 'אדום'
    },

    {
      id: 9,
      english: 'Sea',
      russian: 'Море',
      hebrew: 'ים'
    },

    {
      id: 10,
      english: 'Haifa',
      russian: 'Хайфа',
      hebrew: 'חיפה'
    },

    {
      id: 11,
      english: 'To speak (infinitive)',
      russian: 'Разговаривать (инфинитив)',
      hebrew: 'לדבר'
    },

    {
      id: 12,
      english: 'see (present, single, m)',
      russian: 'Видеть (настоящее время, ед. число, муж. род)',
      hebrew: 'רואה'
    }
  ]

  const checkAnswerEasy = () => {
    // console.log(inputForm?.value);

    if (inputForm?.value === words[word].hebrew) {
        setScore(score + 1);
        setMessage(`Correct! The answer is <span id='orange'>${words[word].hebrew}</span>. <br /> Click 'Next' button to try next word.`)
    } else {
        setMessage(`That's incorrect. Try again or press 'Next' button to skip to the next word`)
    }
  }

  const checkAnswerHard = () => {
    if (inputForm?.value === words[word].hebrew && word < words.length - 1) {
      setScore(score + 1);
      setWord(word + 1);

    }
  }

  const next = () => {
    if (word < (words.length - 1)) {
      setWord(word + 1)
    } else {
      setFinalResults(true);
    }
  }

  const activate = () => {
    setFinalResults(false);
    setScore(0);
    setWord(0);
    setMessage(`Now you can start!`)
  }

  const easy = () => {
    // IS THIS NECESSARY??
  }

  const hard = () => {
    // IS THIS NECESSARY?
  }

  //document.addEventListener('DOMContentLoaded', function consoleLog() {console.log(inputForm?.value)})



  return (
  <>
    <select className='select-difficulty'>
      <option 
        title='You can guess the word unlimited amount of times' 
        onChange={() => easy()}>
      Easy
      </option>

      {/* Recommended to use value or defaultValue props 
      (already asked about this, look there in the conversation)
      for the option that should be selected as a basic option */}

      <option 
        title='If you give an incorrect answer, the game goes on to the next word'
        onChange={() => hard()}>
          Hard
      </option>
    </select>
  


    <div className='container'>
      { showFinalResults ? (
      <>
        <div className='milim-results'>
          <h2>Your results:</h2>
          <h2>{score} out of {words.length} were answered correctly 
          ({Math.round(score/words.length*10000)/100}%)</h2>
        </div>

      <div className='center'>
        <button className='click-button' onClick={() => activate()}>
          Try again!
        </button>
      </div>
      </>

      ) : (
    <>
      <div className="Milim">

        <h2>Translate the following word to Hebrew: </h2>
        <h1 className='word'>
          {words[word].english}
        </h1>

        <div><input className='input'></input></div>

        <div className='button-div'>
          <button className='click-button' onClick={() => activate()}>
            Start
          </button>
          <button className='click-button' onClick={() => checkAnswerEasy()}>
            Check!
          </button>
          <button className='click-button' onClick={() => next()}>
            Next
          </button>
        </div>

        <h3 className='h3'>Current score: {score}</h3>
        <div className='h3' id='message'>
          {message.split('<br />').map((line, index) => (
            <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
          ))}
        </div>


      
      </div>

      </>
  )}
    </div>

    <div className="language-switch">
        <button 
          className="language-switch-button" 
          onClick={() => changeLanguage()}>
          {
            language==='english' 
            ? 'Русский язык' 
            : 'English'
          }
        </button>
      </div>

  </>
  )
}

export default Milim
