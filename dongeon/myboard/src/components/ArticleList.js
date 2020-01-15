import React, { Component } from "react";
import ArticleListItem from "./ArticleListItem";
import axios from "axios";
import "./ArticleList.scss";

class ArticleList extends Component {
  state = {
    articleList: [],
    page: 1
  };
  requestArticleList = async (boardNo, page) => {
    const res = await axios({
      url: "http://localhost:8080",
      params: {
        page: page || 1,
        boardNo
      }
    });
    this.setState({ boardNo, articleList: res.data, page });
  };

  componentDidMount() {
    // 처음 컴포넌트가 생성됐을 때 실행
    const { boardNo } = this.props;
    this.requestArticleList(boardNo, 1);
  }
  componentWillReceiveProps(nextProps) {
    const { boardNo } = nextProps;
    if (boardNo !== this.state.boardNo) this.requestArticleList(boardNo, 1);
  }
  render() {
    const { articleList } = this.state;
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
