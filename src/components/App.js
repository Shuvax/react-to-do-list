import React from 'react';
import ToDoList from './ToDoList'; 

class App extends React.Component {


    render() {
        return(
            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
                }}
            >
                <ToDoList />
            </div>
            
        )
    }
}

export default App;