import React, { Component } from 'react';
import './todos.css';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <h3>{ todo.name }</h3>
        ))
    }
}

export default Todos;