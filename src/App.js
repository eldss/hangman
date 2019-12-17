import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Game from './components/Game';

function App() {
  const [word, setWord] = useState(getWord())
  return (
    <div className="App">
      <Game word={word} onRestart={setWord} />
    </div>
  );
}

function getWord() {
  const wordList = require('word-list-json');
  let index = Math.floor(Math.random() * wordList.length);
  //TODO: Remove the next line
  console.log(wordList[index]);
  return wordList[index].toUpperCase();
}

export default App;
