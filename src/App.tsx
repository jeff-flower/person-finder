import React from 'react';
import logo from './assets/rAir.svg';
import PersonFinder from './components/PersonFinder';
import mockPeople from './assets/mockData.json';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Brought to you by Air" className="App-header_image" />
      </header>
      <main className="App-main">
        <h1 className="App-title">The Person Finder</h1>
        <p className="App-description">If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</p>
        <PersonFinder people={mockPeople}/>
      </main>
    </div>
  );
}

export default App;
