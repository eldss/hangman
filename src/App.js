import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HangmanImage from './components/HangmanImage';
import './App.css';
import Word from './components/Word';
import ButtonArray from './components/ButtonArray';

function App() {
  return (
    <div className="App">
      <h1>Hangman</h1>
      <HangmanImage step={0} />
      <Word word="Hello" displayChars={new Set(['H', 'O'])} />
      <ButtonArray />
    </div>
  );
}

export default App;
