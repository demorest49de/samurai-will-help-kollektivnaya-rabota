import React, {useState} from "react";
import "./App.css";
import Todolist, {TaskType} from "./components/Todolist";

export enum Enum {
    all = "All", completed = "Completed", active = "Active"
}

export type FilterType = Enum.all | Enum.completed | Enum.active

function App() {

    const initialTasks: Array<TaskType> = [
        {id: 1, title: "React", isDone: false},
        {id: 2, title: "Redux", isDone: true},
        {id: 3, title: "SSR", isDone: false},
    ];

    const [tasks, setTasks]
        = useState([...initialTasks])

    const [filter, setFilter]
        = useState<FilterType>(Enum.all)

    let filteredTasks = tasks;

    if (filter === Enum.completed) {
        filteredTasks = tasks.filter(t => t.isDone)
    }
    if (filter === Enum.active) {
        filteredTasks = tasks.filter(t => !t.isDone)
    }

    const deleteTask = (id: number) => {
        const filteredTasks = tasks.filter(task => task.id !== id)
        setTasks(filteredTasks)
    }

    const filterTasks = (status: FilterType) => {
        setFilter(status)
    }

    return (
        <div className="App">
            <Todolist
                title={"What to learn 1"}
                tasks={filteredTasks}
                date={new Date().toString()}
                deleteTask={deleteTask}
                filterTasks={filterTasks}
            />
        </div>
    );
}

export default App;
