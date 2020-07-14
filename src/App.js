import React,  { Component } from 'react';
import TicTacToe from './components/TicTacToe';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import './App.css';
import AddTodo from './components/AddTodo';
import uuid from 'react-uuid';


class App extends Component {
    state = {
        todos: [
            { 
                id: uuid(),
                name: 'Learn React',
                isCompleted: false
            },
            { 
                id: uuid(),
                name: 'Learn more about JS fundamentals',
                isCompleted: false
            },
            { 
                id: uuid(),
                name: 'Buy plant pots and a sack of soil',
                isCompleted: true
            }
        ]
    }

    // mark as isCompleted
    markCompleted = (id) => {
        console.log('mark completed triggered in APP comp: id= ', id);
        this.setState({ todos: this.state.todos.map( todo => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        }) });
    }

    // delete todo
    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }
    addTodo = (name) => {
        const newTodo = {
            id: uuid(),
            name: name,
            isCompleted: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});
    }

    render() {
        
        // console.log(this.state.todos);
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo}/>
                    <Todos  
                        todos={this.state.todos}
                        markCompleted={this.markCompleted}
                        delTodo={this.delTodo}/>
                    <h1>TIC-TAC-TOE</h1>
                    <TicTacToe />
                </div>
            </div>
        );
    }
}


export default App;
