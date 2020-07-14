import React, { Component } from 'react';
import './todos.css';
import TodoItem from './TodoItem';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem 
                key={todo.id}
                todo={todo}
                markCompleted={this.props.markCompleted}
                delTodo={this.props.delTodo}   
                />
        ))
    }
}

export default Todos;