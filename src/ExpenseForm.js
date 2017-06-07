import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    if (this.state.expanded)
      return (
        <form id="add-expense">
          <fieldset>
            <legend>Add Expense</legend>
            <button onClick={() => this.toggle()}>Close</button>

            <label htmlFor="amount">Amount</label>
            <input id="amount" type="number" min="0.01" step="0.01" required />

            <label htmlFor="description">Description</label>
            <input id="description" type="text" required />

            <label htmlFor="date">Date</label>
            <input id="date" type="date" defaultValue={new Date().toISOString().slice(0, 10)} required />

            <label htmlFor="category">Category</label>
            <select id="category" required>
              {this.props.categories.map(category => <option value={category} key={category}>{category}</option>)}
            </select>

            <label htmlFor="account">Account</label>
            <select id="account" required>
              {this.props.accounts.map(account => <option value={account} key={account}>{account}</option>)}              
            </select>

            <input type="submit" value="Add" />
          </fieldset>
        </form>
      );
    else
      return <button onClick={() => this.toggle()}>Add</button>;
  }
}

export default ExpenseForm;
