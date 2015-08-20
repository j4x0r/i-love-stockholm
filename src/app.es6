import React from 'react';
import Budget from "./Budget";
import Menu from "./Menu";

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'guide',
      uid: 14,

      expenses: [
        { id: 1, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 2, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 3, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 4, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 5, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 6, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 7, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 9, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 10, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 11, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 12, amount: 159, title: "Pharmarium", subtitle: "Bar", avatar: "http://pharmarium.se/sites/pharmarium.se/files/styles/gallery_thumb/public/mail_attachment-1.jpeg?itok=U4lrc3pK" },
        { id: 13, amount: 214, title: "Shibumi", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2015/07/7bafe7ffe27a22813b1db63832799128.jpg" },
        { id: 14, amount: 90, title: "Vasa Museet", subtitle: "Museum", avatar: "http://filer.barnsajten.se/akt_foto/vasamuseet(1).jpg" }
      ]
    };

  }

  navigate(location) {
    this.setState({location: location});
  }

  addExpense() {
    const newId = this.state.uid + 1;
    const newExpense = {id: newId, title: "N", subtitle:"N", amount: 1000};
    this.setState({uid: newId, expenses: [newExpense, ...this.state.expenses]})
  }

  render() {
    return (
      <main>
        <button onClick={ this.addExpense.bind(this) }>Add expense</button>
        { this.renderContent() }
        <Menu onNavigate={ this.navigate.bind(this) } />
      </main>
    );
  }

  renderContent() {
    switch(this.state.location){
      case 'guide':
        return <Guide />
      case 'budget':
        return <Budget expenses={ this.state.expenses } />
      case 'map':
        return null
    };
  }
};
