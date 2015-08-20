import React from 'react';
import Expense from "./Expense";

export default class ExpenseList extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {
    return (
      <ul className="expense-list">
        { this.renderList() }
      </ul>
    );
  }

  renderList() {
    return this.props.expenses.map((expense) => {
      return (
        <li key={expense.id} className="expense">
          <Expense {...expense} />
        </li>
      );
    })

  }

};

Expense.childContextTypes = {
  muiTheme: React.PropTypes.object
}


