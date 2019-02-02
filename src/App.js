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

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 24 },
        { name: 'Jake', age: 9 },
        { name: 'Gabe', age: 10000 }
      ]
    })
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
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jakey Boy!')}
          changed={this.nameChangedHandler}>
          My Hobbies: MMA</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
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
