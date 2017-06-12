import React, { Component } from 'react';

class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = this.stateFrom(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  stateFrom(props) {
    return {
      isValid: false,
      amount: props.expense.amount,
      description: props.expense.description,
      date: props.expense.date,
      category: props.expense.category,
      account: props.expense.account,
    };
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.expense !== this.props.expense) {
      this.setState(this.stateFrom(nextProps));
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit({
      id: this.props.expense.id,
      date: this.state.date,
      description: this.state.description,
      category: this.state.category,
      account: this.state.account,
      amount: this.state.amount,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={form => { this.form = form; }} noValidate>
        <fieldset>
          <legend>{this.props.expense.id ? "Update" : "Add"} Expense</legend>
          <input type="button" onClick={() => this.props.onCancel()} value="Close" />
          { this.props.expense.id && <input type="button" onClick={() => window.confirm("Are you sure?") && this.props.onDelete(this.props.expense)} value="Delete" /> }

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

          <input type="submit" value={this.props.expense.id ? "Update" : "Add"} disabled={!this.state.isValid} />
        </fieldset>
      </form>
    );
  }
}

export default ExpenseForm;
