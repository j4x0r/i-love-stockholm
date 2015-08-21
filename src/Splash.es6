import React from 'react';
import mui from 'material-ui';
import {Spring} from 'react-motion';

const ThemeManager = new mui.Styles.ThemeManager();
const {TextField, Avatar, RefreshIndicator, RaisedButton} = mui;

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: false};
  }

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
          { !this.state.login &&
            <div>
              <TextField
                hintText="User name"
                floatingLabelText="User name" />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                type="password" />
              <RaisedButton onClick={() => this.setState({login: true}) } label="Sign in" />

            </div>
          }
          { this.state.login &&
            (
             <div>
              <Spring defaultValue={{val: 0}} endValue={{config: [140, 10], val: this.state.login ? 130 : 0}}>
              {(interpolated) => {
                return (
                  <div>
                    <h2>Good morning, Vanessa!</h2>
                    <br />
                    <RaisedButton onClick={() => this.props.login() } label="Enter" />
                    <br />
                    <br />
                    <Avatar size={interpolated.val} src="https://lh6.googleusercontent.com/-xiM8Vu1w0cg/AAAAAAAAAAI/AAAAAAAAABc/pPPsi-NnZBw/photo.jpg" />
                    <br /><br />
                  </div>
                );
              }}
              </Spring>
                  </div>

            )
          }
        </div>
      </div>
    );
  }

}

Splash.childContextTypes = {
  muiTheme: React.PropTypes.object
}

