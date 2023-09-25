import React, { useState, useRef, useEffect } from 'react';
// import { useLanguage } from './LanguageContext';
import './Milim.css';

let alreadyUsedWords = [];

const words = [
  {
    id: 1,
    english: 'Hello (1)',
    russian: 'Здравствуйте',
    hebrew: 'שלום',
    pronuncEng: 'shalom',
    pronuncRus: 'шалОм'
  },

  {
    id: 2,
    english: 'Good morning (2)',
    russian: 'Доброе утро',
    hebrew: 'בוקר טוב',
    pronuncEng: 'boker tov',
    pronuncRus: 'бОкер тов'
  },

  {
    id: 3,
    english: 'City (3)',
    russian: 'Город',
    hebrew: 'עיר',
    pronuncEng: 'ir',
    pronuncRus: 'ир'
  },

  {
    id: 4,
    english: 'Street (4)',
    russian: 'Улица',
    hebrew: 'רחוב',
    pronuncEng: 'rekhOv',
    pronuncRus: 'рэхОв'
  },

  {
    id: 5,
    english: 'Sun (5)',
    russian: 'Солнце',
    hebrew: 'שמש',
    pronuncEng: 'shEmesh',
    pronuncRus: 'шЭмеш'
  },

  {
    id: 6,
    english: 'Tree (6)',
    russian: 'Дерево',
    hebrew: 'עץ',
    pronuncEng: 'ets',
    pronuncRus: 'эц'
  },

  {
    id: 7,
    english: 'Air (7)',
    russian: 'Воздух',
    hebrew: 'אוויר',
    pronuncEng: 'avir',
    pronuncRus: 'авИр'
  },

  {
    id: 8,
    english: 'Red (8)',
    russian: 'Красный',
    hebrew: 'אדום',
    pronuncEng: 'adOm',
    pronuncRus: 'адОм'
  },

  {
    id: 9,
    english: 'Sea (9)',
    russian: 'Море',
    hebrew: 'ים',
    pronuncEng: 'yam',
    pronuncRus: 'ям'
  },

  {
    id: 10,
    english: 'Haifa (10)',
    russian: 'Хайфа',
    hebrew: 'חיפה',
    pronuncEng: 'KheifA',
    pronuncRus: 'ХэйфА'
  },

  {
    id: 11,
    english: 'To speak (infinitive) (11)',
    russian: 'Разговаривать (инфинитив)',
    hebrew: 'לדבר',
    pronuncEng: 'ledabEr',
    pronuncRus: 'ледабЭр'
  },

  {
    id: 12,
    english: 'see (present, single, m) (12)',
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



function Milim() {

  // const { selectedLanguage } = useLanguage();
  const [inputValue, setInputValue] = useState('');
  const [language, setLanguage] = useState('english');
  const [score, setScore] = useState(0);
  const [word, setWord] = useState(randomNumber - 1);

  // ^^^^^^^^^^^^^^^
  // IMPORTANT thing here that I didn't see for some time. 
  // We set the State of 'word' to 'randomNumber - 1', because useState gets a position
  // of the word in the array, and NOT IT's ID. That's why if the State is 6, it shows the 7th word.
  // Because the word in array have internal invisible numbers 0, 1, 2 etc.

  const [counter, setCounter] = useState(0);
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

  const checkAnswer = () => {

    console.log(`**********************************`);
    console.log(`Number of Already Used Words: ${alreadyUsedWords.length}`);
    console.log(`Id's of already used words: ${alreadyUsedWords}`)
    
    console.log(`Random: ${randomNumber}`);
    console.log(`Counter before click: ${counter}`);

    // if (!alreadyUsedWords.includes(randomNumber)) {

    randomNumber = (Math.ceil(Math.random()*(words.length - 1)));

      if (inputValue === '') {
        language === 'english' ? 
        setMessage(`Type the word inside the input please`) :
        setMessage(`Напишите слово в поле, пожалуйста`);
      
      } else if (inputValue === words[word].hebrew && counter < words.length - 2) {

        setScore(score + 1);

        language === 'english' ?
        setMessage(`Correct! '${words[word].english}' is <span id='orange'>${words[word].hebrew}</span>.
         <span id='pronunciation'}>Show pronunciation</span>`) :
        setMessage(`Верно! '${words[word].russian}' это <span id='orange'>${words[word].hebrew}</span>.
         <span id='pronunciation'}>Показать произношение</span>`)

        alreadyUsedWords.push(words[word]);
        const currentWord = alreadyUsedWords[alreadyUsedWords.length - 1];
        console.log(alreadyUsedWords);
        console.log(currentWord);
        console.log(currentWord.id);
        setWord(randomNumber - 1);
        setCounter(counter + 1);

      } else if (counter < words.length - 2) {

        setMessage(`<span id='orange'>${inputValue}</span> was incorrect. 
        Correct answer: <span id='orange'>${words[word].hebrew}</span>. <br>Try next word.`);
        
        alreadyUsedWords.push(words[word]);
        const currentWord = alreadyUsedWords[alreadyUsedWords.length - 1];
        console.log(alreadyUsedWords);
        console.log(currentWord);
        console.log(currentWord.id);
        setWord(randomNumber - 1);
        setCounter(counter + 1);

      } else if (inputValue === words[word].hebrew) {

        setScore(score + 1);
        setFinalResults(true);
      
      } else {

        setFinalResults(true);

      }
    setInputValue('');
    setShowPronunciation(false);

    console.log(`COUNTER AFTER CLICK: ${counter}`)
  
//   } else {
//   randomNumber = (Math.ceil(Math.random()*words.length));
//   }
  }
  
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
                words[word - 1].pronuncEng :
                words[word - 1].pronuncRus
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
