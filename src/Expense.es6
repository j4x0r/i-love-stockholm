import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {Checkbox, DatePicker, Card, CardHeader, CardText, CardActions, FlatButton, Avatar} = mui;

export default class Expense extends React.Component {

  constructor(props) {
    super(props);

    this.state = {expanded: false};
  }

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  doSomething(event) {
    event.preventDefault();
    event.stopPropagation();

  }

  expand(event) {
    this.setState({expanded: !this.state.expanded});
  }

  render() {
    return (
      <Card initiallyExpanded={ this.state.expanded } expandable={true} onClick={ this.expand.bind(this) }>
        <h1 className="expense__amount">
          { this.props.amount } <small>SEK</small>
        </h1>
        <CardHeader
          title={ this.props.title }
          subtitle={ this.props.subtitle }
          avatar={ this.props.avatar }
          showExpandableButton={false}>
        </CardHeader>
        { this.state.expanded &&
          <div>
          <CardText expandable={true}>
            2015-09-19 (1 day ago)
            2k people been there
          </CardText>
          <CardActions expandable={true}>
            <FlatButton label="Action1" onClick={ this.doSomething.bind(this) }/>
            <FlatButton label="Action2"/>
          </CardActions>
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText></div> }
      </Card>
    );
  }

};

Expense.childContextTypes = {
  muiTheme: React.PropTypes.object
}
