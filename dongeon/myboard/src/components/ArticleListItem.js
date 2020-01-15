import React, { Component } from "react";
import cx from "classnames";

class ArticleListItem extends Component {
  render() {
    const { articleInfo } = this.props;
    const {
      fixed,
      vote,
      title,
      comments,
      boardName,
      boardNo,
      articleNo,
      time,
      nickname,
      icon,
      thumbnail
    } = articleInfo;

    return (
      <div className={cx("article-list-item", { fixed })}>
        <div className="article-vote">
          {!fixed ? (
            vote
          ) : (
            <img src="https://talk.op.gg/images/icon_notice@2x.png" alt="" />
          )}
        </div>
        <div className="article-content">
          <a href={`#${boardNo}/${articleNo}`} className="article-title">
            {title} <span className="article-comments">[{comments}]</span>
          </a>
          <div className="article-info">
            <span className="board-name">{boardName}</span>
            <span className="time">{time}</span>
            <span className="nickname">
              <img className="icon" alt="" src={icon} />
              {nickname}
            </span>
          </div>
        </div>
        {!fixed ? (
          <div className="thumbnail">
            <img src={thumbnail} alt="" />
          </div>
        ) : null}
      </div>
    );
  }
}

export default ArticleListItem;
