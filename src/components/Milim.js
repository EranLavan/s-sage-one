import React, { useState } from 'react';
import './Milim.css';

function Milim() {

  console.log('test')

  const [language, setLanguage] = useState('english');
  const [finalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(0);
    
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

  const clicked = (isCorrect) => {
    if (isCorrect) {
        setScore(score + 1);
    }
  }

  const restartGame = () => {
    setScore(0);
    setWord(0);
  }

  const inputForm = document.querySelector('input');

  document.addEventListener('DOMContentLoaded', function consoleLog() {console.log(inputForm?.value)})

  const consoleLog = () => {
    console.log(inputForm?.value)
  }

  return (
    <>
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

      <div className="Milim">

        <h2>Translate the following word to Hebrew: </h2>
        <h1 className='word'>
          {words[word].english}
        </h1>

        <div><input className='input'></input></div>

        <div className='button-div'><button className='click-button' onClick={() => consoleLog()}>!לחץ</button></div>

        <h3>Current score: {score}</h3>


      
      </div>
    </>
  )
}

export default Milim
