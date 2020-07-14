import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    // dynamic style
    getStyle = () => {
        return {
            padding: '10px',
            textDecoration: this.props.todo.isCompleted ?
            'line-through': 'none'
        }
    }

    render() {
        // destructering
        const { id, title} = this.props.todo;
        return (
        <div style={this.getStyle()}>
            <p>
                <input 
                    type="checkbox"
                    onChange={this.props.markCompleted.bind(this, id)}
                />{' '}
                {title}
                <button onClick={this.props.delTodo.bind(this, id)} 
                    style={btnStyle}>x</button>
            </p>
        </div>
        )
    }
}

// PropTypes => add to all needing components 
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    todos: PropTypes.array.isRequired,
    markCompleted: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

//  static style - alternative to inline style ( use with single {} ) and css file

const btnStyle = {
    background: '#f6f6f6',
    color: '#H8H8H8',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
