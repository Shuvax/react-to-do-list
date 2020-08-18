import React from 'react';
import ToDoForm from './ToDoForm';
import Todo from './Todo';
import './ToDoList.css';

class ToDoList extends React.Component {
    state = { todos: [], todoToShow: 'all', toggleAllComplete: true }


    addTodo = (todo) => { 
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    }

    toggleComplete = (id) => {
        this.setState({ 
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                        // returns todo object but just changes the complete value to opposite of original
                    };
                } else {
                    return todo;
                }

            })
        })
    }

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }


    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeAllTodosThatAreComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }


    render() {
        let todos = [];

        if (this.state.todoToShow === 'all') {
            todos = this.state.todos;
        } else if (this.state.todoToShow === 'active') {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if (this.state.todoToShow === 'complete') {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return (
            <div /*style={{ display: 'flex', justifyContent: 'center' }}*/>
                
                <div>
                    <ToDoForm onSubmit={this.addTodo} />
                    <br />
                    {todos.map(todo => (
                        <Todo 
                            key={todo.id} 
                            toggleComplete={() => this.toggleComplete(todo.id)} 
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo} 
                        />
                    ))}
                    <br />
                </div>
            
                <div className='leftToDo' style={{ textAlign: 'center' }}>
                    Left to do: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                
                <div style={{ textAlign: 'center' }}>
                    <br />
                    <div >
                        <button className='button-basic' onClick={() => this.updateTodoToShow('all')}>all</button>
                    </div>
                    
                    <br />
                    <div >
                        <button className='button-basic' onClick={() => this.updateTodoToShow('active')}>active</button>
                    </div>
                    
                    <br />
                    <div >
                        <button className='button-basic' onClick={() => this.updateTodoToShow('complete')}>complete</button>
                    </div>
                    <br />
                </div>
                
                
                {this.state.todos.some(todo => todo.complete) ? (
                <div style={{ textAlign: 'center' }}>
                    <button onClick={this.removeAllTodosThatAreComplete}>
                        remove all complete todos
                    </button>
                </div>
                ) : null}
                
                <div style={{ textAlign: 'center' }}>
                    <button 
                        className='button-basic'
                        onClick={() => 
                            this.setState({
                                todos: this.state.todos.map(todo => ({
                                    ...todo,
                                    complete: this.state.toggleAllComplete
                                })),
                                toggleAllComplete: !this.state.toggleAllComplete
                            })
                        }
                    >
                        Toggle All Complete: {`${this.state.toggleAllComplete}`}
                    </button>
                </div>
            </div>
        )
    }
}

export default ToDoList;