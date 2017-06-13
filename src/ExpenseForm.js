import React, { Component } from 'react';
import {MDCTextfield} from '@material/textfield/dist/mdc.textfield.js';

import '@material/form-field/dist/mdc.form-field.css';
import '@material/select/dist/mdc.select.css';
import '@material/textfield/dist/mdc.textfield.css';
import '@material/button/dist/mdc.button.css';

import './ExpenseForm.css';

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

  componentDidMount() {
    document.querySelectorAll(".mdc-textfield").forEach((selector) => { new MDCTextfield(selector); });
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
        <div className="mdc-form-field">
          <div className="mdc-textfield">
            <input name="amount" className="mdc-textfield__input" value={this.state.amount} onChange={this.handleInputChange} type="number" step="0.01" min="0" required />
            <label className="mdc-textfield__label">Amount</label>
          </div>
        </div>
        <div className="mdc-form-field">
          <div className="mdc-textfield">
            <input name="description" className="mdc-textfield__input" value={this.state.description} onChange={this.handleInputChange} type="text" />
            <label className="mdc-textfield__label">Description</label>
          </div>
        </div>

        <div className="mdc-form-field">
          <div className="mdc-textfield">
            <input name="date"  className="mdc-textfield__input" value={this.state.date} onChange={this.handleInputChange} type="date" required />
            <label className="mdc-textfield__label">Date</label>
          </div>
        </div>

        <div className="mdc-form-field">
          <select name="category" className="mdc-select" value={this.state.category} onChange={this.handleInputChange} required>
            {this.props.categories.map(category => <option value={category} key={category}>{category}</option>)}
          </select>
        </div>

        <div className="mdc-form-field">
          <select name="account" className="mdc-select" value={this.state.account} onChange={this.handleInputChange} required>
            {this.props.accounts.map(account => <option value={account} key={account}>{account}</option>)}
          </select>
        </div>

        <div className="mdc-form-field mdc-form-submit">
          <input type="submit" className="mdc-button" value={this.props.expense.id ? "Update" : "Add"} disabled={!this.state.isValid} />
          { this.props.expense.id && <input type="button" className="mdc-button" onClick={() => window.confirm("Are you sure?") && this.props.onDelete(this.props.expense)} value="Delete" /> }
          <input type="button" className="mdc-button" onClick={() => this.props.onCancel()} value="Close" />
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
