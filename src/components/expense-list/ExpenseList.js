import React, { Component } from "react";
import ExpenseDetail from "./ExpenseDetail.js"
import "@material/list/dist/mdc.list.css";
import "./ExpenseList.css";

class ExpenseList extends Component {
  render() {
    return (
      <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list">
        {this.props.expenses.map(expense =>
          <ExpenseDetail
            key={expense.id}
            expense={expense}
            onSelect={this.props.onSelect}
          />
        )}
      </ul>
    );
  }
}

export default ExpenseList;
