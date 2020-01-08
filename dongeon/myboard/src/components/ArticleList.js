import React, { Component } from "react";
import ArticleListItem from "./ArticleListItem";
import "./ArticleList.scss";

class ArticleList extends Component {
  render() {
    const { articleList } = this.props;
    return (
      <div className="article-list">
        {articleList.map((articleInfo, index) => {
          return <ArticleListItem key={index} articleInfo={articleInfo} />;
        })}
      </div>
    );
  }
}
export default ArticleList;
