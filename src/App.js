import React, { Component } from 'react';
import styles from './App.module.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'aa', name: 'Zak', age: 24 },
      { id: 'aass', name: 'Jake', age: 9 },
      { id: 'aassdd', name: 'Gabe', age: 9000 }
    ],
    otherState: 'lorem ipsum',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
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
              age={person.age}
              key={person.id} 
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
      </div> 
      );

      style.backgroundColor = 'red';
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push( styles.red ); // classes = red
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push( styles.bold ); // classes = red & bold
    }


    return (
        <div className={styles.App}>
          <h1>Hi, is this working?</h1>
          <p className={assignedClasses.join(' ')}>Yes, it seems so.</p>
          <button
            style={style}
            onClick={this.togglePersonHandler}>
            Toggle People
          </button>

          {persons}

        </div>
    ); 
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React createElement works!'))
  }
}

export default App;
