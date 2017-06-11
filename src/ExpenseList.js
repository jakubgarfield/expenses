import React, { Component } from 'react';
import ExpenseDetail from './ExpenseDetail'

class ExpenseList extends Component {
  render() {
    return (
      <ul>
        {this.props.expenses.map((expense) => <ExpenseDetail key={expense.id} expense={expense} onSelect={this.props.onSelect} onDelete={this.props.onDelete} />)}
      </ul>
    );
  }
}

export default ExpenseList;
