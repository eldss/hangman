import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import HangmanImage from './components/HangmanImage';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hangman</h1>
      <HangmanImage step={6} />
      <footer>
        <small>
          Images provided by&nbsp;
          <a href="http://creativecommons.org/licenses/by-sa/3.0/" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>,&nbsp;
          <a href="https://commons.wikimedia.org/w/index.php?curid=892208">Link</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
