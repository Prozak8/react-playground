import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'Zak', age: 24 },
      { name: 'Jake', age: 9 },
      { name: 'Gabe', age: 9000 }
    ],
    otherState: 'lorem ipsum'
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

  render() {
    return (
      <div className="App">
        <h1>Hi, is this working?</h1>
        <button 
          onClick={() => this.switchNameHandler('ZDH All Da Way')}>
          Switch Name
        </button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Jakey Boy!')}>
          My Hobbies: MMA</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React createElement works!'))
  }
}

export default App;
