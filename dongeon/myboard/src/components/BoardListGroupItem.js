import React, { Component } from "react";
import cx from "classnames";
class BoardListGroupItem extends Component {
  state = {
    selected: false
  };

  linkOnClicked = e => {
    this.setState({
      selected: !this.state.selected
    });
  };

  render() {
    const { boardName, boardNo } = this.props;
    const { selected } = this.state;
    return (
      <div className={cx("board-list-group-item", { selected })}>
        <a href={`#${boardNo}`} onClick={this.linkOnClicked}>
          {boardName}
        </a>
      </div>
    );
  }
}

export default BoardListGroupItem;
