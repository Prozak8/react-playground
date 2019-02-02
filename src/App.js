import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, is this working?</h1>
        <Person name="Zak" age="24"/>
        <Person name="Jake" age="9">My Hobbies: MMA</Person>
        <Person name="Gabe" age="9000"/>

      </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React createElement works!'))
  }
}

export default App;
