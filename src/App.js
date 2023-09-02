import React, { useState } from 'react';
import './App.css';

function App() {
  // properties
  const [showFinalResults, setFinalResults] = useState(false);


  return (
    <div className="App">
      {/* 1. Header */}
      <h2>The Quiz Example</h2>

      {/* 2. Current Score */}
      <h2>Current Score: 0</h2>

      { showFinalResults ? (
            /* 4. Final Results */
            <div className='final-results'>
            <h2>Final Results</h2>
            <h2>1 out of 5 correct - (20%)</h2>
    
            <button>Restart Game</button>
          </div>) : (
                  /* 3. Question Card */
      <div className='question-card'>
      <h2>Question 1 out of 5</h2>
      <h3 className='question-text'>Which country is the largest by population?</h3>
    

    <ul>
      <li>United States</li>
      <li>China</li>
      <li>India</li>
      <li>Indonesia</li>
    </ul>

    </div>
          )}

    </div>
  );
}

export default App;
