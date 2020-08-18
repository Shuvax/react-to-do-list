import React from 'react';
import shortid from 'shortid';
import './ToDoList.css';

class ToDoForm extends React.Component {
    state = { text: '' }


    handleChange = (e) => {
        this.setState({ 
            [e.target.name]: e.target.value
            
        });
    };

    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({ 
            text: ''
        })
    }




    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    name='text'
                    value={this.state.text} 
                    onChange={this.handleChange} 
                    placeholder='To do...'
                />
                <button className='addButton' onClick={this.handleSubmit}>Add</button>
            </form>
           
        )
    }

}

export default ToDoForm;