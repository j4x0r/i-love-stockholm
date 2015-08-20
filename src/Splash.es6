import React from 'react';
import mui from 'material-ui';

const ThemeManager = new mui.Styles.ThemeManager();
const {Avatar, RaisedButton} = mui;

export default class Splash extends React.Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div className="splash">
        <div className="splash__box">
          <br /><br />
          <Avatar size={130} src="https://lh6.googleusercontent.com/-xiM8Vu1w0cg/AAAAAAAAAAI/AAAAAAAAABc/pPPsi-NnZBw/photo.jpg" />
          <h2>Hey, Vanessa!</h2>
          <br /><br />
          <RaisedButton label="Login" />
        </div>
      </div>
    );
  }

}

Splash.childContextTypes = {
  muiTheme: React.PropTypes.object
}

