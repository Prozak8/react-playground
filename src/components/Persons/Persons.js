import React, { PureComponent } from 'react';

import Person from './Person/Person'

class Persons extends PureComponent {
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

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Person.js] Inside component will receive props', nextProps)
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState)
    //     return nextProps.persons !== this.props.persons || 
    //         nextProps.changed !== this.props.changed || 
    //         nextProps.clicked !== this.props.clicked;
    //     // return true
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] Inside componentWillUpdate', nextProps, nextState)
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] Inside componentDidUpdate')
    }

    render () {
        console.log('[Persons.js] Inside render')
        return this.props.persons.map( ( person, index ) => {
            return <Person
              click={() => this.props.clicked( index )} 
              name={person.name} 
              position={index}
              age={person.age}
              key={person.id}
              changed={(event) => this.props.changed(event, person.id)} /> 
            } );
    }
}

export default Persons;