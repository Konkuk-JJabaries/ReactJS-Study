import React, { Component } from "react";
import BoardListGroup from "./BoardListGroup";
import "./BoardList.scss";

class BoardList extends Component {
  render() {
    const { groupList } = this.props;

    const groupLists = groupList.map((group, index) => {
      const { groupName, boardList } = group;
      return (
        <BoardListGroup
          key={index}
          groupName={groupName}
          boardList={boardList}
        />
      );
    });

    return <div className="board-list">{groupLists}</div>;
  }
}

export default BoardList;
