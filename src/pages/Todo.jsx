import React, { useState, useEffect } from 'react'

const Todo = () => {

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task) {
            const newTask = { id: new Date().getTime().toString(), title: task };
            setTasks([...tasks, newTask]);
            localStorage.setItem("localTask", JSON.stringify([...tasks, newTask]));
            setTask("");
        }
    }


    const deleteTask = (id) => {
        const deleted = tasks.filter((t) => t.id !== id);
        setTasks(deleted);
        localStorage.setItem("localTask", JSON.stringify(deleted));
    }

    const clearTask = () => {
        setTasks([]);
        localStorage.removeItem("localTask");
    }

    useEffect(() => {
        if (localStorage.getItem("localTask")) {
            const storedList = JSON.parse(localStorage.getItem("localTask"));
            setTasks(storedList);
        }
    }, [])


    // second Attempt both are correct
    // useEffect(() => {
    //     let storedList = localStorage.getItem('taskValue')
    //     if (storedList) {
    //        let storedListData = JSON.parse(storedList)
    //         setTasks(storedListData)
    //     }
    // }, []);


    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                name='task'
                value={task}
                placeholder='Write Your Task...'
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={addTask}>Add Items</button>

            <div>
                {
                    !tasks.length ? "no tasks"
                        : tasks.length === 1 ? "1 Tasks"
                            : tasks.length > 1 ? `${tasks.length} tasks`
                                : null
                }
            </div>

            <div>
                {
                    tasks.map((task) => (
                        <div key={task.id}>
                            <h3>{task.title}</h3>
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                        </div>
                    ))
                }
            </div>


            {
                tasks.length > 0 ? <div>
                    <button onClick={clearTask}>Clear Task</button>
                </div> : null
            }

        </div>
    )
}

export default Todo
