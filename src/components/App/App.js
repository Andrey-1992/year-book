import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import people from '../../data/yearbook-data.js';
import './App.css';


// console.log(people);
class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff
    }
  }

  render() {
    // console.log(this.state.staff)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Yearbook</h1>
        </header>
        <Cohort staff={this.state.staff}/>
      </div>
    );
  }
}

export default App;
