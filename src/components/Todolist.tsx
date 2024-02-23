import React from "react";
import PropTypes from "prop-types";
import {Button} from "./Button";
import {Enum, FilterType} from "../App";

export type TaskType = {
    id: number;
    title: string;
    isDone: boolean;
};

type TodolistProps = {
    title?: string;
    tasks?: Array<TaskType>;
    date?: string;
    deleteTask: (id: number) => void
    filterTasks: (status: FilterType) => void
};

const Todolist = ({title, tasks, date, deleteTask, filterTasks}: TodolistProps) => {
    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

            {!tasks || tasks.length === 0 ? (<span>Таких задач нет</span>) : (<ul>
                {tasks &&
                    tasks.map((task) => {
                        return (
                            <li key={task.id}>
                                <input type="checkbox" defaultChecked={task.isDone}/> <span>{task.title}</span>
                                <Button title={"x"} callback={() => deleteTask(task.id)}/>
                            </li>
                        );
                    })}
            </ul>)}
            <div>
                {date}
            </div>
            <div>
                <Button title={"All"} callback={() => filterTasks(Enum.all)}/>
                <Button title={"Active"} callback={() => filterTasks(Enum.active)}/>
                <Button title={"Completed"} callback={() => filterTasks(Enum.completed)}/>
            </div>
        </div>
    );
};

Todolist.propTypes = {};

export default Todolist;
