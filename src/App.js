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
          Images provided by CC BY-SA 3.0,&nbsp;
          <a href="CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=892208">
            https://commons.wikimedia.org/w/index.php?curid=892208
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
