import React from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    btnClass = styles.Red;

    if (props.persons.length <= 2) {
      assignedClasses.push( styles.red ); // classes = red
    }
    if (props.persons.length <= 1) {
      assignedClasses.push( styles.bold ); // classes = red & bold
    }

    return (
        <div className={styles.Cockpit}>
            <h1>Hi, is this working?</h1>
            <p className={assignedClasses.join(' ')}>Yes, it seems so.</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle People
            </button>
        </div>
    );
};

export default cockpit;