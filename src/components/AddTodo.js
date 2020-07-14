import React, { Component } from 'react'

export class AddTodo extends Component {
    state = { 
        name: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.name);
        this.setState({ name: ''});
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input type="text"
                        name="name" 
                        placeholder="Add todo"
                        style={{'flex': '10', padding:'5px', border:'none', borderRadius: '12px'}} 
                        value={this.state.name}
                        onChange={this.onChange}
                        />
                <input type="submit" 
                        value= "submit" 
                        className="btn" 
                        style={{flex:'1'}} />

            </form>
        )
    }
}

export default AddTodo
