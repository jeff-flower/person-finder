import React from 'react';
import logo from './assets/rAir.svg';
import PersonFinder from './components/PersonFinder';
import mockPeople from './mockData.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
      <h1>The Person Finder</h1>
      <p>If you just can’t find someone and need to know what they look like, you’ve come to the right place! Just type the name of the person you are looking for below into the search box!</p>
      <PersonFinder people={mockPeople}/>
    </div>
  );
}

export default App;
