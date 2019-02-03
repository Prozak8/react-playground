import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons: [
      { name: 'Zak', age: 24 },
      { name: 'Jake', age: 9 },
      { name: 'Gabe', age: 9000 }
    ],
    userName: 'Prozak94',
    otherState: 'lorem ipsum',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Zak', age: 24 },
        { name: event.target.value, age: 9 },
        { name: 'Gabe', age: 10000 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  usernameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age}/>
          })}
      </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi, is this working?</h1>
        <button
          style={style}
          onClick={this.togglePersonHandler}>
          Toggle People
        </button>

        {persons}
        
        <div>
          <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.userName}/>
        </div>

        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="JacobsCreek"/>
        <UserOutput userName="Prozak"/>
      </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React createElement works!'))
  }
}

export default App;
