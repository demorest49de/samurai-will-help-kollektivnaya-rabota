import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";

function App() {
    return (
        <div className="App">
            <Todolist title={"What to learn 1"} />
            <Todolist title={"What to learn 2"} />
            <Todolist title={"What to learn 3"}/>
        </div>
    );
}

export default App;
