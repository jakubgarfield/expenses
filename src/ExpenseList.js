import React, { Component } from 'react';

class ExpenseList extends Component {
  render() {
    return (
      <ul>
        {this.props.expenses.map((expense, index) => <li key={index}>{expense[0]} {expense[1]} {expense[3]} {expense[2]} {expense[4]}</li>)}
      </ul>
    );
  }
}

export default ExpenseList;
