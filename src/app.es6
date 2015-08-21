import React from 'react';
import Budget from "./Budget";
import Guide from "./Guide";
import Menu from "./Menu";
import Splash from "./Splash";
import Map from "./Map";
import _ from 'react-fastclick';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      splash: true,
      location: 'guide',
      uid: 14,
      limit: 5000,
      expenses: [
        { id: 1, amount: 505, title: "Pontus!", subtitle: "Restaurant", avatar: "http://3.bp.blogspot.com/-Ioh4VNlB6Z0/VCalqE_RQbI/AAAAAAAAFcU/JBelSGW1Mh0/s1600/pontus!.jpg" },
        { id: 2, amount: 650, title: "Operakällarnen", subtitle: "Restaurant", avatar: "http://orsjo.se/wp-content/uploads/2013/02/Opera_3.jpg" },
        { id: 3, amount: 764, title: "Le Rouge", subtitle: "Restaurant", avatar: "http://www.lerouge.se/images/1440/1440x720-startimage.jpg" },
        { id: 4, amount: 273, title: "Nook", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg" },
        { id: 5, amount: 159, title: "Pharmarium", subtitle: "Bar", avatar: "http://pharmarium.se/sites/pharmarium.se/files/styles/gallery_thumb/public/mail_attachment-1.jpeg?itok=U4lrc3pK" },
        { id: 6, amount: 214, title: "Shibumi", subtitle: "Restaurant", avatar: "http://totallystockholm.se/wp-content/uploads/2015/07/7bafe7ffe27a22813b1db63832799128.jpg" },
        { id: 7, amount: 90, title: "Vasa Museet", subtitle: "Museum", avatar: "http://filer.barnsajten.se/akt_foto/vasamuseet(1).jpg" }
      ]
    };

    this.newExpenses = [
      {title: "Åhléns", subtitle:"Clothing", amount: 1316, avatar: "https://m2.behance.net/rendition/pm/1042095/disp/3d65c1307b159722a3721dcbdce91fce.jpg" },
      {title: "SL Ticket", subtitle:"Transportation", amount: 36, avatar: "http://sl.se/Resources/img/sl_logo_fb.png"}
    ]
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyDown.bind(this), false);
  }

  keyDown(e) {
    let keyCode = e.keyCode;
    if(keyCode == 48) {
      this.addExpense();
    }
  }

  navigate(location) {
    this.setState({location: location});
  }

  newExpenses() {

  }
  addExpense() {
    const newId = this.state.uid + 1;
    const newExpense = this.newExpenses.shift()
    newExpense.id = newId;
    this.setState({uid: newId, expenses: [newExpense, ...this.state.expenses]})
  }

  render() {
    console.log("RR");
    return (
      <main>
       { this.state.splash ? <Splash login={ this.login.bind(this) } /> : this.app() }
      </main>
    );
  }

  app() {
    return (
      <div>
        { this.renderContent() }
        <Menu location={ this.state.location } onNavigate={ this.navigate.bind(this) } />
      </div>
    );
  }

  onUpgrade() {
    this.setState({limit: 10000});
  }

  login() {
    this.setState({splash: false});
  }

  renderContent() {
    console.log("LOC", this.state.location);
    switch(this.state.location){
      case 'guide':
        return <Guide />
      case 'budget':
        return <Budget onUpgrade={ this.onUpgrade.bind(this) } limit={ this.state.limit } expenses={ this.state.expenses } />
      case 'map':
        return <Map />
    };
  }
};
