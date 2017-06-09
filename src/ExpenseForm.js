import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.defaultValues();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  defaultValues() {
    return {
      expanded: false,
      amount: 0,
      description: '',
      date: new Date().toISOString().slice(0, 10),
      category: this.props.categories[0],
      account: this.props.accounts[0],
      isValid: false
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    target.reportValidity();
    this.setState({
      [target.name]: value,
      isValid: this.form.checkValidity(),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    window.gapi.client.sheets.spreadsheets.values
      .append({
        spreadsheetId: this.props.spreadsheetId, range: "Expenses!A1", valueInputOption: "USER_ENTERED", insertDataOption: "INSERT_ROWS",
        values: [[
          `=DATE(${this.state.date.substr(0, 4)}, ${this.state.date.substr(5, 2)}, ${this.state.date.substr(-2)})`,
          this.state.description,
          this.state.account,
          this.state.category,
          this.state.amount,
          0
        ]]
      }).then(
      response => {
        this.setState(this.defaultValues());
        this.props.onExpenseAdded();
      },
      response => {
        console.error('Something went wrong');
        console.error(response);
      });
  }

  render() {
    if (this.state.expanded)
      return (
        <form onSubmit={this.handleSubmit} ref={form => { this.form = form; }} noValidate>
          <fieldset>
            <legend>Add Expense</legend>
            <input type="button" onClick={() => this.toggle()} value="Close" />

            <label>
              Amount
              <input name="amount" value={this.state.amount} onChange={this.handleInputChange} type="number" step="0.01" min="0" required />
            </label>

            <label>
              Description
              <input name="description" value={this.state.description} onChange={this.handleInputChange} type="text" />
            </label>

            <label>
              Date
              <input name="date" value={this.state.date} onChange={this.handleInputChange} type="date" required />
            </label>

            <label>
              Category
              <select name="category" value={this.state.category} onChange={this.handleInputChange} required>
                {this.props.categories.map(category => <option value={category} key={category}>{category}</option>)}
              </select>
            </label>

            <label>
              Account
              <select name="account" value={this.state.account} onChange={this.handleInputChange} required>
                {this.props.accounts.map(account => <option value={account} key={account}>{account}</option>)}
              </select>
            </label>

            <input type="submit" value="Add" disabled={!this.state.isValid} />
          </fieldset>
        </form>
      );
    else
      return <button onClick={() => this.toggle()}>Add</button>;
  }
}

export default ExpenseForm;
