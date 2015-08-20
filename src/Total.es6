import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";
import colors from 'material-ui/src/styles/colors';
import {Spring} from 'react-motion';
injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {FlatButton, RaisedButton, Paper, LinearProgress} = mui;

export default class Total extends React.Component {
  constructor(props) {
    super(props);

    this.state = {dismissed: false};
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    const left = this.props.limit - this.props.total;
    const closeToLimit = left < 1000;
    const perc = (this.props.total / this.props.limit) * 100
          //<span className="total-title left">
            //{this.props.limit - this.props.total} SEK left
          //</span>

    return (
      <div className="total">
        <h1 className="total-title">
          {this.props.total}/<small>5.000 SEK</small>
        </h1>
        <div className="progress">
          <div  style={{width: `${perc}%`}} className="progress__bar" />
        </div>

        { closeToLimit && !this.state.dismissed && this.renderUpgradeBox(left) }
      </div>
    );
  }

  dismiss() {
    this.setState({dismissed: true});
  }

  upgrade() {
    this.props.onUpgrade();
  }

  renderUpgradeBox(left) {
    return (
      <Paper className="upgrade-box" style={{margin: "10px 0"}}>
        <h3>Hey, Vanessa!</h3>
        <p>Your current card limit is 5.000 sek, and you have only {left} sek left.</p>
        <p>We approved an upgrade to <b>10.000</b> sek, and you can pay it later in 10 installments.</p>
        <div style={{textAlign: "right"}}>
          <FlatButton onClick={ this.dismiss.bind(this) } label="No, thanks" />
          &nbsp;
          <RaisedButton onClick={ this.upgrade.bind(this) } primary={true} label="Yes, upgrade me" />
        </div>
      </Paper>
    );
  }
};

Total.childContextTypes = {
  muiTheme: React.PropTypes.object
}
