import React, { useState } from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';

function ToDolist() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim()!==""){
        setTasks(t=>[...t,newTask]);
        setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks=tasks.filter((_,i)=>i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index >0){
          const updatedTasks=[...tasks];
          [updatedTasks[index],updatedTasks[index-1]]= [updatedTasks[index-1],updatedTasks[index]];
          setTasks(updatedTasks);
        }
        
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index+1]]= [updatedTasks[index+1],updatedTasks[index]];
            setTasks(updatedTasks); 
        }
        
    }

    return (
        <div className="To-Do-List">
            <h1>Note It!</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            <DeleteOutlinedIcon />
                        </button>
                        <button className="moveup-button" onClick={() => moveTaskUp(index)}>
                            <ArrowUpwardOutlinedIcon />
                        </button>
                        <button className="movedown-button" onClick={() => moveTaskDown(index)}>
                            <ArrowDownwardOutlinedIcon />
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDolist;
