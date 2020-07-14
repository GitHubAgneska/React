import React,  { Component } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import axios from 'axios';
// import uuid from 'react-uuid';
import './App.css';
import TicTacToe from './components/TicTacToe';
import About from './components/pages/About';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';


class App extends Component {
    state = {
        todos: []
    }

    // api call
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(res => this.setState({todos: res.data}))
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
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res =>  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]}))
    }

    // add todo
    addTodo = (title) => {
        axios.post('https://jsonplaceholder.typicode.com/todos', { title, isCompleted: false })
        .then(res => this.setState({todos: [...this.state.todos, res.data]})
        )
        
    }

    render() {
        
        // console.log(this.state.todos);
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos}
                                        markCompleted={this.markCompleted}
                                        delTodo={this.delTodo}/>
                            </React.Fragment>
                        )}/>
                        <Route path="/about" component={About} />
                        <h1>TIC-TAC-TOE</h1>
                        <TicTacToe />
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
