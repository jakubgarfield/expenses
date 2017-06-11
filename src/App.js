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
      processing: true,
      expense: {},
      showExpenseForm: false
    }

    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
    this.handleExpenseSelect = this.handleExpenseSelect.bind(this);
    this.handleExpenseCancel = this.handleExpenseCancel.bind(this);
    this.handleExpenseDelete = this.handleExpenseDelete.bind(this);
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
        this.load();
      });
    });
  }

  handleExpenseSubmit(expense) {
    this.setState({ processing: true, showExpenseForm: false });
    const submitAction = (expense.id ? this.update : this.append).bind(this);
    submitAction(expense).then(
      response => {
        console.log('Expense added!');
        this.load();
      },
      response => {
        console.error('Something went wrong');
        console.error(response);
        this.setState({ loading: false });
      });
  }

  handleExpenseDelete(expense) {
    this.setState({ processing: true });
    const expenseRow = expense.id.substring(10);
    window.gapi.client.sheets.spreadsheets.batchUpdate({
      spreadsheetId: this.spreadsheetId, resource: {
      requests: [
        {
          "deleteDimension": {
            "range": {
              "sheetId": 0,
              "dimension": "ROWS",
              "startIndex": expenseRow - 1,
              "endIndex": expenseRow
            }
          }
        },
      ] }
    }).then(
      response => {
        console.log('Expense deleted!');
        this.load();
      },
      response => {
        console.error('Something went wrong');
        console.error(response);
        this.setState({ loading: false });
      });
  }

  handleExpenseSelect(expense) {
    this.setState({ expense: expense, showExpenseForm: true });
  }

  handleExpenseCancel() {
    this.setState({ showExpenseForm: false })
  }

  onExpenseNew() {
    const now = new Date();
    this.setState({
      showExpenseForm: true,
      expense: {
        amount: 0,
        description: '',
        date: `${now.getFullYear()}-${now.getMonth() < 9 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1}-${now.getDate() < 10 ? "0" + now.getDate() : now.getDate()}`,
        category: this.state.categories[0],
        account: this.state.accounts[0]
      }
    })
  }

  parseExpense(value, index) {
    const dateParts = value[0].split("/");
    return {
      id: `Expenses!A${index + 2}`,
      date: `20${dateParts[2]}-${dateParts[1].length === 1 ? "0" + dateParts[1] : dateParts[1]}-${dateParts[0].length === 1 ? "0" + dateParts[0] : dateParts[0]}`,
      description: value[1],
      category: value[3],
      amount: value[4],
      account: value[2],
      income: value[5]
    };
  }

  formatExpense(expense) {
    return [
      `=DATE(${expense.date.substr(0, 4)}, ${expense.date.substr(5, 2)}, ${expense.date.substr(-2)})`,
      expense.description,
      expense.account,
      expense.category,
      expense.amount,
      expense.income
    ];
  }

  append(expense) {
    return window.gapi.client.sheets.spreadsheets.values.append({
      spreadsheetId: this.spreadsheetId, range: "Expenses!A1", valueInputOption: "USER_ENTERED", insertDataOption: "INSERT_ROWS",
      values: [this.formatExpense(expense)]
    });
  }

  update(expense) {
    return window.gapi.client.sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId, range: expense.id, valueInputOption: "USER_ENTERED",
      values: [this.formatExpense(expense)]
    });
  }

  load() {
    window.gapi.client.sheets.spreadsheets.values
      .batchGet({ spreadsheetId: this.spreadsheetId, ranges: ["Data!A2:A50", "Data!E2:E50", "Expenses!A2:F"] })
      .then(response => {
        const accounts = response.result.valueRanges[0].values.map(items => items[0]);
        const categories = response.result.valueRanges[1].values.map(items => items[0]);
        this.setState({
          accounts: accounts,
          categories: categories,
          expenses: (response.result.valueRanges[2].values || []).map(this.parseExpense).reverse(),
          processing: false,
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

  renderBody() {
    if (this.state.processing)
      return <LoadingBar />;
    else
      return (
        <div className="content">
          <ExpenseList expenses={this.state.expenses} onSelect={this.handleExpenseSelect} onDelete={this.handleExpenseDelete} />
          { this.renderExpenseForm() }
        </div>
      );
  }

  renderExpenseForm() {
    if (this.state.showExpenseForm)
      return (<ExpenseForm categories={this.state.categories}
                           accounts={this.state.accounts}
                           expense={this.state.expense}
                           onSubmit={this.handleExpenseSubmit}
                           onCancel={this.handleExpenseCancel} />);
    else
      return <button onClick={() => this.onExpenseNew()}>Add</button>;
  }
}

export default App;
