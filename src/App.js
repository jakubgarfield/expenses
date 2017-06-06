import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.clientId = '826265862385-p41e559ccssujlfsf49ppmo0gktkf6co.apps.googleusercontent.com';
    this.discoveryDocs = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
    this.scopes = "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata.readonly";
    this.spreadsheetId = "18uwYwUAVw0H5bhszMgAORmvAN2APxAtJI3FB-XH7Dzk";
  }

  render() {

    const authorize = (<button>Authorize</button>);
    const loggedIn = (<button>Sign Out</button>);

    return (
      <div className="app">
        <div className="header">
          <h2>Expenses</h2>
        </div>

      </div>
    );
  }
}

export default App;
