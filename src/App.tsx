import React from "react";
import "./App.css";
import Todolist, { TaskType } from "./components/Todolist";

function App() {
    
    const tasks1: Array<TaskType> = [
        { id: 1, title: "React", isDone: false },
        { id: 2, title: "Redux", isDone: false },
        { id: 3, title: "SSR", isDone: false },
    ];
    const tasks2: Array<TaskType> = [
      //   { id: 1, title: "Vue", isDone: false },
      //   { id: 2, title: "Storybook", isDone: false },
      //   { id: 3, title: "Nest.js", isDone: false },
    ];

    return (
        <div className="App">
            <Todolist title={"What to learn 1"} tasks={tasks1} date={new Date().toString()} />
            <Todolist title={"What to learn 2"} tasks={tasks2} />
        </div>
    );
}

export default App;
