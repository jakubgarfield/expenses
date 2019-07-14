import React, { Component } from 'react';

export default class ExpenseIcon extends Component {
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
      case "Transport":
        return "directions_bus";
      case "Bambino":
        return "face";
      case "Travel":
        return "flight";
      default:
        return "attach_money";
    }
  }

  render() {
    return (
      <span
        className={`mdc-list-item__start-detail ${this.props.category}`}
        role="presentation"
      >
        <i className="material-icons" aria-hidden="true">
          {this.iconFrom(this.props.category)}
        </i>
      </span>
    );
  }
}
