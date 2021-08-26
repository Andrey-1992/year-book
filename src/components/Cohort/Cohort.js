import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff}) => {

    const staffInfo = staff.map(staffInfo => {
        return (
            <Person 
            id={staffInfo.id}
            name={staffInfo.name}
            quote={staffInfo.quote}
            superlative={staffInfo.superlative}
            photo={staffInfo.photo}
            key={staffInfo.id}
            />
        )
    })

    return (
        <div className="staff-cards-container">
            <h2>{staffInfo}</h2>
        </div>
    )
}
export default Cohort;
