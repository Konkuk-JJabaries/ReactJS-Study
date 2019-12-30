import React, { Component } from 'react';

class TodoItemList extends Component {
    render() {
        const { children } = this.props;
        return <div className="todo-item-list">{children}</div>;
    }
}

export default TodoItemList;
