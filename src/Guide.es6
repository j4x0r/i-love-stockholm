import React from 'react';
import ArticleList from "./ArticleList";

export default class Guide extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

    this.articles = [
      {
        id: 1,
        title: "Nook",
        body: "Lorem ipsum",
        picture: "http://totallystockholm.se/wp-content/uploads/2014/10/nook.jpg"
      }
    ];

  }

  render() {
    return (
      <div>
        <ArticleList articles={ this.articles } />
      </div>
    );
  }
};

