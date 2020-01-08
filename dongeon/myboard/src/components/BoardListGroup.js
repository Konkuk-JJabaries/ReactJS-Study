import React, { Component } from "react";
import BoardListGroupItem from "./BoardListGroupItem";

class BoardListGroup extends Component {
  render() {
    const { boardList, groupName } = this.props;
    const boardListItems = boardList.map((board, index) => {
      const { boardName, boardNo } = board;
      return (
        <BoardListGroupItem
          key={index}
          boardName={boardName}
          boardNo={boardNo}
        />
      );
    });

    return (
      <div className="board-list-group">
        <div className="board-list-group-name">{groupName}</div>
        <div className="board-list-group-items">{boardListItems}</div>
      </div>
    );
  }
}

export default BoardListGroup;
