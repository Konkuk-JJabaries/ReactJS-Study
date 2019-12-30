import React, { Component } from 'react';

class TodoItemManager extends Component {
    render() {
        const { appendTodoItem } = this.props;
        const onKeyPressed = e => {
            if (e.which === 13) {
                console.log('appendTodoItem');
                appendTodoItem(e.target.value);
                e.target.value = '';
            }
        };
        return (
            <div>
                <input type="text" placeholder="Todo" onKeyPress={onKeyPressed} />
            </div>
        );
    }
}

export default TodoItemManager;
