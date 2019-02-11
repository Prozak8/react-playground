import React from 'react';
import styles from './Cockpit.module.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = styles.Button;
    if (props.showPersons) {
        btnClass = [styles.Button, styles.Red].join(' ');
    }

    if (props.persons.length <= 2) {
      assignedClasses.push( styles.red ); // classes = red
    }
    if (props.persons.length <= 1) {
      assignedClasses.push( styles.bold ); // classes = red & bold
    }

    return (
        <Aux>        
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join(' ')}>Yes, it seems so.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle People
            </button>
            <button onClick={props.login}>Log in</button>
        </Aux>
    );
};

export default cockpit;