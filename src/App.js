import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, is this working?</h1>
        <Person />
        <Person />
        <Person />

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React createElement works!'))
  }
}

export default App;
