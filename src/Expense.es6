import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {Checkbox, DatePicker, Card, CardHeader, CardText, CardActions, FlatButton, Avatar} = mui;

export default class Expense extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <Card initiallyExpanded={ false } expandable={true} >
        <h1 className="expense__amount">
          { this.props.amount } <small>SEK</small>
        </h1>
        <CardHeader
          title={ this.props.title }
          subtitle={ this.props.subtitle }
          avatar={ this.props.avatar }
          showExpandableButton={false}>
        </CardHeader>
      </Card>
    );
  }

};

Expense.childContextTypes = {
  muiTheme: React.PropTypes.object
}
