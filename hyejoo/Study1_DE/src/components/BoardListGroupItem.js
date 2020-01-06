import React, { Component } from "react";

class BoardListItem extends Component {
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
             <div
                className={["board-list-group-item", selected ? "selected" : ""].join(
                    " "
                )}
            >
                <a href={`#${boardNo}`} onClick={this.linkOnClicked}>
                    {boardName}    
                </a>    
            </div>
         );
     }
}
export default BoardListItem;