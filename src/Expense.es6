import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {Checkbox, DatePicker, Card, CardHeader, CardText, CardActions, FlatButton, Avatar} = mui;

class Star extends React.Component {
  render() {
    return (
      <svg style={ {display: "inline-block", height: "24px", width: "24px", transition: "all 2s cubic-bezier(0.23, 1, 0.32, 1) 200ms; position: absolute; opacity: 1; fill: rgba(0, 0, 0, 0.870588)" } } viewBox="0 0 24 24">
        <path fill="red" strokeWidth="1" d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z">
        </path>
      </svg>
    );
  }

}
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
        <h1 className="expense__amount">{ this.props.amount } <small>SEK</small></h1>
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
            <Checkbox
              name="checkboxName4"
              value="checkboxValue4"
              checkedIcon={<Star />}
              unCheckedIcon={<Star />}
              label="custom icon" />

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

