import React, { Component } from "react";
import BoardListItem from "./BoardListItemGroupItem";

class BoardListItemGroup extends Component {
  render() {
    const { boardList, groupName } = this.props;
    const boardListItems = boardList.map((board, index) => {
      const { boardName, boardNo } = board;
      return (
        <BoardListItem
          key={index}
          boardName={boardName}
          boardNo={boardNo}
        ></BoardListItem>
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

export default BoardListItemGroup;
