import React, { Component } from 'react';
import Spreadsheet from './Spreadsheet.js'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.clientId = '826265862385-p41e559ccssujlfsf49ppmo0gktkf6co.apps.googleusercontent.com';
    this.spreadsheetId = "18uwYwUAVw0H5bhszMgAORmvAN2APxAtJI3FB-XH7Dzk";
  }

  render() {
    return (
      <div className="app">
        <header>
          <h2>Expenses</h2>
        </header>
        <Spreadsheet clientId={this.clientId} spreadsheetId={this.spreadsheetId} />
      </div>
    );
  }
}

export default App;
