import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff, students}) => {

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

    const studentsInfo = students.map(studentInfo => {
        return (
            <Person 
            id={studentInfo.id}
            name={studentInfo.name}
            quote={studentInfo.quote}
            superlative={studentInfo.superlative}
            photo={studentInfo.photo}
            key={studentInfo.id}
            />
        )
    })

    return (
        <div className="staff-container">
            <div className="staff-container-cards">
            <h2>Staff Section</h2>
            {staffInfo}
            </div>
            <div className="students-container-cards">
                <h2>Students Section</h2>
                {studentsInfo}
            </div>

        </div>
    )
}
export default Cohort;
