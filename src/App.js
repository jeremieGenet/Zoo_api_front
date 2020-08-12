import React from 'react';
import '../src/assets/css/App.css';
import Site from './containers/Site/Site'
import {BrowserRouter as Router} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
        <Site />
      </Router>
    </div>
  );
}

export default App;
