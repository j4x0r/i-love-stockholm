import React from 'react';
import ExpenseList from "./ExpenseList";
import Total from "./Total";
import sum from 'lodash.sum';


export default class Budget extends React.Component {

  total() {
    return sum(this.props.expenses, (expense) => expense.amount);
  }

  render() {
    return (
      <div>
      <Total onUpgrade={ this.props.onUpgrade } limit={ this.props.limit } total={ this.total() }  />
        <ExpenseList expenses={ this.props.expenses } />
      </div>
    );
  }
};

