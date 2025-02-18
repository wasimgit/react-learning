import { useState } from "react";

export default function ToDoTask() {

    const [ inputValue, setInputValue ] = useState('')
    const [ tasks,  setTasks ] = useState([])

    function inputValueHandleChange(e) {
        setInputValue(e.target.value)
    }

    function addTaskHandle(e) {
        e.preventDefault()
        setTasks([...tasks, inputValue])
        setInputValue('')
    }
    const deleteHandle = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
    }

    return (
        <>
            <h1> to do tasks </h1>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    onChange={inputValueHandleChange}
                />
                <button onClick={ addTaskHandle }>Add Task</button>
            </form>
            <ul>
                {
                    tasks.map((task, index) => (
                        <li key={index}>
                            {task}
                            <button onClick={ () => deleteHandle(index)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}