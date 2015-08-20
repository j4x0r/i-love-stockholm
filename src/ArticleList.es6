import React from 'react';
import Article from "./Article";
import classNames from 'classnames';
export default class ArticleList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {expandedArticleId: null};
  }

  render() {
    return (
      <ul className="article-list">
        { this.renderList() }
      </ul>
    );
  }

  onExpand(id) {
    console.log("EXPAND")
    this.setState({expandedArticleId: id});
    location.href = `#article-${id}`
  }

  className(article) {
    return classNames("article-preview", {
      'is-expanded': this.state.expandedArticleId == article.id
    });
  }

  renderList() {

    return this.props.articles.map((article) => {
      return (
        <li id={ `article-${article.id}` } key={article.id} className={ this.className(article) }>
          <Article onExpand={ this.onExpand.bind(this) } {...article} expanded={ this.state.expandedArticleId == article.id} />
        </li>
      );
    })

  }

};
