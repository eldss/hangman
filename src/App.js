import React from 'react';
import { Spinner } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
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
