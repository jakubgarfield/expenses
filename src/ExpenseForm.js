import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      amount: 0,
      description: '',
      date: new Date().toISOString().slice(0, 10),
      category: this.props.categories[0],
      account: this.props.accounts[0],
      isValid: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({ expanded: !this.state.expanded });
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

  handleSubmit() {

  }

  render() {
    if (this.state.expanded)
      return (
        <form onSubmit={this.handleSubmit} ref={form => { this.form = form; }} noValidate>
          <fieldset>
            <legend>Add Expense</legend>
            <button onClick={() => this.toggle()}>Close</button>

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
