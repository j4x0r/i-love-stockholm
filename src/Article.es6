import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {Paper} = mui;

export default class Article extends React.Component {

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

  render() {
    return (
      <Paper zDepth={ this.props.expanded ? 4 : 1 } onClick={() => this.props.onExpand(this.props.id) }>
        <div className="article-preview__rank">
          { this.props.rank }
        </div>

        <div className="article-preview__image" style={ {backgroundImage: `url(${this.props.picture})`} } />
        <div className="article-preview__content" >
          <h2>{ this.props.title }</h2>
          <p>{ this.props.summary }</p>
          { this.props.expanded &&
            <p>{ this.props.body }</p> }
        </div>
      </Paper>

    );
  }

};

Article.childContextTypes = {
  muiTheme: React.PropTypes.object
}

