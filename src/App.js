import React, { Component } from 'react';
import ExpenseList from './ExpenseList.js';
import ExpenseForm from './ExpenseForm.js';
import LoadingBar from "./LoadingBar.js"
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.clientId = '826265862385-p41e559ccssujlfsf49ppmo0gktkf6co.apps.googleusercontent.com';
    this.spreadsheetId = "18uwYwUAVw0H5bhszMgAORmvAN2APxAtJI3FB-XH7Dzk";

    this.state = {
      signedIn: undefined,
      accounts: [],
      categories: [],
      expenses: [],
      loadingData: true,
    }

    this.handleExpenseAdded = this.handleExpenseAdded.bind(this);
  }

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
        clientId: this.clientId,
        scope: "https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive.metadata.readonly"
      }).then(() => {
        window.gapi.auth2.getAuthInstance().isSignedIn.listen((signedIn) => { this.setState({ signedIn: signedIn }) });
        this.setState({ signedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() });
        this.getData();
      });
    });
  }

  handleExpenseAdded() {
    console.log('Expense added');
    this.getData();
  }

  getData() {
    this.setState({ loadingData: true});
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({ spreadsheetId: this.spreadsheetId, ranges: ["Data!A2:A50", "Data!E2:E50", "Expenses!A2:F"] })
      .then(response => {
        this.setState({
          accounts: response.result.valueRanges[0].values.map(items => items[0]),
          categories: response.result.valueRanges[1].values.map(items => items[0]),
          expenses: response.result.valueRanges[2].values.reverse(),
          loadingData: false,
        });
      });
  }

  render() {
    const loading = (<LoadingBar />);
    const userNotSigned = (<button onClick={() => { window.gapi.auth2.getAuthInstance().signIn(); }}>Sign In</button>);
    const userSigned = (
      <div>
        <button onClick={() => { window.gapi.auth2.getAuthInstance().signOut(); }}>Sign Out</button>
        {this.renderBody()}
      </div>
      );

    switch (this.state.signedIn) {
      case false:
        return userNotSigned;
      case true:
        return userSigned;
      default:
        return loading;
    }
  }

  renderBody()
  {
    if (this.state.loadingData)
      return <LoadingBar />;
    else
      return (
        <div className="content">
          <ExpenseList expenses={this.state.expenses} />
          <ExpenseForm categories={this.state.categories}
                       accounts={this.state.accounts}
                       onExpenseAdded={this.handleExpenseAdded}
                       spreadsheetId={this.spreadsheetId}/>
        </div>
      );
  }
}

export default App;
