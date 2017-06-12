import React, { Component } from 'react';
import '@material/list/dist/mdc.list.css';
import './ExpenseList.css';

class ExpenseList extends Component {
  render() {
    return (
      <ul className="mdc-list mdc-list--two-line mdc-list--avatar-list">
        {this.props.expenses.map((expense) => <ExpenseDetail key={expense.id} expense={expense} onSelect={this.props.onSelect} />)}
      </ul>
    );
  }
}

class ExpenseDetail extends Component {
  formatDate(date) {
    const dateParts = date.split('-')
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  }

  render() {
    return (
      <li className="mdc-list-item" onClick={() => this.props.onSelect(this.props.expense)}>
        <ExpenseIcon category={this.props.expense.category} />
        <span className="mdc-list-item__text">
          {this.props.expense.category}
          <span className="mdc-list-item__text__secondary">{this.formatDate(this.props.expense.date)}{ this.props.expense.description ? ` ${this.props.expense.description}` : '' }</span>
        </span>
        <span className="mdc-list-item__end-detail">
          ${this.props.expense.amount}
        </span>
      </li>
    );
  }
}

class ExpenseIcon extends Component {
  iconFrom(category) {
    switch (category) {
      case "Groceries":
        return "local_grocery_store";
      case "Restaurants":
        return "local_dining";
      case "Car":
        return "directions_car";
      case "Hobbies":
        return "local_library";
      case "Household":
        return "home";
      case "Shopping":
        return "local_mall";
      case "Health":
        return "local_hospital";
      case "Entertainment":
        return "local_movies";
      default:
        return "attach_money";
    }
  }

  render() {
    return (
      <span className={`mdc-list-item__start-detail ${this.props.category}`} role="presentation">
        <i className="material-icons" aria-hidden="true">{this.iconFrom(this.props.category)}</i>
      </span>
    );
  }
}

export default ExpenseList;
