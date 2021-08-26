import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';


// console.log(people);
class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    // console.log(this.state.staff)
    return (
      <main className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Cohort staff={this.state.staff} students={this.state.students}/>
      </main>
    );
  }
}

export default App;
