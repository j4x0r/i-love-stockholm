import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const DatePicker = mui.DatePicker;

export default class Test extends React.Component {


  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <DatePicker hintText="Date Dialog"/>
    );
  }

};

Test.childContextTypes = {
  muiTheme: React.PropTypes.object
}

