import React, { useState, useEffect } from 'react'

const TodoPractice = () => {

    const [inpuVal, setInpuVal] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        const newTask = { id: new Date().getTime().toString(), title: inpuVal };
        setTasks([...tasks, newTask]);
        localStorage.setItem("taskValue", JSON.stringify([...tasks, newTask]))
        console.log(tasks);
    }

    const clearTask = () => {
        localStorage.removeItem("taskValue")
        setTasks([]);
    }

    const deleteTask = (id) => {
        const deletedTask = tasks.filter((t) => t.id !== id)
        setTasks(deletedTask)
        localStorage.setItem("taskValue", JSON.stringify(deletedTask))
        console.log(id);
    }

    useEffect(() => {
        let getJson = localStorage.getItem('taskValue')
        if (getJson) {
           let arrayName = JSON.parse(getJson)
            setTasks(arrayName)
        }
    }, []);


    return (
        <div>
            <h1>TodoPractice</h1>
            <input type="text" onChange={(e) => setInpuVal(e.target.value)} />
            <button onClick={addTask}>Add Items</button>

            <div>
                {
                    !tasks.length ? "no Tasks" :
                        tasks.length === 1 ? "1 Tasks" :
                            tasks.length > 1 ? `${tasks.length} Tasks` :
                                null
                }
            </div>

            <div>
                {
                    tasks.map((task) => (
                        <div>
                            <h3>{task.title}</h3>
                            <button onClick={() => deleteTask(task.id)}>Detelet task</button>
                        </div>
                    ))
                }

            </div>
            <div>
                {
                    tasks.length > 0 ?
                        <button onClick={clearTask}>Clear</button>
                        : null
                }
            </div>
        </div>
    )
}

export default TodoPractice
