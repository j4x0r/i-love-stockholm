import React from 'react';
import Article from "./Article";

export default class ArticleList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="article-list">
        { this.renderList() }
      </ul>
    );
  }

  renderList() {
    return this.props.articles.map((article) => {
      return (
        <li key={article.id} className="article-preview">
          <Article {...article} />
        </li>
      );
    })

  }

};

Expense.childContextTypes = {
  muiTheme: React.PropTypes.object
}


