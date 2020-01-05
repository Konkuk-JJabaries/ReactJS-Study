import React, { Component } from "react";

class BoardListItem extends Component {
  render() {
    const { boardName, boardNo } = this.props;
    return (
      <div
        className={[
          "board-list-group-item",
          boardNo == 4 ? "selected" : ""
        ].join(" ")}
      >
        <a href={`#${boardNo}`}>{boardName}</a>
      </div>
    );
  }
}

export default BoardListItem;
