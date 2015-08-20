import React from 'react';
import ExpenseList from "./ExpenseList";
//import Total from "./Total";
import sum from 'lodash.sum';

class Total extends React.Component {

  render() {
    return (
      <div>
        <h1>Total: {this.props.total} SEK</h1>
      </div>
    );
  }
};

export default class Budget extends React.Component {

  total() {
    return sum(this.props.expenses, (expense) => expense.amount);

  }
  render() {
    return (
      <div>
        <Total total={ this.total() }  />
        <ExpenseList expenses={ this.props.expenses } />
      </div>
    );
  }
};

