import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff}) => {
    const test = staff.map(staff => console.log(staff.name))
    // console.log(staff)
    return (
        <div>
            <h2>{test}</h2>
        </div>
    )
}
export default Cohort;
