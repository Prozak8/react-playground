import React, { Component } from 'react';

import Person from './Person/Person'

class Persons extends Component {
    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', props)
        this.state = {
          persons: [
            { id: 'aa', name: 'Zak', age: 24 },
            { id: 'aass', name: 'Jake', age: 9 },
            { id: 'aassdd', name: 'Gabe', age: 9000 }
          ],
          otherState: 'lorem ipsum',
          showPersons: false
        }
    }
    
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()')
    }

    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount')
    }

    render () {
        console.log('[Persons.js] Inside render')
        return this.props.persons.map( ( person, index ) => {
            return <Person
              click={() => this.props.clicked( index )} 
              name={person.name} 
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} /> 
            } );
    }
}

export default Persons;