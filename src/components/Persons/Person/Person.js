import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';


class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
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
        console.log('[Person.js] Inside componentWillMount()')
      }
    
      componentDidMount() {
        console.log('[Person.js] Inside componentDidMount');
        if ( this.props.position === 0 ) {
            this.inputElement.focus();
        }
    }

    render () {
        console.log('[Person.js] Inside render')

        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age}.</p>
                <p>{this.props.children}</p>
                <input
                    ref={(inp) => { this.inputElement = inp }} 
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} />
            </Aux>
        );
    }
}

Person.PropTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, styles.Person);