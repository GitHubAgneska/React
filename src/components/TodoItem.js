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
        const { id, name } = this.props.todo;
        return (
        <div style={this.getStyle()}>
            <p>
                <input 
                    type="checkbox"
                    onChange={this.props.markCompleted.bind(this, id)}
                />{' '}
                {name }
                <button onClick={this.props.delTodo.bind(this, id)} 
                    style={btnStyle}>x</button>
            </p>
        </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

/* static style - alternative to inline style ( use with single {} )

const itemStyle = {
    backgroundColor: '#f4f4f4'
} 
*/
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
