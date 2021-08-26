import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div className='card'>
            <h2>{props.name}</h2>
            <p>{props.quote}</p>
            <p>{props.superlative}</p>
            <img src={props.photo} />
        </div>
    )
}

export default Person;
