import React from 'react';
import Expense from "./Expense";

export default class ExpenseList extends React.Component {

  constructor(props) {
    super(props);

    this.expenses = [
      { amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
      { amount: 159, title: "Pharmarium", subtitle: "Bar", avatar: "http://pharmarium.se/sites/pharmarium.se/files/styles/gallery_thumb/public/mail_attachment-1.jpeg?itok=U4lrc3pK" },
      { amount: 214, title: "Shibumi", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2015/07/7bafe7ffe27a22813b1db63832799128.jpg" },
      { amount: 90, title: "Vasa Museet", subtitle: "Museum", avatar: "http://filer.barnsajten.se/akt_foto/vasamuseet(1).jpg" }
    ]

  }

  render() {
    return (
      <ul className="expense-list">
        { this.renderList() }
      </ul>
    );
  }

  renderList() {
    return this.expenses.map((expense) => {
      return (
        <li className="expense">
          <Expense {...expense} />
        </li>
      );
    })

  }

};

Expense.childContextTypes = {
  muiTheme: React.PropTypes.object
}


