import React, { Component } from 'react';
import TodoItem from './component/TodoItem';
import TodoItemList from './component/TodoItemList';
import TodoItemManager from './component/TodoItemManager';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: [
                {
                    no: 1,
                    name: '리액트를 배워보자 (1)',
                },
                { no: 2, name: '리액트를 배워보자 (2)', done: true },
                { no: 3, name: '리액트를 배웠다.' },
                { no: 4, name: '리액트를 활용하자', done: true },
            ],
        };
    }

    render() {
        const appendTodoItem = name => {
            this.setState({
                ...this.state,
                todo: [...this.state.todo, { no: this.state.todo.length + 1, name }],
            });
        };

        let { todo } = this.state;
        todo = todo.sort((item, item2) => {
            return item2.no - item.no;
        });

        return (
            <div className="App">
                <TodoItemManager appendTodoItem={appendTodoItem}></TodoItemManager>
                <TodoItemList>
                    {todo.map(item => (
                        <TodoItem itemName={item.name} key={item.no} done={item.done} />
                    ))}
                </TodoItemList>
            </div>
        );
    }
}

export default App;
