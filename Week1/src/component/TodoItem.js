import React, { Component } from 'react';

class TodoItem extends Component {
    static defaultProps = {
        done: false,
    };

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const onClicked = e => {
            this.setState({
                done: !this.state.done,
            });
        };

        const { itemName } = this.props;
        const { done } = this.state;
        return (
            <div className={'todo-item'} onClick={onClicked}>
                {done ? '[Done] ' : ''}
                {itemName}
            </div>
        );
    }
}

export default TodoItem;
