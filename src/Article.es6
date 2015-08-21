import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

const ThemeManager = new mui.Styles.ThemeManager();
const {FontIcon, DatePicker, Snackbar, RaisedButton, Paper} = mui;

export default class Article extends React.Component {

  constructor(props) {
    super(props);

    this.state = {booked: false};
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
    const style = this.state.booked ?
      {background: "#ffeb3b", border: "2px solid #ffeb3b"} :
      {}
    return (
      <Paper style={style}zDepth={ this.props.expanded ? 4 : 1 } >
        <a className="article__link" href={`#article-${this.props.id}`} onClick={() => this.props.onExpand(this.props.id) } >
          <div className="article-preview__rank">
            { this.props.rank }
          </div>

          <div className="article-preview__image" style={ {backgroundImage: `url(${this.props.picture})`} } />
          <div className="article-preview__content" >
            <h2 className="price">$$$</h2>
            <h2>{ this.props.title } { this.state.booked && "(Booked)" }
            </h2>
            <small><FontIcon style={ {fontSize: '14px', verticalAlign: "sub" }} className="material-icons">room</FontIcon> 1.2km</small>
            <p>{ this.props.summary }</p>

            { this.props.expanded && this.content() }
          </div>
        </a>
      </Paper>

    );
  }

  content() {
    return (
      <div>
        <p>{ this.props.body }</p>
        <div style={{textAlign: "right", padding: "20px"}}>
          <DatePicker
            onClick={(e) => e.preventDefault()}
            style={{top: "20px"}}
            hintText="Booking date" />

          <RaisedButton onClick={ this.book.bind(this) }
              label="Book now"
              primary={true} />
        </div>
      </div>
    );
  }

  book(e){
    console.log("BOOK");
    e.preventDefault();
    e.stopPropagation();
    this.props.onExpand(null);
    this.setState({booked: true});
  }

};

Article.childContextTypes = {
  muiTheme: React.PropTypes.object
}

