import React,  { Component } from 'react';
import TicTacToe from './components/TicTacToe';
import Todos from './components/Todos';


class App extends Component {
    state = {
        todos: [
            { 
                id: 1,
                name: 'Learn React',
                isCompleted: false
            },
            { 
                id: 2,
                name: 'Learn more about JS fundamentals',
                isCompleted: false
            },
            { 
                id: 3,
                name: 'Buy plant pots and a sack of soil',
                isCompleted: false
            }
        ]
    }
    render() {
        // console.log(this.state.todos);
        return (
            <div className="App">
                <h1>TO-DO LIST</h1>
                <Todos  todos={this.state.todos}/>
                
                <h1>TIC-TAC-TOE</h1>
                <TicTacToe />
            </div>
        );
    }
}

export default App;
