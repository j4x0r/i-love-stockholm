import React from 'react';
import classNames from 'classnames';

import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {ToolbarSeparator, FontIcon, IconMenu, Toolbar, ToolbarGroup, IconButton} = mui;

import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';

export default class Menu extends React.Component {

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  navigate(location){
    this.props.onNavigate(location);
  }

  className(location){
    return classNames("menu__item", {
      "is-selected": location == this.props.location
    });
  }

  render() {
    return (
      <div className="menu">
        <div className={ this.className('map') } onClick={() => this.navigate('map')}>
          <FontIcon iconStyle={ {fontSize: '32px' }} className="material-icons">room</FontIcon>
        </div>
        <div className={ this.className('guide') } onClick={() => this.navigate('guide')}>
          <FontIcon iconStyle={ {color: "white", fontSize: '32px' }} className="material-icons">favorite</FontIcon>
        </div>
        <div className={ this.className('budget') } onClick={() => this.navigate('budget')}>
          <FontIcon iconStyle={ {fontSize: '32px' }} className="material-icons">credit_card</FontIcon>
        </div>
      </div>
    );
  }
};



Menu.childContextTypes = {
  muiTheme: React.PropTypes.object
}

