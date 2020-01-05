import React, { Component } from "react";

class BoardListItem extends Component {
  render() {
    const { boardName, boardNo } = this.props;
    return (
      <div className="board-list-group-item">
        <a href={`#${boardNo}`}>{boardName}</a>
      </div>
    );
  }
}

export default BoardListItem;
