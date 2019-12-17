import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Game from './components/Game';

function App() {
  const [word, setWord] = useState(getWord())
  const MAX_LEN = 27;
  const MIN_LEN = 2;
  return (
    <div className="App">
      <Game word={word} onRestart={setWord} maxLen={MAX_LEN} minLen={MIN_LEN} />
    </div>
  );
}

function getWord() {
  const wordList = require('word-list-json');
  console.log(wordList);
  let index = Math.floor(Math.random() * wordList.length);
  //TODO: Remove the next line
  console.log(wordList[index]);
  return wordList[index].toUpperCase();
}

export default App;
