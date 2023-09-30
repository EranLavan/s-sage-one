import React, { useState, useRef, useEffect } from 'react';
// import { useLanguage } from './LanguageContext';
import './Milim.css';

let alreadyUsedWords = [];

const words = [
  {
    id: 1,
    english: 'Hello',
    russian: 'Здравствуйте',
    hebrew: 'שלום',
    pronuncEng: 'shalom',
    pronuncRus: 'шалОм'
  },

  {
    id: 2,
    english: 'Good morning',
    russian: 'Доброе утро',
    hebrew: 'בוקר טוב',
    pronuncEng: 'boker tov',
    pronuncRus: 'бОкер тов'
  },

  {
    id: 3,
    english: 'City',
    russian: 'Город',
    hebrew: 'עיר',
    pronuncEng: 'ir',
    pronuncRus: 'ир'
  },

  {
    id: 4,
    english: 'Street',
    russian: 'Улица',
    hebrew: 'רחוב',
    pronuncEng: 'rekhOv',
    pronuncRus: 'рэхОв'
  },

  {
    id: 5,
    english: 'Sun',
    russian: 'Солнце',
    hebrew: 'שמש',
    pronuncEng: 'shEmesh',
    pronuncRus: 'шЭмеш'
  },

  {
    id: 6,
    english: 'Tree',
    russian: 'Дерево',
    hebrew: 'עץ',
    pronuncEng: 'ets',
    pronuncRus: 'эц'
  },

  {
    id: 7,
    english: 'Air',
    russian: 'Воздух',
    hebrew: 'אוויר',
    pronuncEng: 'avir',
    pronuncRus: 'авИр'
  },

  {
    id: 8,
    english: 'Red',
    russian: 'Красный',
    hebrew: 'אדום',
    pronuncEng: 'adOm',
    pronuncRus: 'адОм'
  },

  {
    id: 9,
    english: 'Sea',
    russian: 'Море',
    hebrew: 'ים',
    pronuncEng: 'yam',
    pronuncRus: 'ям'
  },

  {
    id: 10,
    english: 'Haifa',
    russian: 'Хайфа',
    hebrew: 'חיפה',
    pronuncEng: 'KheifA',
    pronuncRus: 'ХэйфА'
  },

  {
    id: 11,
    english: 'To speak (infinitive)',
    russian: 'Разговаривать (инфинитив)',
    hebrew: 'לדבר',
    pronuncEng: 'ledabEr',
    pronuncRus: 'ледабЭр'
  },

  {
    id: 12,
    english: 'see (present, single, m)',
    russian: 'Видеть (настоящее время, ед. число, муж. род)',
    hebrew: 'רואה',
    pronuncEng: 'roE',
    pronuncRus: 'роЭ'
  },

  {
    id: 13,
    english: '',
    russian: '',
    hebrew: '',
    pronuncEng: '',
    pronuncRus: ''
  }
]

let randomNumber = (Math.ceil(Math.random()*(words.length - 1)));

function getRandomUniqueNumber() {
  do {
    randomNumber = (Math.ceil(Math.random()*(words.length - 1)));
  } while (alreadyUsedWords.includes(randomNumber));
  return randomNumber;
}

const randomUniqueNumber = getRandomUniqueNumber();

alreadyUsedWords.push(randomUniqueNumber);


function Milim() {

  // const { selectedLanguage } = useLanguage();
  const [inputValue, setInputValue] = useState('');
  const [language, setLanguage] = useState('english');
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(randomUniqueNumber - 1);
  const [counter, setCounter] = useState(1);
  const [message, setMessage] = useState('');
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [showFinalResults, setFinalResults] = useState(false);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  
  // const messages = selectedLanguage === 'en' ? require('./messages.en.json') : require('./messages.ru.json');

  const changeLanguage = () => {
      language==='english' ?
      setLanguage('russian') :
      setLanguage('english')
  }
    
  const correctAnswerEng = `Correct! '${words[word].english}' is <span id='orange'>${words[word].hebrew}</span>.
  <span id='pronunciation'}>Show pronunciation</span>`;

  const correctAnswerRus = `Верно! '${words[word].russian}' это <span id='orange'>${words[word].hebrew}</span>.
  <span id='pronunciation'}>Показать произношение</span>`;

  const incorrectAnswerEng = `<span id='orange'>${inputValue}</span> was incorrect. 
  Correct answer: <span id='orange'>${words[word].hebrew}</span>. <br>Try next word.`;

  const incorrectAnswerRus = `<span id='orange'>${inputValue}</span> - это неправильный ответ. 
  Правильный ответ: <span id='orange'>${words[word].hebrew}</span>. <br>Попробуйте следующее слово.`

  const checkAnswer = () => {

    function getRandomUniqueNumber() {
      do {
        randomNumber = (Math.ceil(Math.random()*(words.length - 1)));
      } while (alreadyUsedWords.includes(randomNumber));
      return randomNumber;
    }
    
    const randomUniqueNumber = getRandomUniqueNumber();

      if (inputValue === '') {
        language === 'english' ? 
        setMessage(`Type the word inside the input please`) :
        setMessage(`Напишите слово в поле, пожалуйста`);
      
      } else if (inputValue === words[word].hebrew && counter < words.length - 2) {

        setScore(score + 1);

        language === 'english' ?
        setMessage(correctAnswerEng) :
        setMessage(correctAnswerRus)

        setWord(randomUniqueNumber - 1);
        setCounter(counter + 1);

        alreadyUsedWords.push(randomUniqueNumber);

      } else if (counter < words.length - 2) {

        // console.log(`counter now: ${counter} `);
        // console.log(counter < words.length - 2)
        language === 'english' ?
        setMessage(incorrectAnswerEng) :
        setMessage(incorrectAnswerRus)
        
        setWord(randomUniqueNumber - 1);
        setCounter(counter + 1);

        // console.log(`counter now: ${counter} `);
        // console.log(counter < words.length - 2)

        alreadyUsedWords.push(randomUniqueNumber);

      } else if (inputValue === words[word].hebrew) {

        setScore(score + 1);
        setFinalResults(true);
      
      } else {

        setFinalResults(true);

      }

    
    setInputValue('');
    setShowPronunciation(false);
  }

  const previousWord = words[alreadyUsedWords[alreadyUsedWords.length - 2] - 1];
  
  const restart = () => {
    setFinalResults(false);
    setScore(0);
    setWord(randomNumber - 1);
    setMessage(``);
    setCounter(0);
    alreadyUsedWords = [];

  }

  const pronounce = () => {
      setShowPronunciation(true);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      buttonRef.current.click();
    }
  };

  const handleOutsideClick = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        inputRef.current.focus();
      }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  }, []);


  return (
  <>
    {/* <select className='select-difficulty'>
      <option 
        title='You can guess the word unlimited amount of times' 
        onChange={() => easy()}>
      Easy
      </option>

      Recommended to use value or defaultValue props 
      (already asked about this, look there in the conversation)
      for the option that should be selected as a basic option

      <option 
        title='If you give an incorrect answer, the game goes on to the next word'
        onChange={() => hard()}>
          Hard
      </option>
    </select> */}
  


    <div className='container'>
      { showFinalResults ? (
      <>
        <div className='milim-results'>
          <h2>
          {
          language === 'english' ? 
          `Your results:` :
          `Ваши результаты:`
          }</h2>
          <h2>
          {
          language === 'english' ?
          `${score} out of ${words.length - 1} were answered correctly (${Math.round(score/(words.length - 1)*10000)/100}%)` :
          `${score} из ${words.length - 1} слов были названы правильно (${Math.round(score/(words.length - 1)*10000)/100}%)`
          }</h2>
        </div>

      <div className='center'>
        <button className='click-button' onClick={() => restart()}>
          {
          language === 'english' ?
          `Try again!` :
          `Попробуйте ещё раз!`
          }
        </button>
      </div>
      </>

      ) : (
    <>
      <div className="Milim">

        <h2>
        {
        language === 'english' ?
        `Translate the following word to Hebrew:` :
        `Переведите слово на иврит:` 
        }</h2>
        <h1 className='word'>
        {
        language === 'english' ?
        `${words[word].english}` :
        `${words[word].russian}`
        }
        </h1>

        <div>
          <input 
            ref={inputRef}
            className='input'
            type='text'
            placeholder='הזן את המילה בעברית'
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}>
          </input>
        </div>

        <div className='button-div'>
          <button 
            ref={buttonRef} 
            className='click-button' 
            onClick={() => checkAnswer()}
          >
            {
            language === 'english' ?
            `Check!` :
            `Проверить!`
            }
          </button>
          {/* <button className='click-button' onClick={() => next()}>
            Next
          </button> */}
        </div>

        <h3 className='h3'>
        {
        language === 'english' ?
        `Current score: ${score}/${words.length - 1}` :
        `Текущий счёт: ${score}/${words.length - 1}`
        }</h3>
        <div className='one-line-div'>
          <div className='h3' id='message' onClick={() => pronounce()}>
            {message.split('<br />').map((line, index) => (
              <div key={index} dangerouslySetInnerHTML={{ __html: line }} />
            ))}
          </div>
          <div id='hidden'> 
          {/* REMOVE THE DIV COMPLETELY MAYBE? */}
            {
              showPronunciation 
              ? 
              
              counter === 0 ? '' : (<div id='italic'>{
                language === 'english' ?
                words[previousWord.id - 1].pronuncEng :
                words[previousWord.id - 1].pronuncRus
                }</div>) 
              
                : ''
            }
          </div>
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

      {/* <h1>{messages.title}</h1>
      <p>{messages.description}</p> */}

  </>
  )
}

export default Milim
