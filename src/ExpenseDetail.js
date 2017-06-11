
import React, { Component } from 'react';

class ExpenseDetail extends Component {
  format(expense) {
    return `${expense.date} ${expense.description} ${expense.category} ${expense.account} ${expense.amount}`
  }

  render() {
    const inlineBlock = { display: 'inline-block' };
    return (
      <li>{this.format(this.props.expense)} <input type="button" value="Edit" onClick={() => this.props.onSelect(this.props.expense)} style={inlineBlock} /> <input type="button" value="Delete" onClick={() => window.confirm("Are you sure?") && this.props.onDelete(this.props.expense)} style={inlineBlock} /></li>
    );
  }
}

export default ExpenseDetail;
