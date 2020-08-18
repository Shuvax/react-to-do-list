import React from 'react';
import './ToDoList.css';

export default (props) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div 
            style={{
                textDecoration: props.todo.complete ? 'line-through': ''
            }}
            onClick={props.toggleComplete}
        >      
            {props.todo.text}
        </div>
        <button className='deleteButton' onClick={props.onDelete}>x</button>
    </div>
)